# <img src="../../.vuepress/public/documentation/view-designer/Structure/Tool_Box/PictureBox.png" style="position: relative;top: 5px;" width="40" height="40"> (PictureBox)
그림 이미지를 표시하는 컴포넌트입니다.

<b style="font-size: 20px"> 1) 컴포넌트 이미지 </b> <br/>
도구상자에서 PictureBox 컴포넌트를 선택하여 화면작업 영역에 디자인합니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/PictureBox/PictureBox_Image.png" style="border: 1px solid #bbb;" width="100" height="100"> <br/>

<b style="font-size: 20px"> 2) 컴포넌트 속성 </b> <br/>
화면작업 창에서 PictureBox 컴포넌트 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br/>
<b style="font-size: 18px"> (1) A.Data </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/PictureBox/PictureBox_Data.png"  style="border: 1px solid #bbb;" width="300" height="50"/> <br/>
<b style="font-size: 18px"> ① Bind:Column </b> <br/>
UI 화면작업 창의 Dataset 탭에서 등록한 Dataset Column을 할당하는 부분입니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/PictureBox/PictureBox_Bind_Column.png"  width="400" height="300"/> 

<b style="font-size: 18px"> ② Dataset </b> <br/>
할당된 Dataset 명 표시합니다. <br/>
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
Dataset Bind 했을 경우 <span style="color: #00a4ff;">Dataset_Column</span>으로 해당 컴포넌트 ID가 자동으로 변환됩니다. <br/>
<span style="color: #00a4ff;">Ex) Dataset : S01     Column : PictureBox  ⇒ 컴포넌트 ID : S01_PictureBox </span>
:::
<!-- -->

<b style="font-size: 18px"> (2) B.CommonElement </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/PictureBox/PictureBox_CommonElement.png"  style="border: 1px solid #bbb;" width="300" height="80"/> <br/>
<b style="font-size: 18px"> ① Disabled </b> <br/>
값이 True이면 수정 불가능(서버 전송 불가능) False 경우 해당 속성 사용하지 않습니다. 

<b style="font-size: 18px"> ② ID </b> <br/>
해당 컴포넌트의 ID를 설정합니다.  

<b style="font-size: 18px"> ③ NavIndex </b> <br/>
Index 값을 지정 후 Tab 키를 누르면 오름차순으로 이동하게 됩니다. 

<b style="font-size: 18px"> ④ Visible </b> <br/>
해당 컴포넌트를 화면에 보여줄지에 대한 여부를 설정합니다. 

<b style="font-size: 18px"> (3) C.ControlElement </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/PictureBox/PictureBox_ControlElement.png"  style="border: 1px solid #bbb;" width="300" height="80"/> <br/> 
<b style="font-size: 18px"> ① Alt </b> <br/>
해당 컴포넌트에 대한 설명을 입력합니다. 

<b style="font-size: 18px"> ② Cursor </b> <br/>
해당 컴포넌트 위에 마우스 올렸을 때 모양을 설정합니다.  

<b style="font-size: 18px"> ③ imageFile </b> <br/>
해당 컴포넌트의 이미지 파일 경로를 설정합니다. 

<b style="font-size: 18px"> ④ Usemap </b> <br/>
#을 포함한 맵 id값을 설정 후 &nbsp;<img src="../../.vuepress/public/documentation/view-designer/Structure/Tool_Box/user_svg_Control.png" style="position: relative;top: 5px;" width="25" height="25"> (user/svg Control) 컴포넌트를 생성하여 우측 속성 UserTag를 입력합니다. 
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
- <b> map 태그 </b> <br/>
name : img 태그의 usemap 속성의 맵 id값과 동일하게 지정해야합니다.

- <b> area 태그 </b> <br/>
target : 해당 영역 클릭시 url 열릴 위치를 지정합니다. (href 링크가 지정되어 있어야 합니다.) <br/>
alt : 해당 영역의 설명을 입력합니다.  <br/>
href : 링크의 대한 경로를 입력합니다. <br/>
coords : 해당 영역에 대한 좌표를 설정합니다. <br/>
&emsp;&emsp;&emsp;&ensp; <img src="../../.vuepress/public/documentation/view-designer/PictureBox/PictureBox_Usemap.png" style="border: 1px solid #bbb;" width="300" height="30"/> <br/>
shape : 해당 영역에 대한 도형 유형을 입력합니다.
:::
<!-- -->

<b style="font-size: 20px"> 3) 컴포넌트 이벤트 </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/PictureBox/PictureBox_Event.png"  style="border: 1px solid #bbb;" width="300" height="125"/> <br/> 
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
