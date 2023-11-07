import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'nunito': ['nunito', 'sans-serif'],
        'Kenia': ['Kenia', 'sans-serif'],
        'PlayfairDisplay': ['Playfair Display', 'serif'],
        'DancingScript' : ['Dancing Script', 'cursive'],
        'SeaweedScript': ['Seaweed Script', 'cursive'],
        'AbrilFatface': ['Abril Fatface', 'serif'],
        'Monoton': ['Monoton', 'serif'],
        'Tan': ['Tan', 'serif'],

  
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    
  },
  plugins: [],
}
export default config
