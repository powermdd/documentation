# <img src="../../.vuepress/public/documentation/view-designer/Structure/Tool_Box/Secret.png" style="position: relative;top: 5px;" width="40" height="40"> (Secret)
비밀번호 입력을 처리하는 컴포넌트입니다.

<b style="font-size: 20px"> 1) 컴포넌트 이미지 </b> <br/>
도구상자에서 Secret 컴포넌트를 선택하여 화면작업 영역에 디자인합니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/Secret/Secret_Image.png" style="border: 1px solid #bbb;" width="150" height="40"> <br/>

<b style="font-size: 20px"> 2) 컴포넌트 속성 </b> <br/>
화면작업 창에서 Secret 컴포넌트 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br/>
<b style="font-size: 18px"> (1) A.Data </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Secret/Secret_Data.png"  style="border: 1px solid #bbb;" width="300" height="50"/> 

<b style="font-size: 18px"> ① Bind:Column </b> <br/>
UI 화면작업 창의 Dataset 탭에서 등록한 Dataset Column을 할당하는 부분입니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/Secret/Secret_Bind_Column.png"  width="400" height="300"/> 

<b style="font-size: 18px"> ② Dataset </b> <br/>
할당된 Dataset 명 표시합니다. <br/>
<!-- Remark -->
<<<<<<< HEAD
::: details <Badge type="tip" text="Remark" vertical="middle" /> 
=======
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
>>>>>>> c7bdfee358fbef77e02c35739c51a0da2dd6c2aa
Dataset Bind 했을 경우 <span style="color: #00a4ff;">Dataset_Column</span>으로 해당 컴포넌트 ID가 자동으로 변환됩니다. <br/>
<span style="color: #00a4ff;">Ex) Dataset : S01     Column : PASSWORD  ⇒ 컴포넌트 ID : S01_PASSWORD </span> 
:::
<!-- -->

<b style="font-size: 18px"> (2) B.CommonElement </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Secret/Secret_CommonElement.png"  style="border: 1px solid #bbb;" width="300" height="130"/> <br/>
<b style="font-size: 18px"> ① ID </b> <br/>
해당 컴포넌트의 ID를 설정합니다.  

<b style="font-size: 18px"> ② Length </b> <br/>
해당 컴포넌트의 길이를 설정합니다. 
<!-- Remark -->
<<<<<<< HEAD
::: details <Badge type="tip" text="Remark" vertical="middle" /> 
=======
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
>>>>>>> c7bdfee358fbef77e02c35739c51a0da2dd6c2aa
빌드를 했을 때 소스 상으로 size로 설정이 되어있지만 style 부분에 width도 같이 설정되어있어서 Length를 확인하려면 해당 컴포넌트 우측 속성에 styleOff을 true로 설정하면 해당 Length만큼 길이를 보여줍니다.
:::
<!-- -->

<b style="font-size: 18px"> ③ MaxLength </b> <br/>
해당 컴포넌트의 최대 길이 제한을 설정합니다. 
<span style="color: #00a4ff;">Ex) 최대 길이가 12인 경우 12자리까지 입력 가능하다.</span>

<b style="font-size: 18px"> ④ NavIndex </b> <br/>
Index 값을 지정 후 Tab 키를 누르면 오름차순으로 이동하게 됩니다. 

<b style="font-size: 18px"> ⑤ ReadOnly </b> <br/>
값이 True이면 포커스는 잡히지만 수정은 불가능합니다. 

<b style="font-size: 18px"> ⑥ Visible </b> <br/>
해당 컴포넌트를 화면에 보여줄지에 대한 여부를 설정합니다. <br/>

<b style="font-size: 18px"> (3) E.Validation </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Secret/Secret_Validation.png"  style="border: 1px solid #bbb;" width="300" height="35"/> <br/> 
<b style="font-size: 18px"> ① Required-AlertMsg </b> <br/>
해당 컴포넌트의 값을 입력하지 않았을 때 발생 되는 메시지 내용을 설정합니다. (submit(debug, requiredmsg)할 때 requiredmsg를 true로 설정합니다.)

<b style="font-size: 20px"> 3) 컴포넌트 이벤트 </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/TextBox/TextBox_Event.png"  style="border: 1px solid #bbb;" width="300" height="250"/> <br/> 
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
<b style="font-size: 18px"> ④ OnKeyDown </b> <br/>
키를 눌렀을 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ⑤ OnKeypress </b> <br/>
키를 누르고 있는 중 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ⑥ OnKeyUp </b> <br/>
키를 눌렀다가 뗄 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ⑦ OnSelect </b> <br/>
마우스로 입력된 텍스트를 드래그했을 때 발생하는 이벤트입니다. <br/>
