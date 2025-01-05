import {themes} from 'prism-react-renderer';
export const codeTheme = {
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

import { PluginConfig } from "@docusaurus/types";
export const gtag:PluginConfig = [
  '@docusaurus/plugin-google-gtag',
  {
    trackingID: 'G-KJQBWD08DH',
  }
];