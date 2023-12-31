# UI 화면 개발 도구

<b class="font20"> 1. View Designer </b> <br/>
비즈니스 UI 개발 플랫폼으로 사용자 작업 화면 제작 관련 다양한 컴포넌트 및 Script를 제공합니다. 
POWERMDD의 View Designer는 Web Application의 UI 화면 개발 도구입니다.
웹 표준 기반의 UI 플랫폼으로 쉽고 빠른 UX 완성을 위한 다양한 화면 Control 및 사용자 편의 기능을 제공합니다. 

기존의 MDD 도구는 일반적으로 UI 화면을 다른 X-Internet 기반의 개발 도구로 개발하고 모델과 연계하는 방식으로 Web Application을 완성하는 형태지만 POWERMDD는 Service Model과 View Designer를 하나의 통합개발환경으로 제공합니다.
Service Model과 통합된 View Designer는 이미 개발된 서비스 모델과 연동 작업 시 다양한 자동화를 통해 개발자의 편의성 및 개발 생산성을 극대화합니다.

또한, View Designer는 Web Application의 표준 프레임워크인 MVC 모델을 지원하기 때문에 그 자체로도 독립적인 개발 도구로서 사용이 가능하며, Service Model도 다른 X-Internet기반 UI 개발 도구와 연동이 가능하기 때문에 어떠한 개발 환경에서도 사용할 수 있습니다.

<img src="../../.vuepress\public\documentation\view-designer\README\README_View_Designer.png"> <br/>

<b class="font20"> 2. 화면 구성 </b> <br/>
View Designer 작업 화면은 총 9개 layout으로 구성되어 있습니다.
<img src="../../.vuepress\public\documentation\view-designer\README\README_ScreenStructure.png"> <br/>

<b class="font20"> 1)도구상자 </b> <br/>
View Designer에서 사용하는 도구상자로 디자인한 내용을 저장하거나 화면디자인에 필요한 Control, 저장 및 크기 조절 등의 주요 작업 이외에 다양한 기능을 제공하고 있습니다.

<b class="font20"> 2) 화면 메뉴 구조 영역 </b> <br/>
업무 구조를 Tree View 형식으로 표현한 메뉴로 UI 화면의 메뉴 카테고리 영역입니다.

<b class="font20"> 3) 화면 메뉴 검색 </b> <br/>
화면 메뉴에서 찾고자 하는 메뉴나 서비스를 검색하여 Enter 키를 누르면 전체 화면 메뉴에서 해당 메뉴나 화면을 파란색 글씨로 나타냅니다.

<b class="font20"> 4) 화면 작업 영역 </b> <br/>
화면을 디자인하거나 Dataset 등록, Script, CSS 및 Build를 작업하는 화면입니다.

<b class="font20"> 5) 메시지 영역 </b> <br/>
화면 실행에 대한 테스트 및 업무 메뉴에서 선택된 Node에 대한 기본정보를 제공함과 필요에 따라 Description을 제공합니다.

<b class="font20"> 6) 속성 영역 </b> <br/>
화면디자인에 대한 속성이나 각 컨트롤에 대한 이벤트 및 서브미션을 설정할 수 있습니다.

<b class="font20"> 7) 컨트롤 리스트 </b> <br/>
화면에서 사용된 컨트롤 목록이며, 해당 컨트롤이 어디에 있는지도 확인이 가능합니다.

<b class="font20"> 8) Service Model </b> <br/>
UI와 연동할 Service Model의 메뉴나 서비스 확인이 가능합니다.

<b class="font20"> 9) 개발 작업 Tool </b> <br/>
Application Layer별로 개발을 위한 작업 Tab Control입니다.

<style type='text/css'>
  [class*="boxBorder"] { border: 1px solid #bbb; }
  [class*="font20"] { font-size: 20px }
  [class*="font18"] { font-size: 18px }
  [class="boxB"] { background: #6a8bad3b;padding:10px;border-radius: 4px; }
  [class="spanBtn"] { border: 1px solid #bbb; border-radius: 4px;padding: 3px;background:white; color:dimgrey; }
  [class="spanEx"] { color: #00a4ff; }
  [class="arrow"] { color: #6a8bad;display: inline-block;position: relative;width:13px; }
</style>