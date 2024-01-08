import { fonts } from "../../../configs/constants";

export const svg = (fontNumber, style, name, quote) => {
  const fontName = fonts[fontNumber].name;
  const font = `Font: #${fontNumber}`;

  const fontNumberInt = parseInt(fontNumber);
  const isBold = fontNumberInt === 20 || fontNumberInt === 26;

  let quotee = quote;
  const index = quote.indexOf("-");
  if (index > -1)
    if (quote[index - 1] !== " " && quote[index + 1] !== " ")
      quotee = quotee.replace("-", " - ");

  return `<?xml version="1.0" encoding="utf-8"?>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 1404.8 917.1" style="enable-background:new 0 0 1404.8 917.1;" xml:space="preserve">
    <style type="text/css">
        .st0{fill:#FFFFFF;}
        .st1{fill:#606161;}
        .st2{fill:#181717;stroke:#6BBE45;stroke-width:0.25;stroke-miterlimit:10;}
        .st3{fill:#010101;}
        .st4{fill:#5B412A;stroke:#5B412A;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
        .st5{font-family:'${fontName}';${isBold ? `font-weight:bold;` : ""}}
        .st6{font-size:123px;}
        .st7{font-family:'#9Slide03NanamiRoundedLight';}
        .st8{font-size:30px;}
        .st9{fill:#231F20;}
        .st10{fill:none;stroke:#010101;stroke-width:7;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
        .st11{font-size:69px;}
    </style>

    <text transform="matrix(1 0 0 1 20 1000)" class="st5 st11">${font}</text>

    <g>
        <g>
            <g>
                <rect x="55.8" y="28.7" class="st0" width="566.9" height="734.9"/>
            </g>
            <g>
                <g>
                    <path class="st1" d="M532,494.6v-85c0-4.7,3.8-8.5,8.5-8.5h31.2c4.7,0,8.5,3.8,8.5,8.5v85c0,4.7-3.8,8.5-8.5,8.5h-31.2
                        C535.8,503.1,532,499.3,532,494.6z"/>
                </g>
                <g>
                    <path class="st1" d="M98.3,494.6v-85c0-4.7,3.8-8.5,8.5-8.5H138c4.7,0,8.5,3.8,8.5,8.5v85c0,4.7-3.8,8.5-8.5,8.5h-31.2
                        C102.1,503.1,98.3,499.3,98.3,494.6z"/>
                </g>
            </g>
        </g>
        ${
          style === 1
            ? ""
            : `
            <g>
                <g>
                    <rect x="59.1" y="123.5" class="st2" width="560.4" height="1"/>
                    <rect x="59.1" y="214.2" class="st2" width="560.4" height="1"/>
                    <rect x="59.1" y="304.9" class="st2" width="560.4" height="1"/>
                    <rect x="59.1" y="395.6" class="st2" width="560.4" height="1"/>
                    <rect x="59.1" y="486.3" class="st2" width="560.4" height="1"/>
                    <rect x="59.1" y="577" class="st2" width="560.4" height="1"/>
                    <rect x="59.1" y="667.7" class="st2" width="560.4" height="1"/>
                </g>
            </g>`
        }
    </g>
    <g>
        <path class="st3" d="M68.2,832.4c-1.3,0-2.4,0.4-3.2,1.3c-0.8,0.9-1.3,1.9-1.3,3.2v34.8l-29.5-37.6c-0.4-0.5-1-1-1.7-1.3
            c-0.8-0.3-1.6-0.5-2.4-0.5c-1.4,0-2.6,0.5-3.5,1.4c-0.9,0.9-1.4,2.1-1.4,3.5v47.2c0,1.3,0.4,2.4,1.2,3.2c0.8,0.9,1.9,1.3,3.2,1.3
            c1.3,0,2.4-0.4,3.3-1.3c0.8-0.9,1.3-1.9,1.3-3.2V850l29.7,37.8c0.3,0.4,0.9,0.8,1.6,1c0.7,0.2,1.5,0.4,2.2,0.4
            c1.4,0,2.6-0.5,3.5-1.4c0.9-0.9,1.4-2.1,1.4-3.5v-47.2c0-1.3-0.4-2.4-1.2-3.2C70.5,832.8,69.4,832.4,68.2,832.4z"/>
        <path class="st3" d="M103.3,824.9l8.1,4.3c0.6,0.3,1.3,0.5,1.9,0.5c1,0,1.8-0.3,2.5-0.8c0.6-0.5,0.9-1.2,0.9-2.1
            c0-0.8-0.4-1.5-1.1-2.2l-7-6.2c-1.4-1.2-2.7-1.8-4-1.8c-1,0-2,0.4-2.9,1.1c-0.9,0.8-1.4,1.7-1.4,2.8c0,0.8,0.3,1.6,0.8,2.3
            C101.6,823.7,102.3,824.3,103.3,824.9z"/>
        <path class="st3" d="M112.3,847.9c-3.2-1.9-6.5-2.9-10.1-2.9c-3.6,0-7,0.9-10.2,2.8c-3.2,1.9-5.8,4.6-7.7,8.1
            c-1.9,3.5-2.9,7.6-2.9,12.2c0,4.2,0.9,7.9,2.8,11.2c1.8,3.3,4.4,5.9,7.8,7.8c3.4,1.9,7.3,2.8,11.9,2.8c2.6,0,5.2-0.4,7.7-1.3
            c2.5-0.9,4.6-1.9,6.1-3.2c1.5-1.2,2.3-2.5,2.3-4c0-1.1-0.4-2-1.2-2.8s-1.8-1.2-2.9-1.2c-0.9,0-1.8,0.2-2.8,0.7
            c-0.3,0.2-0.8,0.5-1.5,0.9c-0.7,0.5-1.7,0.9-3,1.3c-1.2,0.4-3,0.6-5.2,0.6c-2.9,0-5.5-0.9-7.9-2.7c-2.3-1.8-3.8-4.3-4.5-7.5h26.7
            c1.3,0,2.4-0.4,3.4-1.2c1-0.8,1.5-1.9,1.5-3.2c0-3.8-0.9-7.4-2.8-10.7C118,852.5,115.5,849.8,112.3,847.9z M112.4,862.7H91.2
            c1.1-5.9,4.8-8.8,11.1-8.8c2.5,0,4.8,0.8,6.8,2.4c2,1.6,3.1,3.6,3.3,5.8V862.7z"/>
        <path class="st3" d="M92.9,840.6c0.6,0,1.2-0.1,1.6-0.2c0.4-0.2,0.9-0.4,1.3-0.9c0.5-0.4,0.8-0.7,1-0.9l4.6-3.8l4.3,3.8
            c0.2,0.2,0.5,0.4,0.9,0.8c0.4,0.4,0.8,0.6,1.2,0.9c0.4,0.2,1,0.3,1.8,0.3c0.7,0,1.3-0.2,1.7-0.6c0.5-0.4,0.7-0.9,0.7-1.4
            c0-0.5-0.1-0.9-0.2-1.2c-0.1-0.3-0.4-0.8-0.8-1.3l-3.6-5c-0.6-0.9-1.2-1.5-1.8-1.9c-0.6-0.3-1.5-0.5-2.6-0.5h-2.9
            c-2.1,0-3.7,0.8-4.9,2.3l-4,5c-0.4,0.5-0.7,1-0.8,1.3c-0.1,0.3-0.2,0.7-0.2,1.2c0,0.5,0.2,1,0.7,1.4
            C91.7,840.4,92.2,840.6,92.9,840.6z"/>
        <path class="st3" d="M154,845c-2.8,0-5.4,0.7-7.7,2.1c-2.3,1.4-4.3,3.1-5.7,5v-1.4c0-1.4-0.5-2.6-1.4-3.5c-0.9-0.9-2.1-1.4-3.5-1.4
            c-1.4,0-2.6,0.5-3.5,1.4c-0.9,0.9-1.4,2.1-1.4,3.5v33.5c0,1.4,0.5,2.6,1.4,3.5c0.9,0.9,2.1,1.4,3.5,1.4c1.4,0,2.6-0.5,3.5-1.4
            c0.9-0.9,1.4-2.1,1.4-3.5v-20.7c0-2.8,0.9-5,2.7-6.8c1.8-1.8,4.2-2.7,7.4-2.7c3,0,5.2,0.9,6.4,2.6c1.2,1.7,1.9,4,1.9,7v20.7
            c0,1.4,0.5,2.6,1.4,3.5c0.9,0.9,2.1,1.4,3.5,1.4c1.4,0,2.6-0.5,3.5-1.4c0.9-0.9,1.4-2.1,1.4-3.5v-20.7c0-5.8-1.1-10.3-3.2-13.6
            C163.3,846.6,159.5,845,154,845z"/>
        <path class="st3" d="M221.5,855.5c1.3,0,2.4-0.4,3.2-1.3c0.9-0.8,1.3-1.9,1.3-3.1c0-1.3-0.4-2.4-1.3-3.2c-0.9-0.9-1.9-1.3-3.2-1.3
            h-5.8v-5.2c0-1.4-0.5-2.6-1.4-3.5c-0.9-0.9-2.1-1.4-3.4-1.4c-1.4,0-2.6,0.5-3.5,1.4c-0.9,0.9-1.4,2.1-1.4,3.5v5.2h-3.7
            c-1.3,0-2.4,0.4-3.2,1.3c-0.9,0.8-1.3,1.9-1.3,3.1c0,1.3,0.4,2.4,1.3,3.2c0.9,0.9,1.9,1.3,3.2,1.3h3.7v22.4c0,4.6,1.1,7.7,3.4,9.1
            c2.3,1.4,5.1,2.1,8.5,2.1c2,0,3.8-0.5,5.4-1.5c1.6-1,2.4-2.2,2.4-3.7c0-1.2-0.3-2.1-0.9-2.9c-0.6-0.7-1.3-1.1-2.1-1.1
            c-0.6,0-1.2,0.1-1.9,0.4c-0.8,0.2-1.4,0.3-1.8,0.3c-1,0-1.8-0.3-2.4-0.8c-0.6-0.5-0.9-1.3-0.9-2.5v-22H221.5z"/>
        <path class="st3" d="M261.6,846.3c-1.1-0.9-2.5-1.4-4.1-1.4c-2.6,0-5.1,0.6-7.5,1.7c-2.3,1.2-4.1,2.8-5.3,5.1v-1.1
            c0-1.4-0.5-2.6-1.4-3.5c-0.9-0.9-2.1-1.4-3.5-1.4c-1.4,0-2.6,0.5-3.5,1.4c-0.9,0.9-1.4,2.1-1.4,3.5v33.5c0,1.4,0.5,2.6,1.4,3.5
            c0.9,0.9,2.1,1.4,3.5,1.4c1.4,0,2.6-0.5,3.5-1.4c0.9-0.9,1.4-2.1,1.4-3.5V865c0-2.4,0.4-4.5,1.3-6.3c0.8-1.8,1.9-3.1,3.2-3.9
            c1.3-0.9,2.6-1.3,4.1-1.3c0.6,0,1.3,0.1,1.8,0.2c0.6,0.2,0.9,0.3,1.1,0.3c1,0.4,1.9,0.6,2.8,0.6c1.2,0,2.2-0.4,3.1-1.3
            c0.9-0.8,1.3-2.1,1.3-3.8C263.2,848.3,262.7,847.3,261.6,846.3z"/>
        <path class="st3" d="M281.3,840.4c2.2,1.3,4.9,1.9,8,1.9s5.7-0.7,8-2c2.2-1.3,3.9-3.2,4.9-5.7c0.2-0.6,0.3-1.2,0.3-1.7
            c0-0.8-0.3-1.4-0.8-1.9c-0.5-0.5-1.2-0.7-2-0.7c-1.1,0-2,0.2-2.6,0.7c-0.7,0.5-1.4,1.2-2.2,2.2c-1.3,1.5-3.2,2.2-5.6,2.2
            s-4.3-0.7-5.6-2.2c-0.8-1-1.6-1.8-2.2-2.2c-0.7-0.5-1.6-0.7-2.6-0.7c-0.8,0-1.5,0.2-2,0.7c-0.5,0.5-0.8,1.1-0.8,1.9
            c0,0.5,0.1,1.1,0.4,1.8C277.5,837.3,279.1,839.1,281.3,840.4z"/>
        <path class="st3" d="M288,830.4c0.6,0.5,1.2,0.7,1.7,0.7c1.6,0,2.8-0.5,3.6-1.4l6.2-6.8c0.9-1.1,1.4-2.2,1.5-3.5
            c0.1-1.2-0.3-2.2-1-2.9c-0.7-0.8-1.8-1.1-3.3-1.1c-0.9,0-1.8,0.3-2.5,0.9c-0.8,0.6-1.4,1.4-1.9,2.3l-4.7,8.3
            c-0.3,0.5-0.5,1.1-0.5,1.5C287.1,829.3,287.4,829.9,288,830.4z"/>
        <path class="st3" d="M304.2,845c-1.4,0-2.6,0.5-3.5,1.4c-0.9,0.9-1.4,2.1-1.4,3.5v0.1c-1.6-1.5-3.5-2.7-5.8-3.6
            c-2.3-0.9-4.7-1.4-7.3-1.4c-3.6,0-6.9,1-9.9,2.9c-3,1.9-5.4,4.6-7.1,8c-1.7,3.4-2.6,7.3-2.6,11.6c0,4.3,0.9,8.2,2.6,11.6
            c1.8,3.4,4.1,6.1,7.2,8c3,1.9,6.4,2.9,10.1,2.9c2.5,0,5-0.6,7.3-1.7c2.3-1.1,4.1-2.4,5.5-4c0.1,1.4,0.5,2.6,1.4,3.5
            c0.9,0.9,2,1.4,3.4,1.4c1.4,0,2.6-0.5,3.5-1.4c0.9-0.9,1.4-2.1,1.4-3.5v-34.3c0-1.5-0.5-2.6-1.4-3.6
            C306.8,845.4,305.6,845,304.2,845z M296.5,877.2c-2.2,2.6-5.1,3.8-8.6,3.8c-3.5,0-6.4-1.3-8.5-3.8c-2.2-2.6-3.3-5.8-3.3-9.7
            c0-3.9,1.1-7.1,3.3-9.7c2.2-2.6,5-3.9,8.5-3.9c3.5,0,6.4,1.3,8.6,3.9c2.2,2.6,3.3,5.8,3.3,9.7C299.8,871.4,298.7,874.6,296.5,877.2
            z"/>
        <path class="st3" d="M342.8,845c-2.8,0-5.4,0.7-7.7,2.1c-2.3,1.4-4.3,3.1-5.7,5v-1.4c0-1.4-0.5-2.6-1.4-3.5
            c-0.9-0.9-2.1-1.4-3.5-1.4c-1.4,0-2.6,0.5-3.5,1.4c-0.9,0.9-1.4,2.1-1.4,3.5v33.5c0,1.4,0.5,2.6,1.4,3.5c0.9,0.9,2.1,1.4,3.5,1.4
            c1.4,0,2.6-0.5,3.5-1.4c0.9-0.9,1.4-2.1,1.4-3.5v-20.7c0-2.8,0.9-5,2.7-6.8c1.8-1.8,4.2-2.7,7.4-2.7c3,0,5.2,0.9,6.4,2.6
            c1.2,1.7,1.9,4,1.9,7v20.7c0,1.4,0.5,2.6,1.4,3.5c0.9,0.9,2.1,1.4,3.5,1.4c1.4,0,2.6-0.5,3.5-1.4c0.9-0.9,1.4-2.1,1.4-3.5v-20.7
            c0-5.8-1.1-10.3-3.2-13.6C352.1,846.6,348.3,845,342.8,845z"/>
        <path class="st3" d="M403.8,845c-1.4,0-2.6,0.5-3.5,1.4c-0.9,0.9-1.4,2.1-1.4,3.5v0.9c-1.5-1.6-3.4-3-5.8-4.1
            c-2.4-1.1-4.9-1.7-7.7-1.7c-3.7,0-7.1,1-10.2,2.9c-3.1,1.9-5.5,4.6-7.2,8c-1.8,3.4-2.6,7.3-2.6,11.6c0,4.3,0.9,8.2,2.7,11.6
            c1.8,3.4,4.2,6.1,7.3,8c3.1,1.9,6.5,2.9,10.3,2.9c2.8,0,5.3-0.7,7.7-2c2.4-1.3,4.2-2.9,5.4-4.5v3.9c0,2.9-1,5.2-3,6.8
            c-2,1.6-5,2.4-9,2.4c-2,0-4.2-0.5-6.7-1.4c-2.5-0.9-3.8-1.4-4-1.5c-0.5-0.2-1-0.2-1.5-0.2c-0.9,0-1.8,0.3-2.6,0.9
            c-0.8,0.6-1.3,1.5-1.7,2.7c-0.2,0.5-0.2,0.9-0.2,1.3c0,2,1.3,3.6,4,4.7c1.2,0.5,3.2,1.1,6,1.6c2.8,0.5,5.1,0.8,6.7,0.8
            c6.3,0,11.4-1.6,15.5-4.7c4.1-3.2,6.1-8,6.1-14.6v-36.1c0-1.5-0.5-2.6-1.4-3.6C406.4,845.4,405.2,845,403.8,845z M395.9,877.2
            c-2.3,2.6-5.3,3.8-8.9,3.8c-3.6,0-6.6-1.3-8.8-3.8c-2.3-2.6-3.4-5.8-3.4-9.7c0-3.9,1.1-7.1,3.4-9.7c2.3-2.6,5.2-3.9,8.8-3.9
            c3.6,0,6.6,1.3,8.9,3.9c2.3,2.6,3.4,5.8,3.4,9.7C399.3,871.4,398.2,874.6,395.9,877.2z"/>
        <path class="st3" d="M459.7,859.5h-14.1c-1.4,0-2.6,0.5-3.5,1.4c-0.9,0.9-1.4,2.1-1.4,3.4c0,1.4,0.5,2.6,1.4,3.5
            c0.9,0.9,2.1,1.4,3.5,1.4h14.1c1.4,0,2.6-0.4,3.5-1.3c0.9-0.9,1.4-2,1.4-3.4c0-1.4-0.5-2.6-1.4-3.5
            C462.3,859.9,461.1,859.5,459.7,859.5z"/>
        <path class="st3" d="M523.3,853.5c-2.9-1.6-6.1-2.5-9.7-2.5c-1.4,0-2.9,0.2-4.5,0.6c-1.6,0.4-2.9,0.9-3.9,1.5l1.5-11.7h20.1
            c1.3,0,2.4-0.4,3.2-1.3c0.9-0.8,1.3-1.9,1.3-3.1c0-1.3-0.4-2.4-1.3-3.2c-0.9-0.9-1.9-1.3-3.2-1.3h-23.4c-1.2,0-2.3,0.4-3.2,1.1
            c-0.9,0.7-1.4,1.7-1.7,2.8l-2.5,20.1c-0.1,0.2-0.1,0.6-0.1,1.1c0,1.6,0.4,2.9,1.3,4.1c0.9,1.1,2.4,1.7,4.5,1.7
            c0.6,0,1.2-0.1,1.7-0.3c0.6-0.2,1.3-0.6,2.3-1.1c1.3-0.6,2.5-1.1,3.5-1.5c1-0.3,2.1-0.5,3.3-0.5c2.8,0,5.1,0.9,7.1,2.8
            c2,1.8,3,4.2,3,7.1c0,2-0.6,3.9-1.7,5.6c-1.2,1.7-2.7,3.1-4.7,4.1c-1.9,1-4,1.5-6.2,1.5c-1.7,0-3.7-0.7-6-2.1
            c-1.5-1-2.7-1.5-3.6-1.5c-1.4,0-2.4,0.4-3.3,1.2c-0.8,0.8-1.3,1.7-1.3,2.6c0,0.9,0.2,1.8,0.6,2.8s1,1.7,1.6,2.3
            c1.4,1.1,3.2,2,5.5,2.7c2.2,0.6,4.4,1,6.5,1c3.9,0,7.6-0.9,11-2.7c3.4-1.8,6.1-4.3,8.2-7.3c2.1-3.1,3.1-6.4,3.1-10
            c0-3.5-0.8-6.7-2.5-9.6C528.5,857.4,526.2,855.2,523.3,853.5z"/>
        <path class="st3" d="M593.5,845c-3.2,0-6,0.9-8.5,2.8c-2.5,1.8-4.4,3.9-5.6,6.2c-1.9-5.9-6.2-8.9-13-8.9c-2.8,0-5.3,0.7-7.5,2.1
            c-2.2,1.4-4.1,3-5.5,5v-1.3c0-1.4-0.5-2.6-1.4-3.5c-0.9-0.9-2.1-1.4-3.5-1.4c-1.4,0-2.6,0.5-3.5,1.4c-0.9,0.9-1.4,2.1-1.4,3.5v33.5
            c0,1.4,0.5,2.6,1.4,3.5c0.9,0.9,2.1,1.4,3.5,1.4c1.4,0,2.6-0.5,3.5-1.4c0.9-0.9,1.4-2.1,1.4-3.5v-20.7c0-2.8,0.9-5,2.6-6.8
            c1.7-1.8,4.1-2.7,7.1-2.7c2.9,0,5,0.9,6.1,2.6c1.2,1.7,1.7,4,1.7,7v20.7c0,1.4,0.5,2.6,1.4,3.5c0.9,0.9,2.1,1.4,3.5,1.4
            s2.6-0.5,3.5-1.4c0.9-0.9,1.4-2.1,1.4-3.5v-20.7c0-2.8,0.9-5,2.6-6.8c1.7-1.8,4.1-2.7,7.1-2.7c2.9,0,5,0.9,6.1,2.6
            c1.2,1.7,1.7,4,1.7,7v20.7c0,1.4,0.5,2.6,1.4,3.5c0.9,0.9,2.1,1.4,3.5,1.4c1.4,0,2.6-0.5,3.5-1.4c0.9-0.9,1.4-2.1,1.4-3.5v-20.7
            c0-5.8-1-10.3-3.1-13.6C602.6,846.6,598.9,845,593.5,845z"/>
        <path class="st3" d="M679.3,849.9c-2.1-3.3-5.8-4.9-11.1-4.9c-3.2,0-6,0.9-8.5,2.8c-2.5,1.8-4.4,3.9-5.6,6.2
            c-1.9-5.9-6.2-8.9-13-8.9c-2.8,0-5.3,0.7-7.5,2.1c-2.2,1.4-4.1,3-5.5,5v-1.3c0-1.4-0.5-2.6-1.4-3.5c-0.9-0.9-2.1-1.4-3.5-1.4
            c-1.4,0-2.6,0.5-3.5,1.4c-0.9,0.9-1.4,2.1-1.4,3.5v33.5c0,1.4,0.5,2.6,1.4,3.5c0.9,0.9,2.1,1.4,3.5,1.4c1.4,0,2.6-0.5,3.5-1.4
            c0.9-0.9,1.4-2.1,1.4-3.5v-20.7c0-2.8,0.9-5,2.6-6.8c1.7-1.8,4.1-2.7,7.1-2.7c2.9,0,5,0.9,6.1,2.6c1.2,1.7,1.7,4,1.7,7v20.7
            c0,1.4,0.5,2.6,1.4,3.5c0.9,0.9,2.1,1.4,3.5,1.4s2.6-0.5,3.5-1.4c0.9-0.9,1.4-2.1,1.4-3.5v-20.7c0-2.8,0.9-5,2.6-6.8
            c1.7-1.8,4.1-2.7,7.1-2.7c2.9,0,5,0.9,6.1,2.6c1.2,1.7,1.7,4,1.7,7v20.7c0,1.4,0.5,2.6,1.4,3.5c0.9,0.9,2.1,1.4,3.5,1.4
            c1.4,0,2.6-0.5,3.5-1.4c0.9-0.9,1.4-2.1,1.4-3.5v-20.7C682.4,857.7,681.4,853.1,679.3,849.9z"/>
    </g>
    <g>
        <path class="st3" d="M1176,846c-2.8,0-5.4,0.7-7.7,2.1c-2.3,1.4-4.3,3.1-5.7,5v-1.4c0-1.4-0.5-2.6-1.4-3.5
            c-0.9-0.9-2.1-1.4-3.5-1.4c-1.4,0-2.6,0.5-3.5,1.4c-0.9,0.9-1.4,2.1-1.4,3.5v33.5c0,1.4,0.5,2.6,1.4,3.5c0.9,0.9,2.1,1.4,3.5,1.4
            c1.4,0,2.6-0.5,3.5-1.4c0.9-0.9,1.4-2.1,1.4-3.5v-20.7c0-2.8,0.9-5,2.7-6.8c1.8-1.8,4.2-2.7,7.4-2.7c3,0,5.2,0.9,6.4,2.6
            c1.2,1.7,1.9,4,1.9,7v20.7c0,1.4,0.5,2.6,1.4,3.5c0.9,0.9,2.1,1.4,3.5,1.4c1.4,0,2.6-0.5,3.5-1.4c0.9-0.9,1.4-2.1,1.4-3.5v-20.7
            c0-5.8-1.1-10.3-3.2-13.6C1185.4,847.7,1181.5,846,1176,846z"/>
        <path class="st3" d="M1236.2,846c-1.4,0-2.6,0.5-3.5,1.4c-0.9,0.9-1.4,2.1-1.4,3.5v0.1c-1.6-1.5-3.5-2.7-5.8-3.6
            c-2.3-0.9-4.7-1.4-7.3-1.4c-3.6,0-6.9,1-9.9,2.9c-3,1.9-5.4,4.6-7.1,8c-1.7,3.4-2.6,7.3-2.6,11.6c0,4.3,0.9,8.2,2.6,11.6
            c1.8,3.4,4.1,6.1,7.2,8c3,1.9,6.4,2.9,10.1,2.9c2.5,0,5-0.6,7.3-1.7c2.3-1.1,4.1-2.4,5.5-4c0.1,1.4,0.5,2.6,1.4,3.5
            c0.9,0.9,2,1.4,3.4,1.4c1.4,0,2.6-0.5,3.5-1.4c0.9-0.9,1.4-2.1,1.4-3.5V851c0-1.5-0.5-2.6-1.4-3.6
            C1238.8,846.5,1237.6,846,1236.2,846z M1228.5,878.2c-2.2,2.6-5.1,3.8-8.6,3.8c-3.5,0-6.4-1.3-8.5-3.8c-2.2-2.6-3.3-5.8-3.3-9.7
            c0-3.9,1.1-7.1,3.3-9.7c2.2-2.6,5-3.9,8.5-3.9c3.5,0,6.4,1.3,8.6,3.9c2.2,2.6,3.3,5.8,3.3,9.7
            C1231.8,872.4,1230.7,875.7,1228.5,878.2z"/>
        <path class="st3" d="M1211.9,841.6c0.6,0,1.2-0.1,1.6-0.2c0.4-0.2,0.9-0.4,1.3-0.9c0.5-0.4,0.8-0.7,1-0.9l4.6-3.8l4.3,3.8
            c0.2,0.2,0.5,0.4,0.9,0.8c0.4,0.4,0.8,0.6,1.2,0.9c0.4,0.2,1,0.3,1.8,0.3c0.7,0,1.3-0.2,1.7-0.6c0.5-0.4,0.7-0.9,0.7-1.4
            c0-0.5-0.1-0.9-0.2-1.2c-0.1-0.3-0.4-0.8-0.8-1.3l-3.6-5c-0.6-0.9-1.2-1.5-1.8-1.9c-0.6-0.3-1.5-0.5-2.6-0.5h-2.9
            c-2.1,0-3.7,0.8-4.9,2.3l-4,5c-0.4,0.5-0.7,1-0.8,1.3c-0.1,0.3-0.2,0.7-0.2,1.2c0,0.5,0.2,1,0.7,1.4
            C1210.6,841.4,1211.2,841.6,1211.9,841.6z"/>
        <path class="st3" d="M1283,846.8c-1.4,0-2.6,0.5-3.5,1.4c-0.9,0.9-1.4,2.1-1.4,3.5v20.6c0,3.3-0.7,5.7-2.2,7.3
            c-1.5,1.6-3.7,2.4-6.6,2.4c-2.9,0-5.1-0.8-6.6-2.4c-1.5-1.6-2.2-4-2.2-7.3v-20.6c0-1.4-0.5-2.6-1.4-3.5c-0.9-0.9-2.1-1.4-3.5-1.4
            c-1.4,0-2.6,0.5-3.5,1.4c-0.9,0.9-1.4,2.1-1.4,3.5v20.6c0,5.8,1.6,10.4,4.8,13.7c3.2,3.3,7.7,4.9,13.7,4.9c5.9,0,10.5-1.6,13.7-4.9
            c3.2-3.3,4.8-7.9,4.8-13.7v-20.6c0-1.4-0.5-2.6-1.4-3.5C1285.5,847.3,1284.4,846.8,1283,846.8z"/>
        <path class="st3" d="M1334.4,833.5c-1.4,0-2.6,0.2-3.5,0.7l-12.2,7.3c-0.8,0.4-1.4,1-1.8,1.8c-0.5,0.8-0.7,1.6-0.7,2.4
            c0,1.2,0.5,2.4,1.4,3.4c0.9,1,2.1,1.5,3.4,1.5c0.9,0,1.8-0.2,2.6-0.7l5-3.1v38.4c0,1.4,0.5,2.6,1.5,3.5c1,0.9,2.2,1.4,3.7,1.4
            c1.5,0,2.8-0.5,3.8-1.4c1-0.9,1.5-2.1,1.5-3.5v-46.8c0-1.4-0.5-2.6-1.4-3.5C1336.9,833.9,1335.8,833.5,1334.4,833.5z"/>
        <path class="st3" d="M1389.3,846.5c-1.7-4.4-4.1-7.8-7.4-10.2c-3.3-2.4-7.2-3.6-11.7-3.6c-4.5,0-8.4,1.2-11.7,3.6
            c-3.3,2.4-5.7,5.8-7.4,10.2c-1.7,4.4-2.5,9.5-2.5,15.3c0,5.8,0.8,10.9,2.5,15.3c1.7,4.4,4.1,7.8,7.4,10.2c3.3,2.4,7.2,3.6,11.7,3.6
            c4.5,0,8.4-1.2,11.7-3.6c3.3-2.4,5.7-5.8,7.4-10.2c1.7-4.4,2.5-9.5,2.5-15.3C1391.8,856,1390.9,851,1389.3,846.5z M1378.3,876.3
            c-2,3.3-4.7,4.9-8.1,4.9c-3.5,0-6.2-1.6-8.1-4.9c-2-3.3-3-8.1-3-14.5c0-6.4,1-11.2,3-14.5c2-3.3,4.7-4.9,8.1-4.9
            c3.5,0,6.2,1.6,8.1,4.9c2,3.3,3,8.1,3,14.5C1381.3,868.2,1380.3,873,1378.3,876.3z"/>
    </g>
    <g>
        <text transform="matrix(0.9469 0 0 1 198.0583 620.6199)" class="st4 st5 st6">${name}</text>
    </g>
    <g>
        <text transform="matrix(0.9872 0 0 1 300.2665 702.8016)" class="st2 st7 st8">${quotee}</text>
    </g>
    <g>
        <g>
            <path class="st0" d="M55.8,28.7v734.9h566.9V28.7H55.8z M594.7,735.6H83.8V56.7h510.9V735.6z"/>
            <path class="st9" d="M55.8,28.7v734.9h566.9V28.7H55.8z M594.7,735.6H83.8V56.7h510.9V735.6z"/>
        </g>
    </g>
    <path class="st10" d="M323.3,20.1"/>
</svg>
`;
};
