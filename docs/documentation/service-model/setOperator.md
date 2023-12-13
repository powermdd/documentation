# 연산자 설정

값의 계산 또는 판단하기 위한 연산 처리로 산술연산, 비교연산, 논리연산, 날짜연산 기능을 제공합니다.
<img src="../../.vuepress/public/documentation/service-model/calculation/setOperator/Reference.png" style="width:800px;"> <br/>

## 1. 산술연산
<span class="font20">1) <b>(+) 더하기</b></span> <br/>
사용이 가능한 지원하는 데이터형 : 수치, String, 날짜(8자리)에 일수 더하기<br/>
<span class="spanEx">Ex) 해당 “CNT” 컬럼 계산식에 산술연산식을 활용한 값을 넣는다. </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/setOperator/addition.png" class="boxBorder" style="width:300px;"> <br/>

<span class="font20">2) <b>(-) 빼기</b></span> <br/>
사용이 가능한 지원하는 데이터형 : 수치, 날짜(8자리)에 일수 빼기, 날짜(8자리)와 날짜(8자리) 차이 일수<br/>
<span class="spanEx">Ex) 해당 “CNT” 컬럼 계산식에 산술연산식을 활용한 값을 넣는다. </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/setOperator/subtraction.png" class="boxBorder" style="width:300px;"> <br/>

<span class="font20">3) <b>(/) 나누기</b></span> <br/>
사용이 가능한 지원하는 데이터형 : 수치<br/>
<span class="spanEx">Ex) 해당 “CNT” 컬럼 계산식에 산술연산식을 활용한 값을 넣는다. </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/setOperator/division.png" class="boxBorder" style="width:300px;"> <br/>

<span class="font20">4) <b>(*) 곱하기</b></span> <br/>
사용이 가능한 지원하는 데이터형 : 수치<br/>
<span class="spanEx">Ex) 해당 “CNT” 컬럼 계산식에 산술연산식을 활용한 값을 넣는다. </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/setOperator/multiplication.png" class="boxBorder" style="width:300px;"> <br/>

<span class="font20">5) <b>(%) 나머지</b></span> <br/>
사용이 가능한 지원하는 데이터형 : 수치<br/>
<span class="spanEx">Ex) 해당 “CNT” 컬럼 계산식에 산술연산식을 활용한 값을 넣는다. </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/setOperator/remainder.png" class="boxBorder" style="width:300px;"> <br/>

## 2. 비교연산
<span class="font20">1) <b>(>) 크다</b></span> <br/>
사용이 가능한 지원하는 데이터형 : 수치, String<br/>
<span class="spanEx">Ex) 해당 “CNT” 컬럼 계산식에 비교연산식을 활용한 값을 넣는다. </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/setOperator/greaterThan.png" class="boxBorder" style="width:300px;"> <br/>

<span class="font20">2) <b>(<) 작다</b></span> <br/>
사용이 가능한 지원하는 데이터형 : 수치, String<br/>
<span class="spanEx">Ex) 해당 “CNT” 컬럼 계산식에 비교연산식을 활용한 값을 넣는다. </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/setOperator/lessThan.png" class="boxBorder" style="width:300px;"> <br/>

<span class="font20">3) <b>(==) 같다</b></span> <br/>
사용이 가능한 지원하는 데이터형 : 수치<br/>
<span class="spanEx">Ex) 해당 “CNT” 컬럼 계산식에 비교연산식을 활용한 값을 넣는다. </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/setOperator/equalSign.png" class="boxBorder" style="width:300px;"> <br/>

<span class="font20">4) <b>(>=) 크거나 같다</b></span> <br/>
사용이 가능한 지원하는 데이터형 : 수치<br/>
<span class="spanEx">Ex) 해당 “CNT” 컬럼 계산식에 비교연산식을 활용한 값을 넣는다. </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/setOperator/greaterEqual.png" class="boxBorder" style="width:300px;"> <br/>

<span class="font20">5) <b>(<=) 작거나 같다</b></span> <br/>
사용이 가능한 지원하는 데이터형 : 수치<br/>
<span class="spanEx">Ex) 해당 “CNT” 컬럼 계산식에 비교연산식을 활용한 값을 넣는다. </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/setOperator/lessEqual.png" class="boxBorder" style="width:300px;"> <br/>

<span class="font20">6) <b>(!=) 같지 않다</b></span> <br/>
사용이 가능한 지원하는 데이터형 : 수치<br/>
<span class="spanEx">Ex) 해당 “CNT” 컬럼 계산식에 비교연산식을 활용한 값을 넣는다. </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/setOperator/notEqualSign.png" class="boxBorder" style="width:300px;"> <br/>

## 3. 논리연산
<span class="font20">1) <b>(&&) 그리고</b></span> <br/>
사용이 가능한 지원하는 데이터형 : 비교연산자 및 결과값이 Boolean형<br/>
<span class="spanEx">Ex) 해당 “CNT” 컬럼 계산식에 논리연산식을 활용한 값을 넣는다. </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/setOperator/and.png" class="boxBorder" style="width:450px;"> <br/>

<span class="font20">2) <b>(||) 또는</b></span> <br/>
사용이 가능한 지원하는 데이터형 : 비교연산자 및 결과값이 Boolean형<br/>
<span class="spanEx">Ex) 해당 “CNT” 컬럼 계산식에 논리연산식을 활용한 값을 넣는다. </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/setOperator/or.png" class="boxBorder" style="width:450px;"> <br/>

## 4. 날짜연산
날짜연산은 일자연산기능을 제공하고 있습니다. 일자연산은 대부분 데이터베이스 시스템의 일자를 사용하기 때문에 애플리케이션 서버에서 사용하는 일자기능은 제한적인 기능만 제공하고 있습니다. <br/>
아래 지원하는 기능 외의 다른 형식 필요 시에는 User Function 기능을 사용해야 한다.

<span class="font20">1) 사용하는 일자 포맷</span> <br/>
<div class="boxDiv">
8자리 일자 : YYYYMMDD
</div> <br/>

<span class="font20">2) 일수 구분 포맷</span> <br/>
<div class="boxDiv">
구분자(D:일수, M:월수, Y:년수) + #(날짜형) + 수치값<br/>
</div> <br/>

<span class="spanEx">Ex) 해당 “UPD_DT” 컬럼 계산식에 날짜연산을 활용한 값을 넣는다. </span><br/>
<span class="spanEx">- 일수(D#) 2023년 1월 1일에 1일을 더하기 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/setOperator/dateD.png" class="boxBorder" style="width:300px;"> <br/>

<span class="spanEx">- 월수(M#) 2023년 1월 1일에 1달을 더하기 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/setOperator/dateM.png" class="boxBorder" style="width:300px;"> <br/>

<span class="spanEx">- 년수(Y#) 2023년 1월 1일에 1년을 더하기 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/setOperator/dateY.png" class="boxBorder" style="width:300px;"> <br/>

## 5. 문자열연산
Database BOC중 DML을 처리하는 BOC에서만 사용됩니다. SQL 구문 내에 파라미터를 할당하고자 할 때 사용합니다. DML처리 하는 BOC에 컬럼 추가 시 파라미터의 값으로 SQL 구문을 처리하고자 할 때 사용합니다.

<span class="font20">1) 사용하는 일자 포맷</span> <br/>
<div class="boxDiv">
“&” + COLUMN + “;”
</div> <br/>

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
“&” 파라미터 명 시작 지시자 <br/>
“;” 파라미터 명 종료 지시자
:::
<!-- -->

<span class="spanEx">Ex) 단순 IPSADATE의 값 처리 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/setOperator/ipsadate.png" style="width:350px;"> <br/>

<span class="spanEx">- SQL 구문 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/setOperator/ipsadateSql.png" class="boxBorder" style="width:450px;"> <br/>

<span class="spanEx">- 테스트 결과 메시지 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/setOperator/ipsadateTest.png" class="boxBorder" style="width:800px;"> <br/>


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