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

  add(addition: Vector | number) {
    const newVector = this.copy();

    if (typeof addition === "number") {
      newVector.x += addition;
      newVector.y += addition;
      newVector.z += addition;
    } else {
      newVector.x += addition.x;
      newVector.y += addition.y;
      newVector.z += addition.z;
    }

    return newVector;
  }

  multiply(multiplier: Vector | number) {
    const newVector = this.copy();

    if (typeof multiplier === "number") {
      newVector.x *= multiplier;
      newVector.y *= multiplier;
      newVector.z *= multiplier;
    } else {
      newVector.x *= multiplier.x;
      newVector.y *= multiplier.y;
      newVector.z *= multiplier.z;
    }

    return newVector;
  }

  divide(divider: Vector | number) {
    if (typeof divider === "number") {
      return this.multiply(1 / divider);
    } else {
      return this.multiply(
        new Vector(1 / divider.x, 1 / divider.y, 1 / divider.z)
      );
    }
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

  toString() {
    return `x: ${this.x} y: ${this.y} z:${this.z}`;
  }

  static zero = new Vector(0, 0, 0);
}
