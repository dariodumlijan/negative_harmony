import React from 'react';
import {
  Path, Polygon, Rect, Svg,
} from 'react-native-svg';

type Props = {
  style?: Object,
};

function LegendExtra(props: Props) {
  return (

    <Svg viewBox="0 0 411.89 127.8" style={props.style}>
      <Rect fill="#dc0000" x="48.35" y="34.35" width="60.42" height="60.42" rx="17.79" />
      <Path fill="#333" d="M147.48,58.68V49.8a6.65,6.65,0,0,0-1.73-5,6.31,6.31,0,0,0-4.7-1.77,8.41,8.41,0,0,0-3.24.65,5.4,5.4,0,0,0-2.29,1.83V43.2h-2.67V58.68h2.78V50.74a5.17,5.17,0,0,1,1.31-3.8,4.84,4.84,0,0,1,3.59-1.33,4.12,4.12,0,0,1,3.09,1.13,4.87,4.87,0,0,1,1.07,3.38v8.56Z" />
      <Path fill="#333" d="M166.34,55a8.64,8.64,0,0,0,0-8.09,7.42,7.42,0,0,0-2.86-2.78,8.85,8.85,0,0,0-8.25,0,7.15,7.15,0,0,0-2.86,2.78,8.53,8.53,0,0,0,0,8.09,7.31,7.31,0,0,0,2.86,2.79,8.85,8.85,0,0,0,8.25,0A7.51,7.51,0,0,0,166.34,55Zm-4.32.69a5.54,5.54,0,0,1-5.32,0,4.93,4.93,0,0,1-1.87-1.92,5.79,5.79,0,0,1-.68-2.85,5.72,5.72,0,0,1,.68-2.83,4.84,4.84,0,0,1,1.87-1.91,5.69,5.69,0,0,1,5.32,0,4.72,4.72,0,0,1,1.85,1.91,5.82,5.82,0,0,1,.67,2.83,5.89,5.89,0,0,1-.67,2.85A4.75,4.75,0,0,1,162,55.65Z" />
      <Path fill="#333" d="M183.16,58.68h2.71V49.8a6.65,6.65,0,0,0-1.73-5,6.33,6.33,0,0,0-4.62-1.77,8.41,8.41,0,0,0-3.24.65A5.46,5.46,0,0,0,174,45.53V43.2h-2.67V58.68h2.8V50.74a5.17,5.17,0,0,1,1.31-3.8A4.83,4.83,0,0,1,179,45.61a4.12,4.12,0,0,1,3.09,1.13,4.87,4.87,0,0,1,1.07,3.38Z" />
      <Rect fill="#333" x="190.06" y="49.41" width="7.84" height="2.41" />
      <Path fill="#333" d="M214.25,45.48a5.8,5.8,0,0,0-2.32-1.84,7.21,7.21,0,0,0-3.06-.63,8,8,0,0,0-4,1,6.9,6.9,0,0,0-2.78,2.76,8,8,0,0,0-1,4.09,8.15,8.15,0,0,0,1,4.13,7.08,7.08,0,0,0,2.78,2.78,8.14,8.14,0,0,0,4,1,7.43,7.43,0,0,0,3.15-.67,6.09,6.09,0,0,0,2.35-2v2.45h2.75V37l-2.87,0Zm-.56,8.25a4.82,4.82,0,0,1-1.88,1.92,5.49,5.49,0,0,1-5.3,0,4.84,4.84,0,0,1-1.86-1.92,5.68,5.68,0,0,1-.7-2.85,5.61,5.61,0,0,1,.7-2.83,4.81,4.81,0,0,1,1.86-1.91,5.65,5.65,0,0,1,5.3,0,4.8,4.8,0,0,1,1.88,1.91,6.44,6.44,0,0,1,0,5.68Z" />
      <Path fill="#333" d="M223.75,40.21a1.86,1.86,0,0,0,1.35-.54,1.83,1.83,0,0,0,.54-1.32,1.61,1.61,0,0,0-.54-1.28,2,2,0,0,0-2.71,0,1.81,1.81,0,0,0-.54,1.3,1.7,1.7,0,0,0,.54,1.27A1.86,1.86,0,0,0,223.75,40.21Z" />
      <Polygon fill="#333" points="222.42 58.59 225.2 58.59 225.2 43.17 222.39 43.17 222.42 58.59" />
      <Path fill="#333" d="M235.54,49.68a7.35,7.35,0,0,0-4.71,1.25,3.94,3.94,0,0,0-.5.5,4.3,4.3,0,0,0,.5,6.06A6.4,6.4,0,0,0,235,58.74a7.38,7.38,0,0,0,3.07-.57,4.36,4.36,0,0,0,2-1.61v2h2.65V49.28A6,6,0,0,0,241,44.61,6.9,6.9,0,0,0,236.15,43a12.12,12.12,0,0,0-3.53.52A8.27,8.27,0,0,0,229.78,45l1.16,2.08a6.72,6.72,0,0,1,2.22-1.19,7.84,7.84,0,0,1,2.67-.45,4.44,4.44,0,0,1,3.08.95A3.57,3.57,0,0,1,240,49.13v.55Zm4.3,4.22a4.12,4.12,0,0,1-1.62,2v0a5.23,5.23,0,0,1-2.83.73,4.23,4.23,0,0,1-2.51-.67,2.2,2.2,0,0,1-.9-1.84c0-1.58,1.18-2.38,3.56-2.38h4.3Z" />
      <Path fill="#333" d="M253.5,56.44a2.3,2.3,0,0,1-1.79-.66,2.63,2.63,0,0,1-.63-1.92V45.51h4.43V43.2h-4.43V39.8h-2.8v3.4h-2.62v2.33h2.62V54a4.86,4.86,0,0,0,1.29,3.59,5,5,0,0,0,3.61,1.24,6.54,6.54,0,0,0,1.86-.27,4.44,4.44,0,0,0,1.52-.8l-.88-2A3.43,3.43,0,0,1,253.5,56.44Z" />
      <Path fill="#333" d="M270.12,44.09a8.26,8.26,0,0,0-4.1-1,8.41,8.41,0,0,0-4.14,1A7.15,7.15,0,0,0,259,46.87,8.48,8.48,0,0,0,259,55a7.24,7.24,0,0,0,2.86,2.79,8.41,8.41,0,0,0,4.14,1,8.26,8.26,0,0,0,4.1-1A7.54,7.54,0,0,0,273,55a8.53,8.53,0,0,0,0-8.09A7.38,7.38,0,0,0,270.12,44.09Zm.41,9.64a4.84,4.84,0,0,1-1.86,1.92h-.05a5.52,5.52,0,0,1-5.32,0,4.84,4.84,0,0,1-1.86-1.92,5.57,5.57,0,0,1-.69-2.85,5.5,5.5,0,0,1,.69-2.83,4.81,4.81,0,0,1,1.86-1.91,5.69,5.69,0,0,1,5.32,0,4.81,4.81,0,0,1,1.86,1.91,6.23,6.23,0,0,1,0,5.68Z" />
      <Path fill="#333" d="M286.09,43.05a8.33,8.33,0,0,0-3.24.65,5.49,5.49,0,0,0-2.3,1.83V43.2h-2.66V58.68h2.79V50.74a5.17,5.17,0,0,1,1.31-3.8,4.85,4.85,0,0,1,3.58-1.33,4.12,4.12,0,0,1,3.09,1.13,4.81,4.81,0,0,1,1.06,3.38v8.56h2.8V49.8a6.61,6.61,0,0,0-1.73-5A6.33,6.33,0,0,0,286.09,43.05Z" />
      <Path fill="#333" d="M297.74,37.1a1.8,1.8,0,0,0-.53,1.3,1.73,1.73,0,0,0,.53,1.27,1.85,1.85,0,0,0,1.36.57h.1A1.82,1.82,0,0,0,301,38.38a1.61,1.61,0,0,0-.53-1.28A2,2,0,0,0,297.74,37.1Z" />
      <Rect fill="#333" x="297.74" y="43.17" width="2.78" height="15.43" />
      <Path fill="#333" d="M309.81,46.22a5.46,5.46,0,0,1,2.71-.66,5.14,5.14,0,0,1,2.38.55,4.79,4.79,0,0,1,1.81,1.62l2.12-1.36a5.76,5.76,0,0,0-2.54-2.44,8.07,8.07,0,0,0-3.73-.86,8.46,8.46,0,0,0-4.21,1,7.41,7.41,0,0,0-2.91,2.78,8.53,8.53,0,0,0,0,8.09,7.64,7.64,0,0,0,2.91,2.79,8.53,8.53,0,0,0,4.21,1.15,8,8,0,0,0,3.73-.86,6,6,0,0,0,2.54-2.45l-2.12-1.35a4.64,4.64,0,0,1-1.81,1.62,4.9,4.9,0,0,1-2.38.55,5.46,5.46,0,0,1-2.71-.66,4.82,4.82,0,0,1-1.89-1.91,5.77,5.77,0,0,1-.7-2.88,5.61,5.61,0,0,1,.7-2.83A4.82,4.82,0,0,1,309.81,46.22Z" />
      <Path fill="#828282" d="M135.47,80.39a4.7,4.7,0,0,1,2.32-.58,4.31,4.31,0,0,1,2,.45,3.64,3.64,0,0,1,1.51,1.32l1.2-.81A4.5,4.5,0,0,0,140.54,79a5.92,5.92,0,0,0-2.75-.61,6.35,6.35,0,0,0-3.16.78,5.75,5.75,0,0,0-2.19,2.16,6.16,6.16,0,0,0-.8,3.11,6.31,6.31,0,0,0,.8,3.15,5.51,5.51,0,0,0,2.19,2.17,6.47,6.47,0,0,0,3.16.76,6.06,6.06,0,0,0,2.75-.59,4.62,4.62,0,0,0,1.93-1.76l-1.2-.82a3.64,3.64,0,0,1-1.51,1.32,4.59,4.59,0,0,1-2,.42,4.68,4.68,0,0,1-2.32-.56,4.19,4.19,0,0,1-1.61-1.65,5.46,5.46,0,0,1,0-4.86A4.1,4.1,0,0,1,135.47,80.39Z" />
      <Path fill="#828282" d="M151.51,78.4a6.08,6.08,0,0,0-2.65.57,4.42,4.42,0,0,0-1.81,1.62v-7h-1.62V90.42h1.62V84.17A4.31,4.31,0,0,1,148.17,81a4.15,4.15,0,0,1,3-1.14,3.52,3.52,0,0,1,2.65,1,3.94,3.94,0,0,1,.94,2.83v6.76h1.62V83.51a5.15,5.15,0,0,0-1.34-3.8A4.89,4.89,0,0,0,151.51,78.4Z" />
      <Path fill="#828282" d="M168.81,79.18a6.18,6.18,0,0,0-3.1-.78,6.42,6.42,0,0,0-3.12.78,5.47,5.47,0,0,0-2.16,2.16,6.54,6.54,0,0,0,0,6.25,5.74,5.74,0,0,0,2.16,2.16,6.21,6.21,0,0,0,3.12.78,6.08,6.08,0,0,0,3.1-.78A5.7,5.7,0,0,0,171,87.59a6.65,6.65,0,0,0,0-6.25A5.5,5.5,0,0,0,168.81,79.18Zm.76,7.71A4.21,4.21,0,0,1,168,88.54a4.88,4.88,0,0,1-4.55,0,4.21,4.21,0,0,1-1.59-1.65,5.38,5.38,0,0,1,0-4.86,4,4,0,0,1,1.59-1.64,4.72,4.72,0,0,1,4.55,0A4,4,0,0,1,169.57,82a5.55,5.55,0,0,1,0,4.86Z" />
      <Path fill="#828282" d="M176.65,80.87V78.55h-1.54V90.43h1.61V84.36a4.61,4.61,0,0,1,1.07-3.24A3.77,3.77,0,0,1,180.73,80h.39V78.4a6,6,0,0,0-2.84.61A3.94,3.94,0,0,0,176.65,80.87Z" />
      <Path fill="#828282" d="M193.12,80.77A4.86,4.86,0,0,0,191.2,79a5.67,5.67,0,0,0-2.62-.61,6.07,6.07,0,0,0-3,.77,5.5,5.5,0,0,0-2.14,2.14,6.87,6.87,0,0,0,0,6.3,5.55,5.55,0,0,0,2.14,2.16,6.06,6.06,0,0,0,3,.76,5.65,5.65,0,0,0,2.7-.63,4.94,4.94,0,0,0,1.91-1.83v2.35h1.54V73.6h-1.61Zm-.55,6.12A4.34,4.34,0,0,1,191,88.54a4.86,4.86,0,0,1-4.54,0,4.11,4.11,0,0,1-1.58-1.65,4.94,4.94,0,0,1-.58-2.44,4.89,4.89,0,0,1,.58-2.42,4,4,0,0,1,1.58-1.64,4.7,4.7,0,0,1,4.54,0A4.25,4.25,0,0,1,192.57,82a5.38,5.38,0,0,1,0,4.86Z" />
      <Polygon fill="#828282" points="203.94 71.33 196.46 92.72 197.88 92.72 205.36 71.33 203.94 71.33" />
      <Path fill="#828282" d="M211.31,78.45a5.49,5.49,0,0,0-2.7.61,4.43,4.43,0,0,0-1.83,1.68V78.55h-1.5V90.42h1.6V84.17A4.41,4.41,0,0,1,208,81a4.18,4.18,0,0,1,3.06-1.14,3.52,3.52,0,0,1,2.65,1,4,4,0,0,1,.92,2.83v6.76h1.61V83.51a5.06,5.06,0,0,0-1.33-3.8A4.87,4.87,0,0,0,211.31,78.45Z" />
      <Path fill="#828282" d="M228.64,79.18a6.61,6.61,0,0,0-6.2,0,5.66,5.66,0,0,0-2.18,2.16,6.54,6.54,0,0,0,0,6.25,5.8,5.8,0,0,0,2.18,2.16l.05,0a6.57,6.57,0,0,0,6.21,0,5.66,5.66,0,0,0,2.17-2.17,6.65,6.65,0,0,0,0-6.25A5.62,5.62,0,0,0,228.64,79.18Zm.76,7.71a4.32,4.32,0,0,1-1.58,1.65,4.9,4.9,0,0,1-4.56,0,4.34,4.34,0,0,1-1.59-1.65,5.38,5.38,0,0,1,0-4.86,4.25,4.25,0,0,1,1.59-1.64,4.74,4.74,0,0,1,4.56,0A4.15,4.15,0,0,1,229.4,82a5.09,5.09,0,0,1,.56,2.42A5.14,5.14,0,0,1,229.4,86.89Z" />
      <Path fill="#828282" d="M239.77,89.06a2.91,2.91,0,0,1-1,.17,2,2,0,0,1-1.53-.57,2.23,2.23,0,0,1-.53-1.61V80h3.62V78.55h-3.62V75.82h-1.62v2.61H233v1.42h2.13v7.2a2.73,2.73,0,0,0,0,.7,3.16,3.16,0,0,0,3.5,2.78,4.29,4.29,0,0,0,1.42-.21,3,3,0,0,0,1.12-.62l-.6-1.09A2.22,2.22,0,0,1,239.77,89.06Z" />
      <Path fill="#828282" d="M251.29,79.15a5.69,5.69,0,0,0-3-.77,5.8,5.8,0,0,0-3,.77,5.63,5.63,0,0,0-2.09,2.16,6.39,6.39,0,0,0-.75,3.12,6,6,0,0,0,.8,3.13,5.69,5.69,0,0,0,2.21,2.17,7.14,7.14,0,0,0,5.86.28,5.13,5.13,0,0,0,2-1.42l-.91-1a4.34,4.34,0,0,1-1.61,1.17,4.94,4.94,0,0,1-2,.39A4.71,4.71,0,0,1,245.54,88a4.24,4.24,0,0,1-1.42-3H254l.07-.53a6.5,6.5,0,0,0-.75-3.14A5.46,5.46,0,0,0,251.29,79.15Zm-7.23,4.57a4.43,4.43,0,0,1,1.33-2.84h.05a4.4,4.4,0,0,1,5.79,0,4.29,4.29,0,0,1,1.33,2.84Z" />

    </Svg>
  );
}

export default LegendExtra;
