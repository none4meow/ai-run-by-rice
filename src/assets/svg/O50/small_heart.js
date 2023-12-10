export const param = {
  W: 58,
  H: 46,
};

export const tag = (x, y, text) => {
  let fontSize = 20.2;

  const textLength = text.length;

  let xMatrix = 15.77;
  let yMatrix = 28.38;

  if (textLength >= 11) {
    fontSize -= 7;
    yMatrix = 24;
  } else if (textLength > 10) fontSize -= 5;
  else if (textLength > 9) fontSize -= 4;
  else if (textLength > 8) {
    fontSize -= 3;
    yMatrix = 27;
  } else if (textLength > 7) fontSize -= 2;
  else if (textLength > 6) fontSize -= 1;

  return `
	<path transform="translate(${x},${y})" fill="#FFFFFF" stroke="#FFB600" stroke-width="0.25" stroke-miterlimit="10" d="M53.7,5.7c-0.3-0.4-6.2-7-14.6-5.2
		c-5.1,1-9.2,4.8-10.6,9.6C27.1,5.2,23,1.5,17.9,0.4C9.4-1.3,3.6,5.3,3.3,5.7c-4.1,4.8-3.2,10.5-2.7,13.4
		c1.6,9.9,9.8,16.4,15.1,20.5c4.9,3.9,9.6,6.3,12.9,7.8c3.2-1.5,8-3.9,12.9-7.8c5.3-4.2,13.4-10.6,15-20.5
		C56.9,16.2,57.8,10.4,53.7,5.7L53.7,5.7z"/>
	<text font-family="'RollerSkates-Regular'" transform="matrix(1 0 0 1 ${xMatrix} ${yMatrix}) translate(${x},${y})" 
    font-size="${fontSize}px" letter-spacing="0.6">
    ${text}
  </text>
`;
};
