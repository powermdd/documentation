<template><div><h1 id="rbk" tabindex="-1"><a class="header-anchor" href="#rbk" aria-hidden="true">#</a> RBK</h1>
<!--RBK-->
<p><b style="font-size: 20px">1) RBK</b><br/>
연결된 Database에 Rollback Command를 실행하는 Component.</p>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p>RBK-BOC는 Query를 자동 생성하며 자동 생성에 필요한 Properties를 설정합니다.</p>
</div>
<!-- -->
<p><b style="font-size: 20px">(1) BOC 이미지</b><br/>
BOC 컴포넌트 목록에서 RBK BOC을 선택하여 Drag-Drop으로 화면작업 영역에 디자인합니다. <br/>
<img src="@source/.vuepress/public/documentation/service-model/BOC/DataBaseBOC/RBKBoc.png" style="position: relative;top: 5px; width:150px;"> <br/></p>
<p><b style="font-size: 20px">(2) 속성</b><br/>
화면 작업창에서 RBK BOC 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br/>
<img src="@source/.vuepress/public/documentation/service-model/BOC/DataBaseBOC/Property(6).png" style="position: relative;top: 5px; width:150px;"> <br/>
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
<p><b style="font-size: 20px">➁ 출력부</b><br/></p>
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
<p><b style="font-size: 20px">➂ 기타</b><br/></p>
<ul>
<li><b style="font-size: 20px">결과메시지 </b><br/>
해당 처리 결과에 대한 메시지를 Client. 즉, 호출자에게 보낼 필요가 있을 때 정의합니다.</li>
</ul>
</div></template>


