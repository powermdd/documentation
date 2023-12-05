# Interface BOC

서비스 내부 호출 등의 인터페이스 구성요소입니다. <br/>
<img class="boxBorder" src="../../.vuepress\public\documentation\service-model\BOC\InterfaceBOC\InterfaceBOC.png" style="width:400px;"> <br/>

## 1. OSP
데이터베이스 Stored Procedure를 호출하는 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
호출되는 데이터베이스 Stored Procedure가 처리하고 Return하는 데이터셋은 단일 레코드셋만 허용합니다.<br/>
호출은 입력 데이터셋의 레코드 수만큼 해당 Stored Procedure를 호출합니다.
:::
<!-- -->

## 2. PEX
시스템 내부의 다른 서비스 또는 외부 시스템의 인터페이스(API)를 호출하는 처리를 수행하는 기능인 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
PEX BOC는 내부 호출의 경우 다른 메뉴에 속해 있는 서비스를 호출합니다.<br/>
외부 호출의 경우 시스템 외부에 존재 또는 타 시스템과 연동하기 위한 API를 호출합니다.
:::
<!-- -->

## 3. CMD
DB 테이블에 대한 Delete문을 처리하는 기능인 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
DEL BOC는 쿼리를 자동 생성하며 자동 생성에 필요한 속성을 설정합니다. <br/>
처리 이후 Object 컬럼인 UPDCNT 값으로 삭제 처리한 Record Count를 Return 처리합니다.
:::
<!-- -->