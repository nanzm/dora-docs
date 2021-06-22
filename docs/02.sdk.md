---
id: dora
title: dora
---
采集客户端数据，上报给 transit 服务

github: [https://github.com/nanzm/dora](https://github.com/nanzm/dora)

# packages
## `@doras/browser` 浏览器

### 安装
```shell
npm i @doras/browser
```

### 初始化

```ts
import Dora from "@doras/browser";

Dora.init({
  appEnv: "dev",
  serverUrl: "https://api.demo.cn/amp",
  appId: "wdssfar2312312dsad",
  appVersion: "0.0.1",
  debug: false
});

// 设置业务 user id
Dora.setUser("52467", { userName: "王小明", age: 18 });

```

### 打点统计
```ts
Dora.stat({
  statAction: "click",
  statCategory: "2020",
  statLabel: "test",
  statValue: 11
});

```

## `@doras/webapp` 小程序
:::note
开发中...
:::
