// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://giorgiotassoni.github.io',
    base: 'giorgiotassoni',
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [
        icon(),
    ],
});
