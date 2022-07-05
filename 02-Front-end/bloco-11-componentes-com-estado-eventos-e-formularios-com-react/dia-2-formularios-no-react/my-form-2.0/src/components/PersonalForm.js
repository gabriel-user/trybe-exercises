import React from 'react';
import states from '../data';
class PersonalForm extends React.Component {    
  render() {
    const { handleChange, handleBlur, state } = this.props;
    const { name, email, cpf, address, city, countryState } = state;
    
    return(
      <fieldset className="personal-info">
        <legend>Dados pessoais</legend>
       
        <div className="container">  
          Nome:
          <input 
            name="name"
            type="name" 
            maxLength="40"
            required
            value={ name }
            onChange={ handleChange }
          />
        </div>

        <div className="container">
          Email:
          <input 
            name="email"
            type="email" 
            maxLength="50"
            required
            value={ email }
            onChange={ handleChange }            
          />
        </div>

        <div className="container">
          CPF:
          <input 
            name="cpf"
            type="text" 
            maxLength="11"
            required
            value={ cpf }
            onChange={ handleChange }
          />
        </div>

        <div className="container">
          Endereço:
          <input 
            name="address"
            type="text" 
            maxLength="200"
            required
            value={ address }
            onChange={ handleChange }
          />
        </div>

        <div className="container">
          Cidade:
          <input 
            name="city"
            type="text" 
            maxLength="28"
            required
            value={ city }
            onBlur={ handleBlur }
            onChange={ handleChange }
          />
        </div>

        <div className="container">
          Estado:
          <select
            name="countryState" 
            required
            defaultValue=""
            onChange={ handleChange }
          >
            <option value={ countryState }>Selecione</option>
            { states.map((state, key) => <option key={ key }>{ state } </option>) }
          </select>
        </div>

        <div className="container">
          <label htmlFor="house">  
            <input
              name="addressType"
              id="house"
              type="radio"
              value="house" 
              onChange={ handleChange }
            />
            Casa
          </label>
        </div>

        <div className="container">
          <label htmlFor="apart">  
            <input
              name="addressType"
              id="apart"
              type="radio"
              value="apartment" 
              onChange={ handleChange }
            />
            Apartamento
          </label>
        </div>
      </fieldset>
    );
  }
}

export default PersonalForm;