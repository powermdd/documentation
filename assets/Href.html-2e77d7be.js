import{_ as n}from"./href-7bd2b076.js";import{_ as r}from"./PictureBox_Event-4f8f945f.js";import{_ as l,r as i,o as f,c as p,a as e,d as A,f as s,b,e as o}from"./app-6868953b.js";const c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANEAAAA6CAIAAACh2yv5AAAACXBIWXMAAB2HAAAdhwGP5fFlAAACWElEQVR42u3dMW7aUADG8b+rHCASQe4NaIYKMjNF4gAsTTiCB+5g+Q4MHAGchQNUyoCYE0+RbxCU5gx0MBSqiCpBxQ7w/43BkRO/T5/ee6BHsFgs+Lg0TYGbmxvKVdV9gyAAdntWh/j/7vW+X5DKZeZk5nTsgvLnKLLnpFKdbXvh6uoKeHx89BlpB61WC3h4eLDn9Innc1XtSOlIgrU9P/acXEPIzElmTmZOMnMyc5KZk5nT6Th711X5BEju60A/agO1Pfwp+SQBRhlAsxcD3cbyFWCS3AP1fgS0aw6cPSf9557buxx4yppAL+4CDV6B2XAA/JwX14RAxxGz56QD7bm3akA7ioH2svPuHC17Ttp7z70A02ECZMUcK+ysV7LLte0zEM7nwLzZA+JuA3idDYHBamq28bsXwDQZARkAWcLGrE72nFRqz82fgXo/BuIarHbUpnkb6C6v+Qpcx9G6pfIJMHi5BuJ43VxF893NfgBR3ANInoBLG86ek6rrufA78O3f7wGEdeBi4wf5UwaQZUCSvbm++csxsOekT7Ru3V3Y6QPR1jdKc0fCnpMOtucal01gNJoCeXu9Jl3u2BXr2a4DYc9JBzyfa3SBfmcIDJJkc4oH9KOG8zl7TtqvYDwe8/fJscVZsre3t3heiXYO1pvzSopc2XOqIo6ey6Ryes75nFxDyMxJZk5mTjJzMnOSmZOZ0wna+rmS8/NzVrvJ0kcV+bHn9CkEfk/1ux6T31PtfE4n13OSPSczJ5k5HXbm0jT98/H2ktdTldw3CIJKtiqP8jnbcyrbbwIowl4s8ucSAAAAAElFTkSuQmCC",a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAioAAACGCAIAAAB8EzZYAAAACXBIWXMAAB2HAAAdhwGP5fFlAAAFG0lEQVR42u3du44jRRQG4GO8gZFZXmV5FIRGWoEm5SZChEiA3QUShAgRt8QBgmdhXwF4CWZGTMDIBC2Nmi11U+2+u74vmMDbLve6yzr1u6rLm8PhcPH4MgBgKvvd9iXvAgDTU34AUH4AKMODxZ7ZKy///7ld//3PSO33ablMOdcrfW/rz/Keg/QDAKWmn/YsUo2aq79dR83tI+4+LSPH9Ol7IP0AgPQz7djTmBRA+gFA+qF5fVfTHFJX47Uz7PlPkxGnf7fHe5fSI80vIv0AwPLSzw/ffxsRV39dRcSHH30cEZvN5oVjjsdjRHzz9VcR8fDVhxHx7nsfzDIKnmYkno5q20eyOXe6jN3OsK/bfnz/5HR+71L118o3kH4AWHb6qXLPTz9+FxHX11cR8eTZl/cZqMo9z558EhG//vJzRLz9zvuDn6W7c9bFFQGkHwDWmX6q+Z4q91T5pvLZ0y8i4vOnn94//uZbl/fHw1BOW9W23tcF6QcA5ks/1RxPNd9TqbLO8+e/RcSff/x+n3vqc0IwlLlmksxggfQDQHnppz0DrSv31O+9aFo1586MJZvr6ugVIP0AUFL6STPQ629cRMSjR69NkHtO24Or/e70egbKabn9WcsfEU95/v13PZjr3R77dXPyN0g/ADCWzeFwuHh8eTb/H9/RAyzffreVfgCYwbnd1y3xAKyC9AOA8gOA8gMAyg8Ayg8AKD8AKD8AoPwAoPwAQCxh14P9busyUIib2zt9HqQfAApOP02q3xA6Ho8vPJKqHwPrVe/hc/Xq9nNYwhki/QDAOaafJk0jMmMxmCb3gPQDgPQzdx6SgWCaTxlIPwBIP8Bw0pyRPx/Tdb1oeozvEpB+AJB+gKmk6SQnkTRlmvbW0nkduQfpBwDpB1hDWgLpBwCkHyiV+3WQfgBA+oEymBlC+gGAc0k/7tCGrp8XqQjpBwDpZ21jNyM4aFLfy8CnBukHAJadftLRmfEaJeSV/o+f9qkZtjWQfgBQfgBA+QFA+QFA+QEA5QcA5QcAlB8AlB8AyDH/rgc3t3cuA0XR52G/20o/ABSZfva7rctAUblHn4cw9wOA8vMfm80m/ZGSQtoEUH4AQPkBQPkBAOUHAOUHAJo9OJv/Sbr8rOl36cc4EgDpBwDpZ6rck+aSpsdzjuzaJgDSDwDSz/hkEQDpBwDKSD+VMTZes5kbgPQDgPSzvNzTtEqtD7NKANIPANLPGvLQlEkLAOkHAOlnzBxTpZDqb/3I9JH2Npt2RrDnG4D0A4D0M76uOSNnb7f+bfY/TwCkHwCUHwCUHwBQfgBQfgBA+QFA+QEA5QcA5QcAKvPvenBze+cyUBR9Hva7rfQDQJHpZ7/bugwUlXv0eQhzPwAUmn6a5PyuaP2YPr9Dmj43vzW/f8qwfT6fXof0AwDnkn6gNGmaSX/DF6QfAJB++o0NjSsBpB8ApJ+500zTurL8tWrpaqKc1vKf26TPcyFf03q5+ico7YHts0rtbYL0A4D0s9RRYX7WyRnrdb0b6bTXhf7fHPTPUmla0oeRfgCQfkoaG4K+DdIPANLPmKO50/Z2S1f+TDlC7Lp/FyyNPoz0A4D0szZzrUDzLTzn99kB6QcA6WeqUVjX1LK0exTcM8F62Xsb6QcA6Wc9mSl9vOuIL/+58664g6bemLOSrf14fRjpBwDpZ9pxXNd/PW1vt/xRXp/XhT59fthj9F6kHwCUHwBQfgBQfgBA+QFA+QEA5QeAZfkXKjW7lDbh9aEAAAAASUVORK5CYII=",B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAi4AAABoCAIAAABZtuzQAAAACXBIWXMAAB2HAAAdhwGP5fFlAAAEhklEQVR42u3dTW/cRBgH8CckEkFp2Y9Svg6IKwXEESEuQF/ggqoeUXm5Ivgs9ETPwIdYshWNlCocrK6sWDMae+312+93qKq1490dT/TMPzO2T3b/XQdwLBfnpxoBImK73e7/f3Z9tdMicLxfvyttwNptNptbr7ylUQAY19nZ23e0AgAjkooAGDsVTf8j3nkn9yEPWXYx3JHn0p7175hvjVTLpI4GIBUBIBUNOX6vb63+bTseH+7Iw33fY5Jvpn+OQCoCgKWnopKxZ7cx6XBHBkAqAkAqWofUSrPUnFNKfvVafaaq5B3LP9Uc26qkDcc9R4BUBMByU9FPP/4QEZf/XkbE5198GREnJye39rm5uYmIp0++j4i7796NiI8/+Wzxeag5Xs6PkfP7N9NPfqxdcmVPXysMuyWtftuq/DjTOUeAVATAUlJRlYd++flZROx2lxHx4NF3+2xU5aFHD76KiN9/+zUiPrr/qTYd1HFG4sb7gFQEgFT0RjU/VOWhKvdUvnn4bUQ8fvj1/vX3P/hwvz/UdVsdN9/3BaQiAJaViqo5oWp+qFJloOfP/4iIf/7+a5+H6nNIUDfWzJMZL5CKAKCPVJTPRsPlofo1HKlrQbpd4THckSkxVts6pyAVAUA68LQdIVbXEr148WdE3Lv3Xgw/P9T2yv/y8W+3ewp0u79Z+ZNPm1tLvlG/n6okWbb9Lv221VjvK2PB4S7OTyNiu91KRQDMNhVNnxErgFQEAC0s8HJ0SQhgXqQiAJQiAJQiAFCKAFCKAEApAkApAgClCAClCACObOS7LVR3IoI1ePnqtT4PUhEAUlGx8mcgVc9PAob47Wv+fuW3glQEgFTUn9RYbF6jsDl+ZuiWlkAqAkApAgClCICZWtRTXJvr7vJzTs25nNTKvfw6ouY+9a1mjDhOb0/11W77539Wr0YqAkAqmuoIsXzdXSoPlaSfkmOmUhf0m4eafTif9Uv2TyUnK+iQigCQiqat7RjNmI7l0auRigBg3amoUn7nunm9FzTTT32mpzwb6bdIRQCw3FRUvv6t35EpjJuNmr09vyJOv0UqAoDlpqJUTmo7xjwkRbmKiOP37UP6m+uEkIoAYFmpKHU1eLdslE9XqSM3f9Y9F+g3xzfv5dG2H7ZdcQdSEQBS0fRyT9t9Sl6pj0nLR4hD7MmaDX3HkMN7rJ6MVASAVLSOMam/pANIRQBIRbIRAFIRAEoRAChFAChFAKAUAbAKI6+ge/nqtXPAqujzcHF+KhUBIBVlayMsOw/p89AkFQGw7lSUkr9PdnNr/lkvqacQubcCU+7/JT0ZpCIAWG4q6qavZxEBIBUBoBQBgFIEwEp4XhFMQn4VKEhFACAVHTautHaO6at6qT6MVAQAUlEf48pUWjKuBJCKAGDpqQjmqGTtnGSPVAQAUhEsl7VzIBUBoBQBoBQBwIgmOld0nL+et332KwBSEQBS0RjZ6PA9m1slHubb20EqAgClCAClCACUIgCUIgBQigBQigBAKQJAKQKAA51dX+1GfPvtlVPAuujzsNlsbr3yP7qpeKA/02+1AAAAAElFTkSuQmCC",g={},m=b('<h1 id="href" tabindex="-1"><a class="header-anchor" href="#href" aria-hidden="true">#</a> <img src="'+n+'" style="position:relative;top:5px;" width="40" height="40"> (href)</h1><p>Link 기능을 처리하는 컴포넌트입니다.</p><p><b style="font-size:20px;"> 1) 컴포넌트 이미지 </b> <br> 도구상자에서 href 컴포넌트를 선택하여 화면작업 영역에 디자인합니다. <br><img src="'+c+'" style="border:1px solid #bbb;" width="150" height="40"> <br></p><p><b style="font-size:20px;"> 2) 컴포넌트 속성 </b> <br> 화면작업 창에서 href 컴포넌트 선택 시 속성 창에 설정이 가능한 항목에 값을 입력합니다. <br><b style="font-size:18px;"> (1) B.CommonElement </b> <br><img src="'+a+'" style="border:1px solid #bbb;" width="300" height="70"> <br><b style="font-size:18px;"> ① ID </b> <br> 해당 컴포넌트의 ID를 설정합니다.</p><p><b style="font-size:18px;"> ② Label </b> <br> 해당 컴포넌트의 ID를 설정합니다.</p><p><b style="font-size:18px;"> ③ Visible </b> <br> 해당 컴포넌트를 화면에 보여줄지에 대한 여부를 설정합니다.</p><p><b style="font-size:18px;"> (2) C.ControlElement </b> <br><img src="'+B+'" style="border:1px solid #bbb;" width="300" height="50"> <br><b style="font-size:18px;"> ① Target </b> <br> 해당 컴포넌트의 링크 방식을 설정합니다.</p><ul><li>_self : 현재 창에서 이동한다.</li><li>_blank : 새로운 창으로 이동한다.</li><li>new : 새로운 창으로 이동한다.</li><li>_parent : 부모 페이지로 이동한다.</li></ul>',8),d={class:"custom-container tip"},Q={class:"custom-container-title"},P=A("p",null,"URL 정보가 없기 때문에 Target을 지정하더라도 화면상으로 확인이 불가능합니다. URL 정보를 지정해야 Build 후 해당 화면에 Target이 적용이 되었는지 확인할 수 있습니다.",-1),h=A("p",null,[A("b",{style:{"font-size":"18px"}}," ② URL "),o(),A("br"),o(" 해당 컴포넌트의 연결 주소를 설정합니다.")],-1),C={class:"custom-container tip"},v={class:"custom-container-title"},U=A("p",null,"Target 지정 없이 URL만 입력했다면 default로 해당 컴포넌트를 클릭했을 때 현재 창에서 이동이 됩니다.",-1),u=b('<p><b style="font-size:20px;"> 3) 컴포넌트 이벤트 </b> <br><img src="'+r+'" style="border:1px solid #bbb;" width="300" height="125"> <br><b style="font-size:18px;"> (1) 1.MouseEvent </b> <br><b style="font-size:18px;"> ① OnClick </b> <br> 마우스를 클릭할 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ② OnMosueDown </b> <br> 마우스 버튼을 누를 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ③ OnMosueMove </b> <br> 마우스를 움직일 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ④ OnMosueOut </b> <br> 마우스가 요소를 벗어날 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ⑤ OnMosueOver </b> <br> 마우스가 요소 안에 들어올 때 발생하는 이벤트입니다. <br><b style="font-size:18px;"> ⑥ OnMosueUp </b> <br> 마우스 버튼을 뗄 때 발생하는 이벤트입니다. <br></p>',1);function x(R,T){const t=i("Badge");return f(),p("div",null,[m,e(" Remark "),A("div",d,[A("p",Q,[s(t,{type:"tip",text:"Remark",vertical:"middle"})]),P]),e(" "),h,e(" Remark "),A("div",C,[A("p",v,[s(t,{type:"tip",text:"Remark",vertical:"middle"})]),U]),e(" "),u])}const H=l(g,[["render",x],["__file","Href.html.vue"]]);export{H as default};
