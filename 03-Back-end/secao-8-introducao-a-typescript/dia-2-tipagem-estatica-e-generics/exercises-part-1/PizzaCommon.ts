import Pizza from "./Pizza";
import { Common } from "./PizzaFlavors";

interface PizzaCommon extends Pizza {
  flavor: Common,
};

export default PizzaCommon;