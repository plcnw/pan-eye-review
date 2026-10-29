# 盘眼一键刷新后端

这是一个不依赖第三方包的 Cloudflare Worker。它只在服务端保存 GitHub
fine-grained token，浏览器页面拿不到 token。

## GitHub token

在 GitHub 创建 fine-grained personal access token：

- Repository access：Only select repositories → `plcnw/pan-eye-review`
- Repository permissions：Actions → Read and write
- 其他权限全部保持 No access

## 部署

在 `backend/refresh-api` 目录执行：

```powershell
npx wrangler login
npx wrangler secret put GITHUB_TOKEN
npx wrangler deploy
```

部署完成后，把 Worker 地址写入项目根目录的 `refresh-config.js`：

```js
window.PAN_EYE_REFRESH_API = "https://pan-eye-refresh-api.<account>.workers.dev";
```

然后重新构建静态页面。页面会直接调用 `/refresh`，成功后就地显示提交结果；
不再打开 GitHub Actions。
