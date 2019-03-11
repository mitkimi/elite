# Elite Admin Panel - EAP

> Vue 家族的后台面板前端解决方案

## 写在前面
Elite Admin Panel 是一个基于 vue.js 开发，以及用 ElementUI 作为基础UI框架完成的一个后台管理控制台的脚手架，帮助你快速的构建中后台产品。

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
git clone https://github.com/mitkimi/elite.git
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

## 开发建议
### 后端
#### 状态码
我们建议所有状态码以 0 作为分界线
错误代码均小于 0，以下状态码为建议使用（带有 * 号的状态码已经大量在模板中使用，接受该建议可以提高开发效率）
```bash
  -1        当前条件下查询结果为空（查无此数据）
  -2        创建失败
* -1000     登录状态丢失，需要重新登录
```
#### 接口格式
```javascript
{
  code: 0,                   // Number, 状态码
  msg: 'query success',      // String, 返回消息，方便提供给用户看
  data: {},                  // JSON, 查询为列表时为数组，查询单个时为对象
}
```
#### 护照侧
用户的登录、登出以及登录状态、注册等相关操作我们称作“护照”（Passport）
ipadmin 在护照侧使用的策略是，将后端返回的 token 存入 localStorage 里，在每次鉴权接口移步请求时带在请求头 header 里。
因此我们建议后端开发者在鉴权接口之前设置拦截器，检查 token 是否存在以及其可用性
如果不需要 token 鉴权，请在 utilitys 中的 ipAxios.js 中把 useToken 置为 false 即可