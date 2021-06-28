---
id: todo
title: 开发计划
---

以下列出主要功能点：

## sdk [source](https://github.com/nanzm/dora)
- [x] 脚本错误上报
- [x] 接口错误上报
- [x] 资源加载错误上报
- [x] pv uv 上报
- [x] 性能数据上报
- [x] 简易打点
- [x] 插件功能（待增强）
- [ ] 采样率
- [ ] 增加单元测试 、e2e 测试
- [ ] 小程序支持（滞后）

## 服务端 [source](https://github.com/nanzm/dora-server)
- [x] transit md5 校验过滤
- [x] transit 投递到 mq
- [x] transit 投递到 阿里云 sls
- [x] transit 投递到 elasticsearch
- [x] manage 日志指标查询接口（工作量大）
- [ ] manage 日志指标查询 同时兼容 elasticsearch 和 sls
- [ ] manage 日志自定义查询接口
- [ ] manage 构建参物备份管理接口
- [ ] manage 告警服务接口
- [ ] manage 用户成员管理接口


## 控制台  [source](https://github.com/nanzm/dora-webapp)
- [x] 大盘数据展示、查询
- [x] pv uv 展示、查询
- [x] 脚本错误展示、查询
- [ ] sourcemap 管理
- [x] api 错误展示、查询
- [x] 性能数据展示、查询
- [ ] 打点数据展示、查询
- [ ] 日志查询
- [ ] 告警配置、查看
- [ ] 用户成员管理
- [ ] 构建参物备份管理


## 命令行工具 cli
- [x] dora tag 命令
- [ ] dora backup 命令
- [ ] dora deploy 命令
- [ ] dora sourcemap-upload 命令
- [ ] dora sourcemap-restore 命令

