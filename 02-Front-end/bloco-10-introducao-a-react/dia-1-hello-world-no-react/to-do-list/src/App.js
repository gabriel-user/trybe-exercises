import React from 'react'
import './App.css';

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
