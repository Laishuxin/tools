# koa的基本使用

## 中间件与洋葱模型

koa可以配置多个中间件，中间件依靠`next()`逐层执行

`next()`的返回值是上一个中间件函数的返回值

常见的中间件分类有:

1. 错误处理中间件
2. 应用级别中间件。(不设置拦截路径)



## 路由层次化

### prerequisite knowledge

目录结构：

```
src
-------------------------------
|-routes
|--api
|	index.js
|--user
| 	index.js
|index.js
```

### 层次化划分

```js
// src/routes/api/index.js
// 实现api路由

const Router = require("@koa/router");
const router = new Router();

router.get("/setting", async (ctx, next) => {
  ctx.body = "/setting";
  next();
});

module.exports = router;
```

```js
// src/routes/user/index.js
// 实现user路由

const Router = require("@koa/router");
const router = new Router();

router.get("/profile", async (ctx, next) => {
  ctx.body = "/profile";
  next();
});

module.exports = router;
```

```js
// src/routes/index.js
// 将所有子路由联结
const Router = require("@koa/router");
const apiRouter = require("./api");
const userRouter = require("./user");

const router = new Router();
router.use("/user", userRouter.routes());
router.use("/api", apiRouter.routes());

module.exports = router;
```

```js
// src/index.js
// 使用路由
const Koa = require("koa");
const router = require("./routes");
const app = new Koa();

app.use(router.routes()).use(router.allowedMethods());
app.listen(9999);

console.log("server start at 127.0.0.1:9999");
```



## koa与mock搭配使用



## 常用中间件

1. post请求处理中间件

   [koa-bodyparser](https://www.npmjs.com/package/koa-bodyparser)

2. (op)模板引擎处理中间件

   [art-template]()

3. session处理中间件

   [koa-session](https://www.npmjs.com/package/koa-session)

4. 路由中间件

   [koa-router](https://www.npmjs.com/package/koa-session)

5. 跨域请求

   @koa/cors