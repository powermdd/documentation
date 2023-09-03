# 파일 매니저

<b style="font-size: 20px">1. Server File Manager</b><br/>
POWERMDD의 설정, 혹은 환경에 관련된 class들이 서버에 어떻게 올라가 있는지에 대한 현황을 볼 수 있습니다. <br/>
<img src="../../.vuepress\public\documentation\Server-FileManager\FileManager\ServerFileManager.png" style="position: relative;top: 5px;"> <br/>

<b style="font-size: 20px">2. 화면 구성</b><br/>
Server File Manager는 4가지 영역으로 구성되어 있습니다.<br/>
<img src="../../.vuepress\public\documentation\Server-FileManager\FileManager\ScreenStructure.png" style="position: relative;top: 5px;"> <br/>
<b style="font-size: 20px">1) 파일 메뉴 Tree 영역 </b><br/>
    Server File들의 위치를 Tree 구조로 보여주는 영역입니다.

<b style="font-size: 20px">2) Tool Box </b><br/>
    해당 폴더 내의 파일들을 전체선택하는 콤보박스, Local에 있는 파일들을 확인할 수 있는 open Download Folder 등의 기능이 있습니다.

<b style="font-size: 20px">3) 선택된 파일의 리스트 영역 </b><br/>
    파일 리스트 및 각 파일의 상세 내용이 표시됩다. 파일을 체크하고 우측 메뉴를 클릭하면 상위 폴더 및 다운로드 등 사용 가능합니다.

<b style="font-size: 20px">4) 파일 Trace 영역 </b><br/>
    Server File Manager에서 실행한 명령들이 Log 형식으로 남는 영역입니다.

<b style="font-size: 20px">5) 개발 작업 Tool </b><br/>
    Application Layer별로 개발을 위한 작업 Tab Control입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
Server File Manager을 사용하기 위해서는 Data 접근 권한이 부여가 되어야 합니다. <br/>
Data 접근 권한을 하기 위해서는 개요에서 Users에서 Data Authorization에 대하여 자세하게 설명이 되어있습니다.
:::
<!-- -->