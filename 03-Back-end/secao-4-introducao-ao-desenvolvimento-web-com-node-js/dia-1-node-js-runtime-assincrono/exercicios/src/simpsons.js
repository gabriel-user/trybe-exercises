const fs = require('fs').promises;
const path = require('path');

const readSimpsons = async () => {
  const simpsonsPath = path.resolve(__dirname, './simpsons.json');
  const characters = await fs.readFile(simpsonsPath, 'utf-8');
  return JSON.parse(characters);
};

readSimpsons();