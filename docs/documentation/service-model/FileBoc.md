# File BOC

파일의 이동, 전송, 다운로드 등 파일과 관련된 구성요소입니다. <br/>
<img class="boxBorder" src="../../.vuepress\public\documentation\service-model\BOC\FileBOC\FileBOC.png" style="width:400px;"> <br/>

## 1. FUT
파일 처리 기능으로 Delete, Move, Copy, Rename 4가지 기능을 하는 컴포넌트입니다.

## 2. FBD
특정 포맷으로 구성된 파일을 생성하는 컴포넌트입니다.

## 3. FUP
특정 포맷으로 구성된 파일을 읽어 데이터 Object로 생성하는 컴포넌트입니다.

## 4. XUP
엑셀파일의 내용을 데이터셋 Object로 생성하는 컴포넌트입니다.

<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
엑셀 데이터 파일 정보는 컬럼의 파일처리 구분을 이용하여 설정합니다. <br/>
파일처리 구분은 “SrcFname, SrcPath” 두 구분자를 사용합니다.<br/>
:::
<!-- -->

<style type='text/css'>
  [class*="boxBorder"] { border: 1px solid #bbb; }
  [class*="font20"] { font-size: 20px }
  [class*="font18"] { font-size: 18px }
  [class="spanBtn"] { border: 1px solid #bbb;border-radius: 4px;padding: 3px;background:white; color:dimgrey; }
  [class="spanBtnS"] { border: 1px solid #bbb;border-radius: 4px;padding: 3px;background:white; color:dimgrey; font-size: 13px; }
  [class="spanEx2"] { font-size: 18px; color: #00a4ff; }
  [class="spanEx"] { color: #00a4ff; }
  [class="fontB"] { color: rgb(106, 139, 173); font-size:18px }
  [class*="iconB"] { position: relative; top: 5px; }
  [class*="iconD"] { position: relative; top: -8px; }
  [class*="iconB2"] { color: #6a8bad;display: inline-block;bottom: 40px;position: relative; }
  [class="btnR"] {color:#9C3B00;}
</style>