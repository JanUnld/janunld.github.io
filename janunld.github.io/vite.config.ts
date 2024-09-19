/// <reference types="vitest" />

import analog, { PrerenderContentFile } from '@analogjs/platform';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: __dirname,
    cacheDir: `../node_modules/.vite`,

    build: {
      outDir: '../dist/./janunld.github.io/client',
      reportCompressedSize: true,
      target: ['es2020'],
    },
    server: {
      fs: {
        allow: ['.'],
      },
    },
    plugins: [
      analog({
        static: true,
        content: {
          highlighter: 'shiki',
        },
        prerender: {
          routes: async () => [
            '/',
            '/blog',
            {
              contentDir: 'src/content/blog',
              transform: (file: PrerenderContentFile) => {
                // do not include files marked as draft in frontmatter
                if (file.attributes['draft']) {
                  return false;
                }
                // use the slug from frontmatter if defined, otherwise use the files basename
                const slug = file.attributes['slug'] || file.name;
                return `/blog/${slug}`;
              },
            },
          ],
        },
      }),

      nxViteTsPaths(),
      splitVendorChunkPlugin(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      reporters: ['default'],
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
