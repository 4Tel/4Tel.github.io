# 가역 행렬
## 정의
* $\large AB=BA=I_{n}$을 만족할 때 $\large A$를 가역행렬이라 하고, $\large B=\large A^{-1}$은 $\large A$의 역행렬이라 한다.
* $\large B$가 존재하지 않으면 $\large A$는 비가역행렬이라 한다.
* 가역 행렬 집합 $\large\text{GL}(n,\mathbb{R})=\text{GL}_{n}(\mathbb{R})=\begin{Bmatrix}A\in \text{Mat}_{n}(\mathbb{R})|A\normalsize\text{는 가역}\end{Bmatrix}$
## 유일성
* $\large A$가 가역행렬이라면 $\large A^{-1}$은 유일하다.
* $\large B$와 $\large C$가 $\large A$의 역행렬이라면 $\large B=C$이다.
* 수식(1) $\large(BA)C=IC=C$
* 수식(2) $\large B(AC)=BI=B$
* 수식(3) $\large(BA)C=B(AC)\implies B=C$
## 2x2 가역행렬
* 수식(1) $\large A=\begin{bmatrix}a & b \\ c & d\end{bmatrix}$는 가역이다 
* 수식(2) $\large ad-bc\neq0$
* 수식(3) (1) $\large\Leftrightarrow$ (2) (두 수식은 동치이다)
### 해
$$\large A^{-1}=\frac{1}{ad-bc}\begin{bmatrix}d & -b \\ -c & a\end{bmatrix}$$
### 증명 1
* (1) $\large\Rightarrow$ (2)
1) $\large AA^{-1}=\begin{bmatrix}a&b\\c&d\end{bmatrix}\begin{bmatrix}p&q\\r&s\end{bmatrix}=\begin{bmatrix}ap+br&aq+bs\\cp+dr&cq+ds\end{bmatrix}=I_{2}$
2) $\large \to \begin{cases}ap+br=1\\cp+dr=0\end{cases}\to \begin{cases} +(ad)p-(bc)p=d \\ -(bc)r+(ad)r=c \end{cases}$
3) $\large ad-bc=0$이면 $\large d=c=0\to cq+ds=0=1$이므로 모순이다.
4) 따라서 역행렬이 존재하면 $\large ad-bc\neq0$이다.
### 증명 2
* (2) $\large\Rightarrow$ (1)
1) $\large ad-bc\neq0$이면 $\large A^{-1}$의 해 꼴의 행렬 $\large B$를 만들 수 있다.
2) $\large BA=AB=I_2$이므로 $\large ad-bc\neq0$이면 $\large A$는 가역행렬이다.
