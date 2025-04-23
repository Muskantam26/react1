import { Outlet } from "react-router-dom"; 
import TopNav from "./Nav"
import Footer from "./Footer";

const Layout=()=>{
    return(
        <>
     <TopNav/>

        <Outlet />
      <Footer/>
        </>
    )
}
export default Layout;