import React,{useState} from 'react';
import './App.css';
import {Message} from './Message.js';

function App() {
    let[count,setCounter] = useState(1);
    let[day,setDay] = useState(true);
  return (
    <div className={day?"day":"night"}>
        <h1>Good { day ? "Morning" : "Night" } </h1><br/>
        <Message counter={count}/>
        <input type="button" value="Update Counter" onClick={()=>setCounter(count+1)} ></input>
        <input type="button" value="Update Day" onClick={()=>setDay(!day)}></input>
    </div>
  );
}

export default App;
