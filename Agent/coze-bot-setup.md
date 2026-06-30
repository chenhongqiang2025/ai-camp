# Coze.cn 建「月球营报名顾问」Bot · 步骤

## 一、基础设置

1. 登录 <https://www.coze.cn>
2. 左侧菜单 → 「Bot」 → 「创建 Bot」
3. 填写：
   - **Bot 名称**：月球营报名顾问
   - **简介**：帮你准备 2099 年 7 月去大连参加月球营地面集训的所有事项
   - **图标**：选 🌙 或 🚀 任一
4. 模型选择：豆包 / GLM / 通义 任一，建议选支持「Function Calling」的（豆包-pro / qwen-max）

## 二、系统提示词

把 `system-prompt.md` 整个内容复制到 Bot 的「人设与回复逻辑」/「Persona」字段。

## 三、添加 3 个工具

### 工具 1 · 地球天气查询

- 类型：HTTP 请求（或 Coze 自带「天气」插件，如有）
- 名称：`get_earth_weather`
- 描述：查询指定城市在指定日期的天气预报
- 输入参数：`city` (string, 城市名), `date` (string, YYYY-MM-DD)
- API：用 Coze 内置插件「天气查询」，或对接和风天气免费 API
- 返回：温度、天气状况、降水概率

### 工具 2 · 地月时间换算

- 类型：自定义代码（Coze 工作流 / Python 节点）
- 名称：`earth_to_moon_time`
- 描述：地球时间转换为月球营对应时刻（含月相、舱内静默时段判断）
- 输入参数：`earth_datetime` (string)
- 简化实现（粘贴下面这段 Python 到 Coze 代码节点）：

```python
from datetime import datetime
def main(args):
    dt = datetime.fromisoformat(args["earth_datetime"])
    # 月球营时间 = 地球时间（同步月相），但夜间静默 22:00-06:00 训练锁定
    hour = dt.hour
    if 22 <= hour or hour < 6:
        status = "夜间静默时段：训练系统已锁定，仅基础生保运行"
    else:
        status = "训练时段：算力配额可使用"
    return {
        "moon_time": dt.isoformat(),
        "status": status,
        "comm_delay_seconds": 1.8,
        "month_phase": "月昼期" if 6 <= hour < 18 else "月夜期"
    }
```

### 工具 3 · 行李清单生成

- 类型：自定义代码
- 名称：`generate_packing_list`
- 描述：基于天气和月球生保系统，生成行李清单
- 输入参数：`weather_summary` (string), `arrival_date` (string)
- 简化实现：

```python
def main(args):
    return {
        "必带物品": [
            "符合月面接口的 AI 终端（华为 Mate XTerran 或联想 Yoga Lunar 版）",
            "证件原件 + 体检证明（园区签发）",
            "个人药品（基地医务室无个性化用药库存）"
        ],
        "园区提供": [
            "外骨骼接口适配服",
            "舱内便服",
            "3D 打印餐食食谱",
            "EVA 培训装备"
        ],
        "禁带物品": [
            "私自 LLM 模型权重文件（必须用基地盘古月球基座）",
            "私人卫星通信设备",
            "活体动植物"
        ],
        "天气备注": f"出发当日（{args['arrival_date']}）大连地区参考：{args['weather_summary']}"
    }
```

## 四、发布 & 测试

1. 点 Bot 右上 「发布」
2. 选择「网页 Bot」或「在线分享链接」
3. 复制分享链接（如 `https://www.coze.cn/store/bot/xxxx`）
4. 在新窗口打开链接，输入 `test-prompts.md` 里的 P1 测试
5. 检查 3 个工具是否都被调用 + 返回合理结果

---

## 🚧 简化版（如果时间紧）

不接真实天气 API 也行 —— 第 1 个工具可以返回 mock 数据：

```python
def main(args):
    # mock for demo
    return {
        "city": args["city"],
        "date": args["date"],
        "temp": "22°C",
        "condition": "小雨转多云",
        "rain_prob": "70%",
        "advisory": "建议防水外套；如出发当日红色 ≥ 8 mm/h 降水，长征-30 发射可能延迟"
    }
```

这个版本完全本地、不依赖外部 API，演示效果一致。
