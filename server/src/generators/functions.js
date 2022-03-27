const PI = Math.PI;

function x14000(maxIterations, k) {
  return (
    Math.cos((10 * PI * k) / maxIterations) *
    (1 - 0.5 * Math.pow(Math.cos((16 * PI * k) / maxIterations), 2))
  );
}
function y14000(maxIterations, k) {
  return (
    Math.sin((10 * PI * k) / maxIterations) *
    (1 - 0.5 * Math.pow(Math.cos((16 * PI * k) / maxIterations), 2))
  );
}
function r14000(maxIterations, k) {
  return 0.005 + 0.1 * Math.pow(Math.sin((52 * PI * k) / maxIterations), 4);
}

function x12000(maxIterations, k) {
  return (
    Math.cos((14 * PI * k) / maxIterations) *
    (1 - 0.75 * Math.pow(Math.cos((32 * PI * k) / maxIterations), 2))
  );
}
function y12000(maxIterations, k) {
  return (
    Math.sin((14 * PI * k) / maxIterations) *
    (1 - 0.75 * Math.pow(Math.cos((32 * PI * k) / maxIterations), 2))
  );
}
function r12000(maxIterations, k) {
  return 0.005 + 0.1 * Math.pow(Math.sin((56 * PI * k) / maxIterations), 5);
}

function x10000(maxIterations, k) {
  return (
    Math.cos((14 * PI * k) / maxIterations) *
    (1 - 0.75 * Math.pow(Math.cos((20 * PI * k) / maxIterations), 2))
  );
}
function y10000(maxIterations, k) {
  return (
    Math.sin((14 * PI * k) / maxIterations) *
    (1 - 0.75 * Math.pow(Math.cos((20 * PI * k) / maxIterations), 2))
  );
}
function r10000(maxIterations, k) {
  return 0.005 + 0.1 * Math.pow(Math.sin((54 * PI * k) / maxIterations), 6);
}

const functions = [
  [x14000, y14000, r14000],
  [x12000, y12000, r12000],
  [x10000, y10000, r10000],
]

module.exports = {
    functions,
    length: functions.length
};
