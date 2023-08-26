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
            // Service Model
            {
                text: 'Service Model',
                link: '/documentation/service-model',
                collapsible: true,
                children: [
                    {
                        text: '구성',
                        link: '/documentation/service-model/Structure',
                        collapsible: true,
                        children: []
                    },
                    {
                        text: 'BOC',
                        link: '/documentation/service-model/Boc',
                        collapsible: true,
                        children: [
                            {
                                text: 'Start BOC',
                                link: '/documentation/service-model/StartBoc',
                                collapsible: true,
                                children: []
                            },
                            {
                                text: 'DataBase BOC',
                                link: '/documentation/service-model/DatabaseBoc',
                                collapsible: true,
                                children: [
                                    {
                                        text: 'SEL',
                                        link: '/documentation/service-model/Sel',
                                    },
                                    {
                                        text: 'INS',
                                        link: '/documentation/service-model/Ins',
                                    },
                                    {
                                        text: 'DEL',
                                        link: '/documentation/service-model/Del',
                                    },
                                    {
                                        text: 'UPD',
                                        link: '/documentation/service-model/Upd',
                                    },
                                    {
                                        text: 'UNI',
                                        link: '/documentation/service-model/Uni',
                                    },
                                    {
                                        text: 'XIUD',
                                        link: '/documentation/service-model/Xiud',
                                    },
                                    {
                                        text: 'SET',
                                        link: '/documentation/service-model/Set',
                                    },
                                    {
                                        text: 'RBK',
                                        link: '/documentation/service-model/Rbk',
                                    },
                                ],
                            },
                            {
                                text: 'Control BOC',
                                link: '/documentation/service-model/ControlBoc',
                                collapsible: true,
                                children: [
                                    {
                                        text: 'MPD',
                                        link: '/documentation/service-model/Mpd',
                                    },
                                    {
                                        text: 'MIUD',
                                        link: '/documentation/service-model/Miud',
                                    },
                                    {
                                        text: 'CON',
                                        link: '/documentation/service-model/ConBoc',
                                    },
                                    {
                                        text: 'NLL',
                                        link: '/documentation/service-model/Nll',
                                    },
                                    {
                                        text: 'BRK',
                                        link: '/documentation/service-model/Brk',
                                    },
                                ],
                            },
                            {
                                text: 'Interface BOC',
                                link: '/documentation/service-model/InterfaceBoc',
                                collapsible: true,
                                children: [
                                    {
                                        text: 'OSP',
                                        link: '/documentation/service-model/Osp',
                                    },
                                    {
                                        text: 'PEX',
                                        link: '/documentation/service-model/Pex',
                                    },
                                    {
                                        text: 'CMD',
                                        link: '/documentation/service-model/Cmd',
                                    },
                                ],
                            },
                            {
                                text: 'Change BOC',
                                link: '/documentation/service-model/ChangeBoc',
                                collapsible: true,
                                children: [
                                    {
                                        text: 'GLV',
                                        link: '/documentation/service-model/Glv',
                                    },
                                    {
                                        text: 'CVT',
                                        link: '/documentation/service-model/Cvt',
                                    },
                                    {
                                        text: 'GET',
                                        link: '/documentation/service-model/Get',
                                    },
                                    {
                                        text: 'MRG',
                                        link: '/documentation/service-model/Mrg',
                                    },
                                    {
                                        text: 'ADD',
                                        link: '/documentation/service-model/Add',
                                    },
                                    {
                                        text: 'SUM',
                                        link: '/documentation/service-model/Sum',
                                    },
                                    {
                                        text: 'SRD',
                                        link: '/documentation/service-model/Srd',
                                    },
                                    {
                                        text: 'SRCD',
                                        link: '/documentation/service-model/Srcd',
                                    },
                                ],
                            },
                            {
                                text: 'File BOC',
                                link: '/documentation/service-model/FileBoc',
                                collapsible: true,
                                children: [
                                    {
                                        text: 'FUT',
                                        link: '/documentation/service-model/Fut',
                                    },
                                    {
                                        text: 'FBD',
                                        link: '/documentation/service-model/Fbd',
                                    },
                                    {
                                        text: 'FUP',
                                        link: '/documentation/service-model/Fup',
                                    },
                                    {
                                        text: 'XUP',
                                        link: '/documentation/service-model/Xup',
                                    },
                                ],
                            },
                        ],
                    },
                ],
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
                            },
                            {
                                text: '공통 속성',
                                link: '/documentation/view-designer/Other',
                                collapsible: true
                            }
                        ],
                    },
                ],
            },
            {
                text: 'Query Developer',
                link: '/documentation/query-developer',
                collapsible: true,
                children: [
                    {
                        text: '구성',
                        link: '/documentation/query-developer/Structure'
                    },
                    {
                        text: 'DB접속 및 테이블 리스트',
                        link: '/documentation/query-developer/ConnectDB',
                        collapsible: true
                    },
                    {
                        text: '결과 영역',
                        link: '/documentation/query-developer/ResultTerritory',
                        collapsible: true
                    },
                ]
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
                children: [
                    {
                        text: 'Start BOC',
                        link: '/documentation/service-model/StartBoc',
                        collapsible: true,
                        children: []
                    },
                    {
                        text: 'DataBase BOC',
                        link: '/documentation/service-model/DatabaseBoc',
                        collapsible: true,
                        children: [
                            {
                                text: 'SEL',
                                link: '/documentation/service-model/Sel',
                            },
                            {
                                text: 'INS',
                                link: '/documentation/service-model/Ins',
                            },
                            {
                                text: 'DEL',
                                link: '/documentation/service-model/Del',
                            },
                            {
                                text: 'UPD',
                                link: '/documentation/service-model/Upd',
                            },
                            {
                                text: 'UNI',
                                link: '/documentation/service-model/Uni',
                            },
                            {
                                text: 'XIUD',
                                link: '/documentation/service-model/Xiud',
                            },
                            {
                                text: 'SET',
                                link: '/documentation/service-model/Set',
                            },
                            {
                                text: 'RBK',
                                link: '/documentation/service-model/Rbk',
                            },
                        ],
                    },
                    {
                        text: 'Control BOC',
                        link: '/documentation/service-model/ControlBoc',
                        collapsible: true,
                        children: [
                            {
                                text: 'MPD',
                                link: '/documentation/service-model/Mpd',
                            },
                            {
                                text: 'MIUD',
                                link: '/documentation/service-model/Miud',
                            },
                            {
                                text: 'CON',
                                link: '/documentation/service-model/ConBoc',
                            },
                            {
                                text: 'NLL',
                                link: '/documentation/service-model/Nll',
                            },
                            {
                                text: 'BRK',
                                link: '/documentation/service-model/Brk',
                            },
                        ],
                    },
                    {
                        text: 'Interface BOC',
                        link: '/documentation/service-model/InterfaceBoc',
                        collapsible: true,
                        children: [
                            {
                                text: 'OSP',
                                link: '/documentation/service-model/Osp',
                            },
                            {
                                text: 'PEX',
                                link: '/documentation/service-model/Pex',
                            },
                            {
                                text: 'CMD',
                                link: '/documentation/service-model/Cmd',
                            },
                        ],
                    },
                    {
                        text: 'Change BOC',
                        link: '/documentation/service-model/ChangeBoc',
                        collapsible: true,
                        children: [
                            {
                                text: 'GLV',
                                link: '/documentation/service-model/Glv',
                            },
                            {
                                text: 'CVT',
                                link: '/documentation/service-model/Cvt',
                            },
                            {
                                text: 'GET',
                                link: '/documentation/service-model/Get',
                            },
                            {
                                text: 'MRG',
                                link: '/documentation/service-model/Mrg',
                            },
                            {
                                text: 'ADD',
                                link: '/documentation/service-model/Add',
                            },
                            {
                                text: 'SUM',
                                link: '/documentation/service-model/Sum',
                            },
                            {
                                text: 'SRD',
                                link: '/documentation/service-model/Srd',
                            },
                            {
                                text: 'SRCD',
                                link: '/documentation/service-model/Srcd',
                            },
                        ],
                    },
                    {
                        text: 'File BOC',
                        link: '/documentation/service-model/FileBoc',
                        collapsible: true,
                        children: [
                            {
                                text: 'FUT',
                                link: '/documentation/service-model/Fut',
                            },
                            {
                                text: 'FBD',
                                link: '/documentation/service-model/Fbd',
                            },
                            {
                                text: 'FUP',
                                link: '/documentation/service-model/Fup',
                            },
                            {
                                text: 'XUP',
                                link: '/documentation/service-model/Xup',
                            },
                        ],
                    },
                ],
            },
            {
                text: 'View Designer',
                link: '/documentation/view-designer',
                children: [],
            },
            {
                text: 'Query Developer',
                link: '/documentation/query-developer',
                collapsible: true,
                children: [
                    {
                        text: 'DB Connect And Table List',
                        link: '/documentation/query-developer/ConnectDB',
                        collapsible: true
                    },
                    {
                        text: 'Result Territory',
                        link: '/documentation/query-developer/ResultTerritory',
                        collapsible: true
                    }
                ]
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