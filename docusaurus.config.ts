import {themes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
const codeTheme = {
  theme: themes.github,
  darkTheme: themes.dracula,
}

const meta: Config = {
  // git
  organizationName: '4tel',
  projectName: '4tel.github.io',
  deploymentBranch: 'main',
  // site
  url: 'https://4tel.github.io',
  baseUrl: '/',
  trailingSlash: false,
  // home
  title: '4Tel',
  favicon: 'img/favicon.ico',
  // locale  
  i18n: {
    defaultLocale: 'kr',
    locales: ['kr'],
  },
}

const config: Config = {
  ...meta,
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:'https://github.com/4tel/4tel.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:'https://github.com/4tel/4tel.github.io/edit/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/favicon.ico',
    navbar: {
      title: '4Tel',
      logo: {
        alt: '4Tel',
        src: 'img/favicon.ico',
      },
      items: [ {
          type: 'doc',
          docId: 'home/intro',
          position: 'left',
          label: 'Home',
        }, {
          type: 'doc',
          docId: 'tuto/home',
          position: 'left',
          label: 'test',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()}. Made by 4Tel.`,
    },
    prism: {
      ...codeTheme
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
