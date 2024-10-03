import React, { useState } from 'react';

const Counter = () => {
    const [count , setCount] = useState(0)

    const handelUp = () => {
        const upCount = count +1
        setCount(upCount)
    }


    /*  const handleClickMe = () => {
         alert('Button is Worked')
     } */

    /*  const handelNumber = (num)=>{
         alert (num+5)
     } */

    /*  const handelNumber = (num1,num2)=>{
         alert (num1+num2)
     } */



    return (
        <div style={{ border: "2px solid green", borderRadius: "10px", padding: "40px" }}>
            {/*  <button onClick={handleClickMe}>Click Me</button>
            <button onClick={()=>{alert("Thanks For Click")}}>Click Me Again</button> */}

            {/*  <button onClick={()=>handelNumber(10)} style={{marginRight:"10px"}}>Sum</button>
            <button onClick={()=>handelNumber(6,3)}>Sum2</button> */}


            <div>
                <h1>Count: {count}</h1>
                <button onClick={handelUp} style={{ marginRight: '20px' }}>Up</button>
                <button onClick={() =>{setCount(count-1)}}>Down</button>
            </div>
        </div>
    );
};

export default Counter;