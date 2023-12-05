# <img src="../../.vuepress/public/documentation/service-model/BOC/ControlBOC/NLL/NLL.png" style="width:50px;"> <span class="bocIcon">(NLL)</span> <br/>
“아무 일도 하지 않는 BOC”를 의미하며 프로세스 처리규칙 상 BOC간 연결이 불가한 경우 중간 버퍼 역할인 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
모델링 초기 시점에 개략적인 논리모델만 작성하거나 불확실한 처리에 대한 임시적인 용도에도 사용합니다.<br/>
또한, 처리기능 없이 메시지만 발생시키고 싶을 때 사용합니다.
:::
<!-- -->

## 1. NLL BOC 이미지
BOC 컴포넌트 목록에서 NLL BOC를 선택하여 Drag-Drop으로 화면작업 영역에 디자인합니다. <br/>
<div class="boc"> 
  <img src="../../.vuepress/public/documentation/service-model/BOC/ControlBOC/NLL/NllBoc.png" style="width:150px;"> 
</div>

## 2. NLL BOC 속성
화면작업 영역에서 NLL BOC 선택 시 속성 영역에 설정이 가능한 항목에 값을 입력합니다.<br/>

<span class="font20">1)<b> 1. 기초정보</b></span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/ControlBOC/NLL/NllProperty(1).png"  class="boxBorder" style="width:300px;"> <br/>

<span class="font18">①<b> OBJECT명 </b></span> <br/>
해당 BOC가 실행된 후 해당 결과 SET을 저장할 Value Object의 명을 지정합니다. 해당 Object의 결과 Set은 그리드 형식의 Object로 구성됩니다.

<span class="font18">②<b> 논리명칭 </b></span> <br/>
BOC가 어떤 동작을 수행하는지를 간단한 명칭으로 기술합니다. 해당 명칭을 처리 흐름을 간략하게 표현할 수 있도록 기술합니다.

<span class="font18">③<b> 논리설명 </b></span> <br/>
논리명칭으로 표현하기 부족할 때 좀 더 상세히 내용을 기술합니다.

<span class="font20">2)<b> 3. 출력부</b></span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/ControlBOC/MPD/MpdProperty(3).png"  class="boxBorder" style="width:300px;"> <br/>

<span class="font18">①<b> Column Scroll </b></span> <br/>
해당 BOC 목록이 많을 경우 "true"로 설정했을 때 Display Count에서 설정한 개수만큼 보여주고 나머지 목록은 <span class="btnR">▲▼</span> 버튼으로 확인할 수 있습니다.

<span class="font18">②<b> Display Count </b></span> <br/>
해당 BOC 목록이 많을 때 목록에 보이는 개수를 설정합니다.

<span class="font20">3)<b> 4. 메시지부</b></span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/DataBaseBOC/SEL/SelProperty(4).png"  class="boxBorder" style="width:300px;"> <br/>

<span class="font18">①<b> 결과메시지 </b></span> <br/>
해당 처리 결과에 대한 메시지를 클라이언트. 즉, 호출자에게 보낼 필요가 있을 때 정의합니다.<br/>

<style type='text/css'>
  .boc 
   { display: inline-flex; }
  .bocEX 
   { display: inline-block; padding: 4.5px; position: relative; width: 100%; color: darkslategray; }
  .bocG
   { background: rgb(195, 255, 195); }
  .bocY
   { background: rgb(255, 255, 193); }
  .bocB
   { background: #DFE6F7; }

  .bocG:after, .bocY:after, .bocP:after, .bocW:after, .bocY2:after, .bocB:after
   { content: ""; border-width: 13px 0 13px 10px; border-style: solid; position: absolute; left: 100%; top: 0;  }
  .bocG:after
   { border-color: transparent transparent transparent rgb(195, 255, 195); }
  .bocY:after
   { border-color: transparent transparent transparent rgb(255, 255, 193); }  
  .bocB:after
   { border-color: transparent transparent transparent #DFE6F7; }  
  .bocIcon
   { position: relative; top: -12px; }

  .spanBtn
   { border: 1px solid #bbb;border-radius: 4px;padding: 3px;background:white; color:dimgrey; }

  .btnR
   { color:#9C3B00; }
  .labelR
   { color:red; font-weight: bold; }
  .spanEx
   { color: #00a4ff; }

  .font20
   { font-size: 20px }
  .font18
   { font-size: 18px }
  .font13
   { font-size: 13px }

  .boxBorder
   { border: 1px solid #bbb;  }
  .boxDiv
   { background: #6a8bad3b;padding:10px;border-radius: 4px; }
</style>