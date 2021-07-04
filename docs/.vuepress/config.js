module.exports = {
    title: '月经应对手册',
    description: '给广大女生的一本经期应对手册',
    themeConfig: {
        smoothScroll: true,
        lastUpdated: '上次编辑',
        repo: 'timi137137/MenstrualCopingManual',
        repoLabel: 'GitHub',
        docsRepo: 'timi137137/MenstrualCopingManual',
        docsDir: 'docs',
        docsBranch: 'dev',
        editLinks: false,
        editLinkText: '编辑此页',
        nav: [
            { text: '主页', link: '/' }
        ],
        sidebar: {},
        sidebarDepth: 2,
        displayAllHeaders: false,
        activeHeaderLinks: true
    },
    markdown: {
        extendMarkdown(md) {
            md.use(require('markdown-it-task-lists'))
            md.use(require('markdown-it-footnote'))
        }
    },
    plugins: {
        '@vuepress/back-to-top':true,
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "有新的内容更新啦！",
                buttonText: "立刻刷新"
            }
        },
        '@renovamen/vuepress-plugin-baidu-tongji': {
            'ba': 'f413b820d470eb9ce7dfb8cd4863e924'
        }
    },
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '月经应对手册'
        },
        '/zh-tw/': {
            lang: 'zh-TW',
            title: '月經應對手冊'
        }
    },
    themeConfig: {
        locales: {
            '/': {
                selectText: '语言',
                label: '简体中文',
                lang: 'zh-CN',
                title: '月经应对手册',
                serviceWorker: {
                    updatePopup: {
                        message: "有新的内容更新啦！",
                        buttonText: "立刻刷新"
                    }
                },
                nav: [
                    { text: '主页', link: '/' }
                ],
                sidebar: {
                    '/': [
                        '/',
                        '/menstruation-info/',
                        '/need-do/',
                        '/help-me/'
                    ]
                }
            },
            '/zh-tw/': {
                selectText: '語言',
                label: '正體中文',
                lang: 'zh-TW',
                title: '月經應對手冊',
                serviceWorker: {
                    updatePopup: {
                        message: "有新的內容更新啦！",
                        buttonText: "立即刷新"
                    }
                },
                nav: [
                    { text: '首頁', link: '/' }
                ],
                sidebar: {
                    '/zh-tw/': [
                        '/zh-tw/'
                    ]
                }
            }
        }
    }
}
