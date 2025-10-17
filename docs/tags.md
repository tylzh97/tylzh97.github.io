---
title: 标签索引
description: 汇总各文章标签，后续可用自定义组件渲染。
layout: doc
---

# 说明
当前页面作为占位，后续可通过 VitePress 客户端脚本读取站点数据生成标签云。

## 建议实现步骤
1. 在 `.vitepress/theme` 中新增自定义组件 `TagCloud.vue`。
2. 使用 `useData()` 获取 `theme.value.pages`，从 frontmatter 中汇总 `tags`。
3. 渲染标签列表与指向文章的链接。

## 临时方案
- 手动维护标签列表。
- 写完文章后，在此页面追加链接。
