---
id: dora-server
title: 服务端
---

服务端分为两个部分，`transit` 和 `manage`

github: [https://github.com/nanzm/dora-server](https://github.com/nanzm/dora-server)

# transit
接收上报信息，过滤校验后，对消息体的部分属性进行`MD5`，存入 `MQ` 消息队列（流量削锋），然后存入日志存储系统；
根据需要可以部署多个实例，来应对大量的流量

```text
sdk───────► transit ──────────► nsq ────────► elasticsearch
``` 
### 扩容
- transit: 收集服务，启动多个实列即可
- nsq: 消息队列，部署集群也是相当的简单 
- elasticsearch: 日志存储，可以自己搭建集群，生态成熟，相关资料丰富

> 文档待补充

# manage
为控制台提供查询接口，定时任务，告警监控，成员管理等；一般只需部署一个实例

> 给开发人员使用，一般情况下访问量不高，主要依赖 mysql、redis、elasticsearch (读取)
