import React from 'react';

import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';

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
  
  render() {
    const { handleChange, handleBlur, state } = this;
    
    return(
      <div>
        <form>
          <PersonalForm 
            handleChange={ handleChange }
            handleBlur={ handleBlur } 
            state={ state } 
          />  
          <ProfessionalForm 
            handleChange={ handleChange } 
            state={ state } 
          />
        </form>
      </div>
    );
  }
}

export default Form;