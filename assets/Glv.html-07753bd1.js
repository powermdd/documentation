import{_ as o,a as i,b as r}from"./Property(1)-7a61d5b1.js";import{_ as p,r as a,o as b,c,a as e,d as t,f as n,e as l,b as u}from"./app-37113253.js";const _={},m=t("h1",{id:"glv",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#glv","aria-hidden":"true"},"#"),l(" GLV")],-1),d=t("p",null,[l("Dataset Object의 Records에 변화를 주는 구성요소입니다. "),t("img",{src:o,style:{position:"relative",top:"5px",width:"300px"}}),l(),t("br")],-1),y=t("p",null,[t("b",{style:{"font-size":"20px"}},"1) CMD"),t("br"),l(" 단일 값을 해당 서비스 내에서 변수로 사용하는 Component입니다.")],-1),x={class:"custom-container tip"},f={class:"custom-container-title"},g=t("p",null,"GLV이외의 BOC는 In-Out에 기초하여 Data Set을 구성하나 GLV는 단순히 서비스 내부에서 변수형식으로 선언하여 사용합니다.",-1),h=u('<p><b style="font-size:20px;">(1) BOC 이미지</b><br> BOC 컴포넌트 목록에서 GLV BOC을 선택하여 Drag-Drop으로 화면작업 영역에 디자인합니다. <br><img src="'+i+'" style="position:relative;top:5px;width:150px;"> <br></p><ul><li><b style="font-size:20px;">흰색 컬럼 </b><br> 이전에 생성한 Column의 값을 변경할 때 값을 setting하면 기존의 Column의 값을 overwrite 처리합니다.</li></ul><p><b style="font-size:20px;">(2) 속성</b><br> 화면 작업창에서 GLV BOC 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br><img src="'+r+'" style="position:relative;top:5px;width:150px;"> <br><b style="font-size:20px;">➀ 기초정보 </b><br></p><ul><li><p><b style="font-size:20px;">OBJECT명 </b><br> 해당 BOC가 실행된 후 해당 결과 SET을 저장할 Value Object의 명을 지정합니다. 해당 Object의 결과 Set은 그리드 형식의 Object로 구성됩니다.<br></p></li><li><p><b style="font-size:20px;">논리명칭 </b><br> BOC가 어떤 동작을 수행하는지를 간단한 명칭으로 기술합니다. 해당 명칭을 처리 흐름을 간략하게 표현할 수 있도록 기술합니다.<br></p></li><li><p><b style="font-size:20px;">논리설명 </b><br> 논리명칭으로 표현하기 부족할 때 좀 더 상세히 내용을 기술합니다.</p></li></ul><p><b style="font-size:20px;">➁ 출력부</b><br></p><ul><li><p><b style="font-size:20px;">Column Scroll </b><br> 해당 BOC 목록이 많을 때 true로 설정했을 때 Display Count에서 설정한 개수만큼 보여주고 나머지 목록은 ▲▼ 버튼으로 확인할 수 있습니다.</p></li><li><p><b style="font-size:20px;">Display Count </b><br> 해당 BOC 목록이 많을 때 목록에 보이는 개수를 설정합니다.</p></li></ul><p><b style="font-size:20px;">(3) GLV 컬럼에 정의 되어 있는 값 사용법</b><br> GLV로 정의된 Column은 Dataset 형식이 아닌 단일 값을 불러오거나 Set하는 방식의 Function을 사용합니다.</p>',7),C={class:"custom-container tip"},v={class:"custom-container-title"},z=t("p",null,"사용 Function name rule : “getgv” + datatype [string || int || long || number] + “(“ + name + “)” 형식",-1),B=t("ul",null,[t("li",null,"name : GLV로 생성한 Column명을 지정합니다."),t("li",null,"datatype : number 은 double형 Datatype으로 return 합니다.")],-1),O=t("ul",null,[t("li",null,[t("b",{style:{"font-size":"20px"}},"getgvstring(“name”) : return type String "),t("br")]),t("li",null,[t("b",{style:{"font-size":"20px"}},"getgvint(“name”) : return type int "),t("br")]),t("li",null,[t("b",{style:{"font-size":"20px"}},"getgvlong(“name”) : return type long "),t("br")]),t("li",null,[t("b",{style:{"font-size":"20px"}},"getgvnumber(“name”) : return type double "),t("br")])],-1);function V(G,D){const s=a("Badge");return b(),c("div",null,[m,d,e(" GLV"),y,e(" Remark "),t("div",x,[t("p",f,[n(s,{type:"tip",text:"Remark",vertical:"middle"})]),g]),e(" "),h,e(" Remark "),t("div",C,[t("p",v,[n(s,{type:"tip",text:"Remark",vertical:"middle"})]),z,B]),e(" "),O])}const k=p(_,[["render",V],["__file","Glv.html.vue"]]);export{k as default};
