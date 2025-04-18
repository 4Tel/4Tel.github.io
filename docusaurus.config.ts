import type * as Preset from '@docusaurus/preset-classic';
import type {Config, PresetConfig, ThemeConfig} from '@docusaurus/types';
import type {Navbar} from '@docusaurus/theme-common'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
//
import {codeTheme, gtag} from './config.config';

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
  items: [ 
    {
      label: 'Home',
      position:'left',
      to:"/",
      items: [
        {label: 'Blog Code', to:"/Example/Docusaurus MDX" }
      ]
    }, {
      label: 'Math',
      position: 'left',
      items: [
        { label: "대수학", to: 'Math/Algebra' }
      ]
    }, {
      label: 'Physics',
      position: 'left',
      items: [
        { label:'후처리',to:'/Physics/PP/RDF'}
      ]
    }, {
      label: 'Computer',
      position: 'left',
      items: []
    }, {
      label: 'Tutorial',
      position: 'left',
      items: [
        { label: "단축키 모음", to: "/tuto/shortcuts" },
        { label: '코딩 언어', to:'/tuto/lang'},
        { label: 'MD+Latex',to:'/tuto/md+latex/Markdown'},
        { label: 'vscode', to: '/tuto/vscode' },
        { label: 'Conda', to: '/tuto/conda'},
        { label: "Git" , to: "/tuto/git/git" },
        { label: 'Linux', to: '/tuto/linux' },
        // { label: 'GDB', to: '/tuto/gdb' },
        // { label: "Quantum Espresso", to: "/tuto/QE" },
        // { label: "QE-PW", to: "/tuto/QE-PW" },
      ]
    }, {
      label: 'Starcraft',
      position:'left',
      items: [
        { label: "ZCR", to: '/SCR/ZCR' },
        { label: '오프셋', to:'/SCR/offset' }
      ]
    }, {
      label: 'Books',
      position: 'left',
      items: [
        { label: '전자기학', to:'/books/electrodynamics'}
      ]
    }
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
  plugins:[gtag],
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
