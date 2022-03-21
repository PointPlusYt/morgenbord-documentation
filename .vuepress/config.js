module.exports = {
    // site config
    lang: 'en-US',
    title: 'MorgenBord',
    description: 'This is my first VuePress site',
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: '/images/logo_white.png',
      logoDark: '/images/logo_white.png',
      navbar: [
        // NavbarItem
        // {
        //   text: 'Foo',
        //   link: '/foo/',
        // },
        // NavbarGroup
        // {
        //   text: 'Group',
        //   children: ['/Core/README.md', '/group/bar.md'],
        // },
        // // string - page file path
        // '/bar/README.md',
        {
          text: 'Getting started',
          link: '/',
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
          children: [
            {
              text: 'Learn the basics',
              link: '/Widgets',
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
    },
}
