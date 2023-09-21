import{_ as e}from"./Property(7)-a4f73a55.js";import{_ as p,r as l,o as b,c,a as n,d as s,e as o,f as a,b as i}from"./app-7e4a87c3.js";const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAIAAABKR2XkAAAACXBIWXMAAB2HAAAdhwGP5fFlAAACLUlEQVRo3u2asW/TQBSHPxcSC8EEixc2T2lF65aRrRtWkOjegaFzYQmTPdhTswAbC5N3GCJ3adeIhaqwdIrajv4DilAqITNcfTJ2eo0hEcS+33R6id89fffy890pRpqmLJSWWDTpinXFdaj4tvrjIAgKEd/3NeNqMq7zY0HXZQRsWABsAASx/W9J166Pf6Me24DrunIFBOlyr1fRSu4XstVgxkFiA5ZlAXEcA747knQ9z/vj6cPwE+B5z4Eg+DgN6Rp5Rd4xBN0kSQDfGknfyPe3IH1+fllp+iiKgbXVLaD7LJXUFaRrx7jszUJ5h/4b0lH0Hnhwf1dG1tcBDg7fAb6/2xjG8yMdRXvAkvGiEN/cfAgcHAbl92utGc+DtGCsVvMYT0P6y5kN7J8gSYfhcSHD9vYycHo6VMwyHH4GHOcR0O12G7B3K/dWnvRRApCe2cBj+w6wf/JDfn9nZ2Vink7niZLxUcP2x2rSTztIumXdvXdLjr9f/JQR9RjajWcslLlBWOjdvN6++XZjnpevVoF2ywC4WhPNODtHfFCcRMbjFOj11irlvCJNSzPOiCjomqZRGF+OAdomhXH5Wd3HkySY7fWPAc9zZLzf/3rjs697juQtVqN5d0JTdbRJgW7m2c6spmgo49bcytN+fP1bsOgV5TPIpP2Jo/u4wm5Oe4WuePH62KT6zfH0mTXjTOK2XffxBBmz/Q/LYDCYeYnyxk0z1n6sK9YV64r/J/0C4s3fO7i7CU4AAAAASUVORK5CYII=",f="/documentation/assets/UpdBoc-abd601f6.png";const d={},A=s("h1",{id:"upd",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#upd","aria-hidden":"true"},"#"),a(),s("img",{src:r,style:{width:"50px"}}),a(),s("span",{class:"bocIcon"},"(UPD)"),a(),s("br")],-1),u=s("p",null,"DB Table에 대한 Update 처리를 수행하는 기능인 컴포넌트입니다.",-1),h={class:"custom-container tip"},m={class:"custom-container-title"},_=s("p",null,"UPD BOC는 쿼리를 자동 생성하며 자동 생성에 필요한 속성을 설정합니다.",-1),B=i('<h2 id="_1-boc-이미지" tabindex="-1"><a class="header-anchor" href="#_1-boc-이미지" aria-hidden="true">#</a> 1. BOC 이미지</h2><p>BOC 컴포넌트 목록에서 UPD BOC를 선택하여 Drag-Drop으로 화면작업 영역에 디자인합니다. <br></p><div class="boc"><img src="'+f+'" style="width:150px;"><div style="margin-top:33px;margin-left:20px;font-size:12px;"><span class="bocEX bocY2" style="margin-bottom:60px;">데이터베이스의 데이터를 수정하기 위한 조건 컬럼 부를 표시합니다. Where 절의 조건으로 사용됩니다.</span><span class="bocEX bocP" style="margin-bottom:84px;">데이터베이스의 데이터를 저장하는 컬럼 부를 표시합니다.</span><span class="bocEX bocW">입력한 값에 추가 또는 값을 변경하는 컬럼 부를 표시합니다.</span></div></div><h2 id="_2-속성" tabindex="-1"><a class="header-anchor" href="#_2-속성" aria-hidden="true">#</a> 2. 속성</h2><p>화면작업 창에서 SEL BOC 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다.<br><img src="'+e+'" class="boxBorder" style="position:relative;top:5px;width:300px;"> <br></p><p><span class="font20">1)</span><b class="font20"> 기초정보</b> <br></p><p><span class="font18">①</span><b class="font18"> OBJECT명 </b> <br> 해당 BOC가 실행된 후 해당 결과 SET을 저장할 Value Object의 명을 지정합니다. 해당 Object의 결과 Set은 그리드 형식의 Object로 구성됩니다.</p><p><span class="font18">②</span><b class="font18"> 논리명칭 </b> <br> BOC가 어떤 동작을 수행하는지를 간단한 명칭으로 기술합니다. 해당 명칭을 처리 흐름을 간략하게 표현할 수 있도록 기술합니다.</p><p><span class="font18">③</span><b class="font18"> 논리설명 </b> <br> 논리 명칭으로 표현하기 부족할 때 좀 더 상세히 내용을 기술합니다.</p><p><span class="font20">2)</span><b class="font20"> 입력부</b> <br></p><p><span class="font18">①</span><b class="font18"> DB스키마명 </b> <br> 수정 대상인 데이터베이스 스키마를 입력합니다.</p><p><span class="font18">②</span><b class="font18"> 대상테이블 </b> <br> 수정 대상인 데이터베이스 테이블 정보를 입력합니다.</p><p><span class="font18">③</span><b class="font18"> 입력 OBJECT </b> <br> 수정할 입력 데이터 Object 명을 입력합니다.</p><p><span class="font18">④</span><b class="font18"> 전체항목 </b> <br> 수정 대상인 데이터베이스 컬럼 정보를 입력합니다.</p><p><span class="font18">⑤</span><b class="font18"> 조건항목 </b> <br> 수정 처리를 위해서 필요한 조건 컬럼 정보를 설정합니다.</p><p><span class="font20">3)</span><b class="font20"> 출력부</b> <br></p><p><span class="font18">①</span><b class="font18"> Column Scroll </b> <br> 해당 BOC 목록이 많을 때 true로 설정했을 때 Display Count에서 설정한 개수만큼 보여주고 나머지 목록은 <span class="btnR">▲▼</span> 버튼으로 확인할 수 있습니다.</p><p><span class="font18">②</span><b class="font18"> Display Count </b> <br> 해당 BOC 목록이 많을 때 목록에 보이는 개수를 설정합니다.</p><p><span class="font18">③</span><b class="font18"> 화면출력유형 </b> <br></p><ul><li><b>None :</b> Default</li><li><b>Dataset :</b> View Designer에서 그리드 컴포넌트에 조회 시 설정합니다.</li><li><b>Recode :</b> JSP 출력방식일 때 단일 컴포넌트에 조회 시 설정합니다.</li><li><b>Page :</b> JSP 출력방식일 때 페이징 시 설정합니다.</li><li><b>ChartLabel :</b> View Designer에서 차트 컴포넌트에 범례를 설정합니다.</li><li><b>ChartData :</b> View Designer에는 차트 컴포넌트에 데이터 조회 시 설정합니다.</li><li><b>Schedule :</b> View Designer에서 스케줄 컴포넌트에 조회 시 설정합니다.</li></ul><p><span class="font20">4)</span><b class="font20"> 메시지부</b> <br></p><p><span class="font18">①</span><b class="font18"> 결과메시지 </b> <br> 해당 처리 결과에 대한 메시지를 클라이언트. 즉, 호출자에게 보낼 필요가 있을 때 정의합니다.<br></p><p><span class="font20">5)</span><b class="font20"> 선택항목</b> <br></p><p><span class="font18">①</span><b class="font18"> Alias전송명 </b> <br> 전송하는 Object 명의 Alias를 생성합니다.</p><p><span class="font18">②</span><b class="font18"> BatchExecute </b> <br> 배치 실행 여부를 설정합니다.</p><p><span class="font18">③</span><b class="font18"> Build Dbcheck </b> <br> 빌드 시 데이터베이스의 테이블 컬럼 정보와 해당 설정 정보와 비교 체크를 실행합니다.</p><p><span class="font18">④</span><b class="font18"> DB연결명 </b> <br> 기본 접속 DB는 자동 설정됩니다. 추가로 다른 DB 연결 명을 사용하여 데이터 처리의 필요성이 생기면 해당 정보에 접속 명을 등록하여 사용합니다.</p><p><span class="font18">⑤</span><b class="font18"> Log 수준 </b> <br> Debug-테스트 시에 로그 메시지를 정의할 수 있습니다. 데이터베이스 관련된 BOC는 ReturnData와 QueryData를 사용합니다.</p><ul><li><b>ProcessHead :</b> Seq번호, 프로세스 타입을 표시합니다.</li><li><b>InputData :</b> 입력 데이터를 표시합니다.</li><li><b>ReturnData :</b> 결과 데이터를 표시합니다.</li><li><b>Middle OutputData :</b> 중간 과정 결과 데이터를 표시합니다.</li><li><b>TabPage :</b> 탭 페이지 결과를 표시합니다.</li><li><b>Math-Trace :</b> Math의 계산식과 결과를 표시합니다.</li><li><b>Formula-Trace :</b> Formula의 계산식과 결과를 표시합니다.</li><li><b>QueryData :</b> 값이 포함된 쿼리를 표시합니다.</li><li><b>SCLTrace :</b> SCLT BOC의 결과를 표시합니다.</li><li><b>PEX부가 Objects :</b> PEX BOC의 부가적인 Object의 결과를 표시합니다.</li><li><b>미사용 :</b> 조건 컬럼 부의 계산식 값을 표시합니다.</li></ul><p><span class="font18">⑥</span><b class="font18"> 실행 조건 </b> <br> 실행 조건에 값이 있는 경우 해당 실행 조건이 True가 아니면 실행이 되지 않습니다.</p>',30);function D(C,O){const t=l("Badge");return b(),c("div",null,[A,u,n(" Remark "),s("div",h,[s("p",m,[o(t,{type:"tip",text:"Remark",vertical:"middle"})]),_]),n(" "),B])}const R=p(d,[["render",D],["__file","Upd.html.vue"]]);export{R as default};
