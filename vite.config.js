import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves a normal repo from https://<user>.github.io/<repo>/, so
// the build needs that sub-path as its base. GITHUB_REPOSITORY is set for us by
// Actions ("owner/repo"), which means the repo can be named anything without
// editing this file. A <user>.github.io repo is served from the root instead,
// and local dev is always the root.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = !repo || repo.endsWith('.github.io') ? '/' : `/${repo}/`

export default defineConfig({
  base,
  plugins: [react()],
  server: { port: 5173, open: true },
})
