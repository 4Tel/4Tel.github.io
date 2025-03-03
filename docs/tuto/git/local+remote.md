# 로컬+원격
## 로컬 변경사항 유지
* 로컬 변경 중 원격 변경사항이 생긴 경우
1. 로컬 변경사항 유지 `git stash`
1. 원격 변경사항 가져오기 `git fetch origin`
1. 원격 변경사항 반영 `git rebase origin/main`
1. 로컬 변경사항 가져오기 `git stash pop`
1. 충돌 발생 시 해결 `git add <file>`