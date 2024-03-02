import { fonts } from "../../../configs/constants";

export const svg = (color, fontNumber, name, year) => {
  const fontName = fonts[fontNumber].name;
  const font = `Font: #${fontNumber}`;

  const fontNumberInt = parseInt(fontNumber);
  const isBold = fontNumberInt === 20 || fontNumberInt === 26;

  const hex = color.hexCode;

  return `<?xml version="1.0" encoding="utf-8"?>
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 1609 1175.8" style="enable-background:new 0 0 1609 1175.8;" xml:space="preserve">
  <style type="text/css">
      .st00{fill:${hex};}
      .st0{fill:#999999;}
      .st1{fill:#5A4029;}
      .st2{fill:#E2D6C7;}
      .st3{fill:#161515;stroke:#00FF00;stroke-width:0.3;stroke-miterlimit:10;}
      .st4{font-family:'Pacifico-Regular';}
      .st5{font-size:23px;}
      .st6{fill:#E2D6C7;stroke:#E2D6C7;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
      .st7{font-family:'${fontName}';${isBold ? `font-weight:bold;` : ""}}
      .st8{font-size:130px;}
      .st9{font-family:'#9Slide03QuicksandBold-Bold';}
      .st10{font-size:84px;}
      .st11{font-size:69px;}
  </style>

  <text transform="matrix(1 0 0 1 20 1300)" class="st7 st11">${font}</text>
  <g transform="matrix(1 0 0 1 0 1010)">${color.tag}</g>

  <g>
      <rect class="st00" x="32.6" y="20.9" width="566.9" height="850.4"/>
      <g>
          <g>
              <path class="st0" d="M508.8,575.8v-85c0-4.7,3.8-8.5,8.5-8.5h31.2c4.7,0,8.5,3.8,8.5,8.5v85c0,4.7-3.8,8.5-8.5,8.5h-31.2
                  C512.6,584.3,508.8,580.5,508.8,575.8z"/>
          </g>
          <g>
              <path class="st0" d="M75.1,575.8v-85c0-4.7,3.8-8.5,8.5-8.5h31.2c4.7,0,8.5,3.8,8.5,8.5v85c0,4.7-3.8,8.5-8.5,8.5H83.6
                  C78.9,584.3,75.1,580.5,75.1,575.8z"/>
          </g>
      </g>
  </g>
  <path class="st1" d="M32.6,20.9v850.4h566.9V20.9H32.6z M571.2,842.9H60.9V49.2h510.2V842.9z"/>

  ${
    year.length > 0 &&
    `
    <polygon class="st2" points="377.6,802.8 394.6,824 237.6,824 254.5,802.8 237.6,781.5 394.6,781.5 	"/>
    <polygon class="st2" points="1544.7,842.2 1561.7,863.4 1404.7,863.4 1421.7,842.2 1404.7,820.9 1561.7,820.9 	"/>
    <g>
        <text transform="matrix(0.9872 0 0 1 1462.6466 849.4733)" class="st3 st4 st5">${year}</text>
    </g>
    `
  }
  <path class="st2" d="M928.5,192.1c-48.2,0-87.2,10.7-87.2,24c0,13.2,39.1,24,87.2,24s87.2-10.7,87.2-24
      C1015.7,202.8,976.7,192.1,928.5,192.1z M982.9,224.5c-15,3.5-34.4,5.5-54.4,5.5s-39.4-2-54.4-5.5c-13.1-3.1-19.4-6.5-21.9-8.5
      c2.5-2,8.8-5.4,21.9-8.5c15-3.5,34.4-5.5,54.4-5.5s39.4,2,54.4,5.5c13.1,3.1,19.4,6.5,21.9,8.5C1002.3,218,996,221.4,982.9,224.5z"
      />
  <g>
      <path d="M1411.5,989.8l-15.2-20.1l14.9-14.2c0.8-0.8,1.2-1.7,1.2-2.7s-0.4-1.9-1.1-2.7c-0.7-0.9-1.6-1.3-2.7-1.3
          c-1.2,0-2.3,0.5-3.3,1.6l-21.8,21.5v-18.5c0-1.2-0.4-2.2-1.2-3c-0.8-0.8-1.8-1.2-3-1.2c-1.3,0-2.3,0.4-3.1,1.2s-1.2,1.8-1.2,3v39.4
          c0,1.2,0.4,2.2,1.2,3c0.8,0.8,1.8,1.2,3,1.2c1.3,0,2.3-0.4,3.1-1.2c0.8-0.8,1.2-1.8,1.2-3V982l6.5-6.2l14.8,19.5
          c0.4,0.5,0.8,0.9,1.4,1.2c0.5,0.3,1.1,0.4,1.7,0.4c1.2,0,2.3-0.4,3.2-1.2s1.4-1.8,1.4-3.1c0-0.5-0.1-0.9-0.3-1.5
          C1412,990.6,1411.7,990.2,1411.5,989.8z"/>
      <path d="M1443.3,962.2c-2.8-1.6-6-2.4-9.4-2.4c-3.5,0-6.6,0.8-9.4,2.4c-2.8,1.6-5,3.9-6.7,6.7c-1.6,2.9-2.5,6.1-2.5,9.8
          c0,3.6,0.8,6.9,2.5,9.8c1.6,2.9,3.9,5.1,6.7,6.7c2.8,1.6,6,2.4,9.4,2.4c3.4,0,6.5-0.8,9.4-2.4c2.8-1.6,5.1-3.8,6.7-6.7
          c1.6-2.9,2.5-6.1,2.5-9.8c0-3.6-0.8-6.9-2.5-9.8C1448.4,966,1446.2,963.8,1443.3,962.2z M1442.9,984.6c-0.9,1.7-2.2,3.1-3.7,4
          c-1.6,1-3.3,1.4-5.2,1.4c-1.9,0-3.6-0.5-5.2-1.4c-1.6-1-2.8-2.3-3.7-4c-0.9-1.7-1.4-3.7-1.4-5.9c0-2.2,0.5-4.2,1.4-6
          s2.2-3.1,3.7-4.1c1.6-1,3.3-1.4,5.2-1.4c1.9,0,3.6,0.5,5.2,1.4c1.6,1,2.8,2.3,3.7,4.1c0.9,1.7,1.4,3.7,1.4,6
          C1444.3,980.9,1443.8,982.9,1442.9,984.6z"/>
      <path d="M1498.6,977.4c-1.6-0.7-3.7-1.4-6.1-2.1c-1.8-0.5-3.1-0.9-4.1-1.3c-1-0.3-1.8-0.8-2.4-1.4c-0.6-0.6-1-1.4-1-2.4
          c0-2.5,1.7-3.8,5.2-3.8c1.6,0,3.1,0.3,4.4,0.9s2.4,1.4,3.2,2.4c0.6,0.6,1.5,1,2.5,1c0.8,0,1.5-0.2,2.2-0.7c0.9-0.7,1.3-1.5,1.3-2.6
          c0-0.9-0.3-1.7-0.9-2.5c-1.3-1.7-3.1-3-5.5-3.8c-2.3-0.9-4.6-1.3-7-1.3c-2.3,0-4.4,0.4-6.4,1.3c-2,0.9-3.7,2.1-4.9,3.7
          c-1.3,1.6-1.9,3.5-1.9,5.7c0,2.5,0.6,4.5,1.8,6c1.2,1.5,2.6,2.6,4.3,3.3s3.8,1.5,6.4,2.2c2.5,0.7,4.4,1.4,5.6,2
          c1.2,0.7,1.8,1.7,1.8,3c0,2.5-1.8,3.9-5.3,4c-2.1,0-3.9-0.3-5.3-1c-1.5-0.7-2.9-1.7-4.3-3.1c-0.9-0.9-1.8-1.3-2.7-1.3
          c-0.7,0-1.3,0.2-2,0.6c-1.2,0.8-1.8,1.8-1.8,3c0,0.8,0.2,1.5,0.6,2c1.6,2.2,3.7,3.8,6.3,4.8c2.6,1,5.4,1.5,8.4,1.5
          c2.2,0,4.3-0.4,6.4-1.3c2.1-0.9,3.8-2.1,5.1-3.8c1.3-1.7,2-3.6,2-5.8c0-2.5-0.6-4.4-1.7-5.9
          C1501.6,979.2,1500.2,978.1,1498.6,977.4z"/>
      <path d="M1545.1,961.8c0.8-1.6,1.2-3.4,1.2-5.3c0-0.9-0.3-1.7-0.8-2.5c-0.5-0.8-1.4-1.1-2.5-1.1c-1.1,0-1.9,0.4-2.6,1.1
          c-0.6,0.7-0.9,1.6-0.9,2.5c0,1.4-0.5,2.5-1.5,3.2c-1,0.7-2.4,1.1-4.3,1.1v0.1c-2-0.6-4-1-6-1c-3.5,0-6.6,0.8-9.4,2.4
          c-2.8,1.6-5,3.9-6.7,6.7c-1.6,2.9-2.5,6.1-2.5,9.8c0,3.6,0.8,6.9,2.5,9.8c1.6,2.9,3.9,5.1,6.7,6.7s6,2.4,9.4,2.4
          c3.4,0,6.5-0.8,9.4-2.4c2.8-1.6,5.1-3.8,6.7-6.7c1.6-2.9,2.5-6.1,2.5-9.8c0-2.5-0.4-4.9-1.3-7.2c-0.8-2.2-2-4.2-3.6-5.9
          C1543.1,964.7,1544.3,963.4,1545.1,961.8z M1536.7,984.6c-0.9,1.7-2.2,3.1-3.7,4c-1.6,1-3.3,1.4-5.2,1.4s-3.6-0.5-5.2-1.4
          c-1.6-1-2.8-2.3-3.7-4c-0.9-1.7-1.4-3.7-1.4-5.9c0-2.2,0.5-4.2,1.4-6c0.9-1.7,2.2-3.1,3.7-4.1c1.6-1,3.3-1.4,5.2-1.4
          s3.6,0.5,5.2,1.4c1.6,1,2.8,2.3,3.7,4.1c0.9,1.7,1.4,3.7,1.4,6C1538.1,980.9,1537.6,982.9,1536.7,984.6z"/>
      <path d="M1582.2,963.9c-1.8-2.7-5-4.1-9.6-4.1c-2.4,0-4.5,0.6-6.5,1.8c-2,1.2-3.6,2.6-4.8,4.2v-1.2c0-1.2-0.4-2.2-1.2-3
          c-0.8-0.8-1.8-1.2-2.9-1.2c-1.2,0-2.2,0.4-2.9,1.2c-0.8,0.8-1.2,1.8-1.2,3v28.1c0,1.2,0.4,2.2,1.2,3c0.8,0.8,1.7,1.2,2.9,1.2
          c1.2,0,2.2-0.4,2.9-1.2c0.8-0.8,1.2-1.8,1.2-3v-17.4c0-2.3,0.7-4.2,2.2-5.8c1.5-1.5,3.6-2.3,6.2-2.3c2.5,0,4.3,0.7,5.4,2.1
          c1,1.4,1.6,3.4,1.6,5.9v17.4c0,1.2,0.4,2.2,1.2,3c0.8,0.8,1.7,1.2,2.9,1.2c1.2,0,2.2-0.4,2.9-1.2c0.8-0.8,1.2-1.8,1.2-3v-17.4
          C1584.9,970.4,1584,966.6,1582.2,963.9z"/>
  </g>
  <g>
      <g>
          <path d="M253.4,958c-2.8-1.6-5.8-2.4-9.2-2.4c-1.3,0-2.8,0.2-4.2,0.5c-1.5,0.4-2.7,0.8-3.7,1.4l1.5-11.2h19.1
              c1.2,0,2.3-0.4,3.1-1.2c0.8-0.8,1.2-1.8,1.2-3c0-1.2-0.4-2.3-1.2-3.1c-0.8-0.8-1.9-1.2-3.1-1.2h-22.3c-1.2,0-2.2,0.3-3,1
              c-0.8,0.7-1.4,1.6-1.6,2.7l-2.4,19.1c-0.1,0.2-0.1,0.6-0.1,1.1c0,1.5,0.4,2.8,1.3,3.9c0.8,1.1,2.3,1.6,4.3,1.6
              c0.6,0,1.1-0.1,1.7-0.3c0.5-0.2,1.3-0.5,2.2-1c1.3-0.6,2.4-1.1,3.3-1.4c0.9-0.3,2-0.5,3.2-0.5c2.6,0,4.9,0.9,6.8,2.6
              c1.9,1.8,2.9,4,2.9,6.8c0,1.9-0.6,3.7-1.7,5.3c-1.1,1.6-2.6,3-4.4,3.9c-1.9,1-3.8,1.5-5.9,1.5c-1.6,0-3.6-0.7-5.7-2
              c-1.4-1-2.5-1.5-3.5-1.5c-1.3,0-2.3,0.4-3.1,1.1c-0.8,0.7-1.2,1.6-1.2,2.5c0,0.8,0.2,1.7,0.6,2.6c0.4,0.9,0.9,1.6,1.5,2.2
              c1.3,1.1,3.1,1.9,5.2,2.5c2.1,0.6,4.2,0.9,6.2,0.9c3.8,0,7.3-0.9,10.5-2.6c3.2-1.7,5.8-4.1,7.8-7c2-2.9,2.9-6.1,2.9-9.6
              c0-3.3-0.8-6.4-2.4-9.1C258.3,961.8,256.2,959.6,253.4,958z"/>
          <path d="M323.8,949.9c-3,0-5.8,0.9-8.1,2.6c-2.4,1.7-4.2,3.7-5.4,5.9c-1.8-5.7-5.9-8.5-12.4-8.5c-2.6,0-5,0.7-7.1,2
              c-2.1,1.3-3.9,2.9-5.3,4.7v-1.2c0-1.3-0.4-2.5-1.3-3.4c-0.9-0.9-2-1.4-3.3-1.4c-1.3,0-2.4,0.5-3.3,1.4c-0.9,0.9-1.3,2-1.3,3.4
              v31.9c0,1.3,0.4,2.5,1.3,3.4c0.9,0.9,2,1.4,3.3,1.4c1.3,0,2.4-0.4,3.3-1.4c0.9-0.9,1.3-2,1.3-3.4v-19.8c0-2.6,0.8-4.8,2.4-6.5
              c1.6-1.7,3.9-2.6,6.8-2.6c2.8,0,4.7,0.8,5.8,2.4c1.1,1.6,1.7,3.8,1.7,6.7v19.8c0,1.3,0.4,2.5,1.3,3.4c0.9,0.9,2,1.4,3.3,1.4
              c1.3,0,2.4-0.4,3.3-1.4c0.9-0.9,1.3-2,1.3-3.4v-19.8c0-2.6,0.8-4.8,2.4-6.5c1.6-1.7,3.9-2.6,6.8-2.6c2.8,0,4.7,0.8,5.8,2.4
              c1.1,1.6,1.7,3.8,1.7,6.7v19.8c0,1.3,0.4,2.5,1.3,3.4c0.9,0.9,2,1.4,3.3,1.4c1.3,0,2.4-0.4,3.3-1.4c0.9-0.9,1.3-2,1.3-3.4v-19.8
              c0-5.5-1-9.8-2.9-12.9C332.4,951.5,328.9,949.9,323.8,949.9z"/>
          <path d="M409,954.6c-2-3.1-5.5-4.7-10.6-4.7c-3,0-5.8,0.9-8.1,2.6c-2.4,1.7-4.2,3.7-5.4,5.9c-1.8-5.7-5.9-8.5-12.4-8.5
              c-2.6,0-5,0.7-7.1,2c-2.1,1.3-3.9,2.9-5.3,4.7v-1.2c0-1.3-0.4-2.5-1.3-3.4c-0.9-0.9-2-1.4-3.3-1.4c-1.3,0-2.4,0.5-3.3,1.4
              c-0.9,0.9-1.3,2-1.3,3.4v31.9c0,1.3,0.4,2.5,1.3,3.4c0.9,0.9,2,1.4,3.3,1.4c1.3,0,2.4-0.4,3.3-1.4c0.9-0.9,1.3-2,1.3-3.4v-19.8
              c0-2.6,0.8-4.8,2.4-6.5c1.6-1.7,3.9-2.6,6.8-2.6c2.8,0,4.7,0.8,5.8,2.4c1.1,1.6,1.7,3.8,1.7,6.7v19.8c0,1.3,0.4,2.5,1.3,3.4
              c0.9,0.9,2,1.4,3.3,1.4c1.3,0,2.4-0.4,3.3-1.4c0.9-0.9,1.3-2,1.3-3.4v-19.8c0-2.6,0.8-4.8,2.4-6.5c1.6-1.7,3.9-2.6,6.8-2.6
              c2.8,0,4.7,0.8,5.8,2.4c1.1,1.6,1.7,3.8,1.7,6.7v19.8c0,1.3,0.4,2.5,1.3,3.4c0.9,0.9,2,1.4,3.3,1.4c1.3,0,2.4-0.4,3.3-1.4
              c0.9-0.9,1.3-2,1.3-3.4v-19.8C412,962,411,957.7,409,954.6z"/>
      </g>
  </g>

    <g>
        <text transform="matrix(0.9469 0 0 1 160.5581 723.2021)" class="st6 st7 st8">${name}</text>
    </g>
      
  </svg>
  `;
};
