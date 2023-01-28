import Pizza from "./Pizza";
import { Sugar } from "./PizzaFlavors";

interface PizzaSugar extends Pizza {
  flavor: Sugar,
  slices: 4
};

export default PizzaSugar;