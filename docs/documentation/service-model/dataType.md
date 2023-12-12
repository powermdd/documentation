# Data Type 정의

POWERMDD에서 데이터타입의 정의는 자바 언어에서 사용하고 있는 데이터타입과는 다른 형식의 명칭을 사용하고 있습니다. 명칭의 기준은 데이터에 대한 정의의 중심이 되는 데이터베이스 시스템에서 사용하고 있는 용도 형식을 참고하여 생성하고 있습니다.<br/>

데이터타입으로는 String형, 수치형, LOB형, SQL처리시 상수 지원 형, 날짜형으로 정의되어 있습니다. 데이터 컬럼에 대한 데이터타입의 정의는 POWERMDD 메뉴에서 Data Column Dictionary에서 정의하고 관리합니다.<br/>

## 1. String형
String 타입으로 사용하고자 할 때 사용합니다. 값을 직접 할당하고자 할 때에는 “값”의 형식으로 처리됩니다.

<span class="font20">1) <b>VARCHAR</b></span> <br/>
자바 언어의 String 데이터 타입과 동일하게 처리됩니다.<br/>

<span class="spanEx">Ex) “VAL1”라는 컬럼의 데이터타입이 String인 경우 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/dataType/VARCHAR.png" class="boxBorder" style="width:300px;"> <br/>


## 2. 수치형
해당 컬럼 타입은 수치형 데이터 타입으로 처리됩니다.

<span class="font20">1) <b>NUMBER</b></span> <br/>
수치의 범위는 자바 언어의 double 데이터타입의 범위와 동일하게 처리됩니다.<br/>

<span class="spanEx">Ex) “VAL1”라는 컬럼의 데이터 타입이 수치형인 경우 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/dataType/NUMBER.png" class="boxBorder" style="width:400px;"> <br/>

<span class="font20">2) <b>INTEGER</b></span> <br/>
수치의 범위는 자바 언어의 integer 데이터타입의 범위와 동일하게 처리됩니다.<br/>

<span class="spanEx">Ex) “VAL1”라는 컬럼의 데이터 타입이 수치형인 경우 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/dataType/INTEGER.png" class="boxBorder" style="width:300px;"> <br/>

<span class="font20">3) <b>LONG</b></span> <br/>
수치의 범위는 자바 언어의 long 데이터타입의 범위와 동일하게 처리됩니다.<br/>

<span class="spanEx">Ex) “VAL1”라는 컬럼의 데이터 타입이 수치형인 경우 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/dataType/NUMBER.png" class="boxBorder" style="width:400px;"> <br/>

## 3. LOB형
<span class="font20">1) <b>BLOB</b></span> <br/>
해당 컬럼 타입은 Binary 데이터 처리를 합니다. 이미지, 파일 등을 데이터베이스에 저장할 때 주로 사용됩니다.<br/>
해당 데이터타입으로 선언된 컬럼은 파라미터 변수형식으로 사용할 수 없습니다. Binary 형식으로 입출력용으로만 사용됩니다. 자바에서는 byte[] 데이터타입으로 됩니다.

<span class="font20">2) <b>INTEGER</b></span> <br/>
해당 컬럼 타입은 String 타입으로 4000byte을 초과하는 String 데이터일 때 사용합니다. <br/>
CLOB시에는 데이터베이스 입출력 시 Stream 형식으로 처리됩니다.

## 4. 날짜
<span class="font20">1) <b>“#” 날짜 데이터 동적 인식</b></span> <br/>
해당 컬럼의 값이 날짜 값의 속성을 가지고 있을 때 사용합니다. 날짜 인식 구분자를 사용하게 되면 연산처리 시 날짜 연산을 수행합니다. 날짜연산처리 결과는 수치형 데이터타입에 저장됩니다.

<span class="spanEx">Ex) 해당 “UPD_DT” 컬럼 날짜 값에 1개월을 더한 일자를 구하고 싶을 때 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/dataType/UPD_DT.png" class="boxBorder" style="width:300px;"> <br/>


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