# Service Model 구성

<b style="font-size: 20px"> 1. 도구상자 </b> <br/>
save, build, test, source view, menu reload 등 POWER MDD에서 사용되는 각종 기능들을 제공한다.
<img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\ToolBox.png" style="position: relative;top: 5px;"> <br/>

<b style="font-size: 20px">1) <img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\Save.png" style="position: relative;top: 5px;"> (Save) </b> <br/>
업무서비스 Model 내용을 저장 처리한다.

<b style="font-size: 20px">2) <img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\ImageCapture.png" style="position: relative;top: 5px;"> (ImageCapture) </b> <br/>
Service Model 작업한 모델링을 bmp 파일 형식의 이미지로 Dump 하여 저장한다.

<b style="font-size: 20px">3) <img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\Logic_Physical.png" style="position: relative;top: 5px;"> (Logic / Physical) </b> <br/>
논리 모델과 물리 모델을 토글 방식으로 확인할 수 있다. 논리 모델은 휴먼 Interface 중심으로 표현되며 물리모델은 Compute Interface 중심으로 표현된다.

<b style="font-size: 20px">4) <img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\History(1).png" style="position: relative;top: 5px;"> (History) </b> <br/>
서비스의 변경 및 Build 이력을 확인하고 과거 작업 상태로 모델링 작업화면을 Rollback 하여 확인할 수 있도록 지원한다.<br/>
<b style="font-size: 20px"><img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\History(2).png" style="position: relative;top: 5px;"></b> <br/>
* 최근 변경일자 기준으로 확인이 가능하다. 빌드 수행 시에 빌드된 일자와 작업자 확인이 가능하다.
* Select 버튼 클릭시 선택한 일자의 이력을 화면 작업 영역에 로딩한다.

<b style="font-size: 20px">5) <img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\ServiceReload.png" style="position: relative;top: 5px;"> (Service Reload) </b> <br/>
현재 저장이 되어 있는 서비스 모델을 다시 로딩 처리한다.

<b style="font-size: 20px">6) <img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\Test_NotCommit.png" style="position: relative;top: 5px;"> (Test:NotCommit) </b> <br/>
Model 테스트를 수행한다. 수행 후에 해당 Model에서 처리한 Database Transaction을 rollback 처리하여 반복 테스트를 수행할 수 있도록 지원한다. 테스트시에 출력되는 Trace Log의 내용은 해당 서비스별로 정의가 되어있는 로그 수준을 지정하여 확인할 수 있다.

<b style="font-size: 20px">7) <img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\TestExecute.png" style="position: relative;top: 5px;"> (Test Execute) </b> <br/>
Model 테스트를 수행한다.  <img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\Test_NotCommit.png" style="position: relative;top: 5px;">(Test:NotCommit)방법과 동일하다. Database Transaction을 반영한다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
<img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\Test_NotCommit.png" style="position: relative;top: 5px;"> 버튼과 <img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\TestExecute.png" style="position: relative;top: 5px;"> 버튼의 차이점<br/>
<img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\Test_NotCommit.png" style="position: relative;top: 5px;"> : 테스트 Debugging으로 해당 서비스를 실행하지만 데이터에는 반영하지 않습니다.<br/>
<img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\TestExecute.png" style="position: relative;top: 5px;"> : 테스트 Debugging으로 해당 서비스를 실행하고 결과를 데이터베이스에 반영합니다.
:::
<!-- -->

<b style="font-size: 20px">8) <img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\ClassExecute).png" style="position: relative;top: 5px;"> (Class Execute) </b> <br/>
Mode 클래스를 수행한다. 수행 후에 해당 Model에서 처리한 Database Transaction을 반영한다.

<b style="font-size: 20px">9) <img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\build.png" style="position: relative;top: 5px;"> (build) </b> <br/>
Service Model에서 작업한 모델링으로 자바 소스를 생성하고 해당 자바 소스를 컴파일 수행한다.

<b style="font-size: 20px">10) <img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\SourceView(1).png" style="position: relative;top: 5px;"> (Source View) </b> <br/>
빌드한 소스의 내용을 확인할 수 있다. 관련 자바 파일을 확인할 수 있는 Viewer을 제공한다. 소스는 Spring 관련 자바 소스와 Ibatis/Mybatis 형식의 의 소스 생성 형식에서 지정한다. <br/>
<img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\SourceView(2).png" style="position: relative;top: 5px;">

<b style="font-size: 20px">11) <img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\SourceCopy.png" style="position: relative;top: 5px;"> (Source Copy) </b> <br/>
모델 작업 중 유사한 모델 서비스를 복사, 편집 사용하고자 할 때 이용하면 편리하게 사용할 수 있는 기능이다. 현재 모델 서비스의 정보를 복사한다.

<b style="font-size: 20px">12) <img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\ServicePaste.png" style="position: relative;top: 5px;"> (Service Paste) </b> <br/>
복사한 서비스를 현재 오픈이 되어 있는 서비스에 붙여넣기 한다.

<b style="font-size: 20px">13) <img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\MenuSearch.png" style="position: relative;top: 5px;"> (Menu Search) </b> <br/>
Service Model에 사용된 여러 가지 정보를 기준으로 검색할 수 있는 기능을 제공한다. <br/>
<b style="font-size: 20px">(1)IUD BOC</b> <br/>
모델에서 사용하는 Database BOC 중 쿼리를 직접 입력하지 않고 DML을 생성해주는 BOC을 대상으로 검색 기능을 제공한다. <br/>
<b style="font-size: 20px"><img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\IUDBOC.png" style="position: relative;top: 5px;" width="200px;" height="200px;"> </b>

- <b style="font-size: 20px"> IUD</b> <br/>
각 BOC별 아래 SCHEMA, TABLE, COLUMNS에 해당하는 Keyword를 기준으로 Insert, update, delete를 사용한 서비스를 검색한다.

- <b style="font-size: 20px"> SCHEMA, TABLE, COLUMNS</b> <br/>
각 BOC별 아래 SCHEMA, TABLE, COLUMNS에 해당하는 Keyword를 기준으로 Insert, update, delete를 사용한 서비스를 검색한다.

- <b style="font-size: 20px"> OK</b> <br/>
각 기능별로 검색한 결과의 대상 메뉴를 Service Model의 화면 메뉴 구조 영역에 표시된다.

- <b style="font-size: 20px">(2) Query BOC</b> <br/>
모델에서 사용하는 Database BOC 중 Query를 직접 입력하여 사용하는 BOC을 대상으로 검색 기능을 제공한다. <br/>
<img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\QueryBOC.png" style="position: relative;top: 5px;" width="350px;" height="200px;">

- <b style="font-size: 20px"> KEYWORD</b> <br/>
사용된 Query Syntax 내 해당 Keyword와 일치하는 서비스를 검색한다. 여러 Keyword를 사용하고자 할 때는 ‘,’로 구분하여 다중 Keyword를 사용할 수 있다.

- <b style="font-size: 20px"> OR</b> <br/>
다중 Keyword 사용시 각 Keyword 간에 “AND” 조건 또는 “OR” 조건을 설정하여 검색하도록 지원한다.

- <b style="font-size: 20px"> OK</b> <br/>
각 기능별로 검색한 결과의 대상 메뉴를 Service Model의 화면 메뉴 구조 영역에 표시된다.

<b style="font-size: 20px">(3) PEX BOC</b> <br/>
모델에서 사용하는 Interface BOC 중 PEX를 대상으로 검색 기능을 제공한다. PEX는 공통기능을 호출하여 사용함으로 공통기능의 변화에 따른 영향을 확인하고자 할 때 사용하면 편리하다. <br/>
<img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\PEXBOC.png" style="position: relative;top: 5px;" width="350px;" height="300px;">

- <b style="font-size: 20px"> PEX</b> <br/>
Package, Class, Method에 해당하는 Keyword를 기준으로 PEX를 사용한 서비스를 검색한다.

- <b style="font-size: 20px"> PEX-Called</b> <br/>
Package, Class, Method에 해당하는 Keyword를 기준으로 PEX가 호출하여 사용되는 서비스를 검색한다.

<b style="font-size: 20px">(4) Class Search</b> <br/>
모델에서 사용하는 Class 정보를 대상으로 검색 기능을 제공한다. <br/>
<img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\ClassSearch.png" style="position: relative;top: 5px;" width="400px;" height="250px;">

- <b style="font-size: 20px"> Search</b> <br/>
해당 Class정보를 대상으로 검색한다.

<b style="font-size: 20px">(5) Menu Event</b> <br/>
모델에서 사용하는 Menu ID와 Service ID 정보를 대상으로 검색 기능을 제공한다. <br/>
<img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\MenuEvent.png" style="position: relative;top: 5px;" width="400px;" height="250px;">

<b style="font-size: 20px">(6) Exception</b> <br/>
검색한 날짜로 모델에서 작업한 서비스에서 오류 났던 메시지를 확인할 수 있다. <br/>
<img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\Exception.png" style="position: relative;top: 5px;" width="500px;" height="300px;">

<b style="font-size: 20px">14. <img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\MenuReload.png" style="position: relative;top: 5px;"> (Menu Reload)</b> <br/>
<img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\MenuReload.png" style="position: relative;top: 5px;">(Menu Search) 기능 또는  <img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\recycle.png" style="position: relative;top: 5px;">(recycle) 기능을 사용한 후 화면 메뉴 구조 영역을 reload하고자 할 때 사용한다.

<b style="font-size: 20px">15) <img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\recycle.png" style="position: relative;top: 5px;"> (recycle) </b> <br/>
휴지통 기능으로 영구삭제 처리하지 않은 서비스는 화면 메뉴 구조 영역의 휴지통 메뉴에서 서비스 복원이 가능하다.

<b style="font-size: 20px">16) <img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\TableDictionary(1).png" style="position: relative;top: 5px;"> (Table Dictionary) </b> <br/>
Data Column Dictionary를 Database Table로부터 추출하여 일괄 저장할 수 있는 기능을 제공한다. 해당 기능은 oracle, postgresql Database 이외일 때에는 지원 가능 여부 확인 필요하다. <br/>

<b style="font-size: 20px">(1) Conn. ID</b> <br/>
대상 Schema(Conn. ID) 입력 후 Table List 버튼을 클릭하면 생성이 되어 있는 테이블 목록이 나온다. <br/>

<b style="font-size: 20px">(2) ColumnList</b> <br/>
테이블 목록에서 확인하고자 하는 테이블을 체크 후 ColumnList 버튼을 클릭하면 선택한 테이블의 컬럼 정보와 Data Dictionary에 등록이 되어 있는 정보를 매핑하여 보여준다. 컬럼명은 데이터베이스 시스템에 등록이 되어 있는 Comment이며 논리명은 Data Dictionary에 등록이 되어 있는 명칭이다. <br/>

<b style="font-size: 20px">(3) Not SaveList</b> <br/>
Data Dictionary에 등록되어 있지 않는 컬럼을 보여준다. 등록되지 않는 컬럼은 논리명이 공백이다.<br/>

<b style="font-size: 20px">(4) Excel Load</b> <br/>
Excel 파일에 등록이 되어 있는 컬럼을 생성한다. 자세한 방법은 Excel Help 버튼을 클릭하여 확인할 수 있다.<br/>

<b style="font-size: 20px">(5) Excel Help </b> <br/>
Excel Load 버튼에 대한 도움말 창을 열어준다.<br/>

<b style="font-size: 20px">(6) Save</b> <br/>
논리명이 등록되어 있지 않는 컬럼을 찾아서 해당 컬럼을 Data Dictionary에 등록한다. 만일 Database Comment가 지정되어 있지 않을 시에는 그리드의 논리명에 사용자가 직접 에디트하여 입력하고 등록하면 된다.<br/>

<b style="font-size: 20px">(7) Close</b> <br/>
Data Dictionary 창을 닫는다.<br/>

<b style="font-size: 20px">(8) All Cancel</b> <br/>
체크가 되어 있는 테이블 목록을 체크 해제한다.<br/>

<b style="font-size: 20px">(9) All Select</b> <br/>
테이블 목록을 전체 체크한다.<br/>

<b style="font-size: 20px">17) <img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\ColumnDictionary(1).png" style="position: relative;top: 5px;"> (Column Dictionary) </b> <br/>
Column Dictionary 관리화면으로 검색, 신규생성, 수정, 삭제 기능을 제공한다.

<b style="font-size: 20px">18) <img src="../../.vuepress\public\documentation\service-model\Structure\Tool_Box\ServicePaste.png" style="position: relative;top: 5px;"> (Service Paste) </b> <br/>
복사한 서비스를 현재 오픈이 되어 있는 서비스에 붙여넣기 한다.