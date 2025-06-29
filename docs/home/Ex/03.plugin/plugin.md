# 플러그인
* Docusaurus의 기능 확장.
* Docusaurus 코어는 기능이 없으며, 기능을 제공하는 각종 플러그인이 Docusaurus를 구성함.
* 기존 Markdown 구문을 변경하거나 새로운 구문을 추가할 수 있음.
* [Docusaurus plugin 사용법](https://docusaurus.io/docs/using-plugins) 참고.
* [Docusaurus plugin 기능](https://docusaurus.io/docs/markdown-features/plugins) 참고.

## 플러그인 종류
* Docusaurus 플러그인은 크게 5가지로 구분.
1. **AST**: 추상 구문 트리(Abstract Syntax Tree) 생성
2. **MDX 내장 플러그인**
3. **MAST**(remark 플러그인)
   * Markdown 구문을 AST로 변환
   * Markdown 구문을 HTML로 변환
4. **HAST**(rehype 플러그인)
   * HTML 구문을 AST로 변환
   * HTML 구문에 JSX 적용.
5. **Docusaurus 플러그인**: Docusaurus 기능 제공

## 적용 예시
```js title="docusaurus.config.ts"
import rehypeKatex from 'rehype-katex';

export default {
    presets: [[
        '@docusaurus/preset-classic',
        { docs: {
            // highlight-next-line
            rehypePlugins: [[rehypeKatex, {strict: false}]],
        }},
    ]],
    plugins: [ 
        ['@docusaurus/plugin-content-pages',{/* options */}]
    ], /* plugins 적용 후 themes 적용됨. */
    themes: [['@docusaurus/plugin-content-pages']],
};
```

## 플러그인 목록
* [공식](https://docusaurus.io/docs/api/plugins)
* [community](https://docusaurus.io/community/resources#community-plugins)

## 커스텀 플러그인 제작
* [플러그인 제작 가이드](https://docusaurus.io/docs/api/plugin-methods)
* [remark](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#create-plugins)
* [rehype](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#create-plugins)
* [제작 시 참고](https://docusaurus.io/docs/api/plugin-methods)
* TODO: 예시 쓰기

