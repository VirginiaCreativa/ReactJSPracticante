import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: "https://virginiacreativa.github.io/ReactJSPracticante/GifExpertApp/",
  plugins: [react()],
  server: {
    port: 3000,
    hot: true
  },
})
