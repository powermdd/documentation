<template><div><h1 id="filebutton" tabindex="-1"><a class="header-anchor" href="#filebutton" aria-hidden="true">#</a> <img src="@source/.vuepress/public/documentation/view-designer/Structure/Tool_Box/FileButton.png" style="position: relative;top: 5px;" width="40" height="40"> (FileButton)</h1>
<p>파일 업로드 기능을 처리하는 컴포넌트입니다.</p>
<p><b style="font-size: 20px"> 1) 컴포넌트 이미지 </b> <br/>
도구상자에서 FileButton 컴포넌트를 선택하여 화면작업 영역에 디자인합니다. <br/>
<img src="@source/.vuepress/public/documentation/view-designer/FileButton/FileButton_Image.png" style="border: 1px solid #bbb;" width="150" height="40"> <br/></p>
<p><b style="font-size: 20px"> 2) 컴포넌트 속성 </b> <br/>
화면작업 창에서 FileButton 컴포넌트 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br/>
<b style="font-size: 18px"> (1) B.CommonElement </b> <br/>
<img src="@source/.vuepress/public/documentation/view-designer/FileButton/FileButton_CommonElement.png"  style="border: 1px solid #bbb;" width="300" height="110"/> <br/>
<b style="font-size: 18px"> ① ID </b> <br/>
해당 컴포넌트의 ID를 설정합니다.</p>
<p><b style="font-size: 18px"> ② Label </b> <br/>
해당 컴포넌트의 ID를 설정합니다.</p>
<p><b style="font-size: 18px"> ③ Label 위치 </b> <br/>
해당 컴포넌트 버튼의 위치를 설정합니다.</p>
<p><b style="font-size: 18px"> ④ NavIndex </b> <br/>
Index 값을 지정 후 Tab 키를 누르면 오름차순으로 이동하게 됩니다.</p>
<p><b style="font-size: 18px"> ⑤ ReadOnly </b> <br/>
값이 True이면 포커스는 잡히지만 수정은 불가능합니다.</p>
<p><b style="font-size: 18px"> ⑥ Visible </b> <br/>
해당 컴포넌트를 화면에 보여줄지에 대한 여부를 설정합니다.</p>
<p><b style="font-size: 18px"> (2) E.Validation </b> <br/>
<img src="@source/.vuepress/public/documentation/view-designer/Secret/Secret_Validation.png"  style="border: 1px solid #bbb;" width="300" height="35"/> <br/>
<b style="font-size: 18px"> ① Required-AlertMsg </b> <br/>
해당 컴포넌트의 값을 입력하지 않았을 때 발생 되는 메시지 내용을 설정합니다. (submit(debug, requiredmsg)할 때 requiredmsg를 true로 설정합니다.)</p>
<p><b style="font-size: 20px"> 3) 컴포넌트 이벤트 </b> <br/>
<img src="@source/.vuepress/public/documentation/view-designer/FileButton/FileButton_Event.png"  style="border: 1px solid #bbb;" width="300" height="150"/> <br/>
<b style="font-size: 18px"> (1) 1.MouseEvent </b> <br/>
<b style="font-size: 18px"> ① OnClick </b> <br/>
마우스를 클릭할 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ② OnMosueMove </b> <br/>
마우스를 움직일 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ③ OnMosueOut </b> <br/>
마우스가 요소를 벗어날 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ④ OnMosueOver </b> <br/>
마우스가 요소 안에 들어올 때 발생하는 이벤트입니다. <br/>
<b style="font-size: 18px"> ⑤ OnMosueUp </b> <br/>
마우스 버튼을 뗄 때 발생하는 이벤트입니다.</p>
<p><b style="font-size: 18px"> (2) 2.KeyEvent </b> <br/>
<b style="font-size: 18px"> ① OnChange </b> <br/>
체크했을 때 발생하는 이벤트입니다. <br/></p>
<p><b style="font-size: 20px"> 4) 파일 업로드 Script 예 </b> <br/></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 파일버튼 클릭했을 때</span>
  <span class="token keyword">function</span> <span class="token function">file01_OnChange</span><span class="token punctuation">(</span><span class="token parameter">myObj</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>myObj<span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// 파일업로드 안했을 경우</span>
	<span class="token keyword">var</span> theUrl <span class="token operator">=</span> Contextpath <span class="token operator">+</span> <span class="token string">"/FileUpload.fup"</span><span class="token punctuation">;</span> <span class="token comment">// 호출URL</span>
	<span class="token keyword">var</span> fileId <span class="token operator">=</span> myObj<span class="token punctuation">.</span>id<span class="token punctuation">;</span> <span class="token comment">// 파일ID</span>
	<span class="token keyword">var</span> callbackFn <span class="token operator">=</span> <span class="token string">"callbackfunc"</span><span class="token punctuation">;</span> <span class="token comment">//콜백함수</span>
	<span class="token keyword">var</span> extArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"hwp"</span><span class="token punctuation">,</span> <span class="token string">"pdf"</span><span class="token punctuation">,</span> <span class="token string">"doc"</span><span class="token punctuation">,</span> <span class="token string">"docx"</span><span class="token punctuation">,</span> <span class="token string">"ppt"</span><span class="token punctuation">,</span> <span class="token string">"pptx"</span><span class="token punctuation">,</span> <span class="token string">"xls"</span><span class="token punctuation">,</span> <span class="token string">"xlsx"</span><span class="token punctuation">,</span> <span class="token string">"txt"</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 파일확장자체크</span>
	
	<span class="token comment">// wizutil.FileUploadAjax(theUrl, fileId, callbackFn, extArray); // 파일확장자 체크할 경우</span>
	wizutil<span class="token punctuation">.</span><span class="token function">FileUploadAjax</span><span class="token punctuation">(</span>theUrl<span class="token punctuation">,</span> fileId<span class="token punctuation">,</span> callbackFn<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 파일업로드 콜백함수</span>
  <span class="token keyword">function</span> <span class="token function">callbackfunc</span><span class="token punctuation">(</span><span class="token parameter">filename<span class="token punctuation">,</span> path<span class="token punctuation">,</span> unifile<span class="token punctuation">,</span> filesize<span class="token punctuation">,</span> code<span class="token punctuation">,</span> msg</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
	<span class="token comment">//********* 다중파일</span>
	<span class="token keyword">var</span> insertRow <span class="token operator">=</span> grid1<span class="token punctuation">.</span><span class="token function">insertRow</span><span class="token punctuation">(</span><span class="token string">'last'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">// 첨부파일리스트</span>
	grid1<span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span>insertRow<span class="token punctuation">,</span> <span class="token string">"FILE_UNINM"</span><span class="token punctuation">,</span> unifile<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 파일물리명</span>
	grid1<span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span>insertRow<span class="token punctuation">,</span> <span class="token string">"FILE_SIZE"</span><span class="token punctuation">,</span> filesize<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 파일크기</span>
	grid1<span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span>insertRow<span class="token punctuation">,</span> <span class="token string">"FILE_PATH"</span><span class="token punctuation">,</span> path<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 파일위치</span>
	grid1<span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span>insertRow<span class="token punctuation">,</span> <span class="token string">"FILE_NM"</span><span class="token punctuation">,</span> filename<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 파일명</span>
	
	<span class="token comment">//********* 단일파일</span>
	<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'S01_FILE_UNINM'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span>unifile<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 파일물리명</span>
	<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'S01_FILE_SIZE'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span>filesize<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 파일크기</span>
	<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'S01_FILE_PATH'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 파일위치</span>
	<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'S01_FILE_NM'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 파일명</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


