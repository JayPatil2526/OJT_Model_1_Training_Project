import './App.css';
import { useState } from 'react';

export default function App() {

  let[city,setCity]=useState('');
  let[wdetails,setWdetails]=useState();
  let[loading,setLoading]=useState(false);

  let getData =(e)=>{

    setLoading(true);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
    .then((res)=> res.json())
    .then((finalres)=>{
      if(finalres.cod==='404'){
        setWdetails(undefined);
      }else{
        
        setWdetails(finalres);
      }

      setLoading(false);
    })

    setCity('');


    e.preventDefault();
  }


  return (
    <div className='bg-slate-900 h-screen'>
      <p className='text-white text-4xl font-serif pt-8 text-center mb-[40px]'>Weather App</p>
      <form onSubmit={getData}>
        <div className='flex justify-center mb-[30px]'>

          <input type='text' value={city} onChange={(e)=>setCity(e.target.value)}  placeholder=' City Name' className='text-center rounded-sm w-[25%] md:mx-[10px] py-[7px]'></input>
          <button className='bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded ml-50'>Submit</button>

        </div>

        <div className='flex justify-center mb-[30px]'>
        <img src='https://media1.tenor.com/images/440b9dc08fefeff13ec30dc0ae6a09df/tenor.gif?itemid=15269201' className={`absolute w-[100px] top-[49%] ${loading ? '' : 'hidden'}`}></img>

          <div className=' bg-slate-50  w-1/3 h-[460px] rounded-lg flex justify-center items-center '>
          {
            wdetails!== undefined ?
            <div className='flex flex-col items-center text-center space-y-4 relative'>
            <p className='text-4xl font-bold text-slate-800'>{wdetails.name}</p>
            <p className='text-2xl text-slate-700'>{wdetails.main.temp} °C</p>
            <img src={`https://openweathermap.org/img/w/${wdetails.weather[0].icon}.png`} alt='weather icon' className='h-[70px] w-[70px]' />
            <p className='text-xl capitalize text-slate-600'>{wdetails.weather[0].description}</p>
            </div>

            // <div className='flex justify-start flex-col'>
            //   <p className='text-4xl font-semibold text-slate-900'>{wdetails.name}</p>
            //   <p className='text-2xl font-semibold text-slate-900'>{wdetails.main.temp}</p>
            //   <img src={`https://openweathermap.org/img/w/${wdetails.weather[0].icon}.png`}  className='h-[70px] w-[70px]'/>
            //   <p className='text-2xl font-semibold text-slate-900'>{wdetails.weather[0].description}</p>
              
            // </div>
            :
            <p>No City Found</p>
          }

          </div>

        </div>

      </form>

    </div>
  )
}
