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
입력 Object의 레코드들을 대상으로 Select 조건을 생성하여 필요한 Element를 덧붙이는 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
입력 Object의 레코드의 특정 컬럼을 조건 값으로 하여 입력 레코드 수만큼 Select문이 실행됩니다. <br/>
<span class="spanEx"> Ex) 입력된 데이터셋 Object 컬럼에 DEPT_ID 컬럼이 없다면, 해당 데이터셋에 해당 DEPT_ID 컬럼을 조회하여 데이터셋에 DEPT_ID 컬럼을 ADD할 수 있는 기능을 제공합니다. </span>
:::
<!-- -->

## 8. SRCD
연결된 데이터베이스에 Rollback Command를 실행하는 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
RBK BOC는 쿼리를 자동 생성하며 자동 생성에 필요한 속성을 설정합니다.
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