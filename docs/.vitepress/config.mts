import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NCCU MITc",
  head: [
    ['link',{rel:'icon',href:'/icon.png'}],
  ],
  description: "A Good Site",

  base: '/MITC-Web-vitepress/',

  themeConfig: {
    //siteTitle: false,
    logo:'/icon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/' },
      { text: '關於我們', link: '/about-us/' },
      { text: '幹部名單', link: '/workerlist/'},
      { text: '社課與專案', link:'/plan/'},
      { text: '聯絡我們', link:'/contact/'},
      { text: 'Blog', link:'/blog' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NCCU-MITC/MITC-Web-vitepress' },
      { icon: 'facebook', link: 'https://www.facebook.com/nccumit'},
      { icon: 'discord', link: 'https://discord.gg/hNZEAAaw7W'},
      { icon: 'instagram', link:'https://www.instagram.com/nccu_mitc/'},
    ]
  }
})
