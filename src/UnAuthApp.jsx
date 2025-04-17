import { useState,useContext } from "react";
import { myContext } from "./UserContext";
const UnAuthApp=()=>{
    const [name, setName] = useState("");
    const {login} = useContext{myContext};
    return(
        <>
        Enter your name : <input type="text" value={name} onChange={(e)=>{setName(e,EventTarget.value)}}/>
        <button onClick={()=>{login(name)}}>login</button>
        </>
    )
}
export default UnAuthApp;