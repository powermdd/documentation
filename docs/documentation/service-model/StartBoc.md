# Start BOC

<img src="../../.vuepress\public\documentation\service-model\BOC\StartBOC\StartBOC.png" style="position: relative;top: 5px; width:25px; height:25px;"> Process에 업무 조건을 정의하고 실행, 테스트 데이터를 입력할 수 있는 기능을 제공합니다

<b style="font-size: 20px">1) Start Boc</b> <br/>
명칭은 Start Object or S Object라고 합니다. 서비스가 만들어진 동시에 Start Boc도 같이 생성됩니다. 
Start BOC는 Start Business Operation Component로 모델링에 사용되는 비즈니스 업무 구성요소에 시작점을 의미합니다.

<b style="font-size: 20px">2) Start BOC 사용법</b> <br/>

<b style="font-size: 20px">(1) Start BOC를 클릭하면 우측 속성의 화면입력에서 에디터 버튼을 클릭합니다.</b><br/>
<img src="../../.vuepress\public\documentation\service-model\BOC\StartBOC\Input.png" style="position: relative;top: 5px; width:300px;"> <br/>
<b style="font-size: 20px">(2) In/Out Dataset Assignment 창이 나오는데 여기서 테스트 시 필요한 입력정보를 설정하면 됩니다.</b> <br/>
<img src="../../.vuepress\public\documentation\service-model\BOC\StartBOC\In_OutAssignment.png" style="position: relative;top: 5px; width:500px;">

<b style="font-size: 20px">3) In/Out Dataset Assignment 창 초기 입력값 설정</b> <br/>
<img src="../../.vuepress\public\documentation\service-model\BOC\StartBOC\In_OutAssignment.png" style="position: relative;top: 5px; width:500px;"> <br/>
<b style="font-size: 20px">(1) Column 및 Recode 등록</b><br/>
화면에서 입력단위 Column 값을 Name행 또는 입력 값을 R0행에 더블 클릭한 후 입력할 수 있습니다. 
<img src="../../.vuepress\public\documentation\service-model\BOC\StartBOC\Column.png" style="position: relative;top: 5px; width:300px;">
- <b style="font-size: 20px">컬럼명 붙여넣기 </b> <br/>
아래 Query Developer 탭에 가서 DB를 접속하여 기본 Select문에 있는 Column을 복사하여 In/Out Dataset Assignment에 오른쪽 마우스 버튼을 클릭하여 컬럼명 붙여넣기를 클릭하여 입력할 수 있습니다.
- <b style="font-size: 20px">RECORD 붙여넣기 </b> <br/>
다른 Service에 Start Object에 등록되어있는 Record 값을 Ctrl + C로 복사하여 In/Out Dataset Assignment에 오른쪽 마우스 버튼을 클릭하여 RECODE 붙여넣기를 클릭하여 입력할 수 있습니다.
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
- <b style="font-size: 20px">Column 등록 </b><br/>
소문자로 입력했을 경우 자동으로 대문자로 변환이 됩니다.
- <b style="font-size: 20px">Recode 등록 </b><br/>
UI 화면에서 입력받은 컬럼값을 가정해서 테스트하기 위한 용도로 값을 입력합니다.

- 해당 View Designer에서 Build한 UI화면에 입력받은 컬럼값이 있다면 In/Out Dataset Assignment창 하단에 From Client 버튼을 클릭하여 자동으로 UI 화면에 입력받은 컬럼값이 등록이 되고 에러가 있을 경우 From Client:Error 버튼을 클릭하면 에러 메시지도 확인할 수 있습니다.
:::
<!-- -->

<b style="font-size: 20px">(2) Record 추가, 제거</b><br/>
- <b style="font-size: 20px">Record 추가</b><br/>
In/Out Dataset Assignment 창 상단에 Record Add 버튼을 클릭하여 Record를 추가할 수 있습니다.
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
각 컬럼 값이 여러 개일 때는 Record를 추가하여 테스트를 할 수 있습니다.
:::
<!-- -->
- <b style="font-size: 20px">Record 삭제</b><br/>
삭제할 Record를 클릭한 후 In/Out Dataset Assignment창 상단에 Record Del버튼을 클릭하여 Record를 삭제할 수 있습니다.

<b style="font-size: 20px">(3) 속성값 삭제</b><br/>
삭제할 해당 열을 선택하신 후 Delete키를 이용하여 해당 속성값을 삭제할 수 있습니다.

<b style="font-size: 20px">4) Dataset 정의</b> <br/>
Data 테이블 구조에 하나의 단위로 취급되는 여러 개의 Column으로 구성된 레코드의 집합을 의미합니다. (Default 값은 S Dataset이다.) <br/>
<img src="../../.vuepress\public\documentation\service-model\BOC\StartBOC\InOut.png" style="position: relative;top: 5px; width:300px;"> <br/>
<b style="font-size: 20px">(1) Dataset 추가</b><br/>
dataset 입력 칸에 생성할 dataset 명을 입력하고 Dataset Add버튼을 클릭하면 기존에 선택된 Dataset이 복사되어서 Dataset이 생성됩니다. <br/>
<b style="font-size: 20px">(2) Dataset 삭제</b><br/>
삭제할 dataset을 클릭하고 Dataset Del버튼을 클릭하면 해당 Dataset이 삭제됩니다.

<b style="font-size: 20px">5) Test Case 관리</b> <br/>
Data 테이블 구조에 하나의 단위로 취급되는 여러 개의 Column으로 구성된 레코드의 집합을 의미합니다. (Default 값은 S Dataset이다.) <br/>
<img src="../../.vuepress\public\documentation\service-model\BOC\StartBOC\Case.png" style="position: relative;top: 5px; width:400px;"><br/>
<b style="font-size: 20px">(1) Case 등록</b><br/>
선택된 Dataset이 입력받을 때 컬럼값을 입력하고 Case Name을 입력하여 Case Add버튼을 클릭하면 Test Case를 등록할 수 있습니다. <br/>
<b style="font-size: 20px">(2) Case 추가</b><br/>
Case를 추가하는 경우 컬럼값을 다른 값으로 수정하고 Case Name을 변경하여 Case Add버튼을 클릭하면 Test Case를 추가할 수 있습니다.
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
해당 Case를 선택할 때는 클릭이 아닌 더블 클릭하여 확인할 수 있습니다.
:::
<!-- -->
<b style="font-size: 20px">(3) Case 삭제</b><br/>
삭제할 Case명을 선택하고 Case Del버튼을 클릭하면 해당 Case명을 삭제할 수 있습니다.
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
 Case를 잘못 등록했을 경우 잘못 등록된 Case를 삭제하고 다시 등록해야합니다.
:::
<!-- -->