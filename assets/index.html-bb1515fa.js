import{_ as s,o as n,c as a,b as e}from"./app-15bbe0fb.js";const p="/documentation/assets/ServiceModel-4ac2d03c.png",o="/documentation/assets/ScreenStructure-6f80b182.png";const t={},c=e('<h1 id="모델링-개발-도구" tabindex="-1"><a class="header-anchor" href="#모델링-개발-도구" aria-hidden="true">#</a> 모델링 개발 도구</h1><h2 id="_1-service-model" tabindex="-1"><a class="header-anchor" href="#_1-service-model" aria-hidden="true">#</a> 1. Service Model</h2><p>POWERMDD의 모델중심개발(MDD) 도구인 Service Model은 웹 애플리케이션의 서비스에 해당하는 서버 단의 비즈니스 업무처리 프로그램을 모델링 통해 개발하고 테스트하는 도구입니다.</p><p>모델링의 결과는 자바 코드로 100% 자동 생성되어 WAS 배포까지 자동으로 처리되므로 클라이언트 단인 UI 화면에서의 요청에 대하여 응답할 수 있습니다.</p><p>Service Model은 MDD 도구 중 모델을 바로 실시간으로 테스트하고 바로 실행이 가능하도록 실시간 구현을 제공함으로써 실시간 엔터프라이즈 실현이 가능합니다. 즉, 상세 설계된 모델이 바로 프로그램 소스와 실행모듈로 변환되어 바로 실행이 가능합니다.</p><p>이러한 실시간 구현은 다음과 같은 직관적이고 심플한 3단계로 구현됩니다.</p><p><img src="'+p+'"> <br></p><p><span class="font20">1)</span><b class="font20"> Darg &amp; Drop에 의한 직관적 모델링 </b> <br></p><p><span class="font18">(1) 비전문가도 쉽게 업무 Flow 작성이 가능합니다.</span><br></p><p><span class="font18">(2) 지능형 비즈니스 업무 컴포넌트(BOC)를 제공합니다.</span><br></p><p><span class="font18">(3) BOC를 끌어다 배치하고 속성을 설정하는 방식으로 업무 Flow를 모델링합니다.</span><br></p><p><span class="font20">2)</span><b class="font20"> 즉시 테스트를 통한 검증 및 오류 추적 </b> <br></p><p><span class="font18">(1) 테스트 데이터만 입력하면 즉시 로직 검증이 가능합니다.</span><br></p><p><span class="font18">(2) 테스트 결과 정보의 Depth 측정을 통하여 오류 추적성을 강화합니다.</span><br></p><p><span class="font20">3)</span><b class="font20"> 화면 메뉴 검색 </b> <br> 테스트 검증이 완료되면 프로그램 소스 생성 및 컴파일, WAS 상에 배치하는 일련의 작업을 일괄 자동화 처리합니다.</p><h2 id="_2-화면-구성" tabindex="-1"><a class="header-anchor" href="#_2-화면-구성" aria-hidden="true">#</a> 2. 화면 구성</h2><p>Service Model 작업 화면은 총 8개 layout으로 구성되어 있습니다. <br><img src="'+o+'"> <br></p><p><span class="font20">1)</span><b class="font20"> 도구상자 </b> <br> Service Model에서 사용하는 도구상자로 모델링한 내용을 저장하거나 실행 테스트, 빌드 등의 주요 작업 이외에 다양한 기능을 제공하고 있습니다.</p><p><span class="font20">2)</span><b class="font20"> 화면 메뉴 구조 영역 </b> <br> 업무 구조를 Tree View 형식으로 표현한 메뉴로 모델링의 대상이 되는 서비스의 메뉴 카테고리 영역입니다.</p><p><span class="font20">3)</span><b class="font20"> 화면 메뉴 검색 </b> <br> 화면 메뉴에서 찾고자 하는 메뉴나 서비스를 검색하여 Enter 키를 누르면 전체 화면 메뉴에서 해당 메뉴나 서비스를 파란색 글씨로 나타냅니다.</p><p><span class="font20">4)</span><b class="font20"> BOC(Business Operation Component) Control 영역 </b> <br> 업무 서비스 내부의 처리 로직을 구성하는 컴포넌트로 모델링 하기 위해 BOC로 배치하거나 흐름을 제어하여 업무처리를 구성합니다.</p><p><span class="font20">5)</span><b class="font20"> 화면작업 영역 </b> <br> BOC를 이용하여 업무처리 로직을 시각적인 디자인으로 표현하는 디자인 작업 화면입니다.</p><p><span class="font20">6)</span><b class="font20"> 메시지 영역 </b> <br> 테스트 및 업무 메뉴에서 선택된 Node에 대한 기본정보를 제공함과 필요에 따라 Description을 제공합니다.</p><p><span class="font20">7)</span><b class="font20"> 속성 영역 </b> <br> Service Model에서 사용되는 Element Control을 선택할 때 해당 Element의 속성으로 Element의 특성에 따른 값을 설정할 수 있습니다.</p><p><span class="font20">8)</span><b class="font20"> 개발 작업 Tool </b> <br> Application Layer 별로 개발을 위한 작업 Tab Control입니다.</p>',25),r=[c];function l(b,i){return n(),a("div",null,r)}const f=s(t,[["render",l],["__file","index.html.vue"]]);export{f as default};