# <img src="../../.vuepress/public/documentation/view-designer/Structure/Tool_Box/Radio.png" style="position: relative;top: 5px;" width="40" height="40"> (Radio)
라디오 버튼 기능을 처리하는 컴포넌트입니다.

<b style="font-size: 20px"> 1) 컴포넌트 이미지 </b> <br/>
도구상자에서 Radio 컴포넌트를 선택하여 화면작업 영역에 디자인합니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/Radio/Radio_Image.png" style="border: 1px solid #bbb;" width="30" height="30"> <br/>

<b style="font-size: 20px"> 2) 컴포넌트 속성 </b> <br/>
화면작업 창에서 Radio 컴포넌트 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br/>
<b style="font-size: 18px"> (1) A.Data </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Radio/Radio_Data.png"  style="border: 1px solid #bbb;" width="300" height="75"/> <br/>
<b style="font-size: 18px"> ① Bind:Column </b> <br/>
UI 화면작업 창의 Dataset 탭에서 등록한 Dataset Column을 할당하는 부분입니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/Radio/Radio_Bind_Column.png"  width="400" height="300"/> 

<b style="font-size: 18px"> ② CheckValue </b> <br/>
당 컴포넌트를 체크했을 때의 값을 설정합니다. (단, 값을 설정하지 않으면 체크 시 값은 “on”입니다.)<br/>

<b style="font-size: 18px"> ③ Dataset </b> <br/>
할당된 Dataset 명 표시합니다. <br/>
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
Dataset Bind 했을 경우 <span style="color: #00a4ff;">Dataset_Column</span>으로 해당 컴포넌트 ID가 자동으로 변환됩니다. <br/>
<span style="color: #00a4ff;">Ex) Dataset : S01     Column : RADIO  ⇒ 컴포넌트 Name : S01_RADIO </span>
:::
<!-- -->

<b style="font-size: 18px"> (2) B.CommonElement </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Radio/Radio_CommonElement.png"  style="border: 1px solid #bbb;" width="300" height="90"/> <br/>
<b style="font-size: 18px"> ① Disabled </b> <br/>
값이 True이면 수정 불가능(서버 전송 불가능) False 경우 해당 속성 사용하지 않습니다. 

<b style="font-size: 18px"> ② ID </b> <br/>
해당 컴포넌트의 ID를 설정합니다.  

<b style="font-size: 18px"> ③ Name </b> <br/>
해당 컴포넌트의 Name을 설정합니다.

<b style="font-size: 18px"> ④ NavIndex </b> <br/>
Index 값을 지정 후 Tab 키를 누르면 오름차순으로 이동하게 됩니다.
<b style="font-size: 18px"> ⑤ Visible </b> <br/>
해당 컴포넌트를 화면에 보여줄지에 대한 여부를 설정합니다. 

<b style="font-size: 18px"> (3) C.ControlElement </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Radio/Radio_ControlElement.png"  style="border: 1px solid #bbb;" width="300" height="35"/> <br/> 
<b style="font-size: 18px"> ① Checked </b> <br/>
해당 컴포넌트의 초기값을 체크 상태 여부를 설정합니다. 

<b style="font-size: 20px"> 3) 컴포넌트 이벤트 </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Checkbox/Checkbox_Event.png"  style="border: 1px solid #bbb;" width="300" height="160"/> <br/> 
<b style="font-size: 18px"> (1) 1.MouseEvent </b> <br/>
<b style="font-size: 18px"> ① OnClick </b> <br/>
마우스를 클릭할 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ② OnMosueMove </b> <br/>
마우스를 움직일 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ③ OnMosueOut </b> <br/>
마우스가 요소를 벗어날 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ④ OnMosueOver </b> <br/>
마우스가 요소 안에 들어올 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ⑤ OnMosueUp </b> <br/>
마우스 버튼을 뗄 때 발생하는 이벤트입니다.

<b style="font-size: 18px"> (2) 2.KeyEvent </b> <br/>
<b style="font-size: 18px"> ① OnChange </b> <br/>
체크했을 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ② OnFocus </b> <br/>
포커스가 잡혔을 때 발생하는 이벤트입니다. <br/>
