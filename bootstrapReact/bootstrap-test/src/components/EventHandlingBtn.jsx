import React, { useState } from 'react'



export default function EventHandlingBtn() {
    let[count, setCount]=useState(0);
    let[pshow,setPshow]=useState(false);
    let[password, setPassword]=useState(false);
    
    function handleClick() {
        
        setCount(count + 1);
    }





    return (
        <>
        <input  type={password? 'text':'password'}></input>
        <button onClick={()=>setPassword(!password)}>{password ? 'Hide':'Show'}</button>
        <br />
        <br />
        <br />
        

        <button className='paraBtn' onClick={()=>setPshow(!pshow)}>{pshow ? 'hide':'show'}</button>
        {!pshow? '' : <p>Paragraph</p>}
        

        
        <button className='countBtn' onClick={handleClick}>Click</button>
        {count ===0 ? <p></p> : <p>Clicked! {count} times</p>}
        </>
    )
}

