const { readFile, writeFile } = require('fs').promises;

const readFileJson = async (filePath) => {
  try {
    const fileData = await readFile(filePath, 'utf-8');
    return JSON.parse(fileData);
  } catch (error) {
    console.error(`Erro na leitura do arquivo: ${error}`);
  }
};

const writeFileJson = async (filePath, newContent) => {
  try {
    await writeFile(filePath, JSON.stringify(newContent));
  } catch (error) {
    console.error(`Erro na escrita do arquivo: ${error}`);
  }
};

module.exports = { readFileJson, writeFileJson };
