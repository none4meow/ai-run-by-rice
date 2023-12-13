export const svg = (name, boxColor, nameColor, inch) => {
  const percent = inch / 7;
  let gap = 14.1732;
  switch (inch) {
    case 9:
      gap = gap / percent;
      break;
    case 11:
      gap = gap / percent;
      break;

    default:
      break;
  }

  let bar = 15.2787;
  switch (inch) {
    case 9:
      bar = bar / percent;
      break;
    case 11:
      bar = bar / percent;
      break;

    default:
      break;
  }

  return `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1567.251 4541.305" style="enable-background:new 0 0 1567.251 4541.305;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#E2D6C7;}
	.st1{fill:${boxColor.hexCode};}
	.st2{fill:${nameColor.hexCode};}
	.st3{font-family:'#9Slide03QuicksandBold-Bold';}
	.st4{font-size:70px;}
	.st5{fill:${nameColor.hexCode};stroke:${nameColor.hexCode};stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st6{font-family:'WildSageRegular';}
	.st7{font-size:328.7417px;}
</style>

<g transform="scale(${percent})">
<text transform="translate(900,0)" style="font-size:130px;" class="st3 st4">${inch}'</text>

<g>
	<text transform="matrix(1 0 0 1 526.1488 1770.6476)" class="st3 st4">5mm - ${boxColor.name}</text>
	<text transform="matrix(1 0 0 1 457.1928 616.4062)" class="st3 st4">${nameColor.name}</text>
	<text transform="matrix(1 0 0 1 513.9141 364.9285)" class="st5 st6 st7">${name}</text>
</g>

	<g>
		<rect x="1168" y="1542.9" width="87.1" height="${bar}"/>
		<rect x="776.6" y="1542.9" width="191.5" height="${bar}"/>
	</g>	

	<path fill="#E2D6C7" d="M744.8,835.3v198.4h526.7V835.3H744.8z"/>

	<g>
		<rect x="775.7" y="927.6" width="192.9" height="${gap}"/>
		<rect x="1166.9" y="927.6" width="88.5" height="${gap}"/>
	</g>
	

<g>
	<path class="st1" d="M533.4,1148.9c-14.7-11.1-33.5-16.8-55.7-16.8H409V1274h62.2c27.2,0,47.6-5.2,62.3-15.9
		c16.3-11.9,24.5-31.6,24.5-58.6C558,1178.6,549.5,1161.1,533.4,1148.9z M522.4,1243c-11.2,8.2-28.3,12.3-51.2,12.3h-43.5v-104.4
		h49.9c18.2,0,33,4.3,44.4,13c11.5,8.7,17.2,20.5,17.2,35.7C539.3,1220.3,533.7,1234.8,522.4,1243z"/>
	<path class="st1" d="M671,1429.8v-40.9c0-26.8-6.7-49.2-20.1-67.1c-13.4-17.9-35.2-29.3-65.5-34.1c33.7-6.1,59.8-17.9,78.2-35.7
		c18.4-17.7,27.6-43,27.6-75.9c0-48.9-12.3-83.9-37-105.1c-24.6-21.2-63.1-31.8-115.5-31.8H215v111.6h50.6v280.9H215v111.6h263.4
		v-111.6h-50.6v-104.4H466c22.5,0,37.9,6.3,46.4,18.8c8.4,12.5,12.6,31.8,12.6,57.7c0,45.4,3.8,77.8,11.4,97.3
		c7.6,19.5,18.5,31.4,32.8,35.7c14.3,4.3,37.8,6.5,70.7,6.5h101.8v-113.5H671z M723,1524.6h-83.1c-38.5,0-56.7-3.1-65.3-5.7
		c-8.4-2.6-15.4-10.8-20.7-24.5c-4.6-11.8-10.1-37.1-10.1-90.5c0-30-5.2-52.3-15.8-68.2c-12.1-18-32.9-27.1-61.9-27.1h-57v141.9
		h50.6v74.1h-226v-74.1h50.6v-318.3h-50.6V1058h305c47.5,0,82.2,9.2,103.3,27.3c20.2,17.4,30.5,48,30.5,90.9
		c0,27.8-7.1,48.2-21.8,62.4c-15.6,15-45.8,25.4-75.7,30.7l0.4,36.9c25.1,4,50.3,13,60.6,26.8c11,14.8,16.4,33.1,16.4,55.9v59.6H723
		V1524.6z"/>
</g>
<g>
	<path class="st2" d="M495.4,3737.9H546V3457h-50.6v-111.6h323.7c52.3,0,90.8,10.6,115.5,31.8c24.6,21.2,37,56.2,37,105.1
		c0,32.9-9.2,58.2-27.6,75.9c-18.4,17.7-44.4,29.6-78.2,35.7c30.3,4.8,52.1,16.1,65.5,34.1c13.4,17.9,20.1,40.3,20.1,67.1v40.9h70.7
		v113.5H920.3c-32.9,0-56.4-2.2-70.7-6.5s-25.2-16.2-32.8-35.7s-11.4-51.9-11.4-97.3c0-25.9-4.2-45.2-12.6-57.7
		c-8.4-12.5-23.9-18.8-46.4-18.8h-38.3v104.4h50.6v111.6H495.4V3737.9z M751.6,3561.4c22.9,0,40-4.1,51.2-12.3s16.9-22.7,16.9-43.5
		c0-15.1-5.7-27-17.2-35.7c-11.5-8.6-26.3-13-44.4-13h-49.9v104.4h43.4V3561.4z"/>
</g>
<g>
	<g>
		<path class="st0" d="M1144,2281.9c-14.7-11.1-33.5-16.8-55.7-16.8h-68.7V2407h62.2c27.2,0,47.6-5.2,62.3-15.9
			c16.3-11.9,24.5-31.6,24.5-58.6C1168.6,2311.6,1160.1,2294.1,1144,2281.9z M1133,2376c-11.2,8.2-28.3,12.3-51.2,12.3h-43.5v-104.4
			h49.9c18.2,0,33,4.3,44.4,13c11.5,8.7,17.2,20.5,17.2,35.7C1149.9,2353.3,1144.3,2367.8,1133,2376z"/>
		<path class="st0" d="M1281.6,2562.8v-40.9c0-26.8-6.7-49.2-20.1-67.1c-13.4-17.9-35.2-29.3-65.5-34.1
			c33.7-6.1,59.8-17.9,78.2-35.7c18.4-17.7,27.6-43,27.6-75.9c0-48.9-12.3-83.9-37-105.1c-24.6-21.2-63.1-31.8-115.5-31.8h-20.7
			v18.7h20.7c47.5,0,82.2,9.2,103.3,27.3c20.2,17.4,30.5,48,30.5,90.9c0,27.8-7.1,48.2-21.8,62.4c-15.6,15-45.8,25.4-75.7,30.7
			l0.4,36.9c25.1,4,50.3,13,60.6,26.8c11,14.8,16.4,33.1,16.4,55.9v59.6h70.7v76.1h-83.1c-38.5,0-56.7-3.1-65.3-5.7
			c-8.4-2.6-15.4-10.8-20.7-24.5c-4.6-11.8-10.1-37.1-10.1-90.5c0-30-5.2-52.3-15.8-68.2c-12.1-18-32.9-27.1-61.9-27.1h-57v141.9
			h50.6v74.1H844.3v-74.1h50.6v-318.3h-50.6V2191h122.6v-18.7H825.6v111.6h50.6v280.9h-50.6v111.6H1089v-111.6h-50.6v-104.4h38.3
			c22.5,0,37.9,6.3,46.4,18.8c8.4,12.5,12.6,31.8,12.6,57.7c0,45.4,3.8,77.8,11.4,97.3s18.5,31.4,32.8,35.7s37.8,6.5,70.7,6.5h101.8
			v-113.5h-70.8V2562.8z"/>
	</g>
	<g>
		<path class="st0" d="M613.6,2281.9c-14.7-11.1-33.5-16.8-55.7-16.8h-68.7V2407h62.2c27.2,0,47.6-5.2,62.3-15.9
			c16.3-11.9,24.5-31.6,24.5-58.6C638.2,2311.6,629.7,2294.1,613.6,2281.9z M602.7,2376c-11.2,8.2-28.3,12.3-51.2,12.3H508v-104.4
			h49.9c18.2,0,33,4.3,44.4,13c11.5,8.7,17.2,20.5,17.2,35.7C619.5,2353.3,613.9,2367.8,602.7,2376z"/>
		<path class="st0" d="M751.2,2562.8v-40.9c0-26.8-6.7-49.2-20.1-67.1c-13.4-17.9-35.2-29.3-65.5-34.1c33.7-6.1,59.8-17.9,78.2-35.7
			c18.4-17.7,27.6-43,27.6-75.9c0-48.9-12.3-83.9-37-105.1c-24.6-21.2-63.1-31.8-115.5-31.8h-20.7v18.7h20.7
			c47.5,0,82.2,9.2,103.3,27.3c20.2,17.4,30.5,48,30.5,90.9c0,27.8-7.1,48.2-21.8,62.4c-15.6,15-45.8,25.4-75.7,30.7l0.4,36.9
			c25.1,4,50.3,13,60.6,26.8c11,14.8,16.4,33.1,16.4,55.9v59.6h70.7v76.1h-83.1c-38.5,0-56.7-3.1-65.3-5.7
			c-8.4-2.6-15.4-10.8-20.7-24.5c-4.6-11.8-10.1-37.1-10.1-90.5c0-30-5.2-52.3-15.8-68.2c-12.1-18-32.9-27.1-61.9-27.1h-57v141.9
			H540v74.1H313.9v-74.1h50.6v-318.3h-50.6V2191h122.6v-18.7H295.2v111.6h50.6v280.9h-50.6v111.6h263.4v-111.6H508v-104.4h38.3
			c22.5,0,37.9,6.3,46.4,18.8c8.4,12.5,12.6,31.8,12.6,57.7c0,45.4,3.8,77.8,11.4,97.3c7.6,19.5,18.5,31.4,32.8,35.7
			s37.8,6.5,70.7,6.5H822v-113.5h-70.8V2562.8z"/>
	</g>
</g>
<path class="st1" d="M1200.8,1429.8V1389c0-26.8-6.7-49.2-20.1-67.1s-35.2-29.3-65.5-34c33.7-6.1,59.8-17.9,78.2-35.7
	c18.4-17.7,27.6-43,27.6-75.9c0-48.9-12.3-83.9-37-105.1c-24.6-21.2-63.1-31.8-115.5-31.8H744.8V1151h50.6v280.9h-50.6v111.6h263.4
	v-111.6h-50.6v-104.4h38.3c22.5,0,37.9,6.3,46.4,18.8c8.4,12.6,12.7,31.8,12.7,57.7c0,45.4,3.8,77.8,11.3,97.3
	c7.6,19.5,18.5,31.4,32.8,35.7c14.3,4.3,37.8,6.5,70.7,6.5h101.8V1430h-70.8V1429.8z M1052.2,1243c-11.2,8.2-28.3,12.3-51.2,12.3
	h-43.5v-104.4h50c18.2,0,33,4.3,44.4,13c11.5,8.7,17.2,20.6,17.2,35.7C1069.1,1220.3,1063.5,1234.8,1052.2,1243z"/>

	
<g>
	<path d="M684.2,3966.2c-5.1,0-9.7,1.5-13.7,4.4s-7,6.2-9,9.9c-3-9.5-10-14.3-20.9-14.3c-4.4,0-8.4,1.1-12,3.3s-6.6,4.9-8.9,8v-2.1
		c0-2.3-0.7-4.1-2.2-5.7c-1.5-1.5-3.3-2.3-5.6-2.3s-4.1,0.8-5.6,2.3s-2.2,3.4-2.2,5.7v53.7c0,2.3,0.7,4.1,2.2,5.7
		c1.5,1.5,3.3,2.3,5.6,2.3s4.1-0.8,5.6-2.3s2.2-3.4,2.2-5.7v-33.3c0-4.4,1.4-8.1,4.1-11c2.7-2.9,6.5-4.4,11.4-4.4
		c4.7,0,8,1.4,9.8,4.1c1.9,2.7,2.8,6.5,2.8,11.2v33.3c0,2.3,0.7,4.1,2.2,5.7c1.5,1.5,3.3,2.3,5.6,2.3s4.1-0.8,5.6-2.3
		s2.2-3.4,2.2-5.7v-33.3c0-4.4,1.4-8.1,4.1-11c2.7-2.9,6.5-4.4,11.4-4.4c4.7,0,8,1.4,9.8,4.1c1.9,2.7,2.8,6.5,2.8,11.2v33.3
		c0,2.3,0.7,4.1,2.2,5.7c1.5,1.5,3.3,2.3,5.6,2.3s4.1-0.8,5.6-2.3s2.2-3.4,2.2-5.7v-33.3c0-9.3-1.6-16.5-4.9-21.8
		C698.7,3968.9,692.8,3966.2,684.2,3966.2z"/>
	<path d="M737.1,3945c-1.2-1-3.3-1.4-6.4-1.4c-2.9,0-4.9,0.5-6.2,1.4c-1.3,1-2,2.6-2,5.1v2.5c0,2.4,0.6,4.1,1.8,5.1s3.3,1.4,6.2,1.4
		c3,0,5.2-0.5,6.4-1.4c1.3-0.9,1.9-2.6,1.9-5.1v-2.5C738.9,3947.7,738.3,3946,737.1,3945z"/>
	<path d="M730.7,3967.5c-2.3,0-4.1,0.8-5.6,2.3s-2.2,3.4-2.2,5.7v53.7c0,2.3,0.7,4.1,2.2,5.7c1.5,1.5,3.3,2.3,5.6,2.3
		s4.1-0.8,5.6-2.3s2.2-3.4,2.2-5.7v-53.7c0-2.3-0.7-4.1-2.2-5.7C734.8,3968.3,733,3967.5,730.7,3967.5z"/>
	<path d="M803.1,4019.1c-1.1,0-2.1,0.2-2.9,0.5c-0.8,0.3-1.6,0.8-2.5,1.5c-0.9,0.6-1.6,1.1-2.1,1.4c-2.1,1-5.2,1.6-9.5,1.6
		c-5.8,0-10.6-2.1-14.3-6.2c-3.7-4.1-5.6-9.3-5.6-15.5c0-6.5,1.8-11.8,5.5-15.8s8.8-6,15.3-6c1,0,2.4,0.2,4.1,0.5
		c1.7,0.3,3,0.7,3.8,1.2c0.8,0.4,1.6,1,2.4,1.6c0.8,0.7,1.7,1.2,2.5,1.6c0.9,0.4,2,0.6,3.4,0.6c1.8,0,3.3-0.7,4.4-2.1
		c1.1-1.4,1.7-3.1,1.7-5c0-3.8-2.3-6.9-6.8-9.2s-10.4-3.4-17.8-3.4c-6.6,0-12.5,1.5-17.7,4.6s-9.3,7.3-12.2,12.8s-4.4,11.7-4.4,18.7
		c0,6.8,1.4,12.9,4.2,18.4s6.7,9.8,11.8,12.9c5.1,3.1,10.9,4.7,17.6,4.7c4.5,0,8.8-0.5,12.7-1.6c4-1.1,7.2-2.5,9.6-4.4
		c2.4-1.8,3.6-3.8,3.6-5.8c0-2.2-0.6-3.9-1.9-5.3C807,4019.8,805.3,4019.1,803.1,4019.1z"/>
	<path d="M883.3,3968.4c-1.5-1.5-3.3-2.2-5.6-2.2s-4.1,0.8-5.6,2.3s-2.2,3.4-2.2,5.7v0.1c-2.5-2.3-5.6-4.3-9.2-5.8
		c-3.6-1.5-7.5-2.3-11.7-2.3c-5.8,0-11.1,1.5-15.9,4.6c-4.8,3.1-8.6,7.4-11.4,12.9c-2.8,5.5-4.2,11.7-4.2,18.7s1.4,13.1,4.2,18.6
		s6.7,9.7,11.5,12.8c4.9,3.1,10.3,4.6,16.2,4.6c4.1,0,8-0.9,11.6-2.7c3.7-1.8,6.6-3.9,8.8-6.4c0.1,2.3,0.8,4.1,2.3,5.6
		c1.4,1.5,3.3,2.2,5.5,2.2c2.3,0,4.1-0.8,5.6-2.3s2.2-3.4,2.2-5.7v-55C885.6,3971.8,884.8,3969.9,883.3,3968.4z M865.3,4017.9
		c-3.6,4.1-8.1,6.2-13.8,6.2c-5.6,0-10.2-2.1-13.7-6.2c-3.5-4.1-5.3-9.3-5.3-15.5s1.8-11.4,5.3-15.6c3.6-4.2,8.1-6.2,13.7-6.2
		c5.6,0,10.2,2.1,13.8,6.2c3.6,4.2,5.3,9.4,5.3,15.6S868.8,4013.8,865.3,4017.9z"/>
</g>
<g>
	<path d="M426,2868.7c-4.6-2.6-9.8-4-15.5-4c-2.3,0-4.6,0.3-7.1,0.9c-2.5,0.6-4.6,1.4-6.2,2.3l2.5-18.9h32.2c2.1,0,3.8-0.7,5.2-2
		c1.4-1.3,2.1-3,2.1-5c0-2.1-0.7-3.8-2.1-5.2s-3.1-2.1-5.2-2.1h-37.6c-2,0-3.7,0.6-5.1,1.8s-2.3,2.7-2.7,4.5l-4,32.2
		c-0.1,0.3-0.1,1-0.1,1.8c0,2.5,0.7,4.7,2.1,6.5s3.8,2.7,7.2,2.7c1,0,1.9-0.2,2.8-0.5s2.1-0.9,3.7-1.7c2.2-1,4-1.8,5.6-2.3
		s3.3-0.8,5.3-0.8c4.4,0,8.2,1.5,11.4,4.4c3.2,2.9,4.8,6.8,4.8,11.4c0,3.2-0.9,6.2-2.8,9s-4.4,5-7.5,6.6s-6.5,2.5-10,2.5
		c-2.8,0-6-1.1-9.6-3.4c-2.3-1.6-4.3-2.5-5.9-2.5c-2.2,0-3.9,0.6-5.3,1.9c-1.3,1.3-2,2.7-2,4.2c0,1.4,0.3,2.9,1,4.4
		c0.7,1.6,1.6,2.8,2.6,3.6c2.3,1.8,5.2,3.2,8.8,4.3c3.6,1,7.1,1.6,10.5,1.6c6.3,0,12.2-1.5,17.7-4.4s9.8-6.8,13.1-11.8
		c3.3-4.9,4.9-10.3,4.9-16.1c0-5.6-1.3-10.7-4-15.3C434.3,2874.9,430.6,2871.3,426,2868.7z"/>
	<path d="M538.7,2855c-5.1,0-9.7,1.5-13.7,4.4s-7,6.2-9,9.9c-3-9.5-10-14.3-20.9-14.3c-4.4,0-8.4,1.1-12,3.3s-6.6,4.9-8.9,8v-2.1
		c0-2.3-0.7-4.1-2.2-5.7c-1.5-1.5-3.3-2.3-5.6-2.3c-2.3,0-4.1,0.8-5.6,2.3s-2.2,3.4-2.2,5.7v53.7c0,2.3,0.7,4.1,2.2,5.7
		c1.5,1.5,3.3,2.3,5.6,2.3c2.3,0,4.1-0.8,5.6-2.3s2.2-3.4,2.2-5.7v-33.3c0-4.4,1.4-8.1,4.1-11s6.5-4.4,11.4-4.4c4.7,0,8,1.4,9.8,4.1
		c1.9,2.7,2.8,6.5,2.8,11.2v33.3c0,2.3,0.7,4.1,2.2,5.7c1.5,1.5,3.3,2.3,5.6,2.3s4.1-0.8,5.6-2.3s2.2-3.4,2.2-5.7v-33.3
		c0-4.4,1.4-8.1,4.1-11c2.7-2.9,6.5-4.4,11.4-4.4c4.7,0,8,1.4,9.8,4.1c1.9,2.7,2.8,6.5,2.8,11.2v33.3c0,2.3,0.7,4.1,2.2,5.7
		c1.5,1.5,3.3,2.3,5.6,2.3s4.1-0.8,5.6-2.3s2.2-3.4,2.2-5.7v-33.3c0-9.3-1.6-16.5-4.9-21.8C553.2,2857.6,547.2,2855,538.7,2855z"/>
	<path d="M658.5,2855c-5.1,0-9.7,1.5-13.7,4.4s-7,6.2-9,9.9c-3-9.5-10-14.3-20.9-14.3c-4.4,0-8.4,1.1-12,3.3s-6.6,4.9-8.9,8v-2.1
		c0-2.3-0.7-4.1-2.2-5.7c-1.5-1.5-3.3-2.3-5.6-2.3s-4.1,0.8-5.6,2.3s-2.2,3.4-2.2,5.7v53.7c0,2.3,0.7,4.1,2.2,5.7
		c1.5,1.5,3.3,2.3,5.6,2.3s4.1-0.8,5.6-2.3s2.2-3.4,2.2-5.7v-33.3c0-4.4,1.4-8.1,4.1-11c2.7-2.9,6.5-4.4,11.4-4.4
		c4.7,0,8,1.4,9.8,4.1c1.9,2.7,2.8,6.5,2.8,11.2v33.3c0,2.3,0.7,4.1,2.2,5.7c1.5,1.5,3.3,2.3,5.6,2.3s4.1-0.8,5.6-2.3
		s2.2-3.4,2.2-5.7v-33.3c0-4.4,1.4-8.1,4.1-11c2.7-2.9,6.5-4.4,11.4-4.4c4.7,0,8,1.4,9.8,4.1c1.9,2.7,2.8,6.5,2.8,11.2v33.3
		c0,2.3,0.7,4.1,2.2,5.7c1.5,1.5,3.3,2.3,5.6,2.3s4.1-0.8,5.6-2.3s2.2-3.4,2.2-5.7v-33.3c0-9.3-1.6-16.5-4.9-21.8
		C673,2857.6,667.1,2855,658.5,2855z"/>
	<path d="M763.2,2878.2h-22.6c-2.3,0-4.1,0.7-5.7,2.2c-1.5,1.5-2.3,3.3-2.3,5.5c0,2.3,0.8,4.1,2.3,5.6s3.4,2.2,5.7,2.2h22.6
		c2.3,0,4.1-0.7,5.7-2.1c1.5-1.4,2.3-3.2,2.3-5.4c0-2.3-0.8-4.1-2.3-5.7C767.3,2879,765.4,2878.2,763.2,2878.2z"/>
	<path d="M857.5,2887.5l19.6-18.1c2.1-1.8,3.1-3.8,3.1-5.8c0-1.6-0.8-3.3-2.3-4.9c-1.5-1.6-3.2-2.4-5.1-2.4c-2.2,0-4.1,0.8-5.7,2.5
		l-27.8,26.9v-48.1c0-2.3-0.7-4.1-2.2-5.7c-1.5-1.5-3.3-2.3-5.6-2.3s-4.1,0.8-5.6,2.3s-2.2,3.4-2.2,5.7v80.3c0,2.3,0.7,4.1,2.2,5.7
		c1.5,1.5,3.3,2.3,5.6,2.3s4.1-0.8,5.6-2.3s2.2-3.4,2.2-5.7v-13.7l6.4-5.8l23.4,24.7c1.6,1.7,3.5,2.6,5.7,2.6c1.9,0,3.7-0.7,5.4-2.2
		s2.5-3.3,2.5-5.5s-0.8-4.1-2.5-5.8L857.5,2887.5z"/>
	<path d="M942.9,2859.6c-5.4-3.1-11.4-4.6-17.9-4.6c-6.6,0-12.6,1.5-17.9,4.6c-5.4,3.1-9.6,7.4-12.7,12.9
		c-3.1,5.5-4.7,11.7-4.7,18.7c0,6.9,1.6,13.2,4.7,18.7c3.1,5.5,7.4,9.8,12.7,12.8c5.4,3,11.4,4.5,17.9,4.5s12.5-1.5,17.9-4.5
		s9.7-7.3,12.8-12.8s4.7-11.7,4.7-18.7c0-6.9-1.6-13.2-4.7-18.7S948.3,2862.7,942.9,2859.6z M942.1,2902.4c-1.8,3.3-4.2,5.8-7.1,7.7
		c-3,1.8-6.3,2.7-9.9,2.7c-3.6,0-7-0.9-9.9-2.7c-3-1.8-5.4-4.4-7.1-7.7c-1.8-3.3-2.7-7.1-2.7-11.3s0.9-8,2.7-11.4
		c1.8-3.3,4.2-5.9,7.1-7.7c3-1.8,6.3-2.7,9.9-2.7c3.6,0,7,0.9,9.9,2.7c3,1.8,5.4,4.4,7.1,7.7c1.8,3.3,2.7,7.1,2.7,11.4
		C944.8,2895.4,943.9,2899.1,942.1,2902.4z"/>
	<path d="M1048.2,2888.6c-3.1-1.4-7-2.7-11.7-4c-3.4-1-6-1.8-7.9-2.4c-1.9-0.6-3.4-1.6-4.6-2.7c-1.2-1.2-1.8-2.7-1.8-4.6
		c0-4.8,3.3-7.1,9.9-7.1c3.1,0,5.9,0.6,8.4,1.7c2.5,1.1,4.5,2.6,6,4.5c1.2,1.2,2.8,1.8,4.7,1.8c1.6,0,2.9-0.5,4.2-1.4
		c1.6-1.3,2.5-2.9,2.5-4.9c0-1.7-0.6-3.3-1.7-4.7c-2.5-3.2-6-5.6-10.4-7.3c-4.4-1.6-8.8-2.5-13.3-2.5c-4.3,0-8.4,0.8-12.3,2.5
		c-3.9,1.7-7,4.1-9.4,7.1c-2.4,3.1-3.6,6.7-3.6,10.9c0,4.8,1.1,8.6,3.4,11.4c2.3,2.8,5,4.9,8.2,6.3c3.2,1.4,7.3,2.8,12.3,4.2
		c4.9,1.3,8.4,2.6,10.7,3.9c2.3,1.3,3.4,3.2,3.4,5.7c0,4.9-3.4,7.4-10.1,7.7c-4,0-7.4-0.7-10.2-2c-2.8-1.3-5.5-3.3-8.1-6
		c-1.6-1.6-3.4-2.5-5.2-2.5c-1.3,0-2.6,0.4-3.8,1.2c-2.3,1.6-3.4,3.5-3.4,5.7c0,1.6,0.4,2.9,1.2,3.9c3.1,4.2,7.2,7.3,12.1,9.2
		c4.9,1.9,10.3,2.9,16,2.9c4.2,0,8.2-0.8,12.2-2.5c3.9-1.6,7.2-4,9.7-7.2s3.8-6.9,3.8-11.1c0-4.7-1.1-8.5-3.2-11.3
		C1054,2892.1,1051.4,2890,1048.2,2888.6z"/>
	<path d="M1137,2858.8c1.6-3.1,2.3-6.5,2.3-10.2c0-1.7-0.5-3.3-1.6-4.7s-2.6-2.1-4.8-2.1c-2.1,0-3.7,0.7-4.9,2.1s-1.8,3-1.8,4.7
		c0,2.7-1,4.7-2.9,6s-4.7,2-8.1,2v0.1c-3.8-1.2-7.6-1.8-11.4-1.8c-6.6,0-12.6,1.5-17.9,4.6c-5.4,3.1-9.6,7.4-12.7,12.9
		s-4.7,11.7-4.7,18.7c0,6.9,1.6,13.2,4.7,18.7s7.4,9.8,12.7,12.8c5.4,3,11.4,4.5,17.9,4.5s12.5-1.5,17.9-4.5s9.7-7.3,12.8-12.8
		c3.1-5.5,4.7-11.7,4.7-18.7c0-4.9-0.8-9.4-2.4-13.6c-1.6-4.2-3.9-8-6.8-11.3C1133.1,2864.3,1135.5,2861.9,1137,2858.8z
		 M1121,2902.4c-1.8,3.3-4.2,5.8-7.1,7.7c-3,1.8-6.3,2.7-9.9,2.7s-7-0.9-9.9-2.7c-3-1.8-5.4-4.4-7.1-7.7c-1.8-3.3-2.7-7.1-2.7-11.3
		s0.9-8,2.7-11.4c1.8-3.3,4.2-5.9,7.1-7.7c3-1.8,6.3-2.7,9.9-2.7s7,0.9,9.9,2.7c3,1.8,5.4,4.4,7.1,7.7c1.8,3.3,2.7,7.1,2.7,11.4
		C1123.6,2895.4,1122.8,2899.1,1121,2902.4z"/>
	<path d="M1207.8,2862.8c-3.4-5.2-9.5-7.9-18.3-7.9c-4.5,0-8.6,1.1-12.4,3.4c-3.8,2.3-6.8,4.9-9.2,8.1v-2.2c0-2.3-0.7-4.1-2.2-5.7
		c-1.5-1.5-3.3-2.3-5.6-2.3c-2.3,0-4.1,0.8-5.6,2.3s-2.2,3.4-2.2,5.7v53.7c0,2.3,0.7,4.1,2.2,5.7c1.5,1.5,3.3,2.3,5.6,2.3
		c2.3,0,4.1-0.8,5.6-2.3s2.2-3.4,2.2-5.7v-33.3c0-4.4,1.4-8.1,4.3-11s6.8-4.4,11.8-4.4c4.9,0,8.3,1.4,10.3,4.1c2,2.7,3,6.5,3,11.2
		v33.3c0,2.3,0.7,4.1,2.2,5.7c1.5,1.5,3.3,2.3,5.6,2.3c2.3,0,4.1-0.8,5.6-2.3s2.2-3.4,2.2-5.7v-33.3
		C1212.8,2875.3,1211.1,2868.1,1207.8,2862.8z"/>
</g>


</g>
</svg>
`;
};
