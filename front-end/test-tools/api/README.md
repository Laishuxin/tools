# README

## 项目目录结构

src

- apiTypings
  存放 API 声明文件，mock 和 routes 可以参照该文件填写相应的 template 和 API
- mock
  - template
    存放模板文件
  - index.ts
    导出 mock 生成的 json string 或者相应 json string 的生成函数
- server
  - routes
    存放路由配置，每一个子目录对应一个路由
  - index.ts
    将所有路由连接起来。
- utils
  存放工具类文件

## 添加接口

1. (op) 添加对应的 apiTypings
2. 在`mock/template`中根据 apiTypings 添加 mock 模板
3. 在`mock/index.ts`导出 mock 生成的接口对象
4. 根据接口的位置在`server/routes`中导出接口
5. 在`server/index.ts`中使用接口

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### No compiles for development with typescript

```
npm run dev
```

### Compiles and log output api for development

```
npm run test
```

### Compiles and minifies for production

```
npm run build
```
