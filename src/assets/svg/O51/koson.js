export const param = {
  W: 56,
  H: 39,
};

export const tag = (x, y) => {
  return `
  <g transform="translate(${x},${y})">
	<path d="M7.2,10.3L10,7.6c0.3-0.3,0.5-0.6,0.5-0.9c0-0.2-0.1-0.5-0.3-0.7S9.7,5.7,9.4,5.7c-0.3,0-0.6,0.1-0.8,0.4L4.5,10V3
		c0-0.3-0.1-0.6-0.3-0.8C4,1.9,3.7,1.8,3.3,1.8C3,1.8,2.7,1.9,2.5,2.1C2.3,2.3,2.2,2.6,2.2,3v11.8c0,0.3,0.1,0.6,0.3,0.8
		c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.3-0.5,0.3-0.8v-2l0.9-0.9l3.4,3.6c0.2,0.3,0.5,0.4,0.8,0.4
		c0.3,0,0.5-0.1,0.8-0.3c0.2-0.2,0.4-0.5,0.4-0.8c0-0.3-0.1-0.6-0.4-0.9L7.2,10.3z"/>
	<path d="M19.6,6.2C18.8,5.7,18,5.5,17,5.5c-1,0-1.8,0.2-2.6,0.7c-0.8,0.5-1.4,1.1-1.9,1.9c-0.5,0.8-0.7,1.7-0.7,2.7
		s0.2,1.9,0.7,2.7s1.1,1.4,1.9,1.9c0.8,0.4,1.7,0.7,2.6,0.7c1,0,1.8-0.2,2.6-0.7s1.4-1.1,1.9-1.9s0.7-1.7,0.7-2.7S22,8.9,21.5,8.1
		C21.1,7.3,20.4,6.6,19.6,6.2z M19.5,12.4c-0.3,0.5-0.6,0.9-1,1.1S17.6,14,17,14c-0.5,0-1-0.1-1.5-0.4c-0.4-0.3-0.8-0.6-1-1.1
		c-0.3-0.5-0.4-1-0.4-1.7c0-0.6,0.1-1.2,0.4-1.7s0.6-0.9,1-1.1C16,7.7,16.5,7.6,17,7.6c0.5,0,1,0.1,1.5,0.4c0.4,0.3,0.8,0.6,1,1.1
		c0.3,0.5,0.4,1,0.4,1.7C19.9,11.4,19.8,12,19.5,12.4z"/>
	<path d="M35.1,10.4c-0.5-0.2-1-0.4-1.7-0.6c-0.5-0.1-0.9-0.3-1.2-0.4c-0.3-0.1-0.5-0.2-0.7-0.4c-0.2-0.2-0.3-0.4-0.3-0.7
		c0-0.7,0.5-1,1.4-1c0.5,0,0.9,0.1,1.2,0.2c0.4,0.2,0.7,0.4,0.9,0.7c0.2,0.2,0.4,0.3,0.7,0.3c0.2,0,0.4-0.1,0.6-0.2
		c0.2-0.2,0.4-0.4,0.4-0.7c0-0.3-0.1-0.5-0.2-0.7c-0.4-0.5-0.9-0.8-1.5-1.1c-0.6-0.2-1.3-0.4-1.9-0.4c-0.6,0-1.2,0.1-1.8,0.4
		c-0.6,0.2-1,0.6-1.4,1c-0.3,0.5-0.5,1-0.5,1.6c0,0.7,0.2,1.3,0.5,1.7c0.3,0.4,0.7,0.7,1.2,0.9c0.5,0.2,1.1,0.4,1.8,0.6
		c0.7,0.2,1.2,0.4,1.6,0.6c0.3,0.2,0.5,0.5,0.5,0.8c0,0.7-0.5,1.1-1.5,1.1c-0.6,0-1.1-0.1-1.5-0.3c-0.4-0.2-0.8-0.5-1.2-0.9
		c-0.2-0.2-0.5-0.4-0.8-0.4c-0.2,0-0.4,0.1-0.6,0.2c-0.3,0.2-0.5,0.5-0.5,0.8c0,0.2,0.1,0.4,0.2,0.6c0.5,0.6,1,1.1,1.8,1.4
		c0.7,0.3,1.5,0.4,2.3,0.4c0.6,0,1.2-0.1,1.8-0.4s1-0.6,1.4-1.1c0.4-0.5,0.6-1,0.6-1.6c0-0.7-0.2-1.2-0.5-1.7
		C35.9,10.9,35.5,10.6,35.1,10.4z"/>
	<path d="M48.1,6.1c0.2-0.5,0.3-0.9,0.3-1.5c0-0.3-0.1-0.5-0.2-0.7c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3
		c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.4-0.1,0.7-0.4,0.9c-0.3,0.2-0.7,0.3-1.2,0.3v0c-0.6-0.2-1.1-0.3-1.7-0.3c-1,0-1.8,0.2-2.6,0.7
		c-0.8,0.5-1.4,1.1-1.9,1.9C38.3,8.9,38,9.8,38,10.8s0.2,1.9,0.7,2.7s1.1,1.4,1.9,1.9c0.8,0.4,1.7,0.7,2.6,0.7c1,0,1.8-0.2,2.6-0.7
		s1.4-1.1,1.9-1.9s0.7-1.7,0.7-2.7c0-0.7-0.1-1.4-0.4-2c-0.2-0.6-0.6-1.2-1-1.7C47.5,6.9,47.8,6.5,48.1,6.1z M45.7,12.4
		c-0.3,0.5-0.6,0.9-1,1.1S43.7,14,43.2,14c-0.5,0-1-0.1-1.5-0.4s-0.8-0.6-1-1.1c-0.3-0.5-0.4-1-0.4-1.7c0-0.6,0.1-1.2,0.4-1.7
		s0.6-0.9,1-1.1c0.4-0.3,0.9-0.4,1.5-0.4c0.5,0,1,0.1,1.5,0.4c0.4,0.3,0.8,0.6,1,1.1c0.3,0.5,0.4,1,0.4,1.7
		C46.1,11.4,46,12,45.7,12.4z"/>
	<path d="M58.4,6.7c-0.5-0.8-1.4-1.2-2.7-1.2c-0.7,0-1.3,0.2-1.8,0.5c-0.6,0.3-1,0.7-1.3,1.2V6.9c0-0.3-0.1-0.6-0.3-0.8
		c-0.2-0.2-0.5-0.3-0.8-0.3c-0.3,0-0.6,0.1-0.8,0.3c-0.2,0.2-0.3,0.5-0.3,0.8v7.9c0,0.3,0.1,0.6,0.3,0.8c0.2,0.2,0.5,0.3,0.8,0.3
		c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.3-0.5,0.3-0.8V9.8c0-0.6,0.2-1.2,0.6-1.6c0.4-0.4,1-0.6,1.7-0.6c0.7,0,1.2,0.2,1.5,0.6
		c0.3,0.4,0.4,0.9,0.4,1.6v4.9c0,0.3,0.1,0.6,0.3,0.8c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.3-0.5,0.3-0.8V9.8
		C59.1,8.5,58.9,7.4,58.4,6.7z"/>
</g>`;
};