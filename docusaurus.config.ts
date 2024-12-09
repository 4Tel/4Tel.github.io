import {themes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
const codeTheme = {
  theme: themes.github,
  darkTheme: themes.dracula,
}

/** Blog Information. */
const meta: Config = {
  // git
  organizationName: '4Tel',
  projectName: '4Tel.github.io',
  deploymentBranch: 'main',
  // site
  url: 'https://4Tel.github.io',
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

/** blog theme */
const theme = {
  image: 'img/favicon.ico',
  colorMode: {
    defaultMode: 'dark',
    disableSwitch: false,
  },
  docs: {
    sidebar: {
      hideable: true,
      autoCollapseCategories: true,
    }
  },
  navbar: {
    title: '4Tel',
    logo: {
      src: 'img/favicon.ico',
    },
    hideOnScroll: false,
    items: [ {
        type: 'doc',
        docId: 'home/home',
        label: 'Home',
        position: 'left',
      }, {
        type: 'doc',
        docId: 'study/study',
        position: 'left',
        label: 'Study',
      }, {
        type: 'doc',
        docId: 'tuto/tuto',
        position: 'left',
        label: 'Tutorial',
      }, {
        type: 'doc',
        docId: 'book/book',
        position: 'left',
        label: 'Book',
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
} satisfies Preset.ThemeConfig

const doc_settings = {
  editUrl: 'https://github.com/4Tel/4Tel.github.io/edit/main/'
}

const config: Config = {
  ...meta,
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          ...doc_settings,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          ...doc_settings,
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
  themeConfig: theme,
};

export default config;
