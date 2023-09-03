# <img src="../../.vuepress/public/documentation/view-designer/Structure/Tool_Box/Label.png" style="position: relative;top: 5px;" width="40" height="40"> (Label)
텍스트 라벨을 표시하는 컴포넌트입니다.

<b style="font-size: 20px"> 1) 컴포넌트 이미지 </b> <br/>
도구상자에서 Label 컴포넌트를 선택하여 화면작업 영역에 디자인합니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/Label/Label_Image.png" style="border: 1px solid #bbb;" width="150" height="40"> <br/>

<b style="font-size: 20px"> 2) 컴포넌트 속성 </b> <br/>
화면작업 창에서 Label 컴포넌트 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br/>
<b style="font-size: 18px"> (1) A.Data </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Label/Label_Data.png"  style="border: 1px solid #bbb;" width="300" height="50"/> 

<b style="font-size: 18px"> ① Bind:Column </b> <br/>
UI 화면작업 창의 Dataset 탭에서 등록한 Dataset Column을 할당하는 부분입니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/Label/Label_Bind_Column.png"  width="400" height="300"/> 

<b style="font-size: 18px"> ② Dataset </b> <br/>
할당된 Dataset 명 표시합니다. <br/>
<!-- Remark -->
<<<<<<< HEAD
::: details <Badge type="tip" text="Remark" vertical="middle" /> 
=======
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
>>>>>>> c7bdfee358fbef77e02c35739c51a0da2dd6c2aa
Dataset Bind 했을 경우 <span style="color: #00a4ff;">Dataset_Column</span>으로 해당 컴포넌트 ID가 자동으로 변환됩니다. <br/>
<span style="color: #00a4ff;">Ex) Dataset : LABEL     Column : NAME  ⇒ 컴포넌트 ID : LABEL_NAME </span>
:::
<!-- -->

<b style="font-size: 18px"> (2) B.CommonElement </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Label/Label_CommonElement.png"  style="border: 1px solid #bbb;" width="300" height="100"/> <br/>
<b style="font-size: 18px"> ① ID </b> <br/>
해당 컴포넌트의 ID를 설정합니다. 

<b style="font-size: 18px"> ② Label </b> <br/>
화면에 보여주는 텍스트를 입력합니다. 

<b style="font-size: 18px"> ③ Text-Align </b> <br/>
입력한 텍스트 정렬을 설정입니다. 

<b style="font-size: 18px"> ④ TextHeignt </b> <br/>
입력한 텍스트 높이 정렬을 설정입니다. 
<!-- Remark -->
<<<<<<< HEAD
::: details <Badge type="tip" text="Remark" vertical="middle" /> 
=======
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
>>>>>>> c7bdfee358fbef77e02c35739c51a0da2dd6c2aa
텍스트 높이를 0으로 설정했을 경우 텍스트 높이가 해당 컴포넌트 높이로 자동으로 정렬이 됩니다. 
:::
<!-- -->
<b style="font-size: 18px"> ⑤ Visible </b> <br/>
해당 컴포넌트를 화면에 보여줄지에 대한 여부를 설정합니다. <br/>

<b style="font-size: 18px"> (3) C.ControlElement </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Label/Label_ControlElement.png"  style="border: 1px solid #bbb;" width="300" height="50"/> <br/> 
<b style="font-size: 18px"> ① ForValue </b> <br/>
다른 컴포넌트 ID를 설정 후 해당 컴포넌트를 클릭 시 해당 ID의 컴포넌트로 포커가 이동이 됩니다. 

<b style="font-size: 18px"> ② InitValue </b> <br/>
동적으로 화면에 보여주는 텍스트를 입력합니다. <span style="color: #00a4ff;">Ex) ${LABEL.NAME} </span>

<b style="font-size: 20px"> 3) 컴포넌트 이벤트 </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Label/Label_Event.png"  style="border: 1px solid #bbb;" width="300" height="150"/> <br/> 
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
<b style="font-size: 18px"> ① OnFocus </b> <br/>
포커스가 잡혔을 때 발생하는 이벤트입니다. <br/>
