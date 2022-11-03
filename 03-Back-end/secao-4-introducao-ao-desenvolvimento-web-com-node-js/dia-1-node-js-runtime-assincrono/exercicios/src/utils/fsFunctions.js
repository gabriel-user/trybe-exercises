const fs = require('fs').promises;

const readJsonFile = async (filePath) => {
  const jsonFile = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(jsonFile);
};

const writeJsonFile = async (filePath, newFileContent) => {
  await fs.writeFile(filePath, JSON.stringify(newFileContent));
};

module.exports = { readJsonFile, writeJsonFile };