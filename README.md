# 盘眼

短线复盘工作台原型。页面数据、行情快照和展示代码相互分离。

## 每日更新

```powershell
$root = "C:\Users\CHZ\Documents\Codex\2026-10-28\wo-x\outputs\pan-eye"
$python = "C:\Users\CHZ\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"

# 1. 按详情页发表时间抓取当天主帖
& $python "$root\scripts\fetch_tgb.py" --date 2026-10-29

# 2. AI 把 data\raw\2026-10-29.json 解析为
#    data\review\2026-10-29.json，随后同步到前端
& $python "$root\scripts\build_review_data.py" --date 2026-10-29

# 3. 获取免费行情快照并应用流通市值提示
& $python "$root\scripts\fetch_market.py" --date 2026-10-29

# 4. 获取历史日线并识别疑似 A 杀行为
& $python "$root\scripts\fetch_history.py" --date 2026-10-29

# 5. 全市场硬筛，并复用已有历史行情完成首板 A 杀过滤
& $python "$root\scripts\screen_market.py" --date 2026-10-29

# 6. 重新生成手机单文件版
& $python "$root\scripts\build_standalone.py"
```

## 数据源

- 复盘原文：淘股吧公开主帖。
- A 股行情：东方财富名称检索与腾讯公开行情快照。
- 行情仅用于复盘，不把“主力资金”等口径不明的指标当成事实。

AI 校准记录保存在浏览器本地，并可从页面右上角的“教 AI”导出 JSON。
