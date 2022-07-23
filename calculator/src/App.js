
import './App.css';
import React, { useState } from 'react';
import division from "./img/Division.png";
import Backspace from "./img/Backspace.png";

function App () {
const [result, ResultNumber] = useState("");

 const handleClick = (e) => {
    ResultNumber(result.concat(e.target.name));
}
const clear = () =>{
  ResultNumber("");
}
const backspace = () =>{
  ResultNumber(result.slice(0, -1));
}
const calculator = () => {
  try{
    ResultNumber(eval(result).toString());
  } catch (err){
      ResultNumber("Error")
  }
}


  return (
    <div>
      <div className="calc">
        <div className="topbar"></div>
        <div id="result">
          <div id="ResultNumber"><span>{result}</span></div>
        </div>
        <div id='buttons'>
         <button  name="%" onClick={handleClick}>%</button>
          <button onClick={clear}>CE</button>
          <button onClick={clear} id="clear">C</button>
          <button onClick={backspace}><img src={Backspace} /></button>
          <button>1/x</button>
          <button name='**' onClick={handleClick}>x<sup>y</sup></button>
          <button><sup> 2</sup>√x</button>
          <button name="/" onClick={handleClick}><img src={division}/> </button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="*" onClick={handleClick}>x</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="-" onClick={handleClick}>-</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="+" onClick={handleClick}>+</button>
          <button name="-" onClick={handleClick}>+/-</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>,</button>
          <button name="=" onClick={calculator} className="blue">=</button>
        </div>
      </div>
    </div>
  );
  }

export default App;
