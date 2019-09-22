import Body from "./Body";
import Force from "./forces/Force";
import Gravity from "./forces/Gravity";

export default class Simulation {
  public static instance: Simulation;

  public bodies: Body[] = [];

  public forces: Force[] = [new Gravity(this)];

  constructor() {
    Simulation.instance = this;
  }

  addBody(body: Body) {
    this.bodies.push(body);
  }

  update() {}
}
