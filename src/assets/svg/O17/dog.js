export const param = {
  W: 90,
  H: 50,
};

export const tag = (x, y, text) => {
  let fontSize = 26;

  //   const textLength = text.length;

  //   if (textLength === 6) fontSize -= 1;
  //   else if (textLength === 7) fontSize -= 2;
  //   else if (textLength === 8) fontSize -= 3;
  //   else if (textLength === 9) fontSize -= 4;
  //   else if (textLength === 10) fontSize -= 5;
  //   else if (textLength >= 11) fontSize -= 6;

  return `
<g transform="translate(${x},${y})">
	<path fill="#EACCA7" stroke="#D300FF" stroke-width="0.25" stroke-miterlimit="10" d="M91.6,32.6c0,3.5-1.4,7-4,9.4
		c-2.4,2.3-5.4,3.5-8.6,3.5c-0.1,0-0.3,0-0.4,0c-4.6-0.1-7.4-2.6-9.1-4.4c-0.3-0.3-0.6-0.7-0.9-1c-1-1.2-1.9-2.3-3.4-2.3l-11.4,0
		c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0l-26,0c-1.5,0-2.4,1.1-3.4,2.3c-0.3,0.3-0.6,0.7-0.8,1c-1.7,1.8-4.5,4.3-9.1,4.4
		c-0.1,0-0.3,0-0.4,0c-3.2,0-6.2-1.2-8.6-3.5c-2.5-2.4-4-5.9-4-9.4c0-3.6,1.5-7,4.1-9.4c-2.6-2.4-4.1-5.8-4.1-9.4c0-3.5,1.4-7,4-9.4
		c2.4-2.4,5.6-3.6,9-3.5c4.6,0.1,7.4,2.6,9.1,4.4c0.3,0.3,0.6,0.7,0.9,1c1,1.2,1.9,2.3,3.4,2.3l26,0c0,0,0.1,0,0.1,0
		c0,0,0.1,0,0.1,0l11.4,0c1.5,0,2.4-1.1,3.4-2.3c0.3-0.3,0.6-0.7,0.8-1c1.7-1.8,4.5-4.3,9.1-4.4c3.3-0.1,6.5,1.1,9,3.5
		c2.5,2.4,4,5.9,4,9.4c0,3.6-1.5,7-4.1,9.4C90.1,25.6,91.6,29,91.6,32.6z"/>
	<g>
		<path stroke="#00FF24" stroke-width="0.25" stroke-miterlimit="10" d="M17.2,32.6c1,1.5,0.7,4.3-0.8,5.3c-1.5,1-3.6-0.2-4.6-1.7
			c-1-1.5-0.6-3.5,0.9-4.5C14.3,30.7,15.9,30.5,17.2,32.6z"/>
		<path stroke="#00FF24" stroke-width="0.25" stroke-miterlimit="10" d="M82.9,6.3c0.9,1.4-0.3,2.6-1.6,3.4
			c-1.4,0.9-2.4,1.1-3.3-0.2c-0.9-1.4-0.5-3.2,0.8-4.1C80.2,4.6,81.7,4.4,82.9,6.3z"/>
		<path stroke="#00FF24" stroke-width="0.25" stroke-miterlimit="10" d="M87.1,28.4c0.5,0.8-0.2,1.5-1,2.1c-0.8,0.5-1.4,0.7-2-0.1
			c-0.5-0.8-0.3-1.9,0.5-2.4S86.4,27.2,87.1,28.4z"/>
		<path stroke="#00FF24" stroke-width="0.25" stroke-miterlimit="10" d="M10.5,17.2c-0.7,0.9-1.8,0.5-2.7-0.2
			c-0.9-0.7-1.3-1.3-0.7-2.2c0.7-0.9,2-1.1,2.9-0.5C11,15,11.5,15.9,10.5,17.2z"/>
		<path stroke="#00FF24" stroke-width="0.25" stroke-miterlimit="10" d="M79.1,33.8c2.2-0.9,4.5,0.5,5.2,2.2c0.7,1.7-0.5,3.1-2.7,4
			c-2.2,0.9-4.6,0.2-5.3-1.5C75.6,36.8,76,35,79.1,33.8z"/>
		<path stroke="#00FF24" stroke-width="0.25" stroke-miterlimit="10" d="M8,27.7c0.9,0.1,1.4,1.4,1.2,2.4c-0.2,1-0.9,1.4-1.8,1.2
			c-0.9-0.1-1.6-1.1-1.4-2.1C6.2,28.3,6.7,27.5,8,27.7z"/>
		<path stroke="#00FF24" stroke-width="0.25" stroke-miterlimit="10" d="M21.2,8.6c0.6,0.6,0.3,1.7-0.3,2.3c-0.6,0.6-1.3,0.6-1.9,0
			c-0.6-0.6-0.6-1.5,0-2.2C19.6,8.1,20.4,7.9,21.2,8.6z"/>
		<path stroke="#00FF24" stroke-width="0.25" stroke-miterlimit="10" d="M11.1,6.7c1.7-0.9,3.7,0,4.4,1.3s-0.1,2.6-1.8,3.5
			c-1.7,0.9-3.7,0.6-4.4-0.7S8.8,8,11.1,6.7z"/>
	</g>
</g>
<g transform="translate(${x},${y}) matrix(1 -1.623821e-03 1.623821e-03 1 32.2088 32.6316)">
  <text stroke="#002BFF" stroke-width="0.25" stroke-miterlimit="10" font-family="'AmaticSC-Bold'" 
    font-size="${fontSize}" letter-spacing="0.1">
    ${text} 
  </text>
</g>
`;
};
