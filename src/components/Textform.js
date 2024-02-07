import React,{useState} from 'react'


export default function Textform(props){
    const handleUpClick=()=>{
        console.log("uppercase was click");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.changeAlert("changed to upppercase","success");
    }
    const handleLowClick=()=>{
        console.log("Lower was click");
        let newtext=text.toLowerCase();
        setText(newtext);
        props.changeAlert("changed to lowercase","success");
    }    
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const countWords=(text)=>{
        let words=text.split(" ");
        let n=0;
        for(let i=0;i<words.length;i++){
            if(words[i]==="") continue;
            else{
                n=n+1;
            }
        }
        return n;
    }
    const [text, setText] = useState('');

    return(
        <div className='container' style={{
            color:props.mode==='light'?'#272a2d':'white'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} 
        style={{background: props.mode==='dark'?'#272a2d':'white',
        color:props.mode==='light'?'#272a2d':'white'
        }} id="exampleFormControlTextarea1" onChange={handleOnChange} rows="8" ></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}> Convert to uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLowClick}> Convert to Lowercase</button>
        <p> words= {
        countWords(text)
        } characters={ text.length}</p>
        <p> {0.008*text.split(" ").length} minute read</p>
        <h3>preview</h3>
        <p> {text} </p>
        </div>
    );
}