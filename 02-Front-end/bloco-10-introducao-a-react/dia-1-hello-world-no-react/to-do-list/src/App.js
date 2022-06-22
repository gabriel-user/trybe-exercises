import React from 'react'

const compromissos = [
  'Exercitar-se por 30 minutos',
  'Afirmações e visualizações',
  'Ler 10 páginas de um livro',
  'Arrumar a casa',
  'Monitoria Summer'
];

function App() {
  const task = (value, index) => {
    return (
      <li key={index}>{value}</li>
    );
  }  
  
  return (
    <>
      {compromissos.map((value, index) => task(value, index))}
    </>
  )
}

export default App;

