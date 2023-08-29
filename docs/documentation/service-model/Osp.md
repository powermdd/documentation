# OSP

<!-- OSP-->
<b style="font-size: 20px">1) OSP</b><br/>
Database Stored Procedure를 호출하는 Component입니다.
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
  호출되는 Database Stored Procedure 가 처리하고 Return 하는 Dataset은 단일 Record Set만 허용합니다. <br/>
   호출은 입력 Dataset의 Record수만큼 해당 Stored Procedure를 호출합니다.
:::
<!-- -->

<b style="font-size: 20px">(1) BOC 이미지</b><br/>
BOC 컴포넌트 목록에서 OSP BOC을 선택하여 Drag-Drop으로 화면작업 영역에 디자인합니다. <br/>
<img src="../../.vuepress\public\documentation\service-model\BOC\InterfaceBOC\OSPBoc.png" style="position: relative;top: 5px; width:150px;"> <br/>

<b style="font-size: 20px">(2) 속성</b><br/>
화면 작업창에서 OSP BOC 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br/>
<img src="../../.vuepress\public\documentation\service-model\BOC\InterfaceBOC\Property(2).png" style="position: relative;top: 5px; width:150px;"> <br/>
<b style="font-size: 20px">➀ 기초정보 </b><br/>
- <b style="font-size: 20px">OBJECT명 </b><br/>
해당 BOC가 실행된 후 해당 결과 SET을 저장할 Value Object의 명을 지정합니다. 해당 Object의 결과 Set은 그리드 형식의 Object로 구성됩니다.<br/>

- <b style="font-size: 20px">논리명칭 </b><br/>
BOC가 어떤 동작을 수행하는지를 간단한 명칭으로 기술합니다. 해당 명칭을 처리 흐름을 간략하게 표현할 수 있도록 기술합니다.<br/>

- <b style="font-size: 20px">논리설명 </b><br/>
논리명칭으로 표현하기 부족할 때 좀 더 상세히 내용을 기술합니다.

<b style="font-size: 20px">➁ 입력부</b><br/>
- <b style="font-size: 20px">Stored Procedure </b><br/>
Stored Procedure를 입력합니다.<br/>
입력형식은 func명(입력 파라미터, 출력 P파라미터) 으로 입력 파라미터는 입력하는 Data Type들로 구성되고, 출력 Parameter는 출력ID : Data Type 들로 구성됩니다. <br/>
<img src="../../.vuepress\public\documentation\service-model\BOC\InterfaceBOC\StoredProcedure.png" style="position: relative;top: 5px;"> <br/>
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
  함수명은 대소문자를 구분하므로 입력 시 주의해야 합니다.
  <p style="color: rgb(0, 164, 255);">
  Ex) SP_SAM2(VC, SAWONNM:VC, DEPTID:VC, SAWONNO:VC) <br/>
        SP_SAM2 : Stored Procedure 명 <br/>
        VC : Stored Procedure의 입력 파라미터입니다. 해당 파라미터는 아래 입력 파라미터와 일치해야 됩니다. <br/>
            SAWONNM:VC, DEPTID:VC, SAWONNO: Stored Procedure의 Output columns
  </p>
:::
<!-- -->
<img src="../../.vuepress\public\documentation\service-model\BOC\InterfaceBOC\Procedure.png" style="position: relative;top: 5px;"> <br/>
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
- <b style="font-size: 20px">DATA TYPE</b><br/>
     VC : varchar    INT : int     DOUBLE : double
- 프로시저 생성할 때 out이 없더라도 null값인 out을 하나 꼭 생성해야 합니다.
:::
<!-- -->

- <b style="font-size: 20px">입력 OBJECT </b><br/>
등록 할 입력 데이터 Object명을 입력합니다.

- <b style="font-size: 20px">입력 Parameter </b><br/>
입력 Object 중 입력할 컬럼을 지정한다. 컬럼 지정 시에는 Stored Procedure의 입력한다. Parameter의 개수와 Data Type에 맞는 입력 컬럼을 순서대로 지정해야 합니다.

- <b style="font-size: 20px">조건항목 </b><br/>
삭제 처리를 위해서 필요한 조건 컬럼 정보를 설정합니다.

<b style="font-size: 20px">➂ 출력부</b><br/>
- <b style="font-size: 20px">Column Scroll </b><br/>
해당 BOC 목록이 많을 때 true로 설정했을 때 Display Count에서 설정한 개수만큼 보여주고 나머지 목록은 ▲▼ 버튼으로 확인할 수 있습니다.

- <b style="font-size: 20px">Display Count </b><br/>
해당 BOC 목록이 많을 때 목록에 보이는 개수를 설정합니다.

- <b style="font-size: 20px">화면출력유형 </b><br/>
None: Default<br/>
Dataset : View Designer에서 그리드 컴포넌트에 조회 시 설정합니다. <br/>
Recode : JSP 출력방식일 때 단일 컴포넌트에 조회 시 설정합니다. <br/>
Page : JSP 출력방식일 때 페이징 시 설정합니다.<br/>
ChartLabel : View Designer에서 차트 컴포넌트에 범례를 설정합니다.<br/>
ChartData : View Designer에는 차트 컴포넌트에 데이터 조회 시 설정합니다. <br/>
Schedule : View Designer에서 스케줄 컴포넌트에 조회 시 설정합니다.<br/>

<b style="font-size: 20px">➃ 메시지부</b><br/>
- <b style="font-size: 20px">결과메시지 </b><br/>
해당 처리 결과에 대한 메시지를 Client. 즉, 호출자에게 보낼 필요가 있을 때 정의합니다.

<b style="font-size: 20px">➄ 선택항목</b><br/>
- <b style="font-size: 20px">Alias전송명 </b><br/>
전송하는 Object명의 Alias를 생성합니다.

- <b style="font-size: 20px">DB연결명 </b><br/>
Default 접속 DB는 자동 설정된. 추가로 다른 DB연결 명을 사용하여 데이터 처리의 필요성이 생기면 해당 정보에 접속 명을 등록하여 사용합니다.

- <b style="font-size: 20px">Log 수준 </b><br/>
Debug : 테스트 시에 로그 메시지를 정의할 수 있다. 데이터베이스 관련된 BOC는 ReturnData와 QueryData를 사용합니다.<br/>
ProcessHead : Seq번호, 프로세스 타입을 표시합니다.<br/>
InputData : 입력 데이터를 표시합니다.<br/>
ReturnData : 결과 데이터를 표시합니다.<br/>
Middle OutputData : 중간과정 결과 데이터를 표시합니다.<br/>
TabPage : 탭 페이지 결과를 표시합니다.<br/>
Math-Trace : Math의 계산식과 결과를 표시합니다.<br/>
Formula-Trace : Formula의 계산식과 결과를 표시합니다.<br/>
QueryData : 값이 포함된 쿼리를 표시합니다.<br/>
SCLTrace : SCLT BOC의 결과를 표시합니다.<br/>
PEX부가 Objects : PEX BOC의 부가적인 Object의 결과를 표시합니다.<br/>
미사용 : 조건 컬럼부의 계산식값을 표시합니다.<br/>

- <b style="font-size: 20px">실행 조건 </b><br/>
실행 조건에 값이 있는 경우 해당 실행 조건이 True가 아니면 실행이 되지 않습니다.