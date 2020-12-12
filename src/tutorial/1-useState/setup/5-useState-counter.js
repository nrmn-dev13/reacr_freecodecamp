import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const complexCounter = () => {
    setTimeout(() => {
      // setValue(value + 1)
      setValue((prevState) => {
        return prevState + 1;
      })
    }, 2000)
  }

  return (
    <>
      <section style={{margin: '4rem 0'}}>
        <h2>regular counter</h2>
        <h3>{value}</h3>
        <button className="btn" onClick={() => setValue(value - 1)}>Deacrease</button>
        <button className="btn" onClick={() => setValue(0)}>Reset</button>
        <button className="btn" onClick={() => setValue(value + 1)}>Increase</button>
      </section>
      <section style={{margin: '4rem 0'}}>
        <h2>more complex counter</h2>
        <h3>{value}</h3>
        <button className="btn" onClick={complexCounter}>Increase</button>
      </section>
    </>
  );
};

export default UseStateCounter;
