* Radial Distribution Function
* 물질의 분포를 시각화 하는 방법.
* $\large\displaystyle g(r)=\frac{\langle\rho(r)\rangle}{\rho_\text{tot}}=\lim_{dr\rarr 0}\frac{p(r)}{4\pi r^2dr}\cdot\frac{V}{N}$
* $\large g=1$: 균일 분포 (이상 기체)
## 주의사항
#### 주의사항 1
* dr이 작은 경우 RDF 극대화 문제.
* 동일한 물질이 더 작은 부피에 위치.
* 더 높은 밀도로 보이는 효과가 나타날 수 있다.
* 예시
    * 거리 1에 물질 1개가 있는 경우.
    * dr이 2이면 (r,r+dr)의 밀도가 1이라 하자.
    * dr이 1이면 (r,r+dr)의 밀도는 약 2가 된다.  
    ($p,r,V,N$은 변하지 않으므로)
#### 주의사항 2
* dr에 따른 RDF 왜곡 문제.
* 예시 1
    * 거리 3,4,5에 물질이 1개씩 있는 경우
    * dr=3 -> 거리 3에 물질 3개 위치.
    * dr=2 -> 거리 2에 물질 1개, 거리 4에 물질 2개 위치.
    * dr=1 -> 거리 3,4,5에 물질 1개씩 위치.
* 예시 2
    * 거리 3,5,5에 물질이 1개씩 있는 경우
    * dr=3 -> 거리 3에 물질 3개 위치
    * dr=2 -> 거리 2에 물질 1개, 거리 4에 물질 2개 위치.
    * dr=1 -> 거리 3에 물질 1개, 거리 4에 물질 0개, 거리 5에 물질 2개 위치.
* 예시 3
    * 거리 3,4,5,8,8에 물질이 1개씩 있는 경우
    * dr=3 -> 거리 3에 물질 3개 위치, 거리 6에 물질 2개 위치
    * dr=1 -> 거리 3,4,5에 물질 1개 위치, 거리 8에 물질 2개 위치.
    * -> dr=1인 경우 거리 8의 RDF 값을 3~5와 비교했을 때 밀도가 높다고 오인할 수 있음.