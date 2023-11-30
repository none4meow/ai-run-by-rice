export const svg = (name, boxColor, nameColor, percent, size, thickness) => {
  return `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	style="enable-background:new 0 0 2028.522 4251.13;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#E2D6C7;}
	.st1{fill:${boxColor.hexCode};}
	.st2{fill:${nameColor.hexCode};}
	.st3{font-family:'#9Slide03QuicksandBold-Bold';}
	.st4{font-size:130px;}
	.st5{fill:#FFFFFF;stroke:${nameColor.hexCode};stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st6{font-family:'WildSageRegular';}
	.st7{font-size:328.7417px;}
</style>

<g transform="scale(${percent})">
<text transform="translate(900,0)" class="st3 st4">${size}</text>
<g>
	<text transform="matrix(1 0 0 1 736.9773 1748.95)" class="st3 st4">${thickness} - ${boxColor.name}</text>
	<text transform="matrix(1 0 0 1 668.0212 594.7082)" class="st3 st4">${nameColor.name}</text>
	<text transform="matrix(1 0 0 1 724.7449 343.2308)" class="st5 st6 st7">${name}</text>
</g>

<path class="st0" d="M1108.688,2609.2v170.07h651.96V2609.2H1108.688z"/>
<g>
	<rect x="1220.258" y="2687.29" width="130.48" height="13.89"/>
	<rect x="1518.588" y="2687.29" width="130.49" height="13.89"/>
</g>
<g>
	<path class="st1" d="M742.118,1027.13v112.07h44.05l-49.24,169.73l-79.68-281.8h-129.56l-82.27,291.52l-50.53-179.45h47.94v-112.07
		h-281.8v112.07h51.82l110.13,391.93h169.73l64.13-223.49l60.9,223.49h171.67l108.18-391.93h53.12v-112.07H742.118z
		 M931.748,1120.24h-48.59l-108.19,391.93h-142.75l-74.9-274.92l-78.9,274.92h-141.07l-110.13-391.93h-47.23v-74.15h243.88v74.15
		h-54.02l75.55,268.29l96.64-342.44h100.87l93.79,331.7l74.71-257.55h-50.33v-74.15h170.67V1120.24z"/>
</g>
<g>
	<path class="st2" d="M843.981,3935.294l-110.128-391.928h-51.825v-112.072h281.799v112.072h-47.938l50.529,179.444l82.273-291.516
		h129.563l79.68,281.799l49.234-169.727h-44.051v-112.072h208.596v112.072h-53.121l-108.185,391.928h-171.671l-60.895-223.496
		l-64.134,223.496H843.981z"/>
</g>
<g>
	<polygon class="st0" points="459.63,2099.469 372.638,2099.469 372.638,2118.43 440.67,2118.43 440.67,2192.581 386.656,2192.581 
		462.201,2460.864 558.843,2118.43 659.715,2118.43 753.504,2450.129 828.212,2192.581 777.88,2192.581 777.88,2118.43 
		802.553,2118.43 802.553,2099.469 758.92,2099.469 758.92,2211.542 802.971,2211.542 753.737,2381.269 674.057,2099.469 
		544.494,2099.469 462.221,2390.986 411.692,2211.542 459.63,2211.542 	"/>
	<polygon class="st0" points="924.257,2099.469 924.257,2118.43 948.556,2118.43 948.556,2192.581 899.96,2192.581 
		791.775,2584.509 649.025,2584.509 574.119,2309.585 495.227,2584.509 354.152,2584.509 244.023,2192.581 196.791,2192.581 
		196.791,2118.43 250.934,2118.43 250.934,2099.469 177.831,2099.469 177.831,2211.542 229.657,2211.542 339.785,2603.469 
		509.512,2603.469 573.646,2379.973 634.541,2603.469 806.211,2603.469 914.395,2211.542 967.516,2211.542 967.516,2099.469 	"/>
</g>
<g>
	<polygon class="st0" points="1252.766,2099.469 1165.774,2099.469 1165.774,2118.43 1233.806,2118.43 1233.806,2192.581 
		1179.792,2192.581 1255.337,2460.864 1351.98,2118.43 1452.851,2118.43 1546.64,2450.129 1621.349,2192.581 1571.016,2192.581 
		1571.016,2118.43 1595.689,2118.43 1595.689,2099.469 1552.057,2099.469 1552.057,2211.542 1596.108,2211.542 1546.873,2381.269 
		1467.193,2099.469 1337.63,2099.469 1255.357,2390.986 1204.828,2211.542 1252.766,2211.542 	"/>
	<polygon class="st0" points="1717.393,2099.469 1717.393,2118.43 1741.692,2118.43 1741.692,2192.581 1693.096,2192.581 
		1584.911,2584.509 1442.161,2584.509 1367.255,2309.585 1288.364,2584.509 1147.288,2584.509 1037.16,2192.581 989.927,2192.581 
		989.927,2118.43 1044.07,2118.43 1044.07,2099.469 970.967,2099.469 970.967,2211.542 1022.793,2211.542 1132.921,2603.469 
		1302.648,2603.469 1366.782,2379.973 1427.677,2603.469 1599.347,2603.469 1707.531,2211.542 1760.652,2211.542 1760.652,2099.469 
			"/>
</g>
<g>
	<rect x="1135.808" y="1531.13" width="129.47" height="15.13"/>
	<rect x="1433.828" y="1531.13" width="129.48" height="15.13"/>
</g>
<polygon class="st1" points="1745.588,1027.13 1745.588,1139.201 1692.468,1139.201 1584.288,1531.13 1412.618,1531.13 
	1351.718,1307.63 1287.588,1531.13 1117.858,1531.13 1007.728,1139.201 955.908,1139.201 955.908,1027.13 1237.708,1027.13 
	1237.708,1139.201 1189.768,1139.201 1240.298,1318.651 1322.568,1027.13 1452.128,1027.13 1531.808,1308.93 1581.048,1139.201 
	1536.998,1139.201 1536.998,1027.13 "/>
<g>
	<path d="M1016.29,4093.107c-5.115,0-9.685,1.475-13.715,4.42c-4.03,2.947-7.042,6.24-9.035,9.881
		c-3.035-9.533-10.01-14.301-20.93-14.301c-4.42,0-8.43,1.105-12.025,3.314c-3.598,2.211-6.565,4.875-8.905,7.996v-2.08
		c0-2.253-0.737-4.139-2.21-5.655c-1.475-1.516-3.337-2.274-5.59-2.274c-2.255,0-4.117,0.759-5.59,2.274
		c-1.475,1.517-2.21,3.402-2.21,5.655v53.689c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274
		c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.279c0-4.42,1.365-8.081,4.095-10.985
		c2.73-2.903,6.521-4.354,11.375-4.354c4.68,0,7.95,1.364,9.815,4.094c1.863,2.73,2.795,6.48,2.795,11.246v33.279
		c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274c2.252,0,4.115-0.758,5.59-2.274
		c1.473-1.516,2.21-3.4,2.21-5.655v-33.279c0-4.42,1.365-8.081,4.095-10.985c2.73-2.903,6.52-4.354,11.375-4.354
		c4.68,0,7.95,1.364,9.815,4.094c1.862,2.73,2.795,6.48,2.795,11.246v33.279c0,2.255,0.735,4.14,2.21,5.655
		c1.473,1.517,3.335,2.274,5.59,2.274c2.253,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.279
		c0-9.273-1.647-16.531-4.94-21.775C1030.805,4095.73,1024.87,4093.107,1016.29,4093.107z"/>
	<path d="M1069.199,4071.917c-1.215-0.953-3.338-1.431-6.37-1.431c-2.86,0-4.94,0.478-6.24,1.431c-1.3,0.954-1.95,2.645-1.95,5.069
		v2.47c0,2.428,0.605,4.117,1.82,5.07c1.212,0.955,3.292,1.43,6.24,1.43c3.032,0,5.178-0.455,6.435-1.365
		c1.256-0.909,1.885-2.619,1.885-5.135v-2.47C1071.018,4074.562,1070.412,4072.872,1069.199,4071.917z"/>
	<path d="M1062.829,4094.408c-2.255,0-4.117,0.759-5.59,2.274c-1.475,1.517-2.21,3.402-2.21,5.655v53.689
		c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274c2.253,0,4.115-0.758,5.59-2.274
		c1.473-1.516,2.21-3.4,2.21-5.655v-53.689c0-2.253-0.737-4.139-2.21-5.655C1066.944,4095.167,1065.082,4094.408,1062.829,4094.408z
		"/>
	<path d="M1135.238,4146.017c-1.127,0-2.08,0.175-2.86,0.52c-0.779,0.348-1.625,0.846-2.535,1.496
		c-0.909,0.649-1.625,1.104-2.145,1.364c-2.08,1.04-5.245,1.56-9.49,1.56c-5.808,0-10.574-2.057-14.3-6.174
		c-3.728-4.116-5.59-9.296-5.59-15.535c0-6.5,1.84-11.766,5.524-15.795c3.683-4.031,8.775-6.045,15.275-6.045
		c1.04,0,2.405,0.174,4.095,0.52c1.69,0.348,2.968,0.737,3.835,1.17c0.78,0.435,1.581,0.975,2.405,1.625
		c0.822,0.65,1.668,1.17,2.535,1.561c0.865,0.389,1.992,0.584,3.38,0.584c1.82,0,3.293-0.715,4.42-2.145
		c1.125-1.43,1.69-3.098,1.69-5.006c0-3.812-2.255-6.867-6.761-9.164c-4.507-2.295-10.444-3.445-17.81-3.445
		c-6.587,0-12.48,1.539-17.68,4.615c-5.2,3.077-9.253,7.345-12.155,12.805c-2.904,5.46-4.355,11.7-4.355,18.721
		c0,6.76,1.386,12.892,4.16,18.395c2.772,5.504,6.695,9.814,11.766,12.936c5.069,3.119,10.94,4.68,17.614,4.68
		c4.506,0,8.753-0.543,12.74-1.625c3.985-1.083,7.192-2.535,9.62-4.355c2.426-1.82,3.64-3.77,3.64-5.85
		c0-2.166-0.629-3.943-1.885-5.33C1139.116,4146.712,1137.403,4146.017,1135.238,4146.017z"/>
	<path d="M1215.448,4095.321c-1.47-1.48-3.34-2.21-5.59-2.21s-4.12,0.76-5.59,2.27c-1.47,1.52-2.21,3.4-2.21,5.66v0.13
		c-2.51-2.34-5.59-4.27-9.23-5.79c-3.64-1.51-7.54-2.27-11.7-2.27c-5.81,0-11.11,1.54-15.93,4.61c-4.8,3.08-8.6,7.37-11.37,12.87
		c-2.77,5.51-4.16,11.72-4.16,18.66c0,6.93,1.41,13.13,4.23,18.59c2.81,5.46,6.65,9.73,11.5,12.8c4.85,3.08,10.27,4.62,16.25,4.62
		c4.07,0,7.95-0.89,11.63-2.67c3.69-1.77,6.61-3.92,8.78-6.43c0.09,2.25,0.84,4.11,2.27,5.59c1.43,1.47,3.28,2.21,5.53,2.21
		s4.12-0.76,5.59-2.28c1.47-1.51,2.21-3.4,2.21-5.65v-54.99C1217.658,4098.701,1216.918,4096.791,1215.448,4095.321z
		 M1197.378,4144.78c-3.56,4.12-8.15,6.18-13.78,6.18s-10.2-2.06-13.71-6.18c-3.52-4.11-5.27-9.29-5.27-15.53
		c0-6.24,1.78-11.44,5.33-15.6s8.1-6.24,13.65-6.24c5.63,0,10.22,2.08,13.78,6.24c3.55,4.16,5.33,9.36,5.33,15.6
		C1202.708,4135.49,1200.928,4140.67,1197.378,4144.78z"/>
</g>
<g>
	<path d="M682.421,2914.516c-4.638-2.643-9.815-3.965-15.535-3.965c-2.255,0-4.637,0.305-7.15,0.91
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
		C690.697,2920.779,687.057,2917.161,682.421,2914.516z"/>
	<path d="M795.066,2900.801c-5.115,0-9.685,1.475-13.715,4.42c-4.03,2.947-7.042,6.24-9.035,9.88
		c-3.035-9.532-10.01-14.3-20.93-14.3c-4.42,0-8.43,1.104-12.025,3.314c-3.598,2.21-6.565,4.875-8.905,7.995v-2.08
		c0-2.252-0.737-4.138-2.21-5.654c-1.475-1.516-3.337-2.275-5.59-2.275c-2.255,0-4.117,0.76-5.59,2.275
		c-1.475,1.517-2.21,3.402-2.21,5.654v53.69c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274
		c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28c0-4.42,1.365-8.08,4.095-10.984
		c2.73-2.903,6.521-4.355,11.375-4.355c4.68,0,7.95,1.365,9.815,4.095c1.863,2.73,2.795,6.48,2.795,11.245v33.28
		c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274c2.252,0,4.115-0.758,5.59-2.274
		c1.473-1.516,2.21-3.4,2.21-5.655v-33.28c0-4.42,1.365-8.08,4.095-10.984c2.73-2.903,6.52-4.355,11.375-4.355
		c4.68,0,7.95,1.365,9.815,4.095c1.862,2.73,2.795,6.48,2.795,11.245v33.28c0,2.255,0.735,4.14,2.21,5.655
		c1.473,1.517,3.335,2.274,5.59,2.274c2.253,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28
		c0-9.272-1.647-16.53-4.94-21.774C809.581,2903.423,803.646,2900.801,795.066,2900.801z"/>
	<path d="M914.925,2900.801c-5.115,0-9.686,1.475-13.715,4.42c-4.03,2.947-7.042,6.24-9.035,9.88
		c-3.035-9.532-10.01-14.3-20.93-14.3c-4.42,0-8.43,1.104-12.025,3.314c-3.598,2.21-6.565,4.875-8.905,7.995v-2.08
		c0-2.252-0.737-4.138-2.21-5.654c-1.475-1.516-3.337-2.275-5.59-2.275c-2.255,0-4.117,0.76-5.59,2.275
		c-1.475,1.517-2.21,3.402-2.21,5.654v53.69c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274
		c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28c0-4.42,1.365-8.08,4.095-10.984
		c2.73-2.903,6.521-4.355,11.375-4.355c4.68,0,7.95,1.365,9.815,4.095c1.863,2.73,2.795,6.48,2.795,11.245v33.28
		c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274c2.252,0,4.115-0.758,5.59-2.274
		c1.473-1.516,2.21-3.4,2.21-5.655v-33.28c0-4.42,1.365-8.08,4.095-10.984c2.73-2.903,6.52-4.355,11.375-4.355
		c4.68,0,7.95,1.365,9.814,4.095c1.863,2.73,2.795,6.48,2.795,11.245v33.28c0,2.255,0.735,4.14,2.21,5.655
		c1.473,1.517,3.336,2.274,5.591,2.274c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28
		c0-9.272-1.647-16.53-4.94-21.774C929.441,2903.423,923.505,2900.801,914.925,2900.801z"/>
	<path d="M1019.575,2924.071h-22.62c-2.254,0-4.14,0.737-5.654,2.21c-1.518,1.475-2.275,3.295-2.275,5.46
		c0,2.255,0.758,4.118,2.275,5.591c1.515,1.475,3.4,2.21,5.654,2.21h22.62c2.253,0,4.138-0.716,5.655-2.146
		c1.516-1.43,2.275-3.228,2.275-5.395c0-2.253-0.76-4.138-2.275-5.655C1023.712,2924.831,1021.828,2924.071,1019.575,2924.071z"/>
	<path d="M1113.954,2933.301l19.63-18.07c2.08-1.82,3.12-3.77,3.12-5.85c0-1.646-0.76-3.271-2.274-4.875
		c-1.518-1.603-3.23-2.405-5.136-2.405c-2.167,0-4.074,0.825-5.72,2.47l-27.82,26.91v-48.1c0-2.253-0.737-4.138-2.21-5.655
		c-1.475-1.516-3.337-2.275-5.59-2.275c-2.255,0-4.117,0.76-5.59,2.275c-1.475,1.518-2.21,3.402-2.21,5.655v80.34
		c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.335,2.274,5.59,2.274c2.253,0,4.115-0.758,5.59-2.274
		c1.473-1.516,2.21-3.4,2.21-5.655v-13.65l6.37-5.85l23.4,24.7c1.56,1.734,3.465,2.6,5.72,2.6c1.905,0,3.705-0.735,5.396-2.21
		c1.689-1.473,2.534-3.293,2.534-5.46c0-2.165-0.824-4.115-2.47-5.85L1113.954,2933.301z"/>
	<path d="M1212.098,2918.291c-3.12-5.51-7.38-9.8-12.8-12.87c-5.42-3.08-11.37-4.62-17.87-4.62c-6.59,0-12.57,1.54-17.95,4.62
		c-5.37,3.07-9.62,7.36-12.73,12.87c-3.12,5.5-4.69,11.72-4.69,18.65c0,6.94,1.57,13.15,4.69,18.66c3.11,5.5,7.36,9.77,12.73,12.8
		c5.38,3.04,11.36,4.55,17.95,4.55c6.5,0,12.45-1.51,17.87-4.55c5.42-3.03,9.68-7.3,12.8-12.8c3.12-5.51,4.68-11.72,4.68-18.66
		C1216.778,2930.01,1215.218,2923.791,1212.098,2918.291z M1198.518,2948.25c-1.78,3.3-4.16,5.85-7.15,7.67
		c-2.99,1.82-6.31,2.73-9.94,2.73c-3.65,0-6.96-0.91-9.95-2.73c-2.99-1.82-5.38-4.37-7.15-7.67c-1.78-3.29-2.66-7.06-2.66-11.31
		c0-4.24,0.88-8.04,2.66-11.37c1.77-3.34,4.16-5.92,7.15-7.74c2.99-1.82,6.3-2.73,9.95-2.73c3.63,0,6.95,0.91,9.94,2.73
		c2.99,1.82,5.37,4.4,7.15,7.74c1.78,3.33,2.66,7.13,2.66,11.37C1201.178,2941.19,1200.298,2944.96,1198.518,2948.25z"/>
	<path d="M1304.663,2934.471c-3.12-1.386-7.02-2.73-11.699-4.03c-3.381-0.952-6.003-1.755-7.865-2.405
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
		c0-4.68-1.085-8.45-3.25-11.31C1310.425,2937.981,1307.783,2935.859,1304.663,2934.471z"/>
	<path d="M1386.428,2911.98c3.12-1.82,5.46-4.27,7.02-7.34c1.56-3.08,2.34-6.48,2.34-10.21c0-1.73-0.52-3.31-1.56-4.74
		s-2.64-2.15-4.81-2.15c-2.08,0-3.7,0.72-4.87,2.15c-1.17,1.43-1.76,3.01-1.76,4.74c0,2.69-0.97,4.7-2.92,6.05
		c-1.95,1.34-4.66,2.01-8.13,2.01v0.13c-3.81-1.21-7.62-1.82-11.44-1.82c-6.58,0-12.56,1.54-17.94,4.62
		c-5.37,3.07-9.62,7.36-12.74,12.87c-3.12,5.5-4.68,11.72-4.68,18.65c0,6.94,1.56,13.15,4.68,18.66c3.12,5.5,7.37,9.77,12.74,12.8
		c5.38,3.04,11.36,4.55,17.94,4.55c6.5,0,12.46-1.51,17.88-4.55c5.41-3.03,9.68-7.3,12.8-12.8c3.12-5.51,4.68-11.72,4.68-18.66
		c0-4.85-0.8-9.4-2.4-13.65C1391.648,2919.051,1389.378,2915.281,1386.428,2911.98z M1377.398,2948.25
		c-1.78,3.3-4.16,5.85-7.15,7.67c-2.99,1.82-6.31,2.73-9.95,2.73c-3.64,0-6.95-0.91-9.94-2.73c-2.99-1.82-5.38-4.37-7.15-7.67
		c-1.78-3.29-2.67-7.06-2.67-11.31c0-4.24,0.89-8.04,2.67-11.37c1.77-3.34,4.16-5.92,7.15-7.74c2.99-1.82,6.3-2.73,9.94-2.73
		c3.64,0,6.96,0.91,9.95,2.73c2.99,1.82,5.37,4.4,7.15,7.74c1.77,3.33,2.66,7.13,2.66,11.37
		C1380.058,2941.19,1379.168,2944.96,1377.398,2948.25z"/>
	<path d="M1464.172,2908.667c-3.38-5.243-9.49-7.865-18.33-7.865c-4.507,0-8.645,1.127-12.415,3.38
		c-3.77,2.255-6.825,4.94-9.165,8.06v-2.21c0-2.252-0.737-4.138-2.21-5.654c-1.475-1.516-3.337-2.275-5.59-2.275
		c-2.255,0-4.117,0.76-5.59,2.275c-1.475,1.517-2.21,3.402-2.21,5.654v53.69c0,2.255,0.735,4.14,2.21,5.655
		c1.473,1.517,3.335,2.274,5.59,2.274c2.253,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28
		c0-4.42,1.431-8.08,4.29-10.984c2.86-2.903,6.803-4.355,11.83-4.355c4.853,0,8.275,1.365,10.271,4.095
		c1.992,2.73,2.989,6.48,2.989,11.245v33.28c0,2.255,0.735,4.14,2.21,5.655c1.473,1.517,3.336,2.274,5.591,2.274
		c2.252,0,4.115-0.758,5.59-2.274c1.473-1.516,2.21-3.4,2.21-5.655v-33.28C1469.243,2921.168,1467.552,2913.911,1464.172,2908.667z"
		/>
</g>
</g>
</svg>
`;
};
