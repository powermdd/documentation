# 레코드번호

<img src="../../.vuepress/public/documentation/service-model/calculation/rNum/rNum.png" style="width:800px;"> <br/>

## 1. rnum문
데이터셋 Object 레코드들의 Current 레코드의 순서 index인 Row Number를 가져옵니다. MPD BOC에서 사용시 child 분기조건 값으로 rnum 사용시 MPD BOC의 입력 데이터셋 Object의 Current Row Index 값이 전달됩니다.

<span class="font20">1) 구문형식</span> <br/>
<div class="boxDiv">
rnum
</div> <br/>

<span class="spanEx">Ex) 단순 "BIGO" 컬럼의 값 처리 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/rNum/bigo.png" style="width:350px;"> <br/>

<span class="spanEx">- SQL 구문 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/rNum/bigoSql.png" class="boxBorder" style="width:300px;"> <br/>

<span class="spanEx">- 테스트 결과 메시지 </span><br/>
<img src="../../.vuepress/public/documentation/service-model/calculation/rNum/bigoTest.png" class="boxBorder" style="width:800px;"> <br/>

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
