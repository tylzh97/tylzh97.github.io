import { defineConfig } from 'vitepress';

/**
 * Base VitePress site configuration.
 */
export default defineConfig({
  lang: 'zh-CN',
  title: 'Tylzh97 Notes',
  description: '个人知识与工具记录',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '分类',
        items: [
          { text: '指南 Guides', link: '/posts/guides/' },
          { text: '洞见 Insights', link: '/posts/insights/' },
          { text: '排查 Troubleshooting', link: '/posts/troubleshooting/' },
          { text: '速记 Notes', link: '/posts/notes/' }
        ]
      },
      { text: '文档模板', link: '/posts/templates/' },
      { text: '标签', link: '/tags' },
      { text: '关于', link: '/about/' },
      { text: 'GitHub', link: 'https://github.com/tylzh97' }
    ],
    sidebar: {
      '/posts/': [
        {
          text: '指南 Guides',
          items: [
            { text: '目录', link: '/posts/guides/' },
            { text: '模板', link: '/posts/templates/guide' },
            { text: '示例：Hello World', link: '/posts/guides/hello-world' }
          ]
        },
        {
          text: '洞见 Insights',
          items: [
            { text: '目录', link: '/posts/insights/' },
            { text: '模板', link: '/posts/templates/research' }
          ]
        },
        {
          text: '排查 Troubleshooting',
          items: [
            { text: '目录', link: '/posts/troubleshooting/' },
            { text: '模板', link: '/posts/templates/troubleshooting' }
          ]
        },
        {
          text: '速记 Notes',
          items: [
            { text: '目录', link: '/posts/notes/' },
            { text: '模板', link: '/posts/templates/note' }
          ]
        },
        {
          text: '模板合集',
          items: [
            { text: '目录', link: '/posts/templates/' },
            { text: '指南模板', link: '/posts/templates/guide' },
            { text: '调研模板', link: '/posts/templates/research' },
            { text: '排查模板', link: '/posts/templates/troubleshooting' },
            { text: '速记模板', link: '/posts/templates/note' }
          ]
        }
      ],
      '/about/': [
        {
          text: '关于',
          items: [
            { text: '自述', link: '/about/' }
          ]
        }
      ],
      '/tags': [
        {
          text: '标签',
          items: [
            { text: '标签索引', link: '/tags' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tylzh97' }
    ],
    footer: {
      message: 'MIT Licensed',
      copyright: `Copyright (c) ${new Date().getFullYear()} Tylzh`
    }
  }
});
