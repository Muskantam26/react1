
   
        import { useState } from "react";
const Insert=()=>{
const [input, setInput]=useState({});


const handleInput=(e)=>{
let name=e.target.name;
let value=e.target.value;
setInput(values=>({...values, [name]: value}))
console.log(input)
}
  return (
    <>
    <div style={{marginLeft:"40%"}}>
    <h1 style={{color:"blue"}}>Insert</h1>

    name: <input type="text" name="empno" onChange={handleInput}/>
<br />
    rollno: <input type="text" name="name" onChange={handleInput}/>
<br />
    city: <input type="text" name="designation" onChange={handleInput} />
<br />
    number: <input type="text" name="salary" onChange={handleInput} />
    <br />

    <button>submit</button>
    </div>
    </>

  )

}
export default Insert;
        
  