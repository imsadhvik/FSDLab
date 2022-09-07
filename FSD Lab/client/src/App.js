import React,{useState} from 'react'
import "./App.css"
import Axios from 'axios'
function App(){
  const[sname,setStudentName]=useState("")
  const[stech,setTech]=useState("")
  const[selig,setElig]=useState("")
  const[ssal,setSal]=useState("")

  const submitReview=()=>{
    Axios.post("http://localhost:7000/cric",
    {
      name:sname,
      tech:stech,
      eligibility:selig,
      Salary:ssal
    }).then(()=>{
      alert("success")
    });
  };
  return(
    <div className='App'>
    <h1> CRUD Application Demo </h1>

    <div className="information">
    <label><b> Student Name </b> </label>
    <input type="text" name="sname" onChange={(e)=>
    {
        setStudentName(e.target.value)
    }} required/>

    <label><b> Technology </b></label>
    <input type="text" name="tech" onChange={(e)=>
    {
      setTech(e.target.value);
    }
    }required/>

    <label><b> Are you above 18 ? </b></label>
    <input type="checkbox" name="eligibility" onChange={(e)=>
    {
      setElig(e.target.value);
    }
    }required/>

    <label><b> salary </b></label>
    <input type="number" name="salary" onChange={(e)=>
    {
      setSal(e.target.value);
    }
    } required/>

    <button onClick={submitReview}> <b>Submit</b> </button>
    </div>
    </div>
  );
}

export default App