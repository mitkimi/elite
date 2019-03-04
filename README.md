# ipadmin

> An administrator template via vue.js

## 写在前面
ipadmin（暂定名）是一个基于 vue.js 开发，以及用 ElementUI 作为基础UI框架完成的一个后台管理控制台的脚手架，帮助你快速的构建中后台产品。

基于以上理念，我们提供了以下的典型模板，共开发者使用和设计者参考。

``` bash
- Dashboard
  - 分析页
  - 监控页
  - 工作台
- 表单页
  - 基础表单页
  - 分步表单页
  - 高级表单页
- 列表页
  - 查询表格
  - 标准列表
  - 卡片列表
  - 搜索列表（项目/应用/文章）
- 详情页
  - 基础详情页
  - 高级详情页
- 结果
  - 成功页
  - 失败页
- 异常
  - 403 无权限
  - 404 找不到
  - 500 服务器出错
- 个人页
  - 个人中心
  - 个人设置
- 帐户
  - 登录
  - 注册
  - 注册成功
```
## development
### 开发者
``` bash
git clone https://github.com/mitkimi/admin.git
cd admin
npm install
npm run watch
## Serve with hot reload at localhost:8080
```
### 构建
``` bash
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 前期准备
你的本地环境需要安装 node 和 git。
我们的技术栈基于 ES2015+、 vue.js、 ElementUI、 axios、 moment.js、 webpack 以及 eslint，提前了解和学习这些只是会非常有帮助。

## 目录结构
我们为您生成了一个玩这个的开发框架，提供涵盖中后台开发的各类功能，以下是整个目录的结构
``` bash
├── build                    # 构建脚本
├── config                   # umi 配置，包含路由，构建等配置
├── src
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── i18n                 # 国际化资源
│   ├── layouts              # 通用布局
│   ├── router               # 路由
│   ├── utilitys             # 工具库
│   ├── views                # 页面级组件
│   ├── App.vue              # 主入口 vue 文件
│   └── main.js              # 主入口 JS
├── static                   # 静态文件
├── index.html               # index 页面
├── README.md
└── package.json
```