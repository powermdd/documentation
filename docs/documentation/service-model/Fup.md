# <img class="iconB" src="../../.vuepress/public/documentation/service-model/BOC/FileBOC/FUP/FUP.png" style="width:50px;"> <span class="bocIcon">(FUP)</span> <br/>
특정 포맷으로 구성된 파일을 읽어 데이터 Object로 생성하는 컴포넌트입니다.

## 1. FUP BOC 이미지
BOC 컴포넌트 목록에서 FUP BOC를 선택하여 Drag-Drop으로 화면작업 영역에 디자인합니다. <br/>
<div class="boc"> 
  <img src="../../.vuepress/public/documentation/service-model/BOC/FileBOC/FUP/FupImg.png" style="width:150px;"> 
</div>

## 2. FUP BOC 속성
화면작업 영역에서 FUP BOC 선택 시 속성 영역에 설정이 가능한 항목에 값을 입력합니다.<br/>

<span class="font20">1)<b> 1. 기초정보</b></span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/FileBOC/FUP/FupProperty(1).png"  class="boxBorder" style="width:300px;"> <br/>

<span class="font18">①<b> OBJECT명 </b></span> <br/>
해당 BOC가 실행된 후 해당 결과 SET을 저장할 Value Object의 명을 지정합니다. 해당 Object의 결과 Set은 그리드 형식의 Object로 구성됩니다.

<span class="font18">②<b> 논리명칭 </b></span> <br/>
BOC가 어떤 동작을 수행하는지를 간단한 명칭으로 기술합니다. 해당 명칭을 처리 흐름을 간략하게 표현할 수 있도록 기술합니다.

<span class="font18">③<b> 논리설명 </b></span> <br/>
논리명칭으로 표현하기 부족할 때 좀 더 상세히 내용을 기술합니다.

<span class="font20">2)<b> 2. 입력부</b></span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/FileBOC/FUP/FupProperty(2).png"  class="boxBorder" style="width:300px;"> <br/>

<span class="font18">①</span><b class="font18"> 처리구분 </b> <br/>
- <b class="colGray">delim</b> : 컬럼과 컬럼을 분리 구분자로 나누어 출력 항목을 생성합니다.
- <b class="colGray">length</b> : 고정 길이 정보로 아래 출력 항목을 생성합니다.

<span class="spanEx">Ex) “5,5,6”이고 출력 항목이 CNT, SAWONNO, DEPT_CD 컬럼이라면 앞에서 5자리는 USER_ID 컬럼, 이후 5자리는 USER_NM 컬럼, 그리고 6자리는 DEPT_CD 컬럼이 됩니다.</span>

<span class="font18">②</span><b class="font18"> 처리구분자 </b> <br/>
파일 처리 구분자를 입력합니다. 처리 구분에 따라 해당 값을 정의해야 합니다. <br/>
처리 구분이 Delimeter 처리 방식이 “delim”이 선택되어지면 컬럼과 컬럼을 구분하는 구분자 값을 입력합니다.<br/>
해당 구분자가 항목의 값으로 사용되지 않도록 주의하여야 합니다. 처리 구분이 length일 때 처리구분자 입력형식은 컬럼의 길이를 “,”로 구분하여 순서대로 입력하면 됩니다.<br/>

<span class="font18">③</span><b class="font18"> 출력 항목 </b> <br/>
해당 레이아웃으로 입력되는 컬럼들에 대한 컬럼 명을 순서대로 정의합니다.

<span class="font18">④</span><b class="font18"> 파일경로 </b> <br/>
파일경로를 입력합니다.

<span class="font18">⑤</span><b class="font18"> 파일명 </b> <br/>
파일명을 입력합니다.

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

<span class="font20">4)<b> 4. 메시지부</b></span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/DataBaseBOC/SEL/SelProperty(4).png"  class="boxBorder" style="width:300px;"> <br/>

<span class="font18">①<b> 결과메시지 </b></span> <br/>
해당 처리 결과에 대한 메시지를 클라이언트. 즉, 호출자에게 보낼 필요가 있을 때 정의합니다.<br/>

<span class="font20">5)<b> 5. 선택항목</b></span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/InterfaceBOC/CMD/cmdProperty(5).png"  class="boxBorder" style="width:300px;"> <br/>

<span class="font18">①</span><b class="font18"> Alias전송명 </b> <br/>
전송하는 Object 명의 Alias를 생성합니다.

<span class="font18">②<b> Log 수준 </b></span> <br/>
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

<span class="font18">③<b> 실행 조건 </b></span> <br/>
실행 조건에 값이 있는 경우 해당 실행 조건이 "True"가 아니면 실행이 되지 않습니다.

## 3. FUP BOC 사용 예시 
<span class="font20">1) 파일Layout 속성의 입력 예</span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/FileBOC/FUP/FupSample(1).png"  style="width:300px;"> <br/>

<span class="font18">① 우측 속성에 출력 항목을 선택해서 나오는 <span class="spanBtn">...</span> 버튼을 클릭합니다.</span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/FileBOC/FUP/FupSample(2).png"  class="boxBorder"  style="width:300px;"> <br/>

<span class="font18">② Output Column Assignment에 출력할 컬럼을 더블클릭하여 설정합니다.</span> <br/>
<img src="../../.vuepress/public/documentation/service-model/BOC/FileBOC/FUP/FupSample(3).png"  style="width:600px;"> <br/>

<style type='text/css'>
  .boc 
   { display: inline-flex; }
  .bocEX 
   { display: inline-block; padding: 4.5px; position: relative; width: 100%; color: darkslategray; }
  .bocG
   { background: rgb(195, 255, 195); }
  .bocY
   { background: rgb(255, 255, 193); }
  .bocP
   { background: rgb(216, 190, 228); }
  .bocW
   { background: rgb(245, 245, 245); }
  .bocG:after, .bocY:after, .bocP:after, .bocW:after
   { content: ""; border-width: 13px 0 13px 10px; border-style: solid; position: absolute; left: 100%; top: 0;  }
  .bocG:after
   { border-color: transparent transparent transparent rgb(195, 255, 195); }
  .bocY:after
   { border-color: transparent transparent transparent rgb(255, 255, 193); }
  .bocP:after
   { border-color: transparent transparent transparent rgb(216, 190, 228); }
  .bocW:after
   { border-color: transparent transparent transparent rgb(245, 245, 245); }
  .bocIcon
   { position: relative; top: -12px; }

  .spanBtn
   { border: 1px solid #bbb;border-radius: 4px;padding: 3px;background:white; color:dimgrey; }

  .btnR
   { color:#9C3B00; }
  .labelR
   { color:red; font-weight: bold; }
   .labelR2
   { color:red;}
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
</style>