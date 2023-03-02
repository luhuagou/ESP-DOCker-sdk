const pad = (num, totalChars) => {
  let pad = '0';
  num = num + '';
  while (num.length < totalChars) {
    num = pad + num;
  }
  return num;
};

// Ratio is between 0 and 1
const changeColor = (color, ratio, darker) => {
  // Trim trailing/leading whitespace
  color = color.replace(/^\s*|\s*$/, '');

  // Expand three-digit hex
  color = color.replace(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i, '#$1$1$2$2$3$3');

  // Calculate ratio
  const difference = Math.round(ratio * 256) * (darker ? -1 : 1),
    // Determine if input is RGB(A)
    rgb = color.match(
      new RegExp(
        '^rgba?\\(\\s*' +
          '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
    