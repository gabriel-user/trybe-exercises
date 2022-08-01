const randomNumber = () => Math.floor(Math.random() * 101);
const upperCaseTranformation = (str) => str.toUpperCase();
const firstCharacter = (str) => str[0];
const concatTwoWords = (str1, str2) => str1.concat(str2) ;
const fetchDog = () => {
  return fetch ('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json()
    .then(json => response.ok ? Promise.resolve(json) : Promise.reject(json))
  );  
};

module.exports = { 
  randomNumber,
  upperCaseTranformation,
  firstCharacter,
  concatTwoWords,
  fetchDog,
};