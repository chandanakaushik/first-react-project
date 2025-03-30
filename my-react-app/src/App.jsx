import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import HelloWorld, { HelloWorld1 } from './HelloWorld';

function App() {
  const abc = [1, 2, 3, 4].map((i) => i * 1);
  console.log('abc', abc);

  const handleClickHelloWorld = () => {
    console.log('Hello World is clicked');
  };

  const one = 2;

  if (one === 1) {
    return (
      <>
        <h1>The value is one</h1>
      </>
    );
  }

  return (
    <>
      <button onClick={handleClickHelloWorld}>Click</button>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <HelloWorld i={i} text={'Chandana'} />
      ))}
    </>
  );
}

export default App;
