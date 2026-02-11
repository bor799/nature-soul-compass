import React from 'react';
import { motion } from 'framer-motion';

type AspectRatio = 'square' | 'video' | 'portrait' | 'auto';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  aspectRatio?: AspectRatio;
  className?: string;
  hoverZoom?: boolean;
}

/**
 * ResponsiveImage - 响应式图片组件
 *
 * 新设计系统规范：
 * - 多种宽高比 (square: 1:1, video: 16:9, portrait: 3:4, auto: 原始)
 * - object-cover 防止图片变形
 * - 悬浮缩放效果
 */
export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  aspectRatio = 'auto',
  className = '',
  hoverZoom = true
}) => {
  // 宽高比配置
  const aspectRatios = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    auto: '',
  };

  const wrapperClass = aspectRatios[aspectRatio];

  return (
    <motion.div
      className={`relative overflow-hidden rounded-glass ${wrapperClass} ${className}`}
      whileHover={hoverZoom ? { scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
    >
      {/* 图片 */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {/* 图片遮罩效果 - 悬浮时变亮 */}
      {hoverZoom && (
        <motion.div
          className="absolute inset-0 bg-white/10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  );
};
