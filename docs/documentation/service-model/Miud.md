# <img src="../../.vuepress/public/documentation/service-model/BOC/ControlBOC/MIUD/MIUD.png" style="width:50px;"> <span class="bocIcon">(MIUD)</span> <br/>
Object의 IUDFLAG 컬럼 값(I:Insert, U:Update, D:Delete)에 따라 분기 처리를 수행하는 기능인 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
MIUD BOC는 IUD에 대한 분기조건이 자동으로 생성되므로 입력 Object에 존재하는 IUDFLAG 컬럼이 고정적인 패턴의 분기 처리에 사용됩니다.
:::
<!-- -->

## 1. MIUD BOC 이미지
BOC 컴포넌트 목록에서 MIUD BOC를 선택하여 Drag-Drop으로 화면작업 영역에 디자인합니다. <br/>
<div class="boc"> 
  <img src="../../.vuepress/public/documentation/service-model/BOC/ControlBOC/MIUD/MiudBoc.png" style="width:150px;"> 
<div style="margin-top: 33px; margin-left: 20px; font-size: 12px;">
<span class="bocEX bocB" style="margin-bottom: 21px;">IUD로 표시되는 부분이 속성의 구분 컬럼명으로 값에 따라 분기 처리되는 과정 CON BOC를 표시합니다.</span></div>
</div>

## 2. MIUD BOC 속성
화면작업 영역에서 MIUD BOC 선택 시 속성 영역에 설정이 가능한 항목에 값을 입력합니다.<br/>

<span class="font20">1)<b> 1. 기초정보</b></span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/ControlBOC/MIUD/MiudProperty(1).png"  class="boxBorder" style="width:300px;"> <br/>

<span class="font18">①<b> OBJECT명 </b></span> <br/>
해당 BOC가 실행된 후 해당 결과 SET을 저장할 Value Object의 명을 지정합니다. 해당 Object의 결과 Set은 그리드 형식의 Object로 구성됩니다.

<span class="font18">②<b> 논리명칭 </b></span> <br/>
BOC가 어떤 동작을 수행하는지를 간단한 명칭으로 기술합니다. 해당 명칭을 처리 흐름을 간략하게 표현할 수 있도록 기술합니다.

<span class="font18">③<b> 논리설명 </b></span> <br/>
논리명칭으로 표현하기 부족할 때 좀 더 상세히 내용을 기술합니다.

<span class="font20">2)<b> 2. 입력부</b></span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/ControlBOC/MPD/MpdProperty(2).png"  class="boxBorder" style="width:300px;"> <br/>

<span class="font18">①</span><b class="font18"> 입력 OBJECT </b> <br/>
수정할 입력 데이터 Object 명을 입력합니다.

<span class="font20">3)<b> 3. 출력부</b></span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/ControlBOC/MPD/MpdProperty(3).png"  class="boxBorder" style="width:300px;"> <br/>

<span class="font18">①<b> Column Scroll </b></span> <br/>
해당 BOC 목록이 많을 경우 "true"로 설정했을 때 Display Count에서 설정한 개수만큼 보여주고 나머지 목록은 <span class="btnR">▲▼</span> 버튼으로 확인할 수 있습니다.

<span class="font18">②<b> Display Count </b></span> <br/>
해당 BOC 목록이 많을 때 목록에 보이는 개수를 설정합니다.

<span class="font20">4)<b> 5. 선택항목</b></span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/ControlBOC/MIUD/MiudProperty(4).png"  class="boxBorder" style="width:300px;"> <br/>

<span class="font18">①</span><b class="font18"> DB연결명 </b> <br/>
기본 접속 DB는 자동 설정됩니다. 추가로 다른 DB 연결 명을 사용하여 데이터 처리의 필요성이 생기면 해당 정보에 접속 명을 등록하여 사용합니다.

<span class="font18">②<b> IUD 구분 컬럼명-IUDNAME</b></span> <br/>
Record Status의 값을 가지고 있는 컬럼명을 설정합니다.

<span class="font18">③<b> Log 수준 </b></span> <br/>
Debug 테스트 시에 로그 메시지를 정의할 수 있습니다. 데이터베이스 관련된 BOC는 ReturnData와 QueryData를 사용합니다.
- <b class="colGray">00. ProcessHead</b> : Seq번호, 프로세스 타입을 표시합니다.
- <b class="colGray">01. InputData</b> : 입력 데이터를 표시합니다.
- <b class="colGray">02. ReturnData</b> : 결과 데이터를 표시합니다.
- <b class="colGray">03. Middle OutputData</b> : 중간 과정 결과 데이터를 표시합니다.
- <b class="colGray">04. TabPage</b> : 탭 페이지 결과를 표시합니다.
- <b class="colGray">05. Math-Trace</b> : Math의 계산식 결과를 표시합니다.
- <b class="colGray">06. Formula-Trace</b> : Formula의 계산식 결과를 표시합니다.
- <b class="colGray">07. QueryData</b> : 값이 포함된 쿼리를 표시합니다.
- <b class="colGray">08. SCLTrace</b> : SCLT BOC의 결과를 표시합니다.
- <b class="colGray">09. PEX부가 Objects</b> : PEX BOC의 부가적인 Object의 결과를 표시합니다.
- <b class="colGray">10. 미사용</b> : 조건 컬럼 부의 계산식 값을 표시합니다.

<span class="font18">④<b> 실행 조건 </b></span> <br/>
실행 조건에 값이 있는 경우 해당 실행 조건이 "True"가 아니면 실행이 되지 않습니다.

## 3. MIUD BOC 사용 예시 
<span class="font20">1) 분기처리 예</span> <br/>
MIUD BOC의 분기처리 Child BOC에는 입력 Object인 "R" Object가 발생합니다.<br/>
"R" Object는 Loop 처리 시 발생하는 Current Record Object입니다.<br/>
아래 샘플에서 “INS6” Node의 입력 Object로 "R"이 설정되어 있습니다.<br/>
즉 Current Record가 등록 대상 레코드가 됩니다.<br/>
이런 CASE는 보통 화면의 그리드에서 Row의 삭제, 등록, 수정이 발생할 때 사용됩니다.<br/>

<img src="../../.vuepress/public/documentation/service-model/BOC/ControlBOC/MIUD/MiudRecord(1).png"  style="width:350px;"> &emsp;&emsp;&emsp;
<img src="../../.vuepress/public/documentation/service-model/BOC/ControlBOC/MIUD/MiudRecord(2).png"  class="boxBorder" style="width:300px;"><br/>

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