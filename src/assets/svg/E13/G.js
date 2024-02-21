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

  return `
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1567.251 4620.126" style="enable-background:new 0 0 1567.251 4620.126;" xml:space="preserve">
<style type="text/css">
	.st1{fill:#E2D6C7;}
	.st0{fill:${boxColor.hexCode};}
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
	<text transform="matrix(1 0 0 1 513.23 1741.1466)" class="st3 st4">5mm - ${boxColor.name}</text>
	<text transform="matrix(1 0 0 1 444.2739 586.9049)" class="st3 st4">5mm - ${nameColor.name}</text>
	<text transform="matrix(1 0 0 1 500.9966 335.4274)" class="st5 st6 st7">${name}</text>
</g>


	<path class="st1" d="M770.4,832.7v141.7H1224V832.7H770.4z"/>

<rect x="909.4" y="896.5" width="187.5" height="${gap}"/>




<g>
	<path class="st0" d="M1025.5,1216.9v90.7h58.8v43.1c-1.7,0.4-5.2,1.6-10.6,3.4c-5.4,1.9-12.5,3.7-21.3,5.3
		c-8.8,1.7-17.5,2.5-26.3,2.5c-34.2,0-60.7-12-79.4-36c-18.8-24-28.1-57-28.1-99.1c0-41.7,9.5-74.4,28.5-98.2
		c19-23.8,44.7-35.6,77.2-35.6c19.6,0,38.3,6.6,56.3,19.7c17.9,13.1,30,32.6,36.3,58.5h94.4V991.8h-105.7l-10,32.5
		c-11.7-13.8-27.5-24.2-47.5-31.3c-20-7.1-40.6-10.6-61.9-10.6c-50,0-93.5,10.5-130.4,31.6c-36.9,21.1-65,50.1-84.4,87.2
		c-19.4,37.1-29.1,79-29.1,125.7c0,58.8,12.3,107.6,36.9,146.3c24.6,38.8,57.4,67.3,98.5,85.7c12.7,5.7,25.8,10.5,39.3,14.4v23.8
		h187.2V1477c5.5-1.1,11-2.4,16.5-3.7c35.8-8.8,69.4-21.5,100.7-38.1v-218.2H1025.5z"/>
	<g>
		<path class="st1" d="M1025.5,1216.9v90.7h58.8v43.1c-1.7,0.4-5.2,1.6-10.6,3.4c-5.4,1.9-12.5,3.7-21.3,5.3
			c-8.8,1.7-17.5,2.5-26.3,2.5c-34.2,0-60.7-12-79.4-36c-18.8-24-28.1-57-28.1-99.1c0-41.7,9.5-74.4,28.5-98.2
			c19-23.8,44.7-35.6,77.2-35.6c19.6,0,38.3,6.6,56.3,19.7c17.9,13.1,30,32.6,36.3,58.5h94.4V991.8h-105.7l-10,32.5
			c-11.7-13.8-27.5-24.2-47.5-31.3c-20-7.1-40.7-10.6-61.9-10.6c-50,0-93.5,10.5-130.4,31.6c-36.9,21.1-65,50.1-84.4,87.2
			c-19.4,37.1-29.1,79-29.1,125.7c0,58.8,12.3,107.6,36.9,146.3c24.6,38.8,57.4,67.3,98.5,85.7c41.1,18.3,86.4,27.5,136,27.5
			c35.4,0,71.1-4.4,106.9-13.1c35.8-8.8,69.4-21.5,100.7-38.1v-218.2H1025.5z M1202.9,1424c-27.1,13.5-56.2,24.1-86.7,31.5
			c-34.3,8.4-68.8,12.6-102.6,12.6c-46.8,0-90-8.7-128.5-25.9c-37.5-16.8-68-43.3-90.5-78.8c-22.6-35.6-34.1-81.5-34.1-136.5
			c0-43.5,9.1-82.9,27-117.2c17.6-33.8,43.6-60.6,77.3-79.8c33.9-19.4,74.7-29.2,121.3-29.2c19.1,0,37.8,3.2,55.8,9.6
			c16.8,6,30.2,14.7,39.7,25.9l21.6,25.5l15.8-51.5h73.9v142.9h-62.4c-8.1-23.3-21.2-41.8-39.2-54.9c-21.1-15.4-43.6-23.2-67.1-23.2
			c-38.2,0-69,14.3-91.5,42.5c-21.5,27-32.4,63.8-32.4,109.6c0,46.1,10.8,83.2,32,110.4c22.3,28.5,53.9,43,93.8,43
			c9.9,0,19.9-0.9,29.7-2.8c9.7-1.8,17.4-3.8,23.8-6c7.1-2.5,8.9-3,9.1-3l13.8-3.5v-75.7h-58.8v-54.1h159.1V1424z"/>
	</g>
</g>

<g>
	<path class="st0" d="M539.3,1216.9v90.7h58.8v43.1c-1.7,0.4-5.2,1.6-10.6,3.4c-5.4,1.9-12.5,3.7-21.3,5.3
		c-8.8,1.7-17.5,2.5-26.3,2.5c-34.2,0-60.7-12-79.4-36c-18.8-24-28.1-57-28.1-99.1c0-41.7,9.5-74.4,28.5-98.2
		c19-23.8,44.7-35.6,77.2-35.6c19.6,0,38.3,6.6,56.3,19.7c17.9,13.1,30,32.6,36.3,58.5H725V991.8H619.4l-10,32.5
		c-11.7-13.8-27.5-24.2-47.5-31.3c-20-7.1-40.7-10.6-61.9-10.6c-50,0-93.5,10.5-130.4,31.6c-36.9,21.1-65,50.1-84.4,87.2
		c-19.4,37.1-29.1,79-29.1,125.7c0,58.8,12.3,107.6,36.9,146.3c24.6,38.8,57.4,67.3,98.5,85.7c41.1,18.3,86.4,27.5,136,27.5
		c35.4,0,71.1-4.4,106.9-13.1c35.8-8.8,69.4-21.5,100.7-38.1v-218.2H539.3z M716.7,1424c-27.1,13.5-56.2,24.1-86.7,31.5
		c-34.3,8.4-68.8,12.6-102.6,12.6c-46.8,0-90-8.7-128.5-25.9c-37.5-16.8-68-43.3-90.5-78.8c-22.6-35.6-34.1-81.5-34.1-136.5
		c0-43.5,9.1-82.9,27-117.2c17.6-33.8,43.6-60.6,77.3-79.8c33.9-19.4,74.7-29.2,121.3-29.2c19.1,0,37.8,3.2,55.8,9.6
		c16.8,6,30.2,14.7,39.7,25.9l21.6,25.5l15.8-51.5h73.9v142.9h-62.4c-8.1-23.3-21.2-41.8-39.2-54.9c-21-15.4-43.6-23.2-67.1-23.2
		c-38.2,0-69,14.3-91.5,42.5c-21.5,27-32.4,63.8-32.4,109.6c0,46.1,10.8,83.2,32,110.4c22.3,28.5,53.9,43,93.8,43
		c9.9,0,19.9-0.9,29.7-2.8c9.6-1.8,17.4-3.8,23.8-6c7.1-2.5,8.9-3,9.1-3l13.8-3.5v-75.7h-58.8v-54.1h159.1V1424z"/>
</g>
<g>
	<path class="st2" d="M668.2,4224.9c-41.1-18.3-73.9-46.9-98.5-85.7c-24.6-38.8-36.9-87.5-36.9-146.3c0-46.7,9.7-88.6,29.1-125.7
		c19.4-37.1,47.5-66.2,84.4-87.2c36.9-21,80.4-31.6,130.4-31.6c21.3,0,41.9,3.5,61.9,10.6c20,7.1,35.8,17.5,47.5,31.3l10-32.5h105.7
		v179.5h-94.4c-6.3-25.8-18.3-45.3-36.3-58.5c-17.9-13.1-36.7-19.7-56.3-19.7c-32.5,0-58.3,11.9-77.2,35.6
		c-19,23.8-28.5,56.5-28.5,98.2c0,42.1,9.4,75.1,28.1,99.1c18.8,24,45.2,36,79.4,36c8.8,0,17.5-0.8,26.3-2.5
		c8.8-1.7,15.8-3.4,21.3-5.3c5.4-1.9,9-3,10.6-3.4v-43.1h-58.8v-90.7h195.7v218.2c-31.3,16.7-64.8,29.4-100.7,38.1
		c-35.9,8.8-71.5,13.1-106.9,13.1C754.6,4252.4,709.2,4243.3,668.2,4224.9z"/>
</g>
<g>
	<path class="st1" d="M543.8,2557.5v90.7h58.8v43.1c-1.7,0.4-5.2,1.6-10.6,3.4c-5.4,1.9-12.5,3.7-21.3,5.3
		c-8.8,1.7-17.5,2.5-26.3,2.5c-34.2,0-60.7-12-79.4-36c-18.8-24-28.1-57-28.1-99.1c0-41.7,9.5-74.4,28.5-98.2
		c19-23.8,44.7-35.6,77.2-35.6c19.6,0,38.3,6.6,56.3,19.7c17.9,13.1,30,32.6,36.3,58.5h94.4v-179.5H623.8l-10,32.5
		c-11.7-13.8-27.5-24.2-47.5-31.3c-6-2.1-12.1-3.9-18.2-5.4v18.9c4.1,1.1,8.1,2.4,12.1,3.8c16.8,6,30.2,14.7,39.7,25.9l21.6,25.5
		l15.9-51.5h73.9v142.9h-62.4c-8.1-23.3-21.2-41.8-39.2-54.9c-21.1-15.4-43.6-23.2-67.1-23.2c-38.2,0-69,14.3-91.5,42.5
		c-21.5,27-32.4,63.8-32.4,109.6c0,46.1,10.8,83.2,32,110.4c22.3,28.5,53.9,43,93.8,43c9.9,0,19.9-1,29.7-2.8
		c9.7-1.8,17.4-3.8,23.8-6c7.1-2.5,8.9-2.9,9.1-3l13.8-3.5v-75.7h-58.8v-54.1h159.1v188.8c-27.1,13.5-56.2,24.1-86.7,31.5
		c-34.3,8.4-68.8,12.6-102.6,12.6c-46.8,0-90.1-8.7-128.5-25.9c-37.5-16.8-68-43.3-90.5-78.8c-22.6-35.6-34-81.5-34-136.5
		c0-43.5,9.1-82.9,27-117.2c17.6-33.8,43.6-60.6,77.3-79.8c10.2-5.8,21-10.8,32.4-14.8v-19.4c-14.6,4.8-28.5,10.9-41.5,18.3
		c-36.9,21.1-65,50.1-84.4,87.2c-19.4,37.1-29.1,79-29.1,125.7c0,58.8,12.3,107.6,36.9,146.3c24.6,38.8,57.4,67.3,98.5,85.7
		c41.1,18.3,86.4,27.5,136,27.5c35.4,0,71.1-4.4,106.9-13.1c35.8-8.8,69.4-21.5,100.7-38.1v-218.2L543.8,2557.5L543.8,2557.5z"/>
	<path class="st1" d="M1028.2,2557.5v90.7h58.8v43.1c-1.7,0.4-5.2,1.6-10.6,3.4c-5.4,1.9-12.5,3.7-21.3,5.3
		c-8.8,1.7-17.5,2.5-26.3,2.5c-34.2,0-60.7-12-79.4-36c-18.8-24-28.1-57-28.1-99.1c0-41.7,9.5-74.4,28.5-98.2
		c19-23.8,44.7-35.6,77.2-35.6c19.6,0,38.3,6.6,56.3,19.7c17.9,13.1,30,32.6,36.3,58.5h94.4v-179.5h-105.7l-10,32.5
		c-11.7-13.8-27.5-24.2-47.5-31.3c-6-2.1-12.1-3.9-18.2-5.4v18.9c4.1,1.1,8.1,2.4,12.1,3.8c16.8,6,30.2,14.7,39.7,25.9l21.6,25.5
		l15.9-51.5h73.9v142.9h-62.4c-8.1-23.3-21.2-41.8-39.2-54.9c-21.1-15.4-43.6-23.2-67.1-23.2c-38.2,0-69,14.3-91.5,42.5
		c-21.5,27-32.4,63.8-32.4,109.6c0,46.1,10.8,83.2,32,110.4c22.3,28.5,53.9,43,93.8,43c9.9,0,19.9-1,29.7-2.8
		c9.7-1.8,17.4-3.8,23.8-6c7.1-2.5,8.9-2.9,9.1-3l13.8-3.5v-75.7h-58.8v-54.1h159.1v188.8c-27.1,13.5-56.2,24.1-86.7,31.5
		c-34.3,8.4-68.8,12.6-102.6,12.6c-46.8,0-90.1-8.7-128.5-25.9c-37.5-16.8-68-43.3-90.5-78.8c-22.6-35.6-34-81.5-34-136.5
		c0-43.5,9.1-82.9,27-117.2c17.6-33.8,43.6-60.6,77.3-79.8c10.2-5.8,21-10.8,32.4-14.8v-19.4c-14.6,4.8-28.5,10.9-41.5,18.3
		c-36.9,21.1-65,50.1-84.4,87.2c-19.4,37.1-29.1,79-29.1,125.7c0,58.8,12.3,107.6,36.9,146.3c24.6,38.8,57.4,67.3,98.5,85.7
		c41.1,18.3,86.4,27.5,136,27.5c35.4,0,71.1-4.4,106.9-13.1c35.8-8.8,69.4-21.5,100.7-38.1v-218.2L1028.2,2557.5L1028.2,2557.5z"/>
</g>
<g>
	<path d="M711.7,4389.7c-5.1,0-9.7,1.5-13.7,4.4c-4,2.9-7,6.2-9,9.9c-3-9.5-10-14.3-20.9-14.3c-4.4,0-8.4,1.1-12,3.3
		c-3.6,2.2-6.6,4.9-8.9,8v-2.1c0-2.3-0.7-4.1-2.2-5.7c-1.5-1.5-3.3-2.3-5.6-2.3c-2.3,0-4.1,0.8-5.6,2.3c-1.5,1.5-2.2,3.4-2.2,5.7
		v53.7c0,2.3,0.7,4.1,2.2,5.7c1.5,1.5,3.3,2.3,5.6,2.3c2.3,0,4.1-0.8,5.6-2.3c1.5-1.5,2.2-3.4,2.2-5.7v-33.3c0-4.4,1.4-8.1,4.1-11
		c2.7-2.9,6.5-4.4,11.4-4.4c4.7,0,8,1.4,9.8,4.1c1.9,2.7,2.8,6.5,2.8,11.2v33.3c0,2.3,0.7,4.1,2.2,5.7c1.5,1.5,3.3,2.3,5.6,2.3
		c2.3,0,4.1-0.8,5.6-2.3c1.5-1.5,2.2-3.4,2.2-5.7v-33.3c0-4.4,1.4-8.1,4.1-11c2.7-2.9,6.5-4.4,11.4-4.4c4.7,0,8,1.4,9.8,4.1
		c1.9,2.7,2.8,6.5,2.8,11.2v33.3c0,2.3,0.7,4.1,2.2,5.7c1.5,1.5,3.3,2.3,5.6,2.3c2.3,0,4.1-0.8,5.6-2.3c1.5-1.5,2.2-3.4,2.2-5.7
		v-33.3c0-9.3-1.6-16.5-4.9-21.8C726.2,4392.4,720.3,4389.7,711.7,4389.7z"/>
	<path d="M764.6,4368.6c-1.2-1-3.3-1.4-6.4-1.4c-2.9,0-4.9,0.5-6.2,1.4c-1.3,1-2,2.6-2,5.1v2.5c0,2.4,0.6,4.1,1.8,5.1
		c1.2,1,3.3,1.4,6.2,1.4c3,0,5.2-0.5,6.4-1.4c1.3-0.9,1.9-2.6,1.9-5.1v-2.5C766.4,4371.2,765.8,4369.5,764.6,4368.6z"/>
	<path d="M758.2,4391c-2.3,0-4.1,0.8-5.6,2.3c-1.5,1.5-2.2,3.4-2.2,5.7v53.7c0,2.3,0.7,4.1,2.2,5.7c1.5,1.5,3.3,2.3,5.6,2.3
		c2.3,0,4.1-0.8,5.6-2.3c1.5-1.5,2.2-3.4,2.2-5.7V4399c0-2.3-0.7-4.1-2.2-5.7C762.4,4391.8,760.5,4391,758.2,4391z"/>
	<path d="M830.7,4442.7c-1.1,0-2.1,0.2-2.9,0.5c-0.8,0.3-1.6,0.8-2.5,1.5c-0.9,0.6-1.6,1.1-2.1,1.4c-2.1,1-5.2,1.6-9.5,1.6
		c-5.8,0-10.6-2.1-14.3-6.2c-3.7-4.1-5.6-9.3-5.6-15.5c0-6.5,1.8-11.8,5.5-15.8c3.7-4,8.8-6,15.3-6c1,0,2.4,0.2,4.1,0.5
		c1.7,0.3,3,0.7,3.8,1.2c0.8,0.4,1.6,1,2.4,1.6c0.8,0.7,1.7,1.2,2.5,1.6c0.9,0.4,2,0.6,3.4,0.6c1.8,0,3.3-0.7,4.4-2.1
		c1.1-1.4,1.7-3.1,1.7-5c0-3.8-2.3-6.9-6.8-9.2c-4.5-2.3-10.4-3.4-17.8-3.4c-6.6,0-12.5,1.5-17.7,4.6c-5.2,3.1-9.3,7.3-12.2,12.8
		c-2.9,5.5-4.4,11.7-4.4,18.7c0,6.8,1.4,12.9,4.2,18.4c2.8,5.5,6.7,9.8,11.8,12.9c5.1,3.1,10.9,4.7,17.6,4.7c4.5,0,8.8-0.5,12.7-1.6
		c4-1.1,7.2-2.5,9.6-4.4c2.4-1.8,3.6-3.8,3.6-5.8c0-2.2-0.6-3.9-1.9-5.3C834.5,4443.3,832.8,4442.7,830.7,4442.7z"/>
	<path d="M910.9,4392c-1.5-1.5-3.3-2.2-5.6-2.2c-2.3,0-4.1,0.8-5.6,2.3c-1.5,1.5-2.2,3.4-2.2,5.7v0.1c-2.5-2.3-5.6-4.3-9.2-5.8
		c-3.6-1.5-7.5-2.3-11.7-2.3c-5.8,0-11.1,1.5-15.9,4.6c-4.8,3.1-8.6,7.4-11.4,12.9c-2.8,5.5-4.2,11.7-4.2,18.7s1.4,13.1,4.2,18.6
		c2.8,5.5,6.7,9.7,11.5,12.8c4.9,3.1,10.3,4.6,16.2,4.6c4.1,0,8-0.9,11.6-2.7c3.7-1.8,6.6-3.9,8.8-6.4c0.1,2.3,0.8,4.1,2.3,5.6
		c1.4,1.5,3.3,2.2,5.5,2.2c2.3,0,4.1-0.8,5.6-2.3c1.5-1.5,2.2-3.4,2.2-5.7v-55C913.1,4395.3,912.3,4393.4,910.9,4392z M892.8,4441.4
		c-3.6,4.1-8.1,6.2-13.8,6.2c-5.6,0-10.2-2.1-13.7-6.2c-3.5-4.1-5.3-9.3-5.3-15.5c0-6.2,1.8-11.4,5.3-15.6c3.6-4.2,8.1-6.2,13.7-6.2
		c5.6,0,10.2,2.1,13.8,6.2c3.6,4.2,5.3,9.4,5.3,15.6C898.1,4432.1,896.3,4437.3,892.8,4441.4z"/>
</g>

<g>
	<path d="M378.9,3175.5c-4.6-2.6-9.8-4-15.5-4c-2.3,0-4.6,0.3-7.1,0.9c-2.5,0.6-4.6,1.4-6.2,2.3l2.5-18.9h32.2c2.1,0,3.8-0.7,5.2-2
		c1.4-1.3,2.1-3,2.1-5c0-2.1-0.7-3.8-2.1-5.2c-1.4-1.4-3.1-2.1-5.2-2.1h-37.6c-2,0-3.7,0.6-5.1,1.8c-1.4,1.2-2.3,2.7-2.7,4.5
		l-4,32.2c-0.1,0.3-0.1,1-0.1,1.8c0,2.5,0.7,4.7,2.1,6.5c1.4,1.8,3.8,2.7,7.2,2.7c1,0,1.9-0.2,2.8-0.5c0.9-0.3,2.1-0.9,3.7-1.7
		c2.2-1,4-1.8,5.6-2.3c1.6-0.5,3.3-0.8,5.3-0.8c4.4,0,8.2,1.5,11.4,4.4c3.2,2.9,4.8,6.8,4.8,11.4c0,3.2-0.9,6.2-2.8,9
		c-1.9,2.8-4.4,5-7.5,6.6c-3.1,1.6-6.5,2.5-10,2.5c-2.8,0-6-1.1-9.6-3.4c-2.3-1.6-4.3-2.5-5.9-2.5c-2.2,0-3.9,0.6-5.3,1.9
		c-1.3,1.3-2,2.7-2,4.2c0,1.4,0.3,2.9,1,4.4c0.7,1.6,1.6,2.8,2.6,3.6c2.3,1.8,5.2,3.2,8.8,4.3c3.6,1,7.1,1.6,10.5,1.6
		c6.3,0,12.2-1.5,17.7-4.4c5.5-2.9,9.8-6.8,13.1-11.8c3.3-4.9,4.9-10.3,4.9-16.1c0-5.6-1.3-10.7-4-15.3
		C387.2,3181.7,383.5,3178.1,378.9,3175.5z"/>
	<path d="M491.5,3161.8c-5.1,0-9.7,1.5-13.7,4.4c-4,2.9-7,6.2-9,9.9c-3-9.5-10-14.3-20.9-14.3c-4.4,0-8.4,1.1-12,3.3
		c-3.6,2.2-6.6,4.9-8.9,8v-2.1c0-2.3-0.7-4.1-2.2-5.7c-1.5-1.5-3.3-2.3-5.6-2.3c-2.3,0-4.1,0.8-5.6,2.3c-1.5,1.5-2.2,3.4-2.2,5.7
		v53.7c0,2.3,0.7,4.1,2.2,5.7c1.5,1.5,3.3,2.3,5.6,2.3c2.3,0,4.1-0.8,5.6-2.3c1.5-1.5,2.2-3.4,2.2-5.7v-33.3c0-4.4,1.4-8.1,4.1-11
		c2.7-2.9,6.5-4.4,11.4-4.4c4.7,0,8,1.4,9.8,4.1c1.9,2.7,2.8,6.5,2.8,11.2v33.3c0,2.3,0.7,4.1,2.2,5.7c1.5,1.5,3.3,2.3,5.6,2.3
		c2.3,0,4.1-0.8,5.6-2.3c1.5-1.5,2.2-3.4,2.2-5.7v-33.3c0-4.4,1.4-8.1,4.1-11c2.7-2.9,6.5-4.4,11.4-4.4c4.7,0,8,1.4,9.8,4.1
		c1.9,2.7,2.8,6.5,2.8,11.2v33.3c0,2.3,0.7,4.1,2.2,5.7c1.5,1.5,3.3,2.3,5.6,2.3c2.3,0,4.1-0.8,5.6-2.3c1.5-1.5,2.2-3.4,2.2-5.7
		v-33.3c0-9.3-1.6-16.5-4.9-21.8C506.1,3164.4,500.1,3161.8,491.5,3161.8z"/>
	<path d="M611.4,3161.8c-5.1,0-9.7,1.5-13.7,4.4c-4,2.9-7,6.2-9,9.9c-3-9.5-10-14.3-20.9-14.3c-4.4,0-8.4,1.1-12,3.3
		c-3.6,2.2-6.6,4.9-8.9,8v-2.1c0-2.3-0.7-4.1-2.2-5.7c-1.5-1.5-3.3-2.3-5.6-2.3c-2.3,0-4.1,0.8-5.6,2.3c-1.5,1.5-2.2,3.4-2.2,5.7
		v53.7c0,2.3,0.7,4.1,2.2,5.7c1.5,1.5,3.3,2.3,5.6,2.3c2.3,0,4.1-0.8,5.6-2.3c1.5-1.5,2.2-3.4,2.2-5.7v-33.3c0-4.4,1.4-8.1,4.1-11
		c2.7-2.9,6.5-4.4,11.4-4.4c4.7,0,8,1.4,9.8,4.1c1.9,2.7,2.8,6.5,2.8,11.2v33.3c0,2.3,0.7,4.1,2.2,5.7c1.5,1.5,3.3,2.3,5.6,2.3
		c2.3,0,4.1-0.8,5.6-2.3c1.5-1.5,2.2-3.4,2.2-5.7v-33.3c0-4.4,1.4-8.1,4.1-11c2.7-2.9,6.5-4.4,11.4-4.4c4.7,0,8,1.4,9.8,4.1
		c1.9,2.7,2.8,6.5,2.8,11.2v33.3c0,2.3,0.7,4.1,2.2,5.7c1.5,1.5,3.3,2.3,5.6,2.3c2.3,0,4.1-0.8,5.6-2.3c1.5-1.5,2.2-3.4,2.2-5.7
		v-33.3c0-9.3-1.6-16.5-4.9-21.8C625.9,3164.4,620,3161.8,611.4,3161.8z"/>
	<path d="M716.1,3185h-22.6c-2.3,0-4.1,0.7-5.7,2.2c-1.5,1.5-2.3,3.3-2.3,5.5c0,2.3,0.8,4.1,2.3,5.6c1.5,1.5,3.4,2.2,5.7,2.2h22.6
		c2.3,0,4.1-0.7,5.7-2.1c1.5-1.4,2.3-3.2,2.3-5.4c0-2.3-0.8-4.1-2.3-5.7C720.2,3185.8,718.3,3185,716.1,3185z"/>
	<path d="M810.4,3194.3l19.6-18.1c2.1-1.8,3.1-3.8,3.1-5.8c0-1.6-0.8-3.3-2.3-4.9c-1.5-1.6-3.2-2.4-5.1-2.4c-2.2,0-4.1,0.8-5.7,2.5
		l-27.8,26.9v-48.1c0-2.3-0.7-4.1-2.2-5.7c-1.5-1.5-3.3-2.3-5.6-2.3c-2.3,0-4.1,0.8-5.6,2.3c-1.5,1.5-2.2,3.4-2.2,5.7v80.3
		c0,2.3,0.7,4.1,2.2,5.7c1.5,1.5,3.3,2.3,5.6,2.3c2.3,0,4.1-0.8,5.6-2.3c1.5-1.5,2.2-3.4,2.2-5.7V3211l6.4-5.8l23.4,24.7
		c1.6,1.7,3.5,2.6,5.7,2.6c1.9,0,3.7-0.7,5.4-2.2c1.7-1.5,2.5-3.3,2.5-5.5c0-2.2-0.8-4.1-2.5-5.8L810.4,3194.3z"/>
	<path d="M895.8,3166.4c-5.4-3.1-11.4-4.6-17.9-4.6c-6.6,0-12.6,1.5-17.9,4.6c-5.4,3.1-9.6,7.4-12.7,12.9
		c-3.1,5.5-4.7,11.7-4.7,18.7c0,6.9,1.6,13.2,4.7,18.7c3.1,5.5,7.4,9.8,12.7,12.8c5.4,3,11.4,4.5,17.9,4.5c6.5,0,12.5-1.5,17.9-4.5
		c5.4-3,9.7-7.3,12.8-12.8c3.1-5.5,4.7-11.7,4.7-18.7c0-6.9-1.6-13.2-4.7-18.7C905.5,3173.8,901.2,3169.5,895.8,3166.4z M895,3209.2
		c-1.8,3.3-4.2,5.8-7.1,7.7c-3,1.8-6.3,2.7-9.9,2.7c-3.6,0-7-0.9-9.9-2.7c-3-1.8-5.4-4.4-7.1-7.7c-1.8-3.3-2.7-7.1-2.7-11.3
		c0-4.2,0.9-8,2.7-11.4c1.8-3.3,4.2-5.9,7.1-7.7c3-1.8,6.3-2.7,9.9-2.7c3.6,0,7,0.9,9.9,2.7c3,1.8,5.4,4.4,7.1,7.7
		c1.8,3.3,2.7,7.1,2.7,11.4C897.7,3202.2,896.8,3205.9,895,3209.2z"/>
	<path d="M1001.1,3195.4c-3.1-1.4-7-2.7-11.7-4c-3.4-1-6-1.8-7.9-2.4c-1.9-0.6-3.4-1.6-4.6-2.7c-1.2-1.2-1.8-2.7-1.8-4.6
		c0-4.8,3.3-7.1,9.9-7.1c3.1,0,5.9,0.6,8.4,1.7c2.5,1.1,4.5,2.6,6,4.5c1.2,1.2,2.8,1.8,4.7,1.8c1.6,0,2.9-0.5,4.2-1.4
		c1.6-1.3,2.5-2.9,2.5-4.9c0-1.7-0.6-3.3-1.7-4.7c-2.5-3.2-6-5.6-10.4-7.3c-4.4-1.6-8.8-2.5-13.3-2.5c-4.3,0-8.4,0.8-12.3,2.5
		c-3.9,1.7-7,4.1-9.4,7.1c-2.4,3.1-3.6,6.7-3.6,10.9c0,4.8,1.1,8.6,3.4,11.4c2.3,2.8,5,4.9,8.2,6.3c3.2,1.4,7.3,2.8,12.3,4.2
		c4.9,1.3,8.4,2.6,10.7,3.9c2.3,1.3,3.4,3.2,3.4,5.7c0,4.9-3.4,7.4-10.1,7.7c-4,0-7.4-0.7-10.2-2c-2.8-1.3-5.5-3.3-8.1-6
		c-1.6-1.6-3.4-2.5-5.2-2.5c-1.3,0-2.6,0.4-3.8,1.2c-2.3,1.6-3.4,3.5-3.4,5.7c0,1.6,0.4,2.9,1.2,3.9c3.1,4.2,7.2,7.3,12.1,9.2
		c4.9,1.9,10.3,2.9,16,2.9c4.2,0,8.2-0.8,12.2-2.5c3.9-1.6,7.2-4,9.7-7.2c2.5-3.2,3.8-6.9,3.8-11.1c0-4.7-1.1-8.5-3.2-11.3
		C1006.9,3198.9,1004.3,3196.8,1001.1,3195.4z"/>
	<path d="M1089.9,3165.6c1.6-3.1,2.3-6.5,2.3-10.2c0-1.7-0.5-3.3-1.6-4.7s-2.6-2.1-4.8-2.1c-2.1,0-3.7,0.7-4.9,2.1s-1.8,3-1.8,4.7
		c0,2.7-1,4.7-2.9,6c-1.9,1.3-4.7,2-8.1,2v0.1c-3.8-1.2-7.6-1.8-11.4-1.8c-6.6,0-12.6,1.5-17.9,4.6c-5.4,3.1-9.6,7.4-12.7,12.9
		c-3.1,5.5-4.7,11.7-4.7,18.7c0,6.9,1.6,13.2,4.7,18.7c3.1,5.5,7.4,9.8,12.7,12.8c5.4,3,11.4,4.5,17.9,4.5c6.5,0,12.5-1.5,17.9-4.5
		c5.4-3,9.7-7.3,12.8-12.8c3.1-5.5,4.7-11.7,4.7-18.7c0-4.9-0.8-9.4-2.4-13.6c-1.6-4.2-3.9-8-6.8-11.3
		C1086,3171.1,1088.4,3168.7,1089.9,3165.6z M1073.9,3209.2c-1.8,3.3-4.2,5.8-7.1,7.7c-3,1.8-6.3,2.7-9.9,2.7c-3.6,0-7-0.9-9.9-2.7
		c-3-1.8-5.4-4.4-7.1-7.7c-1.8-3.3-2.7-7.1-2.7-11.3c0-4.2,0.9-8,2.7-11.4c1.8-3.3,4.2-5.9,7.1-7.7c3-1.8,6.3-2.7,9.9-2.7
		c3.6,0,7,0.9,9.9,2.7c3,1.8,5.4,4.4,7.1,7.7c1.8,3.3,2.7,7.1,2.7,11.4C1076.5,3202.2,1075.7,3205.9,1073.9,3209.2z"/>
	<path d="M1160.7,3169.6c-3.4-5.2-9.5-7.9-18.3-7.9c-4.5,0-8.6,1.1-12.4,3.4c-3.8,2.3-6.8,4.9-9.2,8.1v-2.2c0-2.3-0.7-4.1-2.2-5.7
		c-1.5-1.5-3.3-2.3-5.6-2.3c-2.3,0-4.1,0.8-5.6,2.3c-1.5,1.5-2.2,3.4-2.2,5.7v53.7c0,2.3,0.7,4.1,2.2,5.7c1.5,1.5,3.3,2.3,5.6,2.3
		c2.3,0,4.1-0.8,5.6-2.3c1.5-1.5,2.2-3.4,2.2-5.7v-33.3c0-4.4,1.4-8.1,4.3-11c2.9-2.9,6.8-4.4,11.8-4.4c4.9,0,8.3,1.4,10.3,4.1
		c2,2.7,3,6.5,3,11.2v33.3c0,2.3,0.7,4.1,2.2,5.7c1.5,1.5,3.3,2.3,5.6,2.3c2.3,0,4.1-0.8,5.6-2.3c1.5-1.5,2.2-3.4,2.2-5.7v-33.3
		C1165.7,3182.1,1164,3174.9,1160.7,3169.6z"/>
</g>


<rect x="916.8" y="1484.3" class="st2" width="187.5" height="${bar}"/>
</g>

</svg>
`;
};
