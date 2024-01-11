# httptest: HTTP 请求测试接口

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbbsweb%2Fhttptest&project-name=httptest&repository-name=httptest)

## 介绍

这是一个用 Next.js 编写的 HTTP 测试接口项目，具有请求参数、Header 和 Cookie 值的自定义功能，并支持图片等多种响应类型。

## 安装

克隆项目
```
git clone https://github.com/bbsweb/httptest
```

安装依赖项
```
npm ci
```

运行
```
npm run dev
```

访问 http://localhost:3000

部署
```
npm run build
npm start
```

快速部署 [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbbsweb%2Fhttptest&project-name=httptest&repository-name=httptest)

## 接口列表

| 接口 |  |
| ---- | ---- |
| /method | 根据不用请求方法获取响应 |
| /basic-auth/{user}/{passwd} | HTTP 基本验证 |
| /bearer | Bearer 验证 |
| /status/{code} | 返回不同状态码 |
| /cookie | 操作 cookie |
| /base64 | Base64 解码 |
| /bytes/{n} | 返回字节文件 |
| /delay/{delay} | 延迟响应 |
| /uuid | 生成 uuid |
| /file/{type} | 返回各种类型的文件 |
