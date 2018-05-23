class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(point) {
    return new Point(this.x + point.x, this.y + point.y);
  }

  subtract(point) {
    return new Point(this.x - point.x, this.y - point.y);
  }

  scalarDivision(number) {
    return new Point(this.x/number, this.y/number);
  }

  moveTo(ctx) {
    ctx.moveTo(this.x, this.y)
  }

  lineTo(ctx) {
    ctx.lineTo(this.x, this.y)
  }

  rotate(degree, center) {
    let radians = this.degreeToRadians(degree);
    let centered = this.subtract(center);
    let result = new Point(
      centered.x *  Math.cos(radians) - centered.y * Math.sin(radians),
      centered.x * Math.sin(radians) + centered.y * Math.cos(radians)
    );
    result = result.add(center);
    return result;
  }

  degreeToRadians(degree) {
    return Math.PI/180 * degree;
  }
}
