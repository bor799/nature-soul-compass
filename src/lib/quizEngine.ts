import type { MBTIScore, MBTIType, MBTIDimension } from './types';

/**
 * 计算 MBTI 类型
 * @param answers - 答案映射：问题ID -> 选择的维度值
 * @returns MBTI 类型（如 'ISFJ'）
 */
export function calculateMBTIType(answers: Map<string, MBTIDimension>): MBTIType {
  const scores: MBTIScore = {
    I: 0, E: 0,
    N: 0, S: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  // 统计每个维度的得分
  answers.forEach((value) => {
    scores[value]++;
  });

  // 确定每个维度的结果
  const ie = scores.I >= scores.E ? 'I' : 'E';
  const ns = scores.N >= scores.S ? 'N' : 'S';  // 修复：正确比较 N 和 S 得分
  const tf = scores.T >= scores.F ? 'T' : 'F';
  const jp = scores.J >= scores.P ? 'J' : 'P';

  return `${ie}${ns}${tf}${jp}` as MBTIType;
}

/**
 * 计算 MBTI 得分（用于推荐算法）
 * @param answers - 答案映射
 * @returns MBTI 得分对象
 */
export function calculateMBTIScores(answers: Map<string, MBTIDimension>): MBTIScore {
  const scores: MBTIScore = {
    I: 0, E: 0,
    N: 0, S: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  answers.forEach((value) => {
    scores[value]++;
  });

  return scores;
}
