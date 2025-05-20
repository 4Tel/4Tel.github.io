# 가역 행렬
## 정의
* $\Large AB=BA=I_{n}$을 만족할 때 $\Large A$를 가역행렬이라 하고, $\Large B=\Large A^{-1}$은 $\Large A$의 역행렬이라 한다.
* $\Large B$가 존재하지 않으면 $\Large A$는 비가역행렬이라 한다.
* 가역 행렬 집합 $\Large\text{GL}(n,\mathbb{R})=\text{GL}_{n}(\mathbb{R})=\begin{Bmatrix}A\in \text{Mat}_{n}(\mathbb{R})|A\normalsize\text{는 가역}\end{Bmatrix}$
## 유일성
* $\Large A$가 가역행렬이라면 $\Large A^{-1}$은 유일하다.
* $\Large B$와 $\Large C$가 $\Large A$의 역행렬이라면 $\Large B=C$이다.
* 수식(1) $\Large(BA)C=IC=C$
* 수식(2) $\Large B(AC)=BI=B$
* 수식(3) $\Large(BA)C=B(AC)\implies B=C$
## 2x2 가역행렬
* 수식(1) $\Large A=\begin{bmatrix}a & b \\ c & d\end{bmatrix}$는 가역이다 
* 수식(2) $\Large ad-bc\neq0$
* 수식(3) (1) $\Large\Leftrightarrow$ (2) (두 수식은 동치이다)
### 해
$$\Large A^{-1}=\frac{1}{ad-bc}\begin{bmatrix}d & -b \\ -c & a\end{bmatrix}$$
### 증명 1
* (1) $\Large\Rightarrow$ (2)
1) $\Large AA^{-1}=\begin{bmatrix}a&b\\c&d\end{bmatrix}\begin{bmatrix}p&q\\r&s\end{bmatrix}=\begin{bmatrix}ap+br&aq+bs\\cp+dr&cq+ds\end{bmatrix}=I_{2}$
2) $\Large \to \begin{cases}ap+br=1\\cp+dr=0\end{cases}\to \begin{cases} +(ad)p-(bc)p=d \\ -(bc)r+(ad)r=c \end{cases}$
3) $\Large ad-bc=0$이면 $\Large d=c=0\to cq+ds=0=1$이므로 모순이다.
4) 따라서 역행렬이 존재하면 $\Large ad-bc\neq0$이다.
### 증명 2
* (2) $\Large\Rightarrow$ (1)
1) $\Large ad-bc\neq0$이면 $\Large A^{-1}$의 해 꼴의 행렬 $\Large B$를 만들 수 있다.
2) $\Large BA=AB=I_2$이므로 $\Large ad-bc\neq0$이면 $\Large A$는 가역행렬이다.
