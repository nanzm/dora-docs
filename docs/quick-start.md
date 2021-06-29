---
id: quick-start 
title: 快速安装
---

> 推荐使用 docker-compose  
> 最低要求一台 2核 4G 的云服务器

相关依赖项（必须）

- mysql
- redis
- [nsq](https://nsq.io/)
- [elastic](https://www.elastic.co/cn/start)

[一键安装 docker、docker-compose ](/docs/docker)


### docker-compose 一键启动

相关配置文件在： [deployments](https://github.com/nanzm/dora-server/tree/master/deployments)

```shell
# 参考示例操作如下
wget https://github.com/nanzm/dora-server/archive/refs/heads/master.zip
unzip master.zip
mv dora-server-master/deployments  ./my-dora
cd my-dora

# 创建网络
docker network create dora_net

# 启动 mysql redis nsq elastic
docker-compose -f ./docker-compose.base.yml up -d

# 启动应用
docker-compose -f ./docker-compose.app.yml up -d

# 关闭
docker-compose -f ./docker-compose.base.yml down
docker-compose -f ./docker-compose.app.yml down
```

### 开发环境启动

应用配置文件示例在： [config.example.yml](https://github.com/nanzm/dora-server/blob/master/config.example.yml)

```shell
git clone git@github.com:nanzm/dora-server.git
cd dora-server
go mod tidy

# manage
go run cmd/manage/main.go -f config.yml

# transit
go run cmd/transit/main.go -f config.yml
```
