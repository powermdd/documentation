<template><div><h1 id="pex" tabindex="-1"><a class="header-anchor" href="#pex" aria-hidden="true">#</a> PEX</h1>
<!-- PEX-->
<p><b style="font-size: 20px">1) PEX</b><br/>
시스템 내부의 다른 서비스 또는 외부 시스템의 인터페이스(API)를 호출하는 처리를 수행하는 기능 Component.</p>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p>PEX BOC는 내부 호출의 경우 다른 메뉴에 속해 있는 서비스를 호출합니다. <br/>
외부 호출의 경우 시스템 외부에 존재 또는 타 시스템과 연동하기 위한 API를 호출합니다.</p>
</div>
<!-- -->
<p><b style="font-size: 20px">(1) BOC 이미지</b><br/>
BOC 컴포넌트 목록에서 PEX BOC을 선택하여 Drag-Drop으로 화면작업 영역에 디자인합니다. <br/>
<img src="@source/.vuepress/public/documentation/service-model/BOC/InterfaceBOC/PEXBoc.png" style="position: relative;top: 5px; width:150px;"> <br/></p>
<p><b style="font-size: 20px">(2) 속성</b><br/>
화면 작업창에서 PEX BOC 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br/>
<img src="@source/.vuepress/public/documentation/service-model/BOC/InterfaceBOC/Property(3).png" style="position: relative;top: 5px; width:150px;"> <br/>
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
<p><b style="font-size: 20px">CALL_TYPE </b><br/>
호출하는 프로세스와 동일한 시스템에 설정인 내부호출/외부호출을 선택합니다.</p>
</li>
<li>
<p><b style="font-size: 20px">대상 PACKAGE </b><br/>
호출되는 프로세스의 패키지명을 입력합니다.</p>
</li>
<li>
<p><b style="font-size: 20px">대상 CLASS </b><br/>
호출되는 프로세스의 클래스명을 입력합니다.</p>
</li>
<li>
<p><b style="font-size: 20px">대상 METHOD </b><br/>
호출되는 프로세스의 메소드명으로 내부호출일 경우는 별도 팝업을 통해 전체 프로세스에서 선택 가능하고 외부 호출일 경우는 입력합니다.</p>
</li>
<li>
<p><b style="font-size: 20px">INPUT[OBJ:Mapping]</b><br/>
호출하는 프로세스에서 호출되는 프로세스로 입력정보를 전달하는 Mapping 구조입니다. <br/>
OBJ는 호출하는 프로세스(자신)의 결과집합명이고 Mapping은 호출되는 프로세스에서 입력으로 받을 START BOC의 Dataset명을 설정합니다.<br/></p>
</li>
<li>
<p><b style="font-size: 20px">OUT_OBJECT 명 </b><br/>
호출되는 프로세스의 BOC 결과집합 중 호출하는 프로세스로 리턴할 결과집합명입니다. <br/>
리턴되는 결과집합은 호출하는 당사자인 PEX 자신의 Output으로 받아집니다.</p>
</li>
<li>
<p><b style="font-size: 20px">OUT_COLUMN항목명 </b><br/>
OUT_OBJECT에서 컬럼을 호출 시 설정합니다.</p>
</li>
<li>
<p><b style="font-size: 20px">OUT_부가OBJECTS </b><br/>
호출되는 프로세스의 BOC 결과집합 중 호출하는 프로세스로 리턴을 추가 결과집합명입니다. <br/>
부가 Objects에 지정한 Dataset 객체는 모델 디자인에서 표현은 되지 않습니다. <br/>
Service Model의 BOC와 디자인에서 연결되는 Dataset은 1개 즉 1:1 관계만 가능하나 내부적으로 Dataset은 가지고 있습니다.</p>
</li>
<li>
<p><b style="font-size: 20px">TRACE생성 </b><br/>
PEX를 호출하는 서비스 Trace Data을 생성합니다.</p>
</li>
</ul>
<p><b style="font-size: 20px">➂ 출력부</b><br/></p>
<ul>
<li>
<p><b style="font-size: 20px">Record-Count/Page </b><br/>
Pagination 시 페이지당 레코드 건수를 설정합니다.</p>
</li>
<li>
<p><b style="font-size: 20px">Column Scroll </b><br/>
해당 BOC 목록이 많을 때 true로 설정했을 때 Display Count에서 설정한 개수만큼 보여주고 나머지 목록은 ▲▼ 버튼으로 확인할 수 있습니다.</p>
</li>
<li>
<p><b style="font-size: 20px">Display Count </b><br/>
해당 BOC 목록이 많을 때 목록에 보이는 개수를 설정합니다.</p>
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
<p><b style="font-size: 20px">➃ 메시지부</b><br/></p>
<ul>
<li><b style="font-size: 20px">결과메시지 </b><br/>
해당 처리 결과에 대한 메시지를 Client. 즉, 호출자에게 보낼 필요가 있을 때 정의합니다.</li>
</ul>
<p><b style="font-size: 20px">➄ 선택항목</b><br/></p>
<ul>
<li>
<p><b style="font-size: 20px">Alias전송명 </b><br/>
전송하는 Object명의 Alias를 생성합니다.</p>
</li>
<li>
<p><b style="font-size: 20px">DATA SIZE </b><br/>
Common이 default 설정이며, Batch형태의 대용량 데이터 처리시 Large로 설정합니다.</p>
</li>
<li>
<p><b style="font-size: 20px">BatchExecute </b><br/>
배치 실행 여부를 설정합니다.</p>
</li>
<li>
<p><b style="font-size: 20px">Build Dbcheck </b><br/>
빌드 시 데이터베이스의 테이블 컬럼 정보와 해당 설정 정보와 비교 체크를 실행합니다.</p>
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


