// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
<<<<<<< HEAD
  base: "/e-plantShopping/",
=======
>>>>>>> 562ae2c7e649435125417cc53a0f2768db37aee1
  plugins: [react()],
  base: '/e-plantShopping/', // 👈 muy importante
})

