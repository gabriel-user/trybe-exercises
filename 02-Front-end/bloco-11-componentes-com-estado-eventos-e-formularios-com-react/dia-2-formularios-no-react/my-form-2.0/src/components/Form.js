import React from 'react';

import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';
import FormDataDisplay from './FormDataDisplay';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  submitted: false,
}
class Form extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  handleChange = ({ target }) => {
    const { name } = target;
    let { value } = target;

    if( name === "name") value = value.toUpperCase();
    if( name === "address") value = value.replace(/[^\w\s]/gi, '');

    this.setState ({
      [name]: value,
    })
  }

  handleBlur = ({ target }) => {
    const { name, value } = target;
    
    if(name === 'city' && value.match(/^\d/) ) this.setState({ [name]: "" })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { submitted } = this.state;

    submitted ? this.setState(INITIAL_STATE) : this.setState({ submitted: true });  
  }
  
  render() {
    const { handleChange, handleBlur, handleSubmit, state } = this;
    const { submitted } = state;
    
    return(
      <div>
        <form onSubmit={ handleSubmit }>
          <PersonalForm 
            handleChange={ handleChange }
            handleBlur={ handleBlur } 
            state={ state } 
          />  
          <ProfessionalForm 
            handleChange={ handleChange } 
            state={ state } 
          />
          <input type="submit" value="Enviar" />
          <input type="submit" value="Limpar" />
        </form>
        { submitted && (<FormDataDisplay state= { state }/>) }
      </div>
    );
  }
}

export default Form;