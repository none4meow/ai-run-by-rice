export const param = {
  W: 75,
  H: 75,
};

export const tag = (x, y, text) => {
  let fontSize = 23;

  const textLength = text.length;

  if (textLength === 7) fontSize -= 1;
  else if (textLength === 8) fontSize -= 2;
  else if (textLength >= 9) fontSize -= 3;

  return `	
<g transform="translate(${x},${y})">
	<path fill="#EACCA7" stroke="#D300FF" stroke-width="0.25" stroke-miterlimit="10" d="M48.3,2.5c1.6-1.6,4.1-2,6.1-0.8
		C56.8,3.1,59.2,5,61.5,7c6.3,5.4,12.5,13.8,12.9,21c0.6,10.6-1.8,20.6-9.2,29.3c-9,10.4-21.9,15.6-34.4,12.6
		c-5.4-1.3-11.8-3.8-15.9-9C9,53.4,2.8,47.3,1.6,38.8c-1.2-9,3-20.5,9.6-28.2c2.1-2.4,4.3-4.4,6.7-6.1c1.4-1,3.2-1.1,4.8-0.3
		c3.2,1.7,9.3,4.2,14.3,2.7C42.8,5.2,45.3,5.4,48.3,2.5z"/>
	<g>
		<path stroke="#00FF24" stroke-width="0.25" stroke-miterlimit="10" d="M49.5,53c2.4,2.1,0.9,5-1.2,7.4c-2.1,2.4-3.9,3.4-6.4,1.3
			c-2.4-2.1-2.7-5.7-0.6-8.1C43.4,51.2,46.2,50.1,49.5,53z"/>
		<path stroke="#00FF24" stroke-width="0.25" stroke-miterlimit="10" d="M28.2,20.5c-1.1,3.1-4.5,2.7-7.5,1.6
			c-3.1-1.1-4.7-2.5-3.6-5.6c1.1-3.1,4.5-4.7,7.6-3.6S29.7,16.2,28.2,20.5z"/>
		<path stroke="#00FF24" stroke-width="0.25" stroke-miterlimit="10" d="M46.2,10.1c2.3-1.8,5.4-1,6.7,0.8c1.4,1.8,0.5,3.8-1.8,5.6
			c-2.3,1.8-5.2,1.8-6.6,0C43.2,14.7,43.1,12.5,46.2,10.1z"/>
		<path stroke="#00FF24" stroke-width="0.25" stroke-miterlimit="10" d="M24.2,53.6c2.2,1.1,2.6,3.8,1.7,5.5
			c-0.9,1.7-2.7,1.7-4.9,0.6c-2.2-1.1-3.2-3.4-2.3-5.1C19.6,52.9,21.3,52.1,24.2,53.6z"/>
		<path stroke="#00FF24" stroke-width="0.25" stroke-miterlimit="10" d="M62,43c2.1-2,5.3-1.5,6.9,0.1s0.9,3.8-1.2,5.8
			s-5.1,2.4-6.7,0.7S59.1,45.8,62,43z"/>
	</g>
</g>

<g transform="translate(${x},${y}) matrix(0.9611 -0.2763 0.2763 0.9611 30.4474 44.238)">
	<text stroke="#002BFF" stroke-width="0.25" stroke-miterlimit="10" 
		font-family="'AmaticSC-Bold'" font-size="${fontSize}" letter-spacing="0.1">
		${text}
	</text>
</g>
`;
};
