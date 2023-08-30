# 서버 설치

## 1. 준비사항
<b class="font20"> 1) POWER MDD.BMS : 개발 Server </b> <br/>
<b class="font18"> ① LicenseKey 디렉토리 (license.txt, PowerMDD_1.1.jar, key파일) </b> <br/>
license.txt와 PowerMDD_1.1.jar 파일은 POWER MDD 개발 Server 설치시 필요한 파일이고 key 파일은 POWER MDD Client 설치 후 로그인하기 전에 필요한 파일입니다. <br/>

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
LicenseKey 디렉토리를 관리자에게 요청하기 전에 개발서버 Hostname, IP주소, WAS PORT 정보가 필요합니다.
:::
<!-- -->

<b class="font18"> ② Meta DB 파일 (Schema, Sequence, Data) </b> <br/>
POWER MDD 서버에 있는 모든 정보 체계를 다 저장하고 있는 Database입니다.  <br/>

<b class="font18"> ③ BMSCTX 디렉토리 </b> <br/>
WAS에 탑재되는 Middleware 서버로 다수의 Client(DX)로부터 다양한 요청에 대하여 필요한 기능을 제공합니다. <br/>

<b class="font18"> ④ WebApplication명 디렉토리 </b> <br/>
Lib, Class, Css, jsp 등 Web Application의 실행파일들의 보관 디렉토리입니다. 

<b class="font20"> 2) POWER MDD.DX : 개발 Client </b> <br/>
<b class="font18"> ① POWER MDD Client setup 파일 </b> <br/>
Application 개발을 위한 프로그램 Tool입니다. <br/>

## 2. 권장사항 및 매뉴얼 사용 Tool 목록

<b class="font20"> 1) 권장사항 </b> <br/>
<b class="font18"> ① CPU </b> : Intel Pentium 4 이상<br/>

<b class="font18"> ② 메모리 </b> : 1GB 이상 <br/> 

<b class="font18"> ③ 디스크 </b> : 500MB 이상 <br/>

<b class="font18"> ④ .net Framework </b> (POWER MDD Client 설치시 해당 파일이 없으면 설치 메시지가 생성됩니다.) <br/>

<b class="font18"> ⑤ WAS </b> <br/>

<b class="font18"> ⑥ 자바 </b> : Open JDK 1.8 <br/>

<b class="font20"> 2) 매뉴얼 설명시 사용되는 Tool </b> <br/>
<b class="font18"> ① SSH접속 </b> : MobaXterm <br/>

<b class="font18"> ② WAS </b> : Tomcat 9 <br/> 

<b class="font18"> ③ Meta DB </b> : Postgresql 13 <br/>

<b class="font18"> ④ 업무 DB </b> : Mysql 8 <br/>

<b class="font18"> ⑤ 자바 </b> : Open JDK 1.8 <br/>

<b class="font18"> ⑥ DB Tool </b> : TablePlus <br/>

<style type='text/css'>
  [class*="boxBorder"] { border: 1px solid #bbb; }
  [class*="font20"] { font-size: 20px }
  [class*="font18"] { font-size: 18px }
  [class="spanBtn"] { border: 1px solid #bbb;border-radius: 4px;padding: 3px;background:white; color:dimgrey; }
  [class="spanEx"] { color: #00a4ff; }
</style>