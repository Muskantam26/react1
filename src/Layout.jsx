import { Link, Outlet } from "react-router-dom";
import React from "react";
import "./style.css/."
const Layout=()=>{
    return(
        <>
        
        <Link to="home" style={{color:"red"}}>Home</Link>
        <Link to="insert">Insert</Link>
        <Link to="display">Display</Link>
        
        <hr/>
        <Outlet/>
        <hr/>

        www.mycompany.com
        </>
    )
}
export default Layout;