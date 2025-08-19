module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
  neonpink: '#ff2d95',
  neonblue: '#00d4ff',
  neonviolet: '#b32cff',
  glass: 'rgba(255,255,255,0.06)',
  panel: 'rgba(255,255,255,0.03)',
  grain: '#0b0b0b'
      },
      fontFamily: {
  display: ['Orbitron', 'sans-serif'],
  body: ['Inter', 'sans-serif'],
  poster: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [],
}
