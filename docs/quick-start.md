---
id: quick-start
title: 快速安装
---

推荐使用 docker-compose

相关依赖项（必须）
- mysql
- redis
- [nsq](https://nsq.io/)
- [elastic](https://www.elastic.co/cn/start)


> 最低要求一台 2核 4G 的云服务器

## 操作示例
### 数据库等启动 
相关配置文件在： https://github.com/nanzm/dora-server/tree/master/deployments

```shell
# 参考示例操作如下
wget https://github.com/nanzm/dora-server/archive/refs/heads/master.zip
unzip master.zip -d dora-server
mv dora-server/deployments  ./dora-env
cd dora-env

# 启动 mysql redis nsq
docker-compose -f ./docker-compose.base.yml up -d

# 启动 elasticsearch 单节点（生产推荐使用集群）
docker-compose -f ./elasticstack.yml up -d


```

### 应用启动
应用配置文件示例在： https://github.com/nanzm/dora-server/blob/master/config.example.yml

请拷贝 `config.example.yml` 修改

二进制启动 (后续会直接提供 二进制文件下载)
```shell
# manage
go build -o manage  cmd/manage/main.go
./manage -f config.yml

# transit
go build -o transit  cmd/transit/main.go
./transit -f config.yml
```

docker-compose
```shell
docker-compose -f ./docker-compose.app.yml up -d
```
