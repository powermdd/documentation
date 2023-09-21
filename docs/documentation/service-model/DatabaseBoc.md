# Database BOC

Select, insert, delete 등 데이터베이스와 관련된 구성요소입니다. <br/>
<img class="boxBorder" src="../../.vuepress\public\documentation\service-model\BOC\DataBaseBOC\DataBaseBOC.png" style="width:400px;"> <br/>

## 1. SEL
DB Table에 대한 Select문을 처리하는 기능인 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
SEL-BOC는 Toad 등의 Query Tool에서 미리 작성된 SQL query를 복사해서 입력하는 방식으로 사용합니다.
:::
<!-- -->

## 2. INS
DB Table에 대한 Insert 처리를 수행하는 기능인 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
INS-BOC는 Query를 자동 생성하며 자동 생성에 필요한 속성을 설정합니다.
:::
<!-- -->

## 3. DEL
DB Table에 대한 Delete처리를 수행하는 기능인 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
DEL BOC는 Query를 자동 생성하며 자동 생성에 필요한 속성을 설정합니다. <br/>
처리 이후 Object Column인 UPDCNT 값으로 삭제 처리한 Record Count를 Return 처리합니다.
:::
<!-- -->

## 4. UPD
DB Table에 대한 Update 처리를 수행하는 기능인 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
UPD-BOC는 Query를 자동 생성하며 자동 생성에 필요한 속성을 설정합니다.
:::
<!-- -->

## 5. UNI
DB Table에 대한 Update & Insert 처리를 수행하는 기능인 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
UNI-BOC는 Query를 자동 생성하며 자동 생성에 필요한 속성을 설정합니다. <br/>
처리 방식은 Update 먼저 수행하고 수행결과가 0건이면 Insert를 처리합니다. 즉 UPD, INS BOC를 결합 시킨 형태입니다. 
:::
<!-- -->

## 6. XIUD
표준적인 SQL문장이 아닌 비정형적 SQL문장에 대한 처리를 수행하는 기능인 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
INS , UPD, DEL는 속성 설정으로 쿼리를 자동 생성처리 하지만 XIUD는 사용자가 직접 쿼리를 입력하여 사용하는 기능입니다.<br/>
예를 들면, PK를 수정하는 update문이나 Insert문, Select문, Merge Into문 등을 사용자가 직접 입력해서 사용합니다.
:::
<!-- -->

## 7. SET
입력 Object의 레코드들을 대상으로 Select 조건을 생성하여 필요한 Element를 덧붙이는 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
입력 Object의 레코드의 특정 컬럼을 조건 값으로 하여 입력 레코드 수만큼 Select문이 실행됩니다. 

<span class="spanEx"> Ex) 입력된 Dataset Object Column에 부서코드가 없다면, 해당 데이터셋에 사원의 부서코드를 조회하여 데이터셋에 DEPARTMENTID를 ADD할 수 있는 기능을 제공합니다. </span>
:::
<!-- -->

## 8. RBK
연결된 데이터베이스에 Rollback Command를 실행하는 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
RBK-BOC는 쿼리를 자동 생성하며 자동 생성에 필요한 속성을 설정합니다.
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