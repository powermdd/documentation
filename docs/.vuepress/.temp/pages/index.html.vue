<template><div><div style='height:900px;'>
	<div style='height:515px;position:relative;display:flex;'>
		<div class="main-content">
			<span class="h5-header-tag">
				For Better Future
			</span>
			<span class="power-mdd-header">
				POWER MDD
			</span>
			<span class="h4-sub-headline-sec-">
				가장 강력한
				<span class="text-style-1"></span>
				<span class="text-style-2">로우코드</span>
				<span class="text-style-3"></span>
				<span class="text-style-4">개발 툴</span>
			</span>
		</div>
		<div class="main-image-content">
			<img src="@source/../docs/.vuepress/public/main1.png" class="main-image-1"/>
		</div>
	</div>
	<div class="sub-container">
		<div>
			<img src="@source/../docs/.vuepress/public/main2.png" class="main-image-2">
			<span class="sub-main-title">
				LOW CODE
			</span>
			<span class="sub-text-1">
				POWERMDD는 로우코드 기반으로 소스를 자동 생성합니다. POWERMDD를 통해 자동으로 생성된 소스를 만나보세요.
			</span>
		</div>
		<div>
			<img src="@source/../docs/.vuepress/public/main3.png" class="main-image-2">
			<span class="sub-main-title">
				MODEL DRIVEN DEVELOPMENT
			</span>
			<span class="sub-text-1">
				POWER MDD는 모델 중심 개발(Model Driven Development)을 지향합니다. POWER MDD로 발전된 개발방식을 적용해 보세요.
			</span>
		</div>
		<div>
			<img src="@source/../docs/.vuepress/public/main4.png" class="main-image-2">
			<span class="sub-main-title">
				ALL IN ONE
			</span>
			<span class="sub-text-1">
				설계부터 개발까지! POWER MDD 하나면 모두 가능합니다. POWER MDD로 최고의 생산성을 경험해 보세요.
			</span>
		</div>
	</div>
</div>
<!-- Made By : 

![wizware](.vuepress/public/wizware.png)

---

Partner Company : 

[![NextITS](.vuepress/public/o_logo_b.svg)](https://hnextits.com/) -->
</div></template>



<style>
    .dark .home img {
        filter: grayscale(1) invert(1);
    }
	.home .hero{
		display : none;
	}
	.power-mdd-header {
		width: 654px;
		max-width: 100%;
		/*height: 160px;*/
		flex-grow: 0;
		font-family: Montserrat;
		font-size: 58px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.38;
		letter-spacing: 0.2px;
		text-align: left;
		color: #252b42;
	}
	.main-content {
		width: 686px;
		max-width: 100%;
		height: 466px;
		flex-grow: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 40px;
		padding: 90px 0 0 0;
	}
	.main-image-content {
		width: 568px;
		height: 700px;
		margin: 0 0 0 724.4px;
		background-color: #f6f7fb;
	}
	.h5-header-tag {
		width: 147px;
		height: 24px;
		flex-grow: 0;
		font-family: Montserrat;
		font-size: 16px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.5;
		letter-spacing: 0.1px;
		text-align: left;
		color: #6fcfe7;
	}
	.main-image-1 {
		width: 410px;
		height: 250px;
		position: absolute;
		right: 0;
		top: 150px;
	}
	.h4-sub-headline-sec- {
		width: 480px;
		height: 96px;
		max-width: 100%;
		flex-wrap: wrap;
		display: flex;
		flex-grow: 0;
		font-family: Montserrat;
		font-size: 45px;
		font-weight: 500;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.2;
		letter-spacing: 0.2px;
		text-align: left;
		color: #737373;
		align-items: baseline;
	}
	.h4-sub-headline-sec- .text-style-1 {
		font-size: 50px;
	}
	.h4-sub-headline-sec- .text-style-2 {
		font-size: 55px;
		font-weight: bold;
		color: #2196f3;
	}
	.h4-sub-headline-sec- .text-style-3 {
		font-size: 55px;
		font-weight: 800;
		color: #2196f3;
	}
	.h4-sub-headline-sec- .text-style-4 {
		font-size: 40px;
	}
	.sub-container {
		width: 100%;
		height: 314px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-top : 30px;
	}
	img.main-image-2 {
		height: 104px;
		object-fit: contain;
	}
	.sub-text-1 {
		width: 244px;
		height: 75px;
		margin: 37px 143px 25px 0;
		font-family: Montserrat;
		font-size: 15px;
		font-weight: 300;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.67;
		letter-spacing: -0.45px;
		text-align: left;
		color: #737373;
	}
	.sub-container>div {
		width: 244px;
		display: flex;
		flex-direction: column;
	}
	.sub-main-title {
		height: 48px;
		margin: 60px 0 0px 0;
		font-family: Montserrat;
		font-size: 20px;
		font-weight: 600;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: -0.6px;
		text-align: center;
		color: #737373;
	}

	@media (max-width: 960px) {
		.main-image-content {
			display:none;
		}
	}
</style>