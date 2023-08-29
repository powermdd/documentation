import{_ as o,r,o as n,c as a,a as s,d as t,f as i,e,b}from"./app-37113253.js";const p="/documentation/assets/SELBoc(2)-0d5505e5.png",c="/documentation/assets/Property(7)-698cb379.png",u="/documentation/assets/Ibatis-b0657464.png",d={},_=t("h1",{id:"sel",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#sel","aria-hidden":"true"},"#"),e(" SEL")],-1),m=t("p",null,[t("b",{style:{"font-size":"20px"}},"1) SEL"),e(),t("br"),e(" DB Table에 대한 Select문을 처리하는 기능 Component.")],-1),y={class:"custom-container tip"},x={class:"custom-container-title"},h=t("p",null,"SEL-BOC는 Toad 등의 Query Tool에서 미리 작성된 SQL query를 복사해서 입력하는 방식으로 사용합니다.",-1),E=b('<p><b style="font-size:20px;">(1) BOC 이미지</b><br> BOC 컴포넌트 목록에서 SEL BOC을 선택하여 Drag-Drop으로 화면작업 영역에 디자인합니다. <br><img src="'+p+'" style="position:relative;top:5px;width:150px;"> <br></p><ul><li><b style="font-size:20px;">녹색 컬럼 </b><br> 데이터베이스의 데이터를 Select하는 컬럼 부를 표시합니다.</li><li><b style="font-size:20px;">노란색 컬럼 </b><br></li><li>데이터를 Select하기 위해서 필요로 하는 조건 컬럼 부를 표시합니다.</li></ul><p><b style="font-size:20px;">(2) 속성</b><br> 화면 작업창에서 SEL BOC 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다.<br><img src="'+c+'" style="position:relative;top:5px;width:150px;"> <br><b style="font-size:20px;">➀ 기초정보 </b><br></p><ul><li><b style="font-size:20px;">OBJECT명 </b><br> 해당 BOC가 실행된 후 해당 결과 SET을 저장할 Value Object의 명을 지정합니다. 해당 Object의 결과 Set은 그리드 형식의 Object로 구성됩니다.<br></li><li><b style="font-size:20px;">논리명칭 </b><br> BOC가 어떤 동작을 수행하는지를 간단한 명칭으로 기술합니다. 해당 명칭을 처리 흐름을 간략하게 표현할 수 있도록 기술합니다.<br></li><li><b style="font-size:20px;">논리설명 </b><br> 논리명칭으로 표현하기 부족할 때 좀 더 상세히 내용을 기술합니다.</li></ul><p><b style="font-size:20px;">➁ 입력부</b><br></p><ul><li><b style="font-size:20px;">SQL Query </b><br> DB 정보 조회를 위한 Select 문장을 설정합니다.</li></ul><p><b style="font-size:20px;">➂ 출력부</b><br></p><ul><li><p><b style="font-size:20px;">화면출력유형 </b><br> None: Default<br> Dataset : View Designer에서 그리드 컴포넌트에 조회 시 설정합니다. <br> Recode : JSP 출력방식일 때 단일 컴포넌트에 조회 시 설정합니다. <br> Page : JSP 출력방식일 때 페이징 시 설정합니다.<br> ChartLabel : View Designer에서 차트 컴포넌트에 범례를 설정합니다.<br> ChartData : View Designer에는 차트 컴포넌트에 데이터 조회 시 설정합니다. <br> Schedule : View Designer에서 스케줄 컴포넌트에 조회 시 설정합니다.<br></p></li><li><p><b style="font-size:20px;">Record-Count/Page </b><br> Pagination 시 페이지당 레코드 건수를 설정합니다.</p></li><li><p><b style="font-size:20px;">Column Scroll </b><br> 해당 BOC 목록이 많을 때 true로 설정했을 때 Display Count에서 설정한 개수만큼 보여주고 나머지 목록은 ▲▼ 버튼으로 확인할 수 있다.</p></li><li><p><b style="font-size:20px;">Display Count </b><br> 해당 BOC 목록이 많을 때 목록에 보이는 개수를 설정합니다.</p></li></ul><p><b style="font-size:20px;">➃ 메시지부</b><br></p><ul><li><b style="font-size:20px;">결과메시지 </b><br> 해당 처리 결과에 대한 메시지를 Client. 즉, 호출자에게 보낼 필요가 있을 때 정의합니다.</li></ul><p><b style="font-size:20px;">➄ 선택항목</b><br></p><ul><li><p><b style="font-size:20px;">Alias전송명 </b><br> 전송하는 Object명의 Alias를 생성합니다.</p></li><li><p><b style="font-size:20px;">DATA SIZE </b><br> Common이 default 설정이며, Batch형태의 대용량 데이터 처리시 Large로 설정합니다.</p></li><li><p><b style="font-size:20px;">DB연결명 </b><br> Default 접속 DB는 자동 설정된. 추가로 다른 DB연결 명을 사용하여 데이터 처리의 필요성이 생기면 해당 정보에 접속 명을 등록하여 사용합니다.</p></li><li><p><b style="font-size:20px;">Log 수준 </b><br> Debug : 테스트 시에 로그 메시지를 정의할 수 있다. 데이터베이스 관련된 BOC는 ReturnData와 QueryData를 사용합니다.<br> ProcessHead : Seq번호, 프로세스 타입을 표시합니다.<br> InputData : 입력 데이터를 표시합니다.<br> ReturnData : 결과 데이터를 표시합니다.<br> Middle OutputData : 중간과정 결과 데이터를 표시합니다.<br> TabPage : 탭 페이지 결과를 표시합니다.<br> Math-Trace : Math의 계산식과 결과를 표시합니다.<br> Formula-Trace : Formula의 계산식과 결과를 표시합니다.<br> QueryData : 값이 포함된 쿼리를 표시합니다.<br> SCLTrace : SCLT BOC의 결과를 표시합니다.<br> PEX부가 Objects : PEX BOC의 부가적인 Object의 결과를 표시합니다.<br> 미사용 : 조건 컬럼부의 계산식값을 표시합니다.<br></p></li><li><p><b style="font-size:20px;">실행 조건 </b><br> 실행 조건에 값이 있는 경우 해당 실행 조건이 True가 아니면 실행이 되지 않습니다.</p></li></ul><p><b style="font-size:20px;">(3) 동적 SQL 처리</b><br></p>',13),S={class:"custom-container tip"},f={class:"custom-container-title"},O=t("p",null,"동적 조건구문 생성합니다. 구문 : [ 동적처리 조건부 ] { 동적 처리 대상 Sql-Syntax }",-1),D=t("p",null,[t("b",{style:{"font-size":"20px"}},"➀ 조건 항목의 값이 null 이거나 값의 길이가 0일 때 즉 empty일 때 동적처리 대상 Syntax를 Sql문에 반영하지 않습니다."),t("br")],-1),C={class:"custom-container tip"},R={class:"custom-container-title"},L=t("p",null,"구문: [항목명] { sql-syntax }",-1),B=t("p",null,[e("EX) SELECT Employee, Name "),t("br"),e(" FROM TABLENAME "),t("br"),e(" [ORD] { WHERE ORD = :ORD }")],-1),z=t("p",null,[e("파라미터 설정 변수인 ORD 즉 ‘[‘와 ‘]’ 사이에 있는 “ORD”의 값이 Null 값이면 ‘{‘ 와 ‘}’ 사이의 구문을 삭제 처리합니다."),t("br"),e(" Null일 때 실행 Query는 “SELECT COLNM FROM TABLENAME”가 됩니다.")],-1),T={class:"custom-container tip"},g={class:"custom-container-title"},N=t("p",null,"Ibatis 소스 생성 예",-1),v=t("p",null,[t("img",{src:u,style:{position:"relative",top:"5px"}}),e(),t("br")],-1),A=t("p",null,[t("b",{style:{"font-size":"20px"}},"➁ 조건 항목의 비교 연산식이 false 일 때 동적처리 대상 Syntax를 Sql문에 반영하지 않습니다."),t("br")],-1),M={class:"custom-container tip"},V={class:"custom-container-title"},k=t("p",null,"구문: [VAL,항목명==Value] { sql-syntax }",-1),P=t("p",null,"동적 조건부에 “VAL” Keyword를 통하여 해당 조건식을 수행합니다. 조건부에는 반드시 비교연산자를 사용하여 결과값이 boolean 형식으로 return 되어야 합니다.",-1),Q={class:"custom-container tip"},q={class:"custom-container-title"},w=t("p",null,[e("EX) Dataset으로 직접 비교처리 "),t("br"),e(" SELECT Employee, Name "),t("br"),e(" FROM TABLENAME"),t("br"),e(" [VAL,S.ORD==1] { WHERE ORD = :ORD }"),t("br")],-1),F=t("p",null,[e("Dataset ‘S’의 ORD 변수 값이 1일 때 ‘{‘ 와 ‘}’ 사이의 구문을 유효 처리합니다. 연산자 Tag ‘VAL’을 사용하면 값을 비교처리 하고 해당 조건이 True일 때 유효 처리합니다. "),t("br"),e(" S.ORD의 값이 1이 아니면 “SELECT COLNM FROM TABLENAME”가 됩니다"),t("br"),e(" Null일 때 실행 Query는 “SELECT COLNM FROM TABLENAME”가 됩니다."),t("br")],-1);function j(I,X){const l=r("Badge");return n(),a("div",null,[_,s("SEL"),m,s(" Remark "),t("div",y,[t("p",x,[i(l,{type:"tip",text:"Remark",vertical:"middle"})]),h]),s(" "),E,s(" Remark "),t("div",S,[t("p",f,[i(l,{type:"tip",text:"Remark",vertical:"middle"})]),O]),s(" "),D,s(" Remark "),t("div",C,[t("p",R,[i(l,{type:"tip",text:"Remark",vertical:"middle"})]),L]),s(" "),B,z,s(" Remark "),t("div",T,[t("p",g,[i(l,{type:"tip",text:"Remark",vertical:"middle"})]),N]),s(" "),v,A,s(" Remark "),t("div",M,[t("p",V,[i(l,{type:"tip",text:"Remark",vertical:"middle"})]),k]),s(" "),P,s(" Remark "),t("div",Q,[t("p",q,[i(l,{type:"tip",text:"Remark",vertical:"middle"})]),w]),s(" "),F])}const J=o(d,[["render",j],["__file","Sel.html.vue"]]);export{J as default};
