import { useContext, createContext, Children, useState } from "react";
const {myContext}=createContext();
const UserContext=({children})=>{
    const [name, setName]=useState("muskan!!");
    return(<>
    <myContext.Provider value={{name}}>
        {children}


    </myContext.Provider>
    
    </>)
}
export default UserContext;
export {myContext};