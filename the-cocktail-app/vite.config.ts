import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      'utils/': `${path.resolve(__dirname, './src/utils/')}/`, // Ensure trailing slash for directory resolution
      'components/': `${path.resolve(__dirname, './src/components/')}/`, // Ensure trailing slash for directory resolution
      'assets/': `${path.resolve(__dirname, './src/assets/')}/`, // Ensure trailing slash for directory resolution
    },
  },
});
