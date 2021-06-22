---
id: dora-cli
title: dora-cli
---

# 命令行工具
生产当前项目的 git 信息，用于上传 sourcemap，对构建产物进行备份上传

npm link: [@doras/cli](https://www.npmjs.com/package/@doras/cli)
```shell
npm i @doras/cli -g
```
```shell
Usage: dora [options] [command]

Options:
  -h, --help                   display help for command

Commands:
  tag [options]                生成版本信息的代码文件, 可在项目 build 前使用，build 时打包进代码里
  backup [options]             备份打包后的产物
  sourcemap-upload [options]   上传 sourcemap 到前端错误监控系统
  deploy [options]             上传前端静态文件到服务器，先上传静态资源，最后覆盖 html
  sourcemap-restore [options]  还原出源码的堆栈，目前给 golang 程序调用
  help [command]               display help for command

  Run dora <command> --help for detailed usage of given command.
```
## `dora tag`
生成版本信息的代码文件, 可在项目 build 前使用，build 时打包进代码里

## `dora backup`
备份打包后的产物，上传到 dora-manage 进行管理

## `dora sourcemap-upload`
上传 sourcemap 到前端错误监控系统

## `dora sourcemap-restore`
还原出源码的堆栈，目前给其它程序调用
