import{_ as e}from"./login-a2a26d6f.js";import{_ as o,r as p,o as c,c as i,a,d as s,e as d,b as t,f as r}from"./app-f79bb2c8.js";const l="/documentation/assets/Was-6a41cbd0.png",h="/documentation/assets/shutdown-72346a96.png",m="/documentation/assets/startup-0d26cf8b.png",_="/documentation/assets/dxdbinit-de884544.png",b="/documentation/assets/keyfile-c615c703.png",u="/documentation/assets/loginView-27030767.png",g="/documentation/assets/powermdd-e77fdff3.png";const f={},D=t('<h1 id="power-mdd-dx" tabindex="-1"><a class="header-anchor" href="#power-mdd-dx" aria-hidden="true">#</a> POWER MDD DX</h1><h2 id="_1-was-실행" tabindex="-1"><a class="header-anchor" href="#_1-was-실행" aria-hidden="true">#</a> 1. WAS 실행</h2><p>개발 서버를 수정했으므로 재기동을 해야 PowerMDD가 정상적으로 작동이 됩니다.<br></p><p><b class="font20"> 1) bin 파일 </b> <br> SSH 접속 Tool에 ‘<b>cd</b> <b class="spanEx">Was경로</b><b>/bin</b>’을 입력한다. <br><img src="'+l+'" width="400" height="40"></p>',4),w={class:"custom-container tip"},k={class:"custom-container-title"},x=s("p",null,[r("Was을 시작, 중지, 기타 파일이 있는 디렉토리입니다. 시작, 중지 파일에는 sh와 bat파일이 있는데 sh 파일은 유닉스 시스템이고 bat파일은 윈도우 시스템입니다."),s("br")],-1),S=t('<p><b class="font20"> 2) WAS 재기동 </b> <br><span class="font18"> (1) WAS가 실행되어 있다면 SSH 접속 Tool에 ‘<b>./shutdown.sh</b>’을 입력해서 WAS을 중지합니다. </span> <br><img src="'+h+'" width="600" height="110"></p><p><span class="font18"> (2) SSH 접속 Tool에 ‘<b>./startup.sh</b>’을 입력해서 WAS을 시작합니다. </span> <br><img src="'+m+'" width="600" height="110"></p><h2 id="_2-power-mdd-실행" tabindex="-1"><a class="header-anchor" href="#_2-power-mdd-실행" aria-hidden="true">#</a> 2. POWER MDD 실행</h2><p><b class="font20"> 1) Project 등록 </b> <br><span class="font18"> (1) POWER MDD 로그인하기 전에 PowerMDD 설치 경로에 들어가서 DXDBInit.xml 클릭합니다. </span> <br><img src="'+_+`" width="600" height="300"></p><p><span class="font18"> (2) POWER MDD로 개발할 프로젝트명을 입력합니다. </span> <br></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SYSTEM</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SYSID</span><span class="token punctuation">&gt;</span></span>DEMO<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SYSID</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SYSTEM</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b class="font20"> 2) POWER MDD 로그인 (설치부분은 PowerMDD 매뉴얼 참고) </b> <br><span class="font18"> (1) 관리자에게 받은 접속 보안 KEY 파일을 넣습니다. </span> <br><img src="`+b+'" width="700" height="300"></p><p><span class="font18"> (2) 바로 로그인 화면으로 변경된 것을 확인할 수 있습니다. </span> <br><img src="'+u+'" width="500" height="380"></p><p><span class="font18"> (3) ID와 암호는 Meat DB에서 ‘PUS01ZT’ 테이블에서 정보를 확인한 후 로그인을 합니다. </span> <br><img src="'+e+'" width="500" height="380"></p><p><span class="font18"> (4) 로그인을 성공했다면 POWER MDD가 정상적으로 설치되었다는 것을 확인할 수 있습니다. </span> <br><img src="'+g+'" width="500" height="300"></p>',10);function v(M,P){const n=p("Badge");return c(),i("div",null,[D,a(" Remark "),s("div",w,[s("p",k,[d(n,{type:"tip",text:"Remark",vertical:"middle"})]),x]),a(" "),S])}const R=o(f,[["render",v],["__file","PowerMddDx.html.vue"]]);export{R as default};
