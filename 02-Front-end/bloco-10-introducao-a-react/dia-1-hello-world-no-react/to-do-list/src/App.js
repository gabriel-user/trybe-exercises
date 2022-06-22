import React from 'react'
import './App.css';

const compromissos = [
  'Exercitar-se por 30 minutos',
  'Afirmações e visualizações',
  'Ler 10 páginas de um livro',
  'Arrumar a casa',
  'Monitoria Summer'
];


const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (Task('Exercícios do dia 10.1')
  );
}

export default App;
