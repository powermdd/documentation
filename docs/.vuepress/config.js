import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { palettePlugin } from '@vuepress/plugin-palette'

export default defineUserConfig({
    title: 'POWER MDD',
    description: 'Most Powerful Lowcode Tools',
    lang: "ko-KR",
    base: '/documentation/',
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'ko-KR',
            title: 'POWER MDD',
            description: '가장 강력한 로우코드 개발 툴',
        },
        '/en/': {
            lang: 'en-US',
            title: 'POWER MDD',
            description: 'The most powerful low-code development tool',
        },
    },
    theme : defaultTheme({
        logo: "powermdd-logo.png",
        sidebar: [
            // SidebarItem
            {
                text: 'About POWER MDD',
                link: '/about',
            },
            {
                text: 'Installation',
                link: '/installation',
            },
            {
                text: 'Documentation',
                link: '/documentation/service-model',
                collapsible: true,
                children: [
                    // SidebarItem
                    {
                        text: 'Service Model',
                        link: '/documentation/service-model',
                        children: [],
                    },
                    {
                        text: 'View Designer',
                        link: '/documentation/view-designer',
                        children: [],
                    },
                    {
                        text: 'Query Developer',
                        link: '/documentation/query-developer',
                        children: [],
                    },
                    {
                        text: 'Data Model',
                        link: '/documentation/data-model',
                        children: [],
                    },
                    {
                        text: 'Server File Manager',
                        link: '/documentation/server-file-manager',
                        children: [],
                    },
                ],
            },
        ],
        locales: {
            '/': {
                selectLanguageName: '한국어',
                navbar : [
                    {
                        text : "홈",
                        link : "/",
                    },
                    {
                        text : "정보",
                        link : "/about",
                    },
                    {
                        text : "설치",
                        link : "/installation",
                    },
                    {
                        text : "문서",
                        link : "/documentation",
                    },
                ],
            },
            '/en/': {
                selectLanguageName: 'English',
                navbar : [
                    {
                        text : "Home",
                        link : "/en/",
                    },
                    {
                        text : "About",
                        link : "/en/about",
                    },
                    {
                        text : "Installation",
                        link : "/en/installation",
                    },
                    {
                        text : "Documentation",
                        link : "/en/documentation",
                    },
                ],
            },
        },
    }),
    plugins: [
        searchPlugin({
            // options
        }),
        palettePlugin({
            // options
        }),
    ],
})