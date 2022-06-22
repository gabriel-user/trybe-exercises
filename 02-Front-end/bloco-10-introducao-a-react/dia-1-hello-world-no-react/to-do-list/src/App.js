import React from 'react'

const tarefas = ['Tomar café', 'Escovar os dentes', 'Ir na academia', 'Trabalhar'];

const task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

function App() {
    return (
    <>
      {tarefas.map((tarefa) => task(tarefa))}
    </>
  )
}

export default App;

