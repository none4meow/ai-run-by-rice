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

  return `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1567.251 4232.348" style="enable-background:new 0 0 1567.251 4232.348;" xml:space="preserve">
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
	<text transform="matrix(1 0 0 1 467.5195 1721.8849)" class="st3 st4">5mm - ${boxColor.name}</text>
	<text transform="matrix(1 0 0 1 398.5635 567.6431)" class="st3 st4">5mm - ${nameColor.name}</text>
	<text transform="matrix(1 0 0 1 455.2847 316.1656)" class="st5 st6 st7">${name}</text>
</g>

<rect x="876.1" y="1503.838" width="194.5" height="${bar}"/>

	<path class="st0" d="M863.164,2651.556v141.732h396.85v-141.732H863.164z"/>
<rect x="963.715" y="2715.477" width="195.75" height="${gap}"/>
<g>
	<path class="st1" d="M255.499,1000.035v198.49h88.86l13.62-86.92h44.76v278.27h-51.89v114.16h282.16v-114.16h-51.89v-278.27h46.05
		l13.62,86.92h88.87v-198.49H255.499z M710.669,1179.535h-53.63l-13.63-86.92h-81.28v316.25h51.9v76.19h-244.2v-76.19h51.89v-316.25
		h-79.98l-13.62,86.92h-53.64v-160.51h436.19V1179.535z"/>
</g>
<g>
	<path class="st2" d="M643.661,3882.183v-114.162h51.892V3489.75h-44.757l-13.621,86.919H548.31v-198.487h474.163v198.487h-88.865
		l-13.621-86.919h-46.055v278.271h51.892v114.162H643.661z"/>
</g>
<g>
	<polygon class="st0" points="604.902,2142.751 604.902,2161.737 762.415,2161.737 762.415,2322.254 708.775,2322.254 
		695.155,2235.335 613.874,2235.335 613.874,2551.575 665.766,2551.575 665.766,2627.768 421.573,2627.768 421.573,2551.575 
		473.464,2551.575 473.464,2235.335 393.482,2235.335 379.86,2322.254 326.221,2322.254 326.221,2161.737 483.734,2161.737 
		483.734,2142.751 307.236,2142.751 307.236,2341.239 396.102,2341.239 409.723,2254.32 454.48,2254.32 454.48,2532.591 
		402.588,2532.591 402.588,2646.753 684.751,2646.753 684.751,2532.591 632.859,2532.591 632.859,2254.32 678.913,2254.32 
		692.535,2341.239 781.4,2341.239 781.4,2142.751 	"/>
	<polygon class="st0" points="1083.517,2142.751 1083.517,2161.737 1241.03,2161.737 1241.03,2322.254 1187.391,2322.254 
		1173.769,2235.335 1092.49,2235.335 1092.49,2551.575 1144.382,2551.575 1144.382,2627.768 900.187,2627.768 900.187,2551.575 
		952.08,2551.575 952.08,2235.335 872.097,2235.335 858.476,2322.254 804.836,2322.254 804.836,2161.737 962.349,2161.737 
		962.349,2142.751 785.852,2142.751 785.852,2341.239 874.717,2341.239 888.339,2254.32 933.095,2254.32 933.095,2532.591 
		881.203,2532.591 881.203,2646.753 1163.366,2646.753 1163.366,2532.591 1111.474,2532.591 1111.474,2254.32 1157.529,2254.32 
		1171.15,2341.239 1260.015,2341.239 1260.015,2142.751 	"/>
</g>
<polygon class="st1" points="1210.43,1000.032 1210.43,1198.522 1121.57,1198.522 1107.95,1111.602 1061.89,1111.602 
	1061.89,1389.872 1113.78,1389.872 1113.78,1504.032 831.62,1504.032 831.62,1389.872 883.51,1389.872 883.51,1111.602 
	838.75,1111.602 825.13,1198.522 736.27,1198.522 736.27,1000.032 "/>
<g>
	<path d="M723.046,4010.004c-5.115,0-9.685,1.475-13.715,4.42c-4.03,2.947-7.042,6.24-9.035,9.881
		c-3.035-9.533-10.01-14.301-20.93-14.301c-4.42,0-8.43,1.105-12.025,3.314c-3.598,2.211-6.565,4.875-8.905,7.996v-2.08
		c0-2.253-0.737-4.139-2.21-5.655c-1.475-1.516-3.337-2.274-5.59-2.274c-2.255,0-4.117,0.759-5.59,2.274
		c-1.475,1.517-2.21,3.402-2.21,5.655v53.689c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274
		c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.279c0-4.42,1.365-8.081,4.095-10.985
		c2.73-2.903,6.521-4.354,11.375-4.354c4.68,0,7.95,1.364,9.815,4.094c1.863,2.73,2.795,6.48,2.795,11.246v33.279
		c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274c2.252,0,4.115-0.758,5.59-2.274
		c1.473-1.516,2.21-3.4,2.21-5.655v-33.279c0-4.42,1.365-8.081,4.095-10.985c2.73-2.903,6.52-4.354,11.375-4.354
		c4.68,0,7.95,1.364,9.815,4.094c1.862,2.73,2.795,6.48,2.795,11.246v33.279c0,2.255,0.735,4.14,2.21,5.655
		c1.473,1.517,3.335,2.274,5.59,2.274c2.253,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.279
		c0-9.273-1.647-16.531-4.94-21.775C737.561,4012.627,731.626,4010.004,723.046,4010.004z"/>
	<path d="M775.955,3988.814c-1.215-0.953-3.338-1.431-6.37-1.431c-2.86,0-4.94,0.478-6.24,1.431c-1.3,0.954-1.95,2.645-1.95,5.069
		v2.47c0,2.428,0.605,4.117,1.82,5.07c1.212,0.955,3.292,1.43,6.24,1.43c3.032,0,5.178-0.455,6.435-1.365
		c1.256-0.909,1.885-2.619,1.885-5.135v-2.47C777.774,3991.459,777.168,3989.768,775.955,3988.814z"/>
	<path d="M769.585,4011.304c-2.255,0-4.117,0.759-5.59,2.274c-1.475,1.517-2.21,3.402-2.21,5.655v53.689
		c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274c2.253,0,4.115-0.758,5.59-2.274
		c1.473-1.516,2.21-3.4,2.21-5.655v-53.689c0-2.253-0.737-4.139-2.21-5.655C773.7,4012.063,771.838,4011.304,769.585,4011.304z"/>
	<path d="M841.994,4062.914c-1.127,0-2.08,0.175-2.86,0.52c-0.779,0.348-1.625,0.846-2.535,1.496
		c-0.909,0.649-1.625,1.104-2.145,1.364c-2.08,1.04-5.245,1.56-9.49,1.56c-5.808,0-10.574-2.057-14.3-6.174
		c-3.728-4.116-5.59-9.296-5.59-15.535c0-6.5,1.84-11.766,5.524-15.795c3.683-4.031,8.775-6.045,15.275-6.045
		c1.04,0,2.405,0.174,4.095,0.52c1.69,0.348,2.968,0.737,3.835,1.17c0.78,0.435,1.581,0.975,2.405,1.625
		c0.822,0.65,1.668,1.17,2.535,1.561c0.865,0.389,1.992,0.584,3.38,0.584c1.82,0,3.293-0.715,4.42-2.145
		c1.125-1.43,1.69-3.098,1.69-5.006c0-3.812-2.255-6.867-6.761-9.164c-4.507-2.295-10.444-3.445-17.81-3.445
		c-6.587,0-12.48,1.539-17.68,4.615c-5.2,3.077-9.253,7.345-12.155,12.805c-2.904,5.46-4.355,11.7-4.355,18.721
		c0,6.76,1.386,12.892,4.16,18.395c2.772,5.504,6.695,9.814,11.766,12.936c5.069,3.119,10.94,4.68,17.614,4.68
		c4.506,0,8.753-0.543,12.74-1.625c3.985-1.083,7.192-2.535,9.62-4.355c2.426-1.82,3.64-3.77,3.64-5.85
		c0-2.166-0.629-3.943-1.885-5.33C845.872,4063.609,844.159,4062.914,841.994,4062.914z"/>
	<path d="M922.204,4012.214c-1.475-1.473-3.338-2.21-5.59-2.21c-2.254,0-4.117,0.76-5.59,2.275c-1.475,1.518-2.21,3.402-2.21,5.654
		v0.131c-2.515-2.34-5.59-4.268-9.23-5.785c-3.64-1.516-7.54-2.275-11.7-2.275c-5.807,0-11.114,1.539-15.925,4.615
		c-4.81,3.077-8.603,7.367-11.375,12.869c-2.774,5.506-4.16,11.723-4.16,18.656s1.408,13.129,4.226,18.59
		c2.815,5.459,6.65,9.729,11.505,12.805c4.853,3.077,10.27,4.615,16.25,4.615c4.072,0,7.95-0.891,11.635-2.666
		c3.683-1.774,6.607-3.92,8.775-6.434c0.085,2.254,0.845,4.117,2.274,5.59c1.43,1.475,3.271,2.209,5.525,2.209
		c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.211-3.4,2.211-5.655v-54.99C924.415,4015.594,923.677,4013.688,922.204,4012.214z
		 M904.134,4061.679c-3.555,4.117-8.146,6.174-13.779,6.174c-5.635,0-10.205-2.057-13.715-6.174
		c-3.511-4.116-5.266-9.296-5.266-15.535c0-6.24,1.775-11.44,5.33-15.601c3.553-4.16,8.103-6.239,13.65-6.239
		c5.633,0,10.225,2.079,13.779,6.239c3.553,4.16,5.33,9.36,5.33,15.601C909.464,4052.384,907.687,4057.563,904.134,4061.679z"/>
</g>

<g>
	<path d="M447.706,2943.14c-4.638-2.643-9.815-3.965-15.535-3.965c-2.255,0-4.637,0.305-7.15,0.91
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
		C455.981,2949.403,452.341,2945.785,447.706,2943.14z"/>
	<path d="M560.35,2929.426c-5.115,0-9.685,1.475-13.715,4.42c-4.03,2.947-7.042,6.24-9.035,9.88c-3.035-9.532-10.01-14.3-20.93-14.3
		c-4.42,0-8.43,1.104-12.025,3.314c-3.598,2.21-6.565,4.875-8.905,7.995v-2.08c0-2.252-0.737-4.138-2.21-5.654
		c-1.475-1.516-3.337-2.275-5.59-2.275c-2.255,0-4.117,0.76-5.59,2.275c-1.475,1.517-2.21,3.402-2.21,5.654v53.69
		c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274c2.252,0,4.115-0.758,5.59-2.274
		c1.473-1.516,2.21-3.4,2.21-5.655v-33.28c0-4.42,1.365-8.08,4.095-10.984c2.73-2.903,6.521-4.355,11.375-4.355
		c4.68,0,7.95,1.365,9.815,4.095c1.863,2.73,2.795,6.48,2.795,11.245v33.28c0,2.255,0.735,4.14,2.21,5.655
		c1.473,1.517,3.335,2.274,5.59,2.274c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28
		c0-4.42,1.365-8.08,4.095-10.984c2.73-2.903,6.52-4.355,11.375-4.355c4.68,0,7.95,1.365,9.815,4.095
		c1.862,2.73,2.795,6.48,2.795,11.245v33.28c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274
		c2.253,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28c0-9.272-1.647-16.53-4.94-21.774
		C574.865,2932.048,568.93,2929.426,560.35,2929.426z"/>
	<path d="M680.209,2929.426c-5.115,0-9.686,1.475-13.715,4.42c-4.03,2.947-7.042,6.24-9.035,9.88
		c-3.035-9.532-10.01-14.3-20.93-14.3c-4.42,0-8.43,1.104-12.025,3.314c-3.598,2.21-6.565,4.875-8.905,7.995v-2.08
		c0-2.252-0.737-4.138-2.21-5.654c-1.475-1.516-3.337-2.275-5.59-2.275c-2.255,0-4.117,0.76-5.59,2.275
		c-1.475,1.517-2.21,3.402-2.21,5.654v53.69c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274
		c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28c0-4.42,1.365-8.08,4.095-10.984
		c2.73-2.903,6.521-4.355,11.375-4.355c4.68,0,7.95,1.365,9.815,4.095c1.863,2.73,2.795,6.48,2.795,11.245v33.28
		c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274c2.252,0,4.115-0.758,5.59-2.274
		c1.473-1.516,2.21-3.4,2.21-5.655v-33.28c0-4.42,1.365-8.08,4.095-10.984c2.73-2.903,6.52-4.355,11.375-4.355
		c4.68,0,7.95,1.365,9.814,4.095c1.863,2.73,2.795,6.48,2.795,11.245v33.28c0,2.255,0.735,4.14,2.21,5.655
		c1.473,1.517,3.336,2.274,5.591,2.274c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28
		c0-9.272-1.647-16.53-4.94-21.774C694.725,2932.048,688.79,2929.426,680.209,2929.426z"/>
	<path d="M784.859,2952.695h-22.62c-2.254,0-4.14,0.737-5.654,2.21c-1.518,1.475-2.275,3.295-2.275,5.46
		c0,2.255,0.758,4.118,2.275,5.591c1.515,1.475,3.4,2.21,5.654,2.21h22.62c2.253,0,4.138-0.716,5.655-2.146
		c1.516-1.43,2.275-3.228,2.275-5.395c0-2.253-0.76-4.138-2.275-5.655C788.997,2953.455,787.112,2952.695,784.859,2952.695z"/>
	<path d="M879.238,2961.926l19.63-18.07c2.08-1.82,3.12-3.77,3.12-5.85c0-1.646-0.76-3.271-2.274-4.875
		c-1.518-1.603-3.23-2.405-5.136-2.405c-2.167,0-4.074,0.825-5.72,2.47l-27.82,26.91v-48.1c0-2.253-0.737-4.138-2.21-5.655
		c-1.475-1.516-3.337-2.275-5.59-2.275c-2.255,0-4.117,0.76-5.59,2.275c-1.475,1.518-2.21,3.402-2.21,5.655v80.34
		c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274c2.253,0,4.115-0.758,5.59-2.274
		c1.473-1.516,2.21-3.4,2.21-5.655v-13.65l6.37-5.85l23.4,24.7c1.56,1.734,3.465,2.6,5.72,2.6c1.905,0,3.705-0.735,5.396-2.21
		c1.689-1.473,2.534-3.293,2.534-5.46c0-2.165-0.824-4.115-2.47-5.85L879.238,2961.926z"/>
	<path d="M964.583,2934.041c-5.418-3.076-11.375-4.615-17.875-4.615c-6.588,0-12.567,1.539-17.94,4.615
		c-5.374,3.077-9.62,7.367-12.739,12.869c-3.12,5.505-4.681,11.723-4.681,18.655c0,6.935,1.561,13.152,4.681,18.655
		c3.119,5.505,7.365,9.772,12.739,12.805c5.373,3.035,11.353,4.55,17.94,4.55c6.5,0,12.457-1.515,17.875-4.55
		c5.415-3.032,9.685-7.3,12.805-12.805c3.12-5.503,4.68-11.721,4.68-18.655c0-6.933-1.56-13.15-4.68-18.655
		C974.267,2941.408,969.998,2937.118,964.583,2934.041z M963.802,2976.876c-1.777,3.294-4.16,5.85-7.149,7.67
		c-2.99,1.819-6.306,2.729-9.945,2.729c-3.641,0-6.955-0.91-9.945-2.729c-2.99-1.82-5.375-4.376-7.149-7.67
		c-1.777-3.293-2.665-7.063-2.665-11.311c0-4.245,0.888-8.037,2.665-11.375c1.774-3.335,4.159-5.915,7.149-7.734
		c2.99-1.82,6.305-2.73,9.945-2.73c3.64,0,6.955,0.91,9.945,2.73c2.989,1.819,5.372,4.399,7.149,7.734
		c1.775,3.338,2.665,7.13,2.665,11.375C966.467,2969.812,965.578,2973.583,963.802,2976.876z"/>
	<path d="M1069.947,2963.095c-3.12-1.386-7.02-2.73-11.699-4.03c-3.381-0.952-6.003-1.755-7.865-2.405
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
		c0-4.68-1.085-8.45-3.25-11.31C1075.709,2966.605,1073.067,2964.483,1069.947,2963.095z"/>
	<path d="M1158.736,2933.26c1.561-3.075,2.341-6.478,2.341-10.205c0-1.732-0.521-3.315-1.561-4.745s-2.645-2.145-4.81-2.145
		c-2.08,0-3.705,0.715-4.875,2.145s-1.755,3.013-1.755,4.745c0,2.688-0.976,4.702-2.926,6.045c-1.949,1.345-4.659,2.015-8.125,2.015
		v0.131c-3.814-1.213-7.627-1.82-11.439-1.82c-6.588,0-12.567,1.539-17.94,4.615c-5.374,3.077-9.62,7.367-12.739,12.869
		c-3.12,5.505-4.681,11.723-4.681,18.655c0,6.935,1.561,13.152,4.681,18.655c3.119,5.505,7.365,9.772,12.739,12.805
		c5.373,3.035,11.353,4.55,17.94,4.55c6.5,0,12.457-1.515,17.875-4.55c5.415-3.032,9.685-7.3,12.805-12.805
		c3.12-5.503,4.68-11.721,4.68-18.655c0-4.853-0.802-9.402-2.404-13.649c-1.604-4.246-3.88-8.016-6.825-11.311
		C1154.836,2938.785,1157.176,2936.338,1158.736,2933.26z M1142.681,2976.876c-1.777,3.294-4.16,5.85-7.149,7.67
		c-2.99,1.819-6.306,2.729-9.945,2.729c-3.641,0-6.955-0.91-9.945-2.729c-2.99-1.82-5.375-4.376-7.149-7.67
		c-1.777-3.293-2.665-7.063-2.665-11.311c0-4.245,0.888-8.037,2.665-11.375c1.774-3.335,4.159-5.915,7.149-7.734
		c2.99-1.82,6.305-2.73,9.945-2.73c3.64,0,6.955,0.91,9.945,2.73c2.989,1.819,5.372,4.399,7.149,7.734
		c1.775,3.338,2.665,7.13,2.665,11.375C1145.346,2969.812,1144.457,2973.583,1142.681,2976.876z"/>
	<path d="M1229.457,2937.291c-3.38-5.243-9.49-7.865-18.33-7.865c-4.507,0-8.645,1.127-12.415,3.38
		c-3.77,2.255-6.825,4.94-9.165,8.06v-2.21c0-2.252-0.737-4.138-2.21-5.654c-1.475-1.516-3.337-2.275-5.59-2.275
		c-2.255,0-4.117,0.76-5.59,2.275c-1.475,1.517-2.21,3.402-2.21,5.654v53.69c0,2.255,0.735,4.14,2.21,5.655
		c1.473,1.517,3.335,2.274,5.59,2.274c2.253,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28
		c0-4.42,1.431-8.08,4.29-10.984c2.86-2.903,6.803-4.355,11.83-4.355c4.853,0,8.275,1.365,10.271,4.095
		c1.992,2.73,2.989,6.48,2.989,11.245v33.28c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.336,2.274,5.591,2.274
		c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28C1234.527,2949.793,1232.836,2942.535,1229.457,2937.291z"
		/>
</g>
</g>
</svg>`;
};
