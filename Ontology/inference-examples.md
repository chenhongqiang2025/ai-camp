# 本体推理 · 4 个示例

> 同一份本体 + 不同的 SPARQL 查询 → 推出 4 类新事实。Slides 上演示时挑 1-2 个跑就够。

---

## 推理 1 · 类层次传递

**问题**：找出所有"对 AI 感兴趣"的学员（即使他们只标了 RAG、Agent 等子类，没有显式标 AI）。

**SPARQL 查询**：
```sparql
SELECT ?student ?studentName ?interest
WHERE {
  ?student a :Student ;
           rdfs:label ?studentName ;
           :hasInterest ?interest .
  ?interest rdfs:subClassOf* :AI_Interest .
}
```

**返回**：S001 林知远（RAG）、S002 陈雨桐（Agent、MCP、RAG）、S003 苏明翰（KG）等所有学员。

**讲法**：
> "我们标 S001 喜欢 RAG，没标他喜欢 AI。但本体知道 RAG ⊆ AI_Interest，自动推出他对 AI 感兴趣。这就是本体推理。"

---

## 推理 2 · 反向关系（哪个兴趣最受欢迎）

**SPARQL**：
```sparql
SELECT ?interest (COUNT(?student) AS ?fans)
WHERE {
  ?student a :Student ;
           :hasInterest ?interest .
}
GROUP BY ?interest
ORDER BY DESC(?fans)
```

**返回**（基于 seed-students.json 8 人）：
| 兴趣 | 人数 |
|---|---|
| Interest_RAG | 4 |
| Interest_Agent | 3 |
| Interest_GenAI | 2 |
| Interest_KG | 2 |

---

## 推理 3 · 隐含的"潜在搭档"

**问题**：找出所有可能组队的学员对（不同人 + 至少一个共同兴趣 + 不同学院）。

**SPARQL**：
```sparql
SELECT DISTINCT ?s1 ?s2 ?common
WHERE {
  ?s1 a :Student ; :hasInterest ?common ; :enrolledIn ?c1 .
  ?s2 a :Student ; :hasInterest ?common ; :enrolledIn ?c2 .
  FILTER (?s1 != ?s2 && ?c1 != ?c2)
}
```

**返回**：跨学院 + 共同兴趣的所有学员对，方便组队推荐。

---

## 推理 4 · 一致性检查

**问题**：检查本体里有没有矛盾的数据（如一个学员同时是 Student 和 Mentor）。

**OWL 约束**（在本体里加一条）：
```turtle
:Student owl:disjointWith :Mentor .
```

**推理结果**：如果有学员 S999 同时被标为 :Student 和 :Mentor，推理引擎会报 **inconsistency** 错误。

**讲法**：
> "本体让你能定义'什么是不可能的'。这是数据库做不到的 —— 数据库存什么是什么，本体能查出'你存的数据自相矛盾'。"

---

## 🎬 现场推荐顺序

| 时段 | 跑哪个 | 时长 |
|---|---|---|
| 翻到本体页第一个动作 | 推理 1（类层次传递）| 30s |
| 时间允许 | 推理 3（潜在搭档）| 30s |
| 学员问到 | 推理 4（一致性）| 30s |

总耗时 1-1.5 分钟。推理 2 太基础，跳过。
