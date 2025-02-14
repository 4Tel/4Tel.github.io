---
sidebar_position: 1
toc_max_heading_level: 2
---
# 아나콘다
## 환경
### 환경 목록
```bash
conda env list
```
### 환경 생성
```bash
conda create -n (new) python=(version)
```
### 환경 복사
```bash
conda create -n (new) --clone (old)
```
### 환경 활성
```bash
conda activate (env)
```
### 환경 비활성
```bash
conda deactivate
```
### 환경 삭제
```bash
conda remove -n (old) --all
```
### 환경 이름 변경
* 직접적인 이름 변경 기능이 없어서 복사 및 삭제.
```bash
conda create -n (new) --clone (old)
conda remove -n (old) --all
```

## 패키지
### 패키지 목록
```bash
conda list
```
### 패키지 설치
* 채널 미사용.
```bash
conda install (package)
```
* 채널 사용
```bash
conda install -c conda-forge (package)
conda install conda-forge::(package)
```
### 패키지 삭제
```bash
conda uninstall (package)
```
### 패키지 업데이트
```bash
conda update --all
```