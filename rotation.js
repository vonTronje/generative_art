class Rotation {

  constructor(numberOfDirections, directionOffset) {
    this.directionOffset = directionOffset;
    this.stepThreshold =  1/numberOfDirections;
    this.stepSize = 180/numberOfDirections;
  }

  random() {
    let value = Math.random();
    let stepsToTake = Math.floor(value/this.stepThreshold);
    return stepsToTake * this.stepSize + this.directionOffset;
  }
}
