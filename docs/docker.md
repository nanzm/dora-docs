---
id: docker
title: docker
---

### docker 安装
检查是已安装：
```shell
docker --version
```

没有的话，请使用以下命令：
```shell
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

### docker-compose
检查是已安装：
```shell
docker-compose --version
```

没有的话，请使用以下命令：
```shell
 # 若是github访问太慢，可以用daocloud下载
sudo curl -L https://get.daocloud.io/docker/compose/releases/download/1.25.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
# 添加可执行权限
sudo chmod +x /usr/local/bin/docker-compose
# 测试安装结果
docker-compose --version

```
