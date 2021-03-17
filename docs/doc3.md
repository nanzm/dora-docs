---
id: doc3
title: 配置文件
---


### 启动配置项


```yml
debug: false

secret: ""


nsq:
  address: ""
  topic: ""
  channel: ""


redis:
  addr: ""
  password: ""
  db: 0

gorm:
  driver: ""
  dsn: ""

aliyun:
  accesskey: ""
  secret: ""
  endpoint: ""
  bucket: ""

slsLog:
  accesskey: ""
  secret: ""
  endpoint: "cn-hangzhou.log.aliyuncs.com"
  project: ""
  logStore: ""
  topic: ""
  source: ""
  consumerGroupName: ""
  consumerName: ""

mail:
  host: "smtp.qq.com"
  port: "587"
  username: ""
  password: ""

dingding:
  - robot:
      accessToken: ""
      secret: ""

```