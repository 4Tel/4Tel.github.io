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
### ncdu 방법
* UI 지원.
* 캐시 생성 시 시간 소요.
* 캐시 기반으로 빠른 수행.
* 단일 스레드로 느린 수행.
* 설치: `brew install ncdu`
* 사용법: `ncdu -o (저장파일명) (경로)`
### dust 방법
* UI 미지원.
* 병렬화를 통한 빠른 수행.
* 캐시 미생성. 매 수행 시 새로 검사.
* 설치: `brew install dust`
* 사용법: `dust (경로)`
### dua 방법
* UI 미지원.
* 병렬화를 통한 빠른 수행.
* 캐시 미생성. 매 수행 시 새로 검사.
* 설치: `brew install dua-cli`
* 사용법1: `dua  (경로)`
* 사용법2: `dua i (경로)`
### gdu-go 방법
* UI 지원.
* 병렬화를 통한 빠른 수행.
* 캐시 기반으로 빠른 수행.
* 설치: `brew install gdu`
* 사용법1: `gdu-go (경로)`
* 사용법2: `gdu-go -o (저장파일명) (경로)`
* 사용법3: `gdu-go -f (저장파일명)`