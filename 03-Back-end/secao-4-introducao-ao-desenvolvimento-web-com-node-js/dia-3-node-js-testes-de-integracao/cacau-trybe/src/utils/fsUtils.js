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

module.exports = { readFileJson };
