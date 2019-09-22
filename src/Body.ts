import Vector from "./Vector";
import Simulation from "./Simulation";

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
}
