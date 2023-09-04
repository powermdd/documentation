import{_ as i,r as b,o as l,c as o,a as t,d as e,e as a,f as s,b as p}from"./app-42ddbce0.js";const n="/documentation/assets/GETBoc-640da752.png",c="/documentation/assets/Property(3)-9dead15e.png";const d={},u=e("h1",{id:"get",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#get","aria-hidden":"true"},"#"),s(" GET")],-1),_=e("p",null,[e("b",{style:{"font-size":"20px"}},"1) GET"),e("br"),s(" 화면에서 입력되는 Dataset에서 필터링처리를 수행하여 새로운 결과집합을 생성하는 Component입니다.")],-1),x={class:"custom-container tip"},y={class:"custom-container-title"},f=e("p",null,"SELECT문의 WHERE조건문과 동일한 역할을 수행합니다.",-1),C=p('<p><b style="font-size:20px;">(1) BOC 이미지</b><br> BOC 컴포넌트 목록에서 GLV BOC을 선택하여 Drag-Drop으로 화면작업 영역에 디자인합니다. <br><img src="'+n+'" style="position:relative;top:5px;width:150px;"> <br></p><p style="background-color:rgb(216, 190, 228);">데이터베이스의 데이터의 결과집합 중 GET의 조건 대상이 되는 컬럼 부를 표시합니다.</p><p><b style="font-size:20px;">(2) 속성</b><br> 화면 작업창에서 GLV BOC 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br><img src="'+c+'" class="boxBorder" style="position:relative;top:5px;width:300px;"> <br><b style="font-size:20px;">➀ 기초정보 </b><br></p><ul><li><p><b style="font-size:20px;">OBJECT명 </b><br> 해당 BOC가 실행된 후 해당 결과 SET을 저장할 Value Object의 명을 지정합니다. 해당 Object의 결과 Set은 그리드 형식의 Object로 구성됩니다.<br></p></li><li><p><b style="font-size:20px;">논리명칭 </b><br> BOC가 어떤 동작을 수행하는지를 간단한 명칭으로 기술합니다. 해당 명칭을 처리 흐름을 간략하게 표현할 수 있도록 기술합니다.<br></p></li><li><p><b style="font-size:20px;">논리설명 </b><br> 논리명칭으로 표현하기 부족할 때 좀 더 상세히 내용을 기술합니다.</p></li></ul><p><b style="font-size:20px;">➁ 입력부</b><br></p><ul><li><p><b style="font-size:20px;">조건입력 </b><br> 입력 OBJECT로 지정된 Dataset Object에서 레코드 추출 조건을 입력합니다.</p></li><li><p><b style="font-size:20px;">조건(MAX/MIN) </b><br> 해당 조건은 선택항목입니다. “조건입력” 항목에 설정되어 있는 조건에 의하여 Filter된 후 결과 Dataset에서 최소/최대 값을 가진 특정 Record만 추출합니다.</p></li><li><p><b style="font-size:20px;">입력 OBJECT</b><br> 추출 대상 데이터 Object 명을 선택합니다.</p></li><li><p><b style="font-size:20px;">입력 항목</b><br> 입력OBJECT의 결과집합 중 GET의 조건 대상이 되는 컬럼 집합을 지정합니다.</p></li></ul><p><b style="font-size:20px;">➂ 출력부</b><br></p><ul><li><p><b style="font-size:20px;">Record-Count/Page </b><br> Pagination 시 페이지당 레코드 건수를 설정한다.</p></li><li><p><b style="font-size:20px;">Column Scroll </b><br> 해당 BOC 목록이 많을 때 true로 설정했을 때 Display Count에서 설정한 개수만큼 보여주고 나머지 목록은 ▲▼ 버튼으로 확인할 수 있습니다.</p></li><li><p><b style="font-size:20px;">Display Count </b><br> 해당 BOC 목록이 많을 때 목록에 보이는 개수를 설정합니다.</p></li><li><p><b style="font-size:20px;">화면출력유형 </b><br> None: Default<br> Dataset : View Designer에서 그리드 컴포넌트에 조회 시 설정합니다. <br> Recode : JSP 출력방식일 때 단일 컴포넌트에 조회 시 설정합니다. <br> Page : JSP 출력방식일 때 페이징 시 설정합니다.<br> ChartLabel : View Designer에서 차트 컴포넌트에 범례를 설정합니다.<br> ChartData : View Designer에는 차트 컴포넌트에 데이터 조회 시 설정합니다. <br> Schedule : View Designer에서 스케줄 컴포넌트에 조회 시 설정합니다.<br></p></li></ul><p><b style="font-size:20px;">➃ 선택항목</b><br></p><ul><li><p><b style="font-size:20px;">Alias전송명 </b><br> 전송하는 Object명의 Alias를 생성합니다.</p></li><li><p><b style="font-size:20px;">Log 수준 </b><br> Debug : 테스트 시에 로그 메시지를 정의할 수 있다. 데이터베이스 관련된 BOC는 ReturnData와 QueryData를 사용합니다.<br> ProcessHead : Seq번호, 프로세스 타입을 표시합니다.<br> InputData : 입력 데이터를 표시합니다.<br> ReturnData : 결과 데이터를 표시합니다.<br> Middle OutputData : 중간과정 결과 데이터를 표시합니다.<br> TabPage : 탭 페이지 결과를 표시합니다.<br> Math-Trace : Math의 계산식과 결과를 표시합니다.<br> Formula-Trace : Formula의 계산식과 결과를 표시합니다.<br> QueryData : 값이 포함된 쿼리를 표시합니다.<br> SCLTrace : SCLT BOC의 결과를 표시합니다.<br> PEX부가 Objects : PEX BOC의 부가적인 Object의 결과를 표시합니다.<br> 미사용 : 조건 컬럼부의 계산식값을 표시합니다.<br></p></li><li><p><b style="font-size:20px;">실행 조건 </b><br> 실행 조건에 값이 있는 경우 해당 실행 조건이 True가 아니면 실행이 되지 않습니다.</p></li></ul>',10);function m(O,g){const r=b("Badge");return l(),o("div",null,[u,t(" GET"),_,t(" Remark "),e("div",x,[e("p",y,[a(r,{type:"tip",text:"Remark",vertical:"middle"})]),f]),t(" "),C])}const B=i(d,[["render",m],["__file","Get.html.vue"]]);export{B as default};
