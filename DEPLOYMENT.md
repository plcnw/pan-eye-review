# 在线使用

目标结构：

- 手机和电脑访问同一个 GitHub Pages 地址。
- GitHub Actions 在工作日北京时间 17:00 抓取当天复盘。
- AI 将原文转换为结构化复盘。
- 同一次任务生成当天页面并发布。
- 每天的数据和归档写回仓库，日历据此显示历史复盘。

## GitHub 设置

1. 把 `pan-eye` 目录作为 Git 仓库根目录推送到 GitHub。
2. 在仓库的 `Settings → Pages` 中选择 **Deploy from a branch**，
   Branch 选择 `main`，目录选择 `/docs`。
3. 在 `Settings → Secrets and variables → Actions` 中添加：
   - Secret：`AI_API_KEY`
   - Variable：`AI_API_URL`，例如提供商的 Chat Completions 完整地址
   - Variable：`AI_MODEL`
4. 在 `Actions` 页面运行一次 `Daily Pan Eye Review`。

发布后的地址通常为：

```text
https://<GitHub用户名>.github.io/<仓库名>/
```

## 定时规则

工作流中的 `cron: "0 9 * * 1-5"` 对应北京时间周一至周五 17:00。
如果文章尚未发布，任务会每五分钟重试，最多等待约 25 分钟。

## AI 接口要求

`AI_API_URL` 应兼容 OpenAI Chat Completions 请求格式，并支持：

- Bearer Token 鉴权
- JSON 响应格式
- 至少 16K 输出窗口

AI 的结构化结果先写入本地 JSON，通过字段校验后才替换线上页面。
如果抓取或 AI 解析失败，该次部署不会覆盖上一版页面。

## 隐私

当前公开内容只有博主公开原文和公开行情。思考题答案与“教 AI”修改暂存于浏览器，
不会进入 GitHub。以后若增加个人交易记录，建议改用带登录和访问控制的私有部署。
