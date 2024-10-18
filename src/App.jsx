 import { useState } from 'react'
import './App.css'

function App() {
   
  const [input,setInput]= useState("")
  

  const handleClick = (value)=> {
setInput(input.concat(value));
  };

  const clear = ()=>{
    setInput("")
    
  }

  const backSpace = ()=>{
    setInput(input.slice(0,-1));
  }

  const calculate = ()=>{
     try
     {
      setInput(eval(input).toString());
     }
     catch 
     {
      setInput('error');
     }
  };


  return (
    <>
       <div className="bg-dark vh-100  d-flex justify-content-center align-items-center">
      <div className="border border-warning bg-light p-1   rounded" style={{ width: '310px', height:"380px"}}>
         

      
     <input
            type="text"
            className="form-control mb-2  bg-dark text-white"
            style={{ height: "70px" }}
            value={input}
            readOnly
            placeholder='0'
          />
         
        <div className="buttons">
           <div className="d-flex mb-1  ">
           <button onClick={clear} style={{width:'150px', height:"50px"}}  className="btn btn-   light ms-1 shadow-lg ">AC</button>
          <button onClick={backSpace} style={{height:"50px", width:"75px"}}   className="btn btn-   light ms-1 shadow-lg" >DEL</button>
          <button onClick={()=> handleClick('/')} style={{width:'75px', height:"50px"}}   className="btn btn-   light ms-1 shadow-lg">/</button>
           </div>
           
 
           <div className="d-flex mb-1 ">
           <button onClick={()=> handleClick('7')}   style={{  height:"50px" , width:'75px'}}   className="btn btn-   light ms-1 shadow-lg">7</button>
          <button onClick={()=> handleClick('8')} style={{  height:"50px" , width:'75px'}}  className="btn btn-   light ms-1 shadow-lg">8</button>
          <button onClick={()=> handleClick('9')} style={{  height:"50px" , width:'75px'}}  className="btn btn-   light ms-1 shadow-lg">9</button>
          <button onClick={()=> handleClick('*')} style={{  height:"50px" , width:'75px'}}  className="btn btn-   light ms-1 shadow-lg">*</button>
           </div>

            
           <div className="d-flex mb-1 ">
           <button onClick={()=> handleClick('4')} style={{  height:"50px" , width:'75px'}} className="btn btn-   light ms-1 shadow-lg">4</button>
          <button onClick={()=> handleClick('5')} style={{  height:"50px" , width:'75px'}}  className="btn btn-   light ms-1 shadow-lg">5</button>
          <button onClick={()=> handleClick('6')} style={{  height:"50px" , width:'75px'}}  className="btn btn-   light ms-1 shadow-lg">6</button>
          <button onClick={()=> handleClick('+')} style={{  height:"50px" , width:'75px'}}  className="btn btn-   light ms-1 shadow-lg">+</button>
           </div>

           <div className="d-flex mb-1 ">
           <button onClick={()=> handleClick('1')}  style={{  height:"50px" , width:'75px'}}   className="btn btn-   light ms-1 shadow-lg">1</button>
          <button onClick={()=> handleClick('2')} style={{  height:"50px" , width:'75px'}}   className="btn btn-   light ms-1 shadow-lg">2</button>
          <button onClick={()=> handleClick('3')} style={{  height:"50px" , width:'75px'}}  className="btn btn-   light ms-1 shadow-lg">3</button>
          <button onClick={()=> handleClick('-')} style={{  height:"50px" , width:'75px'}}  className="btn btn-   light ms-1 shadow-lg">-</button>
           </div>

           <div className="d-flex ">
           <button onClick={()=> handleClick('0')}  style={{width:'150px', height:"50px"}}  className="btn btn-   light ms-1 shadow-lg">0</button>
          <button onClick={()=> handleClick('.')} style={{width:'75px', height:"50px"}}  className="btn btn-   light ms-1 shadow-lg">.</button>
          <button onClick={calculate} style={{width:'75px', height:"50px"}}  className="btn btn-   light ms-1 shadow-lg">=</button>
           </div>

           
        </div>
      </div>
    </div>
    </>
  )
}

export default App
