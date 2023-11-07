---
sidebarDepth: 0
---
# 시스템 구조

![SystemStructure](../.vuepress/public/SystemStructure.png)

::: tip <Badge type="tip" text="Remark" vertical="middle" /> <b> 시스템 구성 </b>
① <b>POWERMDD.BMS(Business Model Server) </b> <br/>
  - Server Side Engine <br/>
  - WAS에 탑재되는 Middleware 서버로 다수의 클라이언트(DX)로부터의 다양한 요청에 대하여 필요한 기능을 제공 <br/>

② <b>POWERMDD.DX(Design Executor) </b> <br/>
  - 사용자 PC에 설치되는 개발 Tool <br/>
  - 사용자(개발자)가 업무 애플리케이션을 개발하기 위하여 사용하는 개발도구  <br/>
:::

## 1. POWERMDD.BMS 구성 및 기능

: <u>POWERMDD.DX의 요청에 대한 다음과 같은 다양한 기능을 처리합니다.</u>

<span class="font18">① 서비스 모델에 대한 실시간 테스트 및 결과 제공 </span><br/>
<span class="font18">② 테스트가 완료된 모델에 대한 자바 소스 자동 생성 </span><br/>
<span class="font18">③ 자바 소스 컴파일 및 Class의 WAS 자동 배포 기능 </span><br/>
<span class="font18">④ UI 화면에 대한 JSP 자동 생성 및 실행</span><br/>
<span class="font18">⑤ 개발 관련 작업 Resource에 대한 이력 관리</span><br/>
<span class="font18">⑥ DX의 접근 통제 및 권한 관리</span>

## 2. POWERMDD.DX 구성 및 기능

: <u>사용자(개발자)에게 애플리케이션 개발을 위한 아래의 다양한 도구를 제공합니다.</u>

<span class="font18">① WAS에서 실행되는 서비스를 개발하는 <b> Service Model </b></span><br/>
<span class="font18">② 웹 브라우저에서 실행되는 UI 화면을 개발하는 <b> View Designer </b> </span><br/>
<span class="font18">③ DB 조작 및 쿼리 작성을 위한 <b>Query Developer </b> </span><br/>
<span class="font18">④ 테이블간의 관계를 다이어그램으로 표현하여 DB의 구조를 한눈에 파악하는<b> Data Model </b></span><br/>
<span class="font18">⑤ WAS 서버상의 관련된 파일을 처리하는 <b> Server File Manager </b></span>


<style type='text/css'>
  [class*="boxBorder"] { border: 1px solid #bbb; }
  [class="font20"] { font-size: 20px }
  [class*="font18"] { font-size: 18px }
  [class="boxB"] { background: #6a8bad3b;padding:10px;border-radius: 4px; }
  [class="spanBtn"] { border: 1px solid #bbb; border-radius: 4px;padding: 3px;background:white; color:dimgrey; }
  [class="spanBtnG"] { border: 1px solid #bbb; border-radius: 4px;padding: 3px;color:forestgreen; background:white;  }
  [class="spanEx"] { color: #00a4ff; }
  [class="fontB"] { color: rgb(106, 139, 173); font-size:18px }
</style>