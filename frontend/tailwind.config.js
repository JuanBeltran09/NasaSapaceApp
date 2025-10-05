// tailwind.config.js (fragmento)
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        weather: {
          bg: '#0f1724',        // fondo app (deep navy)
          card: '#0b1220',      // cards
          accent: '#3ddc84',    // action / positive
          warn: '#ffb020',      // warnings
          rain: '#3aa0ff',      // lluvia
          cloud: '#9aa7b2',     // nubes
          sun: '#ffd166',       // sol
          strong: '#ff6b6b',    // extremo
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        'soft-card': '0 6px 18px rgba(2,6,23,0.6)',
      },
      borderRadius: {
        'lg-2xl': '1rem',
      }
    }
  }
}
