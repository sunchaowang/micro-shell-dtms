# micro-monorepo
--
## 项目地址
- [micro-monorepo](https://github.com/sunchaowang/micro-monorepo)

## 项目介绍
- 本项目是一个多仓库项目，主要包含三个仓库，分别是：
  - [micro-monorepo](https://github.com/sunchaowang/micro-monorepo)

## 项目结构
- 本项目主要包含三个仓库，分别是：
- [micro-monorepo](https://github.com/sunchaowang/micro-monorepo)
  - apps
    - [dtms-web](https://github.com/sunchaowang/micro-monorepo)
    - [module-car](https://github.com/sunchaowang/micro-monorepo)
    - [module-coal](https://github.com/sunchaowang/micro-monorepo)
  - shared
    - [apis]
    - [assets]
    - [components]
    - [design]
    - [enums]
    - [hooks]
    - [router]
    - [store]
    - [types]
    - [utils]

## 项目初始化
### 拉取代码
- 本项目使用git submodule管理子仓库，所以需要使用如下命令拉取代码：
```bash
git clone https://github.com/sunchaowang/micro-monorepo
```
- 需要初始化子仓库，使用如下命令：
```bash
git submodule init
git submodule update --update --recursive
```
- 需要安装依赖，使用如下命令：
```bash
pnpm install
```
### 启动项目
- 启动项目，使用如下命令：
```bash
# 启动所有项目
pnpm run dev:all

# 启动单个项目 TODO
# pnpm run dev:apps:dtms-web
```
