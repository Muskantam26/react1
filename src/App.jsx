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

import Cybrom from "./Cybrom";


const App=()=>{
  return(
    <>
    <h1 className="hey">welcome to react</h1>
    <Cybrom/>
    </>
  )
}
export default App