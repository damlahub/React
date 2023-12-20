import React from 'react'

export const Person = ({image,name,age}) => {
  return (
      <article className='person'>
        <img src={image} alt={name} className='img' />
        <div>
          <h4>Name: {name}</h4>
          <p>Age: {age} </p>
        </div>
      </article>
  );
}
