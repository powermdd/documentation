# <img src="../../.vuepress/public/documentation/service-model/BOC/DataBaseBOC/SET/SET.png" style="width:50px;"> <span class="bocIcon">(SET)</span> <br/>
입력 Object의 레코드들을 대상으로 Select 조건을 생성하여 필요한 Element를 덧붙이는 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
입력 Object의 레코드의 특정 컬럼을 조건 값으로 하여 입력 레코드 수만큼 Select문이 실행됩니다. <br/>
<span class="spanEx"> Ex) 입력된 데이터셋 Object 컬럼에 DEPT_ID 컬럼이 없다면, 해당 데이터셋에 해당 DEPT_ID 컬럼을 조회하여 데이터셋에 DEPT_ID 컬럼을 ADD할 수 있는 기능을 제공합니다. </span>
:::
<!-- -->

## 1. SET BOC 이미지
BOC 컴포넌트 목록에서 SET BOC을 선택하여 Drag-Drop으로 화면작업 영역에 디자인합니다. <br/>
<div class="boc"> 
  <img src="../../.vuepress/public/documentation/service-model/BOC/DataBaseBOC/SET/SetImg.png" style="width:150px;"> 
<div style="margin-top: 59px; margin-left: 20px; font-size: 12px;">
<span class="bocEX bocG" style="margin-bottom: 20px;">데이터베이스의 데이터를 조회하기 위한 컬럼 부를 표시합니다.</span>
<span class="bocEX bocY">데이터를 조회하기 위해서 필요로 하는 조건 컬럼 부를 표시합니다.</span></div>
</div>


## 2. SET BOC 속성
화면작업 창에서 SET BOC 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다.<br/>

<span class="font20">1)<b> 1. 기초정보</b></span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/DataBaseBOC/SET/SetProperty(1).png"  class="boxBorder" style="width:300px;"> <br/>

<span class="font18">①<b> OBJECT명 </b></span> <br/>
해당 BOC가 실행된 후 해당 결과 SET을 저장할 Value Object의 명을 지정합니다. 해당 Object의 결과 Set은 그리드 형식의 Object로 구성됩니다.

<span class="font18">②<b> 논리명칭 </b></span> <br/>
BOC가 어떤 동작을 수행하는지를 간단한 명칭으로 기술합니다. 해당 명칭을 처리 흐름을 간략하게 표현할 수 있도록 기술합니다.

<span class="font18">③<b> 논리설명 </b></span> <br/>
논리명칭으로 표현하기 부족할 때 좀 더 상세히 내용을 기술합니다.

<span class="font20">2)<b> 2. 입력부</b></span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/DataBaseBOC/SET/SetProperty(2).png"  class="boxBorder" style="width:300px;"> <br/>

<span class="font18">①<b> SQL Query </b></span> <br/>
Select문의 데이터베이스 SQL Query를 입력합니다.<br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/DataBaseBOC/SEL/sel_sqlQuery.png"  style="width:600px;"> <br/>

<span class="font18">②<b> 입력 OBJECT </b></span> <br/>
쿼리 입력 대상이 될 Object명을 설정합니다.

<span class="font18">③<b> 추가변경항목 </b></span> <br/>
기존항목에 추가할 데이터 항목을 설정합니다.

<span class="font18">④</span><b class="font18"> 출력항목 </b> <br/>
SET 타입의 출력 데이터 항목을 설정합니다.

<span class="font20">3)<b> 3. 출력부</b></span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/DataBaseBOC/SET/SetProperty(3).png"  class="boxBorder" style="width:300px;"> <br/>

<span class="font18">①<b> 2. Record-Count/Page </b></span> <br/>
Pagination 시 페이지당 레코드 건수를 설정합니다.

<span class="font18">②<b> Column Scroll </b></span> <br/>
해당 BOC 목록이 많을 경우 "true"로 설정했을 때 Display Count에서 설정한 개수만큼 보여주고 나머지 목록은 <span class="btnR">▲▼</span> 버튼으로 확인할 수 있습니다.

<span class="font18">③<b> Display Count </b></span> <br/>
해당 BOC 목록이 많을 때 목록에 보이는 개수를 설정합니다.

<span class="font18">④</span><b class="font18"> 화면출력유형 </b> <br/>
- <b class="colGray">None</b> : Default
- <b class="colGray">Dataset</b> : View Designer에서 그리드 컴포넌트에 조회 시 설정합니다.
- <b class="colGray">Recode</b> : JSP 출력방식일 때 단일 컴포넌트에 조회 시 설정합니다.
- <b class="colGray">Page</b> : JSP 출력방식일 때 페이징 시 설정합니다.
- <b class="colGray">ChartLabel</b> : View Designer에서 차트 컴포넌트에 범례를 설정합니다.
- <b class="colGray">ChartData</b> : View Designer에서 차트 컴포넌트에 데이터 조회 시 설정합니다.
- <b class="colGray">Schedule</b> : View Designer에서 스케줄 컴포넌트에 조회 시 설정합니다. <br/>

<span class="font20">4)<b> 5. 선택항목</b></span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/DataBaseBOC/SET/SetProperty(4).png"  class="boxBorder" style="width:300px;"> <br/>

<span class="font18">①</span><b class="font18"> Alias전송명 </b> <br/>
전송하는 Object 명의 Alias를 생성합니다.

<span class="font18">②</span><b class="font18"> DB연결명 </b> <br/>
기본 접속 DB는 자동 설정됩니다. 추가로 다른 DB 연결 명을 사용하여 데이터 처리의 필요성이 생기면 해당 정보에 접속 명을 등록하여 사용합니다.

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

## 3. SET BOC 사용 예시 
<span class="font20">1) SQL 처리 예</span> <br/>

<span class="font18">① 우측 속성에 SQL Query를 선택해서 나오는 <span class="spanBtn">...</span> 버튼을 클릭합니다.</span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/DataBaseBOC/SET/SetQuery(1).png" class="boxBorder" style="width:300px;"> <br/>

<span class="font18">② SQL Query 창에 SQL 구문을 입력하여 저장합니다.</span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/DataBaseBOC/SET/SetQuery(2).png"   style="width:800px;"> <br/>

<span class="font20">2) 추가변경항목과 출력항목 속성의 입력 예</span> <br/>

<span class="font18">① 우측 속성에 추가변경항목 또는 출력항목을 선택해서 나오는 <span class="spanBtn">...</span> 버튼을 클릭합니다.</span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/DataBaseBOC/SET/SetAll(1).png" class="boxBorder" style="width:300px;"> <br/>

<span class="font18">② 입력 컬럼 입력창 또는 출력 컬럼 입력창에 등록할 컬럼을 더블클릭하여 설정합니다.</span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/DataBaseBOC/SET/SetAll(2).png"   style="width:600px;"> <br/>

<style type='text/css'>
  .boc 
   { display: inline-flex; }
  .bocEX 
   { display: inline-block; padding: 4.5px; position: relative; width: 100%; color: darkslategray; }
  .bocG
   { background: rgb(195, 255, 195); }
  .bocY
   { background: rgb(255, 255, 193); }
  .bocG:after, .bocY:after
   { content: ""; border-width: 13px 0 13px 10px; border-style: solid; position: absolute; left: 100%; top: 0;  }
  .bocG:after
   { border-color: transparent transparent transparent rgb(195, 255, 195); }
  .bocY:after
   { border-color: transparent transparent transparent rgb(255, 255, 193); }
  .bocIcon
   { position: relative; top: -12px; }

  .spanBtn
   { border: 1px solid #bbb;border-radius: 4px;padding: 3px;background:white; color:dimgrey; }
  
  .btnR
   { color:#9C3B00; }
  .labelR
   { color:red; font-weight: bold; }
  .labelB
   { color:#00a4ff; font-weight: bold; }
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

   .colGray
   { color: dimgrey; }
</style>