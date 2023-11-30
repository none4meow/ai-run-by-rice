export const styles = `
    .st0{fill:#FFFFFF;stroke:#FFB600;stroke-width:0.25;stroke-miterlimit:10;}
	.st1{font-family:'RollerSkates-Regular';}
	.st2{text-align: center;}
`;

export const transform = {
  W: 58,
  H: 46,
};

export const tag = (x, y, text) => {
  let fontSize = 20.2;

  const textLength = text.length;

  // xtext, ytext, textSize

  let xMatrix = 15.77;
  let yMatrix = 28.38;

  if (textLength > 6) {
    yMatrix = 27;
  }

  if (textLength === 7) {
    fontSize = 19;
  } else if (textLength === 8) {
    fontSize = 18;
  } else if (textLength === 9) {
    fontSize = 17;
  } else if (textLength === 10) {
    fontSize = 16;
  } else if (textLength >= 11) {
    fontSize = 14;
    yMatrix = 24;
  }

  return `<g id="Layer_1-2" transform="translate(${x},${y})">
	<path class="st0" d="M53.7,5.7c-0.3-0.4-6.2-7-14.6-5.2c-5.1,1-9.2,4.8-10.6,9.6C27.1,5.2,23,1.5,17.9,0.4C9.4-1.3,3.6,5.3,3.3,5.7
		c-4.1,4.8-3.2,10.5-2.7,13.4c1.6,9.9,9.8,16.4,15.1,20.5c4.9,3.9,9.6,6.3,12.9,7.8c3.2-1.5,8-3.9,12.9-7.8
		c5.3-4.2,13.4-10.6,15-20.5C56.9,16.2,57.8,10.4,53.7,5.7L53.7,5.7z"/>
	<text style="font-size:${fontSize}px;" transform="matrix(1 0 0 1 ${xMatrix} ${yMatrix})" letter-spacing="0.6" class="st1 st2">${text}</text>
</g>`;
};

// export const tag = (x, y, text) => {
//   return `<g id="Layer_1-2" data-name="Layer 1" transform="translate(${x},${y})">
//       <path
//         class="sm-cls1"
//         d="m53.69,5.66c-.31-.36-6.2-6.97-14.63-5.25-5.12,1.05-9.2,4.76-10.58,9.56C27.08,5.17,23,1.46,17.89.41,9.45-1.31,3.56,5.3,3.26,5.66-.84,10.42.09,16.16.56,19.06c1.6,9.93,9.78,16.37,15.05,20.53,4.91,3.87,9.62,6.32,12.87,7.78,3.25-1.46,7.95-3.91,12.87-7.78,5.27-4.16,13.44-10.6,15.05-20.53.47-2.9,1.4-8.64-2.7-13.4Z"
//       />
//       <text class="sm-cls-2" transform="translate(15.77 28.38)">
//         ${text}
//       </text>
//     </g>`;
// };

// export const tag = (x, y) => {
//   return (
//     <g id="Layer_1-2" data-name="Layer 1" transform={`translate(${x},${y})`}>
//       <path
//         className="sm-cls1"
//         d="m53.69,5.66c-.31-.36-6.2-6.97-14.63-5.25-5.12,1.05-9.2,4.76-10.58,9.56C27.08,5.17,23,1.46,17.89.41,9.45-1.31,3.56,5.3,3.26,5.66-.84,10.42.09,16.16.56,19.06c1.6,9.93,9.78,16.37,15.05,20.53,4.91,3.87,9.62,6.32,12.87,7.78,3.25-1.46,7.95-3.91,12.87-7.78,5.27-4.16,13.44-10.6,15.05-20.53.47-2.9,1.4-8.64-2.7-13.4Z"
//       />
//       <text className="sm-cls-2" transform="translate(15.77 28.38)">
//         <tspan x="0" y="0">
//           asd
//         </tspan>
//       </text>
//     </g>
//   );
// };
