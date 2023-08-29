# <img src="../../.vuepress/public/documentation/view-designer/Structure/Tool_Box/HtmlEdit.png" style="position: relative;top: 5px;" width="40" height="40"> (HtmlEdit)
웹기반의 Html에디터 기능을 처리하는 컴포넌트입니다.<br/>

<b class="font20"> 1) 컴포넌트 이미지 </b> <br/>
도구상자에서 HtmlEdit 컴포넌트를 선택하여 화면작업 영역에 디자인합니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/HtmlEdit/HtmlEdit_Image.png" class="boxBorder" width="100" height="110"> <br/>

<b class="font20"> 2) 컴포넌트 속성 </b> <br/>
화면작업 창에서 HtmlEdit 컴포넌트 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br/>
<b class="font18"> (1) A.Data </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/HtmlEdit/HtmlEdit_Data.png"  class="boxBorder" width="300" height="50"/> <br/>
<b class="font18"> ① Bind:Column </b> <br/>
UI 화면작업 창의 Dataset 탭에서 등록한 Dataset Column을 할당하는 부분입니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/HtmlEdit/HtmlEdit_Bind_Column.png"  width="400" height="300"/> 

<b class="font18"> ② Dataset </b> <br/>
할당된 Dataset 명 표시합니다. <br/>
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
Dataset Bind 했을 경우 <span class="spanEx">Dataset_Column</span>으로 해당 컴포넌트 ID가 자동으로 변환됩니다. <br/>
<span class="spanEx">Ex) Dataset : S01     Column : HTMLEDIT  ⇒ 컴포넌트 ID : S01_HTMLEDIT </span>
:::
<!-- -->

<b class="font18"> (2) B.CommonElement </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/HtmlEdit/HtmlEdit_CommonElement.png"  class="boxBorder"  width="300" height="80"/> <br/>
<b style="font-size: 18px"> ① Disabled </b> <br/>
값이 True이면 수정 불가능(서버 전송 불가능) False 경우 해당 속성 사용하지 않습니다. 

<b style="font-size: 18px"> ② ID </b> <br/>
해당 컴포넌트의 ID를 설정합니다.  

<b style="font-size: 18px"> ③ Value </b> <br/>
해당 컴포넌트의 들어가는 값을 설정합니다. 

<b style="font-size: 18px"> ④ Visible </b> <br/>
해당 컴포넌트를 화면에 보여줄지에 대한 여부를 설정합니다. 

<style type='text/css'>
  [class*="boxBorder"] { border: 1px solid #bbb; }
  [class*="font20"] { font-size: 20px }
  [class*="font18"] { font-size: 18px }
  [class="boxB"] { background: #6a8bad3b;padding:10px;border-radius: 4px; }
  [class="spanBtn"] { border: 1px solid #bbb; border-radius: 4px;padding: 3px;background:white; clolor:dimgrey; }
  [class="spanEx"] { color: #00a4ff; }
  [class="arrow"] { color: #6a8bad;display: inline-block;position: relative;width:13px; }
</style>