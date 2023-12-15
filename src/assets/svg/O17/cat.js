export const param = {
  W: 86,
  H: 50,
};

export const tag = (x, y, text) => {
  let fontSize = 26;

  const textLength = text.length;

  //   if (textLength === 6) fontSize -= 1;
  //   else if (textLength === 7) fontSize -= 2;
  //   else if (textLength === 8) fontSize -= 3;
  //   else if (textLength >= 9) fontSize -= 4;

  return `
<g transform="translate(${x},${y})">
	<path fill="#EACCA7" stroke="#D300FF" stroke-width="0.27" stroke-miterlimit="10" d="M86.6,28.1c0.2-4.9-0.4-9.7-1.8-14.3
		c-0.1-0.3-0.5-0.6-0.8-0.4c-5,2.9-10,5.8-15,8.7c0,0-0.1,0-0.1,0c-5.6-7.3-16.8-19-30.6-20.2C23.6,0.7,10.1,11.6,3.6,17.8
		c-2.4,2.3-2.7,6-0.7,8.6c5.3,7.1,16.9,20.1,31.5,21.3c13.8,1.1,26.6-8.5,33.4-14.8c0.9,0.2,2.1,1.4,2.7,1.9c2.3,1.7,4.6,3.3,6.9,5
		c1.9,1.4,4.8,4.1,6.5,1C86.1,37.4,86.5,32,86.6,28.1z"/>
	<g>
		<path stroke="#00FF24" stroke-width="0.27" stroke-miterlimit="10" d="M11.8,20c-0.9,1.2-3.2,1.7-4.3,0.8c-1.2-0.9-0.8-2.9,0.1-4
			c0.9-1.2,2.6-1.4,3.7-0.5C12.5,17.2,13.1,18.4,11.8,20z"/>
		<path stroke="#00FF24" stroke-width="0.27" stroke-miterlimit="10" d="M81.8,26.8c-1.2,1.4-3,0.5-4.4-0.7c-1.4-1.2-2-2.3-0.8-3.8
			c1.2-1.4,3.4-1.6,4.9-0.4C82.9,23.2,83.5,24.8,81.8,26.8z"/>
		<path stroke="#00FF24" stroke-width="0.27" stroke-miterlimit="10" d="M34,41.1c0.2,0.9-0.6,1.3-1.5,1.4c-0.9,0.2-1.4,0.1-1.6-0.8
			c-0.2-0.9,0.4-1.7,1.2-1.9C33,39.7,33.8,39.9,34,41.1z"/>
		<path stroke="#00FF24" stroke-width="0.27" stroke-miterlimit="10" d="M45.8,39.5c1.5-0.5,2.9,0.6,3.3,1.7c0.4,1.2-0.5,2-2,2.5
			c-1.5,0.5-3-0.1-3.4-1.3C43.3,41.3,43.7,40.1,45.8,39.5z"/>
		<path stroke="#00FF24" stroke-width="0.27" stroke-miterlimit="10" d="M44.5,6.6c0.6,0.7,0.4,1.8-0.2,2.3
			c-0.6,0.5-1.3,0.2-1.9-0.6c-0.6-0.7-0.6-1.7-0.1-2.2S43.7,5.6,44.5,6.6z"/>
	</g>
</g>

<g transform="translate(${x},${y}) matrix(0.9966 8.229528e-02 -8.229528e-02 0.9966 22.1912 31.9148)">
  <text stroke="#002BFF" stroke-width="0.2727" stroke-miterlimit="10" font-family="'AmaticSC-Bold'" 
    font-size="${fontSize}" letter-spacing="0.6">
    ${text}
  </text>
</g>
`;
};
