export default class Vector {
  constructor(public x: number, public y: number, public z: number) {}

  magnitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }

  diffrence(vectorB: Vector) {
    const diffrenceVector = vectorB.copy();
    diffrenceVector.x -= this.x;
    diffrenceVector.y -= this.y;
    diffrenceVector.z -= this.z;
    return diffrenceVector;
  }

  distance(vectorB: Vector) {
    const diffrenceVector = this.diffrence(vectorB);
    const distance = diffrenceVector.magnitude();
    return distance;
  }

  add(vectorB: Vector) {
    const newVector = this.copy();
    newVector.x += vectorB.x;
    newVector.y += vectorB.y;
    newVector.z += vectorB.z;
    return newVector;
  }

  multiply(vectorB: Vector) {
    const newVector = this.copy();
    newVector.x *= vectorB.x;
    newVector.y *= vectorB.y;
    newVector.z *= vectorB.z;
    return newVector;
  }

  translate(translation: Vector) {
    return this.add(translation);
  }

  normalize() {
    const normalizedVector = this.copy();
    const magnitude = this.magnitude();
    normalizedVector.x /= magnitude;
    normalizedVector.y /= magnitude;
    normalizedVector.z /= magnitude;
    return normalizedVector;
  }

  copy() {
    return new Vector(this.x, this.y, this.z);
  }

  static zero = new Vector(0, 0, 0);
}
