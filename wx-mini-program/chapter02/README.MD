
## 微信小程序开发框架

基本构成
WXML
WXSS
WXS 是对WXML一种增强语言，可以对请求数据进行过滤，帮助
JS

### WXML

小程序框架设计的标签语言，结合组件、WXS和事件系统，可以构建出页面的结构。

语法：
<标签名 属性名1="" 属性名2="" ...>
   ...
</标签名>
<view class="className" data-name="A">
    hello, world!
    <view>
        hello, China!
    </view>
</view>

### WXML特性之数据绑定

- 数据绑定
```
<!-- index.wxml -->
<view>
    <text>{{message}}</text>
</view>

index.js
Page({
    data: {
        message: 'hello world~'
    }
})
```

- 列表渲染

```
<!-- index.wxml -->
<view>
    <block wx:for="{{items}}" wx:for-item="item" wx:key="index" >
        <view>{{index}}:{{item.name}}</view>
    </block>
</view>

// index.js
Page({
    data: {
       items: [
           {name: '商品A'},
           {name: '商品B'}
           {name: '商品C'}
           {name: '商品D'}
           {name: '商品E'}
       ]
    }
})
```
- 条件渲染
```
<!-- index.wxml -->
<view>今天吃什么？</view>
<view wx:if="condition===1">饺子</view>
<view wx:elif="condition===2">面条</view>
<view wx:else>米饭</view>
// index.js
Page({
    data: {
       condition: Math.floor(Math.random()*3+1))
    }
})
```

- 模板引用

小程序宿主环境差异

IOS  ----> JavaScriptCore

安卓  ----> X5内核

IDE  ----> nwjs

MINA框架讲解

WXS
模块
变量
注释
运算符

小程序运行机制

启动
- 冷启动
- 热启动

加载

小程序生命周期
onLaunch
onShow
onHide
onError   ---->  globalData

小程序页面生命周期
onLoad
onShow
onReady      ------> data
onHide
onUnload


## 微信小程序原生组件



## 微信小程序原生api



## 小程序核心开发技能



## 小程序开发项目实战案例



## 小程序开发实战注意事项与进阶指导
