import Vector from "./Vector";
import Simulation from "./Simulation";
import Force from "./forces/Force";

export default class Body {
  public mass: number;

  public position: Vector;
  public velocity: Vector;

  constructor(position: Vector, mass: number, velocity?: Vector) {
    this.position = position;
    this.mass = mass;
    this.velocity = velocity || Vector.zero;
  }

  translate(translation: Vector) {
    this.position = this.position.translate(translation);
  }

  applyForce(force: Vector, time: number) {
    const acceleration = force.divide(this.mass);
    this.applyAcceleration(acceleration, time);
  }

  applyAcceleration(acceleration: Vector, time: number) {
    this.velocity = this.velocity.add(acceleration.multiply(time));
  }

  applyVelocity(time: number) {
    this.position = this.position.add(this.velocity.multiply(time));
  }

  toString() {
    return `position: ${this.position.toString()}
velocity: ${this.velocity.toString()}
  mass: ${this.mass}`;
  }
}
