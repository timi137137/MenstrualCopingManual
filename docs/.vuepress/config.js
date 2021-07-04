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
        }
    }
}
