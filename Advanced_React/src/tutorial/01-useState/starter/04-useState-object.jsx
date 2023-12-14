import { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name:'Damla',
    age: 22,
    hobby:"Scream at the computer."
  });

  // const [name, setName]=useState('Damla');
  // const [age, setAge]=useState('22');
  // const [hobby, setHobby]=useState('Scream at the computer.');

  const displayPerson=()=>{
    // setName("John");
    // setAge(42);
    // setHobby("Read books.");
    setPerson({...person,name:'John'}); // Tüm özellikleri aldık sadece name özelliğini değiştirmek istedik.
  }
  return(
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys : {person.hobby}</h3>
      <button onClick={displayPerson} className='btn'>Show John</button>
    </div>
  );
};

export default UseStateObject;
