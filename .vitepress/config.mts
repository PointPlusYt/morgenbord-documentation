import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/morgenbord-documentation/',
  title: "Morgenbord Documentation",
  description: "Morgenbord's Documentation",
  head: [['link', { rel: 'icon', href: './public/images/icon-transparent.png' }]],
  lang: 'en-US',
  rewrites: {
    // 'README.md': 'index.md',
    '(.*)/README.md': '(.*)/index.md'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: '/Extra/images/logo.png',
    siteTitle: "MORGENBORD DOC",
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Getting started',
        link: '/Installation',
      },
      {
        text: 'App template',
        link: '/App',
      },
      {
        text: 'Core',
        link: '/Core',
      },
      {
        text: 'Widgets',
        items: [
          {
            text: 'Learn the basics',
            link: '/Basics',
          },
          {
            text: 'Demo',
            link: '/Widgets/Demo',
          },
          {
            text: 'Checklist',
            link: '/Widgets/Checklist',
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PointPlusYt/morgenbord-documentation' },
      { icon: 'mastodon', link: 'https://blog.plus.yt/@pointplus' },
      { icon: 'wordpress', link: 'https://blog.plus.yt/' },
      { icon: 'youtube', link: 'https://www.youtube.com/pointplus' },
    ]
  }
})
