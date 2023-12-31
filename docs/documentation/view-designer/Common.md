# 공통 속성
대부분 컴포넌트 우측 속성에 공통적으로 들어가는 속성입니다.<br/>

<b class="font20"> 1) D.Design </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Other/Other_Design.png"  class="boxBorder" width="300" height="330"/> <br/>
<b style="font-size: 18px"> ① BackColor </b> <br/>
해당 컴포넌트의 배경 색상을 설정합니다. <br/>
<img src="../../.vuepress/public/documentation/view-designer/Other/Other_BackColor.png"  class="boxBorder" width="400" height="260"/> <br/>
<b style="font-size: 18px"> ② BorderColor </b> <br/>
해당 컴포넌트의 테두리 색상을 설정합니다.  
<img src="../../.vuepress/public/documentation/view-designer/Other/Other_BorderColor.png"  class="boxBorder" width="400" height="260"/> <br/>
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" />
- BorderWidth default 값이 0인 경우 Color을 지정하더라도 BorderColor는 지정했지만 화면상으로 확인이 불가능합니다. 
- 테두리 넓이를 지정해야 Build 후 해당 화면에 Border Color가 적용이 되었는지 확인할 수 있습니다.
:::
<!-- -->
<b style="font-size: 18px"> ③ BorderWidth </b> <br/>
해당 컴포넌트의 테두리 넓이를 설정합니다. 

<b style="font-size: 18px"> ④ Class-Com </b> <br/>
Tool Box > User > View Common Config > Control-CSS에 해당 컴포넌트에서 지정한 Class 명을 설정합니다. 

<b style="font-size: 18px"> ⑤ Class-TXT </b> <br/>
해당 컴포넌트의 Class 명을 지정합니다. 

<b style="font-size: 18px"> ⑥ Font </b> <br/>
글자 폰트 및 사이즈를 설정합니다. 

<b style="font-size: 18px"> ⑦ Font-Color </b> <br/>
해당 컴포넌트의 글자 색상을 설정합니다. <br/>

<b style="font-size: 18px"> ⑧ Layer(1~2)-Class </b> <br/>
Layer-Tag에서 지정한 부모 태그의 Class 명을 입력합니다. 

<b style="font-size: 18px"> ⑨ Layer(1~2)-Tag </b> <br/>
해당 컴포넌트의 부모 태그를 설정합니다. 
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" />
해당 컴포넌트의 부모 태그를 설정하기 위해서는 Layer(1~2)-Class에서 Class 명을 입력해야 해당 부모 태그가 생성됩니다.
:::
<!-- -->
<b style="font-size: 18px"> ⑩ Lock </b> <br/>
해당 컴포넌트에 Lock을 설정하여 마우스로 해당 컴포넌트가 움직이지 못하게 고정합니다. <br/>

<b style="font-size: 18px"> ⑪ Margin </b> <br/>
해당 컴포넌트의 바깥쪽 공간 여백을 설정합니다. <br/>

<b style="font-size: 18px"> ⑫ Padding </b> <br/>
해당 컴포넌트의 안쪽 공간 여백을 설정합니다. <br/>

<b style="font-size: 18px"> ⑬ Position </b> <br/>
해당 컴포넌트의 위치를 설정합니다. <br/>
- Static : 위치를 임의로 설정해 줄 수 없기 때문에 차례대로 왼쪽에서 오른쪽, 위에서 아래로 쌓입니다.
- absolute : static 속성을 가지고 있지 않은 부모를 기준으로 움직입니다.
- relative : top, right, bottom, left 속성을 사용해 위치 조절이 가능합니다.
- Fixed : 스크롤과 상관없이 항상 특정 위치에 고정합니다.
- inherit : 부모 컴포넌트의 속성값을 상속받습니다.
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" />
Position이 none일 경우 대부분 컴포넌트 default 값이 absolute로 처리됩니다.
:::
<!-- -->
<b style="font-size: 18px"> ⑭ Style </b> <br/>
해당 컴포넌트의 CSS, Style 사용합니다. <br/> <span class="spanEx">Ex) color: red; border: 1px solid red; ...</span>

<b style="font-size: 18px"> ⑮ Tag </b> <br/>
해당 컴포넌트의 태그를 설정합니다. <br/>
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
- Color를 선택하는 팝업창을 사용하는 경우 색상을 클릭이 아니라 더블 클릭 후 <span class="spanBtn">OK</span> 버튼을 클릭하여 색상을 지정합니다.
- Class를 입력, StyleOff를 True 시 BackColor, BorderColor, Borderwidth, Font-Color 등 속성값이 적용되지 않습니다.
- CSS 파일로 CSS를 사용하는 경우 Tool Box > User > View Common Config > Common File > CSS FILES에 등록 후 사용해야합니다.
- Style에 값을 넣어서 사용하면 BackColor, BorderColor, Borderwidth, Font-Color 등 속성값이 적용되지 않습니다.
- 우선순위 : 1순위 Style> 2순위 class> 3순위 속성
:::
<!-- -->

<b class="font18"> 2) D.DesignOff </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Other/Other_DesignOff.png"  class="boxBorder"  width="300" height="70"/> <br/>
<b style="font-size: 18px"> ① LocationOff </b> <br/>
해당 컴포넌트의 위치 변경 여부를 설정합니다. 

<b style="font-size: 18px"> ② SizeOff </b> <br/>
해당 컴포넌트의 사이즈 변경 여부를 설정합니다.  

<b style="font-size: 18px"> ③ StyleOff </b> <br/>
해당 컴포넌트의 스타일 적용 여부를 설정합니다. 
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
변경 여부에 따라 해당 Design 목록 중 부분 속성값들이 적용되지 않습니다.
:::
<!-- -->

<b class="font18"> 3) X.Etc </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Other/Other_Etc.png"  class="boxBorder"  width="300" height="280"/> <br/>
<b style="font-size: 18px"> ① aria-controls </b> <br/>
다른 컴포넌트의 ID을 입력하여 해당 컴포너트와 연결시켜줍니다. 

<b style="font-size: 18px"> ② aria-describedby </b> <br/>
다른 컴포넌트의 ID을 입력하여 해당 컴포넌트의 추가 설명으로 사용합니다.  

<b style="font-size: 18px"> ③ aria-expand </b> <br/>
해당 컴포넌트가 확정(활성화)할지 설정합니다. 

<b style="font-size: 18px"> ④ aria-haspopup </b> <br/>
다른 컴포넌트 위에 겹쳐 나오는 하위 메뉴를 제어합니다. 

<b style="font-size: 18px"> ⑤ aria-hidden </b> <br/>
해당 컴포넌트를 가상 커서로 탐색할 수 없게 합니다. 

<b style="font-size: 18px"> ⑥ aria-label </b> <br/>
해당 컴포넌트를 설명할 텍스트가 없을 경우 사용합니다. 

<b style="font-size: 18px"> ⑦ aria-label </b> <br/>
aria-label이 true일 경우 해당 컴포넌트를 설명할 텍스트를 입력합니다. <br/>

<b style="font-size: 18px"> ⑧ aria-labelledby </b> <br/>
해당 컴포넌트를 설명할 텍스트가 있는 경우 해당 텍스트 영역과 해당 컴포넌트를 연결할 때 사용합니다. 

<b style="font-size: 18px"> ⑨ aria-selected </b> <br/>
해당 컴포넌트를 현재 ‘선택됨’ 상태로 나타냅니다.

<b style="font-size: 18px"> ⑩ data-name </b> <br/>
‘name‘이라는 데이터 속성명의 값을 부여합니다. <br/>

<b style="font-size: 18px"> ⑪ data-target </b> <br/>
’target‘이라는 데이터 속성명의 값을 부여합니다. <br/>

<b style="font-size: 18px"> ⑫ data-toggle </b> <br/>
’toggle‘이라는 데이터 속성명의 값을 부여합니다. <br/>

<b style="font-size: 18px"> ⑬ data-value </b> <br/>
’value‘라는 데이터 속성명의 값을 부여합니다. <br/>

<b style="font-size: 18px"> ⑭ role </b> <br/>
해당 컴포넌트의 역할을 정의한다. 사용자에게 정보를 제공하고 부여한 역할에 대해서는 동적으로 변경이 불가능합니다. banner, form, search, tab 등이 있습니다. <br/>

<b class="font18"> 4) Z.Additional Attr. </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Other/Other_Additional_Attr.png"  class="boxBorder"  width="300" height="35"/> <br/>
<b style="font-size: 18px"> ① Attributes </b> <br/>
JSP 페이지 사이에서 정보를 주고받거나 공유하기 위한 목적으로 사용합니다. 

<b class="font18"> 5) 레이아웃 </b> <br/>
<img src="../../.vuepress/public/documentation/view-designer/Other/Other_layout.png"  class="boxBorder"  width="300" height="100"/> <br/>
<b style="font-size: 18px"> ① Location </b> <br/>
해당 컴포넌트의 위치 정보를 보여줍니다. 

<b style="font-size: 18px"> ② Size </b> <br/>
해당 컴포넌트의 넓이와 높이를 설정합니다.  

<style type='text/css'>
  [class*="boxBorder"] { border: 1px solid #bbb; }
  [class*="font20"] { font-size: 20px }
  [class*="font18"] { font-size: 18px }
  [class="boxB"] { background: #6a8bad3b;padding:10px;border-radius: 4px; }
  [class="spanBtn"] { border: 1px solid #bbb; border-radius: 4px;padding: 3px;background:white; color:dimgrey; }
  [class="spanEx"] { color: #00a4ff; }
  [class="arrow"] { color: #6a8bad;display: inline-block;position: relative;width:13px; }
</style>