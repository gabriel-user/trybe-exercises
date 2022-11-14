const fs = require('fs/promises');

const readFileJson = async (filePath) => {
  try {
    const fileData = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileData);
  } catch (error) {
    console.error(`Erro na leitura do arquivo: ${error}`);
    return null;
  }
};

const writeFileJson = async (filePath, newContent) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(newContent));
  } catch (error) {
    console.error(`Erro na escrita do arquivo: ${error}`);
    return null;
  }
};

module.exports = { readFileJson, writeFileJson };
