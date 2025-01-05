import { PluginConfig } from "@docusaurus/types";

export const gtag:PluginConfig = [
  '@docusaurus/plugin-google-gtag',
  {
    trackingID: 'G-KJQBWD08DH',
  }
];

export const sitemap:PluginConfig = [
  '@docusaurus/plugin-sitemap',
  {
    lastmod: 'date',
    changefreq: 'weekly',
    priority: 0.5,
    ignorePatterns: ['/tags/**'],
    filename: 'sitemap.xml',
    createSitemapItems: async (params) => {
      const {defaultCreateSitemapItems, ...rest} = params;
      const items = await defaultCreateSitemapItems(rest);
      return items.filter((item) => !item.url.includes('/page/'));
    }
  }
];
