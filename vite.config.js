import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or vue/svelte, depending on your app

export default defineConfig({
  plugins: [react()],
  base: '/', // keep this as '/' since you're using a custom domain
})
