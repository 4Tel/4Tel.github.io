# sudo
* superuser do
## 권한 부여
### sudoers 파일 편집
```bash
visudo
```
또는
```bash
vi /etc/sudoers
```
### sudoers.d 폴더 편집
* `/etc/sudoers.d/` 디렉토리에 개별 파일로 sudoers 설정을 추가 가능.
* `/etc/sudoers` 파일과 동일한 형식으로 작성되어야 함.
### sudoers 파일 구조
* `Defaults` : 기본 설정
* `User_Alias` : 사용자 별칭 정의
* `Runas_Alias` : 실행 권한 별칭 정의
* `Host_Alias` : 호스트 별칭 정의
* `Cmnd_Alias` : 명령어 별칭 정의
