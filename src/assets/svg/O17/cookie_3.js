export const param = {
  W: 75,
  H: 75,
};

export const tag = (x, y, text) => {
  let fontSize = 23;

  const textLength = text.length;

  if (textLength === 5) fontSize -= 1;
  if (textLength === 6) fontSize -= 3;
  else if (textLength === 7) fontSize -= 4;
  else if (textLength === 8) fontSize -= 5;
  else if (textLength >= 9) fontSize -= 6;

  return `	
<g transform="translate(${x},${y})">
	<path fill="#EACCA7" stroke="#D300FF" stroke-width="0.25" stroke-miterlimit="10" d="M57.6,9.4c2.1-0.9,4.6-0.5,6,1.3
		c1.8,2.3,3.4,4.8,4.8,7.5c4,7.3,6.9,17.3,4.7,24.2C70,52.5,64.2,61.1,54.2,66.5c-12.1,6.6-25.9,7-36.6-0.2
		c-4.6-3.1-9.7-7.7-11.7-14C3,43.3-0.7,35.4,1.2,27c2-8.9,10-18.2,18.9-23c2.8-1.5,5.6-2.6,8.4-3.3C30.1,0.2,31.9,0.8,33,2
		c2.5,2.7,7.3,7.2,12.5,7.5C51.5,10,53.8,11.1,57.6,9.4z"/>
	<g>
		<path stroke="#00FF24" stroke-width="0.25" stroke-miterlimit="10" d="M41.1,57.1c1.5,2.8-0.9,5-3.7,6.5c-2.8,1.5-4.9,1.8-6.4-1
			c-1.5-2.8-0.5-6.3,2.3-7.8C36,53.3,38.9,53.2,41.1,57.1z"/>
		<path stroke="#00FF24" stroke-width="0.25" stroke-miterlimit="10" d="M32.5,19.2c-2.1,2.5-5.1,1-7.6-1.2s-3.5-4-1.4-6.5
			s5.9-2.8,8.3-0.7S35.4,15.7,32.5,19.2z"/>
		<path stroke="#00FF24" stroke-width="0.25" stroke-miterlimit="10" d="M53,15.7c2.7-0.9,5.4,1,6,3.1c0.7,2.1-0.9,3.7-3.6,4.6
			c-2.7,0.9-5.5-0.2-6.2-2.3S49.2,16.9,53,15.7z"/>
		<path stroke="#00FF24" stroke-width="0.25" stroke-miterlimit="10" d="M17.2,48.8c1.6,1.8,1.1,4.5-0.3,5.7
			c-1.4,1.3-3.2,0.6-4.8-1.2c-1.6-1.8-1.8-4.3-0.4-5.6C13.1,46.6,14.9,46.3,17.2,48.8z"/>
		<path stroke="#00FF24" stroke-width="0.25" stroke-miterlimit="10" d="M56.3,52.1c2.7-1.2,5.5,0.4,6.4,2.5c0.9,2.1-0.5,3.9-3.2,5
			c-2.7,1.2-5.6,0.4-6.5-1.7S52.6,53.8,56.3,52.1z"/>
	</g>
</g>

<g transform="translate(${x},${y}) matrix(0.9969 7.806000e-02 -7.806000e-02 0.9969 26.1974 42.2323)">
	<text stroke="#002BFF" stroke-width="0.25" stroke-miterlimit="10" 
		font-family="'AmaticSC-Bold'" font-size="${fontSize}" letter-spacing="0.1">
		${text}
	</text>
</g>
`;
};
