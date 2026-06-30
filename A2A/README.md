# A2A · 多智能体协作演示（Ch.12）

> 现场可视化两个 Agent 通过 A2A 协议互发消息、协作完成「学员组队推荐」。**纯前端 demo，不依赖外部 API**。

## 🎯 学员看到的体验

1. 你打开本目录 `a2a-demo.html`（本地或挂在 Pages 上）
2. 屏幕上看到两个独立的 Agent 框：
   - **分析 Agent**（Analyzer Agent）—— 读学员数据、算相似度
   - **推荐 Agent**（Recommender Agent）—— 综合排序、生成建议
3. 你输入"为 S001 找搭档" → 看两个 Agent 之间消息往来（A2A 消息格式）
4. 最终推荐结果出现在右下角

**关键卖点**：
- Ch.10 MCP 解决"Agent 接工具"
- **Ch.12 A2A 解决"Agent 找伙伴"**
- 两个协议放一起 = 完整 Agent 工程栈

---

## 🛠 推荐演示路径

**主路径**：**`a2a-demo.html` 本地静态页**（最稳，零依赖）

直接浏览器打开本目录的 `a2a-demo.html`，输入 S001（或任意学员 ID），看两个 Agent 协作流程。

**备用路径**（探索性）：
- **Google A2A 官方 ADK examples** —— <https://github.com/google/A2A>（需要本地起 Python 服务）
- **Anthropic Computer Use** —— 高级，需要 API key

---

## 🎬 现场操作步骤（4 分钟）

### 翻页到 `#/14/2` (A2A 落地场景页)

| Step | 动作 | 学员看到 |
|---|---|---|
| 1 | 切到 `a2a-demo.html` | 两个 Agent 框 + 中间 A2A 消息通道 |
| 2 | 输入 "为 S001 林知远 找搭档" → 点 [▶ 开始协作] | 动画启动 |
| 3 | 看消息往来：分析 Agent → A2A → 推荐 Agent | 协作流程实时可见 |
| 4 | 最终输出：S001 应该跟 S006 + S003 组队，理由：... | — |
| 5 | (可选) 换成 "为 S002 找搭档"，再跑一次 | — |

---

## 📂 本目录文件

| 文件 | 用途 |
|---|---|
| `a2a-demo.html` | 双 Agent 协作可视化静态页（纯前端，浏览器直开） |
| `a2a-protocol-notes.md` | A2A 协议结构简介 + Google 官方资源链接 |
| `screenshots/` | 你跑通后存截图的位 |

---

## 🚧 兜底方案

| 情况 | 兜底动作 |
|---|---|
| 本地 HTML 文件打不开 | 直接讲 slides Ch.12/03 的流程图，配合本目录 `a2a-protocol-notes.md` 里的消息样例 |
| 学员问 "A2A 跟 LangGraph / AutoGen 啥区别" | 答："那些是单家方案；A2A 是 Google 2025 推的开放协议，目标是让不同厂家的 Agent 互通。生态正在长。" |

**最简化**：完全不用任何 demo，直接讲流程图 + 说明 MCP（接工具）+ A2A（找伙伴）= 完整 Agent 互联网协议栈。**也够用**。

---

## 📸 截图占位

- `01-demo-init.png` — a2a-demo.html 初始状态
- `02-message-flow.png` — 两 Agent 消息往来动画
- `03-final-output.png` — 最终推荐结果

---

## 📎 A2A 协议参考链接（课后学员可深挖）

- A2A 官方主页：<https://google.github.io/A2A>
- A2A GitHub：<https://github.com/google/A2A>
- 与 MCP 对比的解读：搜索 "MCP vs A2A protocol stack"
