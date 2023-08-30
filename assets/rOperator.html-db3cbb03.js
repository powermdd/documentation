import{_ as s,r as c,o as n,c as d,f as t,a as o,d as e,e as a}from"./app-fbe3ace6.js";const l={},i=e("h1",{id:"레코드-연산자",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#레코드-연산자","aria-hidden":"true"},"#"),t(" 레코드 연산자")],-1),p=e("p",null,[e("b",{style:{"font-size":"20px"}},"1) (before) 바로 전 처리 값 "),e("br"),t(" POWER MDD는 Dataset Object 즉 다수(0~n건)의 Input Records를 Loop를 통하여 처리합니다. before연산은 현재 처리되고 있는 Current Record의 이전 Record의 값을 참조하고 싶을 때 사용합니다. "),e("br"),t(" 일반적으로 누적 값을 계산하고 싶을 때에 종종 사용됩니다. before 사용시 첫 번째 Record의 이전 Record의 값은 empty 또는 0 값이 할당됩니다.")],-1),_=e("p",{style:{"background-color":"rgb(223, 230, 247)","margin-right":"10px","padding-left":"20px"}},"구문 1 : 식 before",-1),b=e("br",null,null,-1),g=e("p",{style:{"background-color":"rgb(223, 230, 247)","margin-right":"10px","padding-left":"20px"}},"구문 2 : COLUMN_ID.before",-1),u=e("br",null,null,-1),h=e("p",null,[e("b",{style:{"font-size":"20px"}},"2) (first) 처음 값 "),e("br"),t(" Dataset Object Records의 첫 번째 Record의 값을 참조할 때 사용합니다.")],-1),R=e("p",{style:{"background-color":"rgb(223, 230, 247)","margin-right":"10px","padding-left":"20px"}},"구문 1 : DataSet.COLUMN.first",-1),f=e("p",{style:{"background-color":"rgb(223, 230, 247)","margin-right":"10px","padding-left":"20px"}},"구문 2 : COLUMN.first",-1),m=e("p",null,[e("b",{style:{"font-size":"20px"}},"3) (last) 마지막 값 "),e("br"),t(" Dataset Object Records의 마지막 Record의 값을 참조할 때 사용합니다.")],-1),x=e("p",{style:{"background-color":"rgb(223, 230, 247)","margin-right":"10px","padding-left":"20px"}},"구문 1 : DataSet.COLUMN.last",-1),C=e("p",{style:{"background-color":"rgb(223, 230, 247)","margin-right":"10px","padding-left":"20px"}},"구문 2 : COLUMN.last",-1),D=e("p",null,[e("b",{style:{"font-size":"20px"}},"4) (rcount) 레코드건수 "),e("br"),t(" Dataset Object Records의 Current Record의 건수를 가져옵니다.")],-1),y=e("p",{style:{"background-color":"rgb(223, 230, 247)","margin-right":"10px","padding-left":"20px"}},"구문 : OBJECT명.rcount",-1),O=e("p",null,[e("b",{style:{"font-size":"20px"}},"5) (~) 현재 레코드의 컬럼 "),e("br"),t(" POWER MDD는 Dataset내에서 Record단위로 Data를 처리합니다. Record는 여러 컬럼의 값으로 구성되어 있는 집합입니다. "),e("br"),t(" 다수의 Records를 Loop를 Record를 재구성 처리 할 때 입력되는 Current Record와 신규로 재구성되어 만들어지는 Record가 발생하게 됩니다. 즉 신규로 재구성되는 Record 내 컬럼들을 생성할 때 컬럼의 생성 순서가 발생합니다. 여기서 ‘~’를 지정한 컬럼은 신규로 재구성되는 Record의 컬럼을 참조하게 됩니다.")],-1),k=e("p",{style:{"background-color":"rgb(223, 230, 247)","margin-right":"10px","padding-left":"20px"}},"구문 : ~COLUMN",-1),M={class:"custom-container tip"},L={class:"custom-container-title"},N=e("p",null,"‘~’을 사용할 경우, 출력 항목 목록 부분은 재구성되는 컬럼과 계산식을 입력할 목록을 다음 목록으로 지정하고 계산식을 입력할 컬럼 계산순서 또한 다음 순서로 지정하지 않으면 테스트 또는 빌드 시 오류 생길 수 있습니다.",-1);function A(B,U){const r=c("Badge");return n(),d("div",null,[i,p,_,t(" 계산식에 할당하는 Column의 이전 Record의 값이 됩니다."),b,t(" 만일 AMT라는 Column의 값을 할당을 위하여 계산식에 before을 사용하게 되면 AMT의 이전 Record의 AMT값을 참조합니다. "),g,t(" 명시적으로 지정한 Column의 이전 Record에 있는 값을 참조합니다."),u,t(" 만일 SALARY.before 사용하게 되면 현재 처리중인 Record의 이전 Record의 SALARY 값을 참조합니다. "),h,R,t(" Dataset 첫 번째 Record의 Column값이 참조 됩니다. "),f,t(" 입력 Dataset의 첫 번째 Record의 Column 값이 참조됩니다. "),m,x,t(" Dataset 마지막 Record의 Column값이 참조됩니다. "),C,t(" 입력 Dataset의 마지막 Record의 Column 값이 참조됩니다. "),D,y,O,k,o(" Remark "),e("div",M,[e("p",L,[a(r,{type:"tip",text:"Remark",vertical:"middle"})]),N]),o(" ")])}const z=s(l,[["render",A],["__file","rOperator.html.vue"]]);export{z as default};
