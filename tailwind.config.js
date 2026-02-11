/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // README 核心色彩系统
        forest: {
          900: '#0f3e21',      // 页面主背景 (README 规范)
          800: '#1a5c38',      // 渐变亮部
          glass: 'rgba(255, 255, 255, 0.08)',  // 玻璃卡片背景
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        magic: {
          gold: '#FFD700',      // CTA 按钮、选中状态 (README 规范)
          glow: '#FFF7B0',      // 文字发光、次级高亮 (README 规范)
        },
        cream: {
          50: '#F0FDF4',       // 正文文字 (README 规范)
          100: 'rgba(240, 253, 244, 0.8)',  // 半透明辅助文字
        },
        rose: {
          clay: '#E17F7F',     // 警示色 (README 规范)
        },
        // Earth tones
        earth: {
          900: '#292524',
          800: '#44403c',
          50: '#f5f5f4',
        },
        // Sky colors
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
        },
        // Amber scale
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Playfair Display"', 'serif'],
        sans: ['"Inter"', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'monospace'],
      },
      fontSize: {
        // Mobile Standards - 最小字号要求 (README 规范)
        'h1': '2rem',        // 32px - 主标题
        'h2': '1.5rem',      // 24px - 模块标题
        'body': '1rem',      // 16px - 正文 (最小要求)
        'caption': '0.75rem', // 12px - 辅助文字 (最小要求)
      },
      lineHeight: {
        'body': 1.6,         // 正文行高 (README 规范)
      },
      borderRadius: {
        'glass': '16px',     // GlassCard 圆润边角 (README 规范)
        'magic': '12px',     // MagicButton 圆角
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.2)',  // GlassCard 阴影 (README 规范)
        'glow': '0 0 15px rgba(255, 215, 0, 0.4)',  // MagicButton 激活状态 (README 规范)
        'magic': '0 4px 20px rgba(255, 215, 0, 0.25)',  // MagicButton 默认阴影
      },
      backgroundImage: {
        'forest-gradient': 'radial-gradient(circle at center, #1a5c38 0%, #0f3e21 100%)',
        'magic-gradient': 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
