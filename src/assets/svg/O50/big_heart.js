export const param = {
  W: 82,
  H: 70,
};

export const tag = (x, y, text) => {
  let fontSize = 20;

  const textLength = text.length;

  if (textLength > 12) fontSize -= 3;
  else if (textLength > 11) fontSize -= 2;
  else if (textLength >= 12) fontSize -= 1;

  return `
  <path transform="translate(${x},${y})" fill="#FFFFFF" stroke="#FFB600" stroke-width="0.25" stroke-miterlimit="10" d="M75.1,7.9c-0.4-0.5-8.7-9.8-20.5-7.3
		C47.5,2,41.8,7.2,39.8,13.9C37.9,7.2,32.2,2,25,0.5C13.2-1.9,4.9,7.4,4.5,7.9c-5.7,6.7-4.4,14.7-3.8,18.8
		C3,40.5,14.4,49.6,21.8,55.4c6.9,5.4,13.5,8.8,18,10.9c4.5-2.1,11.1-5.5,18-10.9c7.4-5.8,18.8-14.8,21.1-28.7
		C79.6,22.6,80.8,14.5,75.1,7.9L75.1,7.9z"/>
	<text transform="matrix(1 0 0 1 16.48 35.45) translate(${x},${y})" font-family="'RollerSkates-Regular'" 
    font-size="${fontSize}px" letter-spacing="0.6">
    ${text}
  </text>
`;
};
