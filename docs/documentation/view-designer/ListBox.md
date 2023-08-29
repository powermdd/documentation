<<<<<<< HEAD
# ListBox
=======
# <img src="../../.vuepress/public/documentation/view-designer/Structure/Tool_Box/ListBox.png" style="position: relative;top: 5px;" width="40" height="40"> (ListBox)
리스트박스 기능을 처리하는 컴포넌트입니다. 

<b style="font-size: 20px"> 1) 컴포넌트 이미지 </b> <br/>
도구상자에서 ListBox 컴포넌트를 선택하여 화면작업 영역에 디자인합니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/ListBox/ListBox_Image.png" style="border: 1px solid #bbb;" width="100" height="100"> <br/>

<b style="font-size: 20px"> 2) 컴포넌트 속성 </b> <br/>
화면작업 창에서 ListBox 컴포넌트 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br/>
<b style="font-size: 18px"> (1) A.Data </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/ListBox/ListBox_Data.png"  style="border: 1px solid #bbb;" width="300" height="120"/> 

<b style="font-size: 18px"> ① Bind:Column </b> <br/>
UI 화면작업 창의 Dataset 탭에서 등록한 Dataset Column을 할당하는 부분입니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/ListBox/ListBox_Bind_Column.png"  width="400" height="300"/> 

<b style="font-size: 18px"> ② Dataset </b> <br/>
할당된 Dataset 명 표시합니다. <br/>

<b style="font-size: 18px"> ③ DefaultItem </b> <br/>
해당 컴포넌트의 초기값을 설정합니다.  <span style="color: #00a4ff;">Ex) Select, ==선택==, 선택하세요. </span> <br/>
해당 속성을 쓰고 싶지 않다면, 공백으로 처리합니다.

<b style="font-size: 18px"> ④ Item:Dataset </b> <br/>
해당 컴포넌트의 리스트 목록 부분 Dataset을 할당합니다.

<b style="font-size: 18px"> ⑤ Item:Label </b> <br/>
해당 컴포넌트의 리스트 목록 부분 Label 할당합니다.
<img src="../../.vuepress/public/documentation/view-designer/ListBox/ListBox_Item_Label.png"  width="400" height="300"/> 

<b style="font-size: 18px"> ⑥ Item:Value </b> <br/>
해당 컴포넌트의 리스트 목록 부분 실제 값을 할당합니다.
<img src="../../.vuepress/public/documentation/view-designer/ListBox/ListBox_Item_Value.png"  width="400" height="300"/> 

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
- Dataset Bind 했을 경우 <span style="color: #00a4ff;">Dataset_Column</span>으로 해당 컴포넌트 ID가 자동으로 변환됩니다. <br/>
<span style="color: #00a4ff;">Ex) Dataset : S01     Column : LIST  ⇒ 컴포넌트 ID : S01_LIST </span>
-  콤보박스 Dataset <br/>
<img src="../../.vuepress/public/documentation/view-designer/ComboBox/ComboBox_Item_Value_remark(1).png"  style="border: 1px solid #bbb;" width="250" height="100"/> <div style="color: #6a8bad;display: inline-block;/* height: 100px; */bottom: 42px;position: relative;"> ▶ </div> <img src="../../.vuepress/public/documentation/view-designer/ListBox/ListBox_Item_Value_remark.png"  style="border: 1px solid #bbb;" width="100" height="100"/> <br/>
S01 Dataset <br/>
&emsp;&emsp; LIST : 콤보박스 리스트에서 선택된 값 => 2 <br/>
S02 Dataset <br/>
&emsp;&emsp; COMBO : 콤보박스 리스트에서 보여지는 값이 아닌 실제 값 = > 1, 2, 3, 4, 5 <br/>
&emsp;&emsp; NAME : 콤보박스 리스트에서 보여지는 값 => Service Model, View Designer, ..... <br/>
:::
<!-- -->

<b style="font-size: 18px"> (2) B.CommonElement </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/ListBox/ListBox_CommonElement.png"  style="border: 1px solid #bbb;" width="300" height="80"/> <br/>
<b style="font-size: 18px"> ① Disabled </b> <br/>
값이 True이면 수정 불가능(서버 전송 불가능) False 경우 해당 속성 사용하지 않습니다. 

<b style="font-size: 18px"> ② ID </b> <br/>
해당 컴포넌트의 ID를 설정합니다.  

<b style="font-size: 18px"> ③ NavIndex </b> <br/>
Index 값을 지정 후 Tab 키를 누르면 오름차순으로 이동하게 됩니다. 

<b style="font-size: 18px"> ④ Visible </b> <br/>
해당 컴포넌트를 화면에 보여줄지에 대한 여부를 설정합니다.

<b style="font-size: 18px"> (3) E.Validation </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Secret/Secret_Validation.png"  style="border: 1px solid #bbb;" width="300" height="35"/> <br/> 
<b style="font-size: 18px"> ① Required-AlertMsg </b> <br/>
해당 컴포넌트의 값을 입력하지 않았을 때 발생 되는 메시지 내용을 설정합니다. (submit(debug, requiredmsg)할 때 requiredmsg를 true로 설정합니다.)

<b style="font-size: 20px"> 3) 컴포넌트 이벤트 </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/ComboBox/ComboBox_Event.png"  style="border: 1px solid #bbb;" width="300" height="180"/> <br/>
<b style="font-size: 18px"> (1) 1.MouseEvent </b> <br/>
<b style="font-size: 18px"> ① OnClick </b> <br/>
마우스를 클릭할 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ② OnMosueDown </b> <br/>
마우스 버튼을 누를 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ③ OnMosueMove </b> <br/>
마우스를 움직일 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ④ OnMosueOut </b> <br/>
마우스가 요소를 벗어날 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ⑤ OnMosueOver </b> <br/>
마우스가 요소 안에 들어올 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ⑥ OnMosueUp </b> <br/>
마우스 버튼을 뗄 때 발생하는 이벤트입니다. <br/>

<b style="font-size: 18px"> (2) 2.KeyEvent </b> <br/>
<b style="font-size: 18px"> ① OnBlur </b> <br/>
포커스를 잃었을 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ② OnChange  </b> <br/>
입력필드의 값이 바뀐 후 포커스를 잃었을 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ③ OnFocus </b> <br/>
포커스가 잡혔을 때 발생하는 이벤트입니다. <br/>
>>>>>>> c7bdfee358fbef77e02c35739c51a0da2dd6c2aa
