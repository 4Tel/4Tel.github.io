---
sidebar_position: 1
toc_max_heading_level: 3
---

# Markdown & HTML
## 기울임 / 굵게
*italic* **bold**
```md
*italic* **bold**
```
## 링크
### 텍스트 링크
[text](./md+html)
```md
[text](link)
```
### 이미지
<img src="/img/favicon.ico" width="30"/>
```md
<img src="URL" width="{width}" className="class for CSS">
```
* 테마에 따른 이미지 설정 [방법](https://docusaurus.io/docs/markdown-features/assets#themed-images)

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
### inline code block
This is `Inline code block`
```md
This is `Inline code block`
```
### code block
```
simple code block
```
````md
```
simple code block
```
````
* Code block 적용하기 [참고](https://docusaurus.io/docs/markdown-features/code-blocks)
### 타이틀
```sh title="title"
1
```
````
```sh title="title"
1
```
````
### 줄번호
```sh showLineNumbers
1
```
````
```sh showLineNumbers
1
```
````
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