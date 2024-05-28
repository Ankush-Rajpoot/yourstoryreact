import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import reactRefresh from '@vitejs/plugin-react-refresh'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// export default defineConfig({
//   plugins: [react(),reactRefresh()],
//   resolve: {
//     alias: {
//       // Add alias for reactstrap
//       'reactstrap': 'reactstrap/dist/reactstrap.es.js',
//       'jodit-react': 'jodit-react/dist/jodit-react.esm.js'
//     }
//   }
// })

