---
sidebar_position: 1
---
# Markdown
* [github 문서 참고](https://docs.github.com/ko/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#headings)
## 텍스트
### 기본
#### :heavy_check_mark: 기울임
*기울임*
```md
*기울임*
```
#### :heavy_check_mark: 굵게
**굵게**
```md
**굵게**
```
#### :heavy_check_mark: 취소선
~~취소선~~
```md
~~취소선~~
```
### 인용구
> Blockquote
```md
> Blockquote
```
### 수평선
---
```md
---
```
### 목록
#### :heavy_check_mark: Dot List
- Dot List 1
* Dot List 2
+ Dot List 3
    - Nested List
```md
- Dot List 1
* Dot List 2
+ Dot List 3
    - Nested List
```
#### :heavy_check_mark: Num List
1. Num List
3. 연속성  

. 

2. 불연속성
```md
1. Num List
3. 연속성  

. 
 
2. 불연속성
```
#### :heavy_check_mark: Task List
- [ ] Task List 1
* [x] Task List 2
```md
- [ ] Task List 1
* [x] Task List 2
```
### 헤더 id {#header-id}
```md
### 헤더 id {#header-id}
<h3 id="header-id>헤더 id</h3>
```
### 이모티콘
:x: :heavy_check_mark:
```js
:x: :heavy_check_mark:
```
## 링크
### 단순 링크
http://www.example.com
```md
http://www.example.com
```
### 텍스트 링크
[1회용](#텍스트-링크 "호버 시 설명")  
[다회용]  
[다회용2][다회용]

[다회용]: #텍스트-링크 "설명"
```md
[일회용](link "호버 시 설명")  
[다회용]  
[다회용2][다회용]

[다회용]: link "설명"
```
### 각주/주석
* 각주[^각주]

[^각주]: 각주
```md
* 각주[^각주]

[^각주]: 각주
```
### 이미지
<img src="/img/favicon.ico" width="30"/>
```md
<img src="URL" width="{width}" className="class for CSS">
```
* 테마에 따른 이미지 설정 [방법](https://docusaurus.io/docs/markdown-features/assets#themed-images)


## 표 / 테이블
| 기본 | 중앙 정렬 | 좌측 정렬 | 우측 정렬 |
|  -   | :-:      |        :- |       -: |
|    1 |        2 | 3         | 4        |
```js
| 기본 | 중앙 정렬 | 좌측 정렬 | 우측 정렬 |
|  -   | :-:      |        :- |       -: |
|    1 |        2 | 3         | 4        |
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


