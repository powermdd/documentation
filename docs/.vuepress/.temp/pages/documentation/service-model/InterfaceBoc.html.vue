<template><div><h1 id="interface-boc" tabindex="-1"><a class="header-anchor" href="#interface-boc" aria-hidden="true">#</a> Interface BOC</h1>
<p>반복, 분기 조건, Break등 제어를 하는 구성요소입니다.
<img src="@source/.vuepress/public/documentation/service-model/BOC/InterfaceBOC/InterfaceBOC.png" style="position: relative;top: 5px; width:300px;"> <br/></p>
<!-- CMD-->
<p><b style="font-size: 20px">1) CMD</b><br/>
WAS가 설치되어 있는 서버 시스템의 실행 파일을 실행하여 결과를 Return 받는 Component입니다.</p>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p>단 실행 결과는 처리 결과 코드와 실행 시 Display되는 Stdout Message를 String 형태로 return 합니다. <br/>
Unix의 파일이나 Window의 bat 형태의 파일을 실행하여 활용 할 수도 있습니다.<br/>
CMD BOC 실행 후 결과는 UPDCNT, UPDMSG 컬럼으로 결과값이 저장됩니다. <br/></p>
<p>UPDCNT : 확인KEYWORD 가 UPDMSG에 존재하면 1 아니면 0이 저장됩니다. <br/>
UPDMSG : 해당 CMD가 실행되면서 발생하는 Message 내용이 저장됩니다.</p>
</div>
<!-- -->
<p><b style="font-size: 20px">(1) BOC 이미지</b><br/>
BOC 컴포넌트 목록에서 CMD BOC을 선택하여 Drag-Drop으로 화면작업 영역에 디자인합니다. <br/>
<img src="@source/.vuepress/public/documentation/service-model/BOC/InterfaceBOC/CMDBoc.png" style="position: relative;top: 5px; width:150px;"> <br/></p>
<p><b style="font-size: 20px">(2) 속성</b><br/>
화면 작업창에서 CMD BOC 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br/>
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
<li><b style="font-size: 20px">실행 Parameter</b><br/>
Commend 명령어의 옵션 값을 입력합니다. Parameter 입력 시 Command Line의 입력형식과 동일하게 입력합니다.</li>
</ul>
<p style="color: rgb(0, 164, 255);">Ex) 실행 Cmd가 Ping인 경우 <br/>
”-n“ ”2“ S.IPADDR</p><br/>
String 값과 변수 값의 구분은 “ “ 로 구분하여 입력합니다.
<ul>
<li>
<p><b style="font-size: 20px">실행 Cmd </b><br/>
Commend에 실행 할 명령어를 입력합니다. Command부에는 실행파일을 지정합니다.</p>
</li>
<li>
<p><b style="font-size: 20px">입력 OBJECT </b><br/>
실행 대상 데이터 Object 명을 선택합니다. 입력된 Dataset Object의 Record Count 수만큼 해당하고 Command를 실행합니다.</p>
</li>
<li>
<p><b style="font-size: 20px">확인 KEYWORD </b><br/>
동작 상태를 표시 할 수 있도록 확인하고 싶은 값을 입력합니다. <br/>
해당 Keyword의 값이 출력되는 Message 내에 존재하게 되면 결과 code UPDCNT의 값이 1이 되고 해당 Keyword의 값이 존재하지 않으면 UPDCNT의 값이 0이 됩니다.</p>
</li>
</ul>
<p><b style="font-size: 20px">➂ 출력부</b><br/></p>
<ul>
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


