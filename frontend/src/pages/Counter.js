import React from 'react'
import { useState } from 'react';
import {effect, signal} from '@preact/signals-react'

function Counter() {
    console.log("REndering ")
    // const [count,setCount] =useState(0);

    const count = signal(0);
    const update = (val)=> (count.value += val);

    effect(()=>console.log(count.val));
  return (
    <div className='container'>counter
        <h2>Count : {count}</h2>
        <button onClick={()=>update(1)}>Increement</button>
        <button onClick={()=>update(-1)}>DIncreement</button>
    </div>
  )
}

export default Counter 