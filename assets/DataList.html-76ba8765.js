import{_ as t}from"./DataList-6e0ab48f.js";import{_ as s}from"./ComboBox_Item_Value_remark(1)-65784dbc.js";import{_ as e}from"./TextBox_Event-d4976077.js";import{_ as b,o as A,c as r,d as n}from"./app-b11283ce.js";const i="data:image/png;base64,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",o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkwAAABnCAIAAAB98opIAAAACXBIWXMAAB2HAAAdhwGP5fFlAAAFGElEQVR42u3duY7dVBzA4f+QFEEhvEqGN0FRJARKyyZKhGggC0kTIUrE1kwRgZB4EfIKwEswEyUF0aWwNDgcHev4ej329xUpRr7erkfHv9hjn5ydnQUAbNHViLj9zh07AoCN+e3XJ6/ZCwBslUEOAIMcANTmakXr+sbr/63txfN/Bs4hddw8AVByAKDk5tLutqbwmn+H99zw4gRAyQFA/SWXXksbq7ravTVuzwGg5ABg3yW3zppsV2B5cZbMBwAlBwDDSu6H77+NiPO/zyPi088+j4iTk5P/TXM4HCLim68fR8SNN29ExIcffTJ6P013P+RY69C+ttfdeUttC4CSA4B9lFzTcD/9+F1EXFycR8S9B48ue65puAf3voiIX35+EhHvf/DxxvbRuPdwAqDkAGD6kmuuwzUN17Ra4+79hxHx1f0vL3/+7nt3LqefQveTJ6c21tKX3QoAJQcA+yi55tpbcx2u0XTb06e/R8Rff/5x2XDta3XjFk/uatY89yWW3C0553wAUHIAKLkyuZ6bouHm1/e9Aa7PASg5AKih5NKee/vW7Yi4efN0VQ1X3mRpReWmT99R0C33ToO+8wFAyQHAGCXX7rnT07cmXbOSa2N976gccgfmWMvy3BMAJQcAS5TcmukkAJQcAAY5ADDIAYBBDgAMcgBgkAMAgxwABjkAMMgBwJot/8ST69eu+BqozrMXLx29oOQAYMcll9O86+BwOKx8D+bepbf+NWepY6P7COl7RLWnd9SBkgNAyWm7PtK1Gr62a9veWtp6bQ2XOzbS/Zn7VMn0gJIDQMkxRs0006gfpv7/Az0HSg4AJbfufsq1VHomm7sKUn4uPHV7dS9x+PaOO2X3+nBcgQFKDgC2XnK561u5qsj9vHzK8jkc13DdSxy+veNO6frikCPW37GBkgOAvZbc9s7x5/+sklj2u1Z1oOQAQMm9qsa/ExqyziWf7XvXqL+1Wqrq9BwoOQDYa8nNeS483RMpS1qq72fnvGuU3Ddi34KSAwAlN1dvzbkOU1yf2947EACUHADUWXLpczfmf/Lk8KdEpuvcvRXd21vy2e61Om5KhVd+rJZfMe3+lH0OSg4Aaii57hLqe4ZbPre+Z83HnV+Xb0XJlHNuhZ4YfgyP+ynfCCg5AAxyAGCQAwCDHAAY5ADAIAcABjkADHIAYJADgLos/8STZy9e+hqolKMXlBwA7LXkrl+74mug0oZz9IKSA4C9llxOLe8tm2I9a5kn3Xs7p/xbSN8d2HdZ5Uvvu6y+b71Pp++7l8baUpQcACg5bQd9eqL91u+xjuTu4lnn70tJ4aV7qcYtRckBgJJTk2yl6kp6Lr3+NN2xN+eyQMkBwJ5Krn2mmZ5jpueh5fdltc+su+cw3Vlz+bn88Cmhlt4FJQcA9Zdcu7fShst1W/rz8inL59C34cZd277zpK7/t5j6zsw5l5X7jXaHJEoOALZbctvgLBVyvxGqDiUHAPsrub5PtNve2ta1B1jnN7vsUTTnFUGUHAAouXWY81xvyNll952QtewB5mmp7r+JHF45cy7ruKWDkgOArZfcuL211Jn7PveAVgOUHABsveTS557M/+TJ497OnFvb3Prn5pl7KopnV9bV69v4doa8/Tz3xBPHMEoOAOovudx53HHPkyyfW9+zyL7nmyXrP3yezovXefTO8z1ON824R+bwY9JRjZIDwCAHAAY5ADDIAYBBDgAMcgBgkAMAgxwABjkAqNG//PBZ9AOfY54AAAAASUVORK5CYII=",p="/documentation/assets/DataList_Item_Label-c7c128e1.png",a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkkAAABDCAIAAAAH5gYsAAAACXBIWXMAAB2HAAAdhwGP5fFlAAADFUlEQVR42u3dy4rTUBzA4X91QMUZX2V8FBE3iltvuBRxo86MuhFxKd62gyK46Gs4r6C+Q7EjulDq4kAJExrT5tIk/b7FLEqahjTlnF+TdEaTySQAYCjG4/EpewGAgdnaOrNtLwAwJLoNgMF1W9c2aPvc/zfp+NefhtZfZc2bqcz7ld+32WfZ54BuA4C+dVtxRaX5fvq77Hy/uBWqrBkFVuXYA3QbAPS529qcNZtNA+g2ANBtQym/4torf91gO+upd/vbqdv293Zzeym/pHO6oNsAoL5ue/vmVURMf0wj4t79BxExGo1OLDObzSLi5YvnEbFzYScibt2+u5b5ezsNkZ+PF8/By9zR1fR66n3d4uWrN9/w9lL66zpJ0G0A0Ey3pWJ7/+51RBwfTyNi7+DZvN5SsR3sPYyIjx8OI+LGzTu1b5y70PrFOwLoNgBot9vSObZUbKnMksf7TyPiyf6j+eNXr12fLw91We0ayP6+LqDbAGD5bkvn1dI5tiRV2tHRl4j4/u3rvNiy5+GgLus6e+esIeg2AOhPtxXXW7+KLXuP0aJrLN2B1GXrenccFaDbAKAP3Zavt0uXr0TE7u7FFopttd/3K/79iGy9lVlz8bO6P5dvc/ur/y7JuvZ2069b5psDQLcBwOIkG8b80XkRAJLPnw51GwBDM5CfYNBqAMzpNgCMbQBgbAMAYxsAGNsAwNgGgLENAIxtAGBsA4Dq1va7JOfPnrb36Z2fv/86ekG3AcDGdNsi6X/CzWazE4/kZZeBLssew4uO7TKPt7ltoNsAQLctLz+jzBceUL7JFn0jAroNAHRb3SWn3hiedo7n7CcIdBsA6DbYJNVLaLXzZMVXF/uGA90GALoNKHe/WnPrz5ZZ/lyaYkO3AYBuA9ZHk4FuA0C3AV3qs+zZNfUGug0A3QZ0td6y8tdJgm4DAN3WDWapbBr3q4FuA0C39WfGat5KNxVfx9j0+vOfiPzyPjXoNgDQbfXNTPUZfa+3KksWr2HZT0S9awPdBgDGNgAwtgGAsQ0AYxsAGNsAwNgGAMY2AFjgH9hLp/7/pTZdAAAAAElFTkSuQmCC",l="/documentation/assets/DataList_Ex(1)-bb3dffd9.png",f="/documentation/assets/DataList_Ex(2)-d3349b7a.png",c="/documentation/assets/DataList_Ex(3)-40d3eec7.png",d="/documentation/assets/DataList_Ex_Dataset-d8409a7d.png",y="/documentation/assets/DataList_Ex_Componemt(1)-8f6f02a2.png",u="/documentation/assets/DataList_Ex_Componemt(2)-7c380259.png",x="/documentation/assets/DataList_Ex_view-8ef8945e.png",g={},m=n('<h1 id="datalist" tabindex="-1"><a class="header-anchor" href="#datalist" aria-hidden="true">#</a> <img src="'+t+'" style="position:relative;top:5px;" width="40" height="40"> (DataList)</h1><p>검색창의 자동완성 기능을 처리하는 컴포넌트입니다. (검색용 텍스트 박스의 list 속성에 설정됩니다.)<br></p><p><b style="font-size:20px;"> 1) 컴포넌트 이미지 </b> <br> 도구상자에서 DataList 컴포넌트를 선택하여 화면작업 영역에 디자인합니다. <br><img src="'+i+'" style="border:1px solid #bbb;" width="100" height="100"> <br></p><p><b style="font-size:20px;"> 2) 컴포넌트 속성 </b> <br> 화면작업 창에서 DataList 컴포넌트 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br><b style="font-size:18px;"> (1) A.Data </b> <br><img src="'+o+'" style="border:1px solid #bbb;" width="300" height="50"></p><p><b style="font-size:18px;"> ① Item:Dataset </b> <br> 해당 컴포넌트의 리스트 목록 부분 Dataset을 할당합니다. <br></p><p><b style="font-size:18px;"> ② Item:Label </b> <br> 해당 컴포넌트의 리스트 목록 부분의 Label을 할당합니다. <br><img src="'+p+'" width="400" height="300"></p><p><b style="font-size:18px;"> (2) B.CommonElement </b> <br><img src="'+a+'" style="border:1px solid #bbb;" width="300" height="35"> <br><b style="font-size:18px;"> ① ID </b> <br> 해당 컴포넌트의 ID를 설정합니다.</p><p><b style="font-size:18px;"> 3) DataList 사용 예 </b> <br><span style="font-size:18px;"> ① TextBox 컴포넌트와 DataList 컴포넌트를 화면에 디자인합니다. </span> <br><img src="'+l+'" style="border:1px solid #bbb;" width="350" height="200"> <br></p><p><span style="font-size:18px;"> ② 서브미션을 추가하거나 ‘sbmInit’을 DataList와 매핑시킵니다. </span> <br><img src="'+s+'" style="border:1px solid #bbb;" width="250" height="100"> <div style="color:#6a8bad;display:inline-block;bottom:131px;position:relative;"> ▶ </div> <img src="'+f+'" style="border:1px solid #bbb;" width="300" height="350"> <div style="color:#6a8bad;display:inline-block;bottom:131px;position:relative;"> ▶ </div> <img src="'+c+'" style="border:1px solid #bbb;" width="330" height="250"> <br></p><p><span style="font-size:18px;"> ③ DataList 컴포넌트 우측 속성에 Dataset을 매핑시킵니다. </span> <br><img src="'+d+'" style="border:1px solid #bbb;" width="300" height="200"> <br></p><p><span style="font-size:18px;"> ④ TextBox 컴포넌트 우측 속성 DataList에 DataList 컴포넌트의 ID를 입력합니다. </span> <br> DataList 컴포넌트                     TextBox 컴포넌트<br><img src="'+y+'" style="border:1px solid #bbb;" width="300" height="200">     <img src="'+u+'" style="border:1px solid #bbb;" width="300" height="280"> <br></p><p><span style="font-size:18px;"> ⑤ 다음과 같이 텍스트박스의 자동 완성 기능을 확인할 수 있으며, 작업한 DataList는 화면에 보이지 않습니다. </span> <br><img src="'+x+'" style="border:1px solid #bbb;" width="350" height="250"> <br></p><p><b style="font-size:18px;"> 4) 컴포넌트 이벤트 </b> <br><img src="'+e+'" style="border:1px solid #bbb;" width="300" height="250"> <br><b style="font-size:18px;"> (1) 1.MouseEvent </b> <br><b style="font-size:18px;"> ① OnClick </b> <br> 마우스를 클릭할 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ② OnMosueDown </b> <br> 마우스 버튼을 누를 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ③ OnMosueMove </b> <br> 마우스를 움직일 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ④ OnMosueOut </b> <br> 마우스가 요소를 벗어날 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ⑤ OnMosueOver </b> <br> 마우스가 요소 안에 들어올 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ⑥ OnMosueUp </b> <br> 마우스 버튼을 뗄 때 발생하는 이벤트입니다. <br></p><p><b style="font-size:18px;"> (2) 2.KeyEvent </b> <br><b style="font-size:18px;"> ① OnBlur </b> <br> 포커스를 잃었을 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ② OnChange </b> <br> 입력필드의 값이 바뀐 후 포커스를 잃었을 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ③ OnFocus </b> <br> 포커스가 잡혔을 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ④ OnKeyDown </b> <br> 키를 눌렀을 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ⑤ OnKeypress </b> <br> 키를 누르고 있는 중 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ⑥ OnKeyUp </b> <br> 키를 눌렀다가 뗄 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ⑦ OnSelect </b> <br> 마우스로 입력된 텍스트를 드래그했을 때 발생하는 이벤트입니다. <br></p>',14),L=[m];function v(z,D){return A(),r("div",null,L)}const k=b(g,[["render",v],["__file","DataList.html.vue"]]);export{k as default};
