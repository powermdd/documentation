<template><div><h1 id="service-model-구성" tabindex="-1"><a class="header-anchor" href="#service-model-구성" aria-hidden="true">#</a> Service Model 구성</h1>
<p>save, build, test, source view, menu reload 등 POWER MDD에서 사용되는 각종 기능들을 제공합니다.
<img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/ToolBox.png" style="position: relative;top: 5px;"> <br/></p>
<p><b style="font-size: 20px">1) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/Save.png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (Save) </b> <br/>
업무서비스 Model 내용을 저장 처리합니다.</p>
<p><b style="font-size: 20px">2) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/ImageCapture.png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (ImageCapture) </b> <br/>
Service Model 작업한 모델링을 bmp 파일 형식의 이미지로 Dump 하여 저장합니다.</p>
<p><b style="font-size: 20px">3) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/Logic_Physical.png" style="position: relative;top: 5px;"> (Logic / Physical) </b> <br/>
논리 모델과 물리 모델을 토글 방식으로 확인할 수 있습니다. 논리 모델은 휴먼 Interface 중심으로 표현되며 물리모델은 Compute Interface 중심으로 표현됩니다.</p>
<p><b style="font-size: 20px">4) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/History(1).png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (History) </b> <br/>
서비스의 변경 및 Build 이력을 확인하고 과거 작업 상태로 모델링 작업화면을 Rollback 하여 확인할 수 있도록 지원합니다.<br/>
<b style="font-size: 20px"><img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/History(2).png" style="position: relative;top: 5px;"></b> <br/></p>
<ul>
<li>최근 변경일자 기준으로 확인이 가능합니다. 빌드 수행 시에 빌드된 일자와 작업자 확인이 가능합니다.</li>
<li>Select 버튼 클릭시 선택한 일자의 이력을 화면 작업 영역에 로딩합니다.</li>
</ul>
<p><b style="font-size: 20px">5) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/ServiceReload.png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (Service Reload) </b> <br/>
현재 저장이 되어 있는 서비스 모델을 다시 로딩 처리합니다.</p>
<p><b style="font-size: 20px">6) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/Test_NotCommit.png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (Test:NotCommit) </b> <br/>
Model 테스트를 수행합니다. 수행 후에 해당 Model에서 처리한 Database Transaction을 rollback 처리하여 반복 테스트를 수행할 수 있도록 지원합니다. 테스트시에 출력되는 Trace Log의 내용은 해당 서비스별로 정의가 되어있는 로그 수준을 지정하여 확인할 수 있습니다.</p>
<p><b style="font-size: 20px">7) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/TestExecute.png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (Test Execute) </b> <br/>
Model 테스트를 수행합니다.  <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/Test_NotCommit.png" width="25px;" height="25px;" style="position: relative;top: 5px;">(Test:NotCommit)방법과 동일합니다. Database Transaction을 반영합니다.</p>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p><img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/Test_NotCommit.png"> 버튼과 <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/TestExecute.png" style="position: relative;top: 5px;"> 버튼의 차이점<br/>
<img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/Test_NotCommit.png" style="position: relative;top: 5px;"> : 테스트 Debugging으로 해당 서비스를 실행하지만 데이터에는 반영하지 않습니다.<br/>
<img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/TestExecute.png" style="position: relative;top: 5px;"> : 테스트 Debugging으로 해당 서비스를 실행하고 결과를 데이터베이스에 반영합니다.</p>
</div>
<!-- -->
<p><b style="font-size: 20px">8) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/ClassExecute).png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (Class Execute) </b> <br/>
Mode 클래스를 수행합니다. 수행 후에 해당 Model에서 처리한 Database Transaction을 반영합니다.</p>
<p><b style="font-size: 20px">9) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/build.png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (build) </b> <br/>
Service Model에서 작업한 모델링으로 자바 소스를 생성하고 해당 자바 소스를 컴파일 수행합니다.</p>
<p><b style="font-size: 20px">10) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/SourceView(1).png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (Source View) </b> <br/>
빌드한 소스의 내용을 확인할 수 있습니다. 관련 자바 파일을 확인할 수 있는 Viewer을 제공합니다. 소스는 Spring 관련 자바 소스와 Ibatis/Mybatis 형식의 의 소스 생성 형식에서 지정합니다. <br/>
<img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/SourceView(2).png" style="position: relative;top: 5px;"></p>
<p><b style="font-size: 20px">11) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/SourceCopy.png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (Source Copy) </b> <br/>
모델 작업 중 유사한 모델 서비스를 복사, 편집 사용하고자 할 때 이용하면 편리하게 사용할 수 있는 기능입니다. 현재 모델 서비스의 정보를 복사합니다.</p>
<p><b style="font-size: 20px">12) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/ServicePaste.png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (Service Paste) </b> <br/>
복사한 서비스를 현재 오픈이 되어 있는 서비스에 붙여넣기 합니다.</p>
<p><b style="font-size: 20px">13) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/MenuSearch.png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (Menu Search) </b> <br/>
Service Model에 사용된 여러 가지 정보를 기준으로 검색할 수 있는 기능을 제공합니다. <br/>
<b style="font-size: 20px">(1)IUD BOC</b> <br/>
모델에서 사용하는 Database BOC 중 쿼리를 직접 입력하지 않고 DML을 생성해주는 BOC을 대상으로 검색 기능을 제공합니다. <br/>
<b style="font-size: 20px"><img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/IUDBOC.png" style="position: relative;top: 5px;" width="200px;" height="200px;"> </b></p>
<ul>
<li>
<p><b style="font-size: 20px"> IUD</b> <br/>
각 BOC별 아래 SCHEMA, TABLE, COLUMNS에 해당하는 Keyword를 기준으로 Insert, update, delete를 사용한 서비스를 검색합니다.</p>
</li>
<li>
<p><b style="font-size: 20px"> SCHEMA, TABLE, COLUMNS</b> <br/>
각 BOC별 아래 SCHEMA, TABLE, COLUMNS에 해당하는 Keyword를 기준으로 Insert, update, delete를 사용한 서비스를 검색합니다.</p>
</li>
<li>
<p><b style="font-size: 20px"> OK</b> <br/>
각 기능별로 검색한 결과의 대상 메뉴를 Service Model의 화면 메뉴 구조 영역에 표시됩니다.</p>
</li>
<li>
<p><b style="font-size: 20px">(2) Query BOC</b> <br/>
모델에서 사용하는 Database BOC 중 Query를 직접 입력하여 사용하는 BOC을 대상으로 검색 기능을 제공합니다. <br/>
<img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/QueryBOC.png" style="position: relative;top: 5px;" width="350px;" height="200px;"></p>
</li>
<li>
<p><b style="font-size: 20px"> KEYWORD</b> <br/>
사용된 Query Syntax 내 해당 Keyword와 일치하는 서비스를 검색합니다. 여러 Keyword를 사용하고자 할 때는 ‘,’로 구분하여 다중 Keyword를 사용할 수 있습니다.</p>
</li>
<li>
<p><b style="font-size: 20px"> OR</b> <br/>
다중 Keyword 사용시 각 Keyword 간에 “AND” 조건 또는 “OR” 조건을 설정하여 검색하도록 지원합니다.</p>
</li>
<li>
<p><b style="font-size: 20px"> OK</b> <br/>
각 기능별로 검색한 결과의 대상 메뉴를 Service Model의 화면 메뉴 구조 영역에 표시됩니다.</p>
</li>
</ul>
<p><b style="font-size: 20px">(3) PEX BOC</b> <br/>
모델에서 사용하는 Interface BOC 중 PEX를 대상으로 검색 기능을 제공합니다. PEX는 공통기능을 호출하여 사용함으로 공통기능의 변화에 따른 영향을 확인하고자 할 때 사용하면 편리합니다. <br/>
<img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/PEXBOC.png" style="position: relative;top: 5px;" width="350px;" height="300px;"></p>
<ul>
<li>
<p><b style="font-size: 20px"> PEX</b> <br/>
Package, Class, Method에 해당하는 Keyword를 기준으로 PEX를 사용한 서비스를 검색합니다.</p>
</li>
<li>
<p><b style="font-size: 20px"> PEX-Called</b> <br/>
Package, Class, Method에 해당하는 Keyword를 기준으로 PEX가 호출하여 사용되는 서비스를 검색합니다.</p>
</li>
</ul>
<p><b style="font-size: 20px">(4) Class Search</b> <br/>
모델에서 사용하는 Class 정보를 대상으로 검색 기능을 제공합니다. <br/>
<img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/ClassSearch.png" style="position: relative;top: 5px;" width="400px;" height="250px;"></p>
<ul>
<li><b style="font-size: 20px"> Search</b> <br/>
해당 Class정보를 대상으로 검색합니다.</li>
</ul>
<p><b style="font-size: 20px">(5) Menu Event</b> <br/>
모델에서 사용하는 Menu ID와 Service ID 정보를 대상으로 검색 기능을 제공합니다. <br/>
<img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/MenuEvent.png" style="position: relative;top: 5px;" width="400px;" height="250px;"></p>
<p><b style="font-size: 20px">(6) Exception</b> <br/>
검색한 날짜로 모델에서 작업한 서비스에서 오류 났던 메시지를 확인할 수 있습니다. <br/>
<img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/Exception.png" style="position: relative;top: 5px;" width="500px;" height="300px;"></p>
<p><b style="font-size: 20px">14. <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/MenuReload.png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (Menu Reload)</b> <br/>
<img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/MenuReload.png" width="25px;" height="25px;" style="position: relative;top: 5px;">(Menu Search) 기능 또는  <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/recycle.png" width="25px;" height="25px;" style="position: relative;top: 5px;">(recycle) 기능을 사용한 후 화면 메뉴 구조 영역을 reload하고자 할 때 사용합니다.</p>
<p><b style="font-size: 20px">15) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/recycle.png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (recycle) </b> <br/>
휴지통 기능으로 영구삭제 처리하지 않은 서비스는 화면 메뉴 구조 영역의 휴지통 메뉴에서 서비스 복원이 가능합니다.</p>
<p><b style="font-size: 20px">16) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/TableDictionary(1).png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (Table Dictionary) </b> <br/>
Data Column Dictionary를 Database Table로부터 추출하여 일괄 저장할 수 있는 기능을 제공합니다. 해당 기능은 oracle, postgresql Database 이외일 때에는 지원 가능 여부 확인 필요합니다. <br/></p>
<p><b style="font-size: 20px">(1) Conn. ID</b> <br/>
대상 Schema(Conn. ID) 입력 후 Table List 버튼을 클릭하면 생성이 되어 있는 테이블 목록이 나옵니다. <br/></p>
<p><b style="font-size: 20px">(2) ColumnList</b> <br/>
테이블 목록에서 확인하고자 하는 테이블을 체크 후 ColumnList 버튼을 클릭하면 선택한 테이블의 컬럼 정보와 Data Dictionary에 등록이 되어 있는 정보를 매핑하여 보여준다. 컬럼명은 데이터베이스 시스템에 등록이 되어 있는 Comment이며 논리명은 Data Dictionary에 등록이 되어 있는 명칭입니다. <br/></p>
<p><b style="font-size: 20px">(3) Not SaveList</b> <br/>
Data Dictionary에 등록되어 있지 않는 컬럼을 보여준다. 등록되지 않는 컬럼은 논리명이 공백입니다.<br/></p>
<p><b style="font-size: 20px">(4) Excel Load</b> <br/>
Excel 파일에 등록이 되어 있는 컬럼을 생성합니다. 자세한 방법은 Excel Help 버튼을 클릭하여 확인할 수 있습니다.<br/></p>
<p><b style="font-size: 20px">(5) Excel Help </b> <br/>
Excel Load 버튼에 대한 도움말 창을 열어준다.<br/></p>
<p><b style="font-size: 20px">(6) Save</b> <br/>
논리명이 등록되어 있지 않는 컬럼을 찾아서 해당 컬럼을 Data Dictionary에 등록합니다. 만일 Database Comment가 지정되어 있지 않을 시에는 그리드의 논리명에 사용자가 직접 에디트하여 입력하고 등록하면 됩니다.<br/></p>
<p><b style="font-size: 20px">(7) Close</b> <br/>
Data Dictionary 창을 닫습니다.<br/></p>
<p><b style="font-size: 20px">(8) All Cancel</b> <br/>
체크가 되어 있는 테이블 목록을 체크 해제합니다.<br/></p>
<p><b style="font-size: 20px">(9) All Select</b> <br/>
테이블 목록을 전체 체크합니다.<br/></p>
<p><b style="font-size: 20px">17) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/ColumnDictionary(1).png"  width="25px;" height="25px;" style="position: relative;top: 5px;"> (Column Dictionary) </b> <br/>
Column Dictionary 관리화면으로 검색, 신규생성, 수정, 삭제 기능을 제공합니다. <br/>
<img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/ColumnDictionary(2).png" style="position: relative;top: 5px;"></p>
<p><b style="font-size: 20px">(1) 검색</b> <br/>
<b style="font-size: 20px">① 콤보박스(Column, DATA-TYPE, Label)</b> <br/>
찾고자 하는 키워드의 관련된 구분을 클릭합니다. <br/>
<b style="font-size: 20px">② 입력 창</b> <br/>
키워드를 입력하면 관련된 부분으로 이동합니다.</p>
<p><b style="font-size: 20px">(2) Data Description Change</b> <br/>
<b style="font-size: 20px">① Column</b> <br/>
POWER MDD에서 사용하는 Column을 등록합니다. <br/></p>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p><b style="font-size: 20px">Event API </b><br/>
해당 Data Dictionary는 중복되어 사용될 수 없습니다. 보통은 Database에서 설계 시 Column에 대한 설계 오류가 있을 때 종종 발생합니다. 동일한 명칭은 동일한 의미를 가져야 합니다. 동일한 Column이 Table마다 다른 의미로 사용되면 안 됩니다.</p>
</div>
<!-- -->
<p><b style="font-size: 20px">② DATATYPE</b> <br/>
POWER MDD에서 사용하는 Column을 등록합니다. <br/>
종류는 VARCHAR, NUMBER. INTEGER, BLOB, CLOB, LONG, NULL, LIST가 있습니다.<br/>
<b style="font-size: 20px">➂ Label</b> <br/>
해당 Column의 논리 명칭을 입력합니다. <br/>
<b style="font-size: 20px">➃ Length</b> <br/>
해당 Column Data Type의 길이를 입력합니다.<br/>
<b style="font-size: 20px">➄ UI-Format</b> <br/>
View Designer에 Format과 연동합니다. <br/>
<b style="font-size: 20px">➅ Classification</b> <br/>
해당 Column의 분류를 입력합니다. <br/>
<b style="font-size: 20px">➆ Comment</b> <br/>
해당 Column의 부연 설명이 필요할 때 입력합니다. <br/></p>
<p><b style="font-size: 20px">18) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/NameRule.png"  width="25px;" height="25px;" style="position: relative;top: 5px;"> (Name Rule) </b> <br/>
Package나 Class, Database 등의 Name 규칙을 설정합니다.<br/></p>
<p><b style="font-size: 20px">(1) Package Name Rule</b> <br/>
Java Package Name 규칙을 등록합니다. <br/></p>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p><b style="font-size: 20px">Name Rule 규칙 </b><br/></p>
<ul>
<li>Package Name Rule 분류 구분자 “.”을 기준으로 “*”를 사용하여 범위를 지정합니다.</li>
<li>“*” 분류부터 사용자 Name 지정이 가능합니다.
Ex. Name1.Name2.*을 등록하는 경우 “Name1.Name2.” 으로 시작되는 Package 등록이 허용됩니다.
Ex. NameA.NameB.NameC을 등록하는 경우 “NameA.NameB.NameC” Package만 허용이 됩니다.</li>
<li>“*” 없이 모든 Package를 등록하게 되면 정해진 Package 이외는 사용 불가</li>
<li>주의사항 : 잘못하면 오류메시지가 뜬다.</li>
</ul>
</div>
<!-- -->
<p><b style="font-size: 20px">(2) Single Name Rule</b> <br/>
Java Class Name Rule와 Method Name Rule을 지정할 수 있습니다. <br/>
지정 방법은 접두어와 접미어를 정의하여 해당 규칙이 허용되는 명칭만 사용 가능합니다.</p>
<p><b style="font-size: 20px">➀ Prefix : 해당 접두어로 입력합니다.</b> <br/></p>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<ul>
<li>해당 접두어로 시작하는 문자열을 허용합니다.</li>
<li>모두 허용 시 “*” 를 지정하면 됩니다.</li>
</ul>
</div>
<!-- -->
<p><b style="font-size: 20px">➁ Suffix : 해당 접미어로 입력합니다.</b> <br/></p>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<ul>
<li>해당 접미어로 종료하는 문자열을 허용합니다.</li>
<li>모두 허용 시 “*” 를 지정하면 됩니다.</li>
</ul>
</div>
<!-- -->
<p><b style="font-size: 20px">(3) DataBase Connection Name</b> <br/>
해당 업무에서 사용될 Database Connection Name을 등록 관리합니다.
일반적으로 해당 정보는 POWER MDD-BMS 관리자가 등록해주어야 합니다.
실질적으로 사용할 데이터베이스의 연결정보는 BMS Config의 Database Resource에 등록이 되어 있는 Name 정보를 사용해야 합니다.
DX에서 서버가 정의 되어 있는 Database Resource 중 해당 프로젝트에서 사용될 Name 정보만 등록하면 됩니다. 등록된 이름은 Query Developer와 Service Model 그리고 Data Model 중 기본 데이터베이스가 아닌 별도의 데이터베이스 지정이 필요할 때 사용됩니다. <br/>
<img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/dbConnection.png" style="position: relative;top: 5px; width:300px"></p>
<p><b style="font-size: 20px">(4) DataBase Schema Name</b> <br/>
해당 명칭은 Service Model의 BOC(Business Operation Component) 중에서 데이터베이스 조작 언어 중 스키마 정보를 설정하는 속성에 표현됩니다. <br/>
사용자 편의성을 높여주고 사용자로부터 오입력 및 잘못된 값의 할당을 줄여주는 기능입니다.<br/>
<img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/dbSchema.png" style="position: relative;top: 5px; width:300px"></p>
<p><b style="font-size: 20px">19) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/SourceClear.png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (Source Clear)</b> <br/>
Application 생성(개발) 중 불필요한 서비스 또는 가비지 발생시 해당 Java 파일 관련 소스를 삭제 기능을 제공합니다. 삭제된 관련 소스는 Model에서 Build를 재실행하면 됩니다.</p>
<p><b style="font-size: 20px">20) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/FTPServer.png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (FTP Server)</b> <br/>
X</p>
<p><b style="font-size: 20px">21) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/UserManager.png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (User Manager)</b> <br/>
해당 프로젝트의 사용자의 기본 정보 및 권한 ID를 할당해주는 기능을 제공합니다. 사용자 관리기능을 사용하기 위해서는 관리자 권한이 있어야 가능합니다. <br/>
처음 사용 시에는 root 사용자를 이용하여 사용자를 생성하면 됩니다. 초기 로딩시 기존에 등록이 되어 있는 사용자 목록입니다. 등록할 때는 먼저 Clear 버튼을 클릭 후 정보를 입력할 수 있습니다.
<img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/UserManager(2).png" style="position: relative;top: 5px; width:300px"></p>
<p><b style="font-size: 20px">(1) User ID</b> <br/>
해당 프로젝트의 ID 정보입니다. ID는 15글자 이하 입력이 가능합니다. (규칙은 따로 없음)</p>
<p><b style="font-size: 20px">(2) Name</b> <br/>
해당 프로젝트의 ID의 사용자명입니다.</p>
<p><b style="font-size: 20px">(3) Password, Confirm</b> <br/>
해당 프로젝트의 Password입니다. Password는 대소문자와 특수문자 포함해서 9글자 이상 입력을 해야 합니다.</p>
<p><b style="font-size: 20px">(3) DataBase Connection Name</b> <br/>
해당 업무에서 사용될 Database Connection Name을 등록 관리합니다.</p>
<p><b style="font-size: 20px">(4) Auth.ID, Com-Auth.ID</b> <br/>
관리 권한에 생성한 Service Model에서 접근이 가능한 업무에 대한 권한 ID를 할당합니다. 해당 권한 ID는 권한 관리의 Role Type이 Normal, Com은 Common 권한만 할당이 가능합니다.</p>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p><b style="font-size: 20px">사용자 모델 권한 관리 등록 필요</b> <br/>
사용자의 모델 접근 권한은 Normal 권한과 Common 권한을 결합한 권한이 설정됩니다. 사용자의 모델 접근 권한은 2개의 권한을 사용하여 할당이 가능합니다.</p>
</div>
<!-- -->
<p><b style="font-size: 20px">(5) Auth.Name, Com-Auth.Name</b> <br/>
해당 Auth ID에 대한 권한명입니다.</p>
<p><b style="font-size: 20px">(6) UX-Auth.ID</b> <br/>
사용자 화면처리 업무 접근 권한을 할당합니다.</p>
<p><b style="font-size: 20px">(7) UX-Auth.Name</b> <br/>
해당 UX-Auth.ID에 대한 권한명입니다.</p>
<p><b style="font-size: 20px">(8) Data Dictionary 관리 기능</b> <br/>
Data Dictionary에 대한 관리 권한으로 해당 권한이 있는 사용자만 Data Dictionary를 변경할 수 있습니다. 권한이 없는 사용자는 ReadOnly만 가능합니다.</p>
<p><b style="font-size: 20px">(9) 사용자 Function 등록 기능</b> <br/>
Service Model의 기능 중에서 사용자 Function 등록/변경이 가능합니다. 권한이 없는 사용자는 ReadOnly만 가능합니다.</p>
<p><b style="font-size: 20px">(10) Name Rule 관리 기능</b> <br/>
Name Rule 관련 업무 Menu에 대한 등록/변경이 가능합니다</p>
<p><b style="font-size: 20px">(11) 작업 완료 변경 가능</b> <br/>
모델 메뉴에서 작업 완료 여부 값을 변경할 수 있는 권한입니다. 해당 권한이 없는 사용자는 완료 여부의 값을 변경할 수 없습니다.</p>
<p><b style="font-size: 20px">(12) 관리자 권한</b> <br/>
관리자 권한이 있는 사용자만 User Manager Menu Group을 사용할 수 있습니다.</p>
<p><b style="font-size: 20px">(13) Test Only</b> <br/>
해당 권한이 할당되면 Service Model에서 서비스 테스트 기능만 하게 됩니다. 즉, 서비스에 대한 ReadOnly/Test 기능이 가능하며 모델에 대한 추가 및 변경은 불가능하게 됩니다.</p>
<p><b style="font-size: 20px">(14) Data Model</b> <br/>
All인 경우 Data Model에서 작업할 수 있지만 ReadOnly일 경우 읽기 기능만 가능하게 됩니다.</p>
<p><b style="font-size: 20px">(15) Data Import</b> <br/>
Query Developer에서 Table Import를 할 수 있는 권한입니다.<br/>
해당 권한이 없는 사용자는 Table을 Import를 할 수 없습니다.</p>
<p><b style="font-size: 20px">22) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/UserFunction(1).png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (User Function)</b> <br/>
해당 프로젝트의 사용자의 기본 정보 및 권한 ID를 할당해주는 기능을 제공합니다. 사용자 관리기능을 사용하기 위해서는 관리자 권한이 있어야 가능합니다. <br/>
처음 사용 시에는 root 사용자를 이용하여 사용자를 생성하면 됩니다. 초기 로딩시 기존에 등록이 되어 있는 사용자 목록입니다. 등록할 때는 먼저 Clear 버튼을 클릭 후 정보를 입력할 수 있습니다.
<img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/UserFunction(2).png" style="position: relative;top: 5px; width:300px"> <br/>
* Function    : 호출 대상 Method명을 지정합니다. <br/>
* Package     : Package 명을 지정합니다.<br/>
* Class        : Class명을 지정합니다.<br/>
* Return Type : Return Type을 지정합니다.<br/>
* Argument   : “,”구분으로 Type을 지정합니다.<br/></p>
<p><b style="font-size: 20px">23) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/ManagerTool.png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (Manager Tool)</b> <br/>
해당 프로젝트의 사용자의 기본 정보 및 권한 ID를 할당해주는 기능을 제공합니다. 사용자 관리기능을 사용하기 위해서는 관리자 권한이 있어야 가능합니다. <br/></p>
<p><b style="font-size: 20px">(1) Service-Table Manager</b> <br/>
해당 메뉴들을 선택하고 IUD-Table List 버튼을 클릭했을 때 해당 메뉴에서 사용하는 테이블을 확인할 수 있고 해당 테이블을 선택하면 해당 테이블을 사용하고 있는 화면들을 우측 메뉴에 확인할 수 있습니다.
<img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/ManagerTool(2).png" style="position: relative;top: 5px; width:400px"> <br/></p>
<p><b style="font-size: 20px">(2) Build</b> <br/>
소스 빌드 시 여러 개의 서비스를 동시에 빌드를 처리해주는 기능입니다. <br/>
좌측의 업무 모델 메뉴에서 빌드하고자 하는 메뉴 및 서비스를 우선 체크 표시합니다.<br>
Build List할 때 빌드 서비스의 Count가 너무 많이 실행하면 서버에 부담을 줄 수가 있습니다. <br/>
빌드는 실행 내용을 선택된 서비스 별로 소스 생성/컴파일/배치를 실행합니다.<br/>
<img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/build(2).png" style="position: relative;top: 5px; width:400px"> <br/>
[ 기능 설명 ] <br/>
<b style="font-size: 20px">➀ Total Count</b> <br/>
빌드 대상인 서비스 Count가 표시됩니다.<br/>
<b style="font-size: 20px">➁ Complete</b> <br/>
정상적으로 빌드된 서비스 수. T 컬럼 값이 'B'가 됩니다.<br/>
<b style="font-size: 20px">➂ Error</b> <br/>
빌드 실행 시 오류로 인하여 정상 종료되지 못한 서비스 수, T 컬럼 값이 ‘E’가 됩니다.<br/>
<b style="font-size: 20px">➃ Build List</b> <br/>
빌드할 대상 서비스 클릭하면 그리드에 리스트로 나옵니다.<br/>
<b style="font-size: 20px">➄ Build</b> <br/>
대상 서비스를 순차적으로 빌드를 수행합니다. 프로세스바를 통하여 빌드 진행상태를 확인할 수 있습니다.<br/>
<b style="font-size: 20px">➅ Message 창</b> <br/>
정상 메시지일 때에는 빌드 실행을 통하여 빌드 또는 재빌드한 Resource의 파일 정보가 메시지 영역에 표시됩니다. 오류일 때는 오류발생 원인이 표시됩니다.</p>
<p style="color: blue;">
                EX) 정상 Message
                    builder start;WIZ/SAMPLE/DEMO;EmployeeDemo.xml;SQL-MAP 
                    ;WIZ;SAMPLE_DEMO-SqlMap-Config.xml;SQL-CONFIG
                    ;context-sqlMap.xml;SQL-CONTEXT
                    :WIZ/SAMPLE/DEMO/dao;EmployeeDemoDao.java
                    :WIZ/SAMPLE/DEMO/service;EmployeeDemo.java
                    :WIZ/SAMPLE/DEMO/Impl;EmployeeDemoImpl.java
                    :WIZ/SAMPLE/DEMO/web;EmployeeDemoController.java
</p><br/>
[ 선택 서비스 표시 기능]<br/>
빌드 대상 서비스 그리드로 표현된 리스트에서 특정 서비스 Row를 선택하면 좌측의 업무 모델 메뉴에서 선택된 서비스의 Tree-Node의 Background Color가 그린 색상으로 표시됩니다.<br/>
해당 기능은 빌드 리스트는 그리드로 표현됨으로 계층 구조를 확인하기 어려움으로 해당 기능을 사용하게 되면 오류 서비스가 어느 업무에 존재하는지를 쉽게 확인할 수 있습니다.<br/>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p><b style="font-size: 20px">Service Model 내에 있는 빌드 기능과의 차이점</b> <br/>
Service Model 내에 있는 빌드 기능은 서비스 모델을 사용자가 모델링 테스트 등 다양한 기능을 실행하면서 단일 서비스만 빌드가 됩니다.<br/>
또한 빌드하는 사용자 환경에 로컬 테스트 환경이 On이 되어 있을 시에는 해당 빌드로 생성되는 Resource를 Client로 전송 기능이 동시에 실행이 됩니다.<br/>
즉, 로컬 테스트 On 상태일 때 build는 소스생성, 컴파일, 서버배치, build Resource Clinet 배치가 수행됨으로 사용자는 자신의 PC 환경으로 테스트가 가능하게 됩니다.<br/>
그러나 해당 일괄 빌드 기능에서는 로컬 테스트 환경이 On 되어 있어도 빌드 시 build Resource Client 배치가 수행되지 않습니다.대량 서비스 빌드시에는 해당 Resource를 Client에 배치하지 않습니다.</p>
</div>
<!-- -->
<p><b style="font-size: 20px">(3) Menu ReBuild</b> <br/>
메뉴 구성을 변경 또는 재구성 시 사용하는 기능으로 메뉴의 복사 및 메뉴의 이동을 처리할 수 있습니다. <br/>
메뉴 복사 처리 시 반드시 고려해야 하는 것은 복사된 Menu는 모델 권한 처리에서 별도로 권한 등록을 해
주어야 합니다. 권한 등록하지 않으면 복사된 메뉴는 Service Model의 업무 메뉴 목록에 나타나지 않습니다.
사용법은 이동 또는 복사하고자 하는 업무 메뉴 좌측 목록에서 선택하고 이동 또는 복사하고자 하는 위치를
우측 목록에서 선택하고 해당 버튼을 선택하면 재구성 업무 메뉴 목록을 볼 수 있게 됩니다. 이후 저장 처리
를 하면 됩니다.<br/>
우측 목록의 TreeNode중 Background Color가 노란색인 경우는 이동 또는 복사를 할 수 없습니다. <br/>
해당 메뉴는 종단 처리 된 Menu로 하부 구조에 Menu는 올 수 없기 때문입니다. 즉, 해당 메뉴의 Child Node
는 메뉴에 올 수 없고 서비스만 등록할 수 있습니다. <br/>
<img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/MenuReBulid.png" style="position: relative;top: 5px; width:400px"> <br/></p>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p><b style="font-size: 20px">사용자 모델 권한 관리 등록 필요</b> <br/>
해당 Menu Rebuild시에는 반드시 사용자 권한 관리에서 권한 상태를 재구성하여야 합니다. <br/>
메뉴 구성은 사용자 권한 관리와 밀접한 관계를 가지고 있습니다. <br/></p>
</div>
<!-- -->
<p><b style="font-size: 20px">24) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/UserFunction(1).png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (Expand/Collapse)</b> <br/>
Display 기능에 대한 편의 기능을 제공합니다. 해당 기능은 토글 방식으로 지원합니다. <br/></p>
<ul>
<li><b style="font-size: 20px">Service BOC</b> <br/>
BOC 내의 Column을 펼치기/닫기 기능을 제공합니다.</li>
</ul>
<p><b style="font-size: 20px">25) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/UserFunction(1).png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (undo)</b> <br/>
서비스를 작업합니다가 이전 상태로 돌리는 기능을 제공합니다. <br/></p>
<p><b style="font-size: 20px">26) <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/UserFunction(1).png" width="25px;" height="25px;" style="position: relative;top: 5px;"> (redo)</b> <br/>
서비스를 최근 상태로 돌리는 기능을 제공합니다. <br/></p>
<h2 id="_2-화면-메뉴-구조-영역-및-속성-영역" tabindex="-1"><a class="header-anchor" href="#_2-화면-메뉴-구조-영역-및-속성-영역" aria-hidden="true">#</a> <b style="font-size: 20px">2.화면 메뉴 구조 영역 및 속성 영역</b> <br/></h2>
<p><b style="font-size: 20px">1) 메뉴 추가/삭제</b> <br/>
<img src="@source/.vuepress/public/documentation/service-model/Structure/ScreenStructure/MenuAdd.png" style="position: relative;top: 5px; width:300px"> <br/>
<b style="font-size: 20px"> (1) 메뉴 추가</b> <br/>
추가 하고자 하는 업무 Node를 선택한 후 오른쪽 마우스를 클릭하면 Context Menu가 활성 됩니다.
활성 된 메뉴에서 메뉴 추가 선택하면 됩니다.</p>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p>메뉴 안에 메뉴를 추가하는 것은 가능하지만 서비스가 있는 경우에는 메뉴 추가가 안 됩니다.</p>
</div>
<!-- -->
<p><b style="font-size: 20px">(2) 서비스 추가</b> <br/>
추가하고자 하는 업무 Node를 선택한 후 마우스 오른쪽 버튼을 클릭하면 Context Menu가 활성 됩니다. <br/>
활성 된 Menu에서 서비스 추가 선택하면 됩니다.</p>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p>메뉴 안에 메뉴가 있는 경우에는 서비스 추가가 안 됩니다.</p>
</div>
<!-- -->
<p><b style="font-size: 20px">(3) 삭제</b> <br/>
삭제하고자 하는 업무 Node를 선택한 후 삭제하면 됩니다.</p>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p>삭제 처리 시 삭제된 서비스 모델은  (Recycle)로 이동됩니다. 사용자 실수로 서비스 삭제 시에는 휴지통으로 이동한 후 해당 서비스를 복원 처리하면 됩니다.</p>
</div>
<!-- -->
<p><b style="font-size: 20px">(4) 공통메뉴 추가</b> <br/>
메뉴 추가 방식과 동일하며, 공통메뉴로 추가 시 Node의 아이콘으로 분류 표현됩니다.</p>
<p><b style="font-size: 20px">2) 메뉴 속성 설정</b> <br/>
<img src="@source/.vuepress/public/documentation/service-model/Structure/ScreenStructure/MenuProperty.png" style="position: relative;top: 5px; width:300px"> <br/></p>
<p><b style="font-size: 20px">(1) MENU정보</b> <br/></p>
<ul>
<li><b style="font-size: 20px">MENU ID</b> <br/>
해당 메뉴의 고유 번호입니다.</li>
</ul>
<p><b style="font-size: 20px">(2) 기초정보</b> <br/></p>
<ul>
<li><b style="font-size: 20px">LABEL</b> <br/>
해당 메뉴의 이름을 입력합니다.</li>
<li><b style="font-size: 20px">ReadOnly</b> <br/>
Tool Box &gt; Users &gt; User Manager의 ReadOnly 여부에 따라 서비스 모델 접근이 됩니다.</li>
<li><b style="font-size: 20px">작업완료설정</b> <br/>
작업 완료 상태에서는 서비스 수정이 불가 처리됩니다. 해당 기능은 권한이 할당된 사용자만 변경이 가능합니다.</li>
</ul>
<p><b style="font-size: 20px">(3) ClASS정보</b> <br/></p>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p>CLASS 정보들을 미리 입력하는 경우 해당 메뉴 안에 서비스를 추가할 때마다 서비스 속성 창에 CLASS 정보들이 자동으로 입력됩니다.</p>
</div>
<!-- -->
<ul>
<li><b style="font-size: 20px">PACKAGE명</b> <br/>
SYSID는 별도로 해당 프로젝트명을 설정할 경우 SYSID 태그 안에 해당 프로젝트명을 넣어 설정하고 그 이외에는 DEFAULT로 설정됩니다.</li>
<li><b style="font-size: 20px">CLASS명</b> <br/>
메소드를 분류할 수 있도록 클래스를 입력합니다.</li>
</ul>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p>해당 정보는 해당 Node의 Child Node가 서비스일 때 유효하며, 프레임워크 특성상 메뉴별 클래스 명은 중복되면 안 됩니다.</p>
</div>
<!-- -->
<p><b style="font-size: 20px">(4) JSP정보</b> <br/></p>
<ul>
<li><b style="font-size: 20px">JSP 경로</b> <br/>
Return Type이 Jsp인 서비스를 소유한 Class일 때 선택적으로 사용합니다.</li>
</ul>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p>해당 정보는 해당 Node의 Child Node가 서비스일 때 유효합니다.</p>
</div>
<!-- -->
<p><b style="font-size: 20px">(5) 내용설명</b> <br/></p>
<ul>
<li><b style="font-size: 20px">첨부파일</b> <br/>
해당 메뉴에 설계서, 의뢰서, 확인요청 등 파일들을 업로드 및 다운로드 기능입니다.
<img src="@source/.vuepress/public/documentation/service-model/Structure/ScreenStructure/File.png" style="position: relative;top: 5px; width:300px"> <br/></li>
</ul>
<p><b style="font-size: 20px">3) 서비스 추가/삭제</b> <br/>
<img src="@source/.vuepress/public/documentation/service-model/Structure/ScreenStructure/ServiceRight.png" style="position: relative;top: 5px; width:300px"> <br/></p>
<ul>
<li><b style="font-size: 20px">서비스 추가</b> <br/>
추가하고자 하는 업무 Node를 선택한 후 마우스 오른쪽 버튼을 클릭하면 Context Menu가 활성 됩니다.<br/>
활성 된 Menu에서 서비스 추가 선택하면 됩니다.</li>
</ul>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p>메뉴 안에 메뉴가 있는 경우에는 서비스 불가합니다.</p>
</div>
<!-- -->
<ul>
<li><b style="font-size: 20px">삭제</b> <br/>
삭제하고자 하는 업무 Node를 선택한 후 삭제하면 됩니다.</li>
</ul>
 <!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p>삭제 처리 시 삭제된 서비스 모델은 <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/recycle.png" style="position: relative;top: 5px; width:25px; height:25px;">(recycle)로 이동됩니다. 사용자 실수로 서비스 삭제 시에는 휴지통으로 이동한 후 해당 서비스를 복원 처리하면 됩니다.</p>
</div>
<!-- -->
<p><b style="font-size: 20px">(2) 서비스에서 마우스 오른쪽 버튼을 클릭했을 때</b> <br/>
<img src="@source/.vuepress/public/documentation/service-model/Structure/ScreenStructure/ServiceRight.png" style="position: relative;top: 5px; width:300px"> <br/></p>
<ul>
<li><b style="font-size: 20px">삭제</b> <br/>
삭제하고자 하는 업무 서비스를 선택한 후 오른쪽 마우스를 클릭하면 Context Menu가 활성 됩니다.<br/>
활성 된 메뉴에서 삭제를 선택하면 됩니다.</li>
</ul>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p>삭제 처리 시 삭제된 서비스 모델은 <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/recycle.png" style="position: relative;top: 5px; width:25px; height:25px;">(recycle)로 이동됩니다. 사용자 실수로 서비스 삭제 시에는 휴지통으로 이동한 후 해당 서비스를 복원 처리하면 됩니다.</p>
</div>
<!-- -->
<ul>
<li><b style="font-size: 20px">영구삭제</b> <br/>
삭제 버튼과 똑같이 삭제하고자 하는 업무 서비스를 선택한 후 오른쪽 마우스를 클릭하면 Context Menu가 활성 됩니다. 활성 된 메뉴에서 영구삭제를 선택하면 됩니다.</li>
</ul>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p>영구삭제 시에는 <img src="@source/.vuepress/public/documentation/service-model/Structure/Tool_Box/recycle.png" style="position: relative;top: 5px; width:25px; height:25px;">(Recycle)에서 복원이 불가능합니다.</p>
</div>
<!-- -->
<ul>
<li><b style="font-size: 20px">Pex복사</b> <br/>
PEX복사 기능은 Interface BOC에 있는 PEX BOC를 간편하게 사용할 수 있도록 지원하는 기능입니다. 다른 업무 서비스에서 해당 서비스를 호출하여 해당 서비스의 결과를 활용하고 싶을 때 사용하는 기능입니다. 복사 처리시 해당 서비스를 호출하기 위해 필요로 하는 정보를 복사합니다.<br/>
복사된 서비스 정보를 이용하여 사용하고자 하는 서비스에서 PEX 붙여넣기 하면 됩니다.</li>
</ul>
<p><b style="font-size: 20px">4) 서비스 속성 설정</b> <br/>
<img src="@source/.vuepress/public/documentation/service-model/Structure/ScreenStructure/ServiceProperty.png" style="position: relative;top: 5px; width:300px"> <br/></p>
<p><b style="font-size: 20px">(1) MENU정보</b> <br/></p>
<ul>
<li><b style="font-size: 20px">MENU ID</b> <br/>
메뉴의 고유 번호입니다.</li>
</ul>
<p><b style="font-size: 20px">(2) 기초정보</b> <br/></p>
<ul>
<li><b style="font-size: 20px">LABEL</b> <br/>
해당 서비스의 이름을 입력합니다.</li>
<li><b style="font-size: 20px">서비스 ID</b> <br/>
메뉴 안에 있는 서비스의 고유 번호입니다.</li>
</ul>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p>CLASS정보 안에 METHOD명을 입력시 서비스 ID는 입력한 METHOD명으로 자동 입력됩니다.</p>
</div>
<!-- -->
<ul>
<li><b style="font-size: 20px">ALIAS</b> <br/>
서비스 ID명 이외 업무 전체적으로 중복이 발생하지 않는 별칭을 할당 하여 사용할 수 있습니다. <br/>
해당 ID는 Spring에서 Annotation 호출 명에 중복 방지를 위해서 사용할 수 있습니다.</li>
<li><b style="font-size: 20px">ReadOnly</b> <br/>
Tool Box &gt; Users &gt; User Manager의 ReadOnly 여부에 따라 서비스 모델 접근이 됩니다.</li>
<li><b style="font-size: 20px">SaveLock</b> <br/>
마지막으로 작업한 개발자가 Lock을 YES로 했을 경우 다른 개발자는 Lock 걸려있는데 해당 서비스를 수정하지 못합니다.</li>
</ul>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p>YES로 설정한 개발자가 NO로 변경하지 않아도 Lock은 최대 하루가 지나는 경우 자동으로 NO로 변경이 됩니다.</p>
</div>
<!-- -->
<p><b style="font-size: 20px">(3) CLASS정보</b> <br/></p>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p>메뉴에서 CLASS 정보들을 미리 입력하는 경우 추가된 서비스 속성 창에 CLASS 정보들이 자동으로 입력됩니다.</p>
</div>
<!-- -->
<ul>
<li><b style="font-size: 20px">PACKAGE명</b> <br/>
SYSID는 별도로 해당 프로젝트명을 설정할 경우 SYSID 태그 안에 해당 프로젝트명을 넣어 설정하고 그 이외에는 DEFAULT로 설정됩니다.</li>
<li><b style="font-size: 20px">CLASS명</b> <br/>
메소드를 분류할 수 있도록 클래스를 입력합니다.</li>
</ul>
<!-- Remark -->
<div class="custom-container tip"><p class="custom-container-title"><Badge type="tip" text="Remark" vertical="middle" /></p>
<p>해당 정보는 해당 Node의 Child Node가 서비스일 때 유효하며, 프레임워크 특성상 메뉴별 클래스 명은 중복되면 안 됩니다.</p>
</div>
<!-- -->
<p><b style="font-size: 20px">(4) JSP정보</b> <br/>
해당 서비스의 출력유형이 JSP일 때 설정이 되어 있는 JSP 파일로 처리 결과를 Forwarding합니다.</p>
<ul>
<li><b style="font-size: 20px">JSP 경로</b> <br/>
Return Type이 JSP인 서비스를 소유한 클래스일 때 선택적으로 사용합니다. 단, 해당 정보는 해당 Node의 Child Node가 서비스일 때 유효합니다.</li>
<li><b style="font-size: 20px">JSP 파일명</b> <br/>
Return Type이 JSP일 때 해당 JSP의 파일명을 입력합니다.</li>
</ul>
<p><b style="font-size: 20px">(5) 처리유형</b> <br/>
해당 서비스의 출력유형이 JSP일 때 설정이 되어 있는 JSP 파일로 처리 결과를 Forwarding합니다.</p>
<ul>
<li><b style="font-size: 20px">APPL 유형</b> <br/>
Default 값은 Online입니다.<br/>
Spring + ( Ibatis, Mybatis) 형식에서는 적용되지 않습니다. WizframeWork 사용 시 해당 기능이 유효합니다.</li>
<li><b style="font-size: 20px">출력 유형</b> <br/>
Online 화면일 때 서비스 처리 후 결과를 Forward 하는 방식을 정의합니다. JSP 화면을 Forward하고자 할 때에는 JSP를 선택해주고, Ajax를 통하여 Data만 Client로 전송할 때에 XML로 정의하면 됩니다. XML로 처리시에는 Client와 통신하기 위한 Data Layout Interface를 적용하여야 합니다. <br/>
해당 요소에서는 XML, Json,formated String 등 다양하게 적용할 수 있습니다.</li>
</ul>
<p><b style="font-size: 20px">(6) 최종작업정보</b> <br/>
서비스 Model을 변경한 최종 작업일/작업자 정보를 확인할 수 있습니다.</p>
<ul>
<li><b style="font-size: 20px">작업일</b> <br/>
최근에 해당 서비스를 작업한 날짜 정보를 확인할 수 있습니다.</li>
<li><b style="font-size: 20px">작업자ID</b> <br/>
최근에 해당 서비스를 작업한 개발자 ID 정보를 확인할 수 있습니다.</li>
</ul>
<p><b style="font-size: 20px">(7) Test정보</b> <br/></p>
<ul>
<li><b style="font-size: 20px">TestDB</b> <br/>
개발시 개발 DB와 운영 DB가 다를 경우 운영 DB를 등록하여 테스트를 할 수 있습니다.</li>
</ul>
</div></template>


