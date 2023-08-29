# <img src="../../.vuepress/public/documentation/view-designer/Structure/Tool_Box/TreeView.png" style="position: relative;top: 5px;" width="40" height="40"> (TreeView)
사용자 정의 기능을 처리하는 컴포넌트입니다.<br/>

<b class="font20"> 1) 컴포넌트 이미지 </b> <br/>
도구상자에서 TreeView 컴포넌트를 선택하여 화면작업 영역에 디자인합니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/TreeView/TreeView_Image.png" class="boxBorder" width="100" height="100"> <br/>

<b class="font20"> 2) 컴포넌트 속성 </b> <br/>
화면작업 창에서 TreeView 컴포넌트 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br/>
<b class="font18"> (1) A.Data </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/TreeView/TreeView_Data.png"  class="boxBorder" width="300" height="80"/> <br/>
<b class="font18"> ① Dataset </b> <br/>
할당된 Dataset 명 표시합니다. 

<b class="font18"> ② Node ID </b> <br/>
UI 화면작업 창의 Dataset 탭에서 등록한 자식 노드 ID에 해당하는 Column을 할당하는 부분입니다.<br/>
<img src="../../.vuepress/public/documentation/view-designer/TreeView/TreeView_Node_ID.png" width="400" height="260"/> <br/>

<b class="font18"> ③ Node Label </b> <br/>
UI 화면작업 창의 Dataset 탭에서 등록한 자식 노드 명에 해당하는 Column을 할당하는 부분입니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/TreeView/TreeView_Node_Label.png" width="400" height="260"/> <br/>
<b style="font-size: 18px"> ④ Parent-ID </b> <br/>
UI 화면작업 창의 Dataset 탭에서 등록한 부모 노드 ID에 해당하는 Column을 할당하는 부분입니다.<br/>
<img src="../../.vuepress/public/documentation/view-designer/TreeView/TreeView_Parent-ID.png" width="400" height="260"/> <br/> 
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
<img src="../../.vuepress/public/documentation/view-designer/TreeView/TreeView_remark(1).png"  class="boxBorder" width="250" height="180"/> <div class="arrow" style="bottom: 30px;"> ▶ </div> <img src="../../.vuepress/public/documentation/view-designer/TreeView/TreeView_Data.png"  class="boxBorder" width="300" height="80"/> <div class="arrow" style="bottom: 30px;"> ▶ </div> <img src="../../.vuepress/public/documentation/view-designer/TreeView/TreeView_remark(2).png"  class="boxBorder" width="330" height="250"/> <br/>
:::
<!-- -->
<b class="font18"> (2) B.CommonElement </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/TreeView/TreeView_CommonElement.png"  class="boxBorder"  width="300" height="70"/> <br/>
<b class="font18"> ① DockFull </b> <br/>
Full로 설정했을 경우 해당 컴포넌트 부모 컴포넌트 크기의 맞춰서 설정됩니다. 

<b class="font18"> ② ID </b> <br/>
해당 컴포넌트의 ID를 설정합니다.  

<b class="font18"> ③ Visible </b> <br/>
해당 컴포넌트를 화면에 보여줄지에 대한 여부를 설정합니다. <br/>

<b class="font20"> 3) 컴포넌트 이벤트 </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/TreeView/TreeView_Event.png"  style="border: 1px solid #bbb;" width="300" height="125"/> <br/> 
<b class="font18"> (1) 1.Event </b> <br/>
<b class="font18"> ① OnCollapse  </b> <br/>
Tree를 접을 때 발생하는 이벤트입니다. <br/>
<b class="font18"> ② OnExpand  </b> <br/>
Tree를 확장할 때 발생하는 이벤트입니다. <br/>
<b class="font18"> ③ OnNodeClick  </b> <br/>
노드를 클릭할 때 발생하는 이벤트입니다. <br/>
<b class="font18"> ④ OnNodeDblClick  </b> <br/>
노드를 더블 클릭할 때 발생하는 이벤트입니다. <br/>
<b class="font18"> ⑤ OnNodeMouseDown  </b> <br/>
마우스 버튼을 누를 때 발생하는 이벤트입니다. <br/>
<b class="font18"> ⑥ OnNodeMouseUp  </b> <br/>
마우스 버튼을 뗄 때 발생하는 이벤트입니다. <br/>


<style type='text/css'>
  [class*="boxBorder"] { border: 1px solid #bbb; }
  [class*="font20"] { font-size: 20px }
  [class*="font18"] { font-size: 18px }
  [class="boxB"] { background: #6a8bad3b;padding:10px;border-radius: 4px; }
  [class="spanBtn"] { border: 1px solid #bbb; border-radius: 4px;padding: 3px;background:white; clolor:dimgrey; }
  [class="spanEx"] { color: #00a4ff; }
  [class="arrow"] { color: #6a8bad;display: inline-block;position: relative;width:13px; }
</style>