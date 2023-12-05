import{_ as r}from"./InterfaceBOC-07a46def.js";import{_ as s,r as n,o as d,c as i,a as o,d as e,e as c,b as _,f as t}from"./app-17639960.js";const l={},h=_('<h1 id="interface-boc" tabindex="-1"><a class="header-anchor" href="#interface-boc" aria-hidden="true">#</a> Interface BOC</h1><p>서비스 내부 호출 등의 인터페이스 구성요소입니다. <br><img class="boxBorder" src="'+r+'" style="width:400px;"> <br></p><h2 id="_1-osp" tabindex="-1"><a class="header-anchor" href="#_1-osp" aria-hidden="true">#</a> 1. OSP</h2><p>데이터베이스 Stored Procedure를 호출하는 컴포넌트입니다.</p>',4),p={class:"custom-container tip"},m={class:"custom-container-title"},u=e("p",null,[t("호출되는 데이터베이스 Stored Procedure가 처리하고 Return하는 데이터셋은 단일 레코드셋만 허용합니다."),e("br"),t(" 호출은 입력 데이터셋의 레코드 수만큼 해당 Stored Procedure를 호출합니다.")],-1),f=e("h2",{id:"_2-pex",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-pex","aria-hidden":"true"},"#"),t(" 2. PEX")],-1),x=e("p",null,"시스템 내부의 다른 서비스 또는 외부 시스템의 인터페이스(API)를 호출하는 처리를 수행하는 기능인 컴포넌트입니다.",-1),b={class:"custom-container tip"},B={class:"custom-container-title"},v=e("p",null,[t("PEX BOC는 내부 호출의 경우 다른 메뉴에 속해 있는 서비스를 호출합니다."),e("br"),t(" 외부 호출의 경우 시스템 외부에 존재 또는 타 시스템과 연동하기 위한 API를 호출합니다.")],-1),P=e("h2",{id:"_3-cmd",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-cmd","aria-hidden":"true"},"#"),t(" 3. CMD")],-1),R=e("p",null,"DB 테이블에 대한 Delete문을 처리하는 기능인 컴포넌트입니다.",-1),k={class:"custom-container tip"},C={class:"custom-container-title"},N=e("p",null,[t("DEL BOC는 쿼리를 자동 생성하며 자동 생성에 필요한 속성을 설정합니다. "),e("br"),t(" 처리 이후 Object 컬럼인 UPDCNT 값으로 삭제 처리한 Record Count를 Return 처리합니다.")],-1);function D(I,O){const a=n("Badge");return d(),i("div",null,[h,o(" Remark "),e("div",p,[e("p",m,[c(a,{type:"tip",text:"Remark",vertical:"middle"})]),u]),o(" "),f,x,o(" Remark "),e("div",b,[e("p",B,[c(a,{type:"tip",text:"Remark",vertical:"middle"})]),v]),o(" "),P,R,o(" Remark "),e("div",k,[e("p",C,[c(a,{type:"tip",text:"Remark",vertical:"middle"})]),N]),o(" ")])}const y=s(l,[["render",D],["__file","InterfaceBoc.html.vue"]]);export{y as default};
