<template><div><h1 id="메뉴-구조" tabindex="-1"><a class="header-anchor" href="#메뉴-구조" aria-hidden="true">#</a> 메뉴 구조</h1>
<p>POWER MDD의 메뉴는 다음 6가지 구조로 구성됩니다.</p>
<p><img src="@source/.vuepress/public/MenuStructure/menu-structure.png" alt="menu-structure"></p>
<div class="custom-container tip"><p class="custom-container-title">메뉴 구조</p>
<ul>
<li>Model</li>
<li>Naming Rule</li>
<li>Tools</li>
<li>Users</li>
<li>MyInfo</li>
<li>Help</li>
</ul>
</div>
<h2 id="_1-model" tabindex="-1"><a class="header-anchor" href="#_1-model" aria-hidden="true">#</a> 1. Model</h2>
<p><img src="@source/.vuepress/public/MenuStructure/model.png" alt="model"></p>
<p>모델링을 시작하기 위한 화면을 실행하거나, POWER MDD를 종료하는 메뉴입니다.</p>
<div class="custom-container tip"><p class="custom-container-title">Model 구조</p>
<ul>
<li>Open</li>
<li>Tool Exit</li>
</ul>
</div>
<ul>
<li>
<h4 id="open" tabindex="-1"><a class="header-anchor" href="#open" aria-hidden="true">#</a> Open</h4>
</li>
</ul>
<p><img src="@source/.vuepress/public/MenuStructure/model-open.png" alt="model-open"></p>
<p>개발화면을 시작합니다.</p>
<ul>
<li>
<h4 id="tool-exit" tabindex="-1"><a class="header-anchor" href="#tool-exit" aria-hidden="true">#</a> Tool Exit</h4>
</li>
</ul>
<p>POWER MDD를 종료합니다.</p>
<h2 id="_2-naming-rule" tabindex="-1"><a class="header-anchor" href="#_2-naming-rule" aria-hidden="true">#</a> 2. Naming Rule</h2>
<p><img src="@source/.vuepress/public/MenuStructure/rule.png" alt="rule"></p>
<p>Package나 Class, Database 등 Name 규칙을 설정하는 메뉴입니다.</p>
<div class="custom-container tip"><p class="custom-container-title">Naming Rule 구조</p>
<ul>
<li>Package Name Rule</li>
<li>Single Name Rule</li>
<li>Database Connection</li>
<li>Database Schema</li>
<li>Column Dictionary</li>
</ul>
</div>
<ul>
<li>
<h4 id="package-name-rule" tabindex="-1"><a class="header-anchor" href="#package-name-rule" aria-hidden="true">#</a> Package Name Rule</h4>
</li>
</ul>
<p><img src="@source/.vuepress/public/MenuStructure/rule-package-name-rule.png" alt="rule-package-name-rule"></p>
<p>Package Name Rule은 Java의 Package Name 규칙을 등록하는 역할을 합니다.</p>
<ul>
<li>
<h4 id="single-name-rule" tabindex="-1"><a class="header-anchor" href="#single-name-rule" aria-hidden="true">#</a> Single Name Rule</h4>
</li>
</ul>
<p><img src="@source/.vuepress/public/MenuStructure/rule-single-name-rule.png" alt="single-name-rule"></p>
<p>Single Name Rule은 Java의 Class Name Rule와 Method Name Rule을 지정할 수 있습니다.
지정 방법은 접두어와 접미어를 정의하여 해당 규칙이 허용되는 명칭만 사용 가능합니다.</p>
<ul>
<li>
<h4 id="database-connection" tabindex="-1"><a class="header-anchor" href="#database-connection" aria-hidden="true">#</a> Database Connection</h4>
</li>
</ul>
<p><img src="@source/.vuepress/public/MenuStructure/rule-database-connection.png" alt="database-connection"></p>
<p>Database Connection는 업무에서 사용될 Database의 Name을 등록, 관리합니다.</p>
<p>일반적으로 해당 정보는 POWER MDD-BMS 관리자가 등록해주어야 합니다.
실질적으로 사용할 데이터베이스의 연결정보는 BMS Config의 Database Resource에 등록이 되어 있는 Name 정보를 사용해야 합니다.</p>
<p>POWER MDD-DX에서 서버가 정의 되어 있는 Database Resource 중 해당 프로젝트에서 사용될 Name 정보만 등록하면 됩니다. 등록된 이름은 Query Developer와 Service Model 그리고 Data Model 중 기본 데이터베이스가 아닌 별도의 데이터베이스 지정이 필요할 때 사용됩니다.</p>
<ul>
<li>
<h4 id="database-schema" tabindex="-1"><a class="header-anchor" href="#database-schema" aria-hidden="true">#</a> Database Schema</h4>
</li>
</ul>
<p><img src="@source/.vuepress/public/MenuStructure/rule-database-schema.png" alt="database-schema"></p>
<p>Database Schema에서는 Service Model의 BOC(Business Operation Component)에서 데이터베이스 조작 시 사용되는 스키마 정보를 설정합니다.
사용자 편의성을 높여주고 사용자로부터 오입력 및 잘못된 값의 할당을 줄여주는 기능입니다.</p>
<ul>
<li>
<h4 id="column-dictionary" tabindex="-1"><a class="header-anchor" href="#column-dictionary" aria-hidden="true">#</a> Column Dictionary</h4>
</li>
</ul>
<p><img src="@source/.vuepress/public/MenuStructure/rule-column-dictionary.png" alt="column-dictionary"></p>
<p>Column Dictionary에서는 모델에서 가장 많이 사용될 Data Dictionary를 Database Table로부터 추출하여 사용자가 쉽게 등록할 수 있도록 도와주는 유틸리티 기능을 제공합니다.
최초 데이터 설계가 종료되고 데이터베이스의 물리 테이블이 생성된 후 해당 기능을 사용할 수 있습니다.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>단, 물리 테이블 생성 시에 반드시 테이블의 Column Comment가 반드시 등록되어 있어야 합니다.</p>
</div>
<h2 id="_3-tools" tabindex="-1"><a class="header-anchor" href="#_3-tools" aria-hidden="true">#</a> 3. Tools</h2>
<p><img src="@source/.vuepress/public/MenuStructure/tools.png" alt="tools"></p>
<p>메뉴 빌드 및 복사 변경, 구성 변경 등 여러 tool을 제공하는 메뉴입니다.</p>
<div class="custom-container tip"><p class="custom-container-title">Tools 구조</p>
<ul>
<li>Build</li>
<li>Menu Rebuild</li>
<li>ReadOnly Setting</li>
</ul>
</div>
<ul>
<li>
<h4 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> Build</h4>
</li>
</ul>
<p><img src="@source/.vuepress/public/MenuStructure/tools-build.png" alt="tools-build"></p>
<p>Build는 소스 빌드 시 여러 개의 서비스를 동시에 빌드를 처리해주는 기능입니다.</p>
<ul>
<li>
<h4 id="menu-rebuild" tabindex="-1"><a class="header-anchor" href="#menu-rebuild" aria-hidden="true">#</a> Menu Rebuild</h4>
</li>
</ul>
<p><img src="@source/.vuepress/public/MenuStructure/tools-menu-rebuild.png" alt="tools-menu-rebuild"></p>
<p>Menu Rebuild는 메뉴 구성을 변경 또는 재구성 시 사용하는 기능으로 메뉴의 복사 및 메뉴의 이동을 처리할 수 있습니다.</p>
<ul>
<li>
<h4 id="readonly-setting" tabindex="-1"><a class="header-anchor" href="#readonly-setting" aria-hidden="true">#</a> ReadOnly Setting</h4>
</li>
</ul>
<p><img src="@source/.vuepress/public/MenuStructure/tools-readonly-setting.png" alt="tools-readonly-setting"></p>
<p>ReadOnly Setting은 Service Model 또는 View Designer에서 완료 또는 변경 처리를 막고자 할 때 사용되는 기능입니다.</p>
<h2 id="_4-users" tabindex="-1"><a class="header-anchor" href="#_4-users" aria-hidden="true">#</a> 4. Users</h2>
<p><img src="@source/.vuepress/public/MenuStructure/users.png" alt="users"></p>
<p>해당 프로젝트의 사용자 관리, 사용자 권한 등을 관리하고, View Designer에서 사용할 공통 Resource를 관리하는 메뉴입니다.</p>
<div class="custom-container tip"><p class="custom-container-title">Users 구조</p>
<ul>
<li>User Manager</li>
<li>Authority Manager</li>
<li>View Common Config</li>
</ul>
</div>
<ul>
<li>
<h4 id="user-manager" tabindex="-1"><a class="header-anchor" href="#user-manager" aria-hidden="true">#</a> User Manager</h4>
</li>
</ul>
<p><img src="@source/.vuepress/public/MenuStructure/users-user-manager.png" alt="user-manager"></p>
<p>User Manager는 해당 프로젝트의 사용자의 기본 정보 및 권한 ID를 할당해주는 기능을 제공합니다. 사용자 관리기능을 사용하기 위해서는 관리자 권한이 있어야 가능합니다.</p>
<ul>
<li>
<h4 id="authority-manager" tabindex="-1"><a class="header-anchor" href="#authority-manager" aria-hidden="true">#</a> Authority Manager</h4>
</li>
</ul>
<p><img src="@source/.vuepress/public/MenuStructure/users-authority-manager.png" alt="authority-manager"></p>
<p><img src="@source/.vuepress/public/MenuStructure/users-authority-manager2.png" alt="authority-manager2"></p>
<p><img src="@source/.vuepress/public/MenuStructure/users-authority-manager3.png" alt="authority-manager3"></p>
<p>Authority Manager는 해당 프로젝트에 대해 각 Category별로 접근 권한을 생성하고 해당 권한을 사용자에게 할당하여 사용자의 권한을 정의하는 기능을 제공합니다.</p>
<div class="custom-container tip"><p class="custom-container-title">Authority Manager 탭 구조</p>
<ul>
<li>Service Authorization</li>
<li>View Authorization</li>
<li>Data Authorization</li>
</ul>
</div>
<ul>
<li>
<h4 id="view-common-config" tabindex="-1"><a class="header-anchor" href="#view-common-config" aria-hidden="true">#</a> View Common Config</h4>
</li>
</ul>
<p><img src="@source/.vuepress/public/MenuStructure/users-view-common-config.png" alt="view-common-config"></p>
<p><img src="@source/.vuepress/public/MenuStructure/users-view-common-config2.png" alt="view-common-config2"></p>
<p>View Common Config는 View Designer에서 사용하는 공통 Resource를 정의하여 사용할 수 있도록 지원해주는 기능을 제공합니다.
공통 Script, 공통으로 사용하는 Style을 등록하여 사용할 수 있도록 지원해줍니다.</p>
<div class="custom-container tip"><p class="custom-container-title">View Common Config 탭 구조</p>
<ul>
<li>Common File
<ul>
<li>JS Files</li>
<li>CSS Files</li>
</ul>
</li>
<li>CSS Define</li>
<li>Control-CSS</li>
</ul>
</div>
<h2 id="_5-myinfo" tabindex="-1"><a class="header-anchor" href="#_5-myinfo" aria-hidden="true">#</a> 5. MyInfo</h2>
<p><img src="@source/.vuepress/public/MenuStructure/myinfo.png" alt="myinfo"></p>
<p>현재 로그인 정보를 관리하는 메뉴입니다.</p>
<div class="custom-container tip"><p class="custom-container-title">myInfo 구조</p>
<ul>
<li>Password</li>
</ul>
</div>
<ul>
<li>
<h4 id="password" tabindex="-1"><a class="header-anchor" href="#password" aria-hidden="true">#</a> Password</h4>
</li>
</ul>
<p><img src="@source/.vuepress/public/MenuStructure/myinfo-password.png" alt="password"></p>
<p>Password는 현재 로그인 한 유저의 비밀번호를 변경하는 기능입니다.</p>
<h2 id="_6-help" tabindex="-1"><a class="header-anchor" href="#_6-help" aria-hidden="true">#</a> 6. Help</h2>
<p><img src="@source/.vuepress/public/MenuStructure/help.png" alt="help"></p>
<p>POWER MDD 제품 정보 및 매뉴얼과 언어설정을 관리하는 메뉴입니다.</p>
<div class="custom-container tip"><p class="custom-container-title">Help 구조</p>
<ul>
<li>about POWER MDD</li>
<li>Function</li>
<li>Manual</li>
<li>Multilingual</li>
</ul>
</div>
<ul>
<li>
<h4 id="about-power-mdd" tabindex="-1"><a class="header-anchor" href="#about-power-mdd" aria-hidden="true">#</a> about POWER MDD</h4>
</li>
</ul>
<p><img src="@source/.vuepress/public/MenuStructure/help-about-powermdd.png" alt="about-powermdd"></p>
<p>제품의 기본 정보와 접속 정보를 확인할 수 있습니다.</p>
<ul>
<li>
<h4 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> Function</h4>
</li>
</ul>
<p><img src="@source/.vuepress/public/MenuStructure/help-function.png" alt="function"></p>
<p>View Designer에서 주로 사용하는 Function들을 등록할 수 있습니다.</p>
<ul>
<li>
<h4 id="manual" tabindex="-1"><a class="header-anchor" href="#manual" aria-hidden="true">#</a> Manual</h4>
</li>
</ul>
<p><img src="@source/.vuepress/public/MenuStructure/help-manual.png" alt="manual"></p>
<p>제품의 기본 매뉴얼 페이지 창이 나옵니다.</p>
<ul>
<li>
<h4 id="multilingual" tabindex="-1"><a class="header-anchor" href="#multilingual" aria-hidden="true">#</a> Multilingual</h4>
</li>
</ul>
<p><img src="@source/.vuepress/public/MenuStructure/help-multilang.png" alt="multilang"></p>
<p>제품의 다국어 처리를 위한 Language Code Table 관리입니다. Language 기능의 Admin 기능을 True로 줄 때 메뉴가 활성 됩니다. 제공되는 국가별로 지원하는 언어의 종류는 차이가 있을 수 있습니다. Code 종류는 6가지로 분류되어 있습니다.</p>
</div></template>


