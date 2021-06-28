---
id: dora-server
title: dora-server
---

服务端分为两个部分，`transit` 和 `manage`

github: [https://github.com/nanzm/dora-server](https://github.com/nanzm/dora-server)

# transit
接收上报信息，过滤校验后，对消息体的部分属性进行`MD5`，存入 `MQ` 消息队列（流量削锋），然后存入日志存储系统；
根据需要可以部署多个实例，来应对大量的流量

# manage
为控制台提供查询接口，定时任务，告警监控，成员管理等；一般只需部署一个实例
