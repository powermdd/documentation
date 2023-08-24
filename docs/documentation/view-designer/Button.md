# <img src="../../.vuepress/public/documentation/view-designer/Structure/Tool_Box/Button.png" style="position: relative;top: 5px;" width="40" height="40"> (Button)
버튼 처리를 수행하는 컴포넌트입니다.

<b style="font-size: 20px"> 1) 컴포넌트 이미지 </b> <br/>
도구상자에서 Button 컴포넌트를 선택하여 화면작업 영역에 디자인합니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/Button/Button_Image.png" style="border: 1px solid #bbb;" width="150" height="40"> <br/>

<b style="font-size: 20px"> 2) 컴포넌트 속성 </b> <br/>
화면작업 창에서 Button 컴포넌트 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br/>
<b style="font-size: 18px"> (1) B.CommonElement </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Button/Button_CommonElement.png"  style="border: 1px solid #bbb;" width="300" height="130"/> <br/>
<b style="font-size: 18px"> ① Disabled </b> <br/>
값이 True이면 수정 불가능(서버 전송 불가능) False 경우 해당 속성 사용하지 않습니다. 

<b style="font-size: 18px"> ② ID </b> <br/>
해당 컴포넌트의 ID를 설정합니다.  

<b style="font-size: 18px"> ③ NavIndex </b> <br/>
Index 값을 지정 후 Tab 키를 누르면 오름차순으로 이동하게 됩니다. 

<b style="font-size: 18px"> ④ Text-Align </b> <br/>
입력한 텍스트 정렬을 설정합니다.

<b style="font-size: 18px"> ⑤ Value </b> <br/>
해당 컴포넌트의 들어가는 값을 설정합니다. 

<b style="font-size: 18px"> ⑥ Visible </b> <br/>
해당 컴포넌트를 화면에 보여줄지에 대한 여부를 설정합니다. 

<b style="font-size: 18px"> (2) C.ControlElement </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Button/Button_ControlElement.png"  style="border: 1px solid #bbb;" width="300" height="80"/> <br/> 
<b style="font-size: 18px"> ① Imagepath </b> <br/>
해당 컴포넌트의 이미지 경로를 설정합니다. <span style="color: #00a4ff;">Ex) /img/test/testBtn.png </span> 

<b style="font-size: 18px"> ② ShortCut </b> <br/>
해당 컴포넌트의 ID를 설정합니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/Button/Button_ShortCut.png"  style="border: 1px solid #bbb;" width="330" height="150"/>

<b style="font-size: 18px"> ③ ShortCut-Func </b> <br/>
ShortCut에서 단축키 설정 후, 해당 단축키 클릭했을 때 발생되는 함수를 선택합니다. 

<b style="font-size: 18px"> ④ Type </b> <br/>
해당 컴포넌트의 Type을 설정합니다.

<b style="font-size: 20px"> 3) 컴포넌트 이벤트 </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Button/Button_Event.png"  style="border: 1px solid #bbb;" width="300" height="150"/> <br/> 
<b style="font-size: 18px"> (1) 1.MouseEvent </b> <br/>
<b style="font-size: 18px"> ① OnClick </b> <br/>
마우스를 클릭할 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ② OnMosueMove </b> <br/>
마우스를 움직일 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ③ OnMosueOut </b> <br/>
마우스가 요소를 벗어날 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ④ OnMosueOver </b> <br/>
마우스가 요소 안에 들어올 때 발생하는 이벤트입니다. <br/>

<b style="font-size: 18px"> (2) 2.KeyEvent </b> <br/>
<b style="font-size: 18px"> ① OnKeyDown </b> <br/>
키를 눌렀을 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ② OnKeyUp </b> <br/>
키를 눌렀다가 뗄 때 발생하는 이벤트입니다. <br/>