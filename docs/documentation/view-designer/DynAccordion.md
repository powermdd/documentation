# <img src="../../.vuepress/public/documentation/view-designer/Structure/Tool_Box/Dyn-Accordion.png" style="position: relative;top: 5px;" width="40" height="40"> (Dyn-Accordion)
계층 구조를 가지는 데이터를 동적으로 표시하는 컴포넌트입니다.<br/>

<b class="font20"> 1) 컴포넌트 이미지 </b> <br/>
도구상자에서 Dyn-Accordion 컴포넌트를 선택하여 화면작업 영역에 디자인합니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/Dyn-Accordion/Dyn-Accordion_Image.png" class="boxBorder" width="100" height="110"> <br/>

<b class="font20"> 2) 컴포넌트 속성 </b> <br/>
화면작업 창에서 Dyn-Accordion 컴포넌트 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br/>
<b class="font18"> (1) A.Data </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Dyn-Accordion/Dyn-Accordion_Data.png"  class="boxBorder" width="300" height="50"/> <br/>
<b class="font18"> ① Dataset </b> <br/>
할당된 Dataset 명 표시합니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/Dyn-Accordion/Dyn-Accordion_Dataset.png"  width="400" height="300"/> 

<b class="font18"> ② Title Column </b> <br/>

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
Dataset Bind 했을 경우 <span class="spanEx">Dataset_Column</span>으로 해당 컴포넌트 ID가 자동으로 변환됩니다. <br/>
<span class="spanEx">Ex) Dataset : S01     Column : ACCORDION  ⇒ 컴포넌트 ID : S01_ACCORDION </span>
:::
<!-- -->

<b class="font18"> (2) B.CommonElement </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Dyn-Accordion/Dyn-Accordion_CommonElement.png"  class="boxBorder"  width="300" height="65"/> <br/>
<b style="font-size: 18px"> ① Disabled </b> <br/>
값이 True이면 수정 불가능(서버 전송 불가능) False 경우 해당 속성 사용하지 않습니다. 

<b style="font-size: 18px"> ② ID </b> <br/>
해당 컴포넌트의 ID를 설정합니다.  

<b style="font-size: 18px"> ③ Visible </b> <br/>
해당 컴포넌트를 화면에 보여줄지에 대한 여부를 설정합니다. 

<style type='text/css'>
  [class*="boxBorder"] { border: 1px solid #bbb; }
  [class*="font20"] { font-size: 20px }
  [class*="font18"] { font-size: 18px }
  [class="boxB"] { background: #6a8bad3b;padding:10px;border-radius: 4px; }
  [class="spanBtn"] { border: 1px solid #bbb; border-radius: 4px;padding: 3px;background:white; color:dimgrey; }
  [class="spanEx"] { color: #00a4ff; }
  [class="arrow"] { color: #6a8bad;display: inline-block;position: relative;width:13px; }
</style>