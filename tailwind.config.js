/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 沉浸森林主题 - 分阶段渐变
        forest: {
          green: '#228B22',      // 主绿色
          dark: '#1a5c1a',       // 深绿（MBTI阶段）
          light: '#3da73d',      // 浅绿（Landing阶段）
          50: '#f2f7f4',
          100: '#e1efe8',
          200: '#c5e0d3',
          300: '#9ccbb7',
          400: '#73b69d',
          500: '#50a286',
          600: '#40836e',
          700: '#34695a',
          800: '#2c554a',
          900: '#25473e',
        },
        earth: {
          brown: '#8B4513',      // 大地色（生存测试）
          50: '#f9f7f4',
          100: '#f0ebe3',
          200: '#e0d6c8',
          300: '#cabda3',
          400: '#b09d7e',
          500: '#96835e',
          600: '#7d6d4f',
          700: '#645640',
          800: '#504435',
          900: '#413730',
        },
        sky: {
          blue: '#87CEEB',       // 天空蓝（计算中）
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        sand: {
          beige: '#F5F5DC',      // 沙滩米色（结果页）
        },
        cream: {
          bg: '#FAF9F6',         // 背景米色
        },
        sunshine: {
          orange: '#F97316',     // 活力橙（CTA）
        },
        river: {
          teal: '#0D9488',       // 河流青（进度）
        },
        leaf: {
          yellow: '#EAB308',     // 叶片黄（提示）
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fca5a5',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      borderRadius: {
        // 有机圆角 - 更不规则的自然形态
        'organic-1': '40% 60% 55% 45% / 45% 55% 40% 60%',
        'organic-2': '55% 45% 40% 60% / 50% 60% 45% 55%',
        'organic-3': '45% 55% 60% 40% / 55% 45% 50% 50%',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-forest': 'linear-gradient(135deg, #40836e 0%, #50a286 100%)',
        'gradient-earth': 'linear-gradient(135deg, #7d6d4f 0%, #96835e 100%)',
        'gradient-sky': 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)',
        'gradient-orange': 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
        // 沉浸式渐变背景
        'forest-deep': 'linear-gradient(180deg, #166534 0%, #14532d 100%)',      // MBTI - 深林
        'forest-light': 'linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)',    // Landing - 浅绿
        'earth-warm': 'linear-gradient(180deg, #fef3c7 0%, #fde68a 100%)',      // Survival - 大地色
        'sky-flow': 'linear-gradient(180deg, #e0f2fe 0%, #bae6fd 100%)',        // Calculating - 天空蓝
        'golden-glow': 'linear-gradient(180deg, #fffbeb 0%, #fef3c7 100%)',     // Results - 金色
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.08)',
        'strong': '0 8px 24px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.10)',
        'glow': '0 0 20px rgba(14, 165, 233, 0.3)',
        'glow-forest': '0 0 20px rgba(80, 162, 134, 0.3)',
        'forest': '0 12px 32px rgba(34, 139, 34, 0.15), 0 6px 16px rgba(34, 139, 34, 0.10)',
        'inner': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-delay': 'float 3s ease-in-out 1.5s infinite',
        'breathing': 'breathing 2s ease-in-out infinite',
        'compass-spin': 'compassSpin 3s linear infinite',
        'progress-grow': 'progressGrow 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        breathing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        compassSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        progressGrow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
