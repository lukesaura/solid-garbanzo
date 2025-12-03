/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#F9EEF0',
          100: '#F5E2E5',
          300: '#E8AEB7',
          500: '#E08FA0'
        },
        powder: {
          50: '#F6FBFF',
          100: '#EAF7FF',
          300: '#A8DADC',
          500: '#7FC6D1'
        },
        warmgray: {
          50: '#FBFAF8',
          100: '#F1F0EB',
          300: '#D8D6D1'
        }
      },
      fontFamily: {
        space: ['"Space Grotesque"', 'ui-sans-serif', 'system-ui'],
        krone: ['"Krone One"', 'ui-sans-serif'],
        sora: ['"Sora"', 'ui-sans-serif'],
        jbmono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        epilogue: ['"Epilogue"', 'ui-sans-serif'],
        manrope: ['"Manrope"', 'ui-sans-serif'],
        lora: ['"Lora"', 'serif'],
        biorhyme: ['"Biorhyme"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        raleway: ['"Raleway"', 'ui-sans-serif']
      }
    }
  },
  plugins: []
};
