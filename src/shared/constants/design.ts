/**
 * Design System Constants
 * 完全遵循 README.md 中的设计规范
 * Theme: Wizard of Oz (绿野仙踪)
 */

export const COLORS = {
  // === 核心色彩系统 ===
  // 背景基调
  forest900: '#0f3e21',        // 页面主背景
  forest800: '#1a5c38',        // 渐变亮部

  // 卡片底色
  forestGlass: 'rgba(255,255,255,0.1)',

  // 主强调色
  magicGold: '#FFD700',        // CTA 按钮、选中状态
  magicGlow: '#FFF7B0',        // 文字发光、次级高亮

  // 文字颜色
  cream50: '#F0FDF4',          // 正文文字 (替代纯白)

  // 警示色
  roseClay: '#E17F7F',         // 柔和的陶土红

  // === 扩展色板 ===
  // Forest scale
  forest50: '#f0fdf4',
  forest100: '#dcfce7',
  forest200: '#bbf7d0',
  forest300: '#86efac',
  forest400: '#4ade80',
  forest500: '#22c55e',
  forest600: '#16a34a',
  forest700: '#15803d',

  // Earth tones (用于背景渐变)
  earth900: '#292524',
  earth800: '#44403c',

  // Sky colors
  sky50: '#f0f9ff',
  sky100: '#e0f2fe',

  // Amber scale
  amber400: '#fbbf24',
  amber500: '#f59e0b',
} as const;

export const FONTS = {
  // README 明确要求的字体
  display: '"Noto Serif SC", "Playfair Display", serif',
  body: '"Noto Sans SC", "Inter", sans-serif',
  mono: 'ui-monospace, monospace',
} as const;

export const FONT_SIZES = {
  // Mobile Standards - 最小字号要求
  h1: '2rem',        // 32px - 主标题
  h2: '1.5rem',      // 24px - 模块标题
  body: '1rem',      // 16px - 正文 (最小要求)
  caption: '0.75rem', // 12px - 辅助文字 (最小要求)
} as const;

export const LINE_HEIGHTS = {
  body: 1.6,         // 正文行高
  paragraph: '1.5em', // 段落间距
} as const;

export const SPACING = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  safe: '32px',    // 底部安全区
} as const;

export const BORDER_RADIUS = {
  sm: '8px',
  md: '12px',
  lg: '16px',      // GlassCard 圆润边角
  xl: '24px',
} as const;

export const SHADOWS = {
  glass: '0 8px 32px rgba(0,0,0,0.2)',  // GlassCard 阴影
  glow: '0 0 15px rgba(255, 215, 0, 0.4)',  // MagicButton 激活状态
} as const;

// Touch Targets - iOS HIG 标准
export const TOUCH_MIN_HEIGHT = '48px';
export const TOUCH_HORIZONTAL_PADDING = '24px';
