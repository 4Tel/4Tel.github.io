---
sidebar_position: 3
toc_max_heading_level: 2  
---
import PartialExample from './_markdown-partial-example.mdx';
import rawMDX from '!!raw-loader!./_markdown-partial-example.mdx';
import styles from './styles.module.css';
import rawStyles from '!!raw-loader!./styles.module.css';
import _admonition from './_admonition.md'
import rawAdmonition from '!!raw-loader!./_admonition.md'


# Docusaurus MDX
## 탭
<Tabs>
  <TabItem value='MDX 파일'>
    ``` html
    import Tabs from '@theme/Tabs';
    import TabItem from '@theme/TabItem';

    <Tabs groupId='fruits'>
      <TabItem value="apple" label="Apple1" default> This is an apple 🍎 </TabItem>
      <TabItem value="banana" label="Banana1"> This is a banana 🍌 </TabItem>
    </Tabs>

    <Tabs groupId='fruits' className={`${styles.tab}`}>
      <TabItem value="apple" label="Apple2" default> This is an 🍎 apple2 </TabItem>
      <TabItem value="banana" label="Banana2"
        attributes={{className: styles.yellow}}
        className={`${styles.content}`}>
        * This is a 🍌 banana2
      </TabItem>
    </Tabs>
    ```
  </TabItem>
  <TabItem value='CSS 파일'>
    <CodeBlock language='css' title="styles.module.css">
      {rawStyles}
    </CodeBlock>
  </TabItem>
  <TabItem value='결과' default>
    <Tabs groupId='fruits'>
      <TabItem value="apple" label="Apple1" default> This is an apple 🍎 </TabItem>
      <TabItem value="banana" label="Banana1"> This is a banana 🍌 </TabItem>
    </Tabs>
    <Tabs groupId='fruits' className={`${styles.tab}`}>
      <TabItem value="apple" label="Apple2" default> This is an 🍎 apple2 </TabItem>
      <TabItem value="banana" label="Banana2"
        attributes={{className: styles.yellow}}
        className={`${styles.content}`}>
        * This is a 🍌 banana2
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value='참고'>
    * 그룹 묶기 [참고](https://docusaurus.io/docs/markdown-features/tabs#syncing-tab-choices)
    * 커스터마이징 [참고](https://docusaurus.io/docs/markdown-features/tabs#customizing-tabs)
    * 쿼리 사용(URL에 포함) [방법](https://docusaurus.io/docs/markdown-features/tabs?#query-string)
    * 검색 엔진 색인 방지 [방법](https://docusaurus.io/docs/markdown-features/tabs#displaying-a-default-tab): \<Tabs lazy/>사용
    (사용법예제?)
  </TabItem>
</Tabs>

## 코드 블록
### 언어 설정
* [언어 설정](https://docusaurus.io/docs/markdown-features/code-blocks#supported-languages) (설정 후 재실행 필요)
* [지원 언어](https://prismjs.com/#supported-languages)
* [커스텀 언어 지원](https://github.com/PrismJS/prism/tree/master/components)
### 코드 강조
<Tabs>
  <TabItem value='방법 1'>
    ``` py
    // highlight-next-line
    1
    2
    // highlight-start
    3
    4
    // highlight-end
    ```
  </TabItem>
  <TabItem value='방법 2'>
    * 코드 삽입 시 line number 변경 필요.
    ```` sh
    ``` sh {1,3-4}
    1
    2
    3
    4
    ```
    ````
  </TabItem>
  <TabItem value='결과' default>
    ```sh
    // highlight-next-line
    1
    2
    // highlight-start
    3
    4
    // highlight-end
    ``` 
  </TabItem>
</Tabs>

### 커스텀 강조
<Tabs>
  <TabItem value='설정'>
    1. docusaurus.config.ts에 magicComment 추가.
    2. src/css/custom.css 수정.
  </TabItem>
  <TabItem value='코드'>
    ````
    ```sh
    // error-line
    error line
    ```
    ````
  </TabItem>
  <TabItem value='결과' default>
    ```sh
    // error-line
    error line
    ```
  </TabItem>
  <TabItem value='참고'>
    * 커스텀 강조 추가 [참고](https://docusaurus.io/docs/markdown-features/code-blocks#custom-magic-comments)
    * 특정 className을 적용시켜 CSS 적용이 가능하도록 설정함.
  </TabItem>
</Tabs>

### JSX 코드블록
<Tabs>
  <TabItem value='Static Code'>
    * [참고](https://docusaurus.io/docs/markdown-features/code-blocks#usage-in-jsx)
  ``` md
  <pre>
    <b>Input: </b>1 2 3 4{'\n'}
    <b>Output: </b>"366300745"{'\n'}
  </pre>
  ```
  </TabItem>
  <TabItem value='Static 결과'>
    <pre>
      <b>Input: </b>1 2 3 4{'\n'}
      <b>Output: </b>"366300745"{'\n'}
    </pre>
  </TabItem>
  <TabItem value='Live code'>
    * [설정참고](https://docusaurus.io/docs/markdown-features/code-blocks#interactive-code-editor)
      * `npm install @docusaurus/theme-live-codeblock`
      * docusaurus.config.ts 설정. 
    ````
    ```js live noInline
    function Clock(props) {
      const [date, setDate] = useState(new Date());
      useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
          clearInterval(timerID);
        };
      });

      function tick() {
        setDate(new Date());
      }

      return (
        <div>
          <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
    render(<Clock/>);
    ```
    ````
  </TabItem>
  <TabItem value='Live 결과' default>
    ```js live noInline
    function Clock(props) {
      const [date, setDate] = useState(new Date());
      useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
          clearInterval(timerID);
        };
      });

      function tick() {
        setDate(new Date());
      }

      return (
        <div>
          <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
    render(<Clock/>);
    ```
  </TabItem>
</Tabs>

## Component Importing
### Raw in MDX
* importing text in markdown
* 파일 내용을 raw-text로 첨부
<Tabs>
  <TabItem value='code'>
    <CodeBlock language='md'>{rawMDX}</CodeBlock>
  </TabItem>
  <TabItem value='결과' default>
    ``` md
    import rawMDX from '!!raw-loader!./_markdown-partial-example.mdx';
    <CodeBlock language='md'>{rawMDX}</CodeBlock>
    ```
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
</details>
