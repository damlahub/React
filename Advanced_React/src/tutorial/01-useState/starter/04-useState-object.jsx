import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName]=useState('Damla');
  const [age, setAge]=useState('22');
  const [hobby, setHobby]=useState('Scream at the computer.');

  const displayPerson=()=>{
    setName("John");
    setAge(42);
    setHobby("Read books.");
  }
  return(
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>Enjoys : {hobby}</h3>
      <button onClick={displayPerson} className='btn'>Show John</button>
    </div>
  );
};

export default UseStateObject;
