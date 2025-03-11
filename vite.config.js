import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://coinranking1.p.rapidapi.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
