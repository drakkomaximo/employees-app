import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // ...opciones de proxy...
    },
    // Redirige rutas desconocidas a la página 404
    hmr: {
      overlay: true,
    },
    fs: {
      strict: false,
    },
  },
})
