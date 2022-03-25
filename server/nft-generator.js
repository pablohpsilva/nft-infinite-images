const { createCanvas } = require("canvas");

const MAX_CIRCLES = 2000;
const PI = Math.PI;

function xOfK2(k) {
  return (
    Math.cos((15 * PI * k) / MAX_CIRCLES) *
    (1 - 0.75 * Math.pow(Math.cos((32 * PI * k) / MAX_CIRCLES), 2))
  );
}
function yOfK2(k) {
  return (
    Math.sin((14 * PI * k) / MAX_CIRCLES) *
    (1 - 0.75 * Math.pow(Math.cos((32 * PI * k) / MAX_CIRCLES), 2))
  );
}
function rOfK2(k) {
  return 0.005 + 0.1 * Math.pow(Math.sin((56 * PI * k) / MAX_CIRCLES), 5);
}

function NFTGenerator() {
  const canvas = createCanvas(1000, 1000);
  const ctx = canvas.getContext("2d");

  const MAX_CIRCLES2 = 20000;

  // @ts-ignore
  [...Array(MAX_CIRCLES2).keys()].forEach((_, k) => {
    const fillColor = `rgb(0,${Math.floor(255 - 42.5 * 5)},${Math.floor(255 - 42.5 * 6)})`;
    ctx.strokeStyle = fillColor;
    ctx.beginPath();
    ctx.arc(xOfK2(k) * 800, yOfK2(k) * 1000, rOfK2(k) * 1000, 0, 2 * PI);
    ctx.stroke();
  });
  
  return new Promise((resolve, reject) => {
    resolve(canvas.createPNGStream())
  })
}


module.exports = NFTGenerator