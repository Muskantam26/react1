
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


        import { useState } from "react";
const Insert=()=>{
const [input, setInput]=useState({});


const handleInput=(e)=>{
let name=e.target.name;
let value=e.target.value;
setInput(values=>({...values, [name]: value}))
console.log(input)
}

const handleSubmit=async()=>{
  let api="http://localhost:3000/employe";
  const response =await axios.post(api, input);
  console.log(response);
  alert("data save succesfully");

}

  return (
    <>
    <div style={{width:"20%", marginLeft:"35%",marginTop:"5%"}}>
    <Form>
      <Form.Group className="mb-3" >
       
        <Form.Control type="text" placeholder="Employee number" onChange={handleInput}/>
        
      </Form.Group>

      <Form.Group className="mb-3" >
      
        <Form.Control type="text" placeholder="Name" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" >
      
        <Form.Control type="text" placeholder="Designation" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" >
       
        <Form.Control type="number" placeholder="salary" onChange={handleInput}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  
    </div>
    </>

  )

}
export default Insert;
        
  