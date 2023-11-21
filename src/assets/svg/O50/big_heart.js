export const styles = `
      	.st0{fill:#FFFFFF;stroke:#FFB600;stroke-width:0.25;stroke-miterlimit:10;}
	.st1{font-family:'RollerSkates-Regular';}
	.st2{text-align: center;}
`;

export const transform = {
  W: 82,
  H: 70,
};

export const tag = (x, y, text) => {
  let fontSize = 20;

  const textLength = text.length;

  if (textLength === 10) {
    fontSize = 19;
  } else if (textLength === 11) {
    fontSize = 18;
  } else if (textLength >= 12) {
    fontSize = 17;
  }

  return `<g id="Layer_1-2" transform="translate(${x},${y})">
	<path class="st0" d="M75.1,7.9c-0.4-0.5-8.7-9.8-20.5-7.3C47.5,2,41.8,7.2,39.8,13.9C37.9,7.2,32.2,2,25,0.5
		C13.2-1.9,4.9,7.4,4.5,7.9c-5.7,6.7-4.4,14.7-3.8,18.8C3,40.5,14.4,49.6,21.8,55.4c6.9,5.4,13.5,8.8,18,10.9
		c4.5-2.1,11.1-5.5,18-10.9c7.4-5.8,18.8-14.8,21.1-28.7C79.6,22.6,80.8,14.5,75.1,7.9L75.1,7.9z"/>
	<text style="font-size:${fontSize}px;" transform="matrix(1 0 0 1 16.48 35.45)" letter-spacing="0.6" class="st1 st2">${text}</text>
</g>
  `;
};

// export const tag = (x, y, text) => {
//   return `<g id="Layer_1-2" data-name="Layer 1" transform="translate(${x},${y})">

//       <path
//         class="bm-cls1"
//         d="m75.11,7.87c-.43-.5-8.68-9.76-20.48-7.35-7.16,1.47-12.88,6.67-14.82,13.38-1.94-6.72-7.65-11.92-14.82-13.38C13.18-1.89,4.94,7.38,4.51,7.87-1.22,14.54.07,22.57.73,26.64c2.25,13.9,13.69,22.92,21.07,28.74,6.88,5.42,13.47,8.84,18.01,10.89,4.55-2.05,11.14-5.47,18.01-10.89,7.38-5.82,18.82-14.84,21.07-28.74.66-4.06,1.95-12.1-3.78-18.76Z"
//       />
//       <text class="bm-cls2" transform="translate(16.48 35.45)">
//         ${text}
//       </text>
//     </g>
//   `;
// };

// export const tag = (x, y) => {
//   return (
//     <g id="Layer_1-2" data-name="Layer 1" transform={`translate(${x},${y})`}>
//       <path
//         className="bm-cls1"
//         d="m75.11,7.87c-.43-.5-8.68-9.76-20.48-7.35-7.16,1.47-12.88,6.67-14.82,13.38-1.94-6.72-7.65-11.92-14.82-13.38C13.18-1.89,4.94,7.38,4.51,7.87-1.22,14.54.07,22.57.73,26.64c2.25,13.9,13.69,22.92,21.07,28.74,6.88,5.42,13.47,8.84,18.01,10.89,4.55-2.05,11.14-5.47,18.01-10.89,7.38-5.82,18.82-14.84,21.07-28.74.66-4.06,1.95-12.1-3.78-18.76Z"
//       />
//       <text className="bm-cls2" transform="translate(16.48 35.45)">
//         Mrs.asd
//       </text>
//     </g>
//   );
// };
