// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://boostmyemail.com',
  integrations: [
    // The holiday event page is kept out of the sitemap.
    sitemap({ filter: (page) => !page.includes('/remote-contractor-holiday-party') }),
  ],
});
