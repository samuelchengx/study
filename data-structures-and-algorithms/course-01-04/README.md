
## 《Outliers》 中文译名 《异类-不一样的成功启示录》

- 作者：马尔科姆～格拉德威尔

## 精通一个领域

- Chunk it up（切碎知识点）
- Deliberate practicing（刻意练习）
- Feedback（反馈）

## 如何计算算法的复杂度

- 时间复杂度
- 空间复杂度

-- What is Big O? --

- O(1): Constant Complexity: Constant 常数复杂度
var n = 1000;
console.log('hey, it is ', 1);

- O(log(n): Logarithmic Complexity: 对数复杂度
```javascript
for(var i = 0; i<n; i=i*2){
  console.log('hey, it is: ', i);
}

- O(n): Linear Complexity: 线性时间复杂度

```javascript
for(var i = 0; i<n; i++){
    console.log('hey, it is: ', i);
}
```
- O(n^2): N square Complexity 平方
```javascript
for(var i = 0; i<n; i++){
    for(var j = 0; j<n; j++){
        console.log('hey, it is i and j:', i, j);
    }
}
```
- O(n^3): N square Complexity 立方

- O(2^n): Exponential Growth 指数


- O(n!): Factorial 阶乘
```javascript
for(var i = 0; i<factorial(n); i++){
    console.log('hey, it is: ', i);
}
```

### To calculate: 1+2+3+...+n

- 1 + 2 + 3 + ... + n (总共累加n次)
```
    y = 0
    for i = 1 to n:
    y=i+y
```

- 求和公式:n(n+1)/2
```
y = n * (n + 1) / 2
```

从O(n)优化到O(1)时间复杂度，瞬间执行完毕。

###What if recursion ? Fibonacci array: 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

F(n) = F(n-1) + F(n-2)
```
def fib(n):
if n == 0 or n == 1:
return n
return fib(n - 1) + fib(n - 2)
```
时间复杂度为O(2^n)

## 主定理维基百科

https://zh.wikipedia.org/wiki/%E4%B8%BB%E5%AE%9A%E7%90%86

!./suanfa.png


## 如何通过LeetCode进行算法练习

https://leetcode-cn.com/

