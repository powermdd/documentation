# <img src="../../.vuepress/public/documentation/view-designer/Structure/Tool_Box/schedule.png" style="position: relative;top: 5px;" width="40" height="40"> (Schedule)
달력 기반의 스케줄 관리기능을 처리하는 컴포넌트입니다.<br/>

<b class="font20"> 1) 컴포넌트 이미지 </b> <br/>
도구상자에서 Schedule 컴포넌트를 선택하여 화면작업 영역에 디자인합니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/schedule/schedule_Image.png" class="boxBorder" width="150" height="110"> <br/>

<b class="font20"> 2) 컴포넌트 속성 </b> <br/>
화면작업 창에서 Schedule 컴포넌트 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br/>
<b class="font18"> (1) A.Data </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/schedule/schedule_Data.png"  class="boxBorder" width="300" height="30"/> <br/>
<b class="font18"> ① Dataset </b> <br/>
할당된 Dataset 명 표시합니다.<br/>
<img src="../../.vuepress/public/documentation/view-designer/schedule/schedule_Dataset.png" width="400" height="260"/> <br/>

<b class="font18"> (2) C.ControlElement </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/schedule/schedule_ControlElement.png"  class="boxBorder"  width="300" height="240"/> <br/>
<b style="font-size: 18px"> ① ButtonLocation </b> <br/>
버튼 기능 및 위치를 설정합니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/schedule/schedule_ButtonLocation.png"  width="400" height="250"/> <br/>

- Top, Bottom <br/>
Date 부분의 위치를 설정합니다. <br/>
- Left, Center, Right Area <br/>
왼쪽, 가운데, 오른쪽 영역에 대한 버튼을 체크박스로 클릭하여 해당 버튼들을 추가 및 제거합니다.<br/>
- Location <br/>
버튼을 상위에 둘 것인지 하위에 둘 것인지 선택합니다.<br/>
- Change Text <br/>
해당 컬럼을 원하는 텍스트로 변경이 가능합니다.<br/>

<b style="font-size: 18px"> ② DataLimit </b> <br/>
Day에 표시되는 데이터 제한을 설정합니다.  

<b style="font-size: 18px"> ③ DefalutDate </b> <br/>
달력이 처음 로드될 때 표시되는 초기 날짜를 설정합니다. 

<b style="font-size: 18px"> ④ DefaultView </b> <br/>
달력이 처음 로드될 때 보기를 설정합니다. 

- <b>month</b><br/>
월 단위로 보기를 설정합니다.<br/>
- <b>basicWeek</b><br/>
주 단위로 보기를 설정합니다.<br/>
- <b>basicDay</b><br/>
일 단위로 보기를 설정합니다.<br/>
- <b>agendaWeek</b><br/>
시간 포함한 주 단위로 보기를 설정합니다.<br/>
- <b>agendaDay</b><br/>
시간 포함한 일 단위로 보기를 설정합니다.<br/>
- <b>listYear</b><br/>
리스트 형식의 해 단위로 보기를 설정합니다.<br/>
- <b>listMonth</b><br/>
리스트 형식의 월 단위로 보기를 설정합니다.<br/>
- <b>listWeek</b><br/>
리스트 형식의 주 단위로 보기를 설정합니다.<br/>
- <b>listDay</b><br/>
리스트 형식의 일 단위로 보기를 설정합니다.<br/>

<b style="font-size: 18px"> ⑤ editable </b> <br/>
일정 수정을 드래그로 변경할 수 있는지에 대한 여부를 설정합니다. 

<b style="font-size: 18px"> ⑥ FixedWeekCount </b> <br/>
true일 경우 월별보기에 표시되는 Week 수는 항상 6주입니다. false일 경우 월에 따라 Week 수가 변경됩니다. 

<b style="font-size: 18px"> ⑦ Locale </b> <br/>
해당 컴포넌트의 언어를 설정합니다. <br/>

<b style="font-size: 18px"> ⑧ navLinks </b> <br/>
true일 경우 Week와 Day를 클릭할 수 있게 된다. 클릭 후 해당 일/주를 나타내는 화면으로 이동합니다. ]

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> <b> Schedule 사용 예 </b>
<img src="../../.vuepress/public/documentation/view-designer/schedule/schedule_Ex(1).png"  style="border: 1px solid #bbb;" width="500" height="40"/> <br/> 
<b>1. Dataset 설정 후 매핑</b><br/> 
<img src="../../.vuepress/public/documentation/view-designer/schedule/schedule_Ex(2).png"  style="border: 1px solid #bbb;" width="300" height="130"/><div class="arrow" style="bottom: 50px;"> ▶ </div> <img src="../../.vuepress/public/documentation/view-designer/schedule/schedule_Ex(3).png"  style="border: 1px solid #bbb;" width="350" height="230"/><br/> 

<b>2. 우측 속성에 컬럼 설정</b><br/> 
<img src="../../.vuepress/public/documentation/view-designer/schedule/schedule_Ex(4).png"  style="border: 1px solid #bbb;" width="300" height="100"/> <br/> 

<b>3. 서브미션 생성 후 확인</b><br/> 
<img src="../../.vuepress/public/documentation/view-designer/schedule/schedule_Ex(5).png"  style="border: 1px solid #bbb;" width="300" height="300"/> <br/> 
:::
<!-- -->

<b style="font-size: 18px"> ⑨ S-BgColor </b> <br/>
해당 컴포넌트의 일정에 대한 배경 색상을 설정할 컬럼을 선택합니다. 

<b style="font-size: 18px"> ⑩ S-Date:End </b> <br/>
해당 컴포넌트의 일정에 대한 끝나는 시점을 설정할 컬럼을 선택합니다. <br/>

<b style="font-size: 18px"> ⑪ S-Date:Start </b> <br/>
해당 컴포넌트의 일정에 대한 시작 시점을 설정할 컬럼을 선택합니다. <br/>

<b style="font-size: 18px"> ⑫ S-TextColor </b> <br/>
해당 컴포넌트의 일정에 대한 텍스트 색상을 설정할 컬럼을 선택합니다. <br/>

<b style="font-size: 18px"> ⑬ S-Title </b> <br/>
해당 컴포넌트의 일정에 대한 내용을 설정할 컬럼을 선택합니다. <br/>

<b style="font-size: 18px"> ⑭ S-Url </b> <br/>
해당 컴포넌트의 일정에 대한 URL을 설정할 컬럼을 선택합니다. <br/>

<b style="font-size: 18px"> ⑮ TitleFormat </b> <br/>
Schedule 제목의 Format을 지정합니다. <br/>

<b class="font20"> 3) 컴포넌트 이벤트 </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/schedule/schedule_Event.png"  style="border: 1px solid #bbb;" width="300" height="50"/> <br/> 
<b class="font18"> (1) 1.Event </b> <br/>
<b class="font18"> ① DayClick  </b> <br/>
날짜 또는 시간을 클릭할 때 발생하는 이벤트입니다. <br/>
<b class="font18"> ② EventClick  </b> <br/>
이벤트를 클릭할 때 발생하는 이벤트입니다. <br/>

<style type='text/css'>
  [class*="boxBorder"] { border: 1px solid #bbb; }
  [class*="font20"] { font-size: 20px }
  [class*="font18"] { font-size: 18px }
  [class="boxB"] { background: #6a8bad3b;padding:10px;border-radius: 4px; }
  [class="spanBtn"] { border: 1px solid #bbb; border-radius: 4px;padding: 3px;background:white; clolor:dimgrey; }
  [class="spanEx"] { color: #00a4ff; }
  [class="arrow"] { color: #6a8bad;display: inline-block;position: relative;width:13px; }
</style>