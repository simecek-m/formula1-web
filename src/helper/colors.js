const HEX_COLOR_PATTERN = new RegExp(
  "^#[a-f, A-F, 0-9][a-f, A-F, 0-9][a-f, A-F, 0-9][a-f, A-F, 0-9][a-f, A-F, 0-9][a-f, A-F, 0-9]$"
);

export function contrastOf(hexColor = "#ffffff") {
  const match = HEX_COLOR_PATTERN.test(hexColor);
  if (match) {
    const red = parseInt(hexColor.substr(1, 2), 16);
    const green = parseInt(hexColor.substr(3, 2), 16);
    const blue = parseInt(hexColor.substr(5, 2), 16);
    console.log(red, green, blue);
    const yiq = (red * 299 + green * 587 + blue * 114) / 1000;
    return yiq >= 128 ? "black" : "white";
  }
}
