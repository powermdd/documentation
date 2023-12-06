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
WAS가 설치되어 있는 서버 시스템의 실행 파일을 실행하여 결과를 Return 받는 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
단 실행 결과는 처리 결과 코드와 실행 시 Display되는 Shutout 메시지를 String 형태로 return합니다.<br/>
Unix의 파일이나 Window의 bat 형태의 파일을 실행하여 활용할 수도 있습니다.<br/>
CMD BOC 실행 후 결과는 UPDCNT, UPDMSG 컬럼으로 결과값이 저장됩니다.

UPDCNT : 확인KEYWORD가 UPDMSG에 존재하면 1 아니면 0이 저장됩니다.<br/>
UPDMSG : 해당 CMD가 실행되면서 발생하는 메시지 내용이 저장됩니다.<br/>
:::
<!-- -->