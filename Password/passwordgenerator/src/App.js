import './App.css';
import React, { useEffect, useState } from 'react';
import { LC, NC, SC, UC } from './Data/PassChar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  let[upperCase,setUpperCase]= useState(false);
  let[lowerCase,setLowerCase] = useState(false);
  let[numberCase,setNumberCase] = useState(false);
  let[symbolCase,setSymbolCase] = useState(false);
  let[passwordlen,setPasswordlen] = useState(10);
  let[fPass,setFPass] = useState('');

  useEffect(() => {
  toast.info("Welcome to password generator",{ autoClose: 1000 });
  }, []);

  let createPassword=()=>{
    let password = '';
    let finalPass='';
    if(upperCase || lowerCase || numberCase || symbolCase){
      if (upperCase) password +=UC;
      if (lowerCase) password +=LC;
      if (numberCase) password +=NC;
      if (symbolCase) password +=SC;

      for(let i =0; i<passwordlen;i++){
        finalPass += password.charAt(Math.floor(Math.random()*password.length));

      }
      toast.success("Password Generated...",{ autoClose: 2000 });
      setFPass(finalPass);
      
    }else{
      toast.error("Select at least one option",{ autoClose: 1000 });
    }
    }

  let copyPass=()=>{
    navigator.clipboard.writeText(fPass);
    toast.success("Copied...");
  }


  
  return (
    <>

      
      <ToastContainer/>
       <div className="bg-blue-400 flex h-screen items-center justify-center">
        <div className="place-self-center bg-blue-300  rounded-lg h-[450px] w-[550px]  shadow-lg">
          <p className="text-3xl flex pt-1 justify-center text-white font-semibold  mt-3">
            Password Generator
          </p>
          <div className='flex  items-center mt-8'>
            <input type='text' value={fPass} readOnly className='w-[400px] ml-8 mr-5 p-1 rounded '></input>
            <button onClick={copyPass} className='bg-blue-500 text-white px-4 py-2 rounded-lg '>copy</button>
          </div>

          <div className='flex items-center mt-6'>
            <p className='w-[405px] ml-8 mr-5 p-1'>Password Length </p>
            <input type='number' value={passwordlen} max={25} min={1} onChange={(e)=>{setPasswordlen(e.target.value)}} className='place-items-end w-[60px]'></input>
          </div>

          <div className='flex items-center mt-3'>
            <label className="w-[405px] ml-8 mr-5 p-1 ">
              Includes Upper Case
            </label>
              <input type="checkbox" checked={upperCase} onClick={()=>{setUpperCase(!upperCase)}} className="accent-blue-500 ml-5 scale-150 " />
          </div>
          <div className='flex items-center mt-3'>
            <label className="w-[405px] ml-8 mr-5 p-1 ">
              Includes Lower Case
            </label>
              <input type="checkbox" checked={lowerCase} onClick={()=>{setLowerCase(!lowerCase)}} className="accent-blue-500 ml-5 scale-150" />
          </div>

          <div className='flex items-center mt-3'>
            <label className="w-[405px] ml-8 mr-5 p-1 ">
              Includes Numbers
            </label>
              <input type="checkbox" checked={numberCase} onClick={()=>{setNumberCase(!numberCase)}}  className="accent-blue-500 ml-5 scale-150" />
          </div>

          <div className='flex items-center mt-3'>
            <label className="w-[405px] ml-8 mr-5 p-1 ">
              Includes Symbols
            </label>
              <input type="checkbox" checked={symbolCase} onClick={()=>{setSymbolCase(!symbolCase)}} className="accent-blue-500 ml-5 scale-150 " />
          </div>
          <div className='flex justify-center mt-5'>
            <button onClick={createPassword} className='bg-blue-500 text-white w-[50%] py-2 rounded-lg ' >
              Generate Password
            </button>

          </div>

        </div>
      </div>

       </>
  );
}
export default App;

 

        
        {/* responsive */}
        {/* <div className="bg-blue-400 flex min-h-screen items-center justify-center p-4">
      <div className="bg-blue-300 rounded-lg w-full max-w-lg shadow-lg p-6">
        <p className="text-2xl sm:text-3xl flex justify-center text-white font-semibold mb-6">
          Password Generator
        </p>
        
        <div className='flex flex-col sm:flex-row items-center gap-3 mb-6'>
          <input 
            type='text' 
            className='flex-1 w-full p-2 rounded'
          />
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto'>
            copy
          </button>
        </div>

        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4'>
          <p className='flex-1 text-white'>Password Length</p>
          <input 
            type='number' 
            className='w-20 p-1 rounded text-center'
          />
        </div>

        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-3'>
          <label className="flex-1 text-white">
            Includes Upper Case
          </label>
          <input type="checkbox" className="accent-blue-500 scale-125" />
        </div>

        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-3'>
          <label className="flex-1 text-white">
            Includes Lower Case
          </label>
          <input type="checkbox" className="accent-blue-500 scale-125" />
        </div>

        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-3'>
          <label className="flex-1 text-white">
            Includes Numbers
          </label>
          <input type="checkbox" className="accent-blue-500 scale-125" />
        </div>

        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6'>
          <label className="flex-1 text-white">
            Includes Symbols
          </label>
          <input type="checkbox" className="accent-blue-500 scale-125" />
        </div>

        <div className='flex justify-center'>
          <button className='bg-blue-500 text-white w-full sm:w-3/4 py-2 rounded-lg'>
            Generate Password
          </button>
        </div>
      </div>
    </div> */}

   