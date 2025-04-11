// import { BrowserRouter, Routes,Route } from "react-router-dom";
// import Home from "./Home1";
// import Contact from "./Contact1";
// import Layout from "./Layout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// const App=()=>{
// return(

//   <>
//   <BrowserRouter>
//   <Routes>
//   <Route path="/" element={<Layout/>} >
//   <Route path="home" element={<Home/>}/>
//   <Route path="about" element={<About/>}/>
//   <Route path="contact" element={<Contact/>}/>

  
  
  
  
//   </Route>
  
//   </Routes>
  
//   </BrowserRouter>
  
//   </>
// )
// }
// export default App

// const App=()=>{
// return(
//   <>
//   <BrowserRouter>
//   <Routes>
// <Route path="/" element={<Layout/>}>

// <Route path="home" element={<Home/>}/>
// <Route path="contact" element={<Contact/>}/>






// </Route>

//   </Routes>
  
  
//   </BrowserRouter>
  
  
//   </>
// )

// }
// const Appp=()=>{
// return(

//   <>
// <div style={border:"3px solid red", width:"200px", height:"300px", borderRadius:"20px"   }>
  

// cybrom

// </div>
  
//   </>
// )
// }
// export default Appp
//using css........................................................
// const App=()=>{
//   return(
// <>
// <div style={{border:"3px solid red", backgroundColor:"red" ,height:"300px",width:"400px", borderRadius:"30px",display:"flex", justifyContent:"center",alignItems:"center"}}>
//   <div  style={{border:"3px solid blue",  backgroundColor:"blue", height:"200px",width:"300px",borderRadius:"30px",display:"flex", justifyContent:"center",alignItems:"center" }}>
//     <div  style={{border:"3px solid green", backgroundColor:"green", height:"100px", width:"200px",borderRadius:"30px",display:"flex", justifyContent:"center",alignItems:"center"  }}>
      

//       Cybrom
//     </div>
//   </div>
// </div>

// </>


//   )
// }
// export default App;

//another method of css.............................................................

// const data={
//   color:"red",
//   textDecoration:"underline"
// }
 
// const App=()=>{
//   return (
//     <>

//     <h1 style={{data}}>welcome</h1>
//     </>
//   )
// }

// import Cybrom from "./Cybrom";
// import myimg from "./images/img1.webp"
// import myimg2 from "./images/img2.jpg"
// import myimg3 from "./images/img3.jpg"


//bootstrap

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


//bootstrap Carousels

// import Carousel from 'react-bootstrap/Carousel';


//react bootstrap card
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';


// const App=()=>{
//   return(
//     <>
//     <h1 className="hey">welcome to react</h1>
//     <Cybrom/>
    {/* <img src={myimg} height="200px" width="200px"/>
    <img src={myimg2} height="200px" width="200px"/>
    <img src={myimg3} height="200px" width="200px"/> */}


    {/* bootstrap Navbar */}
    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>


    {/* bootstrap Carousels */}
//     <Carousel>
//       <Carousel.Item>
        
//         <img src={myimg}  text="First slide"/>
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img src={myimg2} text="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img src={myimg3} text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>

// <br /><br />

    {/* //react bootstrap card */}
//      <div className="cardd">
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={myimg} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={myimg2} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={myimg2} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={myimg} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     </div>
// <br /><br />
//     <div className="cardd">
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={myimg2} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>


//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={myimg2} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={myimg2} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={myimg2} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     </div>
//     </>
//   )
// }
// export default App




//============================task=======================================================================================================

//====================================================navbar=============================================================================

// import myimg1 from "./images/ii.jpg"
// import myimg2 from "./images/OIP (1).jpeg"
// import myimg3 from "./images/OIP(2).jpeg"
// import myimg4 from "./images/OIP(3).jpeg"
// import myimg5 from "./images/OIP(4).jpeg"
// import myimg6 from "./images/OIP.jpeg"
// import myimg7 from "./images/src/images/Northern-lights-beautiful-night-mountains-lake-starry_1920x1200.jpg"







// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


// import Carousel from 'react-bootstrap/Carousel';



// import Button from 'react-bootstrap/Button';
//  import Card from 'react-bootstrap/Card';

// const App=()=>{
//   return(
//     <>
//   <div className="divv">
//       <Navbar expand="lg" className="bg-body-tertiary" >
//       <Container fluid  style={{backgroundColor:" skyblue"}}>
//         <Navbar.Brand href="#"  style={{color:"blue", fontFamily
//           :"cursive", fontSize:"30px"
//         }}>Natures</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1" style={{color:"blue"}}>Home</Nav.Link>
//             <Nav.Link href="#action2"style={{color:"blue"}} >Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3"  style={{color:"blue"}} >Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4" style={{color:"blue"}}>
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5" style={{color:"blue"}}>
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled  style={{color:"blue" }} >
//               Link
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex" style={{color:"blue"}} >
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>


{/* carousal */}
{/* <Carousel >
      <Carousel.Item style={{height:"450px"}}>
        
        <img src={myimg1}  text="First slide"/>
       <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
       </Carousel.Item>
      <Carousel.Item>
        <img src={myimg2} text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
       </Carousel.Item>
//       <Carousel.Item>
//         <img src={myimg2} text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>


<div className="cardd">

<Card style={{ width: '18rem' }}>       <Card.Body>         <Card.Title>Card Title</Card.Title>
      <Card.Img variant="top" src={myimg1} />         <Card.Text>           Some quick example text to build on the card title and make up the
          bulk of the card's content.         </Card.Text>         <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src={myimg2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={myimg2} />
      <Card.Body>         <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={myimg1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>       </Card.Body>
    </Card>

    <br /><br />
</div>
<footer >
<div style={{background:"blue"}} >
  <div id="footer" >
    <p>
    <ul style={{textDecoration:"none",listStyle:"none" , paddingTop:"3%"}}> 
      <h5>
   <li style={{color:"black"}}>Future of mobality</li> </h5>
   <li  style={{paddingTop:"5%", color:"white"}}>Business</li>
   <li  style={{paddingTop:"5%", color:"white"}}>Commercial vehicles </li>
   <li style={{paddingTop:"1%",color:"white"}}>
Passenger vehicles
   </li>
   <li style={{paddingTop:"1%",color:"white"}}>Electric vehicles</li>
   <li style={{paddingTop:"1%" , color:"white"}}>
   Luxury vehicles</li>
 </ul>
      </p>
      
      <p>
        <ul style={{textDecoration:"none",listStyle:"none" , paddingTop:"3%", paddingLeft:"35%"}}>
        <h5>
          <li style={{color:"black"}}>Organisation</li></h5>
          <li style={{paddingTop:"3%",color:"white"}}>Overview</li>
          <li style={{paddingTop:"1%",color:"white"}}>About us</li>
          <li style={{paddingTop:"1%",color:"white"}}>Our history</li>
          <li style={{paddingTop:"1%",color:"white"}}>Our leadership</li>
          <li style={{paddingTop:"1%",color:"white"}}>Our global presence</li>
          <li style={{paddingTop:"1%",color:"white"}}>Subsidiaries and other entities</li>
          <li style={{paddingTop:"1%",color:"white"}}>Innovations</li>
        </ul>
      </p>
      
      <p>
        <ul style={{textDecoration:"none",listStyle:"none" , paddingTop:"3%", paddingLeft:"35%"}}>
        <h5>
           <li style={{color:"black"}}>Cooperate Responsibility</li>
           </h5>
          <li style={{paddingTop:"3%",color:"white"}}>Overview</li>
          <li style={{paddingTop:"1%",color:"white"}}>Planet</li>
          <li style={{paddingTop:"1%",color:"white"}}> Governance</li>
        </ul>
      </p>

      <p>
        <ul style={{textDecoration:"none",listStyle:"none" , paddingTop:"3%", paddingLeft:"35%"}}>
        <h5>
          <li style={{color:"black"}}>Newsroom</li> </h5>
          <li style={{paddingTop:"3%",color:"white"}}>Overview</li>
          <li style={{paddingTop:"1%",color:"white"}}>Press releases</li>
          <li style={{paddingTop:"1%",color:"white"}}> Thought leadership
          Media library</li>
        </ul>
      </p>
      </div>
      <h5 style={{color:"black"}}>Social Media</h5>
      </div>
</footer>
</div>
   </>
  )
}
export default App; */}

// const App=()=>{
//   const Display=(e)=>{
    // alert("this is event in react js}")
    // alert(`my name is ${me}`)

    // alert(e.type)
    // alert("type:"  +e.type+ "Name: " +e.target.name+" value:"  +e.target.value)


  // }
 
 
// return(
// <>

// <h1>welcom</h1>
{/* <button onClick={Display}>click me</button> */}
{/* <button name="btn1" value="mybtn" onClick={Display}>click me</button> */}


// </>

// )
// }

// export default App;

//===============================================================object============================================================================


// const Fun=()=>{

//   const Display=(nm, e)=>{
//       console.log(e)
//       alert(e.type)
//       alert("type:"+nm  +e.type+ "Name: " +e.target.name+" value:"  +e.target.value)



//   }
//   return(
//       <>
//       Enter name: <input type="text" name="txt" id="" value="muskan" onClick={Display} />
//       <button name="btn1" value="mybtn" onClick={(e)=>{Display("muskan",e)}}>click me</button>
//       </>
//   )
// }
// export default Fun 

//================================================event handling=====Hooks=============================================

// const Form=()=>{
//   return
// (
//   <>
//   <h1>Application form</h1>
//   Name: <input type="text" />
//   <br />
//   City: <input type="text" />
//   <br />
//   <button>Submit</button>
//   <br />



//   </> 
// )
// }

//======================================Hook======USE STATE===================================================================

// import { useState } from "react"

// const App=()=>{
//   const[color,setColor]=useState("red");   //initial state

//   return(
//     <>
//   <h1>Welcome to my app{color}</h1>  
//   <button onClick={()=>{setColor("blue")}} >click here</button>
//   <button onClick={()=>{setColor("green")}}>click green</button>
//   <button onClick={()=>{setColor("pink")}}>click pink</button>
//   <button onClick={()=>{setColor("black")}}>click black</button>
    
//     </>
//   )
// }
// export default App;

// import { useState } from "react"
// import { Button } from "react-bootstrap";
// const App=()=>{
//   const[cnt, setCnt]=useState(0);
//   const mydec=()=>{
//     if(cnt<=0)
//     {
//       alert("not less then zero");
//     }
//     else{
//       setCnt(cnt-1);
//     }
//   }
//   return
// (
//   <>
//   <h1 align="center">My counter App</h1>
//   <div style={{border:"2px solid green", padding:"28px", borderRadius:"30px", backgroundColor:"lightgreen", width:"150px", margin:"auto"}}>

// <h1>My count : {cnt}</h1>
// <Button onClick={()=>{setCnt(cnt+1)}}>Increment</Button>
// <Button onClick={mydec}>Decrement</Button>
// <Button onClick={()=>{setCnt(0)}}>Reset</Button>


//   </div>
//   </>
// )
// }
// export default App;

// import { useState } from "react";
// import { Button } from "react-bootstrap";
// const App=()=>{
//   const [cnt,setName]=useState(0);
//   const mydec=()=>{
//     if(cnt<=0){
//       alert("Not less than zero!");
//     }
//     else{
//       setName(cnt-1);
//     }
//   }
//   return (
//     <>
//       <h1 align="center">My Counter App</h1>
//       <div
//         style={{
//           border: "2px soild black",
//           padding: "20px",
//           borderRadius: "30px",
//           backgroundColor: "lightGreen",
//           width: "300px",
//           margin: "auto",
//         }}
//       >
//         <h1>My Count :{cnt}</h1>
//         <button style={{color:"red"}} onClick={()=>{setName(cnt+1)}}>Incerment</button>
//         <button onClick={mydec}>Decerment</button>
//         <button onClick={()=>{setName(0)}}>Reset</button>
//       </div>
//     </>
//   );
// }
// export default App;


//=====================================useEffect hook=================================================================================

// import {useState, useEffect } from "react";

// const App=()=>{

//   const[count,setCount]=useState(0);

//   useEffect(()=>{
//     setTimeout(()=>{
//     setCount(count+1);
//     },4000);
//   });
//   return(
//     <>
//     <h1>Welcome : {count}</h1>
    
//     </>
//   )
// }
// export default App;
//=======================================================non dependancy===========================================================
// import {useState, useEffect } from "react";

// const App=()=>{

//   const[count,setCount]=useState(0);

//   useEffect(()=>{
//     setTimeout(()=>{
//     setCount(count+1);
//     },4000);
//   } ,[]);
//   return(
//     <>
//     <h1>Welcome : {count}</h1>
    
//     </>
//   )
// }
// export default App;

//================================================props state=============================================================================

// import {useState, useEffect } from "react";

// const App=()=>{

//   const[count,setCount]=useState(0);
//   const [multi, setMulti]=useState(0);

//   useEffect(()=>{
//    setMulti(count*2)
//   },[count])
//   return(
//     <>
//     <h1>Welcome : {count}</h1>
//     <h1>Welcome multi: {multi}</h1>
//     <button onClick={()=>{setCount(count+1)}}>click here</button>
    
//     </>
//   )
// }
// export default App;

//=================================================Application form===========================================================================
// import { useState} from "react";
// const App=()=>{
//   const [name, setName]=useState("")
//   const [city, setCity]=useState("")
//   const handlebutton=()=>{

//     alert(`My name : ${name}  City : ${city}`)
//   }
// return(
//   <>
//   <h1>Application form</h1>

//   name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
//   <br />
//   city: <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} />
//   <br />
//   <button onClick={handlebutton}>click</button>
  
//   </>
// )

// }
// export default App;

//=============================spread operator==========================================================================

// import { useState } from "react";
// const Spp=()=>{
// const [input, setInput]=useState({});


// const handleInput=(e)=>{
// let name=e.target.name;
// let value=e.target.value;
// setInput(values=>({...values, [name]: value}))
// console.log(input)
// }
//   return (
//     <>
//     <h1>Application form</h1>

//     name: <input type="text" name="name" onChange={handleInput}/>
// <br />
//     rollno: <input type="text" name="rollno" onChange={handleInput}/>
// <br />
//     city: <input type="text" name="city" onChange={handleInput} />
// <br />
//     number: <input type="text" name="number" onChange={handleInput} />
//     <br />

//     <button>submit</button>
    
//     </>
//   )

// }
// export default Spp;


//==========================CRUD===========================================

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./Layout";
import Home from "./Home";
import Display from "./Display";
import Insert from "./Insert";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="insert" element={<Insert/>}/>
      <Route path="display" element={<Display/>}/>

      </Route>
    </Routes>
    
    </BrowserRouter>


    </>
  )
}

export default App;
