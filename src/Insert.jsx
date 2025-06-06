import { useState } from "react";
import axios from "axios";
import React from "react";

const Insert=()=>{
    const[input, setInput]=useState({});
    const handleInput=(e)=>
    {
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }

    const handleSubmit=async()=>{
        let api="http://localhost:3000/employe";
        const response =await axios.post(api, input);
        console.log(response);
        alert("data save succesfully");

    }

    return(
        <>
        <h1>Insert page</h1>
        Enter empno : <input type="text" name="empno" onChange={handleInput} />
        <br />
        Enter name : <input type="text" name="name" onChange={handleInput} />
           <br />
           Enter designation : <input type="text" name="designation" onChange={handleInput} />
           <br />
           Enter salary : <input type="text" name="salary" onChange={handleInput} />
          <br />
          <button onClick={handleSubmit}>Save</button>

        </>
    )
}
export default Insert;