# Contributing

感谢你帮助改进 Black Whale Lab。

## 开发环境

- Node.js 24
- pnpm 11.19.0
- 可选：DeepSeek Harness Web profile，用于真实界面验收

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm dev -- --host 127.0.0.1 --port 4173
```

## 提交要求

1. 保持 Host 入口无副作用；皮肤不得读取会话、凭据或提示词。
2. 所有样式必须限制在 `body[data-dsh-black-whale]` 下。
3. 新增行为必须可在 Cordis dispose 时完整回滚。
4. 不要依赖 DSH 构建生成的哈希类名；优先使用语义属性、ARIA 或计算样式。
5. 修改客户端逻辑时补充测试，并运行 `pnpm check`。
6. 不要提交真实会话、工作区名称、凭据、绝对本机路径或个人截图。

## 视觉改动

请同时提供：

- 默认态截图；
- 专注模式截图；
- 设置弹窗或菜单截图；
- 对文字对比度、窄屏和无 `backdrop-filter` 兜底的说明。

## 资产贡献

只有你有权授权的素材才能进入仓库。提交素材即表示你同意按
[`ASSET_LICENSE.md`](ASSET_LICENSE.md) 中适用的条款发布，并接受必要的署名记录。
