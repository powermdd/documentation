import{_ as r,r as s,o as a,c as o,d as e,e as d,f as i,b as t}from"./app-b24145f5.js";const n="/documentation/assets/SystemStructure-70a2e950.png",c={},b=e("h1",{id:"시스템-구조",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#시스템-구조","aria-hidden":"true"},"#"),i(" 시스템 구조")],-1),_=e("p",null,"POWER MDD의 시스템은 다음과 같은 구조로 구성됩니다.",-1),u=e("p",null,[e("img",{src:n,alt:"SystemStructure"})],-1),p={class:"custom-container tip"},h={class:"custom-container-title"},D=e("b",null," 시스템 구성 ",-1),m=t("<p>1) <b>POWER MDD-BMS(Business Model Server) </b> <br></p><ul><li>Server Side Engine <br></li><li>WAS에 탑재되는 Middleware 서버로 다수의 Client(DX)로부터의 다양한 요청에 대하여 필요한 기능을 제공 <br></li></ul><p>2) <b>POWER MDD-DX(Design Tool) </b> <br></p><ul><li>사용자 PC에 설치되는 개발 Tool <br></li><li>사용자(개발자)가 업무 Application을 개발하기 위하여 사용하는 개발도구 <br></li></ul>",4),S=t('<h2 id="_1-power-mdd-bms-구성-및-기능" tabindex="-1"><a class="header-anchor" href="#_1-power-mdd-bms-구성-및-기능" aria-hidden="true">#</a> 1. POWER MDD-BMS 구성 및 기능</h2><p>POWER MDD-BMS는 POWER MDD.DX의 요청에 대한 다음과 같은 다양한 기능을 처리합니다.</p><ul><li><b>서비스 모델에 대한 실시간 테스트 및 결과 제공</b></li><li><b>테스트가 완료된 모델에 대한 자바소스 자동 생성</b></li><li><b>자바 소스 컴파일 및 Class의 WAS 자동 배포 기능</b></li><li><b>UI화면에 대한 JSP 자동 생성 및 실행</b></li><li><b>개발 관련 작업 리소스에 대한 이력 관리</b></li><li><b>DX의 접근 통제 및 권한 관리</b></li></ul><h2 id="_2-power-mdd-dx-구성-및-기능" tabindex="-1"><a class="header-anchor" href="#_2-power-mdd-dx-구성-및-기능" aria-hidden="true">#</a> 2. POWER MDD-DX 구성 및 기능</h2><p>POWER MDD-DX는 사용자(개발자)에게 Application 개발을 위한 아래의 다양한 도구를 제공합니다.</p><ul><li><b> WAS에서 실행되는 서비스를 개발하는 Service Model </b></li><li><b> 웹 브라우저에서 실행되는 UI 화면을 개발하는 View Designer </b></li><li><b> DB 조작 및 쿼리 작성을 위한 Query Developer </b></li><li><b> 테이블간의 관계를 다이어그램으로 표현하여 DB의 구조를 한눈에 파악하는 Data Model </b></li><li><b> WAS 서버상의 관련된 파일을 처리하는 Server File Manager </b></li></ul>',6);function M(W,f){const l=s("Badge");return a(),o("div",null,[b,_,u,e("div",p,[e("p",h,[d(l,{type:"tip",text:"Remark",vertical:"middle"}),i(),D]),m]),S])}const v=r(c,[["render",M],["__file","SystemStructure.html.vue"]]);export{v as default};
