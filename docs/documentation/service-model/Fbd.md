# FBD

<!-- FBD-->
<b style="font-size: 20px">1) FBD</b><br/>
특정 Format으로 구성된 파일을 생성하는 Component입니다.

<b style="font-size: 20px">(1) BOC 이미지</b><br/>
BOC 컴포넌트 목록에서 FBD BOC을 선택하여 Drag-Drop으로 화면작업 영역에 디자인합니다. <br/>
<img src="../../.vuepress\public\documentation\service-model\BOC\FileBOC\FBDBoc.png" style="position: relative;top: 5px; width:150px;"> <br/>
<p style="background-color: rgb(216, 190, 228);">데이터베이스의 데이터의 결과집합 중 GET의 조건 대상이 되는 컬럼 부를 표시</p>

<b style="font-size: 20px">(2) 속성</b><br/>
화면 작업창에서 FBD BOC 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br/>
<img src="../../.vuepress\public\documentation\service-model\BOC\FileBOC\Property(2).png" style="position: relative;top: 5px; width:200px;"> <br/>
<b style="font-size: 20px">➀ 기초정보 </b><br/>
- <b style="font-size: 20px">OBJECT명 </b><br/>
해당 BOC가 실행된 후 해당 결과 SET을 저장할 Value Object의 명을 지정합니다. 해당 Object의 결과 Set은 그리드 형식의 Object로 구성됩니다.<br/>

- <b style="font-size: 20px">논리명칭 </b><br/>
BOC가 어떤 동작을 수행하는지를 간단한 명칭으로 기술합니다. 해당 명칭을 처리 흐름을 간략하게 표현할 수 있도록 기술합니다.<br/>

- <b style="font-size: 20px">논리설명 </b><br/>
논리명칭으로 표현하기 부족할 때 좀 더 상세히 내용을 기술합니다.

<b style="font-size: 20px">➁ 입력부</b><br/>
- <b style="font-size: 20px">입력 OBJECT</b><br/>
추출 대상 데이터 Object 명을 선택합니다.

- <b style="font-size: 20px">파일생성유형</b><br/>
파일의 구성 형태를 선택합니다.

    Create  <br/>
    생성될 파일의 경로에 동일한 파일이 존재하면 Overwrite하여 재생성할 때 파일 생성 시 항상 신규 파일 형식으로 생성합니다.

    appenddata <br/>
    생성될 파일의 경로에 파일이 존재하지 않으면 신규 생성합니다. 해당 위치에 동일 파일명이 존재하게 되면 해당 파일의 내용에 신규 data row를 append시킵니다. <br/>
    파일이 존재하여 Append Data시 마지막 row 다음에 row를 추가합니다.

    appendseqname <br/>
    생성될 파일의 경로에 동일명의 파일이 존재하지 않으면 신규 생성합니다. 해당 위치에 동일 파일명이 존재하게 되면 파일명에서 확장자를 제거한 파일명에 “_” +순번을 추가하여 신규 파일을 생성합니다. <br/>
    즉 동일한 파일 존재 시 중복을 피하여 파일을 생성합니다.

- <b style="font-size: 20px">파일Layout</b><br/>
파일의 Layout Format을 설정합니다. <br/>
<img src="../../.vuepress\public\documentation\service-model\BOC\FileBOC\FBDExample.png" style="position: relative;top: 5px; width:400px;"> <br/>

    Column <br/>
    입력 Dataset Object에서 사용될 데이터 컬럼을 설정합니다. 또는 String 값을 입력하고 싶을 때에는 “문자열” 형식으로 입력하거나, Hex값을 입력하고 싶을 때에는 Java의 Hex 표현식으로 입력하여 사용할 수 있습니다. <br/>

    Length <br/>
    해당 컬럼의 데이터를 전송 레이아웃에 charcter length 만큼의 size로 전송됩니다. 즉 데이터의 길이가 5이고 length가 10일 때 전송은 10만큼의 영역에 데이터가 표현되어 전송됩니다. <br/>

    textAlign <br/>
    컬럼의 데이터를 해당 length 만큼의 영역으로 전송 시 우측/좌측 정렬할지를 지정합니다.<br/>
    L : Left , R:Right, D: Delimiter <br/>

    Delimiter <br/>
    컬럼과 컬럼의 분리문자 입력합니다. TextAlign의 값을 ‘D’ 값을 입력하면 Length 구성 형식은 무시되고 구분 형식을 분리 문자기준으로 처리합니다. <br/>

    SpaceChar <br/>
    데이터 영역 Length가 10이고 실제 Data의 길이가 10보다 작을 때 작은 길이만큼의 영역에 해당 문자 Char로 채우는 기능을 합니다. 예로 Data영역이 10이고 Data의 길이가 7일 때 spaceChar ‘*’로 설정되었다면 전송하는 데이터는 “1234567***” 형태로 전송합니다. <br/>


- <b style="font-size: 20px">파일ROW 길이</b><br/>
Length 설정에 따른 Layout Total 길이입니다.

- <b style="font-size: 20px">파일경로</b><br/>
생성 할 파일의 위치를 설정합니다.

- <b style="font-size: 20px">파일명</b><br/>
생성 할 파일명을 설정합니다.

- <b style="font-size: 20px">파일Charset</b><br/>
파일의 Charset를 입력합니다.

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
Default 접속 DB는 자동 설정됩니다. 추가로 다른 DB연결 명을 사용하여 데이터 처리의 필요성이 생기면 해당 정보에 접속 명을 등록하여 사용합니다.

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