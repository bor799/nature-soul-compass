import React from 'react';
import { Destination } from '../types';
import GlassCard from './GlassCard';
import MagicButton from './MagicButton';

interface ResultsProps {
  recommendations: Destination[];
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ recommendations, onRestart }) => {
  const topPick = recommendations[0];
  const others = recommendations.slice(1); // Show all remaining recommendations

  if (!topPick) {
    return (
      <div className="flex-1 flex flex-col justify-center items-center p-6 text-center z-20">
        <h2 className="text-2xl font-serif text-cream-50 mb-4">哎呀，太挑剔啦！</h2>
        <p className="text-white/70 mb-8">你的生存底线（特别是厕所或洗澡）可能高于所有路线的配置。试着放宽一点点标准？</p>
        <MagicButton onClick={onRestart}>重新测试</MagicButton>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col py-8 px-4 pb-safe space-y-8 animate-slideUp z-20">
      
      <div className="text-center space-y-2">
        <span className="text-magic-gold text-sm font-serif tracking-widest uppercase border-b border-magic-gold/30 pb-1">
          Your Soul Destination
        </span>
        <h1 className="text-3xl font-serif font-bold text-cream-50">
          灵感罗盘已定位
        </h1>
        <p className="text-white/60 text-sm">
          基于你的MBTI与生存底线，这是最适合你的山野。
        </p>
      </div>

      {/* Top Pick Card */}
      <div className="relative group">
        <div className="absolute inset-0 bg-magic-gold rounded-2xl blur-[20px] opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
        <GlassCard className="relative overflow-hidden p-0 border-magic-gold/50 border-2">
            <div className="h-64 w-full overflow-hidden relative">
                <img 
                  src={topPick.image} 
                  alt={topPick.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-magic-gold text-xs font-bold border border-magic-gold/30">
                  98% 契合度
                </div>
                <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-forest-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-2xl font-serif font-bold text-white shadow-black drop-shadow-md leading-tight mb-1">{topPick.name}</h2>
                  <p className="text-white/80 text-sm flex items-center gap-1">📍 {topPick.location}</p>
                </div>
            </div>
            
            <div className="p-6 pt-4">
                <div className="flex flex-wrap gap-2 mb-4">
                    {topPick.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 rounded-md bg-white/10 text-xs text-magic-glow">#{tag}</span>
                    ))}
                </div>
                
                <p className="text-cream-50/90 text-sm leading-relaxed mb-4 font-light">
                    {topPick.recommendation_data.reason}
                </p>

                <div className="bg-white/5 rounded-lg p-3 mb-4 border border-white/5">
                  <div className="text-xs text-magic-gold uppercase tracking-wider mb-2">Highlights</div>
                  <ul className="text-sm text-white/70 space-y-1 list-disc list-inside">
                    {topPick.highlights.slice(0, 3).map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                    <div className="bg-white/5 rounded-lg p-2">
                        <div className="text-[10px] text-white/50 mb-1">出片指数</div>
                        <div className="text-magic-gold text-xs">{"★".repeat(Math.round(topPick.instagrammability))}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2">
                        <div className="text-[10px] text-white/50 mb-1">卫生友好</div>
                        <div className="text-magic-gold text-xs">{"★".repeat(Math.round(topPick.hygiene_score))}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2">
                        <div className="text-[10px] text-white/50 mb-1">成熟度</div>
                        <div className="text-magic-gold text-xs">{"★".repeat(Math.round(topPick.maturation))}</div>
                    </div>
                </div>

                <div className="space-y-2 mb-6">
                   <div className="text-xs text-white/40">最佳季节: {topPick.best_season.join(' / ')}</div>
                   <div className="text-xs text-white/40">小贴士: {topPick.recommendation_data.tips[0]}</div>
                </div>

                <MagicButton fullWidth variant="secondary">
                    查看详细攻略
                </MagicButton>
            </div>
        </GlassCard>
      </div>

      {/* Other Suggestions */}
      {others.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-serif text-white/80 pl-2 border-l-2 border-magic-gold">其他备选方案 ({others.length})</h3>
          {others.map(dest => (
             <GlassCard key={dest.id} className="flex gap-4 p-3 hover:bg-white/15 transition-colors cursor-pointer group">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 relative border border-white/10 shadow-sm">
                    <img 
                      src={dest.image} 
                      alt={dest.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-cream-50 text-base truncate pr-2">{dest.name}</h4>
                      {/* Optional: Show match score if available */}
                      {(dest as any).matchScore && (
                        <span className="text-[10px] bg-forest-900 px-1.5 py-0.5 rounded text-magic-gold border border-magic-gold/30 whitespace-nowrap">
                          {((dest as any).matchScore / 100 * 100).toFixed(0)}%
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-white/60 mb-2 truncate">📍 {dest.location}</p>
                    <div className="flex gap-2 overflow-hidden flex-wrap h-6">
                         {dest.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-[10px] text-magic-glow bg-white/5 px-1.5 py-0.5 rounded whitespace-nowrap border border-white/5">#{tag}</span>
                         ))}
                    </div>
                </div>
             </GlassCard>
          ))}
        </div>
      )}

      <div className="pt-8 pb-12 flex justify-center">
        <button 
          onClick={onRestart}
          className="text-white/50 hover:text-magic-gold transition-colors text-sm underline underline-offset-4 decoration-white/20 hover:decoration-magic-gold"
        >
          重新寻找灵感
        </button>
      </div>

    </div>
  );
};

export default Results;