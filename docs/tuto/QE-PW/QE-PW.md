---
sidebar_position: 1
---
# QE-PW
## 소개
* QE의 가장 핵심은 PWscf 패키지이다.
* 양자역학의 다체 문제에 대한 해를 구하는 DFT을 사용한다.
* 슈뢰딩거 방정식을 풀이에 적합한 형태로 변형한 콘-샴 방정식의 해를 구한다.
* 파동함수를 다루는 여러 basis 중 <Glossary id="PW"/>를 사용한다.
* 해를 구하기 위해 SCF 방법을 사용한다.
## PWscf 흐름도
```mermaid
flowchart LR;
    A([run])-->B[설정]
    B-->C1[NSCF];
    B-->SCF-->D[MD];
    C1-->E[Post Process];
    D-->E;
```
## 목적
* PW의 동작에 대해 이해한다.
    * Plane-Wave Basis DFT Package의 동작은 소프트웨어에 따른 차이가 적다.
    * 다른 PW 소프트웨어를 이해하는데 도움이 된다.
* 수식을 구현하는 방법을 이해한다.
    * 심화 전산물리를 위한 기초를 쌓을 수 있다.
* QE-PW를 통해 DFT 수식을 이해한다.
    * 막연한 DFT에 대한 이해를 구체화할 수 있다.
* 다른 QE 패키지 이해를 위한 기반을 마련한다.
    * PW 이외의 계산을 위한 기반을 마련한다.
## 전략
* [QE 코드](https://gitlab.com/QEF/q-e)를 참고한다.
* 초기 QE 코드를 통해 가장 핵심 부분을 먼저 이해한다. (기준: [PW-1.2.0](https://gitlab.com/QEF/q-e/-/tree/PW-1.2.0))
* 파일 위치, 변수명 등이 변하므로 최신 안정 버전([qe-7.3.1](https://gitlab.com/QEF/q-e/-/tree/qe-7.3.1))을 기준으로 한다.
* 초기 버전 이후에 구현된 코드를 비교해 추가된 개념을 이해한다.