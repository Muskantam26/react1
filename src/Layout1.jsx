import { Link, Outlet } from "react-router-dom"
import React from "react"




// const Layout=()=>{

//     return(
//        <>
//        <Link to="home">Home</Link>
//        <Link to="about">About</Link>
//        <Link to="contact">Contact</Link>

//        <hr boder="1" color="red" />


//        <Outlet/>

//        <hr boder="1" color="red" />
//        all rights reserved
//        </>
//     )
// }
// export default Layout

const Layout=()=>{

    return(
  

        <>
          <div>
        <Link to="home">Home1</Link>
        <Link to="company">Company</Link>
        <Link to="product">Product</Link>
        <Link to="contact">Contact1</Link>
        </div>
    <hr />
<Outlet/>
    wwww.company.com
        
        </>
    )
}
export default Layout

