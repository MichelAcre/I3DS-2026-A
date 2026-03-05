import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, //muda a porta padrão do react para 3000
    open: true, //abre o navegador automaticamente
    host: true, //acesso no IP local
  }
})
