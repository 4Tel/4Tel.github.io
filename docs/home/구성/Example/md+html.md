# Markdown & HTML
## 기울임 / 굵게
*italic* **bold**
```md
*italic* **bold**
```
## 링크
[text](./md+html)
<img src="/img/favicon.ico" width="30"/>
```md
[text](link)
![img](URL)
<img src="URL" width="{width}">
```

## 인용구
> Blockquote
```md
> Blockquote
```
## 리스트
* dot list
1. num list
```md
* dot list
1. num list
```
## 수평선
---
```md
---
```
## 코드 블록
`Inline code`
```
code
```
````md
`Inline code`
```
code
```
````
* [See also](https://docusaurus.io/docs/markdown-features/code-blocks)
### 타이틀
```sh title="title"
1
```
````
```sh title="title"
1
```
````
### 코드 강조
```sh
// highlight-next-line
1
2
// highlight-start
3
// highlight-end
```
```
// highlight-next-line
1
2
// highlight-start
3
// highlight-end
```

## 내용 접기
<details>
    <summary>details</summary>

    content
</details>
```md
<details>
    <summary>details</summary>

    content
</details>
```