# 月球营本体 · 代表三元组样例

> 课件上可截图用的 5 组三元组示例。每组主语-谓语-宾语展示一个关系。

---

## ① 个体关系（学员 - 学院）

| 主语 | 谓语 | 宾语 |
|---|---|---|
| S001 林知远 | rdf:type | Student |
| S001 林知远 | enrolledIn | DLUT_Software |
| DLUT_Software | rdf:type | College |

## ② 兴趣关系（学员 - 兴趣）

| 主语 | 谓语 | 宾语 |
|---|---|---|
| S001 林知远 | hasInterest | Interest_RAG |
| Interest_RAG | rdf:type | AI_Interest |
| AI_Interest | rdfs:subClassOf | Interest |

## ③ 类层次（兴趣分类）

| 主语 | 谓语 | 宾语 |
|---|---|---|
| Interest_RAG | rdfs:subClassOf | AI_Interest |
| Interest_KG | rdfs:subClassOf | AI_Interest |
| Interest_Agent | rdfs:subClassOf | AI_Interest |
| AI_Interest | rdfs:subClassOf | Interest |
| Interest | rdfs:subClassOf | Thing |

## ④ 任务关系（学员 - 任务 - 技能）

| 主语 | 谓语 | 宾语 |
|---|---|---|
| S001 林知远 | assignedTo | Mission_SeismicAnomaly |
| Mission_SeismicAnomaly | requires | AI_Skill_PyTorch |
| Mission_SeismicAnomaly | locatedIn | Moon_Static_Base |

## ⑤ 推理出的新事实（本体之上跑 reasoner）

由上面三元组 + 类层次规则，推理引擎可以自动推出：

| 推理出的事实 | 推理依据 |
|---|---|
| **S001 hasInterest AI_Interest**（不需要显式标注） | S001 → hasInterest → Interest_RAG → subClassOf → AI_Interest |
| **S001 对 Interest 有 hasInterest 关系** | 子类传递（AI_Interest ⊆ Interest） |
| **跟 S001 喜欢同一个 AI 子领域的学员可被推荐** | 用 SPARQL 查询：`?other :hasInterest ?x. ?x rdfs:subClassOf+ :AI_Interest. ?S001 :hasInterest ?x` |

---

## 🎯 给学员的总结句

> "本体定义了**事物的类型 + 类型之间的关系**。一旦定义清楚，电脑就能自动推出新事实 —— 不需要人一条条标注。"

> "RAG 让 AI 在文档里查事实；本体 + KG 让 AI 在关系网络里推新事实。两条路是互补的。"
