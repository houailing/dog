import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://houailing.github.io',
    base: 'pages',
    vite: {
        plugins: [
          {
            name: 'configure-response-headers',
            configureServer(server) {
              server.middlewares.use((req, res, next) => {
                res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
                next();
              });
            },
          },
        ],
      },
});
