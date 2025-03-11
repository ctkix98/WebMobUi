import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    build: {
        outDir: '../dist',
        target: 'esnext',
        emptyOutDir: true, // Clean the output directory before building
    },
    server: {
        host: true
    },
})
