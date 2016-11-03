/*eslint max-statements:0,complexity:0,no-invalid-this:0*/

export var getStyles = function getStyles() {
  var _props = this.props,
      italic = _props.italic,
      bold = _props.bold,
      caps = _props.caps,
      margin = _props.margin,
      padding = _props.padding,
      textColor = _props.textColor,
      textFont = _props.textFont,
      textSize = _props.textSize,
      textAlign = _props.textAlign,
      bgColor = _props.bgColor,
      bgImage = _props.bgImage,
      bgDarken = _props.bgDarken,
      bgSize = _props.bgSize,
      bgPosition = _props.bgPosition,
      bgRepeat = _props.bgRepeat;


  var styles = {};

  if (typeof italic === "boolean") {
    styles.fontStyle = italic ? "italic" : "normal";
  }
  if (typeof bold === "boolean") {
    styles.fontWeight = bold ? "bold" : "normal";
  }
  if (typeof caps === "boolean") {
    styles.textTransform = caps ? "uppercase" : "none";
  }
  if (margin) {
    styles.margin = margin;
  }
  if (padding) {
    styles.padding = padding;
  }
  if (textColor) {
    var color = "";
    if (!this.context.styles.colors.hasOwnProperty(textColor)) {
      color = textColor;
    } else {
      color = this.context.styles.colors[textColor];
    }
    styles.color = color;
  }
  if (textFont) {
    var font = "";
    if (!this.context.styles.fonts.hasOwnProperty(textFont)) {
      font = textFont;
    } else {
      font = this.context.styles.fonts[textFont];
    }
    styles.fontFamily = font;
  }
  if (textSize) {
    styles.fontSize = textSize;
  }
  if (textAlign) {
    styles.textAlign = textAlign;
  }
  if (bgColor) {
    var _color = "";
    if (!this.context.styles.colors.hasOwnProperty(bgColor)) {
      _color = bgColor;
    } else {
      _color = this.context.styles.colors[bgColor];
    }
    styles.backgroundColor = _color;
  }
  if (bgImage) {
    if (bgDarken) {
      styles.backgroundImage = "linear-gradient( rgba(0, 0, 0, " + bgDarken + "), rgba(0, 0, 0, " + bgDarken + ") ), url(" + bgImage + ")";
    } else {
      styles.backgroundImage = "url(" + bgImage + ")";
    }
    styles.backgroundSize = bgSize || "cover";
    styles.backgroundPosition = bgPosition || "center center";
    if (bgRepeat) {
      styles.backgroundRepeat = bgRepeat;
    }
  }
  return styles;
};