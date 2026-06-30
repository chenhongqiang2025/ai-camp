# 演示素材总索引 · 2026.07.01 Day 1

> 6 个互动演示，每个一个文件夹。**统一用 2099 月球营宇宙** —— 现场叙事连贯，学员看完整堂课像看了一个故事。

---

## 📂 目录一览

| 章节 | 演示目录 | 主推荐工具 | 状态 |
|---|---|---|---|
| Ch.07 RAG | `ICA/` | IBM Consulting Advantage | ✅ Richard 已做 |
| Ch.08 KG | `KG/` | 课件内置 + Neo4j AuraDB 备用 | ✅ 我做完 |
| Ch.08/01 本体论 | `Ontology/` | WebProtégé + 本地兜底 HTML | ✅ 我做完 |
| Ch.10 MCP | `MCP/` | Claude Desktop + filesystem-server | ✅ 我做完 |
| Ch.11 Agent | `Agent/` | Coze.cn | ✅ 我做完 |
| Ch.12 A2A | `A2A/` | 本地静态 HTML demo | ✅ 我做完 |
| Ch.13 IBM | `WA/` | Watsonx Assistant + Ask Billing | ⏸ 你后期加 |

## 🎯 现场使用顺序（按课件章节）

| 时段 | 章节 | 演示 | 主操作文件 |
|---|---|---|---|
| ~10:08-10:28 | Ch.07 RAG | ICA + 月球营 docx | `ICA/提问演示.xlsx` |
| ~10:40-10:57 | Ch.08 KG | 课件内置 + 兜底 JSON | `KG/seed-students.json` |
| 同上扩展 | Ch.08/01 本体 | WebProtégé / 兜底 HTML | `Ontology/ontology-visualization.html` |
| ~11:08-11:16 | Ch.10 MCP | Claude Desktop + filesystem | `MCP/test-prompts.md` |
| ~11:16-11:27 | Ch.11 Agent | Coze.cn Bot | `Agent/test-prompts.md` |
| ~11:27-11:34 | Ch.12 A2A | 本地静态 HTML demo | `A2A/a2a-demo.html` |

## ⚠️ 课前必做（按这个顺序勾完才能上场）

- [ ] **ICA** —— 上传月球营 docx 到"RAG演示用-2026" Collection；测 4 组对比 Q&A
- [ ] **KG** —— 把 `KG/seed-students.json` 导入 admin localStorage 兜底
- [ ] **MCP** —— Claude Desktop 装好，filesystem config 配上，月球营档案文件夹建好；P1-P3 各跑一遍
- [ ] **Agent** —— Coze.cn 上建好"月球营报名顾问" Bot，3 个工具配好，P1 测过
- [ ] **A2A** —— 浏览器打开 `A2A/a2a-demo.html` 试一遍
- [ ] **Ontology** —— `Ontology/ontology-visualization.html` 浏览器打开能看到（兜底页）

## 🚧 全局兜底原则

每个演示都有"工具不通时的兜底"。**最坏情况**：所有外部服务都挂了，仍然可以用：

- `Ontology/ontology-visualization.html`（纯本地）
- `A2A/a2a-demo.html`（纯本地）
- `KG/seed-students.json` 注入到课件内置 KG（纯本地）

也就是：**KG / Ontology / A2A 完全离线可演示**。RAG / MCP / Agent 需要在线工具，但都有备用平台。

## 🌐 演示用宇宙（统一虚构背景）

所有演示都用同一个虚构场景：

> **2099 大连高新园区·月球 AI 未来领袖夏令营**
> 主办：大连高新管委会 + 中国航天科技集团第九研究院 + 月面城市发展署（LCDA）
> 地面集训：2099.07.01-07.10 大连
> 月面营期：2099.07.15-08.25 静海基地

这个虚构场景的设计意图：
1. **任何 LLM 训练数据都不可能有** —— RAG 对比效果最强
2. **大连本地化** —— 学员有亲近感
3. **细节超丰富** —— 蛟龙-3000 / 鹊桥-8 / 玉兔-10 / 长征-30 / 盘古月球
4. **跨演示连贯** —— 一个学员名（如 S001 林知远）可以出现在 KG、Agent、A2A 多个 demo 里，学员看到熟悉感

## 🔗 课件审核 URL（参考）

- 全局：https://chenhongqiang2025.github.io/ai-camp/slides.html?review=1
- RAG 演示页：#/8/3
- KG 演示页：#/10/2
- 关系推理：#/11/1
- MCP 三角色：#/12/2
- Agent 互动：#/13/1
- A2A 落地：#/14/2
