import React from 'react';

class ProfessionalForm extends React.Component {
  render() {
    const { handleChange, state } = this.props;
    const { resume, role, roleDescription } = state;
    
    return(
      <fieldset className="last-job">
        <legend>Dados profissionais</legend>
       
        <div className="container">  
          Resumo do currículo:
          <textarea 
            name="resume" 
            maxLength="1000"
            required
            value={ resume }
            onChange={ handleChange }
          />
        </div>

        <div className="container">  
          Cargo:
          <input 
            name="role"
            type="text" 
            maxLength="40"
            required
            value={ role }
            onChange={ handleChange }
            onMouseEnter={ () => global.alert('Preencha com cuidado esta informação.')}
          />
        </div>

        <div className="container">  
          Descrição do cargo:
          <textarea 
            name="roleDescription" 
            maxLength="500"
            required
            value={ roleDescription }
            onChange={ handleChange }
          />
        </div>
      </fieldset>
    );
  }
}

export default ProfessionalForm;