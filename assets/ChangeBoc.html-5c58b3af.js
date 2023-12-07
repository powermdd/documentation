import{_ as o}from"./ChangeBOC-0ad7df31.js";import{_ as i,r as n,o as d,c as r,a as e,d as t,e as c,b as _,f as s}from"./app-965ca198.js";const l={},h=_('<h1 id="chanage-boc" tabindex="-1"><a class="header-anchor" href="#chanage-boc" aria-hidden="true">#</a> Chanage BOC</h1><p>데이터셋 Object의 레코드에 변화를 주는 구성요소입니다. <br><img class="boxBorder" src="'+o+'" style="width:400px;"> <br></p><h2 id="_1-glv" tabindex="-1"><a class="header-anchor" href="#_1-glv" aria-hidden="true">#</a> 1. GLV</h2><p>단일 값을 해당 서비스 내에서 변수로 사용하는 컴포넌트입니다.</p>',4),p={class:"custom-container tip"},m={class:"custom-container-title"},u=t("p",null,"GLV BOC 이외의 BOC는 In-Out에 기초하여 데이터셋을 구성하나 GLV BOC는 단순히 서비스 내부에서 변수형식으로 선언하여 사용합니다.",-1),b=t("h2",{id:"_2-cvt",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2-cvt","aria-hidden":"true"},"#"),s(" 2. CVT")],-1),x=t("p",null,"추가 및 변환 처리된 데이터를 데이터셋 Object로 생성하는 컴포넌트입니다.",-1),v={class:"custom-container tip"},B={class:"custom-container-title"},C=t("p",null,[s("CVT BOC는 입력 데이터셋 Object에 대한 데이터를 가공하여 출력되도록 사용합니다."),t("br"),s(" 이외에 추가적으로 입력 데이터셋 레코드에 대한 필터기능이 있습니다.")],-1),O=t("h2",{id:"_3-get",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_3-get","aria-hidden":"true"},"#"),s(" 3. GET")],-1),R=t("p",null,"화면에서 입력되는 데이터셋에서 필터링 처리를 수행하여 새로운 결과집합을 생성하는 컴포넌트입니다.",-1),k={class:"custom-container tip"},f={class:"custom-container-title"},g=t("p",null,"Select문의 Where 조건문과 동일한 역할을 수행합니다.",-1),D=t("h2",{id:"_4-mrg",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_4-mrg","aria-hidden":"true"},"#"),s(" 4. MRG")],-1),I=t("p",null,"n개의 데이터셋 Object의 레코드를 추출하여 병합된 단일 데이터셋을 생성하는 컴포넌트입니다.",-1),S={class:"custom-container tip"},y={class:"custom-container-title"},V=t("p",null,"일반적으로 최종 결과 데이터셋을 생성하기 위하여 자주 사용됩니다.",-1),E=t("h2",{id:"_5-add",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_5-add","aria-hidden":"true"},"#"),s(" 5. ADD")],-1),N=t("p",null,"DB 테이블에 대한 Update & Insert 처리를 수행하는 기능인 컴포넌트입니다.",-1),U={class:"custom-container tip"},j={class:"custom-container-title"},T=t("p",null,[s("UNI BOC는 쿼리를 자동 생성하며 자동 생성에 필요한 속성을 설정합니다. "),t("br"),s(" 처리 방식은 Update 먼저 수행하고 수행결과가 0건이면 Insert를 처리합니다. 즉 UPD BOC, INS BOC를 결합 시킨 형태입니다.")],-1),L=t("h2",{id:"_6-sum",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_6-sum","aria-hidden":"true"},"#"),s(" 6. SUM")],-1),P=t("p",null,"표준적인 SQL문장이 아닌 비정형적 SQL문장에 대한 처리를 수행하는 기능인 컴포넌트입니다.",-1),G={class:"custom-container tip"},M={class:"custom-container-title"},A=t("p",null,[s("INS BOC, UPD BOC, DEL BOC는 속성 설정으로 쿼리를 자동 생성처리 하지만 XIUD BOC는 사용자가 직접 쿼리를 입력하여 사용하는 기능입니다."),t("br"),s(" 예를 들면, PK를 수정하는 Update문이나 Insert문, Select문, Merge Into문 등을 사용자가 직접 입력하여 사용할 수 있습니다.")],-1),K=t("h2",{id:"_7-srd",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_7-srd","aria-hidden":"true"},"#"),s(" 7. SRD")],-1),Q=t("p",null,"입력 Object의 레코드들을 대상으로 Select 조건을 생성하여 필요한 Element를 덧붙이는 컴포넌트입니다.",-1),w={class:"custom-container tip"},W={class:"custom-container-title"},X=t("p",null,[s("입력 Object의 레코드의 특정 컬럼을 조건 값으로 하여 입력 레코드 수만큼 Select문이 실행됩니다. "),t("br"),t("span",{class:"spanEx"}," Ex) 입력된 데이터셋 Object 컬럼에 DEPT_ID 컬럼이 없다면, 해당 데이터셋에 해당 DEPT_ID 컬럼을 조회하여 데이터셋에 DEPT_ID 컬럼을 ADD할 수 있는 기능을 제공합니다. ")],-1),q=t("h2",{id:"_8-srcd",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_8-srcd","aria-hidden":"true"},"#"),s(" 8. SRCD")],-1),z=t("p",null,"연결된 데이터베이스에 Rollback Command를 실행하는 컴포넌트입니다.",-1),F={class:"custom-container tip"},H={class:"custom-container-title"},J=t("p",null,"RBK BOC는 쿼리를 자동 생성하며 자동 생성에 필요한 속성을 설정합니다.",-1);function Y(Z,$){const a=n("Badge");return d(),r("div",null,[h,e(" Remark "),t("div",p,[t("p",m,[c(a,{type:"tip",text:"Remark",vertical:"middle"})]),u]),e(" "),b,x,e(" Remark "),t("div",v,[t("p",B,[c(a,{type:"tip",text:"Remark",vertical:"middle"})]),C]),e(" "),O,R,e(" Remark "),t("div",k,[t("p",f,[c(a,{type:"tip",text:"Remark",vertical:"middle"})]),g]),e(" "),D,I,e(" Remark "),t("div",S,[t("p",y,[c(a,{type:"tip",text:"Remark",vertical:"middle"})]),V]),e(" "),E,N,e(" Remark "),t("div",U,[t("p",j,[c(a,{type:"tip",text:"Remark",vertical:"middle"})]),T]),e(" "),L,P,e(" Remark "),t("div",G,[t("p",M,[c(a,{type:"tip",text:"Remark",vertical:"middle"})]),A]),e(" "),K,Q,e(" Remark "),t("div",w,[t("p",W,[c(a,{type:"tip",text:"Remark",vertical:"middle"})]),X]),e(" "),q,z,e(" Remark "),t("div",F,[t("p",H,[c(a,{type:"tip",text:"Remark",vertical:"middle"})]),J]),e(" ")])}const st=i(l,[["render",Y],["__file","ChangeBoc.html.vue"]]);export{st as default};
