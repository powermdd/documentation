<template><div><h1 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> SET</h1>
<!--SET-->
<p><b style="font-size: 20px">1) SET</b><br/>
입력 Object의 레코드들을 대상으로 Select 조건을 생성하여 필요한 Element를 덧붙이는 Component.</p>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p>입력 Object의 Record의 특정 Column을 조건 값으로 하여 입력 Record 수만큼 Select문이 실행된다.</p>
<p style="color:blue;">Ex) 입력된 Dataset Object Column에 부서코드가 없다면, 해당 Dataset에 사원의 부서코드를 조회하여 Dataset에 DEPARTMENTID를 ADD할 수 있는 기능을 제공한다.</p>
</div>
<!-- -->
<p><b style="font-size: 20px">(1) BOC 이미지</b><br/>
BOC 컴포넌트 목록에서 SET BOC을 선택하여 Drag-Drop으로 화면작업 영역에 디자인합니다. <br/>
<img src="@source/.vuepress/public/documentation/service-model/BOC/DataBaseBOC/SETBoc.png" style="position: relative;top: 5px; width:150px;"> <br/></p>
<ul>
<li><b style="font-size: 20px">녹색 컬럼 </b><br/>
데이터베이스의 데이터를 조회하기 위한 컬럼 부를 표시합니다.</li>
<li><b style="font-size: 20px">노란색 컬럼 </b><br/>
데이터베이스의 데이터를 조회하기 위한 조건 컬럼 부를 표시합니다.</li>
</ul>
<p><b style="font-size: 20px">(2) 속성</b><br/>
화면 작업창에서 SET BOC 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br/>
<img src="@source/.vuepress/public/documentation/service-model/BOC/DataBaseBOC/Property(5).png" style="position: relative;top: 5px; width:150px;"> <br/>
<b style="font-size: 20px">➀ 기초정보 </b><br/></p>
<ul>
<li>
<p><b style="font-size: 20px">OBJECT명 </b><br/>
해당 BOC가 실행된 후 해당 결과 SET을 저장할 Value Object의 명을 지정합니다. 해당 Object의 결과 Set은 그리드 형식의 Object로 구성됩니다.<br/></p>
</li>
<li>
<p><b style="font-size: 20px">논리명칭 </b><br/>
BOC가 어떤 동작을 수행하는지를 간단한 명칭으로 기술합니다. 해당 명칭을 처리 흐름을 간략하게 표현할 수 있도록 기술합니다.<br/></p>
</li>
<li>
<p><b style="font-size: 20px">논리설명 </b><br/>
논리명칭으로 표현하기 부족할 때 좀 더 상세히 내용을 기술합니다.</p>
</li>
</ul>
<p><b style="font-size: 20px">➁ 입력부</b><br/></p>
<ul>
<li>
<p><b style="font-size: 20px">SQL Query </b><br/>
Insert, Update, Delete 의 Database SQL Query를 입력합니다.</p>
</li>
<li>
<p><b style="font-size: 20px">입력 OBJECT </b><br/>
Query 입력 대상이 될 Object명을 설정합니다.</p>
</li>
<li>
<p><b style="font-size: 20px">추가변경항목 </b><br/>
기존항목에 추가할 데이터 항목을 설정한다.</p>
</li>
<li>
<p><b style="font-size: 20px">출력항목 </b><br/>
SET Type의 출력 Data 항목을 설정한다.</p>
</li>
</ul>
<p><b style="font-size: 20px">➂ 출력부</b><br/></p>
<ul>
<li>
<p><b style="font-size: 20px">Record-Count/Page </b><br/>
Pagination 시 페이지당 레코드 건수를 설정한다.</p>
</li>
<li>
<p><b style="font-size: 20px">Column Scroll </b><br/>
해당 BOC 목록이 많을 때 true로 설정했을 때 Display Count에서 설정한 개수만큼 보여주고 나머지 목록은 ▲▼ 버튼으로 확인할 수 있다.</p>
</li>
<li>
<p><b style="font-size: 20px">Display Count </b><br/>
해당 BOC 목록이 많을 때 목록에 보이는 개수를 설정한다.</p>
</li>
<li>
<p><b style="font-size: 20px">화면출력유형 </b><br/>
None: Default<br/>
Dataset : View Designer에서 그리드 컴포넌트에 조회 시 설정합니다. <br/>
Recode : JSP 출력방식일 때 단일 컴포넌트에 조회 시 설정합니다. <br/>
Page : JSP 출력방식일 때 페이징 시 설정합니다.<br/>
ChartLabel : View Designer에서 차트 컴포넌트에 범례를 설정합니다.<br/>
ChartData : View Designer에는 차트 컴포넌트에 데이터 조회 시 설정합니다. <br/>
Schedule : View Designer에서 스케줄 컴포넌트에 조회 시 설정합니다.<br/></p>
</li>
</ul>
<p><b style="font-size: 20px">➃ 선택항목</b><br/></p>
<ul>
<li>
<p><b style="font-size: 20px">Alias전송명 </b><br/>
전송하는 Object명의 Alias를 생성합니다.</p>
</li>
<li>
<p><b style="font-size: 20px">DB연결명 </b><br/>
Default 접속 DB는 자동 설정된. 추가로 다른 DB연결 명을 사용하여 데이터 처리의 필요성이 생기면 해당 정보에 접속 명을 등록하여 사용합니다.</p>
</li>
<li>
<p><b style="font-size: 20px">Log 수준 </b><br/>
Debug : 테스트 시에 로그 메시지를 정의할 수 있다. 데이터베이스 관련된 BOC는 ReturnData와 QueryData를 사용합니다.<br/>
ProcessHead : Seq번호, 프로세스 타입을 표시합니다.<br/>
InputData : 입력 데이터를 표시합니다.<br/>
ReturnData : 결과 데이터를 표시합니다.<br/>
Middle OutputData : 중간과정 결과 데이터를 표시합니다.<br/>
TabPage : 탭 페이지 결과를 표시합니다.<br/>
Math-Trace : Math의 계산식과 결과를 표시합니다.<br/>
Formula-Trace : Formula의 계산식과 결과를 표시합니다.<br/>
QueryData : 값이 포함된 쿼리를 표시합니다.<br/>
SCLTrace : SCLT BOC의 결과를 표시합니다.<br/>
PEX부가 Objects : PEX BOC의 부가적인 Object의 결과를 표시합니다.<br/>
미사용 : 조건 컬럼부의 계산식값을 표시합니다.<br/></p>
</li>
<li>
<p><b style="font-size: 20px">실행 조건 </b><br/>
실행 조건에 값이 있는 경우 해당 실행 조건이 True가 아니면 실행이 되지 않습니다.</p>
</li>
</ul>
</div></template>


