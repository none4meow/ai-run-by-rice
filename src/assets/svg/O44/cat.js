export const param = {
  W: 58,
  H: 53,
};

export const tag = (x, y, text) => {
  let fontSize = 22;

  const textLength = text.length;

  if (textLength === 6) fontSize -= 1;
  else if (textLength === 7) fontSize -= 2;
  else if (textLength === 8) fontSize -= 3;
  else if (textLength === 9) fontSize -= 4;
  else if (textLength === 10) fontSize -= 5;
  else if (textLength >= 11) fontSize -= 6;

  return `
<path transform="translate(${x},${y})" fill="#E2D6C7" stroke="#FDB515" stroke-width="0.25" stroke-miterlimit="10" d="M57.971,21.615
	c1.72-9.579-1.069-17.473-1.099-17.545c-0.519-1.262-1.444-1.83-2.827-1.736C49.092,2.669,43.777,5.883,41.06,8.187
	c-2.585-0.897-6.924-1.6-10.017-1.6c-3.092,0-7.432,0.703-10.017,1.6C18.31,5.883,12.995,2.669,8.041,2.334
	C6.658,2.24,5.734,2.808,5.215,4.07c-0.03,0.072-2.819,7.966-1.099,17.545c-0.913,2.201-1.531,4.517-1.838,6.886
	C1.517,34.381,2.81,39.272,6.12,43.038c2.279,2.593,5.499,4.59,9.571,5.935c4.211,1.391,9.376,2.096,15.353,2.096
	s11.142-0.705,15.353-2.096c4.072-1.345,7.292-3.342,9.571-5.935c3.31-3.766,4.603-8.657,3.842-14.537
	C59.503,26.132,58.884,23.816,57.971,21.615z"/>

<g transform="translate(${x},${y}) matrix(1 0 0 1 17.8239 41.0345)">
  <text text-anchor="start" font-family="'RollerSkates-Regular'" font-size="${fontSize}" letter-spacing="0.6"
    fill="#FDFEFF" stroke="#6ABD45" stroke-width="0.25" stroke-miterlimit="9.9999" >
      ${text}
  </text>
</g>

`;
};
