// "name-iterations-height-width-diameter-color[]-renderFunction[]"
// "1-20000-1000-1000-500-123412,123412,123412,123412-1,2,3,4,5"

// any-[1000-150000]-[500-2000]-[500-2000]-[500-2000]-[0-146][2]-[0-3][3]

const DELIMITER = "-";

function generateHash({
  name,
  iterations,
  height,
  width,
  diameter,
  colors,
  renderFunctionIndexes,
}) {
  return [
    name,
    iterations,
    height,
    width,
    diameter,
    colors.join(","),
    renderFunctionIndexes.join(","),
  ].join(DELIMITER);
}

function hashToObject(hash) {
  const [
    name,
    iterations,
    height,
    width,
    diameter,
    colors,
    renderFunctionIndexes,
  ] = hash.split(DELIMITER);
  return {
    name,
    iterations: Number(iterations),
    height: Number(height),
    width: Number(width),
    diameter: Number(diameter),
    colors: colors.split(",").map((i) => Number(i)),
    renderFunctionIndexes: renderFunctionIndexes
      .split(",")
      .map((i) => Number(i)),
  };
}

module.exports = {
  DELIMITER,
  generateHash,
  hashToObject,
};
