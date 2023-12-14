import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  // console.log(people);

  const removeItem = (id) => {
    const newPeople=people.filter((person)=>person.id !== id);
    setPeople(newPeople);
    // setPeople(people.filter((person)=>person.id !== id));
  }
  const removeAllItems = () => {
    setPeople([]); //Boş bir diziye eşitlediğimizden dolayı tüm dizideki itemlarımız gitti.
  }
  return (
    <div>
      {
        people.map((people) => {
          const { id, name } = people;
          return (
            <div key={id}>
              <h4>{name}</h4>
              <button onClick={()=>removeItem(id)} className='btn'>Remove</button>
            </div>
          );
        })
      }
      <button onClick={removeAllItems} className='btn'>Remove All Items</button>
    </div>
  );
};

export default UseStateArray;
