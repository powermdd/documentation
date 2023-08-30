# Table List
ERD에 작성한 테이블 리스트를 불러옵니다. 중심 상단 TABLE LIST 탭을 클릭해 들어올 수 있습니다.

<b style="font-size: 20px">1) Columns</b><br/>
좌측 테이블 목록에서 Table을 클릭할 때마다 우측 테이블 상세 내역이 변경된다.
<img src="../../.vuepress\public\documentation\data-model\DataModelStr\TableList\TableList.png" style="position: relative;top: 5px;"> <br/>

- <b style="font-size: 20px">Table Name</b><br/>
    작성한 테이블의 물리명을 보여줍니다.

- <b style="font-size: 20px">Logical Name</b><br/>
    작성한 테이블의 논리명을 보여줍니다.

- <b style="font-size: 20px">Note</b><br/>
    테이블에 작성한 비고 내용을 보여줍니다.

- <b style="font-size: 20px">Excel</b><br/>
    현재 선택한 테이블의 내역을 엑셀 파일로 다운로드 받을 수 있습니다.

- <b style="font-size: 20px">Save</b><br/>
    변경한 테이블의 내역을 저장할 수 있습니다.

<b style="font-size: 20px">2) Index/Relation</b><br/>
선택한 테이블의 Index와 Relation을 모아서 확인할 수 있는 화면입니다.
<img src="../../.vuepress\public\documentation\data-model\DataModelStr\TableList\IndexRelation.png" style="position: relative;top: 5px;"> <br/>

- <b style="font-size: 20px">Index information</b><br/>
    특별한 Index가 걸려있는 테이블의 경우, 상단 Index Information에서 조회할 수 있습니다.

- <b style="font-size: 20px">Relation information</b><br/>
    선택한 테이블과 Relation관계에 있는 테이블들을 한번에 조회할 수 있습니다.

<b style="font-size: 20px">3) Script</b><br/>
선택한 테이블의 스크립트를 확인할 수 있는 화면입니다.
<img src="../../.vuepress\public\documentation\data-model\DataModelStr\TableList\Script.png" style="position: relative;top: 5px;"> <br/>

<b style="font-size: 20px">4) DBMS Sync</b><br/>
ERD에 표현된 테이블과 실제 물리 테이블을 비교할 수 있는 화면입니다.
<img src="../../.vuepress\public\documentation\data-model\DataModelStr\TableList\DBMSSync.png" style="position: relative;top: 5px;"> <br/>

- <b style="font-size: 20px">Data Model Sync</b><br/>
    물리적 테이블과 ERD 테이블의 싱크를 맞출 수 있습니다.

- <b style="font-size: 20px">Data Model Table</b><br/>
    ERD에 작성된 테이블의 정보를 보여줍니다.

- <b style="font-size: 20px">Phycial Table(DBMS)</b><br/>
    연결된 데이터베이스에 실제로 생성되어 있는 테이블의 정보를 보여줍니다.