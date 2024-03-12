import { templates } from "../../../configs/templates";

export const svg = (name, color, animalNumber, text) => {
  const hex = color.hexCode;

  const customText =
    text.length > 0
      ? `<text transform="matrix(1 0 0 1 894.833 1203.7632)" font-family="'AmaticSC-Bold'" font-size="35.5385px">
		${text}
	</text>`
      : "";

  const animalTag = templates.G87.animals[animalNumber].tag(0, 0, 1.69);

  return `  <svg version="1.1">

  ${animalTag}
<text transform="matrix(1 0 0 1 24.2296 780.8976)" font-family="'#9Slide03QuicksandBold-Bold'" font-size="480px">L</text>
<text transform="matrix(1 0 0 1 -16 -39)" font-family="'#9Slide03QuicksandBold-Bold'" font-size="98px"># ${animalNumber}</text>

<g>
	<text transform="matrix(1 0 0 1 1107.1726 1478.1544)" font-family="'#9Slide03QuicksandBold-Bold'" font-size="98px">${color.name}</text>
	<g>
		<text transform="matrix(0.9927 -0.1203 0.1203 0.9927 843.8702 229.8805)" fill="${hex}" stroke="${hex}" 
		stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" font-family="'SharkBlindateRegular'" 
		font-size="127.6373px">${name}</text>
	</g>
</g>

<path fill="${hex}" d="M1359.6,305.9v-33H1349v-89.1c0-36.2-14.3-70.9-39.9-96.5c-25.6-25.6-60.3-39.9-96.5-39.9h-134.1V36.8h-33
	v10.6H911.4c-36.2,0-70.9,14.3-96.5,39.9c-25.6,25.6-40,60.3-39.9,96.5v89.1h-10.6v33H775v57h-10.6v33H775v89.1
	c0,36.2,14.3,70.9,39.9,96.5c25.6,25.6,60.3,40,96.5,39.9h93.8v10.6h26.4v-10.6h60.8v10.6h26.4v-10.6h93.8
	c36.2,0,70.9-14.3,96.5-39.9c25.6-25.6,40-60.3,39.9-96.5V396h10.6v-33H1349v-57H1359.6z M1285.1,480.8c0,42.4-34.4,76.7-76.7,76.7
	H915.6c-42.4,0-76.7-34.3-76.7-76.7V188c0-42.4,34.3-76.7,76.7-76.7h292.7c42.4,0,76.7,34.3,76.7,76.7V480.8z"/>
<path fill="${hex}" d="M1359.6,910.7v-33H1349v-89.1c0-36.2-14.3-70.9-39.9-96.5c-25.6-25.6-60.3-39.9-96.5-39.9h-134.1v-10.6h-33
	v10.6H911.4c-36.2,0-70.9,14.3-96.5,39.9c-25.6,25.6-40,60.3-39.9,96.5v89.1h-10.6v33H775v57h-10.6v33H775v89.1
	c0,36.2,14.3,70.9,39.9,96.5c25.6,25.6,60.3,40,96.5,39.9h93.8v10.6h26.4v-10.6h60.8v10.6h26.4v-10.6h93.8
	c36.2,0,70.9-14.3,96.5-39.9c25.6-25.6,40-60.3,39.9-96.5v-89.1h10.6v-33H1349v-57H1359.6z M1285.1,1085.6
	c0,42.4-34.4,76.7-76.7,76.7H915.6c-42.4,0-76.7-34.3-76.7-76.7V792.8c0-42.4,34.3-76.7,76.7-76.7h292.7c42.4,0,76.7,34.3,76.7,76.7
	V1085.6z"/>

	<g>
	<path d="M1227.9,1325.3c-3.6-2-7.6-3-12-3c-1.7,0-3.6,0.2-5.5,0.7c-1.9,0.5-3.5,1.1-4.8,1.8l1.9-14.5h24.8c1.6,0,2.9-0.5,4-1.5
		c1.1-1,1.6-2.3,1.6-3.9c0-1.6-0.5-2.9-1.6-4c-1.1-1.1-2.4-1.6-4-1.6h-28.9c-1.5,0-2.9,0.5-4,1.3c-1.1,0.9-1.8,2.1-2,3.5l-3.1,24.8
		c-0.1,0.3-0.1,0.7-0.1,1.4c0,1.9,0.6,3.6,1.7,5c1.1,1.4,2.9,2.1,5.5,2.1c0.7,0,1.5-0.1,2.1-0.4c0.7-0.3,1.6-0.7,2.9-1.3
		c1.7-0.8,3.1-1.4,4.3-1.8c1.2-0.4,2.6-0.6,4.1-0.6c3.4,0,6.3,1.1,8.8,3.4c2.5,2.3,3.7,5.2,3.7,8.8c0,2.5-0.7,4.8-2.1,6.9
		c-1.4,2.1-3.4,3.8-5.8,5.1c-2.4,1.3-5,1.9-7.7,1.9c-2.1,0-4.6-0.9-7.4-2.6c-1.8-1.3-3.3-1.9-4.5-1.9c-1.7,0-3,0.5-4,1.5
		c-1,1-1.6,2-1.6,3.2c0,1.1,0.3,2.2,0.8,3.4c0.5,1.2,1.2,2.1,2,2.8c1.7,1.4,4,2.5,6.8,3.3c2.8,0.8,5.4,1.2,8,1.2
		c4.9,0,9.4-1.1,13.6-3.3c4.2-2.2,7.6-5.2,10.1-9.1c2.5-3.8,3.8-7.9,3.8-12.4c0-4.3-1-8.3-3-11.8
		C1234.2,1330.1,1231.4,1327.4,1227.9,1325.3z"/>
	<path d="M1314.5,1314.8c-3.9,0-7.5,1.1-10.6,3.4c-3.1,2.3-5.4,4.8-6.9,7.6c-2.3-7.3-7.7-11-16.1-11c-3.4,0-6.5,0.8-9.2,2.5
		c-2.8,1.7-5.1,3.8-6.9,6.2v-1.6c0-1.7-0.6-3.2-1.7-4.3c-1.1-1.2-2.6-1.8-4.3-1.8c-1.7,0-3.2,0.6-4.3,1.8c-1.1,1.2-1.7,2.6-1.7,4.3
		v41.3c0,1.7,0.6,3.2,1.7,4.3c1.1,1.2,2.6,1.8,4.3,1.8c1.7,0,3.2-0.6,4.3-1.8c1.1-1.2,1.7-2.6,1.7-4.3v-25.6c0-3.4,1-6.2,3.1-8.5
		c2.1-2.2,5-3.3,8.8-3.3c3.6,0,6.1,1,7.6,3.2c1.4,2.1,2.1,5,2.1,8.6v25.6c0,1.7,0.6,3.2,1.7,4.3c1.1,1.2,2.6,1.8,4.3,1.8
		c1.7,0,3.2-0.6,4.3-1.8c1.1-1.2,1.7-2.6,1.7-4.3v-25.6c0-3.4,1-6.2,3.1-8.5c2.1-2.2,5-3.3,8.8-3.3c3.6,0,6.1,1,7.5,3.2
		c1.4,2.1,2.2,5,2.2,8.6v25.6c0,1.7,0.6,3.2,1.7,4.3c1.1,1.2,2.6,1.8,4.3,1.8c1.7,0,3.2-0.6,4.3-1.8c1.1-1.2,1.7-2.6,1.7-4.3v-25.6
		c0-7.1-1.3-12.7-3.8-16.8C1325.7,1316.8,1321.1,1314.8,1314.5,1314.8z"/>
	<path d="M1420.4,1320.8c-2.5-4-7.1-6-13.7-6c-3.9,0-7.5,1.1-10.6,3.4c-3.1,2.3-5.4,4.8-6.9,7.6c-2.3-7.3-7.7-11-16.1-11
		c-3.4,0-6.5,0.8-9.2,2.5c-2.8,1.7-5.1,3.8-6.9,6.2v-1.6c0-1.7-0.6-3.2-1.7-4.3c-1.1-1.2-2.6-1.8-4.3-1.8c-1.7,0-3.2,0.6-4.3,1.8
		c-1.1,1.2-1.7,2.6-1.7,4.3v41.3c0,1.7,0.6,3.2,1.7,4.3c1.1,1.2,2.6,1.8,4.3,1.8c1.7,0,3.2-0.6,4.3-1.8c1.1-1.2,1.7-2.6,1.7-4.3
		v-25.6c0-3.4,1-6.2,3.1-8.5c2.1-2.2,5-3.3,8.8-3.3c3.6,0,6.1,1,7.6,3.2c1.4,2.1,2.1,5,2.1,8.6v25.6c0,1.7,0.6,3.2,1.7,4.3
		c1.1,1.2,2.6,1.8,4.3,1.8c1.7,0,3.2-0.6,4.3-1.8c1.1-1.2,1.7-2.6,1.7-4.3v-25.6c0-3.4,1-6.2,3.1-8.5c2.1-2.2,5-3.3,8.8-3.3
		c3.6,0,6.1,1,7.5,3.2c1.4,2.1,2.2,5,2.2,8.6v25.6c0,1.7,0.6,3.2,1.7,4.3c1.1,1.2,2.6,1.8,4.3,1.8c1.7,0,3.2-0.6,4.3-1.8
		c1.1-1.2,1.7-2.6,1.7-4.3v-25.6C1424.2,1330.4,1422.9,1324.9,1420.4,1320.8z"/>
</g>
<g>
	<g>
		<g>
			<path d="M1628.9,1086.5l0-1006.8h0h-31.4c-2.3,0-4.2-2.2-4.2-4.9V63.2c0-2.7,1.9-4.9,4.2-4.9h0.8c2.3,0,4.2-2.2,4.2-4.9V41.7
				c0-2.7-1.9-4.9-4.2-4.9h-28.4c-2.3,0-4.2,2.2-4.2,4.9v11.6c0,2.7,1.9,4.9,4.2,4.9h0.8c2.3,0,4.2,2.2,4.2,4.9v11.6
				c0,2.7-1.9,4.9-4.2,4.9h-28.4c-2.3,0-4.2-2.2-4.2-4.9V63.2c0-2.7,1.9-4.9,4.2-4.9h0.8c2.3,0,4.2-2.2,4.2-4.9V41.7
				c0-2.7-1.9-4.9-4.2-4.9h-28.4c-2.3,0-4.2,2.2-4.2,4.9v11.6c0,2.7,1.9,4.9,4.2,4.9h0.8c2.3,0,4.2,2.2,4.2,4.9v11.6
				c0,2.7-1.9,4.9-4.2,4.9h-28.4c-2.3,0-4.2-2.2-4.2-4.9V63.2c0-2.7,1.9-4.9,4.2-4.9h0.8c2.3,0,4.2-2.2,4.2-4.9V41.7
				c0-2.7-1.9-4.9-4.2-4.9h-28.4c-2.3,0-4.2,2.2-4.2,4.9v11.6c0,2.7,1.9,4.9,4.2,4.9h0.8c2.3,0,4.2,2.2,4.2,4.9v11.6
				c0,2.7-1.9,4.9-4.2,4.9h-28.4c-2.3,0-4.2-2.2-4.2-4.9V63.2c0-2.7,1.9-4.9,4.2-4.9h0.8c2.3,0,4.2-2.2,4.2-4.9V41.7
				c0-2.7-1.9-4.9-4.2-4.9h-28.4c-2.3,0-4.2,2.2-4.2,4.9v11.6c0,2.7,1.9,4.9,4.2,4.9h0.8c2.3,0,4.2,2.2,4.2,4.9v11.6
				c0,2.7-1.9,4.9-4.2,4.9h-31.4v1013.9h0v21.9h31.4c2.3,0,4.2-2.2,4.2-4.9v-11.6c0-2.7-1.9-4.9-4.2-4.9h-0.8
				c-2.3,0-4.2-2.2-4.2-4.9v-11.6c0-2.7,1.9-4.9,4.2-4.9h28.4c2.3,0,4.2,2.2,4.2,4.9v11.6c0,2.7-1.9,4.9-4.2,4.9h-0.8
				c-2.3,0-4.2,2.2-4.2,4.9v11.6c0,2.7,1.9,4.9,4.2,4.9h28.4c2.3,0,4.2-2.2,4.2-4.9v-11.6c0-2.7-1.9-4.9-4.2-4.9h-0.8
				c-2.3,0-4.2-2.2-4.2-4.9v-11.6c0-2.7,1.9-4.9,4.2-4.9h28.4c2.3,0,4.2,2.2,4.2,4.9v11.6c0,2.7-1.9,4.9-4.2,4.9h-0.8
				c-2.3,0-4.2,2.2-4.2,4.9v11.6c0,2.7,1.9,4.9,4.2,4.9h28.4c2.3,0,4.2-2.2,4.2-4.9v-11.6c0-2.7-1.9-4.9-4.2-4.9h-0.8
				c-2.3,0-4.2-2.2-4.2-4.9v-11.6c0-2.7,1.9-4.9,4.2-4.9h28.4c2.3,0,4.2,2.2,4.2,4.9v11.6c0,2.7-1.9,4.9-4.2,4.9h-0.8
				c-2.3,0-4.2,2.2-4.2,4.9v11.6c0,2.7,1.9,4.9,4.2,4.9h28.4c2.3,0,4.2-2.2,4.2-4.9v-11.6c0-2.7-1.9-4.9-4.2-4.9h-0.8
				c-2.3,0-4.2-2.2-4.2-4.9v-11.6c0-2.7,1.9-4.9,4.2-4.9h28.4c2.3,0,4.2,2.2,4.2,4.9v11.6c0,2.7-1.9,4.9-4.2,4.9h-0.8
				c-2.3,0-4.2,2.2-4.2,4.9v11.6c0,2.7,1.9,4.9,4.2,4.9h31.4h0L1628.9,1086.5L1628.9,1086.5z M1393,591.1h-14.2v-33.3h14.2V591.1z
				 M1623.8,591.1h-14.2v-33.3h14.2V591.1z"/>
			<path fill="#FFFFFF" d="M1497.4,693.4L1497.4,693.4c-7.7,0-13.9-6.2-13.9-13.9V469.3c0-7.7,6.2-13.9,13.9-13.9h0
				c7.7,0,13.9,6.2,13.9,13.9v210.2C1511.2,687.2,1505,693.4,1497.4,693.4z"/>
			<g>
				<g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="206.9" x2="1459.2" y2="206.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="215.4" x2="1459.2" y2="215.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="223.9" x2="1459.2" y2="223.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="232.4" x2="1459.2" y2="232.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="240.9" x2="1459.2" y2="240.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="249.4" x2="1459.2" y2="249.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="257.9" x2="1459.2" y2="257.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="274.9" x2="1459.2" y2="274.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="266.4" x2="1459.2" y2="266.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="291.9" x2="1459.2" y2="291.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="308.9" x2="1459.2" y2="308.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="283.4" x2="1459.2" y2="283.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="300.4" x2="1459.2" y2="300.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="317.4" x2="1459.2" y2="317.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="325.9" x2="1459.2" y2="325.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="334.4" x2="1459.2" y2="334.4"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="206.9" x2="1532.1" y2="206.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="215.4" x2="1532.1" y2="215.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="223.9" x2="1532.1" y2="223.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="232.4" x2="1532.1" y2="232.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="240.9" x2="1532.1" y2="240.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="249.4" x2="1532.1" y2="249.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="257.9" x2="1532.1" y2="257.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="274.9" x2="1532.1" y2="274.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="266.4" x2="1532.1" y2="266.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="291.9" x2="1532.1" y2="291.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="308.9" x2="1532.1" y2="308.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="283.4" x2="1532.1" y2="283.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="300.4" x2="1532.1" y2="300.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="317.4" x2="1532.1" y2="317.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="325.9" x2="1532.1" y2="325.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="334.4" x2="1532.1" y2="334.4"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="206.9" x2="1605.1" y2="206.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="215.4" x2="1605.1" y2="215.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="223.9" x2="1605.1" y2="223.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="232.4" x2="1605.1" y2="232.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="240.9" x2="1605.1" y2="240.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="249.4" x2="1605.1" y2="249.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="257.9" x2="1605.1" y2="257.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="274.9" x2="1605.1" y2="274.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="266.4" x2="1605.1" y2="266.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="291.9" x2="1605.1" y2="291.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="308.9" x2="1605.1" y2="308.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="283.4" x2="1605.1" y2="283.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="300.4" x2="1605.1" y2="300.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="317.4" x2="1605.1" y2="317.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="325.9" x2="1605.1" y2="325.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="334.4" x2="1605.1" y2="334.4"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="211.1" x2="1373.8" y2="211.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="219.6" x2="1373.8" y2="219.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="228.1" x2="1373.8" y2="228.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="236.6" x2="1373.8" y2="236.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="245.2" x2="1373.8" y2="245.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="262.2" x2="1373.8" y2="262.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="253.7" x2="1373.8" y2="253.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="279.2" x2="1373.8" y2="279.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="270.7" x2="1373.8" y2="270.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="287.7" x2="1373.8" y2="287.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="313.2" x2="1373.8" y2="313.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="296.2" x2="1373.8" y2="296.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="304.7" x2="1373.8" y2="304.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="321.7" x2="1373.8" y2="321.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="330.2" x2="1373.8" y2="330.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="338.7" x2="1373.8" y2="338.7"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="211.1" x2="1495.7" y2="211.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="219.6" x2="1495.7" y2="219.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="228.1" x2="1495.7" y2="228.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="236.6" x2="1495.7" y2="236.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="245.2" x2="1495.7" y2="245.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="262.2" x2="1495.7" y2="262.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="253.7" x2="1495.7" y2="253.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="279.2" x2="1495.7" y2="279.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="270.7" x2="1495.7" y2="270.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="287.7" x2="1495.7" y2="287.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="313.2" x2="1495.7" y2="313.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="296.2" x2="1495.7" y2="296.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="304.7" x2="1495.7" y2="304.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="321.7" x2="1495.7" y2="321.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="330.2" x2="1495.7" y2="330.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="338.7" x2="1495.7" y2="338.7"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="211.1" x2="1568.6" y2="211.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="219.6" x2="1568.6" y2="219.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="228.1" x2="1568.6" y2="228.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="236.6" x2="1568.6" y2="236.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="245.2" x2="1568.6" y2="245.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="262.2" x2="1568.6" y2="262.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="253.7" x2="1568.6" y2="253.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="279.2" x2="1568.6" y2="279.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="270.7" x2="1568.6" y2="270.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="287.7" x2="1568.6" y2="287.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="313.2" x2="1568.6" y2="313.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="296.2" x2="1568.6" y2="296.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="304.7" x2="1568.6" y2="304.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="321.7" x2="1568.6" y2="321.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="330.2" x2="1568.6" y2="330.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="338.7" x2="1568.6" y2="338.7"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="211.1" x2="1579.9" y2="211.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="219.6" x2="1579.9" y2="219.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="228.1" x2="1579.9" y2="228.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="236.6" x2="1579.9" y2="236.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="245.2" x2="1579.9" y2="245.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="262.2" x2="1579.9" y2="262.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="253.7" x2="1579.9" y2="253.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="279.2" x2="1579.9" y2="279.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="270.7" x2="1579.9" y2="270.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="287.7" x2="1579.9" y2="287.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="313.2" x2="1579.9" y2="313.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="296.2" x2="1579.9" y2="296.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="304.7" x2="1579.9" y2="304.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="321.7" x2="1579.9" y2="321.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="330.2" x2="1579.9" y2="330.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="338.7" x2="1579.9" y2="338.7"/>
					</g>
				</g>
				<g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="343" x2="1459.2" y2="343"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="351.5" x2="1459.2" y2="351.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="360" x2="1459.2" y2="360"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="368.5" x2="1459.2" y2="368.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="377.1" x2="1459.2" y2="377.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="385.6" x2="1459.2" y2="385.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="394.1" x2="1459.2" y2="394.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="411.1" x2="1459.2" y2="411.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="402.6" x2="1459.2" y2="402.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1397.6" y1="419.6" x2="1459.2" y2="419.6"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="343" x2="1532.1" y2="343"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="351.5" x2="1532.1" y2="351.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="360" x2="1532.1" y2="360"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="368.5" x2="1532.1" y2="368.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="377.1" x2="1532.1" y2="377.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="385.6" x2="1532.1" y2="385.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="394.1" x2="1532.1" y2="394.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="411.1" x2="1532.1" y2="411.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="402.6" x2="1532.1" y2="402.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1470.5" y1="419.6" x2="1532.1" y2="419.6"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="343" x2="1605.1" y2="343"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="351.5" x2="1605.1" y2="351.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="360" x2="1605.1" y2="360"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="368.5" x2="1605.1" y2="368.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="377.1" x2="1605.1" y2="377.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="385.6" x2="1605.1" y2="385.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="394.1" x2="1605.1" y2="394.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="411.1" x2="1605.1" y2="411.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="402.6" x2="1605.1" y2="402.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1543.5" y1="419.6" x2="1605.1" y2="419.6"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="347.3" x2="1373.8" y2="347.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="355.8" x2="1373.8" y2="355.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="364.3" x2="1373.8" y2="364.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="372.8" x2="1373.8" y2="372.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="381.3" x2="1373.8" y2="381.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="398.3" x2="1373.8" y2="398.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="389.8" x2="1373.8" y2="389.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="415.3" x2="1373.8" y2="415.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="406.8" x2="1373.8" y2="406.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="423.8" x2="1373.8" y2="423.8"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="347.3" x2="1495.7" y2="347.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="355.8" x2="1495.7" y2="355.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="364.3" x2="1495.7" y2="364.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="372.8" x2="1495.7" y2="372.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="381.3" x2="1495.7" y2="381.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="398.3" x2="1495.7" y2="398.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="389.8" x2="1495.7" y2="389.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="415.3" x2="1495.7" y2="415.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="406.8" x2="1495.7" y2="406.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1434" y1="423.8" x2="1495.7" y2="423.8"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="347.3" x2="1568.6" y2="347.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="355.8" x2="1568.6" y2="355.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="364.3" x2="1568.6" y2="364.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="372.8" x2="1568.6" y2="372.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="381.3" x2="1568.6" y2="381.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="398.3" x2="1568.6" y2="398.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="389.8" x2="1568.6" y2="389.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="415.3" x2="1568.6" y2="415.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="406.8" x2="1568.6" y2="406.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1507" y1="423.8" x2="1568.6" y2="423.8"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="347.3" x2="1579.9" y2="347.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="355.8" x2="1579.9" y2="355.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="364.3" x2="1579.9" y2="364.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="372.8" x2="1579.9" y2="372.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="381.3" x2="1579.9" y2="381.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="398.3" x2="1579.9" y2="398.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="389.8" x2="1579.9" y2="389.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="415.3" x2="1579.9" y2="415.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="406.8" x2="1579.9" y2="406.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="423.8" x2="1579.9" y2="423.8"/>
					</g>
				</g>
			</g>
			<g>
				<g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="942" x2="1543.5" y2="942"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="933.5" x2="1543.5" y2="933.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="925" x2="1543.5" y2="925"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="916.5" x2="1543.5" y2="916.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="908" x2="1543.5" y2="908"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="899.4" x2="1543.5" y2="899.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="890.9" x2="1543.5" y2="890.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="873.9" x2="1543.5" y2="873.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="882.4" x2="1543.5" y2="882.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="856.9" x2="1543.5" y2="856.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="839.9" x2="1543.5" y2="839.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="865.4" x2="1543.5" y2="865.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="848.4" x2="1543.5" y2="848.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="831.4" x2="1543.5" y2="831.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="822.9" x2="1543.5" y2="822.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="814.4" x2="1543.5" y2="814.4"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="942" x2="1470.5" y2="942"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="933.5" x2="1470.5" y2="933.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="925" x2="1470.5" y2="925"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="916.5" x2="1470.5" y2="916.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="908" x2="1470.5" y2="908"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="899.4" x2="1470.5" y2="899.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="890.9" x2="1470.5" y2="890.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="873.9" x2="1470.5" y2="873.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="882.4" x2="1470.5" y2="882.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="856.9" x2="1470.5" y2="856.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="839.9" x2="1470.5" y2="839.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="865.4" x2="1470.5" y2="865.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="848.4" x2="1470.5" y2="848.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="831.4" x2="1470.5" y2="831.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="822.9" x2="1470.5" y2="822.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="814.4" x2="1470.5" y2="814.4"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="942" x2="1397.6" y2="942"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="933.5" x2="1397.6" y2="933.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="925" x2="1397.6" y2="925"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="916.5" x2="1397.6" y2="916.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="908" x2="1397.6" y2="908"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="899.4" x2="1397.6" y2="899.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="890.9" x2="1397.6" y2="890.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="873.9" x2="1397.6" y2="873.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="882.4" x2="1397.6" y2="882.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="856.9" x2="1397.6" y2="856.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="839.9" x2="1397.6" y2="839.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="865.4" x2="1397.6" y2="865.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="848.4" x2="1397.6" y2="848.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="831.4" x2="1397.6" y2="831.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="822.9" x2="1397.6" y2="822.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="814.4" x2="1397.6" y2="814.4"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="937.7" x2="1580" y2="937.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="929.2" x2="1580" y2="929.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="920.7" x2="1580" y2="920.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="912.2" x2="1580" y2="912.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="903.7" x2="1580" y2="903.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="886.7" x2="1580" y2="886.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="895.2" x2="1580" y2="895.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="869.7" x2="1580" y2="869.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="878.2" x2="1580" y2="878.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="861.2" x2="1580" y2="861.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="835.7" x2="1580" y2="835.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="852.7" x2="1580" y2="852.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="844.2" x2="1580" y2="844.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="827.2" x2="1580" y2="827.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="818.7" x2="1580" y2="818.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="810.2" x2="1580" y2="810.2"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="937.7" x2="1507" y2="937.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="929.2" x2="1507" y2="929.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="920.7" x2="1507" y2="920.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="912.2" x2="1507" y2="912.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="903.7" x2="1507" y2="903.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="886.7" x2="1507" y2="886.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="895.2" x2="1507" y2="895.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="869.7" x2="1507" y2="869.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="878.2" x2="1507" y2="878.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="861.2" x2="1507" y2="861.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="835.7" x2="1507" y2="835.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="852.7" x2="1507" y2="852.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="844.2" x2="1507" y2="844.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="827.2" x2="1507" y2="827.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="818.7" x2="1507" y2="818.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="810.2" x2="1507" y2="810.2"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="937.7" x2="1434" y2="937.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="929.2" x2="1434" y2="929.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="920.7" x2="1434" y2="920.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="912.2" x2="1434" y2="912.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="903.7" x2="1434" y2="903.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="886.7" x2="1434" y2="886.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="895.2" x2="1434" y2="895.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="869.7" x2="1434" y2="869.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="878.2" x2="1434" y2="878.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="861.2" x2="1434" y2="861.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="835.7" x2="1434" y2="835.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="852.7" x2="1434" y2="852.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="844.2" x2="1434" y2="844.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="827.2" x2="1434" y2="827.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="818.7" x2="1434" y2="818.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="810.2" x2="1434" y2="810.2"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="937.7" x2="1373.8" y2="937.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="929.2" x2="1373.8" y2="929.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="920.7" x2="1373.8" y2="920.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="912.2" x2="1373.8" y2="912.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="903.7" x2="1373.8" y2="903.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="886.7" x2="1373.8" y2="886.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="895.2" x2="1373.8" y2="895.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="869.7" x2="1373.8" y2="869.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="878.2" x2="1373.8" y2="878.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="861.2" x2="1373.8" y2="861.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="835.7" x2="1373.8" y2="835.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="852.7" x2="1373.8" y2="852.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="844.2" x2="1373.8" y2="844.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="827.2" x2="1373.8" y2="827.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="818.7" x2="1373.8" y2="818.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="810.2" x2="1373.8" y2="810.2"/>
					</g>
				</g>
				<g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="805.8" x2="1543.5" y2="805.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="797.3" x2="1543.5" y2="797.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="788.8" x2="1543.5" y2="788.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="780.3" x2="1543.5" y2="780.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="771.8" x2="1543.5" y2="771.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="763.3" x2="1543.5" y2="763.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="754.8" x2="1543.5" y2="754.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="737.8" x2="1543.5" y2="737.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="746.3" x2="1543.5" y2="746.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1605.1" y1="729.3" x2="1543.5" y2="729.3"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="805.8" x2="1470.5" y2="805.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="797.3" x2="1470.5" y2="797.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="788.8" x2="1470.5" y2="788.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="780.3" x2="1470.5" y2="780.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="771.8" x2="1470.5" y2="771.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="763.3" x2="1470.5" y2="763.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="754.8" x2="1470.5" y2="754.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="737.8" x2="1470.5" y2="737.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="746.3" x2="1470.5" y2="746.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1532.1" y1="729.3" x2="1470.5" y2="729.3"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="805.8" x2="1397.6" y2="805.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="797.3" x2="1397.6" y2="797.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="788.8" x2="1397.6" y2="788.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="780.3" x2="1397.6" y2="780.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="771.8" x2="1397.6" y2="771.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="763.3" x2="1397.6" y2="763.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="754.8" x2="1397.6" y2="754.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="737.8" x2="1397.6" y2="737.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="746.3" x2="1397.6" y2="746.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1459.2" y1="729.3" x2="1397.6" y2="729.3"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="801.6" x2="1580" y2="801.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="793.1" x2="1580" y2="793.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="784.6" x2="1580" y2="784.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="776.1" x2="1580" y2="776.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="767.5" x2="1580" y2="767.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="750.5" x2="1580" y2="750.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="759" x2="1580" y2="759"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="733.5" x2="1580" y2="733.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="742" x2="1580" y2="742"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1628.9" y1="725" x2="1580" y2="725"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="801.6" x2="1507" y2="801.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="793.1" x2="1507" y2="793.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="784.6" x2="1507" y2="784.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="776.1" x2="1507" y2="776.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="767.5" x2="1507" y2="767.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="750.5" x2="1507" y2="750.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="759" x2="1507" y2="759"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="733.5" x2="1507" y2="733.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="742" x2="1507" y2="742"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1568.6" y1="725" x2="1507" y2="725"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="801.6" x2="1434" y2="801.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="793.1" x2="1434" y2="793.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="784.6" x2="1434" y2="784.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="776.1" x2="1434" y2="776.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="767.5" x2="1434" y2="767.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="750.5" x2="1434" y2="750.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="759" x2="1434" y2="759"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="733.5" x2="1434" y2="733.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="742" x2="1434" y2="742"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1495.7" y1="725" x2="1434" y2="725"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="801.6" x2="1373.8" y2="801.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="793.1" x2="1373.8" y2="793.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="784.6" x2="1373.8" y2="784.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="776.1" x2="1373.8" y2="776.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="767.5" x2="1373.8" y2="767.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="750.5" x2="1373.8" y2="750.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="759" x2="1373.8" y2="759"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="733.5" x2="1373.8" y2="733.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="742" x2="1373.8" y2="742"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1422.7" y1="725" x2="1373.8" y2="725"/>
					</g>
				</g>
			</g>
		</g>
		<g>
			<g>
				<path d="M1890.7,57.3V36.8h-31.4c-2.3,0-4.2,2.2-4.2,4.9v11.6c0,2.7,1.9,4.9,4.2,4.9h0.8c2.3,0,4.2,2.2,4.2,4.9v11.6
					c0,2.7-1.9,4.9-4.2,4.9h-28.4c-2.3,0-4.2-2.2-4.2-4.9V63.2c0-2.7,1.9-4.9,4.2-4.9h0.8c2.3,0,4.2-2.2,4.2-4.9V41.7
					c0-2.7-1.9-4.9-4.2-4.9h-28.4c-2.3,0-4.2,2.2-4.2,4.9v11.6c0,2.7,1.9,4.9,4.2,4.9h0.8c2.3,0,4.2,2.2,4.2,4.9v11.6
					c0,2.7-1.9,4.9-4.2,4.9h-28.4c-2.3,0-4.2-2.2-4.2-4.9V63.2c0-2.7,1.9-4.9,4.2-4.9h0.8c2.3,0,4.2-2.2,4.2-4.9V41.7
					c0-2.7-1.9-4.9-4.2-4.9h-28.4c-2.3,0-4.2,2.2-4.2,4.9v11.6c0,2.7,1.9,4.9,4.2,4.9h0.8c2.3,0,4.2,2.2,4.2,4.9v11.6
					c0,2.7-1.9,4.9-4.2,4.9h-28.4c-2.3,0-4.2-2.2-4.2-4.9V63.2c0-2.7,1.9-4.9,4.2-4.9h0.8c2.3,0,4.2-2.2,4.2-4.9V41.7
					c0-2.7-1.9-4.9-4.2-4.9h-28.4c-2.3,0-4.2,2.2-4.2,4.9v11.6c0,2.7,1.9,4.9,4.2,4.9h0.8c2.3,0,4.2,2.2,4.2,4.9v11.6
					c0,2.7-1.9,4.9-4.2,4.9h-28.4c-2.3,0-4.2-2.2-4.2-4.9V63.2c0-2.7,1.9-4.9,4.2-4.9h0.8c2.3,0,4.2-2.2,4.2-4.9V41.7
					c0-2.7-1.9-4.9-4.2-4.9h-31.4h0v14.9h0v486.5h0v91.6h0v442.9h0h31.4c2.3,0,4.2,2.2,4.2,4.9v11.6c0,2.7-1.9,4.9-4.2,4.9h-0.8
					c-2.3,0-4.2,2.2-4.2,4.9v11.6c0,2.7,1.9,4.9,4.2,4.9h28.4c2.3,0,4.2-2.2,4.2-4.9v-11.6c0-2.7-1.9-4.9-4.2-4.9h-0.8
					c-2.3,0-4.2-2.2-4.2-4.9v-11.6c0-2.7,1.9-4.9,4.2-4.9h28.4c2.3,0,4.2,2.2,4.2,4.9v11.6c0,2.7-1.9,4.9-4.2,4.9h-0.8
					c-2.3,0-4.2,2.2-4.2,4.9v11.6c0,2.7,1.9,4.9,4.2,4.9h28.4c2.3,0,4.2-2.2,4.2-4.9v-11.6c0-2.7-1.9-4.9-4.2-4.9h-0.8
					c-2.3,0-4.2-2.2-4.2-4.9v-11.6c0-2.7,1.9-4.9,4.2-4.9h28.4c2.3,0,4.2,2.2,4.2,4.9v11.6c0,2.7-1.9,4.9-4.2,4.9h-0.8
					c-2.3,0-4.2,2.2-4.2,4.9v11.6c0,2.7,1.9,4.9,4.2,4.9h28.4c2.3,0,4.2-2.2,4.2-4.9v-11.6c0-2.7-1.9-4.9-4.2-4.9h-0.8
					c-2.3,0-4.2-2.2-4.2-4.9v-11.6c0-2.7,1.9-4.9,4.2-4.9h28.4c2.3,0,4.2,2.2,4.2,4.9v11.6c0,2.7-1.9,4.9-4.2,4.9h-0.8
					c-2.3,0-4.2,2.2-4.2,4.9v11.6c0,2.7,1.9,4.9,4.2,4.9h28.4c2.3,0,4.2-2.2,4.2-4.9v-11.6c0-2.7-1.9-4.9-4.2-4.9h-0.8
					c-2.3,0-4.2-2.2-4.2-4.9v-11.6c0-2.7,1.9-4.9,4.2-4.9h31.4V629.7h0v-91.6h0L1890.7,57.3L1890.7,57.3z"/>
				
					<rect x="1640.6" y="87" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 3295.4517 207.3101)" fill="#FFFFFF" width="14.2" height="33.3"/>
				
					<rect x="1871.4" y="87" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 3757.0015 207.3101)" fill="#FFFFFF" width="14.2" height="33.3"/>
				
					<rect x="1640.6" y="516.9" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 3295.4517 1060.4421)" fill="#FFFFFF" width="14.2" height="26.6"/>
				
					<rect x="1871.4" y="516.9" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 3757.0015 1060.4421)" fill="#FFFFFF" width="14.2" height="26.6"/>
				
					<rect x="1640.6" y="604.8" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 3295.4517 1236.2197)" fill="#FFFFFF" width="14.2" height="26.6"/>
				
					<rect x="1871.4" y="604.8" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 3757.0015 1236.2197)" fill="#FFFFFF" width="14.2" height="26.6"/>
				
					<rect x="1640.6" y="1032.1" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 3295.4517 2097.5376)" fill="#FFFFFF" width="14.2" height="33.3"/>
				
					<rect x="1871.4" y="1032.1" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 3757.0015 2097.5376)" fill="#FFFFFF" width="14.2" height="33.3"/>
			</g>
			<g>
				<g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="206.9" x2="1721" y2="206.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="215.4" x2="1721" y2="215.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="223.9" x2="1721" y2="223.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="232.4" x2="1721" y2="232.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="240.9" x2="1721" y2="240.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="249.4" x2="1721" y2="249.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="257.9" x2="1721" y2="257.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="274.9" x2="1721" y2="274.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="266.4" x2="1721" y2="266.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="291.9" x2="1721" y2="291.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="308.9" x2="1721" y2="308.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="283.4" x2="1721" y2="283.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="300.4" x2="1721" y2="300.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="317.4" x2="1721" y2="317.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="325.9" x2="1721" y2="325.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="334.4" x2="1721" y2="334.4"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="206.9" x2="1793.9" y2="206.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="215.4" x2="1793.9" y2="215.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="223.9" x2="1793.9" y2="223.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="232.4" x2="1793.9" y2="232.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="240.9" x2="1793.9" y2="240.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="249.4" x2="1793.9" y2="249.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="257.9" x2="1793.9" y2="257.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="274.9" x2="1793.9" y2="274.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="266.4" x2="1793.9" y2="266.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="291.9" x2="1793.9" y2="291.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="308.9" x2="1793.9" y2="308.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="283.4" x2="1793.9" y2="283.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="300.4" x2="1793.9" y2="300.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="317.4" x2="1793.9" y2="317.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="325.9" x2="1793.9" y2="325.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="334.4" x2="1793.9" y2="334.4"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="206.9" x2="1866.9" y2="206.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="215.4" x2="1866.9" y2="215.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="223.9" x2="1866.9" y2="223.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="232.4" x2="1866.9" y2="232.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="240.9" x2="1866.9" y2="240.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="249.4" x2="1866.9" y2="249.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="257.9" x2="1866.9" y2="257.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="274.9" x2="1866.9" y2="274.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="266.4" x2="1866.9" y2="266.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="291.9" x2="1866.9" y2="291.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="308.9" x2="1866.9" y2="308.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="283.4" x2="1866.9" y2="283.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="300.4" x2="1866.9" y2="300.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="317.4" x2="1866.9" y2="317.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="325.9" x2="1866.9" y2="325.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="334.4" x2="1866.9" y2="334.4"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="211.1" x2="1635.6" y2="211.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="219.6" x2="1635.6" y2="219.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="228.1" x2="1635.6" y2="228.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="236.6" x2="1635.6" y2="236.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="245.2" x2="1635.6" y2="245.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="262.2" x2="1635.6" y2="262.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="253.7" x2="1635.6" y2="253.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="279.2" x2="1635.6" y2="279.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="270.7" x2="1635.6" y2="270.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="287.7" x2="1635.6" y2="287.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="313.2" x2="1635.6" y2="313.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="296.2" x2="1635.6" y2="296.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="304.7" x2="1635.6" y2="304.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="321.7" x2="1635.6" y2="321.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="330.2" x2="1635.6" y2="330.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="338.7" x2="1635.6" y2="338.7"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="211.1" x2="1757.4" y2="211.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="219.6" x2="1757.4" y2="219.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="228.1" x2="1757.4" y2="228.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="236.6" x2="1757.4" y2="236.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="245.2" x2="1757.4" y2="245.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="262.2" x2="1757.4" y2="262.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="253.7" x2="1757.4" y2="253.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="279.2" x2="1757.4" y2="279.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="270.7" x2="1757.4" y2="270.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="287.7" x2="1757.4" y2="287.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="313.2" x2="1757.4" y2="313.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="296.2" x2="1757.4" y2="296.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="304.7" x2="1757.4" y2="304.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="321.7" x2="1757.4" y2="321.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="330.2" x2="1757.4" y2="330.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="338.7" x2="1757.4" y2="338.7"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="211.1" x2="1830.4" y2="211.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="219.6" x2="1830.4" y2="219.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="228.1" x2="1830.4" y2="228.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="236.6" x2="1830.4" y2="236.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="245.2" x2="1830.4" y2="245.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="262.2" x2="1830.4" y2="262.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="253.7" x2="1830.4" y2="253.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="279.2" x2="1830.4" y2="279.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="270.7" x2="1830.4" y2="270.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="287.7" x2="1830.4" y2="287.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="313.2" x2="1830.4" y2="313.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="296.2" x2="1830.4" y2="296.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="304.7" x2="1830.4" y2="304.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="321.7" x2="1830.4" y2="321.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="330.2" x2="1830.4" y2="330.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="338.7" x2="1830.4" y2="338.7"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="211.1" x2="1841.7" y2="211.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="219.6" x2="1841.7" y2="219.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="228.1" x2="1841.7" y2="228.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="236.6" x2="1841.7" y2="236.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="245.2" x2="1841.7" y2="245.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="262.2" x2="1841.7" y2="262.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="253.7" x2="1841.7" y2="253.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="279.2" x2="1841.7" y2="279.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="270.7" x2="1841.7" y2="270.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="287.7" x2="1841.7" y2="287.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="313.2" x2="1841.7" y2="313.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="296.2" x2="1841.7" y2="296.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="304.7" x2="1841.7" y2="304.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="321.7" x2="1841.7" y2="321.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="330.2" x2="1841.7" y2="330.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="338.7" x2="1841.7" y2="338.7"/>
					</g>
				</g>
				<g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="343" x2="1721" y2="343"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="351.5" x2="1721" y2="351.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="360" x2="1721" y2="360"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="368.5" x2="1721" y2="368.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="377.1" x2="1721" y2="377.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="385.6" x2="1721" y2="385.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="394.1" x2="1721" y2="394.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="411.1" x2="1721" y2="411.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="402.6" x2="1721" y2="402.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1659.4" y1="419.6" x2="1721" y2="419.6"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="343" x2="1793.9" y2="343"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="351.5" x2="1793.9" y2="351.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="360" x2="1793.9" y2="360"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="368.5" x2="1793.9" y2="368.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="377.1" x2="1793.9" y2="377.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="385.6" x2="1793.9" y2="385.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="394.1" x2="1793.9" y2="394.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="411.1" x2="1793.9" y2="411.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="402.6" x2="1793.9" y2="402.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1732.3" y1="419.6" x2="1793.9" y2="419.6"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="343" x2="1866.9" y2="343"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="351.5" x2="1866.9" y2="351.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="360" x2="1866.9" y2="360"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="368.5" x2="1866.9" y2="368.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="377.1" x2="1866.9" y2="377.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="385.6" x2="1866.9" y2="385.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="394.1" x2="1866.9" y2="394.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="411.1" x2="1866.9" y2="411.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="402.6" x2="1866.9" y2="402.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1805.3" y1="419.6" x2="1866.9" y2="419.6"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="347.3" x2="1635.6" y2="347.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="355.8" x2="1635.6" y2="355.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="364.3" x2="1635.6" y2="364.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="372.8" x2="1635.6" y2="372.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="381.3" x2="1635.6" y2="381.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="398.3" x2="1635.6" y2="398.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="389.8" x2="1635.6" y2="389.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="415.3" x2="1635.6" y2="415.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="406.8" x2="1635.6" y2="406.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="423.8" x2="1635.6" y2="423.8"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="347.3" x2="1757.4" y2="347.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="355.8" x2="1757.4" y2="355.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="364.3" x2="1757.4" y2="364.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="372.8" x2="1757.4" y2="372.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="381.3" x2="1757.4" y2="381.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="398.3" x2="1757.4" y2="398.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="389.8" x2="1757.4" y2="389.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="415.3" x2="1757.4" y2="415.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="406.8" x2="1757.4" y2="406.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1695.8" y1="423.8" x2="1757.4" y2="423.8"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="347.3" x2="1830.4" y2="347.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="355.8" x2="1830.4" y2="355.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="364.3" x2="1830.4" y2="364.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="372.8" x2="1830.4" y2="372.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="381.3" x2="1830.4" y2="381.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="398.3" x2="1830.4" y2="398.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="389.8" x2="1830.4" y2="389.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="415.3" x2="1830.4" y2="415.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="406.8" x2="1830.4" y2="406.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1768.8" y1="423.8" x2="1830.4" y2="423.8"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="347.3" x2="1841.7" y2="347.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="355.8" x2="1841.7" y2="355.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="364.3" x2="1841.7" y2="364.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="372.8" x2="1841.7" y2="372.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="381.3" x2="1841.7" y2="381.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="398.3" x2="1841.7" y2="398.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="389.8" x2="1841.7" y2="389.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="415.3" x2="1841.7" y2="415.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="406.8" x2="1841.7" y2="406.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="423.8" x2="1841.7" y2="423.8"/>
					</g>
				</g>
			</g>
			<g>
				<g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="942" x2="1805.3" y2="942"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="933.5" x2="1805.3" y2="933.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="925" x2="1805.3" y2="925"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="916.5" x2="1805.3" y2="916.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="908" x2="1805.3" y2="908"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="899.4" x2="1805.3" y2="899.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="890.9" x2="1805.3" y2="890.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="873.9" x2="1805.3" y2="873.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="882.4" x2="1805.3" y2="882.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="856.9" x2="1805.3" y2="856.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="839.9" x2="1805.3" y2="839.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="865.4" x2="1805.3" y2="865.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="848.4" x2="1805.3" y2="848.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="831.4" x2="1805.3" y2="831.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="822.9" x2="1805.3" y2="822.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="814.4" x2="1805.3" y2="814.4"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="942" x2="1732.3" y2="942"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="933.5" x2="1732.3" y2="933.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="925" x2="1732.3" y2="925"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="916.5" x2="1732.3" y2="916.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="908" x2="1732.3" y2="908"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="899.4" x2="1732.3" y2="899.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="890.9" x2="1732.3" y2="890.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="873.9" x2="1732.3" y2="873.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="882.4" x2="1732.3" y2="882.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="856.9" x2="1732.3" y2="856.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="839.9" x2="1732.3" y2="839.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="865.4" x2="1732.3" y2="865.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="848.4" x2="1732.3" y2="848.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="831.4" x2="1732.3" y2="831.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="822.9" x2="1732.3" y2="822.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="814.4" x2="1732.3" y2="814.4"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="942" x2="1659.4" y2="942"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="933.5" x2="1659.4" y2="933.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="925" x2="1659.4" y2="925"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="916.5" x2="1659.4" y2="916.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="908" x2="1659.4" y2="908"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="899.4" x2="1659.4" y2="899.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="890.9" x2="1659.4" y2="890.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="873.9" x2="1659.4" y2="873.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="882.4" x2="1659.4" y2="882.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="856.9" x2="1659.4" y2="856.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="839.9" x2="1659.4" y2="839.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="865.4" x2="1659.4" y2="865.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="848.4" x2="1659.4" y2="848.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="831.4" x2="1659.4" y2="831.4"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="822.9" x2="1659.4" y2="822.9"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="814.4" x2="1659.4" y2="814.4"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="937.7" x2="1841.7" y2="937.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="929.2" x2="1841.7" y2="929.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="920.7" x2="1841.7" y2="920.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="912.2" x2="1841.7" y2="912.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="903.7" x2="1841.7" y2="903.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="886.7" x2="1841.7" y2="886.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="895.2" x2="1841.7" y2="895.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="869.7" x2="1841.7" y2="869.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="878.2" x2="1841.7" y2="878.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="861.2" x2="1841.7" y2="861.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="835.7" x2="1841.7" y2="835.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="852.7" x2="1841.7" y2="852.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="844.2" x2="1841.7" y2="844.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="827.2" x2="1841.7" y2="827.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="818.7" x2="1841.7" y2="818.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="810.2" x2="1841.7" y2="810.2"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="937.7" x2="1768.8" y2="937.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="929.2" x2="1768.8" y2="929.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="920.7" x2="1768.8" y2="920.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="912.2" x2="1768.8" y2="912.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="903.7" x2="1768.8" y2="903.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="886.7" x2="1768.8" y2="886.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="895.2" x2="1768.8" y2="895.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="869.7" x2="1768.8" y2="869.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="878.2" x2="1768.8" y2="878.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="861.2" x2="1768.8" y2="861.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="835.7" x2="1768.8" y2="835.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="852.7" x2="1768.8" y2="852.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="844.2" x2="1768.8" y2="844.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="827.2" x2="1768.8" y2="827.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="818.7" x2="1768.8" y2="818.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="810.2" x2="1768.8" y2="810.2"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="937.7" x2="1695.8" y2="937.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="929.2" x2="1695.8" y2="929.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="920.7" x2="1695.8" y2="920.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="912.2" x2="1695.8" y2="912.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="903.7" x2="1695.8" y2="903.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="886.7" x2="1695.8" y2="886.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="895.2" x2="1695.8" y2="895.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="869.7" x2="1695.8" y2="869.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="878.2" x2="1695.8" y2="878.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="861.2" x2="1695.8" y2="861.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="835.7" x2="1695.8" y2="835.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="852.7" x2="1695.8" y2="852.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="844.2" x2="1695.8" y2="844.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="827.2" x2="1695.8" y2="827.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="818.7" x2="1695.8" y2="818.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="810.2" x2="1695.8" y2="810.2"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="937.7" x2="1635.6" y2="937.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="929.2" x2="1635.6" y2="929.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="920.7" x2="1635.6" y2="920.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="912.2" x2="1635.6" y2="912.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="903.7" x2="1635.6" y2="903.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="886.7" x2="1635.6" y2="886.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="895.2" x2="1635.6" y2="895.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="869.7" x2="1635.6" y2="869.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="878.2" x2="1635.6" y2="878.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="861.2" x2="1635.6" y2="861.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="835.7" x2="1635.6" y2="835.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="852.7" x2="1635.6" y2="852.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="844.2" x2="1635.6" y2="844.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="827.2" x2="1635.6" y2="827.2"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="818.7" x2="1635.6" y2="818.7"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="810.2" x2="1635.6" y2="810.2"/>
					</g>
				</g>
				<g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="805.8" x2="1805.3" y2="805.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="797.3" x2="1805.3" y2="797.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="788.8" x2="1805.3" y2="788.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="780.3" x2="1805.3" y2="780.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="771.8" x2="1805.3" y2="771.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="763.3" x2="1805.3" y2="763.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="754.8" x2="1805.3" y2="754.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="737.8" x2="1805.3" y2="737.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="746.3" x2="1805.3" y2="746.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1866.9" y1="729.3" x2="1805.3" y2="729.3"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="805.8" x2="1732.3" y2="805.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="797.3" x2="1732.3" y2="797.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="788.8" x2="1732.3" y2="788.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="780.3" x2="1732.3" y2="780.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="771.8" x2="1732.3" y2="771.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="763.3" x2="1732.3" y2="763.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="754.8" x2="1732.3" y2="754.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="737.8" x2="1732.3" y2="737.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="746.3" x2="1732.3" y2="746.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1793.9" y1="729.3" x2="1732.3" y2="729.3"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="805.8" x2="1659.4" y2="805.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="797.3" x2="1659.4" y2="797.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="788.8" x2="1659.4" y2="788.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="780.3" x2="1659.4" y2="780.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="771.8" x2="1659.4" y2="771.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="763.3" x2="1659.4" y2="763.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="754.8" x2="1659.4" y2="754.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="737.8" x2="1659.4" y2="737.8"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="746.3" x2="1659.4" y2="746.3"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1721" y1="729.3" x2="1659.4" y2="729.3"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="801.6" x2="1841.7" y2="801.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="793.1" x2="1841.7" y2="793.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="784.6" x2="1841.7" y2="784.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="776.1" x2="1841.7" y2="776.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="767.5" x2="1841.7" y2="767.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="750.5" x2="1841.7" y2="750.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="759" x2="1841.7" y2="759"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="733.5" x2="1841.7" y2="733.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1890.7" y1="742" x2="1841.7" y2="742"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="801.6" x2="1768.8" y2="801.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="793.1" x2="1768.8" y2="793.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="784.6" x2="1768.8" y2="784.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="776.1" x2="1768.8" y2="776.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="767.5" x2="1768.8" y2="767.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="750.5" x2="1768.8" y2="750.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="759" x2="1768.8" y2="759"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="733.5" x2="1768.8" y2="733.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1830.4" y1="742" x2="1768.8" y2="742"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="801.6" x2="1695.8" y2="801.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="793.1" x2="1695.8" y2="793.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="784.6" x2="1695.8" y2="784.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="776.1" x2="1695.8" y2="776.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="767.5" x2="1695.8" y2="767.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="750.5" x2="1695.8" y2="750.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="759" x2="1695.8" y2="759"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="733.5" x2="1695.8" y2="733.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1757.4" y1="742" x2="1695.8" y2="742"/>
					</g>
					<g>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="801.6" x2="1635.6" y2="801.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="793.1" x2="1635.6" y2="793.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="784.6" x2="1635.6" y2="784.6"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="776.1" x2="1635.6" y2="776.1"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="767.5" x2="1635.6" y2="767.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="750.5" x2="1635.6" y2="750.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="759" x2="1635.6" y2="759"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="733.5" x2="1635.6" y2="733.5"/>
						
							<line fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#FFFFFF" stroke-linejoin="bevel" stroke-miterlimit="22.9256" x1="1684.5" y1="742" x2="1635.6" y2="742"/>
					</g>
				</g>
			</g>
		</g>
		<g>
			<rect x="1609.6" y="1032.1" fill="#FFFFFF" width="14.2" height="33.3"/>
			<rect x="1378.8" y="1032.1" fill="#FFFFFF" width="14.2" height="33.3"/>
		</g>
	</g>
	<g>
		<rect x="1609.6" y="87" fill="#FFFFFF" width="14.2" height="33.3"/>
		<rect x="1378.8" y="87" fill="#FFFFFF" width="14.2" height="33.3"/>
	</g>
</g>

${customText}
</svg>`;
};
