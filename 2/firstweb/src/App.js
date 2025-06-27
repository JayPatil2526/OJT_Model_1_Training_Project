


import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  let [count, setCount] = useState(0);
  let [pshow, setPshow] = useState(false); 

  let increment = () => {
    setCount(count + 1);
  };

  let decrement = () => {
    setCount(count - 1);
  };

  let toggle = () => {
    setPshow(!pshow); 
  };

  return (
    <div>
      <Navbar />

      

      <div className='flex flex-col justify-center items-center pt-5 py-5 gap-5'>
        <div className='text-xl'>Count: {count}</div>

        <div className='flex justify-center items-center gap-5'>
          <button
            className='bg-green-500 p-2 px-5 text-white ring rounded-md'
            onClick={increment}
          >
            Increment
          </button>

          <button
            className='bg-red-500 p-2 px-5 text-white ring rounded-md'
            onClick={decrement}
          >
            Decrement
          </button>

          <button
            className='bg-blue-500 p-2 px-5 text-white ring rounded-md'
            onClick={() => setCount(0)}
          >
            Reset
          </button>

        </div>

        <button
          className='bg-blue-500 p-2 px-5 text-white ring rounded-md'
          onClick={toggle}
        >
          {pshow ? 'Hide' : 'Show'}
        </button>

        {pshow && <p className='text-lg text-gray-700'>This is a Toggle button</p>}
      </div>

      <Footer />
    </div>
  );
}

export default App;
