import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

const koNavBar = [
    {
        text : "홈",
        link : "/",
    },
    {
        text : "개요",
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
]

const enNavBar = [
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
]

const koSideBar = [
    // SidebarItem
    {
        text: '개요',
        link: '/about',
        collapsible: true,
        children: [
            // SidebarItem
            {
                text: 'POWER MDD란?',
                link: '/about',
            },
            {
                text: '시스템 구조',
                link: '/about/SystemStructure',
            },
            {
                text: '프로그램 구조',
                link: '/about/ProgramStructure',
            },
            {
                text: '메뉴 구조',
                link: '/about/MenuStructure',
            },
        ],
    },
    {
        text: '설치',
        link: '/installation',
        collapsible: true,
        children: [
            // SidebarItem
            {
                text: '클라이언트 설치',
                link: '/installation/Client',
                children: [],
            },
            {
                text: '서버 설치',
                link: '/installation/Server',
                children: [
                    {
                        text: '설치 전 준비사항',
                        link: '/installation/Ready',
                    },
                    {
                        text: 'POWER MDD.BMS',
                        link: '/installation/PowerMddBms',
                    },
                    {
                        text: 'POWER MDD.DX',
                        link: '/installation/PowerMddDx',
                    },
                ],
            },
        ],
    },
    {
        text: '문서',
        link: '/documentation',
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
                collapsible: true,
                children: [
                    {
                        text: '구성',
                        link: '/documentation/view-designer/Structure',
                        children: [],
                    },
                    {
                        text: '컴포넌트',
                        link: '/documentation/view-designer/Component',
                        children: [
                            {
                                text: '기본 컴포넌트',
                                link: '/documentation/view-designer/Basic',
                                collapsible: true,
                                children: [
                                    {
                                        text: 'Label',
                                        link: '/documentation/view-designer/Label',
                                    },
                                    {
                                        text: 'TextBox',
                                        link: '/documentation/view-designer/TextBox',
                                    },
                                    {
                                        text: 'Secret',
                                        link: '/documentation/view-designer/Secret',
                                    },
                                    {
                                        text: 'Button',
                                        link: '/documentation/view-designer/Button',
                                    },
                                    {
                                        text: 'Calendar',
                                        link: '/documentation/view-designer/Calendar',
                                    },
                                    {
                                        text: 'Checkbox',
                                        link: '/documentation/view-designer/Checkbox',
                                    },
                                    {
                                        text: 'Radio',
                                        link: '/documentation/view-designer/Radio',
                                    },
                                    {
                                        text: 'TextArea',
                                        link: '/documentation/view-designer/TextArea',
                                    },
                                    {
                                        text: 'NumUpDown',
                                        link: '/documentation/view-designer/NumUpDown',
                                    },
                                    {
                                        text: 'PictureBox',
                                        link: '/documentation/view-designer/PictureBox',
                                    },
                                    {
                                        text: 'FileButton',
                                        link: '/documentation/view-designer/FileButton',
                                    },
                                    {
                                        text: 'Href',
                                        link: '/documentation/view-designer/Href',
                                    },
                                ],
                            },
                            {
                                text: '리스트 컴포넌트',
                                link: '/documentation/view-designer/List',
                                collapsible: true,
                                children: [
                                    {
                                        text: 'ComboBox',
                                        link: '/documentation/view-designer/ComboBox',
                                    },
                                    {
                                        text: 'ListBox',
                                        link: '/documentation/view-designer/ListBox',
                                    },
                                    {
                                        text: 'Grid',
                                        link: '/documentation/view-designer/Grid',
                                    },
                                    {
                                        text: 'DataList',
                                        link: '/documentation/view-designer/DataList',
                                    },
                                ],
                            },
                            {
                                text: '그룹 컴포넌트',
                                link: '/documentation/view-designer/Group',
                                collapsible: true,
                                children: [
                                    {
                                        text: 'GroupBox',
                                        link: '/documentation/view-designer/GroupBox',
                                    },
                                    {
                                        text: 'SplitGroupBox',
                                        link: '/documentation/view-designer/SplitGroupBox',
                                    },
                                    {
                                        text: 'Tab',
                                        link: '/documentation/view-designer/Tab',
                                    },
                                    {
                                        text: 'TableLayout',
                                        link: '/documentation/view-designer/TableLayout',
                                    },
                                    {
                                        text: 'User/svg Control',
                                        link: '/documentation/view-designer/UserControl',
                                    },
                                    {
                                        text: 'Iframe',
                                        link: '/documentation/view-designer/Iframe',
                                    },
                                    {
                                        text: 'TreeView',
                                        link: '/documentation/view-designer/TreeView',
                                    },
                                    {
                                        text: 'Progress',
                                        link: '/documentation/view-designer/Progress',
                                    },
                                ],
                            },
                            {
                                text: '기타 컴포넌트',
                                link: '/documentation/view-designer/Other',
                                collapsible: true,
                                children: [
                                    {
                                        text: 'Schedule',
                                        link: '/documentation/view-designer/Schedule',
                                    },
                                    {
                                        text: 'HtmlEdit',
                                        link: '/documentation/view-designer/HtmlEdit',
                                    },
                                    {
                                        text: 'Chart',
                                        link: '/documentation/view-designer/Chart',
                                    },
                                    {
                                        text: 'Dyn-Accordion',
                                        link: '/documentation/view-designer/DynAccordion',
                                    },
                                ],
                            }
                        ],
                    },
                ],
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
]

const enSideBar = [
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
]

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
        locales: {
            '/': {
                selectLanguageName: '한국어',
                navbar : koNavBar,
                sidebar: koSideBar,
            },
            '/en/': {
                selectLanguageName: 'English',
                navbar : enNavBar,
                sidebar: enSideBar,
            },
        },
    }),
    plugins: [
        searchPlugin({
            // options
        }),
    ],
})