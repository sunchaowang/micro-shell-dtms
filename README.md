# micro-monorepo
--
## 项目地址
- [micro-monorepo](https://github.com/sunchaowang/micro-monorepo)

## 项目介绍
- 本项目是一个多仓库项目，主要包含三个仓库，分别是：
  - [micro-monorepo](https://github.com/sunchaowang/micro-monorepo)

## 项目结构
- [micro-monorepo](https://github.com/sunchaowang/micro-monorepo)
  - wwws `Web端所有应用`
    - shells `壳应用`
        - [shell-dtms](https://github.com/sunchaowang/micro-monorepo) `dtms-web`
        - [shell-[dtms2]]()
    - subapps `行业应用, 业务应用, 可在壳应用中配置引用`
        - [app-car](https://github.com/sunchaowang/micro-monorepo) `汽车`
        - [app-coal](https://github.com/sunchaowang/micro-monorepo) `煤炭`
        - [app-steel]() `钢材`
        - [app-pulp]() `纸浆`
        - [ddc-web]() `大屏后台`
        - [dams-web]() ``
        - `票据项目`
        - `审批项目` 
        - ...
    
  - shared `共享库`
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
    - [business]

## 项目初始化
### 拉取代码
- 本项目使用git submodule管理子仓库，所以需要使用如下命令拉取代码：
```bash
git clone https://github.com/sunchaowang/micro-shell-dtms
```
- 需要初始化子仓库，使用如下命令：
```bash
git submodule init
git submodule update --recursive
```
- 如果需要添加子仓库，使用如下命令：
```bash
# git submodule add subapp-git-url subapps/subapp-name # 添加子仓库
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

# 启动单个项目
# pnpm run dev:apps:dtms-web
```
