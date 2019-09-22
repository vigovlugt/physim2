import Force from "./Force";
import { GRAVITATIONAL_CONSTANT } from "../constants/constants";
import Simulation from "../Simulation";
import Body from "../Body";

export default class Gravity implements Force {
  constructor(private simulation: Simulation) {}

  calculateMagnitude(mass1: number, mass2: number, distance: number) {
    return (GRAVITATIONAL_CONSTANT * mass1 * mass2) / distance ** 2;
  }

  getForBodies(bodyA: Body, bodyB: Body) {
    const distance = bodyA.position.distance(bodyB.position);
    const magnitude = this.calculateMagnitude(bodyA.mass, bodyB.mass, distance);
  }

  public simulate() {
    this.simulation.bodies.forEach(body => {
      const forceVectors = [];
      this.simulation.bodies.forEach(body2 => {
        if (body2 == body) return;
        forceVectors.push();
      });
    });
  }
}
