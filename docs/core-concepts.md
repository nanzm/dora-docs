---
id: core-concepts 
title: 核心概念
---

## 工作原理

系统分为三个部分

- 采集端 `dora`
- 服务端 `dora-server` 分为 `transit` 和 `manage` 两个服务
- 控制台 `dora-webapp`

`transit` 实例接收到 `sdk` 上报数据后，进行校验和过滤，投递到消息队列，随后存储到日志服务中；

控制台 `webapp` 由服务端 `manage` 提供管理展示等接口；日志服务`elasticsearch` 强大的查询功能，对于大量的监控数据，实现快速的搜索。

系统简单可靠，易维护。

### 简要图示

```
                             +-----> transit
                             |
                             |
                             +-----> transit
sdk 采集 -----> nginx/slb ---+                -------> mq ------> logstore
                             |                                     
                             +-----> transit                         |
                             |                                       |
                             |                                       |
                             +-----> ...more                         v       +--->  控制台
                                                                             |
                                                                   manage +--+
                                                                             |
                                                                             +--->  告警
                     
```

### 日志存储

本系统适配的日志存储方案：

- elasticsearch：社区成熟，搜索功能强大，可自建
- clickhouse: （滞后）

