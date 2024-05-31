import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/bocafina-react-js/",
  sourcemap: true,
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
