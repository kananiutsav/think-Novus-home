import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['var(--font-inter)'],
      //   mono: ['var(--font-roboto-mono)'],
      // },
      linearGradientColors: {
       
       
          'custom': 'rgba(0, 0, 0, 0.00) 4.08%, rgba(0, 0, 0, 0.58) 27%, rgba(0, 0, 0, 0.73) 54.48%, #000 100%',
        
      },
      backgroundImage: {
        // 'gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 4.08%, rgba(0, 0, 0, 0.58) 27%, rgba(0, 0, 0, 0.73) 54.48%, #000 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'bgheader': "url('./src/assets/image/bgheader.png')"
      },
      
      colors:{
        customText: 'linear-gradient(290deg, #21D4FD 15.9%, #B721FF 82.02%)'
      },
      backgroundColor:{
        background: 'linear-gradient(76deg, #8920FE 21.94%, #45C4F9 84.94%)'
      },
      borderColor: {
        'custom': '#8920FE;', // Add your custom border color here
      },
  
     
    },
  },
  plugins: [
     require('tailwindcss-gradients'),
  ],
}
export default config
