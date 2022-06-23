import React from 'react';

class Pokemon extends React.Component {
  render() {
    const {
      id,
      name,
      type,
      averageWeight: { value, measurementUnit },
      image,
      moreInfo,
    } = this.props.data;

    return (
      <div key={ id } className='card'>
        <img src={ image } alt= { name } />
        <p>{ name }</p>
        <p>{ type }</p>
        <p> Average Weight: { `${ value } ${ measurementUnit }` }</p>
        <a href= { moreInfo} target='_blank' rel="noreferrer"> More info </a>
      </div>
    );
  }
}

export default Pokemon;
