
import './App.css';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import React, { useState} from 'react';
function App() {
  const[mode, setmode]=useState('light');

  const toggleMode=()=>{
      if(mode==='light'){
        setmode('dark');
        document.body.style.backgroundColor='#042844';
      }
      else{
        setmode('light');
        document.body.style.backgroundColor='white';
      }
  }
  
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
    <Textform heading="Enter the text to analyze" mode={mode}/>
    </div>
  </>
    
  );
}

export default App;
