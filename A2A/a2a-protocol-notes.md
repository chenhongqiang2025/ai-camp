# A2A 协议结构 · 简介

> Google 2025.04 在 Cloud Next 发布。**不是产品，是开放协议**——目的是让来自不同公司、不同框架的 Agent 之间能直接沟通。

## 三大核心机制

### 1. Agent Card

每个 Agent 自我介绍的 JSON。其他 Agent 通过 Agent Card 知道"你能做什么"。

```json
{
  "agentId": "lunar-camp/analyzer-v1",
  "displayName": "Lunar Camp Analyzer Agent",
  "version": "1.2.0",
  "capabilities": [
    "studentSimilarity",
    "interestClustering",
    "missionMatching"
  ],
  "inputs": [
    { "name": "studentId", "type": "string" }
  ],
  "outputs": [
    { "name": "similarityScores", "type": "Array<{studentId, score, reason}>" }
  ],
  "endpoint": "https://lunar-camp.example.com/a2a/analyzer"
}
```

### 2. Capability Discovery

Agent 之间发现对方能做什么的协议握手。一个 Agent 可以发 `discoverCapabilities` 请求，对方回返自己的 Agent Card。

### 3. Task Lifecycle

一个完整的 A2A 任务有四个阶段：

```
[发起 initiate] → [执行 execute] → [反馈 feedback] → [完成 complete]
```

每个阶段都有标准消息格式。

---

## A2A vs MCP

| 协议 | 解决的问题 | 类比 |
|---|---|---|
| **MCP**（Anthropic 2024.11） | Agent ↔ 外部工具 / 数据源 | USB 之于硬件 |
| **A2A**（Google 2025.04） | Agent ↔ Agent | 邮件之于人 |

两个协议**互补**，一起组成 Agent 工程的完整协议栈。

---

## 消息样例（两 Agent 组队推荐协作）

### 步骤 1 · 主协调者 → Analyzer

```json
{
  "messageId": "msg-001",
  "timestamp": "2099-07-15T09:00:00Z",
  "from": "coordinator-agent",
  "to": "analyzer-agent",
  "type": "TaskRequest",
  "payload": {
    "task": "computeStudentSimilarity",
    "input": { "studentId": "S001", "limit": 5 }
  }
}
```

### 步骤 2 · Analyzer → Recommender (A2A 通道)

```json
{
  "messageId": "msg-002",
  "timestamp": "2099-07-15T09:00:03Z",
  "from": "analyzer-agent",
  "to": "recommender-agent",
  "type": "TaskRequest",
  "payload": {
    "task": "rankAndRecommend",
    "input": {
      "candidates": [
        { "studentId": "S006", "score": 0.67, "reason": "同学院+同兴趣" },
        { "studentId": "S002", "score": 0.50, "reason": "同兴趣 RAG" },
        { "studentId": "S008", "score": 0.45, "reason": "互补技能" }
      ]
    }
  }
}
```

### 步骤 3 · Recommender → Coordinator

```json
{
  "messageId": "msg-003",
  "timestamp": "2099-07-15T09:00:05Z",
  "from": "recommender-agent",
  "to": "coordinator-agent",
  "type": "TaskResult",
  "payload": {
    "result": {
      "teamFor": "S001",
      "members": ["S006", "S003"],
      "explanation": "S006 同学院+同兴趣（核心搭档）；S003 互补技能（KG/Neo4j 强项）"
    }
  }
}
```

---

## 官方资源

- A2A 主页：<https://google.github.io/A2A>
- GitHub：<https://github.com/google/A2A>
- 与 MCP 协议栈解读：搜索 "MCP A2A protocol stack 2025"

---

## 现状（2026 中）

- Google ADK、Salesforce、LangChain 等已宣布支持
- IBM watsonx 在跟进
- 真实生产用例仍少 —— **演示意义大于实战意义**
- 启蒙课让学员知道"这个生态正在长"就够了
