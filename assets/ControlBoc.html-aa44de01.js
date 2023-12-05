import{_ as a}from"./ControlBOC-be1beb41.js";import{_ as i,r as n,o as r,c as d,a as o,d as e,e as c,b as _,f as t}from"./app-f8aeac71.js";const l={},h=_('<h1 id="control-boc" tabindex="-1"><a class="header-anchor" href="#control-boc" aria-hidden="true">#</a> Control BOC</h1><p>반복, 분기 조건, Break등 제어를 하는 구성요소입니다. <br><img class="boxBorder" src="'+a+'" style="width:400px;"> <br></p><h2 id="_1-mpd" tabindex="-1"><a class="header-anchor" href="#_1-mpd" aria-hidden="true">#</a> 1. MPD</h2><p>입력 Object의 특정 컬럼 값에 따른 분기 처리를 수행하는 기능인 컴포넌트입니다.</p>',4),p={class:"custom-container tip"},m={class:"custom-container-title"},u=e("p",null,[t("MPD BOC는 분기조건을 자유롭게 지정할 수 있어 범용적인 패턴의 분기처리에 사용됩니다."),e("br"),t(" MPD BOC의 분기처리는 Child BOC에 CON BOC 조건 분기처리를 추가하여 필요한 속성을 설정합니다. "),e("br"),t(" Loop내에서 Current Record Object는 “R” Object로 만들어집니다.")],-1),B=e("h2",{id:"_2-miud",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-miud","aria-hidden":"true"},"#"),t(" 2. MIUD")],-1),C=e("p",null,"Object의 IUDFLAG 컬럼 값(I:Insert, U:Update, D:Delete)에 따라 분기 처리를 수행하는 기능인 컴포넌트입니다.",-1),b={class:"custom-container tip"},O={class:"custom-container-title"},x=e("p",null,"MIUD BOC는 IUD에 대한 분기조건이 자동으로 생성되므로 입력 Object에 존재하는 IUDFLAG 컬럼이 고정적인 패턴의 분기 처리에 사용됩니다.",-1),f=e("h2",{id:"_3-con",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-con","aria-hidden":"true"},"#"),t(" 3. CON")],-1),k=e("p",null,"조건에 따른 분기 처리를 수행하는 기능인 컴포넌트입니다.",-1),v={class:"custom-container tip"},D={class:"custom-container-title"},R=e("p",null,[t("CON BOC는 앞에서 처리된 BOC의 결과값을 체크하여 조건에 따른 분기를 수행함으로써 프로세스의 흐름을 제어합니다. "),e("br"),t(" CON BOC 사용시 자바 소스 생성은 if(조건) 형식으로 구성됩니다.")],-1),N=e("h2",{id:"_4-nll",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-nll","aria-hidden":"true"},"#"),t(" 4. NLL")],-1),I=e("p",null,"“아무 일도 하지 않는 BOC”를 의미하며 프로세스 처리규칙 상 BOC간 연결이 불가한 경우 중간 버퍼 역할인 컴포넌트입니다.",-1),M={class:"custom-container tip"},U={class:"custom-container-title"},y=e("p",null,[t("모델링 초기 시점에 개략적인 논리모델만 작성하거나 불확실한 처리에 대한 임시적인 용도에도 사용합니다."),e("br"),t(" 또한, 처리기능 없이 메시지만 발생시키고 싶을 때 사용합니다.")],-1),L=e("h2",{id:"_5-brk",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-brk","aria-hidden":"true"},"#"),t(" 5. BRK")],-1),j=e("p",null,"MPD BOC 또는 MIUD BOC를 이용하여 Loop(while)문을 종료 처리하는 컴포넌트입니다.",-1),P={class:"custom-container tip"},V={class:"custom-container-title"},g=e("p",null,[t("해당 기능 사용시 자바 언어의 while문 내에 break가 추가됩니다."),e("br"),t(" BRK BOC는 MPD BOC, MIUD BOC 내에서만 사용 가능합니다.")],-1);function w(A,F){const s=n("Badge");return r(),d("div",null,[h,o(" Remark "),e("div",p,[e("p",m,[c(s,{type:"tip",text:"Remark",vertical:"middle"})]),u]),o(" "),B,C,o(" Remark "),e("div",b,[e("p",O,[c(s,{type:"tip",text:"Remark",vertical:"middle"})]),x]),o(" "),f,k,o(" Remark "),e("div",v,[e("p",D,[c(s,{type:"tip",text:"Remark",vertical:"middle"})]),R]),o(" "),N,I,o(" Remark "),e("div",M,[e("p",U,[c(s,{type:"tip",text:"Remark",vertical:"middle"})]),y]),o(" "),L,j,o(" Remark "),e("div",P,[e("p",V,[c(s,{type:"tip",text:"Remark",vertical:"middle"})]),g]),o(" ")])}const E=i(l,[["render",w],["__file","ControlBoc.html.vue"]]);export{E as default};
