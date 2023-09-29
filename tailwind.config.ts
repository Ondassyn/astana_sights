import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-once' : 'my-spin 1s ease-in-out',
        'slide-up' : 'my-slide-up 1s ease-in-out forwards'
      },
      keyframes: {
        'my-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'my-spin-in': {
          '0%': { transform: 'rotate(0deg)', opacity: '0' },
          '100%': { transform: 'rotate(360deg)', opacity: '1' },
        },
        'my-spin-out': {
          '0%': { transform: 'rotate(0deg)', opacity: '1' },
          '100%': { transform: 'rotate(360deg)', opacity: '0' },
        },
        'my-pulse': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(2)' },
          '100%': { transform: 'scale(1)' },
        },
        'my-slide-up': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      }
    },
  },
  plugins: [],
}
export default config
