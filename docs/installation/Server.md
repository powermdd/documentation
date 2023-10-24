# 서버 설치

## 1. 준비사항

<span class="font20">1)</span><b class="font20"> POWERMDD.BMS : 개발 서버 </b> <br/>

<span class="font18">①</span><b class="font18"> SQL 디렉토리 (Schema, Sequence, Data) </b> <br/>
POWERMDD 서버에 있는 모든 정보 체계를 다 저장하고 있는 데이터베이스입니다. <br/>

<span class="font18">②</span><b class="font18"> BMSCTX.zip 파일 </b> <br/>
WAS에 탑재되는 Middleware 서버로 다수의 클라이언트(DX)로부터 다양한 요청에 대하여 필요한 기능을 제공합니다. <br/>

<span class="font18">③</span><b class="font18"> WebApplication명.war 파일 </b> <br/>
lib, class, css, jsp 등 웹 애플리케이션의 실행 파일들의 보관 디렉토리입니다.  <br/>


<span class="font20">2)</span><b class="font20"> POWERMDD.DX : 개발 클라이언트 </b> <br/>

<span class="font18">①</span><b class="font18"> POWERMDD 클라이언트 setup 파일 </b> <br/>
애플리케이션 개발을 위한 프로그램 Tool입니다. <br/>

<span class="font18">②</span><b class="font18"> License Key 파일 </b> <br/>
POWERMDD 클라이언트 설치 후 로그인하기 전에 필요한 파일입니다. <br/>

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
License Key 파일을 관리자에게 요청하기 전에 개발 서버 Hostname, IP주소, WAS PORT 정보가 필요합니다.
:::
<!-- -->

## 2. 권장사항 및 매뉴얼 사용 Tool 목록

<span class="font20">1)</span><b class="font20"> 권장사항 </b> <br/>

<span class="font18">①</span><b class="font18"> CPU </b> : Intel Pentium 4 이상<br/>

<span class="font18">②</span><b class="font18"> 메모리 </b> : 1GB 이상 <br/> 

<span class="font18">③</span><b class="font18"> 디스크 </b> : 500MB 이상 <br/>

<span class="font18">④</span><b class="font18"> .net Framework </b> : POWERMDD 클라이언트 설치시 해당 파일이 없으면 설치 메시지가 생성됩니다.<br/>

<span class="font18">⑤</span><b class="font18"> WAS </b> <br/>

<span class="font18">⑥</span><b class="font18"> 자바 </b> : Open JDK 1.8 <br/>

<span class="font20">2)</span><b class="font20"> 매뉴얼 설명시 사용되는 Tool </b> <br/>

<span class="font18">①</span><b class="font18"> SSH접속 </b> : MobaXterm <br/>

<span class="font18">②</span><b class="font18"> WAS </b> : Tomcat 9 <br/> 

<span class="font18">③</span><b class="font18"> Meta DB </b> : Postgresql 13 <br/>

<span class="font18">④</span><b class="font18"> 업무 DB </b> : Mysql 8 <br/>

<span class="font18">⑤</span><b class="font18"> 자바 </b> : Open JDK 1.8 <br/>

<span class="font18">⑥</span><b class="font18"> DB Tool </b> : TablePlus <br/>

<style type='text/css'>
  [class*="boxBorder"] { border: 1px solid #bbb; }
  [class*="font20"] { font-size: 20px }
  [class*="font18"] { font-size: 18px }
  [class="spanBtn"] { border: 1px solid #bbb;border-radius: 4px;padding: 3px;background:white; color:dimgrey; }
  [class="spanEx"] { color: #00a4ff; }
</style>