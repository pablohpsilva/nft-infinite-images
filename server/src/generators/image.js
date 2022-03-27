// source: https://blogs.scientificamerican.com/guest-blog/making-mathematical-art/
const { createCanvas } = require("canvas");
const { _values: colors, length: colorsLength } = require("./colors");
const { functions, length: functionsLength } = require("./functions");

const PI = Math.PI;

function NFTGenerator({
  iterations,
  height,
  width,
  diameter,
  colors: colorsIndexes,
  renderFunctionIndexes,
}) {
  const canvas = createCanvas(1000, 800);
  const ctx = canvas.getContext("2d");

  const grd = ctx.createLinearGradient(500,0,500,0);

  grd.addColorStop(0, colors[colorsIndexes[0] % colorsLength]);
  grd.addColorStop(1, colors[colorsIndexes[1] % colorsLength]);

  // Fill with gradient
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, width, height);

  const maxIterations = [...Array(iterations).keys()];
  
  renderFunctionIndexes.forEach((funcIndex) => {
    const [xOfK, yOfK, rOfK] = functions[funcIndex % functionsLength];
    
    maxIterations.forEach((_, k) => {
      const fillColor = "#ffffff";
      ctx.strokeStyle = fillColor;
      ctx.beginPath();

      const coordinates = [
        Math.abs(xOfK(iterations, k)) * height,
        Math.abs(yOfK(iterations, k)) * width,
        Math.abs(rOfK(iterations, k)) * diameter,
        0,
        2 * PI,
      ];

      ctx.arc(...coordinates);
      ctx.stroke();
    });
  });

  return new Promise((resolve, reject) => {
    resolve(canvas.createPNGStream());
  });
}

module.exports = NFTGenerator;
