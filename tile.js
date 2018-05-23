class Tile {
  constructor(upperLeft, lowerRight) {
    this.upperLeft = upperLeft;
    this.lowerRight = lowerRight;
  }

  center() {
    return this.upperLeft.add(this.lowerRight).scalarDivision(2);
  }

  midHeight() {
    return this.center().y;
  }

  leftBorder() {
    return this.upperLeft.x;
  }

  rightBorder() {
    return this.lowerRight.x;
  }
}
