# User Function
POWERMDD에서 제공하는 Function 이외에 사용자가 필요로 하는 기능 function을 만들어 사용할 수 있다.

<b style="font-size: 20px">등록방법</b><br/>
Java 언어를 사용하여 User function 기능 class를 생성 한다. 생성 시 package를 반드시 사용하여 생성하고 Package는 사용자의 관리 규정에 맞추어 생성한다. <br/>
생성 시 method의 접근 방식은 public으로 해야 한다. 이 외는 지원 하지않는다. <br/>
User Function에서는 단일 값만 Return이 가능하다. 만일 Dataset 형식 즉 Record 개념이 있는 객체를 이용하고 싶을 때에는 interface BOC에 있는 PEX 중 외부 호출 기능을 활용해야 한다.

- 작성 시 사용 가능한 Data Type <br/>
  return Type : int, String, double 중 1개를 선택 가능하다.<br/> 
  parameter 사용 가능한 Type : Integer, String, Double Type을 사용한다.

해당 User function 제작이 완료되면 해당 java파일을 컴파일 하고, 컴파일된 class파일을 POWERMDD BMS 실행 환경을 배치해야 한다. <br/>
배치 방법은 해당class를 classpath환경 아래 배치하고, 개발 WAS에도 배치하면 된다. 배치가 완료 되고 나면 POWERMDD 디자인 Tool인 해당 function을 사용할 수 있도록 class 정보를 등록한다. <br/>
등록 방법은 DX의 User Function 관리 기능을 사용하여 사용자가 생성 시킨 user function을 등록하도록 한다.

<b style="font-size: 20px">1) (@) 함수호출</b><br/>
<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">구문 : “@” + user_function(argument, argument)</p>
POWERMDD는 @문자를 user function을 실행시킨다. <br/>
user function을 지정해주는 지시자인 ‘@’문자를 사용한다.

<b style="font-size: 20px">2) todayWeek.java 소스 참고</b><br/>
<p style="background-color:rgb(223, 230, 247); margin-right: 10px; padding-left: 20px">
Ibatis 소스 생성 예 <br/>
  public class ViewUtil { <br/>
    &nbsp;&nbsp;public ViewUtil() {   <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;public String todayWeek(String yyyymmdd) <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Calendar cal = Calendar.getInstance(); <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int yyyy =Integer.parseInt(yyyymmdd.substring(0,4)); <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int mm =Integer.parseInt(yyyymmdd.substring(4,6)); <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int dd =Integer.parseInt(yyyymmdd.substring(6,8)); <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cal.set(yyyy, mm-1, dd); <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int day_of_week = cal.get(Calendar.DAY_OF_WEEK); <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return day_of_week+””; <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;} <br/>
  &nbsp;&nbsp;}
</p>