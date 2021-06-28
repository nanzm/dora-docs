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

## 操作示例

### 数据库等启动

相关配置文件在： [deployments](https://github.com/nanzm/dora-server/tree/master/deployments)

```shell
# 参考示例操作如下
wget https://github.com/nanzm/dora-server/archive/refs/heads/master.zip
unzip master.zip
mv dora-server-master/deployments  ./my-dora
cd my-dora

# 启动 mysql redis nsq
docker-compose -f ./docker-compose.base.yml up -d

# 启动 elasticsearch 单节点（生产推荐使用集群）
docker-compose -f ./elasticstack.yml up -d

# 关闭
docker-compose -f ./docker-compose.base.yml down
docker-compose -f ./elasticstack.yml down
```

### 应用启动

应用配置文件示例在： [config.example.yml](https://github.com/nanzm/dora-server/blob/master/config.example.yml)

请拷贝 `config.example.yml` 修改

#### docker 启动
```shell
docker-compose -f ./docker-compose.app.yml up -d
```

#### 二进制启动 (后续会提供二进制文件下载)
```shell
wget https://github.com/nanzm/dora-server/archive/refs/heads/master.zip
unzip master.zip
mv dora-server-master  ./my-dora-server
cd my-dora-server

# manage
go build -o manage  cmd/manage/main.go
./manage -f config.yml

# transit
go build -o transit  cmd/transit/main.go
./transit -f config.yml
```
