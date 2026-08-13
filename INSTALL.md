# 安装与故障排查

## 推荐安装

```sh
dsh plugin --profile web add \
  https://github.com/147228/dsh-black-whale/releases/download/v0.1.3/xiaoyao-ai-dsh-client-ui-skin-black-whale-0.1.3.tgz
dsh web
```

Release 包已经包含预编译的 Host 与浏览器产物，普通用户无需安装本仓库的开发依赖。

## 从 Git tag 安装

```sh
dsh plugin --profile web add github:147228/dsh-black-whale#v0.1.3
```

## 从源码开发

```sh
git clone https://github.com/147228/dsh-black-whale.git
cd dsh-black-whale
pnpm install --frozen-lockfile
pnpm check
dsh plugin --profile web add link:$(pwd)
```

## 与其他皮肤冲突

多个全局皮肤会同时修改 DSH 主题变量。先查看 profile：

```sh
dsh web --dump-config | grep -n "ui-skin"
```

移除旧皮肤后再安装本插件：

```sh
dsh plugin --profile web remove <旧皮肤包名>
```

## 安装后未显示

1. 完全退出正在运行的 `dsh web`。
2. 重新启动 `dsh web`。
3. 浏览器执行一次强制刷新。
4. 检查配置层：

```sh
dsh web --dump-config | grep -n "ui-skin-black-whale"
```

5. 打开「设置 → 插件 → 插件列表」，确认 `ui-skin-black-whale` 为“已挂载”。

## Node 运行时错误

若 DSH 启动时报 `Promise.withResolvers`、`createZstdDecompress` 或 `stripTypeScriptTypes` 缺失，这是 DSH 运行时 Node 版本过旧，并非皮肤代码错误。请使用 DeepSeek Harness 当前版本要求的 Node；本项目实测 `0.1.0-rc.6` 使用 Node.js 24 可正常启动。

## 卸载

```sh
dsh plugin --profile web remove @xiaoyao-ai/dsh-client-ui-skin-black-whale
```

重启 `dsh web`。插件释放时会恢复原背景、标题和注入的界面元素。
