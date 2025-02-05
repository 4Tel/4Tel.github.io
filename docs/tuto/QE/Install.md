---
sidebar_position: 2
---
# 설치 방법
## 요구 환경
* [원문 링크](https://www.quantum-espresso.org/Doc/user_guide_PDF/user_guide.pdf#page=8.65)
1. 최소한의 시스템이 구축된 환경.
    - Command Shell
    - 필수 유틸리티 (make, awk, sed)
    - Git (v2.13이상)
1. Fortran 컴파일러 (gfortran, ifort 등)
1. MPI 라이브러리와 병렬 컴파일러 (병렬로 실행하고자 하는 경우)
1. OpenMP 컴파일러와 라이브러리 (대규모 병렬 실행하고자 하는 경우)
1. PGI 컴파일러와 NVidia HPC SDK (GPU를 이용해 실행하고자 하는 경우)

## Make로 설치
1. 소스 파일 다운로드
    - [QE 홈페이지](http://www.quantum-espresso.org)에서 다운 후 `tar -zxvf qe-xxx.tar.gz`로 압축 해제
    - 또는 `git clone --branch [tag] https://github.com/QEF/q-e.git`
1. configure 실행
    - `cd qe-xxx` 이후 `./configure`
1. Makefile 수정 (필요한 경우)
1. make 실행 `make all`