<template><div><h1 id="con" tabindex="-1"><a class="header-anchor" href="#con" aria-hidden="true">#</a> CON</h1>
<!--CON-->
<p><b style="font-size: 20px">3) CON</b><br/>
조건에 따른 분기 처리를 수행하는 기능 Component.</p>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p>CON BOC는 앞에서 처리된 BOC의 결과값을 체크하여 조건에 따른 분기를 수행함으로써 프로세스의 흐름을 제어합니다. <br/>
CON BOC 사용시 Java 소스 생성은 if(조건) 형식으로 구성됩니다.</p>
</div>
<!-- -->
<p><b style="font-size: 20px">(1) BOC 이미지</b><br/>
BOC 컴포넌트 목록에서 CON BOC을 선택하여 Drag-Drop으로 화면작업 영역에 디자인합니다. <br/>
<img src="@source/.vuepress/public/documentation/service-model/BOC/ControlBOC/CONBoc.png" style="position: relative;top: 5px; width:150px;"> <br/>
C 로 표시되는 부분에는 속성의 분기 조건 처리가 표시됩니다.</p>
<p><b style="font-size: 20px">(2) 속성</b><br/>
화면 작업창에서 CON BOC 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br/>
<img src="@source/.vuepress/public/documentation/service-model/BOC/ControlBOC/Property(3).png" style="position: relative;top: 5px; width:150px;"> <br/>
<b style="font-size: 20px">➀ 기초정보 </b><br/></p>
<ul>
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
<p><b style="font-size: 20px">분기우선순위 </b><br/>
여러 개의 조건에서 체크할 때 각 조건 간의 계산 순서의 우선순위를 입력합니다.</p>
</li>
<li>
<p><b style="font-size: 20px">분기조건입력 </b><br/>
결과값이 True/False인 조건문을 입력합니다. 해당 조건 값이 True이면 이후 Flow를 실행합니다.</p>
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
</ul>
</div></template>


