import React from 'react';

class FormDataDisplay extends React.Component {
  render() {
  
    const { state } = this.props;
    const { 
      name, email, cpf, address, city, countryState, 
      addressType, resume, role, roleDescription,
    } = state;
    
    return(
      <div>
        <h1>Dados pessoais</h1>
        <p>Nome: { name }</p>
        <p>Email: { email }</p>
        <p>CPF: { cpf }</p>
        <p>Endereço: { address }</p>
        <p>Cidade: { city }</p>
        <p>Estado: { countryState }</p>
        <p>Tipo de residência: { addressType }</p>
        <h1>Dados profissionais</h1>
        <p>Resumo do currículo: { resume }</p>
        <p>Cargo: { role }</p>
        <p>Descrição do cargo: { roleDescription }</p>
      </div>
    );
  }
}

export default FormDataDisplay;