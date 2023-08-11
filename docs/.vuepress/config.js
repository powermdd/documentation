import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    title: 'Power MDD',
    base: '/documentation/',
    description: 'Power MDD documentation',
    theme : defaultTheme({
        logo: "powermdd-logo.png",
        navbar : [
            {
                text : "Home",
                link : "/",
            }
        ],
        sidebar: [
            // SidebarItem
            {
                text: 'Home',
                link: '/',
                children: [
                    // SidebarItem
                    {
                        text: 'about',
                        link: '/about',
                        children: [],
                    },
                ],
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
    }),
    plugins: [
        searchPlugin({
            // options
        }),
    ],
})