import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue]=useState(0);

  const handleClick=() => {
    setTimeout(() => {
      setValue((updateValue)=>{
        return updateValue + 1;
      })
    },4000)
    // setValue(
    //   // value +1
    //   // (currentState)=>{
    //   //   const newValue=currentState+1;   // Güncel değer.
    //   //   console.log(newValue);
    //   //   return newValue;
    //   // }
    //   );
  };

  return(
    <>
    <h2>{value}</h2>
    <button className="btn" onClick={handleClick}>Click</button>
    </>
  ); 
};

export default UseStateGotcha;
