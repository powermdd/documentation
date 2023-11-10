# Service Model 구성

## 1. 도구상자

Service Model에서 사용하는 도구상자로 모델링한 내용을 저장하거나 실행 테스트, 빌드 등의 주요 작업 이외에 다양한 기능을 제공하고 있습니다.
<img class="boxBorder" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/ToolBox.png"> <br/>

<span class="font20">1)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/Save.png" width="25px;"> (Save) </b> <br/>
업무 서비스 모델 내용을 저장 처리합니다.

<span class="font20">2)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/ImageCapture.png" width="25px;"> (ImageCapture) </b> <br/>
Service Model 작업한 모델링을 bmp 파일 형식의 이미지로 Dump 하여 저장합니다.

<span class="font20">3)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/Logic_Physical.png" width="25px;"> (Logic / Physical) </b> <br/>
논리모델과 물리 모델을 토글 방식으로 확인할 수 있습니다. 논리모델은 사용자인터페이스 중심으로 표현되며 물리 모델은 컴퓨터 인터페이스 중심으로 표현됩니다.<br/>

<span class="font18">①<b> Logic : 논리모델</b></span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;
<span class="font18">②<b> Physical : 물리 모델</b> </span><br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/Logic.png" width="200px;">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/Physical.png" width="200px;">

<span class="font20">4)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/History(1).png" width="25px;"> (History) </b> <br/>
서비스의 변경 및 빌드 이력을 확인하고 과거 작업 상태로 모델링 작업화면을 Rollback 하여 확인할 수 있도록 지원합니다.<br/>
<b class="font20"><img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/History(2).png" width="400px"></b> <br/>
<span class="font18">① 최근 변경 일자 기준으로 확인이 가능합니다. 빌드 수행 시에 빌드된 일자와 작업자 확인이 가능합니다.</span><br/>
<span class="font18">② </span><span class="spanBtn">Select</span> <span class="font18">버튼 클릭시 선택한 일자의 이력을 화면작업 영역에 로딩됩니다.</span>

<span class="font20">5)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/ServiceReload.png" width="25px;"> (Service Reload) </b> <br/>
현재 저장이 되어 있는 Service Model을 다시 로딩 처리합니다.

<span class="font20">6)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/Test_NotCommit.png" width="25px;"> (Test:NotCommit) </b> <br/>
모델 테스트를 수행합니다. 수행 후에 해당 모델에서 처리한 Database Transaction을 rollback 처리하여 반복 테스트를 수행할 수 있도록 지원합니다. 테스트 시에 출력되는 Trace Log의 내용은 해당 서비스별로 정의가 되어있는 로그 수준을 지정하여 확인할 수 있습니다. <br/>
<img class="boxBorder" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/log.png" width="700px;">

<span class="font20">7)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/TestExecute.png" width="25px;"> (Test Execute) </b> <br/>
모델 테스트를 수행합니다.  <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/Test_NotCommit.png" width="25px;"> (Test:NotCommit) 방법과 동일합니다. Database Transaction을 반영합니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
<img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/Test_NotCommit.png" width="25"> 버튼과 <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/TestExecute.png" width="25"> 버튼의 차이점<br/>
<img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/Test_NotCommit.png" width="25"> : 테스트 디버깅으로 해당 서비스를 실행하지만 데이터에는 반영하지 않습니다.<br/>
<img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/TestExecute.png" width="25" > : 테스트 디버깅으로 해당 서비스를 실행하고 결과를 데이터베이스에 반영합니다.
:::
<!-- -->

<span class="font20">8)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/ClassExecute).png" width="25px;"> (Class Execute) </b> <br/>
모델 클래스를 수행합니다. 수행 후에 해당 모델에서 처리한 Database Transaction을 반영합니다.

<span class="font20">9)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/build.png" width="25px;"> (build) </b> <br/>
Service Model에서 작업한 모델링으로 자바 소스를 생성하고 해당 자바 소스를 컴파일 수행합니다. <br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/build_comfile.png" class="boxBorder" width="700"> <br/>

<span class="font20">10)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/SourceView(1).png" width="25px;"> (Source View) </b> <br/>
빌드한 소스의 내용을 확인할 수 있습니다. 관련 자바 파일을 확인할 수 있는 Viewer를 제공합니다. 소스는 스프링 관련 자바 소스와 Ibatis/Mybatis 형식의 소스를 확인할 수 있습니다. Ibatis/Mybatis의 구분은 POWERMDD.BMS의 소스 생성 형식에서 지정합니다.<br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/SourceView(2).png" style="position: relative;top: 5px;" width="500">

<span class="font20">11)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/SourceCopy.png" width="25px;"> (Source Copy) </b> <br/>
모델 작업 중 유사한 모델 서비스를 복사, 편집 사용하고자 할 때 이용하면 편리하게 사용할 수 있는 기능입니다. 현재 모델 서비스의 정보를 복사합니다.

<span class="font20">12)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/ServicePaste.png" width="25px;"> (Service Paste) </b> <br/>
복사한 서비스를 현재 오픈이 되어 있는 서비스에 붙여넣기 합니다.

<span class="font20">13)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/MenuSearch.png" width="25px;"> (Menu Search) </b> <br/>
Service Model에 사용된 여러 가지 정보를 기준으로 검색할 수 있는 기능을 제공합니다. <br/>

<span class="font18">(1)</span><b class="font18"> IUD BOC</b> <br/>
모델에서 사용하는 Database BOC 중 쿼리를 직접 입력하지 않고 DML을 생성해주는 BOC를 대상으로 검색 기능을 제공합니다. <br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/IUDBOC.png" width="250px;">

<span class="font18">(2)</span><b class="font18"> Query BOC</b> <br/>
모델에서 사용하는 Database BOC 중 쿼리를 직접 입력하여 사용하는 BOC를 대상으로 검색 기능을 제공합니다. <br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/QueryBOC.png" width="300px;">

<span class="font18">(3)</span><b class="font18"> PEX BOC</b> <br/>
모델에서 사용하는 Interface BOC 중 PEX를 대상으로 검색 기능을 제공합니다. PEX는 공통기능을 호출하여 사용함으로 공통기능의 변화에 따른 영향을 확인하고자 할 때 사용하면 편리합니다. <br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/PEXBOC.png" width="250px;">

<span class="font18">(4)</span><b class="font18"> Class</b> <br/>
모델에서 사용하는 Class 정보를 대상으로 검색 기능을 제공합니다. <br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/ClassSearch.png" width="300px;" >

<span class="font18">(5)</span><b class="font18"> Menu Event</b> <br/>
모델에서 사용하는 Menu ID와 Service ID 정보를 대상으로 검색 기능을 제공합니다. <br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/MenuEvent.png" width="300px;">

<span class="font18">(6)</span><b class="font18"> Exception</b> <br/>
검색한 날짜로 모델에서 작업한 서비스에서 오류 났던 메시지를 확인할 수 있습니다. <br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/Exception.png" width="600px;">

<span class="font20">14)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/MenuReload.png" width="25px;" > (Menu Reload)</b> <br/>
<img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/MenuReload.png" width="25px;" > (Menu Search) 기능 또는  <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/recycle.png" width="20px;" > (recycle) 기능을 사용한 후 화면 메뉴구조영역을 reload할 때 사용합니다.

<span class="font20">15)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/recycle.png" width="20px;"> (recycle) </b> <br/>
휴지통 기능으로 영구삭제 처리하지 않은 서비스는 화면 메뉴 구조 영역의 휴지통 메뉴에서 서비스 복원이 가능합니다.

<span class="font20">16)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/TableDictionary(1).png" width="25px;"> (Table Dictionary) </b> <br/>
모델에서 가장 많이 사용될 Data Dictionary를 데이터베이스 테이블로부터 추출하여 사용자가 쉽게 등록할 수 있도록 도와주는 유틸리티 기능을 제공합니다. <br/>
최초 데이터 설계가 종료되고 데이터베이스의 물리 테이블이 생성된 후 해당 기능을 사용할 수 있습니다. <br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/TableDictionary(2).png" width="600">
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" />
- Conn. ID와 Schema 둘 중 하나라도 미입력하는 경우 검색이 안됩니다.
- 물리 테이블 생성 시에 반드시 테이블의 Column Comment가 반드시 등록되어 있어야 합니다. <br/>
- 등록하지 않는 컬럼들은 Service Model 작업할 때 ‘미정의된 Column이 존재합니다’라는 메시지가 나옵니다.
:::


<span class="font20">17)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/ColumnDictionary(1).png"  width="25px;"> (Column Dictionary) </b> <br/>
Column Dictionary 관리화면으로 검색, 신규 생성, 수정, 삭제 기능을 제공합니다. <br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/ColumnDictionary(2).png" width="500px">



<span class="font20">18)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/NameRule.png"  width="25px;" height="25px;"> (Name Rule) </b> <br/>
Package나 Class, Database 등의 Name 규칙을 설정합니다.<br/>

<span class="font18">(1)</span><b class="font18"> Package Name Rule</b> <br/>
Java Package Name 규칙을 등록하는 역할을 합니다. <br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/PackageNameRule.png" width="400">
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> <b> Name Rule 규칙 </b>
- Package Name Rule 분류 구분자 “.”을 기준으로 “*”를 사용하여 범위를 지정합니다.
- “*” 분류부터 사용자 Name 지정이 가능합니다.<br/>
<span class="spanEx"> Ex) Name1.Name2.*을 등록하는 경우 “Name1.Name2.” 으로 시작되는 Package 등록이 허용됩니다. </span> <br/>
<span class="spanEx"> Ex) NameA.NameB.NameC을 등록하는 경우 “NameA.NameB.NameC” Package만 허용이 됩니다. </span> <br/>
- “*” 없이 모든 Package를 등록하게 되면 정해진 Package 이외는 사용 불가능합니다.
:::

<span class="font18">(2)</span><b class="font18"> Single Name Rule</b> <br/>
접두어와 접미어를 정의하여 해당 규칙이 허용되는 명칭만 Java Class Name과 Method Name 규칙을 지정할 수 있습니다.<br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/SingleNameRule.png" width="400"><br/>
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> <b>접두어, 접미어</b>
- 접두어, 접미어로 종료하는 문자열을 허용합니다.
- 접두어, 접미어를 모두 허용 시 “*” 를 지정하면 됩니다.
:::

<span class="font18">(3)</span><b class="font18"> DataBase Connection Name</b> <br/>
업무에서 사용될 데이터베이스 Name을 등록 및 관리합니다. <br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/dbConnection.png" style="width:300px;"> 

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
일반적으로 해당 정보는 POWERMDD.BMS 관리자가 등록해주어야 합니다. 실질적으로 사용할 데이터베이스의 연결정보는 BMS Config의 등록된 데이터베이스 정보를 사용해야 합니다. <br/>
POWERMDD.DX에서 서버가 정의 되어 있는 데이터베이스 중 해당 프로젝트에서 사용될 정보만 등록하면 됩니다. 등록된 이름은 Query Developer와 Service Model 그리고 Data Model 중 기본 데이터베이스가 아닌 별도의 데이터베이스 지정이 필요할 때 사용됩니다. <br/>
:::

<span class="font18">(4)</span><b class="font18"> DataBase Schema Name</b> <br/>
Service Model의 BOC(Business Operation Component)에서 데이터베이스 조작 시 사용되는 스키마 정보를 설정합니다. <br/>
사용자 편의성을 높여주고 사용자로부터 미입력 및 잘못된 값의 할당을 줄여주는 기능입니다. <br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/dbSchema.png" width="300px"> 

<span class="font20">19)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/SourceClear.png" width="25px;"> (Source Clear)</b> <br/>
애플리케이션 생성(개발) 중 불필요한 서비스 또는 가비지 발생 시 해당 자바 파일 관련 소스를 삭제 기능을 제공합니다. 삭제된 관련 소스는 모델에서 빌드를 재실행하면 됩니다.
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/SourceClear(2).png" width="500px;">

<span class="font20">20)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/UserManager.png" width="25px;"> (User Manager)</b> <br/>
해당 프로젝트의 사용자의 기본 정보 및 권한 ID를 할당해주는 기능을 제공합니다. 사용자 관리기능을 사용하기 위해서는 관리자 권한이 있어야 가능합니다. <br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/UserManager(2).png" width="400px">
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" />
처음 사용 시에는 root 사용자를 이용하여 사용자를 생성하면 됩니다. 초기 로딩시 기존에 등록이 되어 있는 사용자 목록입니다. 등록할 때는 먼저 <span class="spanBtnGS">Clear</span> 버튼을 클릭 후 정보를 입력할 수 있습니다.
:::

<span class="font20">21)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/UserFunction(1).png" width="25px;"> (User Function)</b> <br/>
사용자가 직접 Java Application Function을 작성하여 사용할 수 있도록 지원합니다. 사용자가 제작한 class 파일을 POWERMDD.BMS 서버 환경에 배치합니다. <br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/UserFunction(2).png" width="500px"> <br/>

<span class="font20">22)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/ManagerTool.png" width="25px;" height="25px;"> (Manager Tool)</b> <br/>

<span class="font18">(1)</span><b class="font18"> Service-Table Manager</b> <br/>
해당 메뉴들을 선택하고 <span class="spanBtn">IUD-Table List</span> 버튼을 클릭했을 때 해당 메뉴에서 사용하는 테이블을 확인할 수 있고 해당 테이블을 선택하면 해당 테이블을 사용하고 있는 화면들을 우측 메뉴에 확인할 수 있습니다. <br/>
<img class="boxBorder" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/ManagerTool(2).png" width="500px"> <br/>

<span class="font18">(2)</span><b class="font18"> Build</b> <br/>
소스 빌드 시 여러 개의 서비스를 동시에 빌드를 처리해주는 기능입니다. <br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/22_02. Build.png" width="500px"> <br/>
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" />
- <b>주의사항</b> <br/>
<span class="spanBtnGS"> Build List</span> 버튼을 클릭할 때 빌드할 서비스가 많을 경우 서버에 부담을 줄 수가 있습니다. <br/>
빌드는 실행 내용을 선택된 서비스 별로 소스 생성 / 컴파일 / 배치를 실행합니다.

- <b>Service Model 내에 있는 빌드 기능과의 차이점</b> <br/>
Service Model 내에 있는 빌드 기능은 Service Model을 사용자가 모델링 테스트 등 다양한 기능을 실행하면서 단일 서비스만 빌드가 됩니다. <br/>
또한 빌드하는 사용자 환경에 로컬 테스트 환경이 "On"이 되어 있을 시에는 해당 빌드로 생성되는 Resource를 클라이언트로 전송 기능이 동시에 실행이 됩니다. <br/>
즉, 로컬 테스트 "On" 상태일 때 빌드는 소스 생성, 컴파일, 서버 배치, build Resource Client 배치가 수행됨으로 사용자는 자신의 PC 환경으로 테스트가 가능하게 됩니다. <br/>
그러나 해당 일괄 빌드 기능에서는 로컬 테스트 환경이 "On"되어 있어도 빌드 시 build Resource Client 배치가 수행되지 않습니다. <br/>
대량 서비스 빌드 시에는 해당 Resource를 클라이언트에 배치하지 않습니다.<br/>
:::

<span class="font18">(3)</span><b class="font18"> Menu ReBuild</b> <br/>
메뉴 구성을 변경 또는 재구성 시 사용하는 기능으로 메뉴의 복사 및 메뉴의 이동을 처리할 수 있습니다. <br/>
<img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/MenuReBulid.png" style="width:500px;"> <br/>

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" />
- 메뉴 복사 처리 시 반드시 고려해야 하는 것은 복사된 메뉴는 모델 권한 처리에서 별도로 권한 등록을 해주어야 합니다. 권한 등록하지 않으면 복사된 메뉴는 Service Model의 업무 메뉴 목록에 나타나지 않습니다.

- 해당 메뉴를 재빌드 시에는 반드시 사용자 권한 관리에서 권한 상태를 재구성하여야 합니다. 메뉴 구성은 사용자 권한 관리와 밀접한 관계를 맺고 있습니다.

- 우측 목록 중 글자 배경색상이 노란색인 경우는 이동 또는 복사를 할 수 없습니다. 해당 메뉴는 종단 처리된 메뉴로 하부 구조에 메뉴는 올 수 없기 때문입니다. 즉, 해당 메뉴의 자식 노드는 메뉴에 올 수 없고 서비스만 등록할 수 있습니다.
:::

<span class="font20">23)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/Expand_Collapse.png" width="30px;" height="25px;"> (Expand/Collapse)</b> <br/>
Display 기능에 대한 편의 기능을 제공합니다. 해당 기능은 토글 방식으로 지원합니다. <br/>

<span class="font18">①<b> Service BOC</b></span> <br/>
BOC 내의 Column을 펼치기/닫기 기능을 제공합니다.<br>
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/23_1. Service BOC.png" width="200px;">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
<img src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/Logic.png" width="200px;">


<span class="font20">24)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/undo.png" width="25px;" > (undo)</b> <br/>
서비스를 작업합니다가 이전 상태로 돌리는 기능을 제공합니다. <br/>

<span class="font20">25)</span><b class="font20"> <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/redo.png" width="25px;" > (redo)</b> <br/>
서비스를 최근 상태로 돌리는 기능을 제공합니다. <br/>

## 2. 화면 메뉴구조영역 및 속성영역
화면 메뉴구조영역은 업무 구조를 Tree View 형식으로 표현한 메뉴로 모델링의 대상이 되는 서비스의 메뉴 카테고리영역입니다. 등록형식은 업무 메뉴와 메뉴를 구성하는 서비스로 분류됩니다.<br/>

<span class="font20">1)</span><b class="font20"> 메뉴 추가/삭제</b> <br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/ScreenStructure/01. MenuAdd.png" class="boxBorder" style="position: relative;top: 5px; width:300px"> <br/>

<span class="font18">①</span><b class="font18"> 메뉴 추가</b> <br/>
추가하고자 하는 업무 메뉴를 선택한 후 오른쪽 마우스를 클릭하면 Context Menu가 활성화됩니다. <br/>
활성화된 메뉴에서 메뉴 추가 선택하면 됩니다.
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
메뉴 안에 메뉴를 추가하는 것은 가능하지만 서비스가 있는 경우에는 메뉴 추가가 안됩니다.
:::
<!-- -->

<span class="font18">②</span><b class="font18"> 서비스 추가</b> <br/>
추가하고자 하는 업무 메뉴를 선택한 후 오른쪽 마우스를 클릭하면 Context Menu가 활성화됩니다.<br/>
활성화된 메뉴에서 서비스 추가 선택하면 됩니다.
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
메뉴 안에 메뉴가 있는 경우에는 서비스 추가가 안됩니다.
:::
<!-- -->

<span class="font18">③</span><b class="font18"> 삭제</b> <br/>
삭제하고자 하는 업무 메뉴를 선택한 후 삭제하면 됩니다.
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
삭제 처리 시 삭제된 서비스는 <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/recycle.png" style="width:20px;"> (recycle)로 이동됩니다. 사용자 실수로 서비스 삭제 시에는 휴지통으로 이동한 후 해당 서비스를 복원 처리하면 됩니다.
:::
<!-- -->

<span class="font18">④</span><b class="font18"> 공통메뉴 추가</b> <br/>
메뉴 추가 방식과 동일하며, 공통메뉴로 추가 시 아이콘으로 분류 표현됩니다.

<span class="font20">2)</span><b class="font20"> 메뉴 속성 설정</b> <br/>
<img class="boxBorder" src="../../.vuepress/public/documentation/service-model/Structure/ScreenStructure/MenuProperty.png" style="width:350px"> <br/>

<span class="font18">(1)</span><b class="font18"> 0. MENU정보</b> <br/>

<span class="font18">①</span><b class="font18"> 0. MENU ID </b><br/>
해당 메뉴의 고유 번호입니다.

<span class="font18">(2)</span><b class="font18"> 1. 기초정보</b> <br/>

<span class="font18">①</span><b class="font18"> 1. LABEL</b> <br/>
해당 메뉴의 이름을 입력합니다.

<span class="font18">②</span><b class="font18"> ReadOnly</b> <br/>
Tool Box > Users > User Manager의 ReadOnly 여부에 따라 서비스 모델 접근이 됩니다.

<span class="font18">③</span><b class="font18"> 작업완료설정</b> <br/>
작업 완료 상태에서는 서비스 수정이 불가 처리됩니다. 해당 기능은 권한이 할당된 사용자만 변경이 가능합니다.

<span class="font18">(3)</span><b class="font18"> 2. CLASS정보</b> <br/>

<span class="font18">①</span><b class="font18"> 1. PACKAGE명</b> <br/>
&lt;SYSID&gt;는 별도로 해당 프로젝트명을 설정할 경우 &lt;SYSID&gt; 태그 안에 해당 프로젝트명을 넣어 설정하고 그 이외에는 &lt;DEFAULT&gt;로 설정됩니다.<br>

<span class="font18">②</span><b class="font18"> 2. CLASS명</b> <br/>
메소드를 분류할 수 있도록 클래스를 입력합니다.
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
- 미리 입력하는 경우 해당 메뉴 안에 서비스를 추가할 때마다 서비스 속성 창에 CLASS 정보들이 자동으로 입력됩니다.

- 해당 정보는 서비스일 때 유효하며, 프레임워크 특성상 메뉴 별 클래스 명은 중복되면 안됩니다.
:::
<!-- -->

<span class="font18">(4)</span><b class="font18"> 3. JSP정보</b> <br/>
<span class="font18">①</span><b class="font18"> JSP 경로</b> <br/>
Return Type이 Jsp인 서비스를 소유한 Class일 때 선택적으로 사용합니다. 
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
해당 정보는 서비스일 때 유효합니다.
:::
<!-- -->

<span class="font18">(5)</span><b class="font18"> 내용설명</b> <br/>

<span class="font18">①</span><b class="font18"> 첨부파일</b> <br/>
해당 메뉴에 설계서, 의뢰서, 확인 요청 등 파일들을 업로드 및 다운로드하는 기능입니다.
<img src="../../.vuepress/public/documentation/service-model/Structure/ScreenStructure/02_05_01. File.png" style="width:500px"> <br/>

<span class="font20">3)</span><b class="font20"> 서비스 추가/삭제</b> <br/>

<span class="font18">(1) 메뉴에서 마우스 오른쪽 버튼을 클릭했을 때</span> <br/>
<img class="boxBorder" src="../../.vuepress/public/documentation/service-model/Structure/ScreenStructure/03_01. ServiceMenuRight.png" style="width:300px"> <br/>

<span class="font18">①</span><b class="font18"> 서비스 추가</b> <br/>
추가하고자 하는 업무 메뉴를 선택한 후 마우스 오른쪽 버튼을 클릭하면 Context Menu가 활성화됩니다.<br/>
활성화된 메뉴에서 서비스 추가 선택하면 됩니다.
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
메뉴 안에 메뉴가 있는 경우에는 서비스 불가합니다.
:::
<!-- -->
<span class="font18">②</span><b class="font18"> 삭제</b> <br/>
삭제하고자 하는 업무 메뉴를 선택한 후 삭제하면 됩니다.
 <!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
삭제 처리 시 삭제된 서비스는 <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/recycle.png" style="width:20px;"> (recycle)로 이동됩니다. 사용자 실수로 서비스 삭제 시에는 휴지통으로 이동한 후 해당 서비스를 복원 처리하면 됩니다.
:::
<!-- -->

<span class="font18">(2) 서비스에서 마우스 오른쪽 버튼을 클릭했을 때</span> <br/>
<img class="boxBorder" src="../../.vuepress/public/documentation/service-model/Structure/ScreenStructure/03_02. ServiceRight.png" style="position: relative;top: 5px; width:300px"> <br/>

<span class="font18">①</span><b class="font18"> 삭제</b> <br/>
삭제하고자 하는 업무 서비스를 선택한 후 오른쪽 마우스를 클릭하면 Context Menu가 활성화됩니다.<br/>
활성화된 메뉴에서 삭제를 선택하면 됩니다.
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
삭제 처리 시 삭제된 서비스는 <img class="iconB"  src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/recycle.png" style="width:20px;"> (recycle)로 이동됩니다. 사용자 실수로 서비스 삭제 시에는 휴지통으로 이동한 후 해당 서비스를 복원 처리하면 됩니다.
:::
<!-- -->
<span class="font18">②</span><b class="font18"> 영구삭제</b> <br/>
 삭제 버튼과 똑같이 삭제하고자 하는 업무 서비스를 선택한 후 오른쪽 마우스를 클릭하면 Context Menu가 활성화됩니다. 활성화된 메뉴에서 영구삭제를 선택하면 됩니다. 
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
영구삭제 시에는 <img class="iconB" src="../../.vuepress/public/documentation/service-model/Structure/Tool_Box/recycle.png" style="width:20px;"> (recycle)에서 복원이 불가능합니다.
:::
<!-- -->
<span class="font18">③</span><b class="font18"> Pex복사</b> <br/>
PEX복사 기능은 Interface BOC에 있는 PEX BOC를 간편하게 사용할 수 있도록 지원하는 기능입니다. 다른 업무 서비스에서 해당 서비스를 호출하여 해당 서비스의 결과를 활용하고 싶을 때 사용하는 기능입니다. 복사 처리 시 해당 서비스를 호출하기 위해 필요로 하는 정보를 복사합니다.<br/>
복사된 서비스 정보를 이용하여 사용하고자 하는 서비스에서 PEX 붙여넣기 하면 됩니다.

<span class="font20">4)</span><b class="font20"> 서비스 속성 설정</b> <br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/ScreenStructure/ServiceProperty.png" class="boxBorder" style="width:350px "> <br/>

<span class="font18">(1)</span><b class="font18"> 0. MENU정보</b> <br/>

<span class="font18">①</span><b class="font18"> 0. MENU ID</b> <br/>
메뉴의 고유 번호입니다.

<span class="font18">(2)</span><b class="font18"> 1. 기초정보</b> <br/>

<span class="font18">①</span><b class="font18"> 1. LABEL</b> <br/>
해당 서비스의 이름을 입력합니다.

<span class="font18">②</span><b class="font18"> 2. 서비스 ID</b> <br/>
메뉴 안에 있는 서비스의 고유 번호입니다.
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
CLASS 정보 안에 METHOD 명을 입력시 서비스 ID는 입력한 METHOD 명으로 자동 입력됩니다.
:::
<!-- -->
<span class="font18">③</span><b class="font18"> 3. ALIAS</b> <br/>
서비스 ID 이외 업무 전체적으로 중복이 발생하지 않는 별칭을 할당하여 사용할 수 있습니다. <br/>
해당 ID는 스프링에서 Annotation 호출 명에 중복 방지를 위해서 사용할 수 있습니다.

<span class="font18">④</span><b class="font18"> ReadOnly</b> <br/>
Tool Box > Users > User Manager의 ReadOnly 여부에 따라 서비스 모델 접근이 됩니다.

<span class="font18">⑤</span><b class="font18"> SaveLock</b> <br/>
마지막으로 작업한 개발자가 Lock을 "YES"로 했을 경우 해당 서비스는 Lock이 걸려있으므로 다른 개발자는 수정하지 못합니다. 
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
"YES"로 설정한 개발자가 "NO"로 변경하지 않아도 Lock은 최대 하루가 지나는 경우 자동으로 "NO"로 변경이 됩니다.
:::
<!-- -->

<span class="font18">(3)</span><b class="font18"> 2. CLASS정보</b> <br/>

<span class="font18">①</span><b class="font18"> 1. PACKAGE명</b> <br/>
&lt;SYSID&gt;는 별도로 해당 프로젝트명을 설정하는 경우 &lt;SYSID&gt; 태그 안에 해당 프로젝트명을 넣어 설정하고 그 이외에는 &lt;DEFAULT&gt;로 설정됩니다.

<span class="font18">②</span><b class="font18"> 2. CLASS명</b> <br/>
메소드를 분류할 수 있도록 클래스를 입력합니다.

<span class="font18">③</span><b class="font18"> 3. METHOD명</b> <br/>
해당 서비스의 메소드를 입력합니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
- 메뉴에서 CLASS 정보들을 미리 입력하는 경우 추가된 서비스 속성 창에 CLASS 정보들이 자동으로 입력됩니다.

- 해당 정보는 서비스일 때 유효하며, 프레임워크 특성상 메뉴 별 클래스 명은 중복되면 안 됩니다.
:::
<!-- -->

<span class="font18">(4)</span><b class="font18"> 3. JSP정보</b> <br/>
해당 서비스의 출력유형이 JSP일 때 설정이 되어 있는 JSP 파일로 처리 결과를 Forwarding합니다.<br/>
<span class="font18">①</span><b class="font18"> JSP 경로</b> <br/>
Return Type이 JSP인 서비스를 소유한 클래스일 때 선택적으로 사용합니다. 단, 해당 정보는 서비스일 때 유효합니다.

<span class="font18">②</span><b class="font18"> JSP 파일명</b> <br/>
Return Type이 JSP일 때 해당 JSP의 파일명을 입력합니다.

<span class="font18">(5)</span><b class="font18"> 5. 처리유형</b> <br/>
해당 서비스의 출력유형이 JSP일 때 설정이 되어 있는 JSP 파일로 처리 결과를 Forwarding합니다. <br/>
<span class="font18">①</span><b class="font18"> APPL유형</b> <br/>
기본값은 "Online"입니다.<br/>
Spring + ( Ibatis, Mybatis) 형식에서는 적용되지 않습니다. WizframeWork 사용 시 해당 기능이 유효합니다.

<span class="font18">②</span><b class="font18"> 출력유형</b> <br/>
"Online" 화면일 때 서비스 처리 후 결과를 Forward 하는 방식을 정의합니다. JSP 화면을 Forward 하고자 할 때에는 JSP를 선택해주고, Ajax를 통하여 데이터만 클라이언트로 전송할 때에 XML로 정의하면 됩니다. XML로 처리시에는 클라이언트와 통신하기 위한 Data Layout Interface를 적용하여야 합니다. <br/>

<span class="font18">(6)</span><b class="font18"> 6. 최종작업정보</b> <br/>
해당 서비스 내에 모델을 변경한 최종 작업일/작업자 정보를 확인할 수 있습니다.<br/>
<span class="font18">①</span><b class="font18"> 작업일</b> <br/>
최근에 해당 서비스를 작업한 날짜 정보를 확인할 수 있습니다.

<span class="font18">②</span><b class="font18"> 작업자ID</b> <br/>
최근에 해당 서비스를 작업한 개발자 ID 정보를 확인할 수 있습니다.

<span class="font18">(6)</span><b class="font18"> 7. Test</b> <br/>
<span class="font18">①</span><b class="font18"> TEST DB</b> <br/>
개발 시 개발 DB와 운영 DB가 다를 경우 운영 DB를 등록하여 테스트를 할 수 있습니다.

## 3. 화면 메뉴 검색

화면 메뉴 검색은 화면 메뉴에서 찾고자 하는 메뉴나 서비스를 검색할 수 있습니다.

<span class="font18">① 찾고자 하는 메뉴나 서비스명을 입력합니다.</span> <br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/MenuSerch/menuSerch.png" class="boxBorder" style="width:200px "> <br/>

<span class="font18">② 입력 후 Enter 키를 눌러 원하는 메뉴나 서비스명을 검색합니다.</span> <br/>

<span class="font18">③ 검색한 결과의 대상 메뉴나 서비스가 Service Model의 화면 메뉴구조영역에 표시됩니다.</span> <br/>
<img src="../../.vuepress/public/documentation/service-model/Structure/MenuSerch/menuList.png" class="boxBorder" style="width:200px "> <br/>

<style type='text/css'>
  [class*="boxBorder"] { border: 1px solid #bbb; }
  [class*="font20"] { font-size: 20px }
  [class*="font18"] { font-size: 18px }
  [class="spanBtn"] { border: 1px solid #bbb;border-radius: 4px;padding: 3px;background:white; color:dimgrey; }
  [class="spanBtnS"] { border: 1px solid #bbb;border-radius: 4px;padding: 3px;background:white; color:dimgrey; font-size:13px }
  [class="spanBtnGS"] { border: 1px solid #bbb; border-radius: 4px;padding: 3px;color:forestgreen; background:white; font-size:13px; }
  [class="spanEx2"] { font-size: 18px; color: #00a4ff; }
  [class="spanEx"] { color: #00a4ff; }
  [class="fontB"] { color: rgb(106, 139, 173); font-size:18px }
  [class*="iconB"] { position: relative; top: 5px; }
</style>