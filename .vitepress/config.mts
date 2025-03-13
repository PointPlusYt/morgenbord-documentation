import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/morgenbord-documentation/',
  title: "Morgenbord Documentation",
  description: "Morgenbord's Documentation",
  head: [['link', { rel: 'icon', href: '/public/images/icon-transparent.png' }]],
  lang: 'en-US',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: '/public/images/logo.png',
    siteTitle: "MORGENBORD DOC",
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Getting started',
        link: '/Getting started',
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
      {
        items: [
          {
            text: 'Glossary',
            link: '/Glossary',
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PointPlusYt' },
      { icon: 'wordpress', link: 'https://blog.plus.yt/' },
      { icon: 'youtube', link: 'https://www.youtube.com/pointplus' },
    ]
  }
})
