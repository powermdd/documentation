import{_ as e,o as a,c as r,d as i}from"./app-af30f320.js";const d="/documentation/assets/SystemStructure-a9929034.png",s={},h=i('<h1 id="시스템-구조" tabindex="-1"><a class="header-anchor" href="#시스템-구조" aria-hidden="true">#</a> 시스템 구조</h1><p>POWER MDD의 시스템은 다음과 같은 구조로 구성됩니다.</p><p><img src="'+d+'" alt="SystemStructure"></p><div class="custom-container tip"><p class="custom-container-title">시스템 구성</p><p>POWER MDD는 Server Side Engine인 <strong>POWER MDD-BMS</strong>(Business Model Server)와<br> 사용자 PC에 설치되는 개발 Tool인 <strong>POWER MDD-DX</strong>(Design Tool)로 구성되어 있습니다.</p></div><h2 id="_1-power-mdd-bms-구성-및-기능" tabindex="-1"><a class="header-anchor" href="#_1-power-mdd-bms-구성-및-기능" aria-hidden="true">#</a> 1. POWER MDD-BMS 구성 및 기능</h2><p>POWER MDD-BMS는 WAS에 탑재되는 Middleware 서버로 다수의 Client(POWER MDD-DX)로부터의 다양한 요청에 대하여 필요한 기능을 제공합니다.</p><ul><li><h5 id="서비스-모델에-대한-실시간-테스트-및-결과-제공" tabindex="-1"><a class="header-anchor" href="#서비스-모델에-대한-실시간-테스트-및-결과-제공" aria-hidden="true">#</a> 서비스 모델에 대한 실시간 테스트 및 결과 제공</h5></li><li><h5 id="테스트가-완료된-모델에-대한-자바소스-자동-생성" tabindex="-1"><a class="header-anchor" href="#테스트가-완료된-모델에-대한-자바소스-자동-생성" aria-hidden="true">#</a> 테스트가 완료된 모델에 대한 자바소스 자동 생성</h5></li><li><h5 id="자바-소스-컴파일-및-class의-was-자동-배포-기능" tabindex="-1"><a class="header-anchor" href="#자바-소스-컴파일-및-class의-was-자동-배포-기능" aria-hidden="true">#</a> 자바 소스 컴파일 및 Class의 WAS 자동 배포 기능</h5></li><li><h5 id="ui화면에-대한-jsp-자동-생성-및-실행" tabindex="-1"><a class="header-anchor" href="#ui화면에-대한-jsp-자동-생성-및-실행" aria-hidden="true">#</a> UI화면에 대한 JSP 자동 생성 및 실행</h5></li><li><h5 id="개발-관련-작업-리소스에-대한-이력-관리" tabindex="-1"><a class="header-anchor" href="#개발-관련-작업-리소스에-대한-이력-관리" aria-hidden="true">#</a> 개발 관련 작업 리소스에 대한 이력 관리</h5></li><li><h5 id="dx의-접근-통제-및-권한-관리" tabindex="-1"><a class="header-anchor" href="#dx의-접근-통제-및-권한-관리" aria-hidden="true">#</a> DX의 접근 통제 및 권한 관리</h5></li></ul><h2 id="_2-power-mdd-dx-구성-및-기능" tabindex="-1"><a class="header-anchor" href="#_2-power-mdd-dx-구성-및-기능" aria-hidden="true">#</a> 2. POWER MDD-DX 구성 및 기능</h2><p>POWER MDD-DX는 사용자(개발자)가 업무 Application을 개발하기 위하여 사용하는 개발도구로, 서버상의 서비스를 개발하는 Service Model와 Client UI 화면을 개발하는 View Designer 등으로 구성되어 있습니다.</p><ul><li><h5 id="was에서-실행되는-서비스를-개발하는-service-model" tabindex="-1"><a class="header-anchor" href="#was에서-실행되는-서비스를-개발하는-service-model" aria-hidden="true">#</a> WAS에서 실행되는 서비스를 개발하는 Service Model</h5></li><li><h5 id="웹-브라우저에서-실행되는-ui-화면을-개발하는-view-designer" tabindex="-1"><a class="header-anchor" href="#웹-브라우저에서-실행되는-ui-화면을-개발하는-view-designer" aria-hidden="true">#</a> 웹 브라우저에서 실행되는 UI 화면을 개발하는 View Designer</h5></li><li><h5 id="db-조작-및-쿼리-작성을-위한-query-developer" tabindex="-1"><a class="header-anchor" href="#db-조작-및-쿼리-작성을-위한-query-developer" aria-hidden="true">#</a> DB 조작 및 쿼리 작성을 위한 Query Developer</h5></li><li><h5 id="테이블간의-관계를-다이어그램으로-표현하여-db의-구조를-한눈에-파악하는-data-model" tabindex="-1"><a class="header-anchor" href="#테이블간의-관계를-다이어그램으로-표현하여-db의-구조를-한눈에-파악하는-data-model" aria-hidden="true">#</a> 테이블간의 관계를 다이어그램으로 표현하여 DB의 구조를 한눈에 파악하는 Data Model</h5></li><li><h5 id="was-서버상의-관련된-파일을-처리하는-server-file-manager" tabindex="-1"><a class="header-anchor" href="#was-서버상의-관련된-파일을-처리하는-server-file-manager" aria-hidden="true">#</a> WAS 서버상의 관련된 파일을 처리하는 Server File Manager</h5></li></ul>',10),t=[h];function n(l,c){return a(),r("div",null,t)}const u=e(s,[["render",n],["__file","SystemStructure.html.vue"]]);export{u as default};
