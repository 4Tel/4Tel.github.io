import {themes} from 'prism-react-renderer';
import type * as Preset from '@docusaurus/preset-classic';
import type {Config, PresetConfig, ThemeConfig} from '@docusaurus/types';
import type {Navbar, NavbarItem} from '@docusaurus/theme-common'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
//
import {gtagPlug, sitemapPlug} from './plugin.config';

const codeTheme = {
  additionalLanguages: ['bash'], //,'csharp','fortran'],
  /*  
  additionalLanguages: ['bash'], //,'csharp','fortran'],
  /*  
  ● : color-background
  ■ : operator coloring 
  ☆: suggestion
  ★: suggestion (strong)
  */  
  theme: themes.oneDark,
  // theme: themes.duotoneLight,         // ● blue
  // theme: themes.github,               // blue
  // theme: themes.gruvboxMaterialLight, // ● orange
  // theme: themes.jettwaveLight,        // ● blue
  // theme: themes.nightOwlLight,        // green + purple
  // theme: themes.oneLight,             // ☆ orange
  // theme: themes.vsLight,              // brown + blue
  // darkTheme: themes.dracula,             // ★ italic + pink + purple
  // darkTheme: themes.duotoneDark,          // ■ orange + purple
  // darkTheme: themes.gruvboxMaterialDark,  // ☆ orange
  // darkTheme: themes.jettwaveDark,         // blue
  // darkTheme: themes.nightOwl,             // ☆ ■ italic + green + blue
  // darkTheme: themes.oceanicNext,          // ★ ■ magenta
  // darkTheme: themes.okaidia,              // ★ ■ yellow + green + blue
  // darkTheme: themes.oneDark,              // ★ ■ purple + green + blue
  // darkTheme: themes.palenight,            // ■ italic + red
  // darkTheme: themes.shadesOfPurple,       // ■ ● orange + blue
  // darkTheme: themes.synthwave84,          // ● red + orange
  // darkTheme: themes.vsDark,               // ☆ ■ yellow + blue
  
  magicComments: [
    // Remember to extend the default highlight class name as well!
    {
      className: 'theme-code-block-highlighted-line',
      line: 'highlight-next-line',
      block: {start: 'highlight-start', end: 'highlight-end'},
    },
    {
      className: 'error-line',
      line: 'error-line',
      block: {start: 'error-start', end: 'error-end'},
    },
  ],
}

/** Blog Information. */
const meta: Config = {
  // site
  url: 'https://4Tel.github.io/',
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

/* Top Navigation bar information */
const navigation:Navbar = {
  title: '4Tel',
  logo: {
    src: 'img/favicon.ico',
  },
  hideOnScroll: true,
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
      docId: 'SCR/SCR',
      position: 'left',
      label: 'Starcraft',
    },
  ],
};

/** theme setting */
const theme:ThemeConfig = {
  image: 'img/favicon.ico', // tab
  colorMode: {
    defaultMode: 'dark',
    disableSwitch: false,
  }, prism: codeTheme,
  announcementBar: {
    content: "블로그 개설 중. 글 작성 진행 중.",
    isCloseable:false
  },
  docs: {
    sidebar: {
      hideable: true,
      autoCollapseCategories: true,
    }
  },
  navbar: navigation,
  footer: {
    style: 'dark',
    copyright: `Copyright © ${new Date().getFullYear()}. Made by 4Tel.`,
  },
};

const doc_settings = {
  editUrl: 'https://github.com/4Tel/4Tel.github.io/edit/main/',
  remarkPlugins: [remarkMath],
  rehypePlugins: [[rehypeKatex,{strict:false}]],
}
const latex_setting = [
  {
    href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
    type: 'text/css',
  },
]

/* first page */
const page1:PresetConfig = [
  'classic',
  {
    docs: {
      sidebarPath: './sidebars.ts',
      routeBasePath: '/',
      ...doc_settings,
    },
    // blog: {
    //   showReadingTime: true,
    //   feedOptions: {
    //     type: ['rss', 'atom'],
    //     xslt: true,
    //   },
    //   ...doc_settings,
    //   onInlineTags: 'warn',
    //   onInlineAuthors: 'warn',
    //   onUntruncatedBlogPosts: 'warn',
    // },
    theme: {
      customCss: './src/css/custom.css',
    },
  } satisfies Preset.Options,
]

const config: Config = {
  ...meta,
  presets: [page1],
  plugins:[gtagPlug,sitemapPlug],
  markdown: {
    mermaid:true,
  },
  themes:[
    '@docusaurus/theme-live-codeblock',
    '@docusaurus/theme-mermaid',
  ],
  themeConfig: theme,
  stylesheets: latex_setting,
};

export default config;
