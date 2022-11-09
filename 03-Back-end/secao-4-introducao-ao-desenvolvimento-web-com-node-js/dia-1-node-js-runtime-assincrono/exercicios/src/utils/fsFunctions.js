const fs = require('fs').promises;

const readJsonFile = async (filePath) => {
  try {
    const jsonFile = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(jsonFile);
  } catch (error) {
    console.error(`Erro na leitura do arquivo: ${error}`);
  }
};

const writeJsonFile = async (filePath, newFileContent) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(newFileContent));
  } catch (error) {
    console.error(`Erro na escrita do arquivo: ${error}`);
  }
};

module.exports = { readJsonFile, writeJsonFile };