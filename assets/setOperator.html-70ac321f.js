import{_ as r,r as i,o as s,c as o,a as t,d as e,e as b,b as a,f as l}from"./app-4fc9e9c3.js";const n={},c=a('<h1 id="연산자-설정" tabindex="-1"><a class="header-anchor" href="#연산자-설정" aria-hidden="true">#</a> 연산자 설정</h1><p>값의 계산 또는 판단하기 위한 연산 처리로 산술연산, 비교연산, 논리연산, 날짜연산 기능을 제공합니다.</p><p><b style="font-size:20px;">1) 산술연산</b><br></p><ul><li><p><b style="font-size:20px;">➀ (+) 더하기 </b><br> 사용이 가능한 지원하는 데이터 형 : 수치, String, 날짜(8자리)에 일수 더하기</p></li><li><p><b style="font-size:20px;">➁ (-) 빼기 </b><br> 사용이 가능한 지원하는 데이터 형 : 수치, 날짜 (8자리) 에 일수 빼기, 날짜 (8자리)와 날짜 (8자리) 차이 일수</p></li><li><p><b style="font-size:20px;">➂ (/) 나누기 </b><br> 사용이 가능한 지원하는 데이터 형 : 수치</p></li><li><p><b style="font-size:20px;">➃ (*) 곱하기 </b><br> 사용이 가능한 지원하는 데이터 형 : 수치</p></li><li><p><b style="font-size:20px;">➄ (%) 나머지 : </b><br> 사용이 가능한 지원하는 데이터 형 : 수치</p></li></ul><p><b style="font-size:20px;">2) 비교 연산</b><br></p><ul><li><p><b style="font-size:20px;">➀ (&gt;) 크다</b><br> 사용이 가능한 지원하는 데이터 형 : 수치, String</p></li><li><p><b style="font-size:20px;">➁ (&lt;) 작다 </b><br> 사용이 가능한 지원하는 데이터 형 : 수치, String</p></li><li><p><b style="font-size:20px;">➂ (==) 같다 </b><br> 사용이 가능한 지원하는 데이터 형 : 수치</p></li><li><p><b style="font-size:20px;">➃ (&gt;=) 크거나 같다 </b><br> 사용이 가능한 지원하는 데이터 형 : 수치</p></li><li><p><b style="font-size:20px;">➄ (&lt;=) 작거나 같다 </b><br> 사용이 가능한 지원하는 데이터 형 : 수치</p></li><li><p><b style="font-size:20px;">➅ (!=) 같지 않다 </b><br> 사용이 가능한 지원하는 데이터 형 : 수치</p></li></ul><p><b style="font-size:20px;">3) 논리연산</b><br></p><ul><li><p><b style="font-size:20px;">➀ (&amp;&amp;) 그리고</b><br> 사용이 가능한 지원하는 데이터 형 : 비교연산자 및 결과값이 Boolean 형</p></li><li><p><b style="font-size:20px;">➁ (||) 또는 </b><br> 사용이 가능한 지원하는 데이터 형 : 비교연산자 및 결과값이 Boolean 형</p></li></ul><p><b style="font-size:20px;">4) 날짜 연산</b><br> 날짜 연산은 일자 연산기능을 제공하고 있습니다. 일자 연산은 대부분 Database 시스템의 일자를 사용하기 때문에 Application 서버에서 사용하는 일자 기능은 제한적인 기능만 제공하고 있다. 아래 지원하는 기능 외의 다른 형식 필요 시에는 User Funation 기능을 사용해야 합니다.<br></p><ul><li><b style="font-size:20px;">➀ 사용하는 일자 Format</b><br></li></ul><p style="background-color:rgb(223, 230, 247);margin-right:10px;padding-left:20px;">8자리 일자 : YYYYMMDD</p><ul><li><b style="font-size:20px;">➁ 일수 구분 Format</b><br></li></ul><p style="background-color:rgb(223, 230, 247);margin-right:10px;padding-left:20px;">구분자(D:일수, M:월수, Y:년수) + # (날짜형) + 수치값</p><p style="color:rgb(0, 164, 255);"> Ex) 해당 “UPD_DT” 컬럼 계산식에 날짜 연산을 활용한 값을 넣습니다. <br> #20230101 + D#1 : 일수(D#) 2023년 1월 1일에 1일을 더하기 <br> #20230101 + M#1 : 월수(M#) 2023년 1월 1일에 1달을 더하기 <br> #20230101 + Y#1 : 1년수(Y#) 2023년 1월 1일에 1년을 더하기 </p><p><b style="font-size:20px;">5) 문자열 연산</b><br> Database BOC중 DML을 처리하는 BOC에서만 사용됩니다. SQL 구문 내에 Parameter를 할당하고자 할 때 사용합니다. DML처리 하는 BOC에 Column 추가 시 Parameter의 값으로 SQL 구문을 처리하고자 할 때 사용합니다.<br></p><p style="background-color:rgb(223, 230, 247);margin-right:10px;padding-left:20px;">구문 : “&amp;” + COLUMN + “;”</p>',16),d={class:"custom-container tip"},x={class:"custom-container-title"},f=e("p",null,[l("& Parameter 명 시작 지시자"),e("br"),l(" s; Parameter 명 종료 지시자")],-1);function m(y,u){const p=i("Badge");return s(),o("div",null,[c,t(" Remark "),e("div",d,[e("p",x,[b(p,{type:"tip",text:"Remark",vertical:"middle"})]),f]),t(" ")])}const _=r(n,[["render",m],["__file","setOperator.html.vue"]]);export{_ as default};
