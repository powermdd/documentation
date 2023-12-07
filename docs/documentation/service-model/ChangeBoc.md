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
DB 테이블에 대한 Update 처리를 수행하는 기능인 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
UPD BOC는 쿼리를 자동 생성하며 자동 생성에 필요한 속성을 설정합니다.
:::
<!-- -->

## 5. ADD
DB 테이블에 대한 Update & Insert 처리를 수행하는 기능인 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
UNI BOC는 쿼리를 자동 생성하며 자동 생성에 필요한 속성을 설정합니다. <br/>
처리 방식은 Update 먼저 수행하고 수행결과가 0건이면 Insert를 처리합니다. 즉 UPD BOC, INS BOC를 결합 시킨 형태입니다. 
:::
<!-- -->

## 6. SUM
표준적인 SQL문장이 아닌 비정형적 SQL문장에 대한 처리를 수행하는 기능인 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
INS BOC, UPD BOC, DEL BOC는 속성 설정으로 쿼리를 자동 생성처리 하지만 XIUD BOC는 사용자가 직접 쿼리를 입력하여 사용하는 기능입니다.<br/>
예를 들면, PK를 수정하는 Update문이나 Insert문, Select문, Merge Into문 등을 사용자가 직접 입력하여 사용할 수 있습니다.
:::
<!-- -->

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