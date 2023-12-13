# 조건할당문
조건에 따른 처리의 흐름을 제어하는 기능을 제공합니다.

<b style="font-size: 20px">1) decode 문 </b><br/>
  일반 Application의 if.. Else 와 비슷한 구조를 가지고 있으나 간단한 조건 처리시 간결하고 쉽게 사용할 수 있습니다. 해당 조건 구분의 결과가 boolean 형으로 true이면 true구문이 실행되고 false 이면 false 구분이 실행됩니다.
  <p style="background-color:rgb(223, 230, 247); margin-right: 10px;">구문 : 조건 구문 ? True 구문 : False 구문</p>
  True, False 구문 내에 또 다른 decode, case 문 사용은 허용되지 않습니다.

<b style="font-size: 20px">2) case 문 </b><br/>
  case 문의 표현식은 if.. Else if.. Else 구조와 유사하며 결과 값을 추출하기 위하여 여러 가지 조건 처리가 필요할 때 사용합니다. 구문은 2가지 형식을 제공합니다. 
  <p style="background-color:rgb(223, 230, 247); margin-right: 10px;">구문 1 <br/>
  case 비교구문 : 처리구문 <br/>
  case 비교구문 : 처리구문 <br/>
  default : 처리구문</p>
처리는 정의 되어 있는 비교구문을 순차적으로 계산하여 해당 결과가 true이면 해당 처리 구문을 생성하고 종료합니다. <br/>
앞의 비교구문에 True요건이 없을 때에는 default 처리 구문이 최종결과 값으로 할당됩니다.

  <p style="background-color:rgb(223, 230, 247); margin-right: 10px;">구문 2 <br/>
  VARIABLE <br/>
  case VALUE : 처리구문 <br/>
  case VALUE : 처리구문 <br/>
  default : 처리문</p>
  구문 1형식과의 차이는 변수의 값과 값을 비교하여 해당 값과 일치하면 일치되는 처리구문을 실행하여 할당합니다. <br/>
  VARIABLE의 값과 case의 VALUE와 비교하여 값이 일치하면 해당 case의 처리구문의 실행결과를 해당 계산식의 결과값이 됩니다.

