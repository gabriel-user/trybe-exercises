import React from 'react'
import './App.css';

const compromissos = [
  'Exercitar-se por 30 minutos',
  'Afirmações e visualizações',
  'Ler 10 páginas de um livro',
  'Arrumar a casa',
  'Monitoria Summer'
];

function App() {
  const task = (value) => {
    return (
      <li>{value}</li>
    );
  }  
  
  return (
    <>
      {compromissos.map((compromisso) => task(compromisso))}
    </>
  )
}

export default App;

