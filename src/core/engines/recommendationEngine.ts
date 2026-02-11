import type { Destination, MBTIScore, SurvivalTolerance, RecommendationScore, QuizResult, MBTIType } from '@/shared/types';
import { mbtiDescriptions } from '@/data/questions/mbtiQuestions';

/**
 * 计算用户与目的地的 MBTI 契合度
 * @param userMBTI - 用户的 MBTI 类型
 * @param userScores - 用户的 MBTI 得分
 * @param destinationAffinity - 目的地的 MBTI 亲和度
 * @returns 契合度分数 (0-1)
 */
function calculateMBTIMatch(
  userMBTI: MBTIType,
  userScores: MBTIScore,
  destinationAffinity: { [key: string]: number }
): number {
  // 获取用户每个维度的得分占比
  const totalIEScore = userScores.I + userScores.E;
  const totalNSScore = userScores.N + userScores.S;
  const totalTFScore = userScores.T + userScores.F;
  const totalJPScore = userScores.J + userScores.P;

  const ieRatio = totalIEScore > 0 ? userScores.I / totalIEScore : 0.5;
  const nsRatio = totalNSScore > 0 ? userScores.N / totalNSScore : 0.5;
  const tfRatio = totalTFScore > 0 ? userScores.T / totalTFScore : 0.5;
  const jpRatio = totalJPScore > 0 ? userScores.J / totalJPScore : 0.5;

  // 用户每个维度的倾向
  const userI = userMBTI[0] === 'I' ? ieRatio : 1 - ieRatio;
  const userN = userMBTI[1] === 'N' ? nsRatio : 1 - nsRatio;
  const userT = userMBTI[2] === 'T' ? tfRatio : 1 - tfRatio;
  const userJ = userMBTI[3] === 'J' ? jpRatio : 1 - jpRatio;

  // 计算与目的地亲和度的匹配度
  const iMatch = 1 - Math.abs(userI - destinationAffinity.I);
  const eMatch = 1 - Math.abs((1 - userI) - destinationAffinity.E);
  const nMatch = 1 - Math.abs(userN - destinationAffinity.N);
  const sMatch = 1 - Math.abs((1 - userN) - destinationAffinity.S);
  const tMatch = 1 - Math.abs(userT - destinationAffinity.T);
  const fMatch = 1 - Math.abs((1 - userT) - destinationAffinity.F);
  const jMatch = 1 - Math.abs(userJ - destinationAffinity.J);
  const pMatch = 1 - Math.abs((1 - userJ) - destinationAffinity.P);

  // 取平均值
  return (iMatch + nMatch + tMatch + jMatch) / 4;
}

/**
 * 计算生存要求差距（用于混合过滤模式）
 * @param userTolerance - 用户耐受度
 * @param requirements - 目的地最低要求
 * @returns 差距对象（负数表示不满足，正数或0表示满足）
 */
function calculateSurvivalGap(
  userTolerance: SurvivalTolerance,
  requirements: { tolerance_toilet: number; tolerance_shower: number; tolerance_bugs: number; physical_fitness: number }
): { toilet: number; shower: number; bugs: number; fitness: number; total: number } {
  const toiletGap = requirements.tolerance_toilet - userTolerance.toilet;
  const showerGap = requirements.tolerance_shower - userTolerance.shower;
  const bugsGap = requirements.tolerance_bugs - userTolerance.bugs;
  const fitnessGap = requirements.physical_fitness - userTolerance.fitness;

  // 只计算正差距（不满足的部分）
  const total = Math.max(0, toiletGap) + Math.max(0, showerGap) + Math.max(0, bugsGap) + Math.max(0, fitnessGap);

  return {
    toilet: toiletGap,
    shower: showerGap,
    bugs: bugsGap,
    fitness: fitnessGap,
    total
  };
}

/**
 * 检查生存底线是否满足要求（保留用于兼容）
 * @param userTolerance - 用户耐受度
 * @param requirements - 目的地最低要求
 * @returns 是否满足要求
 */
function checkSurvivalRequirements(
  userTolerance: SurvivalTolerance,
  requirements: { tolerance_toilet: number; tolerance_shower: number; tolerance_bugs: number; physical_fitness: number }
): boolean {
  return (
    userTolerance.toilet >= requirements.tolerance_toilet &&
    userTolerance.shower >= requirements.tolerance_shower &&
    userTolerance.bugs >= requirements.tolerance_bugs &&
    userTolerance.fitness >= requirements.physical_fitness
  );
}

/**
 * 计算生存底线匹配分数
 * @param userTolerance - 用户耐受度
 * @param requirements - 目的地最低要求
 * @returns 匹配分数 (0-1)
 */
function calculateSurvivalMatch(
  userTolerance: SurvivalTolerance,
  requirements: { tolerance_toilet: number; tolerance_shower: number; tolerance_bugs: number; physical_fitness: number }
): number {
  const toiletMatch = Math.min(1, userTolerance.toilet / requirements.tolerance_toilet);
  const showerMatch = Math.min(1, userTolerance.shower / requirements.tolerance_shower);
  const bugsMatch = Math.min(1, userTolerance.bugs / requirements.tolerance_bugs);
  const fitnessMatch = Math.min(1, userTolerance.fitness / requirements.physical_fitness);

  return (toiletMatch + showerMatch + bugsMatch + fitnessMatch) / 4;
}

/**
 * 生成匹配理由
 */
function generateMatchReasons(
  destination: Destination,
  mbtiMatch: number,
  survivalMatch: number,
  userMBTI: MBTIType
): string[] {
  const reasons: string[] = [];

  // MBTI 匹配理由
  if (mbtiMatch > 0.7) {
    reasons.push(`与你的${userMBTI}性格高度契合`);
  } else if (mbtiMatch > 0.5) {
    reasons.push(`与你的性格特质较为匹配`);
  }

  // 路线成熟度
  if (destination.maturation >= 4) {
    reasons.push('路线成熟，设施完善');
  }

  // 出片率
  if (destination.instagrammability >= 4) {
    reasons.push('风景绝美，出片率极高');
  }

  // 卫生条件
  if (destination.hygiene_score >= 4) {
    reasons.push('住宿卫生条件好');
  }

  // 姨妈友好
  if (destination.period_friendliness >= 4) {
    reasons.push('对女性友好度高');
  }

  // 难度适中
  if (destination.difficulty_level <= 2) {
    reasons.push('难度适中，适合进阶');
  }

  // 人少景美
  if (destination.crowd_level <= 2 && destination.instagrammability >= 4) {
    reasons.push('人少景美，避开人群');
  }

  return reasons.length > 0 ? reasons : ['值得一试的路线'];
}

/**
 * 生成警告信息
 */
function generateWarnings(
  destination: Destination,
  userTolerance: SurvivalTolerance
): string[] {
  const warnings: string[] = [];

  if (userTolerance.toilet < destination.survival_requirements.tolerance_toilet + 1) {
    warnings.push('如厕条件较为基础');
  }

  if (userTolerance.shower < destination.survival_requirements.tolerance_shower + 1) {
    warnings.push('可能无法每天洗澡');
  }

  if (userTolerance.bugs < destination.survival_requirements.tolerance_bugs + 1) {
    warnings.push('山里可能有蚊虫');
  }

  if (userTolerance.fitness < destination.survival_requirements.physical_fitness + 1) {
    warnings.push('需要一定体能基础');
  }

  if (destination.social_pressure >= 4) {
    warnings.push('社交压力较高，可能会遇到其他驴友');
  }

  if (destination.crowd_level >= 4) {
    warnings.push('旺季可能较为拥挤');
  }

  return warnings;
}

/**
 * 计算推荐分数
 * @param destinations - 所有目的地
 * @param userMBTI - 用户 MBTI 类型
 * @param userScores - 用户 MBTI 得分
 * @param userTolerance - 用户生存耐受度
 * @returns 推荐结果列表
 */
export function calculateRecommendations(
  destinations: Destination[],
  userMBTI: MBTIType,
  userScores: MBTIScore,
  userTolerance: SurvivalTolerance
): RecommendationScore[] {
  const scores: RecommendationScore[] = [];

  for (const destination of destinations) {
    // 混合过滤模式：计算生存要求差距
    const survivalGap = calculateSurvivalGap(userTolerance, destination.survival_requirements);

    // 严重不满足（差距 > 1）：直接排除
    if (survivalGap.total > 1) {
      continue;
    }

    // 轻微不满足（差距 ≤ 1）：降权处理（每差距 1 级扣 30% 分）
    // 这个惩罚会在总分计算时应用

    // 1. MBTI 契合度 (40%)
    const mbtiMatch = calculateMBTIMatch(userMBTI, userScores, destination.mbti_affinity as unknown as { [key: string]: number });

    // 2. 生存底线匹配 (30%)
    const survivalMatch = calculateSurvivalMatch(userTolerance, destination.survival_requirements);

    // 3. 路线成熟度加成 (15%)
    const maturationBonus = destination.maturation / 5;

    // 4. 出片率加成 (10%)
    const instagramBonus = destination.instagrammability / 5;

    // 5. 社交压力惩罚 (5%)
    // 如果社交压力高且用户体能焦虑，给予惩罚
    let socialPenalty = 0;
    if (destination.social_pressure >= 4 && userTolerance.fitness <= 2) {
      socialPenalty = 0.2; // -20%
    } else {
      socialPenalty = (5 - destination.social_pressure) / 25; // 反向加分
    }

    // 计算总分
    let totalScore =
      mbtiMatch * 0.4 +
      survivalMatch * 0.3 +
      maturationBonus * 0.15 +
      instagramBonus * 0.1 +
      socialPenalty * 0.05;

    // 应用生存差距降权：轻微不满足时每差距 1 级扣 30% 分
    if (survivalGap.total > 0) {
      const penalty = survivalGap.total * 0.3;
      totalScore *= (1 - penalty);
    }

    scores.push({
      destination_id: destination.id,
      total_score: Math.round(totalScore * 1000) / 1000,
      mbti_match: Math.round(mbtiMatch * 1000) / 1000,
      survival_match: Math.round(survivalMatch * 1000) / 1000,
      maturation_bonus: Math.round(maturationBonus * 1000) / 1000,
      instagram_bonus: Math.round(instagramBonus * 1000) / 1000,
      social_penalty: Math.round(socialPenalty * 1000) / 1000,
      match_reason: generateMatchReasons(destination, mbtiMatch, survivalMatch, userMBTI),
      warnings: generateWarnings(destination, userTolerance)
    });
  }

  // 按总分降序排序
  scores.sort((a, b) => b.total_score - a.total_score);

  return scores;
}

/**
 * 生成完整的测试结果
 */
export function generateQuizResult(
  destinations: Destination[],
  userMBTI: MBTIType,
  userScores: MBTIScore,
  userTolerance: SurvivalTolerance
): QuizResult {
  const recommendations = calculateRecommendations(destinations, userMBTI, userScores, userTolerance);

  const personalityInfo = mbtiDescriptions[userMBTI] || {
    title: '独特的探索者',
    description: '你有自己独特的徒步风格',
    hiking_style: '自由探索'
  };

  return {
    mbti_type: userMBTI,
    mbti_scores: userScores,
    survival_tolerance: userTolerance,
    recommendations,
    personality_summary: personalityInfo
  };
}
