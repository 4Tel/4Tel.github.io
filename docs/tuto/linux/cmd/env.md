## 시스템 환경
```sh
getconf -a
```
## 환경 변수 목록
```sh
printenv
```
## Architecture
```sh
uname -m # machine
uname -p # processor
uname -i # platform
```
## 커널
```sh
uname -r
```
## glibc
* local에서는 주로 ldd를 사용.
* 주요 프로그램은 /bin/ldd를 사용.
```sh
getconf -a | grep LIBC
ldd --version
/bin/ldd --version
/lib64/libc.so.6 --version
```
## libstdc++
```sh
strings /usr/lib64/libstdc++.so.6 | grep GLIBCXX
strings $(/sbin/ldconfig -p|grep stdc++|awk '{print $NF}')|grep -ao 'GLIBCXX_[0-9]*\.[0-9]*\.[0-9]*' | sort -V | tail -1
```
## binutils
```sh
ld --version
```
