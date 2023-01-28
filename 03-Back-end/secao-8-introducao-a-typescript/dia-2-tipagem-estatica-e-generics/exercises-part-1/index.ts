import Car from './car';
import PizzaCommon from './PizzaCommon';
import PizzaVegetarian from './PizzaVegetarian';
import PizzaSugar from './PizzaSugar';

const gol = new Car('Volkswagen', 'Prata', 4);

gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn('esquerda');
gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.speedDown();
gol.stop();

gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.speedUp();
gol.speedDown();
gol.turn('esquerda');
gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.speedDown();
gol.stop();
gol.speedUp();

const calabresa: PizzaCommon = { flavor: 'Calabresa', slices: 8 };
console.log(calabresa);

const frango: PizzaCommon = { flavor: 'Frango', slices: 8 };
console.log(frango);

const pepperoni: PizzaCommon = { flavor: 'Pepperoni', slices: 6 };
console.log(pepperoni);

const marguerita: PizzaVegetarian = { flavor: 'Marguerita', slices: 8 };
console.log(marguerita);

const palmito: PizzaVegetarian = { flavor: 'Palmito', slices: 4 };
console.log(palmito);

const cogumelo: PizzaVegetarian = { flavor: 'Cogumelo', slices: 8 };
console.log(cogumelo);

const nutella: PizzaSugar = { flavor: 'Nutella', slices: 4 };
console.log(nutella);

const goiabadaComQueijo: PizzaSugar = { flavor: 'Goiabada com Queijo', slices: 4 };
console.log(goiabadaComQueijo);

const marshmallow: PizzaSugar = { flavor: 'Marshmallow', slices: 4 };
console.log(marshmallow);

