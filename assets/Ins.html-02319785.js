import{_ as e,r as l,o as b,c as p,a as t,d as s,e as o,f as a,b as c}from"./app-63752310.js";const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAABFCAIAAAB2cXkSAAAACXBIWXMAAB2HAAAdhwGP5fFlAAAC4ElEQVRo3u2av2sTYRjHPzHNJc2PQYJFKhQH3R2EUBxcJKCkDl3aipAoolBcM94Nd6NLp4BS0IDSZrBLg/U/CAUnhyIo4liFDA6FFCt1eMn1yOV9vUvaQu7e75Z73+fNw+d98zzP+1wSx8fHTKAuMJnSfmu/o+z31Bmta9u2YtSyrJjyTpx6/Bak784A3HxmDox+eukAO7/Gpa5590nfLgAYBsBUEmA6P3z+1vfRqcebtyB9A4BMGiBtnFCfuaKyffd5FOrR4q2OvkKmaQKO4wBXBWkAvkjmP5lXrbbeCUc9ivlSEJVJkL4IQA+AH0orMf/5HV2fyNTtdoc+bzQaLuk0APsArK6uKqyE0tmkZOSvrgeV8pMOZJWRJE9+a94SCbrilMtIi9Eh32dMK3j784YsokcxXwY/tTIJ6tbDy+Gqnbf7/82d0T3fuVwOODg4GPmXYAemHoR01HkL0u12G6hUKu4OtFothdXS0hKQyWTcisV2HAV1QVpdEUU9ntTrdcUOCOoyCdKO0wRWlh8A166n3KrQy9X75NvXP8DG5nvAslY07wDyki6V7g2MlsuXXMbeKr/d/gkYxgnH3d0PgGXVYhNPBLler+dGD2+UaDabA/Or1apL2jSrwNra4G1zb687cL79c/r7UAVs+81Q6lHkLUgLuoKln+4wHQKO8wowzaeA43R8d82O8l47764Qp3wpSI+q0gD14BJWK8uPgI3N18D29jawsLAQm/uOiB7eMy2LJ3Dko94I5dPi4mPPp6NY3i/DxBM/oVtAMpkEstkpIJdLAfm8ARQKBpDPp4B8LhVgtXj2T+Q6OofV4tQflKlYLGreY/CW9ZzkdYXp1ienp8MY8B7tneJ5/nVIx29IJBKat/Z7Avon46v/5uC++yR4PTidTQFbWy+Aubk5oFarad4hqQfnvfNxzSU9OzsLlMtlzTs09aBSk9a8w0h0QtTy9kl0/Nb5Uvut/T5r/QMMXxN33DtD8wAAAABJRU5ErkJggg==",r="/documentation/assets/INSBoc-d2efe53a.png",d="/documentation/assets/Property(1)-2d25163d.png";const f={},u=s("h1",{id:"ins",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#ins","aria-hidden":"true"},"#"),a(),s("img",{class:"iconB",src:i,style:{width:"50px"}}),a(),s("span",{class:"bocIcon"},"(INS)"),a(),s("br")],-1),A=s("p",null,"DB Table에 대한 Insert 처리를 수행하는 기능인 컴포넌트입니다.",-1),B={class:"custom-container tip"},h={class:"custom-container-title"},m=s("p",null,"INS-BOC는 쿼리를 자동 생성하며 자동 생성에 필요한 속성을 설정합니다.",-1),_=c('<h2 id="_1-boc-이미지" tabindex="-1"><a class="header-anchor" href="#_1-boc-이미지" aria-hidden="true">#</a> 1. BOC 이미지</h2><p>BOC 컴포넌트 목록에서 INS BOC를 선택하여 Drag-Drop으로 화면작업 영역에 디자인합니다. <br></p><div class="boc"><img src="'+r+'" style="width:150px;"><div style="margin-top:103px;margin-left:20px;font-size:12px;"><span class="bocEX bocP" style="margin-bottom:111px;">데이터베이스의 데이터를 등록하는 컬럼 부를 표시합니다.</span><span class="bocEX bocW">입력한 값에 추가 또는 값을 변경하는 컬럼 부를 표시합니다.</span></div></div><h2 id="_2-속성" tabindex="-1"><a class="header-anchor" href="#_2-속성" aria-hidden="true">#</a> 2. 속성</h2><p>화면작업 창에서 INS BOC 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다.<br><img src="'+d+'" class="boxBorder" style="width:300px;"> <br></p><p><span class="font20">1)</span><b class="font20"> 기초정보</b> <br></p><p><span class="font18">①</span><b class="font18"> OBJECT명 </b> <br> 해당 BOC가 실행된 후 해당 결과 SET을 저장할 Value Object의 명을 지정합니다. 해당 Object의 결과 Set은 그리드 형식의 Object로 구성됩니다.</p><p><span class="font18">②</span><b class="font18"> 논리명칭 </b> <br> BOC가 어떤 동작을 수행하는지를 간단한 명칭으로 기술합니다. 해당 명칭을 처리 흐름을 간략하게 표현할 수 있도록 기술합니다.</p><p><span class="font18">③</span><b class="font18"> 논리설명 </b> <br> 논리 명칭으로 표현하기 부족할 때 좀 더 상세히 내용을 기술합니다.</p><p><span class="font20">2)</span><b class="font20"> 입력부</b> <br></p><p><span class="font18">①</span><b class="font18"> DB스키마명 </b> <br> 등록 대상인 데이터베이스 스키마를 입력합니다.</p><p><span class="font18">②</span><b class="font18"> 대상테이블 </b> <br> 등록 대상인 데이터베이스 테이블 정보를 입력합니다.</p><p><span class="font18">③</span><b class="font18"> 입력 OBJECT </b> <br> 등록할 입력 데이터 Object 명을 입력합니다.</p><p><span class="font18">④</span><b class="font18"> 전체항목 </b> <br> 등록 대상인 데이터베이스 컬럼 정보를 입력합니다.</p><p><span class="font20">3)</span><b class="font20"> 출력부</b> <br></p><p><span class="font18">①</span><b class="font18"> Column Scroll </b> <br> 해당 BOC 목록이 많을 때 true로 설정했을 때 Display Count에서 설정한 개수만큼 보여주고 나머지 목록은 <span class="btnR">▲▼</span> 버튼으로 확인할 수 있습니다.</p><p><span class="font18">②</span><b class="font18"> Display Count </b> <br> 해당 BOC 목록이 많을 때 목록에 보이는 개수를 설정합니다.</p><p><span class="font18">③</span><b class="font18"> 화면출력유형 </b> <br></p><ul><li><b>None :</b> Default</li><li><b>Dataset :</b> View Designer에서 그리드 컴포넌트에 조회 시 설정합니다.</li><li><b>Recode :</b> JSP 출력방식일 때 단일 컴포넌트에 조회 시 설정합니다.</li><li><b>Page :</b> JSP 출력방식일 때 페이징 시 설정합니다.</li><li><b>ChartLabel :</b> View Designer에서 차트 컴포넌트에 범례를 설정합니다.</li><li><b>ChartData :</b> View Designer에는 차트 컴포넌트에 데이터 조회 시 설정합니다.</li><li><b>Schedule :</b> View Designer에서 스케줄 컴포넌트에 조회 시 설정합니다.</li></ul><p><span class="font20">4)</span><b class="font20"> 메시지부</b> <br></p><p><span class="font18">①</span><b class="font18"> 결과메시지 </b> <br> 해당 처리 결과에 대한 메시지를 클라이언트. 즉, 호출자에게 보낼 필요가 있을 때 정의합니다.<br></p><p><span class="font20">5)</span><b class="font20"> 선택항목</b> <br></p><p><span class="font18">①</span><b class="font18"> Alias전송명 </b> <br> 전송하는 Object 명의 Alias를 생성합니다.</p><p><span class="font18">②</span><b class="font18"> BatchExecute </b> <br> 배치 실행 여부를 설정합니다.</p><p><span class="font18">③</span><b class="font18"> Build Dbcheck </b> <br> 빌드 시 데이터베이스의 테이블 컬럼 정보와 해당 설정 정보와 비교 체크를 실행합니다.</p><p><span class="font18">④</span><b class="font18"> DB연결명 </b> <br> 기본 접속 DB는 자동 설정됩니다. 추가로 다른 DB 연결 명을 사용하여 데이터 처리의 필요성이 생기면 해당 정보에 접속 명을 등록하여 사용합니다.</p><p><span class="font18">⑤</span><b class="font18"> Log 수준 </b> <br> Debug-테스트 시에 로그 메시지를 정의할 수 있습니다. 데이터베이스 관련된 BOC는 ReturnData와 QueryData를 사용합니다.</p><ul><li><b>ProcessHead :</b> Seq번호, 프로세스 타입을 표시합니다.</li><li><b>InputData :</b> 입력 데이터를 표시합니다.</li><li><b>ReturnData :</b> 결과 데이터를 표시합니다.</li><li><b>Middle OutputData :</b> 중간 과정 결과 데이터를 표시합니다.</li><li><b>TabPage :</b> 탭 페이지 결과를 표시합니다.</li><li><b>Math-Trace :</b> Math의 계산식과 결과를 표시합니다.</li><li><b>Formula-Trace :</b> Formula의 계산식과 결과를 표시합니다.</li><li><b>QueryData :</b> 값이 포함된 쿼리를 표시합니다.</li><li><b>SCLTrace :</b> SCLT BOC의 결과를 표시합니다.</li><li><b>PEX부가 Objects :</b> PEX BOC의 부가적인 Object의 결과를 표시합니다.</li><li><b>미사용 :</b> 조건 컬럼 부의 계산식 값을 표시합니다.</li></ul><p><span class="font18">⑥</span><b class="font18"> 실행 조건 </b> <br> 실행 조건에 값이 있는 경우 해당 실행 조건이 True가 아니면 실행이 되지 않습니다.</p>',29);function D(O,g){const n=l("Badge");return b(),p("div",null,[u,A,t(" Remark "),s("div",B,[s("p",h,[o(n,{type:"tip",text:"Remark",vertical:"middle"})]),m]),t(" "),_])}const y=e(f,[["render",D],["__file","Ins.html.vue"]]);export{y as default};
