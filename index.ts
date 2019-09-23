import Simulation from "./src/Simulation";
import Body from "./src/Body";
import Vector from "./src/Vector";

const simulation = new Simulation();

simulation.addBody(new Body(Vector.zero, 1, Vector.zero));
simulation.addBody(new Body(new Vector(1, 1, 1), 2, Vector.zero));
simulation.simulate(60e3);
console.log(simulation.toString());

const simulation2 = new Simulation();

simulation2.addBody(new Body(Vector.zero, 1, Vector.zero));
simulation2.addBody(new Body(new Vector(1, 1, 1), 2, Vector.zero));
for (let index = 0; index < 60e3; index++) {
  simulation2.simulate(1);
}
console.log(simulation2.toString());

console.log(
  simulation.bodies[1].position.diffrence(simulation2.bodies[1].position)
);
