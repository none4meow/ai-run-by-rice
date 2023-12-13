export const param = {
  W: 70,
  H: 93,
};

export const tag = (x, y, text) => {
  let fontSize = 20.2;

  const textLength = text.length;

  if (textLength === 5) fontSize -= 1;
  if (textLength === 6) fontSize -= 3;
  else if (textLength === 7) fontSize -= 4;
  else if (textLength === 8) fontSize -= 5;
  else if (textLength >= 9) fontSize -= 6;

  return `
<g transform="translate(${x},${y})">
	<path fill="#E2D6C7" stroke="#FFB000" stroke-width="0.25" stroke-miterlimit="10" d="M69.2,31.9c-2.2-5.7-7.8-3.5-7.8-3.5
		c-8.1,3.7-13.4,1.5-14.7,0.7c2.6-3,4.2-6.9,4.2-11.3c0-9.2-7-16.6-15.7-16.6S19.5,8.6,19.5,17.8c0,4.4,1.6,8.4,4.3,11.4
		c-1.2,0.7-6.5,3.2-14.8-0.7c0,0-5.6-2.2-7.8,3.5c0,0-1.8,5,3.2,8.7c0,0,6.2,3.8,12.6,4.1c0,0,4-0.1,3.6,5.9c0,0,0.3,16.1-5.5,23.2
		c0,0-6.5,8.6-5.3,12.1c0,0,1,4.8,6.8,5c0,0,5,1.3,9.5-5c0,0,7.4-12.8,8.9-17.5c1.1,4.1,9,17.4,9,17.4c4.5,6.3,9.5,5,9.5,5
		c5.8-0.3,6.8-5,6.8-5c1.2-3.5-5.3-12.1-5.3-12.1c-5.7-7.1-5.5-23.2-5.5-23.2c-0.3-6,3.6-5.9,3.6-5.9c6.4-0.3,12.6-4.1,12.6-4.1
		C71,36.9,69.2,31.9,69.2,31.9z"/>
	<g>
		<path stroke="#3F33D3" stroke-width="0.25" stroke-miterlimit="10" d="M30.9,15.8c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8
			s1.8,0.8,1.8,1.8C32.7,15,31.9,15.8,30.9,15.8z"/>
		<path stroke="#3F33D3" stroke-width="0.25" stroke-miterlimit="10" d="M40.2,15.8c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8
			c1,0,1.8,0.8,1.8,1.8C42,15,41.2,15.8,40.2,15.8z"/>
		<path stroke="#3F33D3" stroke-width="0.25" stroke-miterlimit="10" d="M40,19.2c-0.6,2-2.3,3.2-4.3,3.2c-2.1,0-3.7-1.3-4.3-3.2
			c0-0.2,0-0.3,0.2-0.4c0.2,0,0.3,0,0.4,0.2c0.5,1.7,2,2.8,3.8,2.8c1.8,0,3.3-1.1,3.8-2.8c0-0.2,0.2-0.2,0.4-0.2
			C39.9,18.9,40,19,40,19.2z"/>
	</g>
</g>

<g transform="translate(${x},${y}) matrix(0.3751 0.927 -0.927 0.3751 26.197 42.8842)">
	<text text-anchor="start" font-family="'RollerSkates-Regular'" stroke="#00FF1E" stroke-width="0.25" stroke-miterlimit="10"
		font-size="${fontSize}" letter-spacing="0.6">
		${text}
	</text>
</g>
  `;
};
