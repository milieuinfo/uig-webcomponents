class LambertCoordinaat {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  toString() {
    return `${this._x}, ${this._y}`;
  }

  /**
   * Creates a Lambert coordinate based on a regular expression.
   * If invalid or if the input value is not of type String, undefined will be returned!
   *
   * The regular expression allows:
   * - optional unlimited spaces for the start of the coordinate
   * - optional left parenthesis '('
   * - mandatory x-coordinate, which can be a decimal or integer with 1-6 numbers before the decimal point and an unlimited number after
   * - mandatory separator, which is a comma ',' or semicolon ';' could be
   * - optional unlimited spaces
   * - mandatory y-coordinate, which can be a decimal or integer with 1-6 numbers before the decimal point and an unlimited number after
   * - optional right bracket ')'
   *
   * Examples:
   * - "104719.27, 192387.25", "104719.27,192387.25", "104719.27; 192387.25"
   * - "(104719.27, 192387.25)", "104719.27, 192387.25)", "(104719.27, 192387.25"
   * - "104719, 192387"
   *
   * @param {string} value
   * @return {LambertCoordinaat|undefined}
   */
  static of(value) {
    if (!value && !(value instanceof String)) {
      return undefined;
    }
    const REGEX = /^\s*\(?(?<x>\d{1,6}\.\d{1,2}|\d{1,6})\d*[,;]\u0020*(?<y>\d{1,6}\.\d{1,2}|\d{1,6})\d*\)?/;
    const resultaat = value.match(REGEX);
    if (resultaat) {
      const x = Number(resultaat.groups.x);
      const y = Number(resultaat.groups.y);
      return new LambertCoordinaat(x, y);
    }
    return undefined;
  }

  static isLambertCoordinaat(value) {
    return value instanceof LambertCoordinaat;
  }
}

export default LambertCoordinaat;
