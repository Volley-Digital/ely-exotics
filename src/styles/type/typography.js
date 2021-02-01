import Typography from "typography"

const typography = new Typography({
  includeNormalize: false,
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "sofia-pro",
    "sans-serif",
  ],
  bodyFontFamily: ["sofia-pro-soft", "sans-serif"],
  bodyWeight: '300',
  bodyGray: 60,
  bodyGrayHue: 80
})

export default typography