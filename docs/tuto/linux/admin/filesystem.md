# 파일 시스템 관리
## 정보
```bash
df -hPT
```
* `-h`: human readable.
* `-P`: POSIX output format.
* `-T`: File System Type.
## 마운트 정보
```bash
cat /etc/fstab
```
* 6개의 필드로 구성
1. 파일시스템 장치명
2. mount point (디렉토리/경로명)
3. 파일 시스템 종류
4. 파일 시스템 속성 옵션
5. dump 설정 여부
6. 파일 점검 옵션
### 파일 시스템 종류
* TODO
### 속성 옵션
* TODO

## 용량 확인
### du 방법
* 매우 느리지만 정확.
```bash
du -sh
```
또는
```bash
du -hd (depth)
```
### xfs_quota
* xfs 시스템인 경우
* quota 설정한 경우
* 매우 빠르지만 관련 설정 필요.
* TODO: 확인 요망.
* TODO: 설정 방법.
```bash
sudo xfs_quota -x -c 'report -h' (경로)
```
### quotatool
* ext4 시스템인 경우
* quota 설정한 경우
* 빠르지만 관련 설정 필요.
* TODO: 확인 요망.
* TODO: 설정 방법.
```bash
sudo quotatool -s (경로)
```
또는
```bash
sudo repquota -h (경로)
```
### 범용 패키지 방법
* du 명령어를 활용하여 용량 측정.
* UI, 병렬화, 인덱싱 등 추가 기능 지원

|패키지|UI|병렬화|인덱싱|설치|사용법|
|:---:|:---:|:---:|:---:|:-|:-|
|ncdu|TUI|X|O|`brew install ncdu`|`ncdu -o (저장파일명) (경로)`|
|[dust](https://github.com/bootandy/dust)|CLI|O|X|`brew install dust`|`dust (경로)`|
|[dua-cli](https://github.com/Byron/dua-cli/)|X|O|X|`brew install dua-cli`|`dua  (경로)`<br/>`dua i (경로)`|
|[gdu-go](https://github.com/dundee/gdu)|TUI|O|O|`brew install gdu`|`gdu-go (경로)`<br/>`gdu-go -o (저장파일명) (경로)`<br/>`gdu-go -f (저장파일명)`|
|duc|TUI|O|O|`brew install duc`|`duc (경로)`|
