import { createCanvas } from "canvas";

const MAX_CIRCLES = 2000;
const PI = Math.PI;

function xOfK(k: number) {
  return (
    Math.cos((10 * PI * k) / MAX_CIRCLES) *
    (1 - 0.5 * Math.pow(Math.cos((16 * PI * k) / MAX_CIRCLES), 2))
  );
}
function yOfK(k: number) {
  return (
    Math.sin((10 * PI * k) / MAX_CIRCLES) *
    (1 - 0.5 * Math.pow(Math.cos((16 * PI * k) / MAX_CIRCLES), 2))
  );
}
function rOfK(k: number) {
  return (
    1 / 200 + (1 / 10) * Math.pow(Math.sin((52 * PI * k) / MAX_CIRCLES), 4)
  );
}

function xOfK2(k: number) {
  return (
    Math.cos((15 * PI * k) / MAX_CIRCLES) *
    (1 - 0.75 * Math.pow(Math.cos((32 * PI * k) / MAX_CIRCLES), 2))
  );
}
function yOfK2(k: number) {
  return (
    Math.sin((14 * PI * k) / MAX_CIRCLES) *
    (1 - 0.75 * Math.pow(Math.cos((32 * PI * k) / MAX_CIRCLES), 2))
  );
}
function rOfK2(k: number) {
  return 0.005 + 0.1 * Math.pow(Math.sin((56 * PI * k) / MAX_CIRCLES), 5);
}

function xOfK3(k: number) {
  return (
    Math.cos((14 * PI * k) / MAX_CIRCLES) *
    (1 - 0.75 * Math.pow(Math.cos((20 * PI * k) / MAX_CIRCLES), 2))
  );
}
function yOfK3(k: number) {
  return (
    Math.sin((14 * PI * k) / MAX_CIRCLES) *
    (1 - 0.75 * Math.pow(Math.cos((24 * PI * k) / MAX_CIRCLES), 2))
  );
}
function rOfK3(k: number) {
  return 0.005 + 0.1 * Math.pow(Math.sin((54 * PI * k) / MAX_CIRCLES), 5);
}

export default function NFTGenerator(response:any) {
  const canvas = createCanvas(1000, 1000);
  const ctx = canvas.getContext("2d");

  const MAX_CIRCLES2 = 20000;

  // @ts-ignore
  [...Array(MAX_CIRCLES2).keys()].forEach((_, k) => {
    const fillColor = `rgb(0,${Math.floor(255 - 42.5 * 3)},${Math.floor(255 - 42.5 * 6)})`;
    ctx.strokeStyle = fillColor;
    ctx.beginPath();
    ctx.arc(xOfK2(k) * 800, yOfK2(k) * 1300, rOfK2(k) * 2000, 0, 2 * PI);
    ctx.stroke();
  });

  canvas.createPNGStream().on('data', (data) => {
        response.writeHead(200, { 'Content-Type': 'image/png' });
        // response.write(Buffer.from(data));
        // response.end();
        response.end(Buffer.from(data));
    });
}

// // void ctx.arc(x, y, radius, startAngle, endAngle [, counterclockwise]);
// // https://blogs.scientificamerican.com/guest-blog/making-mathematical-art/

// [...Array(MAX_CIRCLES).keys()].forEach((_,k) => {
//   ctx.arc(xOfK(k) * 1000, yOfK(k) * 1000, rOfK(k) * Math.random() * 1000, 0, 2 * PI);
//   ctx.stroke();
// });

// const MAX_CIRCLES2 = 20000;

// [...Array(MAX_CIRCLES2).keys()].forEach((_,k) => {
//   const fillColor = 'rgb(0, ' + Math.floor(255 - 42.5 * 3) + ', ' + Math.floor(255 - 42.5 * 6) + ')';
//   ctx.strokeStyle = fillColor;
//   ctx.beginPath();
//   ctx.arc(xOfK2(k) * 800, yOfK2(k) * 1300, rOfK2(k) * 2000, 0, 2 * PI);
//   ctx.stroke();
// });

// [...Array(MAX_CIRCLES).keys()].forEach((_,k) => {
//   let fillColor = 'rgb(0, ' + Math.floor(255 - 42.5 * 4) + ', ' + Math.floor(255 - 42.5 * 3) + ')';
//   ctx.strokeStyle = fillColor;
//   ctx.beginPath();
//   ctx.arc(xOfK3(k) * 800, yOfK3(k) * 1300, rOfK3(k) * 2000, 0, 2 * PI);
//   ctx.stroke();

//   fillColor = 'rgb(0, ' + Math.floor(255 - 42.5 * 2) + ', ' + Math.floor(255 - 42.5 * 6) + ')';
//   ctx.strokeStyle = fillColor;
//   ctx.beginPath();
//   ctx.rect(yOfK3(k) * 1300, xOfK3(k) * 1300, rOfK3(k) * 2000, rOfK3(k) * 2000);
//   ctx.stroke();
// });

// //func1|2000|500|700|red,blue,yellow|grad1,grad2,grad3|...

// // 01bebd3762da74e0bbb52c1bc3670c6a

// // {
// //    "image":"https://myvercelsite.vercel.app/asset/01bebd3762da74e0bbb52c1bc3670c6a.png",
// //    "attributes":[
// //       {
// //          "trait_type":"Earring",
// //          "value":"Gold Hoop"
// //       }
// //    ]
// // }
