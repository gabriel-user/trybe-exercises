import Car from './car';
import Pizza from './Pizza';

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

const calabresa = new Pizza('Calabresa', 8);
console.log(calabresa);

const marguerita = new Pizza('Marguerita', 6);
console.log(marguerita);

const nutella = new Pizza('Nutella', 4);
console.log(nutella);