import Force from "./Force";
import { GRAVITATIONAL_CONSTANT } from "../constants/constants";
import Simulation from "../Simulation";
import Body from "../Body";
import Vector from "../Vector";

export default class Gravity implements Force {
  constructor(private simulation: Simulation) {}

  calculateMagnitude(mass1: number, mass2: number, distance: number) {
    return (GRAVITATIONAL_CONSTANT * mass1 * mass2) / distance ** 2;
  }

  getForBodies(bodyA: Body, bodyB: Body) {
    const distance = bodyA.position.distance(bodyB.position);
    const magnitude = this.calculateMagnitude(bodyA.mass, bodyB.mass, distance);
    const vector = bodyA.position.diffrence(bodyB.position);
    return vector.multiply(magnitude);
  }

  public simulate(time: number) {
    this.simulation.bodies.forEach(body => {
      const forceVectors: Vector[] = [];
      this.simulation.bodies.forEach(body2 => {
        if (body2 == body) return;
        const force = this.getForBodies(body, body2);
        forceVectors.push(force);
      });
      const netForce = forceVectors.reduce((vA, vB) => vA.add(vB));
      body.applyForce(netForce, time);
    });
  }
}
