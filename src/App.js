import { useState } from 'react';
import './App.css';
import Books from './Books';


function App() {
  const [counter,setCounter]=useState(0);
  return (
    
    <div className="App">
      {/* <div className="box">
        <h2 className='header'>Counting App</h2>
        <h1>{counter}</h1>
      <button className='plus' onClick={()=>{setCounter(counter+1)}}>+</button>
      <button className='minus' onClick={()=>{setCounter(counter-1)}}>-</button>
      </div> */}
      
      <Books/>
      
    
    </div>
  );
}

export default App;

