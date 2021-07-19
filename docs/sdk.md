---
id: dora
title: 采集上报
---
采集客户端数据，上报给 transit 服务

github: [https://github.com/nanzm/dora](https://github.com/nanzm/dora)

## `@doras/browser` 浏览器 
> Gzipped Size:  6.97 KB

### 安装
```shell
npm i @doras/browser
```

### 初始化

```ts
import { Browser } from "@doras/browser";

Browser.init({
  serverUrl: "http://127.0.0.1:8221/collect",
  appId: "44992867-5a85-4804-849a-d525be1fa77c",
  appVersion: "0.0.1",
  appEnv: "dev",
});

```

### 主动捕获
```ts
try {
  // ...your code
}catch (e) {
  Browser.catchException("some error", e)
}
```

### 设置业务 user id
```ts
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
