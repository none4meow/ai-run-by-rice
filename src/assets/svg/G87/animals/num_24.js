export const tag = (x, y, p) => {
  return `
  <g id="Layer_1-2" data-name="Layer 1" transform="translate(${x}, ${y}) scale(${p})">
    <g>
      <path d="m140.66,52.73c.35-.98.63-1.96.86-2.94.61-2.67.62-5.48,0-8.37-.32-1.49-.97-2.86-1.99-4.19-2.16-2.82-4.9-3.24-6.34-3.24-.54,0-1.08.06-1.61.17-1.07.22-3.37.98-4.89,3.42-3.39-2.06-7.17-3.73-11.24-4.96-1.23-.83-2.4-1.27-3.25-1.54-3.96-1.27-8.15-1.99-12.79-2.2-1.94-.09-4.48-.24-6.94-.55-6.51-.84-12.86-1.16-17.66-1.34-.26,0-.52-.02-.79-.03.91-1.06,1.64-2.24,2.17-3.51,1.13-2.73.85-5.72-.78-8.2-1.47-2.24-3.69-3.67-6.6-4.26-1.19-.24-2.43-.36-3.79-.36s-2.59.11-3.69.21c-.15.01-.3.03-.45.04-.17-.94-.49-2.22-1.19-3.52-1.5-2.81-4.33-4.55-7.39-4.55-2.18,0-4.28.87-5.9,2.45-.99.96-1.86,2.12-2.58,3.44-.24.43-.47.87-.7,1.31-.19.36-.38.71-.56,1.05-.14-.02-.28-.04-.42-.06-3.12-.48-5.91-.71-8.51-.71-.92,0-1.81.03-2.69.08-.09-.24-.19-.48-.28-.72-.21-.54-.42-1.09-.63-1.63-.56-1.4-1.21-2.64-2-3.81C25.58.54,22.31,0,20.57,0h0c-.59,0-1.2.06-1.79.18-1.91.39-5.25,1.78-6.48,6.63-.44-.06-.89-.08-1.32-.08-4.57,0-8.31,2.93-9.54,7.45-.6,2.2-.49,4.43.31,6.46.37.95.98,2.37,1.93,3.81,1.22,1.84,2.6,3.35,3.83,4.68.2.22.4.43.59.64-.23.59-.46,1.18-.68,1.77-.98,2.55-2,5.19-2.94,7.85-1.39,3.96-2.43,8.09-3.26,11.41C.02,55.56-.29,60.09.27,64.66c.67,5.5,2.65,10.58,5.9,15.11,2.97,4.15,6.56,7.31,10.66,9.4,4.82,2.46,10.14,3.99,15.8,4.55,0,.13.01.26.02.38.08,2.03.16,4.13.48,6.35.74,5.22,4.24,8.68,9.36,9.24.54.06,1.1.09,1.67.09,1,0,2.04-.09,3.18-.29,1.53-.26,2.88-.73,4.05-1.41,2.17,1.41,4.47,2.12,6.85,2.12.26,0,.52,0,.78-.03,8.18-.55,10.18-6.2,10.65-9.52.07-.48.11-.92.15-1.3l.03-.28c.07-.75.15-1.47.24-2.16.63-.06,1.24-.13,1.85-.19,1.65-.17,3.2-.34,4.76-.45.99-.07,1.95-.17,2.87-.27,1.51-.16,2.95-.31,4.26-.31.29,0,.57,0,.83.02l.33.02c3.02.17,6.15.34,9.31.37.49,0,.96.01,1.41.03.01.32.02.66.04,1.01.03.87.06,1.86.15,2.88.4,4.38,3.02,7.54,7.19,8.66,1.04.28,2.08.42,3.09.42,2.25,0,4.37-.72,6.08-2.03,2.66,1.7,5.55,2.64,8.6,2.81.27.01.53.02.78.02,5.18,0,9.2-3.07,10.74-8.2.04-.14.09-.28.13-.43.16-.53.35-1.12.51-1.81.65-2.78,1.81-5.39,3.57-7.99,2.67-3.97,4.58-8.35,5.67-13.01.98-4.2,1.49-8.45,1.51-12.65.01-2.45-.14-5.68-1.37-8.99-.48-1.29-1.01-2.7-1.7-4.13Z" style="fill: #e2d6c7; stroke-width: 0px;"/>
      <g>
        <path d="m136.04,59.22c-.68-1.83-1.37-3.67-2.44-5.32-.35-.55-.31-1.02-.06-1.57.6-1.3,1.07-2.65,1.4-4.06.42-1.83.36-3.64-.02-5.46-.12-.56-.4-1.05-.74-1.49-.29-.38-.67-.7-1.22-.58-.52.11-.66.53-.79.96-.26.88-.48,1.77-.76,2.64-.34,1.03-.76,2.01-1.44,2.88-.64.82-.63.83-1.44.12-.06-.05-.13-.1-.18-.15-1.5-1.51-3.25-2.69-5.05-3.8-3.11-1.91-6.44-3.33-9.93-4.37-.45-.14-.97-.25-1.31-.54-.57-.49-1.22-.77-1.9-.99-3.59-1.15-7.3-1.72-11.05-1.89-2.51-.12-5.01-.28-7.49-.6-5.66-.73-11.36-1.08-17.05-1.29-3.55-.14-7.08-.53-10.61-.82-.61-.05-.81-.32-.87-.89-.14-1.15-.32-2.29-.53-3.43-.09-.49.09-.71.48-.95,2-1.26,3.67-2.93,5.38-4.53.67-.63,1.21-1.38,1.57-2.24.28-.68.22-1.29-.19-1.91-.55-.84-1.39-1.17-2.3-1.35-2.38-.48-4.76-.06-7.14.09-1.59.11-3.18.26-4.77.31-.99.04-1.14-.18-1.12-1.21.02-1.36.08-2.71-.1-4.07-.1-.75-.23-1.5-.59-2.18-.6-1.12-1.76-1.32-2.66-.44-.55.53-.98,1.15-1.35,1.82-.67,1.22-1.29,2.47-2,3.67-.51.86-1.08,1.68-1.79,2.39-.29.29-.57.47-1.05.36-1.24-.28-2.5-.51-3.76-.7-4.4-.67-8.81-.94-13.23-.14-1.01.18-1,.17-1.48-.72-1.07-2.01-1.81-4.17-2.65-6.28-.36-.9-.79-1.74-1.33-2.54-.55-.82-1.28-1.38-2.3-1.17-.92.19-1.16,1.02-1.34,1.81-.39,1.69-.36,3.41-.15,5.12.14,1.14.31,2.27.66,3.62-1.42-1.01-2.77-1.62-4.04-2.35-1.07-.62-2.19-1.14-3.41-1.41-1.91-.42-3.41.5-3.92,2.38-.2.75-.22,1.49.07,2.23.35.89.74,1.75,1.28,2.56,1.42,2.15,3.32,3.88,4.95,5.83.51.6,1.38,1.11,1.5,1.76.12.67-.46,1.48-.75,2.22-1.4,3.69-2.87,7.36-4.18,11.08-1.24,3.54-2.17,7.18-3.08,10.81-.94,3.76-1.25,7.53-.78,11.39.54,4.42,2.1,8.4,4.68,12,2.2,3.07,4.88,5.61,8.24,7.32,4.34,2.21,8.99,3.46,13.85,3.89,1.55.14,3.11.2,4.66.14.56-.02.78.14.79.72.02,1.59.08,3.18.15,4.77.1,2.27.14,4.55.46,6.81.29,2.02,1.22,3.25,3.43,3.49,1.01.11,2,.02,2.98-.14,2.24-.38,3.15-1.36,3.41-3.66.11-1.03.12-2.07.19-3.1.08-1.27.08-2.55.55-3.77.21-.55.5-1,1.02-1.27.57-.3,1.01-.14,1.21.48.24.72.41,1.45.42,2.22.02,1.68.04,3.36.1,5.03.05,1.41.5,2.68,1.72,3.52,1.11.76,2.35,1.25,3.71,1.16,2.64-.18,4.04-.97,4.43-3.73.06-.43.1-.87.14-1.31.2-2.03.43-4.05,1.01-6.01.35-1.19,1.11-1.82,2.42-1.93,3.22-.25,6.42-.68,9.64-.92,2.94-.22,5.86-.72,8.83-.56,3.11.17,6.21.35,9.33.38,1.63.02,3.27.05,4.88.38,1.64.33,2.44.94,2.79,2.52.21.94.3,1.89.36,2.84.09,1.43.07,2.88.2,4.31.14,1.58.86,2.39,2.23,2.76,1.7.46,3.09.09,3.99-1.12.5-.67.91-1.41,1.11-2.24.29-1.2.55-2.41.72-3.64.14-1.03.31-2.05.65-3.04.2-.59.52-1.08,1.08-1.38.55-.29.92-.17,1.07.44.13.54.27,1.07.29,1.64.06,1.83-.04,3.68.22,5.5.17,1.15.58,2.15,1.58,2.83,1.72,1.17,3.62,1.87,5.68,1.99,2.51.14,3.97-.98,4.69-3.38.18-.61.39-1.22.53-1.84.86-3.7,2.43-7.09,4.54-10.22,2.23-3.31,3.8-6.92,4.7-10.78.85-3.65,1.31-7.38,1.33-11.15,0-2.25-.15-4.48-.95-6.6Zm-5.68-10.58c1.57-1.6,2.15-3.67,2.73-5.74.03-.1.13-.17.29-.38.9,3.16-.09,5.96-1.1,8.94-.68-.82-1.29-1.55-1.89-2.29-.13-.16-.19-.35-.02-.53Zm-119.29-1.91c.86-3.08,1.78-6.13,2.9-9.12,1.02-2.73,1.92-5.5,2.85-8.26.38-1.11.26-2.01-.49-2.87-1.13-1.29-2.27-2.57-3.39-3.87-.73-.85-1.43-1.72-2.14-2.58-.62-.75-.98-1.64-1.23-2.57-.44-1.61.63-2.72,2.26-2.3.69.18,1.38.42,2.01.76,2.13,1.17,4.41,2.08,6.34,3.6.16.13.34.26.54.13.33-.21.27-.55.17-.86-.43-1.34-.63-2.72-.82-4.1-.25-1.79-.25-3.58-.06-5.38.04-.43.06-.88.46-1.25.52.1.7.56.93.95.62,1.08,1.03,2.25,1.46,3.41.68,1.83,1.49,3.61,2.45,5.32.38.67.83.92,1.63.89,1.71-.07,3.42-.28,5.14-.25,3.6.07,7.17.34,10.68,1.14.39.09.8.1,1.18.21,1.19.34,2.09-.18,2.92-.93,1.27-1.13,2.16-2.55,2.99-4.01.71-1.24,1.38-2.51,2.37-3.67.5.55.51,1.19.56,1.8.12,1.44.01,2.87,0,4.31-.01,1.2.69,2.11,1.89,2.3,1.54.24,3.1.16,4.66.09,2.31-.11,4.61-.4,6.93-.17.16.02.32,0,.48.01.44.06.93.16,1.11.59.2.47-.31.68-.57.95-1.29,1.36-2.74,2.55-4.13,3.79-.15.13-.33.23-.47.37-.86.83-.88.85-1.75.17-.61-.48-1.3-.8-2.03-.98-2.66-.64-5.36-.94-8.06-.32-3.75.86-6.73,2.84-8.58,6.3-.61,1.14-.86,2.43-.82,3.7.13,3.48,1.17,6.69,3.44,9.37,2.07,2.45,4.64,4.15,7.83,4.96,2.72.68,5.37.54,8.03-.12.84-.21,1.61-.69,2.41-1.03.14-.06.3-.09.57-.17.29,1.22.59,2.34.68,3.5.14,1.64.44,3.25.96,4.8.22.66.19,1.29.05,1.91-.2.07-.29,0-.38-.08-3.13-3.03-6.86-5.06-10.89-6.57-6.75-2.54-13.76-3.46-20.93-3.22-6.22.21-12.26,1.35-18.03,3.68-1.89.65-4.56,2.15-5.96,2.97.53-2.45,1.17-4.88,1.85-7.3Zm46.08-5.63c-.26.5-.67.3-1.02.09-1.44-.89-2.95-.71-4.5-.38-.39.09-.95.43-1.15-.13-.22-.63.43-.75.85-.92.82-.32,1.67-.48,2.51-.56,1.05.06,1.99.33,2.85.85.38.23.74.54.47,1.04Zm-22.21,44.24c-3.97-.22-7.81-1.13-11.5-2.6-3.57-1.42-6.64-3.6-9.14-6.55-2.18-2.56-3.77-5.47-4.65-8.69-1.07-3.87-1.52-7.83-.75-11.84.02-.08.03-.16.05-.24,2.27-1.61,7.06-3.6,7.43-3.76,2.37-.87,4.79-1.58,7.28-2.08,5.36-1.05,10.75-1.39,16.21-.97,4.81.37,9.48,1.32,13.99,3.02,3.84,1.45,7.35,3.46,10.44,6.2.96.86,1.44,1.81,1.42,3.12-.11,5.18-1.53,9.94-4.74,14.03-1.97,2.52-4.31,4.7-6.98,6.49-1.84,1.23-3.9,1.95-6.01,2.61-4.26,1.33-8.63,1.48-13.03,1.24Zm97.29-24.12c-.93.56-1.48,1.43-1.98,2.35-.23.41-.3.89-.61,1.26-.44-.11-.56-.49-.81-.73-.4-.39-.75-.83-1.18-1.19-2.03-1.76-4.58-1-5.36,1.58-.4,1.34-.3,2.69.03,4.02.8,3.2,2.55,5.81,4.97,8.02,1.43,1.3,3.05,2.31,4.72,3.26.85.48.85.5.52,1.38-.67,1.81-1.66,3.45-2.64,5.09-1.46,2.48-2.83,5-3.89,7.68-.54,1.38-.89,2.81-1.26,4.24-.18.7-.42,1.37-.7,2.03-.42.99-1.2,1.31-2.18,1.38-1.69.13-3.41-.66-4.91-1.34-1.21-.55-1.53-1.75-1.53-2.99,0-1.6.02-3.2-.16-4.79-.08-.71-.15-1.44-.44-2.1-.51-1.17-1.44-1.58-2.63-1.13-1.15.43-1.93,1.2-2.33,2.39-.47,1.41-.69,2.86-.88,4.32-.13.99-.3,1.97-.58,2.93-.16.54-.42,1.03-.83,1.44-.84.84-2.3.81-3.12-.04-.28-.29-.28-.65-.3-1-.09-1.75-.14-3.51-.27-5.26-.09-1.19-.31-2.36-.86-3.46-.65-1.3-1.7-1.94-3.07-2.23-1.64-.35-3.3-.58-4.98-.56-.11,0-.21-.05-.4-.1.43-1.47.89-2.91,1.05-4.42.11-1.08.12-2.15-.27-3.19-.61-1.61-1.75-2.21-3.41-1.74-1.93.54-3.21,1.85-4.15,3.56-.25.45-.32,1-.81,1.35-.54-.69-1.08-1.38-1.63-2.06-.41-.51-.9-.91-1.48-1.2-1.24-.63-2.49-.26-3.18.95-.97,1.69-.92,3.53-.66,5.36.2,1.39.23,1.35-1.21,1.54-3.4.44-6.84.54-10.22,1.11-.78.13-1.59.11-2.39.18-2.07.19-3.21,1.45-3.74,3.33-.5,1.77-.75,3.59-.83,5.43-.03.75-.16,1.51-.27,2.26-.14.95-.7,1.45-1.64,1.65-.93.19-1.83.16-2.72-.09-1.43-.4-2.18-1.38-2.24-2.88-.08-1.91-.05-3.83-.25-5.74-.06-.55-.13-1.11-.27-1.65-.26-.97-.77-1.84-1.82-2.02-1.09-.19-2.02.29-2.74,1.13-.76.88-1.02,1.97-1.21,3.08-.23,1.31-.22,2.63-.21,3.94,0,.81-.17,1.59-.29,2.37-.08.55-.42.98-.93,1.16-1.18.42-2.4.58-3.65.37-.97-.17-1.6-.67-1.73-1.7-.12-.95-.27-1.9-.34-2.85-.23-2.94-.44-5.88-.66-8.83-.06-.85-.03-.92.92-.95,3.23-.1,6.28-1.02,9.29-2.09,2.67-.95,5.03-2.42,7.06-4.4.39-.39.84-.72,1.3-1.11.19.72.3,1.39.55,2,1.5,3.69,4.41,5.39,8.23,5.79.8.08,1.15-.39,1.42-1.01.95-2.18,1.55-4.45,1.81-6.81.13-1.16.03-2.32-.38-3.43-.08-.22-.16-.45-.27-.66-.78-1.5-2.12-1.82-3.48-.81-.98.73-1.46,1.78-1.78,2.9-.15.53-.22,1.09-.34,1.74-1.06-.81-1.8-2-3.23-2.24.26-.64.75-1.06,1.1-1.58,2.57-3.75,3.92-7.9,4.2-12.42.06-1.04.15-2.07-.03-3.1-.12-.67.1-.97.78-1.18,1.91-.58,3.8-1.23,5.51-2.28,1.3-.79,2.54-1.66,3.55-2.82.83-.95,1.42-2.02,1.71-3.25.08-.35.14-.71.14-1.06.02-2.8-2.33-4.18-4.78-2.84-.9.49-1.59,1.19-2.21,1.98-.21.27-.43.54-.74.93-.24-1.07-.45-1.98-.65-2.89-.14-.64-.4-1.21-.77-1.74-.9-1.32-2.33-1.56-3.63-.62-.16.11-.27.3-.61.31-.64-3.47-1.29-6.96-1.95-10.55,2.11.36,4.02.77,5.96,1,3.2.38,6.42.67,9.64.95,3.61.31,7.22.59,10.81,1.08,1.3.18,2.62.25,3.93.38.35.03.69.02.86.48.6,1.57,1.87,2.43,3.35,3.05.21.09.49.07.65.45-.72.56-1.59.79-2.22,1.45-1.3,1.36-1.03,2.91.74,3.6,1.82.71,3.67.58,5.52.07,3.24-.88,5.79-2.82,7.96-5.27.49-.56.86-.63,1.52-.42,3.13.96,6.19,2.08,9.06,3.67,4.91,2.72,8.77,6.45,11.3,11.51.8,1.6,1.53,3.23,2.14,5.12-.92-.35-1.66-.18-2.36.25Z" style="stroke-width: 0px;"/>
        <path d="m98.07,54.76c-.89.71-1.56,1.58-2.16,2.54-.6.97-.89,2.03-1.14,3.29-.62-.52-.88-1.07-1.26-1.52-.88-1.05-1.81-2.03-3.16-2.47-1.5-.5-2.68,0-3.37,1.42-.18.36-.29.74-.36,1.13-.41,2.21.25,4.18,1.32,6.06,1.19,2.1,2.93,3.66,4.92,4.96,1.54,1,3.16,1.87,4.98,2.26,1.27.27,1.84.01,2.42-1.13.47-.92.94-1.85,1.34-2.8,1.11-2.65,2.31-5.28,2.37-8.23.04-1.78-.11-3.53-1.27-4.99-1.24-1.57-3.07-1.74-4.63-.5Z" style="stroke-width: 0px;"/>
        <path d="m20.77,62.35c-1.18-.78-2.29-.31-2.59,1.08-.28,1.29.13,2.43.91,3.44.46.6,1.73,1,2.36.79.73-.24,1.17-.99,1.18-2.28-.19-1.08-.69-2.26-1.85-3.04Z" style="stroke-width: 0px;"/>
        <path d="m48.8,67.12c1.5-.69,1.83-2.07,2.06-3.29,0-1.71-1.06-2.6-2.27-2.11-1.4.56-2.51,2.99-2.04,4.44.35,1.07,1.2,1.44,2.25.96Z" style="stroke-width: 0px;"/>
        <path d="m14.8,17.75c-.44-.29-.94-.41-1.43-.46-.84.02-1.42.7-1.3,1.55.22,1.47,1.39,2.78,3.03,3.17.72.17,1.2-.3,1.63-.79.4-.46.29-.96.05-1.45-.43-.89-1.19-1.48-1.99-2.01Z" style="stroke-width: 0px;"/>
        <path d="m21.09,41.51c.11-.02.22-.08.33-.13,1.11-.51,2.17-.31,3.2.24.21.11.42.24.65.29.32.07.66.04.83-.29.15-.29.14-.61-.1-.89-.16-.18-.33-.33-.55-.44-.69-.37-1.43-.46-2.19-.47-.24.01-.48.02-.71.04-.75.05-1.37.36-1.87.92-.12.14-.24.34-.1.54.12.19.32.23.52.2Z" style="stroke-width: 0px;"/>
      </g>
    </g>
  </g>
`;
};
