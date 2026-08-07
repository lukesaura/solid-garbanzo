/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Newsprint palette
        ink: '#1a1712',        // near-black printing ink
        ink2: '#3a352c',       // softer ink for secondary text
        newsprint: '#f5f1e6',  // paper
        newsprint2: '#efe9d8',  // slightly darker paper
        desk: '#e4ddc9',       // the surface the paper sits on
        oxblood: '#8a1c1c',    // restrained spot color for kickers
        rule: '#1a1712'        // rule/border color
      },
      fontFamily: {
        masthead: ['var(--font-masthead)', 'Pirata One', 'serif'],
        headline: ['var(--font-headline)', 'Georgia', 'Times New Roman', 'serif'],
        body: ['var(--font-body)', 'Georgia', 'Times New Roman', 'serif'],
        news: ['var(--font-mono-news)', 'Courier New', 'monospace']
      }
    }
  },
  plugins: []
};
