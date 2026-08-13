<p align="center">
  <img src="preview/dark.png" alt="Black Whale Lab for DeepSeek Harness" width="100%" />
</p>

<h1 align="center">Black Whale Lab</h1>

<p align="center">
  A Xiaoyao × DeepSeek Harness skin that passes the artwork through the real DSH Web canvas without replacing the official application.
</p>

<p align="center">
  <a href="README.md">中文</a> ·
  <a href="#install">Install</a> ·
  <a href="#architecture">Architecture</a> ·
  <a href="https://github.com/147228/dsh-black-whale/issues">Issues</a>
</p>

## What it does

Black Whale Lab is a real DSH Web client plugin, not a screenshot or a replacement frontend. It keeps the official sessions, models, tools, sandbox, permissions and settings stack intact while changing only the browser presentation layer.

- Passes the whale and Xiaoyao artwork through DSH's nested base canvases.
- Keeps the sidebar, composer, menus and dialogs readable with local surfaces.
- Repairs light-background/light-text controls through a class-name-independent runtime contrast guard.
- Adds a reversible focus mode for long-form reading and coding.
- Restores the original title, background and injected DOM on unload.
- Makes no network requests and never reads sessions, credentials or prompts.

## Install

Tested with DeepSeek Harness `0.1.0-rc.6` on Node.js 24.

```sh
dsh plugin --profile web add \
  https://github.com/147228/dsh-black-whale/releases/download/v0.1.3/xiaoyao-ai-dsh-client-ui-skin-black-whale-0.1.3.tgz
```

Or install the pinned Git tag:

```sh
dsh plugin --profile web add github:147228/dsh-black-whale#v0.1.3
```

Restart DSH Web after installation:

```sh
dsh web
```

Only one global DSH skin should be enabled at a time. Remove an existing global skin before installing Black Whale Lab.

Verify the bundle layer:

```sh
dsh web --dump-config | grep -n "ui-skin-black-whale"
```

Uninstall:

```sh
dsh plugin --profile web remove @xiaoyao-ai/dsh-client-ui-skin-black-whale
```

See [INSTALL.md](INSTALL.md) for troubleshooting.

## Architecture

The package contributes `ui-skin-black-whale` through `cordis.patch.yml`. Its Host entry is deliberately empty. The browser entry scopes all CSS under `body[data-dsh-black-whale]`, embeds artwork as data URIs, and adds only reversible presentation behavior. The official DSH backend remains the sole owner of sessions, models and tools.

## Development

```sh
git clone https://github.com/147228/dsh-black-whale.git
cd dsh-black-whale
pnpm install --frozen-lockfile
pnpm check
pnpm dev -- --host 127.0.0.1 --port 4173
```

Open `http://127.0.0.1:4173/preview/` for the local interaction preview.

## License

- Source code: [MIT](LICENSE)
- Xiaoyao laboratory artwork: [CC BY-NC 4.0](ASSET_LICENSE.md)
- DeepSeek Harness assets and trademarks: see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)

This is an independent community plugin and is not affiliated with, sponsored by, or endorsed by DeepSeek.
