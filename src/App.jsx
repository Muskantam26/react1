

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./comoponents/Layout";
import Home from "./comoponents/Home";
import About from "./comoponents/About";
import Services from "./comoponents/Services";
import Placement from "./comoponents/Placement";
import Gallery from "./comoponents/Gallery";
import Contact from "./comoponents/ContactUs";

const App=()=>{
  return(
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>} />
          <Route path="about" element={<About/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="placement" element={<Placement/>}/>
          <Route path="gallery" element={<Gallery/>}/>
          <Route path="contactus" element={<Contact/>} />
          
          </Route>
        </Routes>
       </BrowserRouter>
    </>
  )
}
export default App;