const { randomBytes } = require('crypto');

const tokenGenerator = (numOfCharacters) => {
  const token = randomBytes(numOfCharacters).toString('hex');
  return token;
};

module.exports = tokenGenerator;