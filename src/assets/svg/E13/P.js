export const svg = (name, boxColor, nameColor, percent, size, thickness) => {
  return `
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1567.251 4292.946" style="enable-background:new 0 0 1567.251 4292.946;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#E2D6C7;}
	.st1{fill:${boxColor.hexCode};}
	.st2{fill:${nameColor.hexCode};}
	.st3{font-family:'#9Slide03QuicksandBold-Bold';}
	.st4{font-size:70px;}
	.st5{fill:${nameColor.hexCode};stroke:${nameColor.hexCode};stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st6{font-family:'WildSageRegular';}
	.st7{font-size:328.7417px;}
	.st8{stroke:#FF0000;stroke-width:0.25;stroke-miterlimit:10;}
</style>
<g transform="scale(${percent})">
<text transform="translate(900,0)" class="st3 st4">${size}</text>

<g>
	<text transform="matrix(1 0 0 1 465.9902 1716.0366)" class="st3 st4">${thickness} - ${boxColor.name}</text>
	<text transform="matrix(1 0 0 1 397.0341 561.7948)" class="st3 st4">${nameColor.name}</text>
	<text transform="matrix(1 0 0 1 453.7554 310.3174)" class="st5 st6 st7">${name}</text>
</g>

<g>
	<path class="st0" d="M814.92,2740.805v141.732h481.89v-141.732H814.92z"/>
	<path class="st8" d="M1293.51,2870.269c-0.336-0.617-0.78-1.109-1.332-1.476s-1.134-0.549-1.746-0.549h-4.104c-0.312,0-0.573,0.105-0.783,0.314
		c-0.21,0.211-0.315,0.472-0.315,0.783v10.404c0,0.312,0.096,0.573,0.288,0.783c0.191,0.21,0.438,0.314,0.738,0.314
		c0.312,0,0.563-0.102,0.756-0.306c0.191-0.204,0.288-0.468,0.288-0.792v-3.402h3.132c0.612,0,1.194-0.183,1.746-0.549
		s0.996-0.86,1.332-1.485c0.336-0.623,0.504-1.296,0.504-2.016C1294.014,2871.563,1293.846,2870.887,1293.51,2870.269z
		 M1291.646,2873.258c-0.138,0.307-0.318,0.556-0.54,0.747c-0.222,0.192-0.447,0.288-0.675,0.288h-3.132v-3.978h3.132
		c0.228,0,0.453,0.093,0.675,0.278c0.222,0.187,0.402,0.433,0.54,0.738s0.207,0.627,0.207,0.963
		S1291.784,2872.952,1291.646,2873.258z"/>
</g>
<rect x="958.115" y="2804.727" width="195.5" height="13.89"/>
<g>
	<path class="st1" d="M741.795,973.367c-39.95-20.94-90.8-31.42-152.56-31.42h-269.49v112.07h47.94v278.56h-49.23v113.37h272.08
		v-113.37h-46v-66.72c14.25,2.16,30.01,3.24,47.29,3.24c69.97,0,122.44-14.14,157.42-42.44c34.98-28.28,52.47-74.6,52.47-138.95
		C801.715,1032.427,781.735,994.317,741.795,973.367z M737.325,1211.917c-31.35,25.36-80.31,38.21-145.5,38.21
		c-16.29,0-31.24-1.01-44.44-3.02l-21.81-3.31v107.74h46v75.45h-234.16v-75.45h49.23v-316.48h-47.94v-74.15h250.53
		c58.37,0,106.73,9.84,143.76,29.25c33.49,17.57,49.77,49.47,49.77,97.55c0,29.73-4.01,55.4-11.9,76.31
		C763.265,1184.146,752.285,1199.817,737.325,1211.917z M625.985,1051.817c-13.98-11.12-32.23-16.76-54.24-16.76h-45.52v149.99
		h31.92c28.61,0,50.98-6.93,66.48-20.61c16.18-14.29,24.38-35.09,24.38-61.83C649.005,1081.366,641.045,1063.807,625.985,1051.817z
		 M558.145,1166.087h-12.96v-112.07h26.56c17.7,0,31.84,4.21,42.43,12.63c10.58,8.43,15.87,20.41,15.87,35.96
		C630.045,1144.937,606.085,1166.087,558.145,1166.087z"/>
</g>
<g>
	<path class="st2" d="M594.227,3797.317h49.234v-278.559h-47.939v-112.072h269.492c61.755,0,112.608,10.476,152.56,31.419
		c39.942,20.953,59.923,59.062,59.923,114.339c0,64.356-17.491,110.675-52.473,138.956c-34.982,28.292-87.455,42.431-157.42,42.431
		c-17.278,0-33.038-1.073-47.29-3.239v66.725h45.995v113.368H594.227V3797.317z M833.918,3630.829
		c47.939,0,71.907-21.155,71.907-63.486c0-15.547-5.294-27.532-15.871-35.953c-10.588-8.421-24.728-12.633-42.432-12.633h-26.561
		v112.072H833.918z"/>
</g>
<g>
	<g>
		<path class="st0" d="M743.392,2261.509c-36.083-18.914-81.061-29.289-134.928-31.121v18.979
			c50.525,1.809,92.895,11.516,126.125,28.935c33.485,17.567,49.766,49.474,49.766,97.546c0,29.732-4.002,55.405-11.896,76.309
			c-7.604,20.138-18.575,35.807-33.537,47.903c-31.356,25.359-80.308,38.216-145.499,38.216c-16.288,0-31.24-1.017-44.441-3.024
			l-21.809-3.314v107.744h45.995v75.447H339.005v-75.447h49.234v-316.48h-47.939v-74.152h132.341v-18.96H321.341v112.072h47.939
			v278.559h-49.234v113.368h272.082v-113.368h-45.995v-66.725c14.252,2.166,30.012,3.239,47.29,3.239
			c69.964,0,122.437-14.14,157.419-42.431c34.982-28.281,52.473-74.599,52.473-138.956
			C803.315,2320.572,783.334,2282.461,743.392,2261.509z"/>
		<path class="st0" d="M626.216,2452.578c16.183-14.286,24.389-35.09,24.389-61.831c0-21.234-7.961-38.794-23.022-50.786
			c-13.983-11.123-32.23-16.759-54.241-16.759h-45.521v149.991h31.916C588.354,2473.194,610.72,2466.258,626.216,2452.578z
			 M546.781,2342.162h26.561c17.704,0,31.845,4.211,42.432,12.633c10.578,8.421,15.872,20.406,15.872,35.953
			c0,42.331-23.969,63.486-71.907,63.486h-12.956L546.781,2342.162L546.781,2342.162z"/>
	</g>
	<g>
		<path class="st0" d="M1236.887,2261.509c-36.083-18.914-81.061-29.289-134.928-31.121v18.979
			c50.525,1.809,92.895,11.516,126.125,28.935c33.485,17.566,49.766,49.474,49.766,97.546c0,29.732-4.002,55.405-11.896,76.309
			c-7.604,20.137-18.575,35.806-33.537,47.903c-31.356,25.359-80.308,38.216-145.499,38.216c-16.288,0-31.24-1.017-44.441-3.024
			l-21.809-3.314v107.744h45.995v75.447H832.501v-75.447h49.234v-316.48h-47.939v-74.152h132.342v-18.96H814.836v112.072h47.939
			v278.559h-49.234v113.368h272.082v-113.368h-45.995v-66.725c14.252,2.166,30.012,3.239,47.29,3.239
			c69.964,0,122.437-14.14,157.419-42.431c34.982-28.281,52.473-74.599,52.473-138.956
			C1296.81,2320.572,1276.829,2282.462,1236.887,2261.509z"/>
		<path class="st0" d="M1119.711,2452.578c16.183-14.286,24.389-35.09,24.389-61.831c0-21.234-7.961-38.794-23.022-50.786
			c-13.983-11.122-32.23-16.759-54.241-16.759h-45.52v149.992h31.916C1081.849,2473.194,1104.216,2466.258,1119.711,2452.578z
			 M1040.276,2342.162h26.561c17.704,0,31.844,4.211,42.432,12.633c10.578,8.421,15.871,20.406,15.871,35.953
			c0,42.331-23.969,63.486-71.907,63.486h-12.956L1040.276,2342.162L1040.276,2342.162z"/>
	</g>
</g>
<path class="st1" d="M1228.25,973.37c-39.96-20.94-90.81-31.42-152.56-31.42H806.2v112.07h47.93v278.56H804.9v113.37h272.08v-113.37
	h-45.99v-66.72c14.25,2.16,30.01,3.24,47.29,3.24c69.96,0,122.43-14.14,157.42-42.44c34.98-28.28,52.47-74.6,52.47-138.95
	C1288.17,1032.431,1268.19,994.32,1228.25,973.37z M1044.59,1166.09h-12.96v-112.07h26.56c17.71,0,31.85,4.21,42.44,12.63
	c10.57,8.43,15.87,20.41,15.87,35.96C1116.5,1144.94,1092.53,1166.09,1044.59,1166.09z"/>
<rect x="842.68" y="1445.783" width="194.26" height="15.347"/>
<g>
	<path d="M682.46,4056.574c-5.115,0-9.685,1.475-13.715,4.42c-4.03,2.947-7.042,6.24-9.035,9.881
		c-3.035-9.533-10.01-14.301-20.93-14.301c-4.42,0-8.43,1.105-12.025,3.314c-3.598,2.211-6.565,4.875-8.905,7.996v-2.08
		c0-2.253-0.737-4.139-2.21-5.655c-1.475-1.516-3.337-2.274-5.59-2.274c-2.255,0-4.117,0.759-5.59,2.274
		c-1.475,1.517-2.21,3.402-2.21,5.655v53.689c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274
		c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.279c0-4.42,1.365-8.081,4.095-10.985
		c2.73-2.903,6.521-4.354,11.375-4.354c4.68,0,7.95,1.364,9.815,4.094c1.863,2.73,2.795,6.48,2.795,11.246v33.279
		c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274c2.252,0,4.115-0.758,5.59-2.274
		c1.473-1.516,2.21-3.4,2.21-5.655v-33.279c0-4.42,1.365-8.081,4.095-10.985c2.73-2.903,6.52-4.354,11.375-4.354
		c4.68,0,7.95,1.364,9.815,4.094c1.862,2.73,2.795,6.48,2.795,11.246v33.279c0,2.255,0.735,4.14,2.21,5.655
		c1.473,1.517,3.335,2.274,5.59,2.274c2.253,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.279
		c0-9.273-1.647-16.531-4.94-21.775C696.975,4059.197,691.04,4056.574,682.46,4056.574z"/>
	<path d="M735.369,4035.385c-1.215-0.953-3.338-1.431-6.37-1.431c-2.86,0-4.94,0.478-6.24,1.431c-1.3,0.954-1.95,2.645-1.95,5.069
		v2.47c0,2.428,0.605,4.117,1.82,5.07c1.212,0.955,3.292,1.43,6.24,1.43c3.032,0,5.178-0.455,6.435-1.365
		c1.256-0.909,1.885-2.619,1.885-5.135v-2.47C737.188,4038.029,736.582,4036.339,735.369,4035.385z"/>
	<path d="M728.999,4057.875c-2.255,0-4.117,0.759-5.59,2.274c-1.475,1.517-2.21,3.402-2.21,5.655v53.689
		c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274c2.253,0,4.115-0.758,5.59-2.274
		c1.473-1.516,2.21-3.4,2.21-5.655v-53.689c0-2.253-0.737-4.139-2.21-5.655C733.114,4058.634,731.252,4057.875,728.999,4057.875z"/>
	<path d="M801.408,4109.484c-1.127,0-2.08,0.175-2.86,0.52c-0.779,0.348-1.625,0.846-2.535,1.496
		c-0.909,0.649-1.625,1.104-2.145,1.364c-2.08,1.04-5.245,1.56-9.49,1.56c-5.808,0-10.574-2.057-14.3-6.174
		c-3.728-4.116-5.59-9.296-5.59-15.535c0-6.5,1.84-11.766,5.524-15.795c3.683-4.031,8.775-6.045,15.275-6.045
		c1.04,0,2.405,0.174,4.095,0.52c1.69,0.348,2.968,0.737,3.835,1.17c0.78,0.435,1.581,0.975,2.405,1.625
		c0.822,0.65,1.668,1.17,2.535,1.561c0.865,0.389,1.992,0.584,3.38,0.584c1.82,0,3.293-0.715,4.42-2.145
		c1.125-1.43,1.69-3.098,1.69-5.006c0-3.812-2.255-6.867-6.761-9.164c-4.507-2.295-10.444-3.445-17.81-3.445
		c-6.587,0-12.48,1.539-17.68,4.615c-5.2,3.077-9.253,7.345-12.155,12.805c-2.904,5.46-4.355,11.7-4.355,18.721
		c0,6.76,1.386,12.891,4.16,18.394c2.772,5.504,6.695,9.814,11.766,12.936c5.069,3.119,10.94,4.68,17.614,4.68
		c4.506,0,8.753-0.543,12.74-1.625c3.985-1.083,7.192-2.535,9.62-4.355c2.426-1.82,3.64-3.77,3.64-5.85
		c0-2.166-0.629-3.943-1.885-5.33C805.286,4110.179,803.573,4109.484,801.408,4109.484z"/>
	<path d="M881.618,4058.784c-1.475-1.473-3.338-2.21-5.59-2.21c-2.254,0-4.117,0.76-5.59,2.275c-1.475,1.518-2.21,3.402-2.21,5.654
		v0.131c-2.515-2.34-5.59-4.268-9.23-5.785c-3.64-1.516-7.54-2.275-11.7-2.275c-5.807,0-11.114,1.539-15.925,4.615
		c-4.81,3.077-8.603,7.367-11.375,12.869c-2.774,5.506-4.16,11.723-4.16,18.656c0,6.933,1.408,13.129,4.226,18.59
		c2.815,5.459,6.65,9.729,11.505,12.805c4.853,3.077,10.27,4.615,16.25,4.615c4.072,0,7.95-0.891,11.635-2.666
		c3.683-1.774,6.607-3.92,8.775-6.434c0.085,2.254,0.845,4.117,2.274,5.59c1.43,1.475,3.271,2.209,5.525,2.209
		c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.211-3.4,2.211-5.655v-54.99C883.829,4062.164,883.091,4060.259,881.618,4058.784z
		 M863.548,4108.25c-3.555,4.117-8.146,6.174-13.779,6.174c-5.635,0-10.205-2.057-13.715-6.174
		c-3.511-4.116-5.266-9.296-5.266-15.535c0-6.24,1.775-11.44,5.33-15.601c3.553-4.16,8.103-6.239,13.65-6.239
		c5.633,0,10.225,2.079,13.779,6.239c3.553,4.16,5.33,9.36,5.33,15.601C868.878,4098.954,867.101,4104.133,863.548,4108.25z"/>
</g>

<g>
	<path d="M420.581,3035.996c-4.638-2.643-9.815-3.965-15.535-3.965c-2.255,0-4.637,0.305-7.15,0.91
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
		C428.857,3042.259,425.217,3038.641,420.581,3035.996z"/>
	<path d="M533.226,3022.281c-5.115,0-9.685,1.475-13.715,4.42c-4.03,2.947-7.042,6.24-9.035,9.88
		c-3.035-9.532-10.01-14.3-20.93-14.3c-4.42,0-8.43,1.104-12.025,3.314c-3.598,2.21-6.565,4.875-8.905,7.995v-2.08
		c0-2.252-0.737-4.138-2.21-5.654c-1.475-1.516-3.337-2.275-5.59-2.275c-2.255,0-4.117,0.76-5.59,2.275
		c-1.475,1.517-2.21,3.402-2.21,5.654v53.69c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274
		c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28c0-4.42,1.365-8.08,4.095-10.984
		c2.73-2.903,6.521-4.355,11.375-4.355c4.68,0,7.95,1.365,9.815,4.095c1.863,2.73,2.795,6.48,2.795,11.245v33.28
		c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274c2.252,0,4.115-0.758,5.59-2.274
		c1.473-1.516,2.21-3.4,2.21-5.655v-33.28c0-4.42,1.365-8.08,4.095-10.984c2.73-2.903,6.52-4.355,11.375-4.355
		c4.68,0,7.95,1.365,9.815,4.095c1.862,2.73,2.795,6.48,2.795,11.245v33.28c0,2.255,0.735,4.14,2.21,5.655
		c1.473,1.517,3.335,2.274,5.59,2.274c2.253,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28
		c0-9.272-1.647-16.53-4.94-21.774C547.741,3024.903,541.806,3022.281,533.226,3022.281z"/>
	<path d="M653.085,3022.281c-5.115,0-9.686,1.475-13.715,4.42c-4.03,2.947-7.042,6.24-9.035,9.88
		c-3.035-9.532-10.01-14.3-20.93-14.3c-4.42,0-8.43,1.104-12.025,3.314c-3.598,2.21-6.565,4.875-8.905,7.995v-2.08
		c0-2.252-0.737-4.138-2.21-5.654c-1.475-1.516-3.337-2.275-5.59-2.275c-2.255,0-4.117,0.76-5.59,2.275
		c-1.475,1.517-2.21,3.402-2.21,5.654v53.69c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274
		c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28c0-4.42,1.365-8.08,4.095-10.984
		c2.73-2.903,6.521-4.355,11.375-4.355c4.68,0,7.95,1.365,9.815,4.095c1.863,2.73,2.795,6.48,2.795,11.245v33.28
		c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274c2.252,0,4.115-0.758,5.59-2.274
		c1.473-1.516,2.21-3.4,2.21-5.655v-33.28c0-4.42,1.365-8.08,4.095-10.984c2.73-2.903,6.52-4.355,11.375-4.355
		c4.68,0,7.95,1.365,9.814,4.095c1.863,2.73,2.795,6.48,2.795,11.245v33.28c0,2.255,0.735,4.14,2.21,5.655
		c1.473,1.517,3.336,2.274,5.591,2.274c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28
		c0-9.272-1.647-16.53-4.94-21.774C667.601,3024.903,661.665,3022.281,653.085,3022.281z"/>
	<path d="M757.735,3045.551h-22.62c-2.254,0-4.14,0.737-5.654,2.21c-1.518,1.475-2.275,3.295-2.275,5.46
		c0,2.255,0.758,4.118,2.275,5.591c1.515,1.475,3.4,2.21,5.654,2.21h22.62c2.253,0,4.138-0.716,5.655-2.146
		c1.516-1.43,2.275-3.228,2.275-5.395c0-2.253-0.76-4.138-2.275-5.655C761.872,3046.311,759.988,3045.551,757.735,3045.551z"/>
	<path d="M852.114,3054.781l19.63-18.07c2.08-1.82,3.12-3.77,3.12-5.85c0-1.646-0.76-3.271-2.274-4.875
		c-1.518-1.603-3.23-2.405-5.136-2.405c-2.167,0-4.074,0.825-5.72,2.47l-27.82,26.91v-48.1c0-2.253-0.737-4.138-2.21-5.655
		c-1.475-1.516-3.337-2.275-5.59-2.275c-2.255,0-4.117,0.76-5.59,2.275c-1.475,1.518-2.21,3.402-2.21,5.655v80.34
		c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274c2.253,0,4.115-0.758,5.59-2.274
		c1.473-1.516,2.21-3.4,2.21-5.655v-13.65l6.37-5.85l23.4,24.7c1.56,1.734,3.465,2.6,5.72,2.6c1.905,0,3.705-0.735,5.396-2.21
		c1.689-1.473,2.534-3.293,2.534-5.46c0-2.165-0.824-4.115-2.47-5.85L852.114,3054.781z"/>
	<path d="M937.458,3026.896c-5.418-3.076-11.375-4.615-17.875-4.615c-6.588,0-12.567,1.539-17.94,4.615
		c-5.374,3.077-9.62,7.367-12.739,12.869c-3.12,5.505-4.681,11.723-4.681,18.655c0,6.935,1.561,13.152,4.681,18.655
		c3.119,5.505,7.365,9.772,12.739,12.805c5.373,3.035,11.353,4.55,17.94,4.55c6.5,0,12.457-1.515,17.875-4.55
		c5.415-3.032,9.685-7.3,12.805-12.805c3.12-5.503,4.68-11.721,4.68-18.655c0-6.933-1.56-13.15-4.68-18.655
		C947.143,3034.264,942.873,3029.974,937.458,3026.896z M936.678,3069.731c-1.777,3.294-4.16,5.85-7.149,7.67
		c-2.99,1.819-6.306,2.729-9.945,2.729c-3.641,0-6.955-0.91-9.945-2.729c-2.99-1.82-5.375-4.376-7.149-7.67
		c-1.777-3.293-2.665-7.063-2.665-11.311c0-4.245,0.888-8.037,2.665-11.375c1.774-3.335,4.159-5.915,7.149-7.734
		c2.99-1.82,6.305-2.73,9.945-2.73c3.64,0,6.955,0.91,9.945,2.73c2.989,1.819,5.372,4.399,7.149,7.734
		c1.775,3.338,2.665,7.13,2.665,11.375C939.343,3062.668,938.453,3066.438,936.678,3069.731z"/>
	<path d="M1042.823,3055.951c-3.12-1.386-7.02-2.73-11.699-4.03c-3.381-0.952-6.003-1.755-7.865-2.405
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
		c0-4.68-1.085-8.45-3.25-11.31C1048.585,3059.461,1045.943,3057.339,1042.823,3055.951z"/>
	<path d="M1131.612,3026.116c1.561-3.075,2.341-6.478,2.341-10.205c0-1.732-0.521-3.315-1.561-4.745s-2.645-2.145-4.81-2.145
		c-2.08,0-3.705,0.715-4.875,2.145s-1.755,3.013-1.755,4.745c0,2.688-0.976,4.702-2.926,6.045c-1.949,1.345-4.659,2.015-8.125,2.015
		v0.131c-3.814-1.213-7.627-1.82-11.439-1.82c-6.588,0-12.567,1.539-17.94,4.615c-5.374,3.077-9.62,7.367-12.739,12.869
		c-3.12,5.505-4.681,11.723-4.681,18.655c0,6.935,1.561,13.152,4.681,18.655c3.119,5.505,7.365,9.772,12.739,12.805
		c5.373,3.035,11.353,4.55,17.94,4.55c6.5,0,12.457-1.515,17.875-4.55c5.415-3.032,9.685-7.3,12.805-12.805
		c3.12-5.503,4.68-11.721,4.68-18.655c0-4.853-0.802-9.402-2.404-13.649c-1.604-4.246-3.88-8.016-6.825-11.311
		C1127.712,3031.641,1130.052,3029.193,1131.612,3026.116z M1115.557,3069.731c-1.777,3.294-4.16,5.85-7.149,7.67
		c-2.99,1.819-6.306,2.729-9.945,2.729c-3.641,0-6.955-0.91-9.945-2.729c-2.99-1.82-5.375-4.376-7.149-7.67
		c-1.777-3.293-2.665-7.063-2.665-11.311c0-4.245,0.888-8.037,2.665-11.375c1.774-3.335,4.159-5.915,7.149-7.734
		c2.99-1.82,6.305-2.73,9.945-2.73c3.64,0,6.955,0.91,9.945,2.73c2.989,1.819,5.372,4.399,7.149,7.734
		c1.775,3.338,2.665,7.13,2.665,11.375C1118.222,3062.668,1117.332,3066.438,1115.557,3069.731z"/>
	<path d="M1202.332,3030.146c-3.38-5.243-9.49-7.865-18.33-7.865c-4.507,0-8.645,1.127-12.415,3.38
		c-3.77,2.255-6.825,4.94-9.165,8.06v-2.21c0-2.252-0.737-4.138-2.21-5.654c-1.475-1.516-3.337-2.275-5.59-2.275
		c-2.255,0-4.117,0.76-5.59,2.275c-1.475,1.517-2.21,3.402-2.21,5.654v53.69c0,2.255,0.735,4.14,2.21,5.655
		c1.473,1.517,3.335,2.274,5.59,2.274c2.253,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28
		c0-4.42,1.431-8.08,4.29-10.984c2.86-2.903,6.803-4.355,11.83-4.355c4.853,0,8.275,1.365,10.271,4.095
		c1.992,2.73,2.989,6.48,2.989,11.245v33.28c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.336,2.274,5.591,2.274
		c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28C1207.403,3042.648,1205.712,3035.391,1202.332,3030.146z"
		/>
</g>
</g>
</svg>`;
};