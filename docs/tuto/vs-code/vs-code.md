# vs-code
## 유용한 단축키
### 편집기
* Ctrl + 숫자: 분할 편집기 탭 이동
* Ctrl + PageUp/Down: 탭 이동
* Ctrl + Tab: 편집기 탭 전환
* Ctrl + F4: 편집기 탭 닫기
### 터미널
* Ctrl + `: 터미널 패널 Toggle
* Ctrl + Shift+`: 새 터미널 탭 생성
* Ctrl + Shift+5: 새 분할 터미널 탭 생성
* Ctrl + PageUp/PageDown: 탭 이동
* Alt + 화살표키: 분할 터미널 탭 이동

## 유용한 확장
### Git
* Git Graph: Git 시각화 및 관리
### 환경 / 원격 환경
* Remote SSH: 원격지 접속
* Remote Explorer: 원격지 접속 시각화 패널
* Project Manager
    - 현재 프로젝트 환경 저장
    - 원격 접속 환경도 저장 가능.
    - Remote Explorer는 자주 접속하는 프로젝트의 개수가 늘어나면 관리가 불편.
    - 각 프로젝트의 이름 변경 가능.
    - code-workspace로 관리할 수도 있으나 마찬가지로 자주 접속하는 프로젝트가 늘어나면 관리가 불편.
    - 태그 및 검색 기능 제공.
* Resource Monitor: 컴퓨터 자원 보기
### 연구
* vscode-pdf: pdf파일을 vscode에서 볼 수 있다.
* gnuplot preview: gnuplot을 vscode에서 보기.
* python extension pack
    - Jupyter 환경 등 다양한 python 확장 통합 설치
    - plt.show를 vscode에서 볼 수 있다.
### Fortran
* Modern Fortran: 자동완성 등 Languange Server 제공
* fprettify
    - linting (python으로 설치해서 확장은 잘 되는 지 모르겠음.)
    - 이하 내용은 옵션
    - `-i 2`: indent를 2로 설정.
    - `--case 2 2 2 2`: uppercase로 설정
    - `--enable-replacements` & `--c-relations`: `.LT.`등 고전적 문법을 `<`등 현대적 c 문법으로 대체 (free form fortran)