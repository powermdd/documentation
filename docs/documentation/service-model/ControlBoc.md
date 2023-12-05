# Control BOC

반복, 분기 조건, Break등 제어를 하는 구성요소입니다. <br/>
<img class="boxBorder" src="../../.vuepress\public\documentation\service-model\BOC\ControlBOC\ControlBOC.png" style="width:400px;"> <br/>

## 1. MPD
입력 Object의 특정 컬럼 값에 따른 분기 처리를 수행하는 기능인 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
MPD BOC는 분기조건을 자유롭게 지정할 수 있어 범용적인 패턴의 분기처리에 사용됩니다.<br/>
MPD BOC의 분기처리는 Child BOC에 CON BOC 조건 분기처리를 추가하여 필요한 속성을 설정합니다. <br/>
Loop내에서 Current Record Object는 “R” Object로 만들어집니다.
:::
<!-- -->

## 2. MIUD
Object의 IUDFLAG 컬럼 값(I:Insert, U:Update, D:Delete)에 따라 분기 처리를 수행하는 기능인 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
MIUD BOC는 IUD에 대한 분기조건이 자동으로 생성되므로 입력 Object에 존재하는 IUDFLAG 컬럼이 고정적인 패턴의 분기 처리에 사용됩니다.
:::
<!-- -->

## 3. CON
조건에 따른 분기 처리를 수행하는 기능인 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
CON BOC는 앞에서 처리된 BOC의 결과값을 체크하여 조건에 따른 분기를 수행함으로써 프로세스의 흐름을 제어합니다.  <br/>
CON BOC 사용시 자바 소스 생성은 if(조건) 형식으로 구성됩니다.
:::
<!-- -->

## 4. NLL
“아무 일도 하지 않는 BOC”를 의미하며 프로세스 처리규칙 상 BOC간 연결이 불가한 경우 중간 버퍼 역할인 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
모델링 초기 시점에 개략적인 논리모델만 작성하거나 불확실한 처리에 대한 임시적인 용도에도 사용합니다.<br/>
또한, 처리기능 없이 메시지만 발생시키고 싶을 때 사용합니다.
:::
<!-- -->

## 5. BRK
MPD BOC 또는 MIUD BOC를 이용하여 Loop(while)문을 종료 처리하는 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
해당 기능 사용시 자바 언어의 while문 내에 break가 추가됩니다.<br/>
BRK BOC는 MPD BOC, MIUD BOC 내에서만 사용 가능합니다.
:::
<!-- -->

<style type='text/css'>
  [class*="boxBorder"] { border: 1px solid #bbb; }
  [class*="font20"] { font-size: 20px }
  [class*="font18"] { font-size: 18px }
  [class="spanBtn"] { border: 1px solid #bbb;border-radius: 4px;padding: 3px;background:white; color:dimgrey; }
  [class="spanBtnS"] { border: 1px solid #bbb;border-radius: 4px;padding: 3px;background:white; color:dimgrey; font-size: 13px; }
  [class="spanEx2"] { font-size: 18px; color: #00a4ff; }
  [class="spanEx"] { color: #00a4ff; }
  [class="fontB"] { color: rgb(106, 139, 173); font-size:18px }
  [class*="iconB"] { position: relative; top: 5px; }
  [class*="iconD"] { position: relative; top: -8px; }
  [class*="iconB2"] { color: #6a8bad;display: inline-block;bottom: 40px;position: relative; }
  [class="btnR"] {color:#9C3B00;}
</style>