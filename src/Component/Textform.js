import React, { useState } from 'react'



export default function Textform(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked" +text);
        let newText=text.toUpperCase();
        setText(newText);

    }
    const handleDownClick=()=>{
        //console.log("lowercase was clicked" +text);
        let newText=text.toLowerCase();
        setText(newText);

    }
    const handleClearClick=()=>{
       
        let newText=('');
        setText(newText);

    }
    const handleSpeakClick = () => {
        
            let msg = new SpeechSynthesisUtterance();
            msg.text = text;
            msg.rate=0.8;
            msg.volume=0.7;
            window.speechSynthesis.speak(msg);
          
      }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);  //It is use to append the text in text area
    }
    const [text, setText] = useState("");
   
  return (
   <>
    <div style={{color: props.mode==='dark'?'white':'black'}}>
     <h1> {props.heading}</h1>
    <div className="mb-3" >
   
    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042844':'white',color: props.mode==='dark'?'white':'black' }} my-3></textarea><br/>
    <button className='btn btn-primary mx-2'  onClick={handleUpClick}  >To UpperCase</button>
    <button className='btn btn-primary mx-2'  onClick={handleDownClick}  >To LowerCase</button>
    <button className='btn btn-primary mx-2'  onClick={handleSpeakClick}  >Get voice</button>
    <button className='btn btn-primary mx-2'  onClick={handleClearClick}  >Clear</button>
    </div>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h4>Your text summary:</h4>
        <p>You have {text.length} letters and {text.split(" ").length} words </p>
        <p>Average time required to read the text:{0.008*text.split(" ").length} minutes.</p>
        <h4>Preview</h4>
    <p>{text.length>0?text:"Enter something to get preview."}</p>
    </div>
    
    </>
  );
}
