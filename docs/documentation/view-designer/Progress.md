# <img src="../../.vuepress/public/documentation/view-designer/Structure/Tool_Box/Progress.png" style="position: relative;top: 5px;" width="40" height="40"> (Progress)
진행 정도 나타내는 바 형태로 표시하는 컴포넌트입니다.<br/>

<b class="font20"> 1) 컴포넌트 이미지 </b> <br/>
도구상자에서 Progress 컴포넌트를 선택하여 화면작업 영역에 디자인합니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/Progress/Progress_Image.png" class="boxBorder" width="150" height="40"> <br/>

<b class="font20"> 2) 컴포넌트 속성 </b> <br/>
화면작업 창에서 Progress 컴포넌트 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br/>
<b class="font18"> (1) A.Data </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Progress/Progress_Data.png"  class="boxBorder" width="300" height="50"/> <br/>
<b class="font18"> ① Bind:Column </b> <br/>
UI 화면작업 창의 Dataset 탭에서 등록한 Dataset Column을 할당하는 부분입니다. 
<img src="../../.vuepress/public/documentation/view-designer/Progress/Progress_Bind_Column.png" width="400" height="260"/> <br/>

<b class="font18"> ② Dataset </b> <br/>
할당된 Dataset 명 표시합니다.<br/>
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
Dataset Bind 했을 경우 <span class="spanEx">Dataset_Column</span>으로 해당 컴포넌트 ID가 자동으로 변환됩니다. <br/>
<span class="spanEx">Ex) Dataset : S01     Column : PROGRESS  ⇒ 컴포넌트 ID : S01_PROGRESS </span>
:::
<!-- -->
<b class="font18"> (2) B.CommonElement </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Progress/Progress_CommonElement.png"  class="boxBorder"  width="300" height="70"/> <br/>
<b class="font18"> ① ID </b> <br/>
해당 컴포넌트의 ID를 설정합니다.  

<b class="font18"> ② Value </b> <br/>
해당 컴포넌트의 초기값을 입력합니다.  

<b class="font18"> ③ Visible </b> <br/>
해당 컴포넌트를 화면에 보여줄지에 대한 여부를 설정합니다. <br/>

<b class="font18"> (3) C.Control </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Progress/Progress_Control.png"  class="boxBorder"  width="300" height="35"/> <br/>
<b class="font18"> ① Disabled </b> <br/>
값이 True이면 수정 불가능(서버 전송 불가능) False 경우 해당 속성 사용하지 않습니다.  

<b class="font18"> (4) C.ControlElement </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Progress/Progress_ControlElement.png"  class="boxBorder"  width="300" height="35"/> <br/>
<b class="font18"> ① Max Value </b> <br/>
해당 컴포넌트의 최대값을 설정합니다.  

<b class="font20"> 3) 컴포넌트 이벤트 </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/NumUpDown/NumUpDown_Event.png"  style="border: 1px solid #bbb;" width="300" height="200"/> <br/> 
<b class="font18"> (1) 1.MouseEvent </b> <br/>
<b class="font18"> ① OnClick </b> <br/>
마우스를 클릭할 때 발생하는 이벤트입니다. <br/>
<b class="font18"> ② OnMosueDown </b> <br/>
마우스 버튼을 누를 때 발생하는 이벤트입니다. <br/>
<b class="font18"> ③ OnMosueMove </b> <br/>
마우스를 움직일 때 발생하는 이벤트입니다. <br/>
<b class="font18"> ④ OnMosueOut </b> <br/>
마우스가 요소를 벗어날 때 발생하는 이벤트입니다. <br/>
<b class="font18"> ⑤ OnMosueOver </b> <br/>
마우스가 요소 안에 들어올 때 발생하는 이벤트입니다. <br/>
<b class="font18"> ⑥ OnMosueUp </b> <br/>
마우스 버튼을 뗄 때 발생하는 이벤트입니다. <br/>

<b class="font18"> (2) 2.KeyEvent </b> <br/>
<b class="font18"> ① OnBlur </b> <br/>
포커스를 잃었을 때 발생하는 이벤트입니다. <br/>
<b class="font18"> ② OnChange  </b> <br/>
입력필드의 값이 바뀐 후 포커스를 잃었을 때 발생하는 이벤트입니다. <br/>
<b class="font18"> ③ OnFocus </b> <br/>
포커스가 잡혔을 때 발생하는 이벤트입니다. <br/>
<b class="font18"> ④ OnSelect </b> <br/>
마우스로 입력된 텍스트를 드래그했을 때 발생하는 이벤트입니다. <br/>


<style type='text/css'>
  [class*="boxBorder"] { border: 1px solid #bbb; }
  [class*="font20"] { font-size: 20px }
  [class*="font18"] { font-size: 18px }
  [class="boxB"] { background: #6a8bad3b;padding:10px;border-radius: 4px; }
  [class="spanBtn"] { border: 1px solid #bbb; border-radius: 4px;padding: 3px;background:white; clolor:dimgrey; }
  [class="spanEx"] { color: #00a4ff; }
  [class="arrow"] { color: #6a8bad;display: inline-block;position: relative;width:13px; }
</style>