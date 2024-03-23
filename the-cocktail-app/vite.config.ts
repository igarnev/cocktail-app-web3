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
      'assets/': `${path.resolve(__dirname, './src/assets/')}/`,
      'components/': `${path.resolve(__dirname, './src/components/')}/`,
      'features/': `${path.resolve(__dirname, './src/features/')}/`,
      'models/': `${path.resolve(__dirname, './src/models/')}/`,
      'pages/': `${path.resolve(__dirname, './src/pages/')}/`,
      'services/': `${path.resolve(__dirname, './src/services/')}/`,
      'styles/': `${path.resolve(__dirname, './src/styles/')}/`,
      'utils/': `${path.resolve(__dirname, './src/utils/')}/`,
    },
  },
});
