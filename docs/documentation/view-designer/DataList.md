# <img src="../../.vuepress/public/documentation/view-designer/Structure/Tool_Box/DataList.png" style="position: relative;top: 5px;" width="40" height="40"> (DataList)
검색창의 자동완성 기능을 처리하는 컴포넌트입니다. (검색용 텍스트 박스의 list 속성에 설정됩니다.)<br/>

<b style="font-size: 20px"> 1) 컴포넌트 이미지 </b> <br/>
도구상자에서 DataList 컴포넌트를 선택하여 화면작업 영역에 디자인합니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/DataList/DataList_Image.png" style="border: 1px solid #bbb;" width="100" height="100"> <br/>

<b style="font-size: 20px"> 2) 컴포넌트 속성 </b> <br/>
화면작업 창에서 DataList 컴포넌트 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br/>
<b style="font-size: 18px"> (1) A.Data </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/DataList/DataList_Data.png"  style="border: 1px solid #bbb;" width="300" height="50"/> 

<b style="font-size: 18px"> ① Item:Dataset </b> <br/>
해당 컴포넌트의 리스트 목록 부분 Dataset을 할당합니다. <br/>

<b style="font-size: 18px"> ② Item:Label </b> <br/>
해당 컴포넌트의 리스트 목록 부분의 Label을 할당합니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/DataList/DataList_Item_Label.png"  width="400" height="300"/> 

<b style="font-size: 18px"> (2) B.CommonElement </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/DataList/DataList_CommonElement.png"  style="border: 1px solid #bbb;" width="300" height="35"/> <br/>
<b style="font-size: 18px"> ① ID </b> <br/>
해당 컴포넌트의 ID를 설정합니다.  

<b style="font-size: 18px"> 3) DataList 사용 예 </b> <br/>
<span style="font-size: 18px"> ① TextBox 컴포넌트와 DataList 컴포넌트를 화면에 디자인합니다. </span> <br/>
<img src="../../.vuepress/public/documentation/view-designer/DataList/DataList_Ex(1).png"  style="border: 1px solid #bbb;" width="350" height="200"/> <br/>

<span style="font-size: 18px"> ② 서브미션을 추가하거나 ‘sbmInit’을 DataList와 매핑시킵니다. </span> <br/>
<img src="../../.vuepress/public/documentation/view-designer/ComboBox/ComboBox_Item_Value_remark(1).png"  style="border: 1px solid #bbb;" width="250" height="100"/> <div style="color: #6a8bad;display: inline-block;bottom: 131px;position: relative;"> ▶ </div> <img src="../../.vuepress/public/documentation/view-designer/DataList/DataList_Ex(2).png"  style="border: 1px solid #bbb;" width="300" height="350"/> <div style="color: #6a8bad;display: inline-block;bottom: 131px;position: relative;"> ▶ </div> <img src="../../.vuepress/public/documentation/view-designer/DataList/DataList_Ex(3).png"  style="border: 1px solid #bbb;" width="330" height="250"/> <br/>

<span style="font-size: 18px"> ③ DataList 컴포넌트 우측 속성에 Dataset을 매핑시킵니다. </span> <br/>
<img src="../../.vuepress/public/documentation/view-designer/DataList/DataList_Ex_Dataset.png"  style="border: 1px solid #bbb;" width="300" height="200"/> <br/>

<span style="font-size: 18px"> ④ TextBox 컴포넌트 우측 속성 DataList에 DataList 컴포넌트의 ID를 입력합니다. </span> <br/>
DataList 컴포넌트 &emsp; &emsp;&emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;&ensp;TextBox 컴포넌트<br/>
<img src="../../.vuepress/public/documentation/view-designer/DataList/DataList_Ex_Componemt(1).png" style="border: 1px solid #bbb;" width="300" height="200"/> &emsp; &emsp; <img src="../../.vuepress/public/documentation/view-designer/DataList/DataList_Ex_Componemt(2).png" style="border: 1px solid #bbb;" width="300" height="280"/> <br/>

<span style="font-size: 18px"> ⑤ 다음과 같이 텍스트박스의 자동 완성 기능을 확인할 수 있으며, 작업한 DataList는 화면에 보이지 않습니다. </span> <br/>
<img src="../../.vuepress/public/documentation/view-designer/DataList/DataList_Ex_view.png"  style="border: 1px solid #bbb;" width="350" height="250"/> <br/>

<b style="font-size: 18px"> 4) 컴포넌트 이벤트 </b> <br/>
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