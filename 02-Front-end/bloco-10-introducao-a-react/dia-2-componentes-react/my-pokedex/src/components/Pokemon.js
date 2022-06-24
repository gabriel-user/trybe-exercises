import React from 'react';
import '../Pokemon.css'

class Pokemon extends React.Component {
  render() {
    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      image,
      moreInfo,
    } = this.props.data;

    return (
      <div className='card'>
        <img className='card_image' src={ image } alt= { name } />
        <div className='card_details'>
          <p>{ name }</p>
          <p>{ type }</p>
          <p> Average Weight: { `${ value } ${ measurementUnit }` }</p>
          <a href= { moreInfo} target='_blank' rel="noreferrer"> More info </a>
        </div>
      </div>
    );
  }
}

export default Pokemon;
