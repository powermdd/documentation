import{_ as r,r as s,o,c as a,d as e,e as d,f as t,b as i}from"./app-099ee58d.js";const n="/documentation/assets/SystemStructure-ddeced4f.png";const c={},_=e("h1",{id:"시스템-구조",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#시스템-구조","aria-hidden":"true"},"#"),t(" 시스템 구조")],-1),u=e("p",null,"POWERMDD의 시스템은 다음과 같은 구조로 구성됩니다.",-1),p=e("p",null,[e("img",{src:n,alt:"SystemStructure"})],-1),h={class:"custom-container tip"},b={class:"custom-container-title"},m=e("b",null," 시스템 구성 ",-1),D=i("<p>1) <b>POWERMDD.BMS(Business Model Server) </b> <br></p><ul><li>Server Side Engine <br></li><li>WAS에 탑재되는 Middleware 서버로 다수의 Client(DX)로부터의 다양한 요청에 대하여 필요한 기능을 제공 <br></li></ul><p>2) <b>POWERMDD.DX(Design Tool) </b> <br></p><ul><li>사용자 PC에 설치되는 개발 Tool <br></li><li>사용자(개발자)가 업무 Application을 개발하기 위하여 사용하는 개발도구 <br></li></ul>",4),S=i('<h2 id="_1-powermdd-bms-구성-및-기능" tabindex="-1"><a class="header-anchor" href="#_1-powermdd-bms-구성-및-기능" aria-hidden="true">#</a> 1. POWERMDD.BMS 구성 및 기능</h2><p>: <u>POWERMDD.DX의 요청에 대한 다음과 같은 다양한 기능을 처리합니다.</u></p><ul><li>서비스 모델에 대한 실시간 테스트 및 결과 제공</li><li>테스트가 완료된 모델에 대한 자바 소스 자동 생성</li><li>자바 소스 컴파일 및 Class의 WAS 자동 배포 기능</li><li>UI화면에 대한 JSP 자동 생성 및 실행</li><li>개발 관련 작업 리소스에 대한 이력 관리</li><li>DX의 접근 통제 및 권한 관리</li></ul><h2 id="_2-powermdd-dx-구성-및-기능" tabindex="-1"><a class="header-anchor" href="#_2-powermdd-dx-구성-및-기능" aria-hidden="true">#</a> 2. POWERMDD.DX 구성 및 기능</h2><p>: <u>사용자(개발자)에게 Application 개발을 위한 아래의 다양한 도구를 제공합니다.</u></p><ul><li>WAS에서 실행되는 서비스를 개발하는 <b> Service Model </b></li><li>웹 브라우저에서 실행되는 UI 화면을 개발하는 <b> View Designer </b></li><li>DB 조작 및 쿼리 작성을 위한 <b>Query Developer </b></li><li>테이블간의 관계를 다이어그램으로 표현하여 DB의 구조를 한눈에 파악하는<b> Data Model </b></li><li>WAS 서버상의 관련된 파일을 처리하는 <b> Server File Manager </b></li></ul>',6);function M(f,v){const l=s("Badge");return o(),a("div",null,[_,u,p,e("div",h,[e("p",b,[d(l,{type:"tip",text:"Remark",vertical:"middle"}),t(),m]),D]),S])}const B=r(c,[["render",M],["__file","SystemStructure.html.vue"]]);export{B as default};
