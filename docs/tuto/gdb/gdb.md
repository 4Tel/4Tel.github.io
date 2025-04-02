## 필요 설정
* -g: 디버깅 가능 (필수)
* -O0: 최적화X (권고)
## 변수 목록
```sh
info variables
```
또는
```sh
info variables (키워드)
```
## 변수 출력
```sh
p (변수명)
```
```sh title="hex type"
p/x (변수명)
```
## 변수 추적
* 변수 읽기/쓰기 시 break
```sh
awatch (변수명)
```
## type cast
```sh
* (real_8 *) modulename_mp_varname_@2
```