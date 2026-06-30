# MCP · 模型上下文协议演示（Ch.10）

> 让 Claude Desktop 通过 MCP filesystem-server **读你电脑上的本地文件夹**，现场展示 "AI 长出了手"。

## 🎯 学员看到的体验

1. 你打开 Claude Desktop 桌面应用
2. 你说："帮我看看 `月球营档案/` 这个文件夹里有什么"
3. Claude 真的去读取本地文件 → 列目录 → 读取内容 → 总结
4. 学员看到："咦它真的能动我电脑上的东西"

**关键卖点**：MCP 之前每家 AI 自己一套接工具方案；MCP 让它变成开放协议 —— 同一个 server 接 Claude / Cursor / VSCode 都能用。

---

## 🛠 推荐演示路径

**主路径**：**Claude Desktop + filesystem-server**（最直观）

下载：<https://claude.ai/download>

配置：见本目录 `claude_desktop_config.example.json`

**备用路径**（不推荐放主线、可作扩展讨论）：
- **Cursor IDE** —— 同支持 MCP，<https://www.cursor.com>
- **VSCode + Cline 插件** —— 免费，搜 Cline 安装

---

## 🎬 现场操作步骤（4 分钟）

### 课前 30 分钟准备

1. 在电脑上**桌面建立**一个文件夹 `月球营档案`（也可以放本目录的 `demo-corpus/` 里的内容）
2. Claude Desktop 已安装并登录
3. 修改 Claude Desktop config（macOS: `~/Library/Application Support/Claude/claude_desktop_config.json` / Windows: `%APPDATA%\Claude\claude_desktop_config.json`）
4. 加入 filesystem-server 配置（见 `claude_desktop_config.example.json`，把路径改成你电脑上 `月球营档案/` 的绝对路径）
5. 完全退出 Claude Desktop 再打开（让 MCP server 加载）
6. 测试：跟 Claude 说 "列出我桌面 `月球营档案` 文件夹的内容" → 应该返回真实文件列表

### 翻页到 `#/12/2` (三角色架构页)

| Step | 动作 | 学员看到 |
|---|---|---|
| 1 | 屏幕切到 Claude Desktop | "现在我们离开 slides 看真东西" |
| 2 | 输入 P1（见下方话术） | Claude 列目录、读文件 |
| 3 | 停 3 秒让大家看左侧/底部出现的 `Reading file...` 标识 | "看到了吗 — 它真的在用工具" |
| 4 | 输入 P2 / P3 | Claude 跨文件读 + 总结 |
| 5 | 切回 slides 继续 Ch.10/03 | — |

---

## 📂 本目录文件

| 文件 | 用途 |
|---|---|
| `claude_desktop_config.example.json` | MCP 配置文件示例（你按本地路径改一行就能用） |
| `demo-corpus/` | 月球营档案文件夹（演示用的本地内容） |
| `test-prompts.md` | 4 个测试请求话术 |
| `screenshots/` | 你跑通后存截图的位 |

---

## 🚧 兜底方案

| 情况 | 兜底动作 |
|---|---|
| Claude Desktop 当天网不通 / 登录失败 | 跳过现场 demo，**改放录屏视频**（提前录好的 `screenshots/demo-recording.mp4`） |
| MCP server 启动失败（红色状态） | 完全退出 Claude Desktop 重启；改成口头讲解 + slides 流程图 |
| 网络好但 Claude 拒绝调用工具 | 在请求前加一句 "请用 filesystem 工具读取" 强提示 |

**最稳兜底**：提前录一段 30 秒的桌面视频，从输入请求到 Claude 调工具完成，存到 `screenshots/demo-recording.mp4`。当天现场万一卡，直接播视频。

---

## 📸 截图占位

- `01-config-loaded.png` — Claude Desktop 设置里显示 MCP server 状态绿色
- `02-list-directory.png` — Claude 列目录的回复
- `03-read-file.png` — Claude 读文件并总结
- `04-cross-file.png` — Claude 跨文件汇总
- `demo-recording.mp4` — 30 秒兜底录屏
