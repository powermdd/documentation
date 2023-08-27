import{_ as s}from"./TextBox-46e9b766.js";import{_ as b}from"./TextBox_Event-d4976077.js";import{_ as r,r as p,o as f,c as i,f as t,a as A,b as n,e as o,d as l}from"./app-2bdcf6f0.js";const u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAAA8CAIAAACCfENUAAAACXBIWXMAAB2HAAAdhwGP5fFlAAACgUlEQVR42u3dQU7iYBiH8aeTOYCmEOYGyMIAazI7D8BG4xFYcIeGO7DwCAIbD0DCYsJaySwIN7AZCdyAWcDETogRAtICz28n+RTa782/31tpG3Q6HeDu7o7D6na7qbxvEATAYrE4k+09xv38DSljgsNnhmRSyqKULEqdWlF2u91lg3b4rjCV9w2CYNkYnsn2HuN+Ninl4VuyKHV0NjpPWa1WgZeXF/eX9qhSqQDPz88mpU4iKdP6f7FOvPg+qCuTUtlrdNI6jyXZfcuilCxK2X1Ldt86G9+3/o3JE9Aa5IFmowaEGdqcCfDUGgD5ZgOohU6xa0pp96Tc+mq3Yh2Iiil93ukQeOgB3K5yegoMH9pAP14OKgA3zq1JKaW3psycEKg1IqC2Ss2e82pSSntNyq3vnbDefa9eASgzAkbLtV3hZm3MK1CIY+Df8m9tzLgERPVi4g1bwLjUBPKDPhDHAO0HMnkGQCalXFN+KH4F8s0IiML3hPs1qQH11RiA62YENBJjesMroJHbYO14ewP8/q/7lkkpfXVS7u2uXIVr4CrcbkyxVAYex28AOadDJqUsSsmi1HGuKZOryeTFOoe59+tkPAIK+Z8AuTxQeH0DphSBkAkwHgFQcrJO03pXY1Iqe0mZ/OHL0zHuA+1W//2V8j0Qrb72eAVc006MKQPlcuIvhDngR/wItFt/gPuoDhSdyaO1XnUmpTIn2OTpEHu4RifT31dXSsXnNTo6FhalLErp08O6133LNaXk4VsWpbRrUXp/SpmUkkUpi1La0UbnKS8vL4H5fO7+0h5dXFwAs9nMpNRJJKXkmlLnXZQ+h/q0t9fnfUsevmVRSnbfMimlDPgLjfHvd6/1L44AAAAASUVORK5CYII=",a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjEAAABrCAIAAAAJh0QbAAAACXBIWXMAAB2HAAAdhwGP5fFlAAAFbklEQVR42u3dy2okVRzA4X9MwEhmzKNMfBORwKBk6w0hGxE36syoGxE3AfG2FftZnFdQH6JNgmmY0C4KMq2dU5y6X/r7FiKdTnV198mc80tVV/ZWq9VisQgAGNorXgIARuLg7v9OH595OQDozdHhfkQsl0udBMDomJMAMCcBwH8dTG6PH7z2cp+v/nnRcAvb6m0TAJ0EgE6ai80qKvqp+G/zWmrecwA6CQB0UpXy2LylrQopttNuLQGgkwDQSXOXOmdv+7hUec/lbAdAJwHAuDvppx+/j4jLvy8j4uNPPo2Ivb29/91nvV5HxHfffhMRD19/GBHvf/BR63XS3Zlybe3D5nGp8ooa6rkA6CQAaKOTikL65ecfIuLq6jIinjz7+q6WikJ69uSziFj89mtEvPvehzN7pdo9uw8AnQTA9DupOIZUFFJRQoUvnn4VEV8+/fzu9rffObu7fxfKr1bXtbYefdhnAaCTAKCNTiqOGxXHkApFFT1//ntE/PXnH3eFtHmcqd2eSB2J6eeMtZzz6PrcDoBOAoChO6m8lroopP5VvZK3Y0sAOgkAnXRfLb351mlEPHp0MqpCyi+e7UZJ3X/7quHlUlcZr7odAJ0EAFPopM1aOjl5o9P9yzmuU/Vcuybn5rX1WK7mAKCTAJhjJ42ZCgHQSQBgTgLAnAQA5iQAzEkAYE4CwJwEAOYkAMxJANC/sVzH4ehw35vBRF3f3BrDoJMA0Ek9Kv+bTOv1+t77b9/efB+qbjO15032rYtnR59jODVit7+a/9fIUt+VGifb98nZh/xHqTryc55p/qM0/ylDJwHAFDopZ4U1tjVR+V5pHfKbZlqr/vKuyhn5qR4q/956j4VOAoDpd1Lzouqnh+qtBFFI7Y7/VCt097jlWy7fqy7+BVBLOgkAdFJeu+T3Sv75Tt2tnfNXsqmVYNXXIefRuziTUCGN57cLm23R1vgEnQSATuq3Iaqu1PJLov8+yG+dtlbETR69n/2ct7Y+65baWnn3jPmd0uLoJAB0UhvrSit0pqjquN2dEV7v80noJADY1U6COXVA/5/U2bXeQicBgE4ajt9xM/5aaqur9BY6CQCdRBsrTecKMsVa6uK59NlYek4nAcAudVI/n+5OXfmt/P5Vt1P+qfuqz67qPjPFWprK31Qd6voRrsWnkwBg9zqp6non5/ps9W7vf8/b3efmr0PXr9i8S6itcTvUOOzuqhP1/t6YUaeTAMCcBIA5CQDMSQCYkwDAnAQA5iQAzEkAYE4CYJzGch2H65tbbwaTZgxDVUeH+zoJAJ1UcbaEaRWSMQzN6SQAdFKe8/Pze2+/uLjw5jEh+SM5dc/88V9sIXWf8u3nbDn/WZTvg59idBIAOqmZqquw/HXreFZqVo7zLqSqxdD1SKi6P7oHnQSATppOOVmdQapX2vrpyNmOn0F0EgA6aTqrxdQ6bvOr22vA8u/Nf5S29od5816DTgJAJ/VVSOVnDaV+255/xlG793RsbBdKaLOGc97lqp8i2h4/5eOqn0/+5XzWCnQSADqprzVp/9/bxRqTuY7MnGYa2+eTungU0EkA6KR+NVmF5V9trMl5d2imLrrESEMnAYBOSq8T611rufkZSkNdu4wpjsk+t++sTnQSAOxGJ+Wv+7o4tjS/q5JDSs7n54xndBIAOmm4Ktpeu5Wv6VK3pFZ/9b63fK/q3dN6c66dkfpq1b7vf4TUexagkwCYqr3VarVYLCLi9PHZgPtxdLjvzWCirm9ujWGobblc6iQARsecBIA5CQDMSQCYkwDAnASAOQkAzEkAmJMAoK6X17t7sboacD+WK+8F02YMQ1XHx8c6CYDRd9LBqw+8HAAM6F9/enRSVrU7cQAAAABJRU5ErkJggg==",c="/documentation/assets/TextBox_Bind_Column-2ed19d1c.png",x="data:image/png;base64,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",P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiYAAACoCAIAAABbibKQAAAACXBIWXMAAB2HAAAdhwGP5fFlAAAG5UlEQVR42u3dzY7cNAAHcA+zEoOmpY9SXgfElS9xRIgL0Ba4IMQR8XVF8Cz0RM/AO1TsrnYPu9oeIq0iIkdOHCdO5vc7oGqasTOOkf2vnWT38uXLAACFPXr06DWtAMA8zs5ef6AVAJiBlAPAXCmn2jN78EbfuV1c3VRYcs3av7r9G/tbI9YysdIApBwApJwh8/H23zb/HTq/Lldyud87J3ml/msEUg4ArC3lpMwlx80xy5UMgJQDgJSzTrGdXbE1oZj+3WLtlaSUGtPPao1tldKGy14jQMoBYD0p5+effgghnP93HkL45NPPQgi73e5/x9zd3YUQvv/u2xDCwzcfhhA++PDjzeeb7vy3f87bf3w3zfTPnVPujJlqR9+45DRtW6WXU881AqQcAGpNOU2++fWXH0MIFxfnIYQnz765zzpNvnn25PMQwh+//xZCeO/9jzRlUfPMrM3fASkHgO2mnGb9psk3TY5pfPn06xDCV0+/uP/87XfevT8e2sbtRltvvYCUA0DdKadZs2nWbxpNpnn+/M8Qwr///H2fb9prPNC21MqQFSmQcgCQcuJiWadcvmnfAxG7l2LcHRLlSibFUm3rmoKUA8Ap2iVO/Zp7cV68+CuE8PjxW6H8+s3QO+HT57Pj7rEf9/yu9Ddpdv825RdNe1YpSXHob5m2rZaqV2aCfMfDXsoBoLKUUz8zUAApBwBC2NL7ciQbgMpJOQAYcgAw5ACAIQcAQw4AhhxNAIAhBwBDDgAYcgCo1jJPHzge9pqelbq8vtWHQcoBQMrJ0LyVp3lbz7Ln0G/ZM6S2HptiXJ9pl6/XIeUAwDpTTj1pyYwSfQakHACknOlySQ0rOgBIOQBIOfMmof6EFDu+u78oP0ull5lyZMpvHFc7tfXkrqHXbmg5U9ULUg4AUs7w7JKzohP7bn566M4H08scWvtUmY/askvsPpvm8/RrN7ScqeoFKQcAKWfN5pnxlajFXLXmPlP66rj6SDkASDk1SX9WFe35rB1ra5Tf29tXf2gf8P8aUg4AUk75uV7KjMzMvX+2q8XWmG/67xjLufr9fUDfQMoBQMph6Zwn/51O7slPS0uVA1IOAFLOWLE9Wv1HNn8usb8rvcz8I3Nqp84+nLNzbOiOtZwdbiDlACDlDJ+pDT0mfUY27rvjnupW/5Es1YfLXd9yfRWkHAAMOQBgyAHAkAOAIQcADDkAGHIAwJADgCEHgG3bXVzdaAUASjse9lIOADNZ5hlrx8Ne07NSl9e3+jCMI+UAsOmUExN7X8iyz7tNf9um93ICSDkASDlpmSY/PdSfPyQkQMoBgO2mnFjuqT8HyCgAUg4AUs4Uuvvc2mmj/bfdnNT/3XFnEluLGneGAFIOAJxSyulPFc3nsXWglO8ue4YAUg4AnF7KyckEy+YJaQaQcgBAyomLPZmt9HfT08y0++IApBwA2G7KSb8PZtrvjss6KbUDSDkAcBopZ+gba3JqWerMAaQcANhuyknf39XdD9a/Qyx2z3//d1MyUPoZxo73DAJAygGALaaccbP7WGIYd2R6aUOzTrkWAJByAMCQA4AhBwBDDgAYcgAw5ACAIQcAQw4AhhwAyLG7uLrRCgCUdjzspRwAZrLMM9aOh72mZ6Uur2/1YRhHygFg0yknZug7aWp7u0yJ8xn6RlTPogakHACknPrE5ulm8QBSDgAYcgAw5ABwas42+au6O9/614fqPzLluzmt0V4ns2YGSDkASDn15ZuUO3hKHJmSIcaVmf4bx7VGeu0AUg4AUs7YpNKVMvvOn6Gf8hxfvgGkHACknFrn2um7uZYtc9nUCCDlACDlrGdGn7Kba/7std7UCCDlACDl1Jd78nNSzpFryYIAUg4AUk592k8Ji32S8vm4I3POM73M2HenrQVAygFAypkuo+Qfn/Lcs6E15jz7IKf2Zc8cQMoBwJADAIYcAAw5ABhyAMCQA4AhBwAMOQAYcgA4BbuLqxutAEBpx8NeygFgJss8Y+142Gt6Vury+lYfhnGkHAA2nXJi0t/g6cnHAFIOAKwh5XSzS5N7ZBrWovtG2m3XC1IOAIYcAAw5AFDa2arPPrbS0/08thcu9q/e3eP9+zgpvXGqfhhbm+l+nlIvSDkASDnblZ6H7J1jXO9KTyftz3N6V3+9IOUAIOUA9WUmK4tIOQAg5Uwh/WlvUK53WadBygGA00s57Tlg98/5JUO5fjsuD9k5iZQDAFtPOXMyu6Rcv+qmn3L38YCUA4CUswbpqzgp9zfEnltlRsnQ3tjuk6Xvs4nVC1IOAFJOrXPG+UszQ6RET8vvgf0l6LdIOQCwhpTTz13ZAFIOAGwr5VibAZByAMCQA4AhB4BtewUbQpitJLNMCAAAAABJRU5ErkJggg==",d="data:image/png;base64,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",D={},g=l('<h1 id="textbox" tabindex="-1"><a class="header-anchor" href="#textbox" aria-hidden="true">#</a> <img src="'+s+'" style="position:relative;top:5px;" width="40" height="40"> (TextBox)</h1><p>텍스트 입력을 표시하는 컴포넌트입니다.</p><p><b style="font-size:20px;"> 1) 컴포넌트 이미지 </b> <br> 도구상자에서 TextBox 컴포넌트를 선택하여 화면작업 영역에 디자인합니다. <br><img src="'+u+'" style="border:1px solid #bbb;" width="150" height="40"> <br></p><p><b style="font-size:20px;"> 2) 컴포넌트 속성 </b> <br> 화면작업 창에서 TextBox 컴포넌트 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br><b style="font-size:18px;"> (1) A.Data </b> <br><img src="'+a+'" style="border:1px solid #bbb;" width="300" height="50"></p><p><b style="font-size:18px;"> ① Bind:Column </b> <br> UI 화면작업 창의 Dataset 탭에서 등록한 Dataset Column을 할당하는 부분입니다. <br><img src="'+c+'" width="400" height="300"></p><p><b style="font-size:18px;"> ② Dataset </b> <br> 할당된 Dataset 명 표시합니다. <br></p>',6),m=A("p",null,"<<<<<<< HEAD",-1),O={class:"custom-container details"},z=A("p",null,"=======",-1),v={class:"custom-container tip"},B={class:"custom-container-title"},H=A("blockquote",null,[A("blockquote",null,[A("blockquote",null,[A("blockquote",null,[A("blockquote",null,[A("blockquote",null,[A("blockquote",null,[A("p",null,[o("511382b79aff54c321790ef1cc623e0fdb81902e Dataset Bind 했을 경우 "),A("span",{style:{color:"#00a4ff"}},"Dataset_Column"),o("으로 해당 컴포넌트 ID가 자동으로 변환됩니다. "),A("br"),A("span",{style:{color:"#00a4ff"}},"Ex) Dataset : SEARCH Column : KEYWORD ⇒ 컴포넌트 ID : SEARCH_KEYWORD")])])])])])])])],-1),y=l('<p><b style="font-size:18px;"> (2) B.CommonElement </b> <br><img src="'+x+'" style="border:1px solid #bbb;" width="300" height="130"> <br><b style="font-size:18px;"> ① Disabled </b> <br> 값이 True이면 수정 불가능(서버 전송 불가능) False 경우 해당 속성 사용하지 않습니다.</p><p><b style="font-size:18px;"> ② ID </b> <br> 해당 컴포넌트의 ID를 설정합니다.</p><p><b style="font-size:18px;"> ③ InitValue </b> <br> 초기값 입력 or JSP 방식인 서브미션일 경우 해당 Column을 더블 클릭해서 입력이 가능합니다.</p><p><b style="font-size:18px;"> ④ NavIndex </b> <br> Index 값을 지정 후 Tab 키를 누르면 오름차순으로 이동하게 됩니다.</p><p><b style="font-size:18px;"> ⑤ ReadOnly </b> <br> 값이 True이면 포커스는 잡히지만 수정은 불가능합니다.</p><p><b style="font-size:18px;"> ⑥ Text-Align </b> <br> 입력한 텍스트 정렬을 설정합니다.</p><p><b style="font-size:18px;"> ⑦ Visible </b> <br> 해당 컴포넌트를 화면에 보여줄지에 대한 여부를 설정합니다. <br></p><p><b style="font-size:18px;"> (3) C.ControlElement </b> <br><img src="'+P+'" style="border:1px solid #bbb;" width="300" height="80"> <br><b style="font-size:18px;"> ① AutoFocus </b> <br> Load시 해당 컴포넌트에 자동으로 포커스 지정됩니다. (단, 하나의 컴포넌트만 true가 가능합니다.)</p><p><b style="font-size:18px;"> ② DataList </b> <br> DataList의 ID 속성값을 지정하면 DataList 태그와 연결됩니다.</p><p><b style="font-size:18px;"> ③ Placeholder </b> <br> 해당 컴포넌트의 적절한 값을 입력할 수 있도록 도움말을 간단하게 입력한다. 포커스가 잡히고 값을 입력하면 해당 값은 사라집니다.</p><p><b style="font-size:18px;"> ④ Type </b> <br> 해당 컴포넌트의 Type을 설정합니다.</p><p><b style="font-size:18px;"> (4) E.Validation </b> <br><img src="'+d+'" style="border:1px solid #bbb;" width="300" height="180"> <br><b style="font-size:18px;"> ① Comma-Apply </b> <br> 천 단위 콤마(,)를 설정합니다.</p><p><b style="font-size:18px;"> ② InNumber </b> <br> 숫자만 입력받는 필드인 경우는 True로 설정합니다. 숫자로 입력하지 않았을 때 메시지가 발생합니다.</p><p><b style="font-size:18px;"> ③ Length </b> <br> 해당 컴포넌트의 길이를 설정합니다.</p>',14),w=A("p",null,"<<<<<<< HEAD",-1),Q={class:"custom-container details"},q=A("p",null,"=======",-1),M={class:"custom-container tip"},h={class:"custom-container-title"},U=A("blockquote",null,[A("blockquote",null,[A("blockquote",null,[A("blockquote",null,[A("blockquote",null,[A("blockquote",null,[A("blockquote",null,[A("p",null,"511382b79aff54c321790ef1cc623e0fdb81902e 빌드를 했을 때 소스 상으로 size로 설정이 되어있지만 style 부분에 width도 같이 설정되어있어서 Length를 확인하려면 해당 컴포넌트 우측 속성에 styleOff을 true로 설정하면 해당 Length만큼 길이를 보여줍니다.")])])])])])])],-1),V=l('<p><b style="font-size:18px;"> ④ MaxLength </b> <br> 해당 컴포넌트의 최대 길이 제한을 설정합니다. <br><span style="color:#00a4ff;">Ex) 최대 길이가 12인 경우 12자리까지 입력이 가능합니다.</span></p><p><b style="font-size:18px;"> ⑤ MaxValue </b> <br> 해당 컴포넌트의 최대값을 설정 후 해당 최대값을 벗어나면 메시지가 발생합니다.</p><p><b style="font-size:18px;"> ⑥ MinValue </b> <br> 해당 컴포넌트의 최소값을 설정 후 해당 최소값을 벗어나면 메시지가 발생합니다.</p><p><b style="font-size:18px;"> ⑦ NumberCheckEvent </b> <br> 숫자 체크에 대한 이벤트 중 onChange, Onkeyup 하나를 선택하여 설정합니다. <br></p><p><b style="font-size:18px;"> ⑧ Point-Lengtht </b> <br> 해당 컴포넌트의 소수점을 설정 후 해당 자리수가 초과 입력 시 메시지가 발생합니다.</p><p><b style="font-size:18px;"> ⑨ Required-AlertMsg </b> <br> 해당 컴포넌트의 값을 입력하지 않았을 때 발생 되는 메시지 내용을 설정합니다. <br> (submit(debug, requiredmsg)할 때 requiredmsg를 true로 설정합니다.)</p><p><b style="font-size:18px;"> ⑩ StringFormat </b> <br> 해당 컴포넌트의 문자열 형식을 설정합니다.</p>',7),X=A("p",null,"<<<<<<< HEAD",-1),C={class:"custom-container details"},k=A("b",null," Comma-Apply, MaxLength, MaxVlalue 등 값을 숫자로 지정해야 하는 경우 ",-1),T=A("p",null,"=======",-1),L={class:"custom-container tip"},I={class:"custom-container-title"},F=A("b",null," Comma-Apply, MaxLength, MaxVlalue 등 값을 숫자로 지정해야 하는 경우 ",-1),j=A("blockquote",null,[A("blockquote",null,[A("blockquote",null,[A("blockquote",null,[A("blockquote",null,[A("blockquote",null,[A("blockquote",null,[A("p",null,[o("511382b79aff54c321790ef1cc623e0fdb81902e InNumber를 True로 설정하지 않으면 "),A("span",{style:{color:"#00a4ff"}},"“Available only when Number.(IsNumber:false -> true)”"),o("라고 메시지가 나온다.")])])])])])])])],-1),K=l('<p><b style="font-size:20px;"> 3) 컴포넌트 이벤트 </b> <br><img src="'+b+'" style="border:1px solid #bbb;" width="300" height="250"> <br><b style="font-size:18px;"> (1) 1.MouseEvent </b> <br><b style="font-size:18px;"> ① OnClick </b> <br> 마우스를 클릭할 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ② OnMosueDown </b> <br> 마우스 버튼을 누를 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ③ OnMosueMove </b> <br> 마우스를 움직일 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ④ OnMosueOut </b> <br> 마우스가 요소를 벗어날 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ⑤ OnMosueOver </b> <br> 마우스가 요소 안에 들어올 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ⑥ OnMosueUp </b> <br> 마우스 버튼을 뗄 때 발생하는 이벤트입니다. <br></p><p><b style="font-size:18px;"> (2) 2.KeyEvent </b> <br><b style="font-size:18px;"> ① OnBlur </b> <br> 포커스를 잃었을 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ② OnChange </b> <br> 입력필드의 값이 바뀐 후 포커스를 잃었을 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ③ OnFocus </b> <br> 포커스가 잡혔을 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ④ OnKeyDown </b> <br> 키를 눌렀을 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ⑤ OnKeypress </b> <br> 키를 누르고 있는 중 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ⑥ OnKeyUp </b> <br> 키를 눌렀다가 뗄 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ⑦ OnSelect </b> <br> 마우스로 입력된 텍스트를 드래그했을 때 발생하는 이벤트입니다. <br></p>',2);function E(R,Z){const e=p("Badge");return f(),i("div",null,[g,t(" Remark "),m,A("details",O,[A("summary",null,[n(e,{type:"tip",text:"Remark",vertical:"middle"})]),z,A("div",v,[A("p",B,[n(e,{type:"tip",text:"Remark",vertical:"middle"})]),H])]),t(" "),y,t(" Remark "),w,A("details",Q,[A("summary",null,[n(e,{type:"tip",text:"Remark",vertical:"middle"})]),q,A("div",M,[A("p",h,[n(e,{type:"tip",text:"Remark",vertical:"middle"})]),U])]),t(" "),V,t(" Remark "),X,A("details",C,[A("summary",null,[n(e,{type:"tip",text:"Remark",vertical:"middle"}),o(),k]),T,A("div",L,[A("p",I,[n(e,{type:"tip",text:"Remark",vertical:"middle"}),o(),F]),j])]),t(" "),K])}const W=r(D,[["render",E],["__file","TextBox.html.vue"]]);export{W as default};
