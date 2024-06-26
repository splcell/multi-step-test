import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve('src/*'),
      '@components/*': path.resolve('src/components/*'),
      '@assets/*': path.resolve('src/assets/*'),
      '@services/*': path.resolve('src/services/*'),
      '@utils/*': path.resolve('src/utility/*'),
      '@hooks/*': path.resolve('src/hooks/*'),
      '@store/*': path.resolve('src/store/*'),
      '@api/*': path.resolve('src/api/*'),
      '@src/*': path.resolve('src/*'),
    },
  },
  plugins: [react(), tsconfigPaths()],
})


