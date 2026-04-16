import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⚠️ 請將 '2026_computex_pipeline' 替換為你的 GitHub repo 名稱
  base: '/2026_computex_pipeline/',
});
