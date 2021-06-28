---
id: core-concepts
title: 核心概念
---


## 工作原理
系统分为三个部分采集端 `dora`、服务端 `dora-server`、控制台 `dora-webapp`； 服务端 `transit` 实例接收到 `sdk` 上报数据后，进行校验和过滤，投递到消息队列，随后存储到日志服务中；
控制台 `webapp` 的管理展示接口由服务端 `manage` 提供接口； 强大的查询功能依赖日志服务实现，`manage`对其封装，同时支持 `elasticsearch` 和 `sls`，对于大量的监控数据，也能快速的搜索。

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

- 阿里云的sls：成本较低，免运维，大部分公司已经在用 （[什么是sls日志服务？](https://help.aliyun.com/document_detail/48869.html)）
- elasticsearch：社区成熟，搜索功能强大，可自建（未完成，滞后）

