# Ontology · 本体论建模演示（Ch.08/01）

> 用 WebProtégé 或 Excel 直接展示一份「月球营领域本体」—— 学员看到 AI "知道"事物之间有层次关系（学员 → 是 → 人；人 → 有 → 技能；技能 → 包含 → AI）

## 🎯 学员看到的体验

1. 你打开本目录 `lunar-camp-ontology.ttl`（一份 Turtle 格式 RDF 文件）或在 WebProtégé 里加载
2. 你说："这就是本体 —— 把月球营这个领域的所有东西分类、定义关系"
3. 屏幕上学员看到：
   - 类层次：Thing → Person → Student；Mission → EVA_Mission → SLAM_Mission
   - 关系：enrolledIn / hasInterest / assignedTo
   - 一个推理示例：学员 S001 喜欢 RAG，RAG 是 AI 子类 → 推出 S001 对 AI 感兴趣

**与 KG 对比**：本体是"框架定义"（类/关系怎么定义）；KG 是"用框架填的实例数据"（具体哪个学员、哪个任务）。两者配合使用。

---

## 🛠 推荐演示路径

**最稳路径 ⭐**：**本目录 `ontology-demo.html` 交互动画演示**（浏览器直接打开，零依赖）

- 三栏布局：类层次树（左）/ 三元组（中）/ 推理过程（右）
- 三按钮分段播放：构建类层次 → 加载实例 → 执行推理
- 推理时动画展示三步规则推导，自动新增"推理出"的三元组（绿色标识）
- 点类层次任一节点 → 自动高亮所有祖先类

**进阶路径**：**WebProtégé 在线版**（斯坦福官方）

- <https://webprotege.stanford.edu> → New Project → Import OWL → 上传 `lunar-camp-ontology.ttl`

**完全离线兜底**：本目录 `ontology-visualization.html`（纯静态可视化页，无交互）

---

## 🎬 现场操作步骤（3 分钟）

### 翻页到 `#/10` (Ch.08 本体论页)

| Step | 动作 | 学员看到 |
|---|---|---|
| 1 | 切到 WebProtégé / WebVOWL，或打开本目录 `ontology-visualization.html` | 类层次树 + 关系图 |
| 2 | 指着 Class 层次："Thing 下面有 Person、Mission、Resource"，"Person 又分 Student、Mentor、Engineer" | 学员理解"分类是基础" |
| 3 | 指着 Object Property："hasInterest、enrolledIn、assignedTo —— 都是节点之间的关系" | 学员看到结构 |
| 4 | 跑一个推理示例：S001 喜欢 RAG，RAG ⊆ AI → S001 对 AI 感兴趣 | 这就是本体推理 |
| 5 | 一句话过：本体定义"是什么和关系"，KG 是填数据；下一页演示 KG | — |

---

## 📂 本目录文件

| 文件 | 用途 |
|---|---|
| `lunar-camp-ontology.ttl` | 月球营领域本体（Turtle/RDF 格式，可上传 WebProtégé） |
| `triples-sample.md` | 该本体里的代表性三元组（Markdown 表格，slides 上可截图用） |
| `ontology-visualization.html` | 静态可视化（万一 WebProtégé 不通的兜底，浏览器直接打开） |
| `inference-examples.md` | 4 个推理示例（本体+规则推出新事实） |
| `screenshots/` | 跑通后存截图 |

---

## 🚧 兜底方案

| 情况 | 兜底动作 |
|---|---|
| WebProtégé 当天访问不通 | 直接用本目录 `ontology-visualization.html`（本地静态页） |
| WebVOWL 加载慢 | 同上 |
| 学员问"这跟数据库有什么区别" | 答："数据库存数据；本体定义数据有什么类型 + 类型之间什么关系 + 能推出什么新事实" |

**最简化**：完全不用任何工具，直接讲 slides Ch.08/01 的四个 pts（古代 / 现代 / 标准 / 应用） + `triples-sample.md` 里的 3 个三元组例子。**也够用**。

---

## 📸 截图占位

- `01-class-hierarchy.png` — WebProtégé 类层次树
- `02-properties.png` — 对象属性列表
- `03-individuals.png` — 实例数据
- `04-inference.png` — 推理结果
- `05-vowl.png` — WebVOWL 可视化图
