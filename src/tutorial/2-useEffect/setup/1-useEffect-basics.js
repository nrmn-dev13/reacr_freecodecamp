import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('clicked');
    if (value >= 1) {
      document.title = `New Message(${value})`;
    }
  }, [value]);
  console.log('component rendered');
  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue (value + 1)} className="btn">Click Me</button>
    </>
  );
};

export default UseEffectBasics;
