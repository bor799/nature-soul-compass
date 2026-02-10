import { useQuizStore } from '../../store/quizStore';
import { Card } from '../ui/Card';
import { RatingStars } from '../ui/RatingStars';
import { CircularProgress } from '../ui/CircularProgress';
import { TouchSafeButton } from '../ui/TouchSafeButton';
import { ForestBackground } from '../ui/ForestBackground';
import { FadeIn, ScaleIn, StaggerIn } from '../layout/PageTransition';
import { CenteredCard } from '../layout/CenteredCard';
import destinationsData from '../../../data/destinations.json';
import { motion } from 'framer-motion';

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
    <ForestBackground variant="results">
      <CenteredCard maxWidth="lg">
        <div className="space-y-4 sm:space-y-6">
          {/* 性格总结 */}
          <ScaleIn>
            <Card className="text-center bg-white/90 backdrop-blur-sm border-amber-200 overflow-hidden relative">
              {/* 光晕效果 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-amber-300 rounded-full blur-3xl opacity-30" />

              <div className="relative z-10 p-6">
                <motion.div
                  className="mb-4"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="inline-block px-5 py-2 bg-gradient-to-r from-forest-600 to-forest-500 text-white rounded-full text-base font-semibold shadow-forest">
                    {result.mbti_type}
                  </div>
                </motion.div>
                <h2 className="text-2xl font-bold text-earth-900 mb-2">
                  {result.personality_summary.title}
                </h2>
                <p className="text-earth-700 mb-4 text-base">
                  {result.personality_summary.description}
                </p>
                <div className="inline-block px-4 py-2 bg-amber-100 text-earth-800 rounded-lg text-sm font-medium border border-amber-200">
                  {result.personality_summary.hiking_style}
                </div>
              </div>
            </Card>
          </ScaleIn>

          {/* 推荐结果 */}
          <FadeIn delay={0.2}>
            <h3 className="text-xl font-bold text-earth-900 mb-4 flex items-center gap-2">
              <span>🏆</span>
              <span>为你推荐 {result.recommendations.length} 条路线</span>
            </h3>
          </FadeIn>

          <div className="space-y-5">
            {result.recommendations.slice(0, 5).map((rec, index) => {
              const dest = getDestinationById(rec.destination_id);
              if (!dest) return null;

              const matchPercent = Math.round(rec.total_score * 100);
              const recommendation = dest.recommendation;

              return (
                <StaggerIn key={rec.destination_id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <Card variant="elevated" className="p-0 overflow-hidden bg-white/95 backdrop-blur-sm">
                      <div className="relative">
                        {/* 最佳匹配徽章 */}
                        {index === 0 && (
                          <motion.div
                            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400"
                            animate={{
                              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                            style={{ backgroundSize: '200% 200%' }}
                          />
                        )}

                        <div className="p-5">
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2 flex-wrap">
                                {index === 0 && (
                                  <motion.span
                                    className="px-2 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold rounded shadow-sm"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                  >
                                    ⭐ 最佳匹配
                                  </motion.span>
                                )}
                                {recommendation && recommendation.score >= 9.0 && (
                                  <span className="px-2 py-1 bg-sunshine-orange text-white text-xs font-semibold rounded">
                                    超赞推荐
                                  </span>
                                )}
                                <h4 className="text-lg font-bold text-earth-900">
                                  {dest.name}
                                </h4>
                              </div>
                              <p className="text-earth-600 text-sm">
                                {dest.location} · {dest.duration_days} 天
                              </p>
                            </div>
                            <div className="flex flex-col items-center flex-shrink-0">
                              <CircularProgress value={matchPercent} size={80} />
                            </div>
                          </div>

                          {/* 体验亮点 */}
                          {recommendation && recommendation.experience && (
                            <motion.div
                              className="mb-4 p-3 bg-gradient-to-r from-green-50 to-amber-50 rounded-xl border-l-4 border-forest-500"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              <div className="text-sm font-semibold text-forest-800 mb-1 flex items-center gap-2">
                                <motion.span
                                  animate={{ rotate: [0, 10, -10, 0] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  ✨
                                </motion.span>
                                <span>体验亮点</span>
                              </div>
                              <p className="text-sm text-earth-700 italic">{recommendation.experience}</p>
                            </motion.div>
                          )}

                          {/* 详细推荐理由 - 可展开 */}
                          {recommendation && recommendation.reason && (
                            <details className="mb-4 group">
                              <summary className="cursor-pointer text-earth-800 font-semibold flex items-center gap-2 hover:text-forest-600 transition-colors touch-safe">
                                <span>🤔</span>
                                <span>为什么适合你？</span>
                                <span className="ml-auto transition-transform group-open:rotate-180">
                                  ▼
                                </span>
                              </summary>
                              <motion.p
                                className="mt-3 text-sm text-earth-700 leading-relaxed bg-earth-50 p-3 rounded-lg"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                transition={{ duration: 0.3 }}
                              >
                                {recommendation.reason}
                              </motion.p>
                            </details>
                          )}

                          {/* 关键指标 */}
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                            <div className="bg-earth-50 rounded-lg p-2 text-center">
                              <div className="text-xs text-earth-500 mb-1">难度</div>
                              <RatingStars rating={dest.difficulty_level} size="sm" />
                            </div>
                            <div className="bg-earth-50 rounded-lg p-2 text-center">
                              <div className="text-xs text-earth-500 mb-1">出片率</div>
                              <RatingStars rating={dest.instagrammability} size="sm" />
                            </div>
                            <div className="bg-earth-50 rounded-lg p-2 text-center">
                              <div className="text-xs text-earth-500 mb-1">卫生</div>
                              <RatingStars rating={dest.hygiene_score} size="sm" />
                            </div>
                            <div className="bg-earth-50 rounded-lg p-2 text-center">
                              <div className="text-xs text-earth-500 mb-1">成熟度</div>
                              <RatingStars rating={dest.maturation} size="sm" />
                            </div>
                          </div>

                          {/* 温馨提示 */}
                          {rec.warnings.length > 0 && (
                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                              <div className="text-sm font-semibold text-amber-800 mb-2">
                                💡 温馨提示
                              </div>
                              <ul className="space-y-1">
                                {rec.warnings.map((warning, i) => (
                                  <li key={i} className="text-xs text-amber-700">
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
                                className="px-2 py-1 bg-earth-100 text-earth-700 text-xs rounded-md font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </StaggerIn>
              );
            })}
          </div>

          {/* 操作按钮 */}
          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <TouchSafeButton
                onPress={handleReset}
                variant="outline"
                size="md"
                fullWidth
              >
                重新测试
              </TouchSafeButton>
              <TouchSafeButton
                onPress={handleShare}
                variant="primary"
                size="md"
                fullWidth
                icon={<span className="text-xl">📤</span>}
              >
                分享结果
              </TouchSafeButton>
            </div>
          </FadeIn>
        </div>
      </CenteredCard>
    </ForestBackground>
  );
}
