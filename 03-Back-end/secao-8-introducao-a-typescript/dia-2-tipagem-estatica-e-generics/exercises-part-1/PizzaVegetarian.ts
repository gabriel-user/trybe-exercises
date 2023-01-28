import { Vegetarian } from "./PizzaFlavors";
import Pizza from "./Pizza";

interface PizzaVegetarian extends Pizza {
  flavor: Vegetarian,
};

export default PizzaVegetarian;