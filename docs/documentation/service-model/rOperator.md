# 레코드 연산자 

<img src="../../.vuepress/public/documentation/service-model/calculation/rOperator/rOperator.png" style="width:800px;"> <br/>

## 1. (before) 바로 전 값
POWERMDD는 데이터셋 Object 즉 다수(0~n건)의 Input 레코드들을 Loop를 통하여 처리합니다. before 연산은 현재 처리되고 있는 Current 레코드의 이전 레코드의 값을 참조하고 싶을 때 사용힙니다. 일반적으로 누적 값을 계산하고 싶을 때에 종종 사용됩니다. before 사용시 첫 번째 레코드의 이전 레코드의 값은 empty 또는 0 값이 할당됩니다.

<span class="font20">1) 구문 형식1</span> <br/>
<div class="boxDiv">
식 before
</div> <br/>

계산식에 할당하는 컬럼의 이전 레코드의 값이 됩니다.

<span class="spanEx">Ex) “SALARY"라는 컬럼의 값을 할당을 위하여 계산식에 before를 사용하게 되면 "SALARY" 컬럼의 이전 레코드의 "SALARY" 컬럼 값을 참조합니다.
 </span><br/>
 <img src="../../.vuepress/public/documentation/service-model/calculation/rOperator/before1.png" style="width:350px;"> <br/>

<span class="spanEx">- SQL 구문 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/rOperator/before1Sql.png" class="boxBorder" style="width:300px;"> <br/>

<span class="spanEx">- 테스트 결과 메시지 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/rOperator/before1Test.png" class="boxBorder" style="width:800px;"> <br/>

<span class="font20">2) 구문 형식2</span> <br/>
<div class="boxDiv">
COLUMN_ID.before
</div> <br/>

명시적으로 지정한 컬럼의 이전 레코드에 있는 값을 참조합니다.

<span class="spanEx">Ex) "BIGO" 컬럼의 계산식을 보게 되면 “before + SALARY.before”가 사용됩니다. "before”는 "BIGO" 컬럼의 이전 레코드 값이 되고, “SALARY.before”는 SALARY의 이전 레코드의 값이 됩니다.
 </span><br/>
 <img src="../../.vuepress/public/documentation/service-model/calculation/rNum/bigo.png" style="width:350px;"> <br/>

<span class="spanEx">- SQL 구문 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/rOperator/before2Sql.png" class="boxBorder" style="width:450px;"> <br/>

<span class="spanEx">- 테스트 결과 메시지 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/rOperator/before2Test.png" class="boxBorder" style="width:800px;"> <br/>

## 2. (first) 처음 값
데이터셋 Object 레코드들 중 첫 번째 레코드의 값을 참조할 때 사용합니다.

<div class="boxDiv">
DataSet.COLUMN.first
</div> <br/>

<span class="spanEx">Ex) SEL2의 “USER_ID” 컬럼의 값들 중 첫 번째 값을 찾아 조회합니다.
 </span><br/>
 <img src="../../.vuepress/public/documentation/service-model/calculation/rOperator/first.png" style="width:350px;"> <br/>

<span class="spanEx">- SQL 구문 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/rOperator/firstSql.png" class="boxBorder" style="width:300px;"> <br/>

<span class="spanEx">- 테스트 결과 메시지 </span><br/>
<span class="spanEx">[ SEL2 ]</span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/rOperator/firstTest(1).png" class="boxBorder" style="width:800px;"> <br/>

<span class="spanEx">[ SEL3 ]</span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/rOperator/firstTest(2).png" class="boxBorder" style="width:800px;"> <br/>

## 3. (last) 마지막 값
데이터셋 Object 레코드들 중 마지막 레코드의 값을 참조할 때 사용합니다.

<div class="boxDiv">
DataSet.COLUMN.last
</div> <br/>

<span class="spanEx">Ex) SEL2의 “USER_ID” 컬럼의 값들 중 첫 번째 값을 찾아 조회합니다.
 </span><br/>
 <img src="../../.vuepress/public/documentation/service-model/calculation/rOperator/first.png" style="width:350px;"> <br/>

<span class="spanEx">- SQL 구문 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/rOperator/lastSql.png" class="boxBorder" style="width:300px;"> <br/>

<span class="spanEx">- 테스트 결과 메시지 </span><br/>
<span class="spanEx">[ SEL2 ]</span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/rOperator/lastTest(1).png" class="boxBorder" style="width:800px;"> <br/>

<span class="spanEx">[ SEL3 ]</span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/rOperator/lastTest(2).png" class="boxBorder" style="width:800px;"> <br/>

## 4. (rcount) 레코드건수
데이터셋 Object 레코드들 중 Current 레코드의 건수를 가져옵니다.

<div class="boxDiv">
OBJECT명.rcount
</div> <br/>

<span class="spanEx">Ex) SEL1의 레코드의 건수를 구하여 CVT BOC에서 “BIGO” 컬럼 값을 참조합니다.
 </span><br/>
 <img src="../../.vuepress/public/documentation/service-model/calculation/rNum/bigo.png" style="width:350px;"> <br/>

<span class="spanEx">- SQL 구문 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/rOperator/rcountSql.png" class="boxBorder" style="width:300px;"> <br/>

<span class="spanEx">- 테스트 결과 메시지 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/rOperator/rcountTest.png" class="boxBorder" style="width:800px;"> <br/>

## 5. (~) 현재 레코드의 컬럼
POWERMDD는 데이터셋 내에서 레코드 단위로 데이터를 처리합니다. 레코드는 여러 컬럼의 값으로 구성되어 있는 집합입니다. 다수의 레코드를 Loop로 레코드를 재구성 처리할 때 입력되는 Current 레코드와 신규로 재구성되어 만들어지는 레코드가 발생하게 됩니다. 즉 신규로 재구성되는 레코드 내 컬럼들을 생성할 때 컬럼의 생성 순서가 발생합니다. 여기서 "~"를 지정한 컬럼은 신규로 재구성되는 레코드의 컬럼을 참조하게 됩니다.

<div class="boxDiv">
~COLUMN
</div> <br/>

<span class="spanEx">Ex) 단순 "SALARY" 컬럼의 값 처리와 "~SALARY"의 값을 비교
 </span><br/>
 <img src="../../.vuepress/public/documentation/service-model/calculation/rOperator/record.png" style="width:350px;"> <br/>

<span class="spanEx">- SQL 구문 </span><br/>
<span class="spanEx">[ BIGO ]</span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/rOperator/recordSql(1).png" class="boxBorder" style="width:300px;"> <br/>

<span class="spanEx">[ BIGO2 ]</span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/rOperator/recordSql(2).png" class="boxBorder" style="width:300px;"> <br/>

<span class="spanEx">[ SALARY ]</span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/rOperator/recordSql(3).png" class="boxBorder" style="width:300px;"> <br/>

<span class="spanEx">- 테스트 결과 메시지 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/rOperator/recordTest.png" class="boxBorder" style="width:800px;"> <br/>

“BIGO” 컬럼 값은 변경한 “SALARY” 컬럼 값을 참조해서 할당한 것을 볼 수 있습니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
"~"을 사용할 경우, 출력항목 목록 부분은 재구성되는 컬럼과 계산식을 입력할 목록을 다음 목록으로 지정하고 계산식을 입력할 컬럼 계산순서 또한 다음 순서로 지정하지 않으면 테스트 또는 빌드 시 오류 생길 수 있습니다.
:::
<!-- -->

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