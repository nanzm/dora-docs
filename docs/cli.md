---
id: dora-cli
title: 命令行工具
---

生产当前项目的 git 信息，用于上传 sourcemap，对构建产物进行备份上传
> [https://www.npmjs.com/package/@doras/cli](https://www.npmjs.com/package/@doras/cli)

```shell
npm i @doras/cli -g
```
```shell
Usage: dora [options] [command]

Options:
  -h, --help      display help for command

Commands:
  init            generate dora cli configuration file
  tag             generates the version tag info file
  backup          backup build files
  deploy          deploy build file to test server
  smu             upload sourcemap to front end error monitoring system Dora
  help [command]  display help for command

  Run dora <command> --help for detailed usage of given command.
```
## `dora init`
生成配置文件

## `dora tag`
生成版本信息的代码文件，在项目中使用

## `dora backup`
备份打包产物，上传到 dora-manage 进行管理

## `dora deploy`
同步到服务器上

## `dora smu`
上传 sourcemap 到错误监控系统，进行堆栈还原
