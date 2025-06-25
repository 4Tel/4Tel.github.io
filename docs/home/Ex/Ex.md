---
sidebar_position: 1
---
# Blog code
* 블로그에서 사용할 수 있는 각종 코드 예제 정리.
* 블로그에서 사용한 각종 코드 정리.


import PartialExample from './_markdown-partial-example.mdx';
import rawMDX from '!!raw-loader!./_markdown-partial-example.mdx';
import _admonition from './_admonition.md'
import rawAdmonition from '!!raw-loader!./_admonition.md'

# Docusaurus MDX

## Component Importing
### Raw in MDX
* importing text in markdown
* 파일 내용을 raw-text로 첨부
<Tabs>
  <TabItem value='code'>
    ``` md
    import rawMDX from '!!raw-loader!./_markdown-partial-example.mdx';
    <CodeBlock language='md'>{rawMDX}</CodeBlock>
    ```
  </TabItem>
  <TabItem value='결과' default>
    <CodeBlock language='md'>{rawMDX}</CodeBlock>
  </TabItem>
  <TabItem value='참고'>
    * [참고](https://docusaurus.io/docs/markdown-features/react#importing-code-snippets)
  </TabItem>
</Tabs>

### MDX in MDX
* Importing markdown in markdown
* 다른 markdown 파일 첨부.
<Tabs>
  <TabItem value='code'>
    ```jsx title="_markdown-partial-example.mdx"
    <Highlight back='green'>This is text some content from `_markdown-partial-example.mdx`.</Highlight>  
    <FontColor font='green'>Read value: {props.value}</FontColor>
    ```
    ```jsx title="current file"
    import PartialExample from './_markdown-partial-example.mdx';
    <PartialExample value="123"/>
    current file title is {contentTitle}
    ```
  </TabItem>
  <TabItem value='결과' default>
    <PartialExample value="123"/>
    current file title is {contentTitle}
  </TabItem>
  <TabItem value='참고'>
    * [참고 1](https://docusaurus.io/docs/markdown-features/react#importing-markdown)
    * [참고 2](https://docusaurus.io/docs/markdown-features/react#available-exports)
  </TabItem>
</Tabs>

### JS in MDX
* importing javascript in markdown
* markdown에 javascript 적용.
<Tabs>
  <TabItem value='code'>
    ```md
    import { Highlight } from '@site/src/components/Highlight/Highlight';
    <!-- contents -->
    <Highlight back="#25c2a0">Docusaurus green</Highlight>
    ```
  </TabItem>
  <TabItem value='결과' default>
    <Highlight back="#25c2a0">Docusaurus green</Highlight>
  </TabItem>
</Tabs>

### MDX in JS
* landing markdown using javascript
* javascript를 이용해 markdown 페이지 구성.
* `src/pages/index.js`의 코드 수정.


### Swizlling
* [See also. 1](https://docusaurus.io/docs/markdown-features/react#mdx-component-scope)
* [See also. 2](https://docusaurus.io/docs/swizzling)


## 강조 표시
<Tabs queryString='admonition'>
  <TabItem value='code'>
    <CodeBlock language='md'> {rawAdmonition} </CodeBlock>
  </TabItem>
  <TabItem value='결과' default>
    <_admonition/>
  </TabItem>
  <TabItem value='중첩'>
    :::note
      중첩 윗줄에는 내용 추가 가능. (아랫줄은 불가)
      :::danger
      중첩
      :::
    :::
  </TabItem>
  <TabItem value='참고'>
    * Admonition [참고](https://docusaurus.io/docs/markdown-features/admonitions)
    * 커스터마이징 [방법](https://docusaurus.io/docs/markdown-features/admonitions#customizing-admonitions)
    * 커스텀 Admonition [방법](https://docusaurus.io/docs/markdown-features/admonitions#custom-admonition-type-components)
  </TabItem>
</Tabs>

## ToC
### 표기 heading 지정
* h1~h5 중 어느 것을 ToC에 표기할 지 지정.
<Tabs>
  <TabItem value='Local 설정'>
    * MDX파일에 작성
    * Global 설정이 있어도 Local 설저이 우선 됨.
    ```md
    ---
    toc_min_heading_level: 2
    toc_max_heading_level: 5
    ---
    ```
  </TabItem>
  <TabItem value='Global 설정'>
    * docusaurus.config.ts에 작성.
    ```js
    export default {
      themeConfig: {
        tableOfContents: {
          minHeadingLevel: 2,
          maxHeadingLevel: 5,
        },
      },
    };
    ```
  </TabItem>
</Tabs>

### 기타
* mdx 내용에 ToC 포함 [방법](https://docusaurus.io/docs/markdown-features/toc#inline-table-of-contents)
<details>
  <summary>Heading 감추기.</summary>

  ## 감춰진 heading
  <h2 id='#hiding-heading'>ToC 미표기 heading</h2>
  원리
   * [플러그인 원리](#plugin) 참고
   * ToC 처리는 remark 플러그인.
   * Markdown 구문으로 작성된 heading은 ToC 플러그인이 처리.
   * HTML 구문으로 작성된 heading은 ToC 플러그인이 처리하지 못 함.
   * 감춰져 있는 지 여부는 영향 없음.
</details>

## Plugin
<Tabs>
  <TabItem value="기능">
    * 코어 자체는 기능이 없으며 플러그인이 기능을 제공함.
    * 다양한 기능 추가 가능. (영상 링크, 소셜카드 등)
    * 기존 MDX 구문의 동작 변경.
    * 새로운 MDX 구문 생성.
    * [Docusaurus 문서1](https://docusaurus.io/docs/markdown-features/plugins)
    * [Docusaurus 문서2](https://docusaurus.io/docs/using-plugins)
  </TabItem>
  <TabItem value="종류">
    * <Glossary id="AST"/>
    * MDX 내장 플러그인
    * remark 플러그인
      * <Glossary id="MDAST"/>
      * Markdown의 AST를 생성.
      * Markdown 구문을 HTML 구문으로 변환.
    * rehype 플러그인
      * <Glossary id="HAST"/>
      * HTML의 AST를 생성.
      * HTML 구문에 JSX 적용 가능.
    * docusaurus 플러그인
      * docusaurus 기능을 제공.
  </TabItem>
  <TabItem value="적용 예시">
    ```js title="docusaurus.config.ts"
    import rehypeKatex from 'rehype-katex';

    export default {
      presets: [[
        '@docusaurus/preset-classic',
        { docs: {
            rehypePlugins: [[rehypeKatex, {strict: false}]],
        }},
      ]],/* plugins의 options로 특정 페이지 id만 적용 가능. */
      plugins: [ 
        ['@docusaurus/plugin-content-pages',{/* options */}]
      ], /* plugins 적용 후 themes 적용됨. */
      themes: [['@docusaurus/plugin-content-pages']],
    };
    ```
  </TabItem>
  <TabItem value="플러그인 목록">
    * [공식](https://docusaurus.io/docs/api/plugins)
    * [community](https://docusaurus.io/community/resources#community-plugins)
  </TabItem>
  <TabItem value="플러그인 제작">
    * [remark](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#create-plugins)
    * [rehype](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#create-plugins)
    * [제작 참고](https://docusaurus.io/docs/api/plugin-methods)
    * TODO: 예시 쓰기
  </TabItem>
</Tabs>

## 다이어그램
<Tabs>
  <TabItem value="코드">
    ````
    ```mermaid
    graph LR;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
    ```
    ````
  </TabItem>
  <TabItem value="결과" default>
    ```mermaid
    graph LR;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
    ```
  </TabItem>
  <TabItem value='참고'>
    * mermaid 언어를 이용해 다이어그램 생성
    * [Docusaurus 문서](https://docusaurus.io/docs/markdown-features/diagrams)
    * [문법](https://mermaid.js.org/intro/syntax-reference.html)
    * [테마](https://mermaid.js.org/config/theming.html)
  </TabItem>
</Tabs>



## 기타 기능
* CSS 스타일링: [방법](https://docusaurus.io/docs/styling-layout)
* Swizzling: [방법](https://docusaurus.io/docs/swizzling)
  * 고급기능인 만큼 잘못 다뤘을 때 위험성이 크다.
  * 가능한 경우 CSS나 다른 기능을 사용해 구현할 것.
* 정적 에셋: [방법](https://docusaurus.io/docs/static-assets)
* 브라우저 지원: [방법](https://docusaurus.io/docs/browser-support)
  * 브라우저 종류 및 버전에 따라 JS 문법 일부가 적용되지 않을 수 있음.
  * JS변환 시 지정된 브라우저 종류 및 버전에서 구동 가능하도록 변환 됨.
* 검색 기능: [방법](https://docusaurus.io/docs/search)
* <Glossary id="SEO">SEO</Glossary>
  * [참고](https://docusaurus.io/docs/seo)
  * 메타 데이터 설정을 통해 최적화.
  * 전체 metadata: docusaurus.config.ts에 작성.
  * 단일 metadata: MDX에서 <head></head> 안에 작성 시 반영 됨.
  * robots.txt를 통해 검색 엔진 접근 설정.
  * [다국어 지원](https://docusaurus.io/docs/i18n/introduction)
  * [정적 사이트](https://docusaurus.io/docs/advanced/ssg)