<template><div><h1 id="miud" tabindex="-1"><a class="header-anchor" href="#miud" aria-hidden="true">#</a> MIUD</h1>
<!--MIUD-->
<p><b style="font-size: 20px">1) MIUD</b><br/>
입력 Object의 특정 컬럼 값에 따른 분기 처리를 수행하는 기능 Component.</p>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p>MIUD-BOC는 IUD에 대한 분기조건이 자동으로 생성되므로 입력 Object에 존재하는 IUDFLAG 컬럼이 고정적인 패턴의 분기 처리에 사용됩니다.</p>
</div>
<!-- -->
<p><b style="font-size: 20px">(1) BOC 이미지</b><br/>
BOC 컴포넌트 목록에서 MIUD BOC을 선택하여 Drag-Drop으로 화면작업 영역에 디자인합니다. <br/>
<img src="@source/.vuepress/public/documentation/service-model/BOC/ControlBOC/MIUDBoc.png" style="position: relative;top: 5px; width:150px;"> <br/></p>
<ul>
<li><b style="font-size: 20px">IUDFLAG </b><br/>
IUD로 표시되는 부분이 Properties의 IUD구분 컬럼명으로 값에 따라 분기 처리되는 과정의 CON-BOC를 표시합니다.</li>
</ul>
<p><b style="font-size: 20px">(2) 속성</b><br/>
화면 작업창에서 MIUD BOC 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br/>
<img src="@source/.vuepress/public/documentation/service-model/BOC/ControlBOC/Property(2).png" style="position: relative;top: 5px; width:150px;"> <br/>
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
<li><b style="font-size: 20px">입력 OBJECT </b><br/>
등록 할 입력 데이터 Object명을 입력합니다.</li>
</ul>
<p><b style="font-size: 20px">➂ 선택항목</b><br/></p>
<ul>
<li>
<p><b style="font-size: 20px">DB연결명 </b><br/>
Default 접속 DB는 자동 설정된. 추가로 다른 DB연결 명을 사용하여 데이터 처리의 필요성이 생기면 해당 정보에 접속 명을 등록하여 사용합니다.</p>
</li>
<li>
<p><b style="font-size: 20px">IUD 구분 컬럼명 </b><br/>
Record Status의 값을 가지고 있는 컬럼명입니다.</p>
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


