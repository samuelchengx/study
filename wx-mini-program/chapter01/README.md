

## 微信小程序介绍与准备

### 背景

- 为什么会有微信小程序

更好的体验、规范和管理。

- 什么是小程序

不需要安装即可使用的应用，实现了应用"触手可及"；
用户通过扫一扫、搜一下即可打开应用，体现"用完即走"的理念；
用户不用关心安装太多应用，应用无处不在，又"无需安装卸载"。

- 小程序和移动应用有什么区别

app vs 小程序
无需安装
不占内存
易传播

- 小程序能做什么
内容/工具 知乎、微博、摩拜、腾讯地图
零售小程序 拼多多、京东、蘑菇街
游戏娱乐小程序 跳一跳、斗地主等

## 上手第一个小程序
注册小程序账号->激活邮箱->信息登记->登录小程序管理后台->完善小程序信息->绑定开发者

安装微信开发者工具

下载地址：https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html

## 小程序代码结构

- app.js   项目启动文件
- app.json 项目配置
- app.wxss 全局样式文件
- project.config.json 微信开发者工具配置
- pages  项目页面
- utils  工具函数

### app.json配置文档

```javascript
https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE
```

```javascript
{
  "pages":[
    "pages/index/index",
    "pages/logs/logs"
  ],
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "WeChat",
    "navigationBarTextStyle":"black"
  }
}
```

- 预览版本

- 开发版本

- 体验版本

- 审核版本

- 线上版本







