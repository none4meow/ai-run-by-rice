export const svg = (name, boxColor, nameColor, inch) => {
  const percent = inch / 7;
  let gap = 14.1732;
  switch (inch) {
    case 9:
      gap = gap / percent;
      break;
    case 11:
      gap = gap / percent;
      break;

    default:
      break;
  }

  let bar = 15.2787;
  switch (inch) {
    case 9:
      bar = bar / percent;
      break;
    case 11:
      bar = bar / percent;
      break;

    default:
      break;
  }

  return `
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1567.251 4325.642" style="enable-background:new 0 0 1567.251 4325.642;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#E2D6C7;}
	.st1{fill:${boxColor.hexCode};}
	.st2{fill:${nameColor.hexCode};}
	.st3{font-family:'#9Slide03QuicksandBold-Bold';}
	.st4{font-size:70px;}
	.st5{fill:${nameColor.hexCode};stroke:${nameColor.hexCode};stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st6{font-family:'WildSageRegular';}
	.st7{font-size:328.7417px;}
</style>

<g transform="scale(${percent})">
<text transform="translate(900,0)" style="font-size:130px;" class="st3 st4">${inch}'</text>

<g>
	<text transform="matrix(1 0 0 1 494.4483 1739.165)" class="st3 st4">5mm - ${boxColor.name}</text>
	<text transform="matrix(1 0 0 1 425.4922 584.9233)" class="st3 st4">5mm - ${nameColor.name}</text>
	<text transform="matrix(1 0 0 1 482.2148 333.4459)" class="st5 st6 st7">${name}</text>
</g>
<rect x="939.532" y="1486.28" width="187.5" height="${bar}"/>

	<path class="st0" d="M946.896,2720.201v141.732H1315.4v-141.732H946.896z"/>
<rect x="1037.318" y="2784.123" width="187.66" height="${gap}"/>
<g>
	<path class="st1" d="M754.736,1101.09c-19.18-37.93-47.11-67.22-83.79-87.85c-36.69-20.64-80.67-30.96-131.94-30.96
		c-51.28,0-95.27,10.32-131.94,30.96c-36.69,20.63-64.63,49.92-83.8,87.85c-19.18,37.94-28.76,82.13-28.76,132.57
		c0,48.77,9.58,92.23,28.76,130.38c19.17,38.14,47.22,68.06,84.11,89.73c36.89,21.68,80.76,32.52,131.63,32.52
		c50.85,0,94.73-10.84,131.62-32.52c36.9-21.67,64.93-51.59,84.11-89.73c19.17-38.15,28.76-81.61,28.76-130.38
		C783.496,1183.22,773.906,1139.03,754.736,1101.09z M738.386,1355.82c-17.49,34.77-43.4,62.42-77.02,82.17
		c-33.87,19.9-75.04,29.99-122.36,29.99c-47.33,0-88.49-10.09-122.36-29.99c-33.64-19.76-59.55-47.4-77.02-82.17
		c-17.8-35.39-26.82-76.49-26.82-122.16c0-47.31,9.02-89.14,26.8-124.31c17.42-34.46,43.13-61.43,76.43-80.16
		c33.73-18.98,75.11-28.6,122.97-28.6c47.85,0,89.22,9.62,122.97,28.6c33.28,18.73,59,45.7,76.43,80.16
		c17.78,35.19,26.79,77.01,26.79,124.31C765.196,1279.31,756.176,1320.41,738.386,1355.82z M539.006,1072.16
		c-21.11,0-50.04,8.45-67.99,48.68c-12.43,27.86-18.47,63.94-18.47,110.32c0,46.95,6.4,85.4,19.04,114.27
		c10.17,23.25,30.12,50.98,67.42,50.98c37.28,0,57.24-27.73,67.41-50.99c12.64-28.89,19.05-67.33,19.05-114.26
		c0-46.38-6.04-82.46-18.47-110.32C589.036,1080.61,560.106,1072.16,539.006,1072.16z M589.656,1338.09
		c-11.68,26.68-28.56,40.02-50.65,40.02c-22.11,0-38.99-13.34-50.66-40.02c-11.67-26.68-17.5-62.32-17.5-106.93
		c0-43.35,5.62-77.64,16.88-102.86c11.26-25.22,28.35-37.84,51.28-37.84c22.92,0,40.02,12.62,51.27,37.84
		c11.26,25.22,16.89,59.51,16.89,102.86C607.166,1275.77,601.316,1311.41,589.656,1338.09z"/>
</g>
<g>
	<path class="st2" d="M713.673,4013.518c-36.893-21.671-64.935-51.588-84.104-89.733c-19.179-38.143-28.764-81.603-28.764-130.376
		c0-50.436,9.585-94.628,28.764-132.567c19.17-37.929,47.104-67.221,83.791-87.856c36.678-20.635,80.666-30.953,131.941-30.953
		s95.252,10.318,131.941,30.953c36.678,20.635,64.612,49.927,83.791,87.856c19.17,37.939,28.765,82.131,28.765,132.567
		c0,48.774-9.595,92.233-28.765,130.376c-19.179,38.144-47.211,68.062-84.104,89.733c-36.893,21.681-80.772,32.516-131.628,32.516
		C794.436,4046.034,750.567,4035.198,713.673,4013.518z M895.952,3897.835c11.666-26.674,17.509-62.317,17.509-106.928
		c0-43.352-5.628-77.636-16.884-102.864c-11.256-25.218-28.354-37.832-51.276-37.832c-22.931,0-40.02,12.614-51.276,37.832
		c-11.256,25.227-16.884,59.512-16.884,102.864c0,44.611,5.833,80.254,17.508,106.928c11.666,26.683,28.55,40.019,50.651,40.019
		C867.393,3937.854,884.276,3924.518,895.952,3897.835z"/>
</g>
<g>
	<g>
		<path class="st0" d="M488.778,2459.685c0,46.951,6.408,85.396,19.044,114.266c10.167,23.254,30.119,50.982,67.416,50.982
			c37.282,0,57.239-27.726,67.417-50.985c12.637-28.894,19.044-67.337,19.044-114.264c0-46.376-6.042-82.462-18.472-110.321
			c-17.957-40.231-46.884-48.676-67.989-48.676c-21.105,0-50.033,8.445-67.988,48.674
			C494.82,2377.222,488.778,2413.308,488.778,2459.685z M575.239,2318.99c22.922,0,40.02,12.614,51.276,37.832
			c11.255,25.227,16.884,59.512,16.884,102.864c0,44.611-5.843,80.254-17.509,106.928c-11.676,26.683-28.559,40.019-50.65,40.019
			c-22.101,0-38.984-13.336-50.651-40.019c-11.676-26.674-17.508-62.317-17.508-106.928c0-43.352,5.628-77.636,16.884-102.864
			C535.218,2331.603,552.307,2318.99,575.239,2318.99z"/>
		<path class="st0" d="M790.971,2329.62c-19.179-37.929-47.113-67.221-83.791-87.856c-20.378-11.461-43.007-19.734-67.883-24.83
			v18.753c21.605,4.771,41.299,12.122,58.912,22.028c33.288,18.727,59.004,45.698,76.432,80.164
			c17.779,35.187,26.796,77.012,26.796,124.308c0,45.653-9.022,86.752-26.816,122.158c-17.484,34.774-43.399,62.421-77.021,82.171
			c-33.87,19.904-75.036,29.995-122.359,29.995s-88.489-10.092-122.356-29.994c-33.638-19.759-59.552-47.404-77.024-82.172
			c-17.794-35.389-26.815-76.487-26.815-122.158c0-47.314,9.016-89.138,26.796-124.31c17.418-34.464,43.133-61.434,76.43-80.162
			c17.609-9.907,37.304-17.259,58.912-22.029v-18.752c-24.879,5.095-47.51,13.369-67.884,24.831
			c-36.689,20.635-64.622,49.927-83.791,87.856c-19.179,37.939-28.764,82.13-28.764,132.567c0,48.774,9.585,92.233,28.764,130.376
			c19.17,38.144,47.211,68.062,84.104,89.733c36.893,21.681,80.763,32.516,131.629,32.516c50.855,0,94.734-10.836,131.628-32.516
			c36.893-21.671,64.925-51.588,84.104-89.733c19.17-38.143,28.764-81.603,28.764-130.376
			C819.735,2411.75,810.141,2367.559,790.971,2329.62z"/>
	</g>
	<g>
		<path class="st0" d="M984.442,2459.684c0,46.951,6.408,85.396,19.044,114.266c10.167,23.254,30.119,50.982,67.416,50.982
			c37.282,0,57.239-27.726,67.417-50.985c12.637-28.894,19.044-67.337,19.044-114.264c0-46.376-6.042-82.462-18.472-110.32
			c-17.957-40.231-46.884-48.676-67.989-48.676c-21.105,0-50.033,8.445-67.988,48.674
			C990.484,2377.221,984.442,2413.308,984.442,2459.684z M1070.903,2318.989c22.922,0,40.02,12.613,51.276,37.832
			c11.255,25.227,16.884,59.512,16.884,102.864c0,44.611-5.843,80.254-17.509,106.928c-11.676,26.683-28.559,40.019-50.65,40.019
			c-22.101,0-38.984-13.336-50.651-40.019c-11.676-26.674-17.508-62.317-17.508-106.928c0-43.352,5.628-77.636,16.884-102.864
			C1030.882,2331.603,1047.971,2318.989,1070.903,2318.989z"/>
		<path class="st0" d="M1286.635,2329.619c-19.18-37.929-47.113-67.221-83.792-87.856c-20.378-11.461-43.007-19.734-67.883-24.83
			v18.753c21.605,4.771,41.299,12.122,58.911,22.028c33.287,18.727,59.004,45.698,76.432,80.164
			c17.779,35.187,26.796,77.012,26.796,124.308c0,45.653-9.022,86.752-26.816,122.158c-17.484,34.774-43.399,62.421-77.021,82.171
			c-33.87,19.904-75.036,29.995-122.359,29.995c-47.323,0-88.489-10.092-122.356-29.994c-33.638-19.759-59.552-47.404-77.024-82.172
			c-17.794-35.389-26.815-76.487-26.815-122.158c0-47.314,9.016-89.138,26.796-124.31c17.418-34.464,43.133-61.434,76.43-80.162
			c17.609-9.907,37.304-17.259,58.912-22.029v-18.752c-24.879,5.095-47.51,13.369-67.884,24.831
			c-36.689,20.635-64.622,49.927-83.791,87.856c-19.179,37.939-28.764,82.13-28.764,132.567c0,48.774,9.585,92.233,28.764,130.376
			c19.17,38.144,47.211,68.062,84.104,89.733c36.893,21.681,80.763,32.516,131.629,32.516c50.855,0,94.734-10.836,131.628-32.516
			c36.893-21.671,64.925-51.588,84.104-89.733c19.17-38.143,28.765-81.603,28.765-130.376
			C1315.4,2411.75,1305.805,2367.558,1286.635,2329.619z"/>
	</g>
</g>
<path class="st1" d="M1249.012,1101.09c-19.18-37.93-47.11-67.22-83.79-87.85c-36.69-20.64-80.66-30.96-131.94-30.96
	c-51.27,0-95.26,10.32-131.94,30.96c-36.69,20.63-64.62,49.92-83.79,87.85c-19.18,37.94-28.77,82.13-28.77,132.57
	c0,48.77,9.59,92.23,28.77,130.37c19.17,38.15,47.21,68.07,84.1,89.74c11.9,6.99,24.53,12.85,37.88,17.58v26.22h187.5v-26.22
	c13.35-4.73,25.98-10.59,37.88-17.58c36.89-21.67,64.92-51.59,84.1-89.74c19.17-38.14,28.77-81.6,28.77-130.37
	C1277.782,1183.22,1268.182,1139.03,1249.012,1101.09z M1083.932,1338.08c-11.67,26.69-28.56,40.02-50.65,40.02
	c-22.1,0-38.98-13.33-50.65-40.02c-11.67-26.67-17.51-62.31-17.51-106.92c0-43.36,5.63-77.64,16.89-102.87
	c11.25-25.22,28.34-37.83,51.27-37.83c22.92,0,40.02,12.61,51.28,37.83c11.25,25.23,16.88,59.51,16.88,102.87
	C1101.442,1275.77,1095.602,1311.41,1083.932,1338.08z"/>
<path class="st2" d="M1127.032,1471.35v26.22h-187.5v-26.22c28.05,9.95,59.29,14.93,93.75,14.93
	C1067.742,1486.28,1098.992,1481.3,1127.032,1471.35z"/>
<g>
	<path d="M784.722,4184.581c-5.115,0-9.685,1.475-13.715,4.42c-4.03,2.947-7.042,6.24-9.035,9.881
		c-3.035-9.533-10.01-14.301-20.93-14.301c-4.42,0-8.43,1.105-12.025,3.314c-3.598,2.211-6.565,4.875-8.905,7.996v-2.08
		c0-2.253-0.737-4.139-2.21-5.655c-1.475-1.516-3.337-2.274-5.59-2.274c-2.255,0-4.117,0.759-5.59,2.274
		c-1.475,1.517-2.21,3.402-2.21,5.655v53.689c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274
		c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.279c0-4.42,1.365-8.081,4.095-10.985
		c2.73-2.903,6.521-4.354,11.375-4.354c4.68,0,7.95,1.364,9.815,4.094c1.863,2.73,2.795,6.48,2.795,11.246v33.279
		c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274c2.252,0,4.115-0.758,5.59-2.274
		c1.473-1.516,2.21-3.4,2.21-5.655v-33.279c0-4.42,1.365-8.081,4.095-10.985c2.73-2.903,6.52-4.354,11.375-4.354
		c4.68,0,7.95,1.364,9.815,4.094c1.862,2.73,2.795,6.48,2.795,11.246v33.279c0,2.255,0.735,4.14,2.21,5.655
		c1.473,1.517,3.335,2.274,5.59,2.274c2.253,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.279
		c0-9.273-1.647-16.531-4.94-21.775C799.237,4187.204,793.302,4184.581,784.722,4184.581z"/>
	<path d="M837.631,4163.392c-1.215-0.953-3.338-1.431-6.37-1.431c-2.86,0-4.94,0.478-6.24,1.431c-1.3,0.954-1.95,2.645-1.95,5.069
		v2.47c0,2.428,0.605,4.117,1.82,5.07c1.212,0.955,3.292,1.43,6.24,1.43c3.032,0,5.178-0.455,6.435-1.365
		c1.256-0.909,1.885-2.619,1.885-5.135v-2.47C839.45,4166.036,838.844,4164.346,837.631,4163.392z"/>
	<path d="M831.261,4185.882c-2.255,0-4.117,0.759-5.59,2.274c-1.475,1.517-2.21,3.402-2.21,5.655v53.689
		c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274c2.253,0,4.115-0.758,5.59-2.274
		c1.473-1.516,2.21-3.4,2.21-5.655v-53.689c0-2.253-0.737-4.139-2.21-5.655C835.376,4186.641,833.514,4185.882,831.261,4185.882z"/>
	<path d="M903.67,4237.491c-1.127,0-2.08,0.175-2.86,0.52c-0.779,0.348-1.625,0.846-2.535,1.496
		c-0.909,0.649-1.625,1.104-2.145,1.364c-2.08,1.04-5.245,1.56-9.49,1.56c-5.808,0-10.574-2.057-14.3-6.174
		c-3.728-4.116-5.59-9.296-5.59-15.535c0-6.5,1.84-11.766,5.524-15.795c3.683-4.031,8.775-6.045,15.275-6.045
		c1.04,0,2.405,0.174,4.095,0.52c1.69,0.348,2.968,0.737,3.835,1.17c0.78,0.435,1.581,0.975,2.405,1.625
		c0.822,0.65,1.668,1.17,2.535,1.561c0.865,0.389,1.992,0.584,3.38,0.584c1.82,0,3.293-0.715,4.42-2.145
		c1.125-1.43,1.69-3.098,1.69-5.006c0-3.812-2.255-6.867-6.761-9.164c-4.507-2.295-10.444-3.445-17.81-3.445
		c-6.587,0-12.48,1.539-17.68,4.615c-5.2,3.077-9.253,7.345-12.155,12.805c-2.904,5.46-4.355,11.7-4.355,18.721
		c0,6.76,1.386,12.892,4.16,18.395c2.772,5.504,6.695,9.814,11.766,12.936c5.069,3.119,10.94,4.68,17.614,4.68
		c4.506,0,8.753-0.543,12.74-1.625c3.985-1.083,7.192-2.535,9.62-4.355c2.426-1.82,3.64-3.77,3.64-5.85
		c0-2.166-0.629-3.943-1.885-5.33C907.548,4238.187,905.835,4237.491,903.67,4237.491z"/>
	<path d="M983.88,4186.791c-1.475-1.473-3.338-2.21-5.59-2.21c-2.254,0-4.117,0.76-5.59,2.275c-1.475,1.518-2.21,3.402-2.21,5.654
		v0.131c-2.515-2.34-5.59-4.268-9.23-5.785c-3.64-1.516-7.54-2.275-11.7-2.275c-5.807,0-11.114,1.539-15.925,4.615
		c-4.81,3.077-8.603,7.367-11.375,12.869c-2.774,5.506-4.16,11.723-4.16,18.656s1.408,13.129,4.226,18.59
		c2.815,5.459,6.65,9.729,11.505,12.805c4.853,3.077,10.27,4.615,16.25,4.615c4.072,0,7.95-0.891,11.635-2.666
		c3.683-1.774,6.607-3.92,8.775-6.434c0.085,2.254,0.845,4.117,2.274,5.59c1.43,1.475,3.271,2.209,5.525,2.209
		c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.211-3.4,2.211-5.655v-54.99C986.091,4190.171,985.353,4188.266,983.88,4186.791z
		 M965.81,4236.257c-3.555,4.117-8.146,6.174-13.779,6.174c-5.635,0-10.205-2.057-13.715-6.174
		c-3.511-4.116-5.266-9.296-5.266-15.535c0-6.24,1.775-11.44,5.33-15.601c3.553-4.16,8.103-6.239,13.65-6.239
		c5.633,0,10.225,2.079,13.779,6.239c3.553,4.16,5.33,9.36,5.33,15.601C971.14,4226.961,969.362,4232.141,965.81,4236.257z"/>
</g>

<g>
	<path d="M462.725,3024.198c-4.638-2.643-9.815-3.965-15.535-3.965c-2.255,0-4.637,0.305-7.15,0.91
		c-2.515,0.607-4.595,1.387-6.24,2.34l2.47-18.851h32.24c2.08,0,3.813-0.67,5.2-2.015c1.385-1.343,2.08-3.01,2.08-5.005
		c0-2.08-0.695-3.812-2.08-5.2c-1.387-1.385-3.12-2.08-5.2-2.08h-37.57c-1.995,0-3.705,0.585-5.135,1.755
		c-1.43,1.17-2.32,2.665-2.665,4.485l-4.03,32.24c-0.087,0.347-0.13,0.954-0.13,1.819c0,2.515,0.715,4.681,2.145,6.5
		c1.43,1.82,3.835,2.73,7.215,2.73c0.953,0,1.885-0.173,2.795-0.521c0.91-0.345,2.145-0.909,3.705-1.689
		c2.166-1.04,4.03-1.82,5.59-2.34c1.56-0.521,3.335-0.78,5.33-0.78c4.42,0,8.233,1.475,11.44,4.42c3.206,2.947,4.81,6.76,4.81,11.44
		c0,3.207-0.932,6.197-2.795,8.97c-1.865,2.774-4.355,4.984-7.475,6.63c-3.12,1.647-6.457,2.47-10.01,2.47
		c-2.775,0-5.98-1.125-9.62-3.38c-2.34-1.646-4.29-2.47-5.85-2.47c-2.167,0-3.922,0.63-5.265,1.885
		c-1.345,1.258-2.015,2.665-2.015,4.226c0,1.387,0.345,2.859,1.04,4.42c0.692,1.56,1.56,2.774,2.6,3.64
		c2.252,1.82,5.177,3.25,8.775,4.29c3.595,1.04,7.085,1.56,10.465,1.56c6.325,0,12.22-1.45,17.68-4.354
		c5.46-2.902,9.835-6.825,13.13-11.765c3.292-4.94,4.94-10.313,4.94-16.12c0-5.633-1.322-10.746-3.965-15.34
		C471,3030.461,467.36,3026.843,462.725,3024.198z"/>
	<path d="M575.369,3010.483c-5.115,0-9.685,1.475-13.715,4.42c-4.03,2.947-7.042,6.24-9.035,9.88
		c-3.035-9.532-10.01-14.3-20.93-14.3c-4.42,0-8.43,1.104-12.025,3.314c-3.598,2.21-6.565,4.875-8.905,7.995v-2.08
		c0-2.252-0.737-4.138-2.21-5.654c-1.475-1.516-3.337-2.275-5.59-2.275c-2.255,0-4.117,0.76-5.59,2.275
		c-1.475,1.517-2.21,3.402-2.21,5.654v53.69c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274
		c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28c0-4.42,1.365-8.08,4.095-10.984
		c2.73-2.903,6.521-4.355,11.375-4.355c4.68,0,7.95,1.365,9.815,4.095c1.863,2.73,2.795,6.48,2.795,11.245v33.28
		c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274c2.252,0,4.115-0.758,5.59-2.274
		c1.473-1.516,2.21-3.4,2.21-5.655v-33.28c0-4.42,1.365-8.08,4.095-10.984c2.73-2.903,6.52-4.355,11.375-4.355
		c4.68,0,7.95,1.365,9.815,4.095c1.862,2.73,2.795,6.48,2.795,11.245v33.28c0,2.255,0.735,4.14,2.21,5.655
		c1.473,1.517,3.335,2.274,5.59,2.274c2.253,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28
		c0-9.272-1.647-16.53-4.94-21.774C589.884,3013.105,583.949,3010.483,575.369,3010.483z"/>
	<path d="M695.229,3010.483c-5.115,0-9.686,1.475-13.715,4.42c-4.03,2.947-7.042,6.24-9.035,9.88
		c-3.035-9.532-10.01-14.3-20.93-14.3c-4.42,0-8.43,1.104-12.025,3.314c-3.598,2.21-6.565,4.875-8.905,7.995v-2.08
		c0-2.252-0.737-4.138-2.21-5.654c-1.475-1.516-3.337-2.275-5.59-2.275c-2.255,0-4.117,0.76-5.59,2.275
		c-1.475,1.517-2.21,3.402-2.21,5.654v53.69c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274
		c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28c0-4.42,1.365-8.08,4.095-10.984
		c2.73-2.903,6.521-4.355,11.375-4.355c4.68,0,7.95,1.365,9.815,4.095c1.863,2.73,2.795,6.48,2.795,11.245v33.28
		c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274c2.252,0,4.115-0.758,5.59-2.274
		c1.473-1.516,2.21-3.4,2.21-5.655v-33.28c0-4.42,1.365-8.08,4.095-10.984c2.73-2.903,6.52-4.355,11.375-4.355
		c4.68,0,7.95,1.365,9.814,4.095c1.863,2.73,2.795,6.48,2.795,11.245v33.28c0,2.255,0.735,4.14,2.21,5.655
		c1.473,1.517,3.336,2.274,5.591,2.274c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28
		c0-9.272-1.647-16.53-4.94-21.774C709.744,3013.105,703.809,3010.483,695.229,3010.483z"/>
	<path d="M799.878,3033.753h-22.62c-2.254,0-4.14,0.737-5.654,2.21c-1.518,1.475-2.275,3.295-2.275,5.46
		c0,2.255,0.758,4.118,2.275,5.591c1.515,1.475,3.4,2.21,5.654,2.21h22.62c2.253,0,4.138-0.716,5.655-2.146
		c1.516-1.43,2.275-3.228,2.275-5.395c0-2.253-0.76-4.138-2.275-5.655C804.016,3034.512,802.131,3033.753,799.878,3033.753z"/>
	<path d="M894.257,3042.983l19.63-18.07c2.08-1.82,3.12-3.77,3.12-5.85c0-1.646-0.76-3.271-2.274-4.875
		c-1.518-1.603-3.23-2.405-5.136-2.405c-2.167,0-4.074,0.825-5.72,2.47l-27.82,26.91v-48.1c0-2.253-0.737-4.138-2.21-5.655
		c-1.475-1.516-3.337-2.275-5.59-2.275c-2.255,0-4.117,0.76-5.59,2.275c-1.475,1.518-2.21,3.402-2.21,5.655v80.34
		c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274c2.253,0,4.115-0.758,5.59-2.274
		c1.473-1.516,2.21-3.4,2.21-5.655v-13.65l6.37-5.85l23.4,24.7c1.56,1.734,3.465,2.6,5.72,2.6c1.905,0,3.705-0.735,5.396-2.21
		c1.689-1.473,2.534-3.293,2.534-5.46c0-2.165-0.824-4.115-2.47-5.85L894.257,3042.983z"/>
	<path d="M979.602,3015.098c-5.418-3.076-11.375-4.615-17.875-4.615c-6.588,0-12.567,1.539-17.94,4.615
		c-5.374,3.077-9.62,7.367-12.739,12.869c-3.12,5.505-4.681,11.723-4.681,18.655c0,6.935,1.561,13.152,4.681,18.655
		c3.119,5.505,7.365,9.772,12.739,12.805c5.373,3.035,11.353,4.55,17.94,4.55c6.5,0,12.457-1.515,17.875-4.55
		c5.415-3.032,9.685-7.3,12.805-12.805c3.12-5.503,4.68-11.721,4.68-18.655c0-6.933-1.56-13.15-4.68-18.655
		C989.286,3022.466,985.017,3018.176,979.602,3015.098z M978.821,3057.933c-1.777,3.294-4.16,5.85-7.149,7.67
		c-2.99,1.819-6.306,2.729-9.945,2.729c-3.641,0-6.955-0.91-9.945-2.729c-2.99-1.82-5.375-4.376-7.149-7.67
		c-1.777-3.293-2.665-7.063-2.665-11.311c0-4.245,0.888-8.037,2.665-11.375c1.774-3.335,4.159-5.915,7.149-7.734
		c2.99-1.82,6.305-2.73,9.945-2.73c3.64,0,6.955,0.91,9.945,2.73c2.989,1.819,5.372,4.399,7.149,7.734
		c1.775,3.338,2.665,7.13,2.665,11.375C981.486,3050.87,980.597,3054.64,978.821,3057.933z"/>
	<path d="M1084.966,3044.153c-3.12-1.386-7.02-2.73-11.699-4.03c-3.381-0.952-6.003-1.755-7.865-2.405
		c-1.865-0.649-3.402-1.56-4.615-2.729c-1.215-1.17-1.82-2.708-1.82-4.615c0-4.765,3.293-7.149,9.88-7.149
		c3.12,0,5.915,0.564,8.386,1.689c2.47,1.128,4.484,2.645,6.045,4.55c1.213,1.215,2.772,1.82,4.68,1.82
		c1.561,0,2.945-0.476,4.16-1.43c1.646-1.3,2.47-2.945,2.47-4.94c0-1.732-0.564-3.293-1.689-4.68c-2.515-3.205-5.98-5.633-10.4-7.28
		c-4.42-1.646-8.84-2.47-13.26-2.47c-4.335,0-8.43,0.845-12.285,2.535c-3.857,1.689-6.978,4.074-9.36,7.149
		c-2.385,3.077-3.574,6.695-3.574,10.855c0,4.768,1.147,8.56,3.444,11.375c2.296,2.817,5.025,4.92,8.19,6.305
		c3.162,1.388,7.258,2.774,12.285,4.16c4.853,1.3,8.428,2.6,10.725,3.9c2.295,1.3,3.445,3.207,3.445,5.72
		c0,4.854-3.38,7.41-10.141,7.67c-3.987,0-7.39-0.65-10.205-1.95c-2.817-1.3-5.524-3.293-8.125-5.979
		c-1.646-1.646-3.38-2.471-5.199-2.471c-1.301,0-2.558,0.391-3.771,1.17c-2.255,1.561-3.38,3.468-3.38,5.721
		c0,1.56,0.39,2.859,1.17,3.899c3.12,4.248,7.15,7.325,12.09,9.23c4.94,1.905,10.271,2.859,15.99,2.859
		c4.16,0,8.21-0.824,12.155-2.47c3.942-1.646,7.17-4.05,9.685-7.215c2.513-3.163,3.771-6.867,3.771-11.115
		c0-4.68-1.085-8.45-3.25-11.31C1090.729,3047.663,1088.086,3045.541,1084.966,3044.153z"/>
	<path d="M1173.755,3014.318c1.561-3.075,2.341-6.478,2.341-10.205c0-1.732-0.521-3.315-1.561-4.745s-2.645-2.145-4.81-2.145
		c-2.08,0-3.705,0.715-4.875,2.145s-1.755,3.013-1.755,4.745c0,2.688-0.976,4.702-2.926,6.045c-1.949,1.345-4.659,2.015-8.125,2.015
		v0.131c-3.814-1.213-7.627-1.82-11.439-1.82c-6.588,0-12.567,1.539-17.94,4.615c-5.374,3.077-9.62,7.367-12.739,12.869
		c-3.12,5.505-4.681,11.723-4.681,18.655c0,6.935,1.561,13.152,4.681,18.655c3.119,5.505,7.365,9.772,12.739,12.805
		c5.373,3.035,11.353,4.55,17.94,4.55c6.5,0,12.457-1.515,17.875-4.55c5.415-3.032,9.685-7.3,12.805-12.805
		c3.12-5.503,4.68-11.721,4.68-18.655c0-4.853-0.802-9.402-2.404-13.649c-1.604-4.246-3.88-8.016-6.825-11.311
		C1169.855,3019.843,1172.195,3017.395,1173.755,3014.318z M1157.7,3057.933c-1.777,3.294-4.16,5.85-7.149,7.67
		c-2.99,1.819-6.306,2.729-9.945,2.729c-3.641,0-6.955-0.91-9.945-2.729c-2.99-1.82-5.375-4.376-7.149-7.67
		c-1.777-3.293-2.665-7.063-2.665-11.311c0-4.245,0.888-8.037,2.665-11.375c1.774-3.335,4.159-5.915,7.149-7.734
		c2.99-1.82,6.305-2.73,9.945-2.73c3.64,0,6.955,0.91,9.945,2.73c2.989,1.819,5.372,4.399,7.149,7.734
		c1.775,3.338,2.665,7.13,2.665,11.375C1160.365,3050.87,1159.476,3054.64,1157.7,3057.933z"/>
	<path d="M1244.476,3018.348c-3.38-5.243-9.49-7.865-18.33-7.865c-4.507,0-8.645,1.127-12.415,3.38
		c-3.77,2.255-6.825,4.94-9.165,8.06v-2.21c0-2.252-0.737-4.138-2.21-5.654c-1.475-1.516-3.337-2.275-5.59-2.275
		c-2.255,0-4.117,0.76-5.59,2.275c-1.475,1.517-2.21,3.402-2.21,5.654v53.69c0,2.255,0.735,4.14,2.21,5.655
		c1.473,1.517,3.335,2.274,5.59,2.274c2.253,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28
		c0-4.42,1.431-8.08,4.29-10.984c2.86-2.903,6.803-4.355,11.83-4.355c4.853,0,8.275,1.365,10.271,4.095
		c1.992,2.73,2.989,6.48,2.989,11.245v33.28c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.336,2.274,5.591,2.274
		c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28C1249.546,3030.85,1247.855,3023.593,1244.476,3018.348z"
		/>
</g>
</g>

</svg>
`;
};
