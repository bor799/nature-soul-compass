import { useQuizStore } from '@/core/store/quizStore';
import { ForestLayout } from '@/components/layout/ForestLayout';
import { GlassCard } from '@/components/ui/GlassCard';
import { MagicButton } from '@/components/ui/MagicButton';
import { RatingBar } from '@/components/ui/RatingBar';
import { CircularProgress } from '@/components/ui/CircularProgress';
import destinationsData from '@/data/destinations/destinations.json';
import { motion } from 'framer-motion';
import {
  TrophyIcon,
  SparklesIcon,
  ShareIcon,
  LightBulbIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';

const destinations = destinationsData.destinations;

export function ResultsPage() {
  const { result, reset } = useQuizStore();

  if (!result) return null;

  const getDestinationById = (id: string) => {
    return destinations.find((d) => d.id === id);
  };

  const handleReset = () => {
    reset();
  };

  const handleShare = () => {
    if (navigator.share) {
      const topDest = result.recommendations[0];
      const dest = getDestinationById(topDest.destination_id);
      const shareText = dest?.recommendation
        ? `我是${result.mbti_type}型，推荐我去的徒步目的地是：${dest.name}（推荐指数 ${dest.recommendation.score}/10）`
        : `我是${result.mbti_type}型，推荐我去的徒步目的地是：${dest?.name}`;

      navigator.share({
        title: '山野灵感罗盘 - 我的徒步推荐',
        text: shareText,
        url: window.location.href
      });
    }
  };

  return (
    <ForestLayout variant="results">
      <div className="space-y-5">
        {/* 性格总结 */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <GlassCard className="text-center p-6">
            {/* 光晕效果 */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-magic-gold rounded-full blur-3xl opacity-20 pointer-events-none" />

            <div className="relative z-10">
              <motion.div
                className="mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="inline-block px-5 py-2 bg-magic-gold text-forest-900 rounded-full text-base font-semibold">
                  {result.mbti_type}
                </div>
              </motion.div>
              <h2 className="text-xl font-serif font-bold text-cream-50 mb-2">
                {result.personality_summary.title}
              </h2>
              <p className="text-cream-100 opacity-90 mb-4 text-base">
                {result.personality_summary.description}
              </p>
              <div className="inline-block px-4 py-2 bg-magic-gold/20 text-magic-gold rounded-lg text-sm font-medium border border-magic-gold/30">
                {result.personality_summary.hiking_style}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* 推荐结果 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-lg font-serif font-bold text-cream-50 mb-4 flex items-center justify-center gap-2">
            <TrophyIcon className="w-5 h-5 text-magic-gold" />
            <span>为你推荐 {result.recommendations.length} 条路线</span>
          </h3>
        </motion.div>

        <div className="space-y-4">
          {result.recommendations.slice(0, 5).map((rec, index) => {
            const dest = getDestinationById(rec.destination_id);
            if (!dest) return null;

            const matchPercent = Math.round(rec.total_score * 100);
            const recommendation = dest.recommendation;

            return (
              <motion.div
                key={rec.destination_id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <GlassCard className="p-5">
                  <div className="space-y-4">
                    {/* 最佳匹配徽章 */}
                    {index === 0 && (
                      <motion.div
                        className="flex justify-center mb-2"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-magic-gold text-forest-900 text-xs font-semibold rounded-full">
                          <SparklesIcon className="w-3 h-3" />
                          <span>最佳匹配</span>
                        </span>
                      </motion.div>
                    )}

                    {/* 标题区域 */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h4 className="text-lg font-serif font-bold text-cream-50">
                            {dest.name}
                          </h4>
                          {recommendation && recommendation.score >= 9.0 && (
                            <span className="px-2 py-0.5 bg-magic-gold text-forest-900 text-xs font-semibold rounded">
                              超赞
                            </span>
                          )}
                        </div>
                        <p className="text-cream-100 opacity-80 text-sm">
                          {dest.location} · {dest.duration_days} 天
                        </p>
                      </div>
                      <div className="flex flex-col items-center">
                        <CircularProgress value={matchPercent} size={70} />
                      </div>
                    </div>

                    {/* 体验亮点 */}
                    {recommendation && recommendation.experience && (
                      <motion.div
                        className="p-3 bg-magic-gold/10 rounded-xl border-l-4 border-magic-gold"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="text-sm font-semibold text-magic-gold mb-1 flex items-center gap-2">
                          <motion.span
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-base"
                          >
                            <SparklesIcon className="w-4 h-4" />
                          </motion.span>
                          <span>体验亮点</span>
                        </div>
                        <p className="text-sm text-cream-100 opacity-90">{recommendation.experience}</p>
                      </motion.div>
                    )}

                    {/* 详细推荐理由 */}
                    {recommendation && recommendation.reason && (
                      <details className="group">
                        <summary className="cursor-pointer text-cream-50 font-semibold flex items-center justify-center gap-2 hover:text-magic-gold transition-colors">
                          <InformationCircleIcon className="w-5 h-5" />
                          <span>为什么适合你？</span>
                          <span className="ml-auto transition-transform group-open:rotate-180">
                            ▼
                          </span>
                        </summary>
                        <motion.p
                          className="mt-3 text-sm text-cream-100 opacity-90 leading-relaxed bg-white/5 p-3 rounded-lg"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                        >
                          {recommendation.reason}
                        </motion.p>
                      </details>
                    )}

                    {/* 关键指标 */}
                    <div className="flex flex-col gap-3">
                      <RatingBar
                        value={dest.difficulty_level}
                        max={5}
                        label="难度等级"
                        color="primary"
                        size="sm"
                      />
                      <RatingBar
                        value={dest.instagrammability}
                        max={5}
                        label="出片率"
                        color="accent"
                        size="sm"
                      />
                      <RatingBar
                        value={dest.hygiene_score}
                        max={5}
                        label="卫生评分"
                        color="leaf"
                        size="sm"
                      />
                      <RatingBar
                        value={dest.maturation}
                        max={5}
                        label="成熟度"
                        color="sky"
                        size="sm"
                      />
                    </div>

                    {/* 温馨提示 */}
                    {rec.warnings.length > 0 && (
                      <div className="bg-magic-gold/10 border border-magic-gold/30 rounded-lg p-3">
                        <div className="text-sm font-semibold text-magic-gold mb-2 flex items-center gap-2">
                          <LightBulbIcon className="w-4 h-4" />
                          <span>温馨提示</span>
                        </div>
                        <ul className="space-y-1">
                          {rec.warnings.map((warning, i) => (
                            <li key={i} className="text-xs text-cream-100 opacity-90">
                              • {warning}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* 标签 */}
                    <div className="flex flex-wrap gap-2">
                      {dest.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white/10 text-cream-100 text-xs rounded-md font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* 操作按钮 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col gap-3 pt-2"
        >
          <MagicButton onClick={handleReset} variant="primary" className="w-full">
            重新测试
          </MagicButton>
          <MagicButton
            onClick={handleShare}
            variant="primary"
            className="w-full"
          >
            <ShareIcon className="w-5 h-5" />
            分享结果
          </MagicButton>
        </motion.div>
      </div>
    </ForestLayout>
  );
}
