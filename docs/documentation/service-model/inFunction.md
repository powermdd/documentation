# 내장 함수
POWERMDD에서 연산 처리 시 사용할 수 있는 Function에 대한 설명입니다.

<b style="font-size: 20px">1) Internal Function</b><br/>
<b style="font-size: 20px">(1) GLV BOC을 이용한 Variable 값을 가져오는 Function입니다.</b>

<b style="font-size: 20px">➀ (getgvstring) GLV Value 가져오기 </b><br/>
<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">getgvstring(COLUMN)</p>
GLV로 Setting된 값을 String Type의 값으로 가져옵니다.<br/>

return type : String<br/>
parameter : String

<b style="font-size: 20px">➁ (getgvnumber) GLV Value 가져오기 </b><br/>
<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">getgvnumber(COLUMN)</p>
GLV로 Setting된 값을 double Type의 값으로 가져옵니다.
                
return type : double <br/>
parameter : String

<b style="font-size: 20px">➂ (getgvint) GLV Value 가져오기 </b><br/>
<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">getgvint(COLUMN)</p>
GLV로 Setting된 값을 int Type의 값으로 가져옵니다.
                
return type : int <br/>
parameter : String

<b style="font-size: 20px">➃ (getgvlong) GLV Value 가져오기 </b><br/>
<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">getgvlong(COLUMN)</p>
GLV로 Setting된 값을 longg Type의 값으로 가져옵니다.
                
return type : long <br/>
parameter : String

<b style="font-size: 20px">(2) 결과 코드 및 결과 Message를 값으로 가져오는 Function입니다. </b><br/>
서비스 업무 처리 시에 처리한 BOC의 Route를 확인하여 처리 하고 싶을 때 사용합니다. 특정 결과 처리를 위하여 복잡한 이전 처리의 상황을 확인하고 싶을 때 각 BOC별로 처리 Message에 상태 값을 설정하고 이후 최종 결과 처리부에서 상태 값을 비교 확인하여 처리합니다.

<b style="font-size: 20px">➀ (getretmsg) EVENT 결과메시지 </b><br/>
<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">getretmsg()</p>
업무 처리시 사용되는 BOC에서 생성된 결과 메시지를 가져오는 function입니다.
                
return type : String <br/>
parameter : void

<b style="font-size: 20px">➁ (getretcode) GLV Value 가져오기 </b><br/>
<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px"> getretcode()</p>
최종 처리 결과 코드를 가져오는 function입니다.
                
return type : int <br/>
parameter : void
<!-- Remark -->
::: tip <Badge type="tip" text="Remark" vertical="middle" /> 
에러가 미발생 시 getretcode()가 0으로 들어옵니다.
:::
<!-- -->

<b style="font-size: 20px">(3) String 처리 Function. <br/> Property Function의 char를 사용하면 좀 더 편리하게 사용할 수 있습니다. </b><br/>
<b style="font-size: 20px">➀ (indexstr) 문자열 위치 </b><br/>
<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">indexstr(COLUMN, 비교문자열, NotFound-Return-Value)</p>
입력되는 Column의 값에 비교문자열의 index를 검색합니다. 만일 해당 비교문자열이 존재하지 않으면 NotFound-Return-Value의 값을 Return 합니다.
                
return type : String, String, int <br/>
parameter : int

<b style="font-size: 20px">2) Property Function</b><br/>
Dataset 또는 Column에 연결되어 사용되는 Property Function에 대한 설명입니다.<br/>
<b style="font-size: 20px">(1) Column에 연결되어 있는 Property Function.</b>      
<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px"> 
* COLUMN + “.” + function <br/>
* DATASET + “.” + COLUMN + “.” + function</p>          

<b style="font-size: 20px">➀ (char) 부분 문자열처리 </b><br/>
<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">구문 1 : char(startIndex, endIndex)</p>
해당 Current Record Column의 값에서 해당 범위 안위 string값을 가져옵니다.
                
return type : String <br/>
parameter : String

<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">구문 2 : char(비교문자열)</p>
해당 Current Record Column의 값에서 시작부터 해당 문자열의 시작 index 범위에 있는 String을 가져옵니다.

return type : String <br/>
parameter : String

<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">구문 3 : char(검색된순서, 비교문자열)</p>
해당 Current Record Column의 값에서 검색된 비교문자열의 순번 index 부터 해당 Column 값의 종료까지의 String을 가져옵니다.
                
return type : String <br/>
parameter : int, String

<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">구문 4 : char(start비교문자열, end비교문자열)</p>
해당 Current Record Column의 값에서 검색된 start비교문자열과 end비교문자열 사이의 String을 가져옵니다.

return type : String <br/>
parameter : String, String

<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">구문 5 : char(검색된순서, 비교문자열, 검색된순서, 비교문자열)</p>
시작 문자열 발생순서부터 종료 문자열 발생순서 사이 값을 가져옵니다.
                
return type : String <br/>
parameter : int, String, int, String

<b style="font-size: 20px">➁ (charint) 부분 문자열처리 </b><br/>
<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">구문 1 : charint(startIndex)</p>
해당 Current Record Column의 값에서 startindex의 string index부터 문자열 종료까지의 값을 int Type으로 가져옵니다.
                
return type : int <br/>
parameter : int

<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">구문 2 : charint(startIndex, endIndex)</p>
해당 Current Record Column의 값에서 startindex에서 endindex 범위에 있는 값을 을 int Type으로 가져옵니다.
                
return type : int, int <br/>
parameter : int

<b style="font-size: 20px">➂ (getint) 정수 변환 </b><br/>
<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">구문 : getint()</p>
해당 Current Record Column의 값을 int Type으로 return합니다.
                
return type : int <br/>
parameter : void

<b style="font-size: 20px">➃ (getlong) long 변환 </b><br/>
<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">구문 : getlong()</p>
Current Record Column의 값을 long Type으로 return합니다.
                
return type : long <br/>
parameter : void

<b style="font-size: 20px">➄ (getdouble) double 변환 </b><br/>
<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">구문 : getdouble(roundOption, DecimalFormatString)</p>
Current Record Column의 값을 double Type으로 return합니다.
                
return type : double <br/>
parameter : String, String <br/>
roundOption : “up” 또는 “dn” <br/>
up : 소수점 반올림 처리 합니다. <br/>
dn : 소수점 절삭처리 합니다. <br/>
DecimalFormatString : ‘#’ 를 이용하여 format을 지정합니다.
            
<p style="color: rgb(0, 164, 255);">
   Ex) Column.getdouble (“dn”, “###.##”) : Column 값이 123.456 이면 return 값은 123.45 
      Column.getdouble (“up”, “###.##”) : Column 값이 123.456 이면 return 값은 123.46
</p>

<b style="font-size: 20px">➅ (toString) string 변환 </b><br/>
<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">구문 : COLUMN_ID.toString</p>
Current Record Column의 값을 string Type으로 return합니다.
                
return type : String <br/>
parameter : void

<b style="font-size: 20px">➆ (getTrim) string 변환 </b><br/>
<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">구문 : COLUMN_ID.getTrim</p>
Current Record Column의 값을 string Type으로 return하면서 공백을 제거합니다.
                
return type : String <br/>
parameter : void

<b style="font-size: 20px">➇ (length) string 길이 </b><br/>
<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">구문 : length()</p>
Current Record Column 값의 Character 길이를 return합니다.
                
return type : int <br/>
parameter : void
<p style="color: rgb(0, 164, 255);">
   Ex) Column의 값이 “akasaka” 일 때 Column. length() 의 결과 값은 7이 됩니다.
</p>

<b style="font-size: 20px">➈ (replace) 문자열 치환 </b><br/>
<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">구문 : replace(OldString, NewString)</p>
해당 Current Record Column의 String 문자열에서 OldString을 NewString으로 변환합니다.
                
return type : String <br/>
parameter : String, String