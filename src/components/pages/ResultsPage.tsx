import { useQuizStore } from '../../store/quizStore';
import { Card } from '../ui/Card';
import { RatingStars } from '../ui/RatingStars';
import { CircularProgress } from '../ui/CircularProgress';
import { Button } from '../ui/Button';
import destinationsData from '../../../data/destinations.json';

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
    <div className="space-y-8">
      {/* 性格总结 */}
      <Card className="text-center animate-fade-in" animation="fade-in">
        <div className="mb-4">
          <div className="inline-block px-4 py-2 bg-gradient-forest text-white rounded-full text-sm font-medium shadow-glow-forest">
            {result.mbti_type}
          </div>
        </div>
        <h2 className="text-2xl font-bold text-earth-900 mb-2">
          {result.personality_summary.title}
        </h2>
        <p className="text-earth-600 mb-4">
          {result.personality_summary.description}
        </p>
        <div className="inline-block px-4 py-2 bg-earth-100 text-earth-700 rounded-lg text-sm">
          {result.personality_summary.hiking_style}
        </div>
      </Card>

      {/* 推荐结果 */}
      <div>
        <h3 className="text-xl font-bold text-earth-900 mb-4">
          为你推荐 {result.recommendations.length} 条路线
        </h3>

        <div className="space-y-6">
          {result.recommendations.slice(0, 5).map((rec, index) => {
            const dest = getDestinationById(rec.destination_id);
            if (!dest) return null;

            const matchPercent = Math.round(rec.total_score * 100);
            const recommendation = dest.recommendation;

            return (
              <Card key={rec.destination_id} variant="elevated" className="p-0 overflow-hidden animate-slide-up" animation="slide-up">
                <div className="relative">
                  {/* 推荐指数徽章 */}
                  {recommendation && (
                    <div className="absolute top-4 right-4 z-10 bg-gradient-sky text-white px-4 py-2 rounded-full shadow-glow">
                      <div className="text-2xl font-bold">{recommendation.score}</div>
                      <div className="text-xs opacity-90">推荐指数</div>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          {index === 0 && (
                            <span className="px-2 py-1 bg-gradient-forest text-white text-xs font-medium rounded shadow-glow-forest">
                              最佳匹配
                            </span>
                          )}
                          {recommendation && recommendation.score >= 9.0 && (
                            <span className="px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded">
                              超赞推荐
                            </span>
                          )}
                          <h4 className="text-xl font-bold text-earth-900">
                            {dest.name}
                          </h4>
                        </div>
                        <p className="text-earth-600 text-sm">
                          {dest.location} · {dest.duration_days} 天
                        </p>
                      </div>
                      <div className="flex flex-col items-center">
                        <CircularProgress value={matchPercent} size={80} />
                      </div>
                    </div>

                    {/* 体验亮点 */}
                    {recommendation && recommendation.experience && (
                      <div className="my-4 p-4 bg-gradient-to-r from-forest-50 to-earth-50 rounded-lg border-l-4 border-forest-500 animate-fade-in">
                        <div className="text-sm font-medium text-forest-800 mb-1 flex items-center gap-2">
                          <span>✨</span>
                          <span>体验亮点</span>
                        </div>
                        <p className="text-sm text-earth-700 italic">{recommendation.experience}</p>
                      </div>
                    )}

                    {/* 详细推荐理由 - 可展开 */}
                    {recommendation && recommendation.reason && (
                      <details className="mb-4 group">
                        <summary className="cursor-pointer text-earth-700 font-medium flex items-center gap-2 hover:text-forest-600 transition-colors">
                          <span>🤔</span>
                          <span>为什么适合你？</span>
                          <span className="group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-3 text-sm text-earth-600 leading-relaxed bg-earth-50 p-3 rounded-lg">
                          {recommendation.reason}
                        </p>
                      </details>
                    )}

                    {/* 适合人群标签 */}
                    {recommendation && recommendation.best_for && recommendation.best_for.length > 0 && (
                      <div className="mb-4">
                        <div className="text-sm font-medium text-earth-700 mb-2">👥 适合人群</div>
                        <div className="flex flex-wrap gap-2">
                          {recommendation.best_for.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-sky-100 text-sky-700 text-xs rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 关键指标 */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-xs text-earth-500 mb-1">难度</div>
                        <RatingStars rating={dest.difficulty_level} size="sm" />
                      </div>
                      <div>
                        <div className="text-xs text-earth-500 mb-1">出片率</div>
                        <RatingStars rating={dest.instagrammability} size="sm" />
                      </div>
                      <div>
                        <div className="text-xs text-earth-500 mb-1">卫生</div>
                        <RatingStars rating={dest.hygiene_score} size="sm" />
                      </div>
                      <div>
                        <div className="text-xs text-earth-500 mb-1">成熟度</div>
                        <RatingStars rating={dest.maturation} size="sm" />
                      </div>
                    </div>

                    {/* 系统匹配理由 */}
                    <div className="mb-4">
                      <div className="text-sm font-medium text-earth-700 mb-2">
                        💝 匹配分析
                      </div>
                      <ul className="space-y-1">
                        {rec.match_reason.map((reason, i) => (
                          <li key={i} className="text-sm text-earth-600 flex items-start gap-2">
                            <span className="text-forest-600 mt-0.5">•</span>
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 温馨提示 */}
                    {rec.warnings.length > 0 && (
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                        <div className="text-sm font-medium text-amber-800 mb-2">
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

                    {/* 实用贴士 - 可展开 */}
                    {recommendation && recommendation.tips && recommendation.tips.length > 0 && (
                      <details className="mt-4 group">
                        <summary className="cursor-pointer text-earth-700 font-medium flex items-center gap-2 hover:text-forest-600 transition-colors">
                          <span>📝</span>
                          <span>实用贴士</span>
                          <span className="group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <ul className="mt-3 space-y-2">
                          {recommendation.tips.map((tip, i) => (
                            <li key={i} className="text-xs text-earth-600 bg-sky-50 p-2 rounded flex items-start gap-2">
                              <span className="text-sky-600">✓</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </details>
                    )}

                    {/* 标签 */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {dest.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-earth-100 text-earth-700 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button onClick={handleReset} variant="outline" fullWidth>
          重新测试
        </Button>
        <Button onClick={handleShare} variant="gradient" fullWidth>
          分享结果
        </Button>
      </div>
    </div>
  );
}
