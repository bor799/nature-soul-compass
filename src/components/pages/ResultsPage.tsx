import { useQuizStore } from '../../store/quizStore';
import { Card } from '../ui/Card';
import { RatingStars } from '../ui/RatingStars';
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
      navigator.share({
        title: '山野灵感罗盘 - 我的徒步推荐',
        text: `我是${result.mbti_type}型，推荐我去的徒步目的地是：${result.recommendations[0] ? getDestinationById(result.recommendations[0].destination_id)?.name : ''}`,
        url: window.location.href
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* 性格总结 */}
      <Card className="text-center">
        <div className="mb-4">
          <div className="inline-block px-4 py-2 bg-forest-100 text-forest-800 rounded-full text-sm font-medium">
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

        <div className="space-y-4">
          {result.recommendations.slice(0, 5).map((rec, index) => {
            const dest = getDestinationById(rec.destination_id);
            if (!dest) return null;

            return (
              <Card key={rec.destination_id} className="p-0 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {index === 0 && (
                          <span className="px-2 py-1 bg-forest-600 text-white text-xs font-medium rounded">
                            最佳匹配
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
                    <div className="text-right">
                      <div className="text-2xl font-bold text-forest-600">
                        {Math.round(rec.total_score * 100)}%
                      </div>
                      <div className="text-xs text-earth-500">匹配度</div>
                    </div>
                  </div>

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

                  {/* 匹配理由 */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-earth-700 mb-2">
                      ✨ 为什么推荐
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
              </Card>
            );
          })}
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="flex gap-3">
        <Button onClick={handleReset} variant="outline" fullWidth>
          重新测试
        </Button>
        <Button onClick={handleShare} fullWidth>
          分享结果
        </Button>
      </div>
    </div>
  );
}
