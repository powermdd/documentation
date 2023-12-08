# Chanage BOC

데이터셋 Object의 레코드에 변화를 주는 구성요소입니다. <br/>
<img class="boxBorder" src="../../.vuepress\public\documentation\service-model\BOC\ChangeBOC\ChangeBOC.png" style="width:400px;"> <br/>

## 1. GLV
단일 값을 해당 서비스 내에서 변수로 사용하는 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
GLV BOC 이외의 BOC는 In-Out에 기초하여 데이터셋을 구성하나 GLV BOC는 단순히 서비스 내부에서 변수형식으로 선언하여 사용합니다.
:::
<!-- -->

## 2. CVT
추가 및 변환 처리된 데이터를 데이터셋 Object로 생성하는 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
CVT BOC는 입력 데이터셋 Object에 대한 데이터를 가공하여 출력되도록 사용합니다.<br/>
이외에 추가적으로 입력 데이터셋 레코드에 대한 필터기능이 있습니다.
:::
<!-- -->

## 3. GET
화면에서 입력되는 데이터셋에서 필터링 처리를 수행하여 새로운 결과집합을 생성하는 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
Select문의 Where 조건문과 동일한 역할을 수행합니다.
:::
<!-- -->

## 4. MRG
n개의 데이터셋 Object의 레코드를 추출하여 병합된 단일 데이터셋을 생성하는 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
일반적으로 최종 결과 데이터셋을 생성하기 위하여 자주 사용됩니다.
:::
<!-- -->

## 5. ADD
지정된 조건에 따라 레코드 Add해두는 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
Loop 내에서 발생하는 데이터 레코드를 보존해주는 기능입니다.<br/>
반드시 MPD BOC, MIUD BOC의 Child 프로세스에서만 사용 가능합니다.<br/>
MPD BOC, MIUD BOC 내 즉 Loop내에서 사용되는 BOC는 메인 Flow에서 Access할 수 없으나 예외적으로 ADD BOC를 이용하면 메인 Flow의 BOC에서 Access가 가능합니다.
:::
<!-- -->

## 6. SUM
입력 데이터셋 Object에 대하여 구하는 컴포넌트입니다.

## 7. SRD
데이터셋에서 레코드를 여러 개의 멀티 레코드로 분할하는 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
대상 컬럼의 값을 분할 조건 컬럼으로 기준 값으로 분할합니다.<br/>
나눈 나머지 발생 시 나머지 유효 여부를 지정합니다.
:::
<!-- -->

## 8. SRCD
단일 레코드를 여러 개의 멀티 레코드로 분리하는 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
분할기준은 여러 개의 컬럼을 기본 컬럼과 레코드에 개별로 분리할 컬럼들을 설정합니다.<br/>
SRD BOC와 다른 점은 SRD BOC는 값을 분할하는 방식이지만 SRCD BOC는 가로로 나열되어 있는 컬럼을 기준으로 여러 레코드로 분할 처리합니다.
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