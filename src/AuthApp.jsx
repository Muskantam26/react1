import { useContext } from "react";

const AuthApp=()=>{
    const {user, logout}=useContext{myContext};
    return(
        <>
        <h1>Welcome : {user.name} | </h1>
        <button onClick={logout}>logout</button>
        </>
    )
}
export default AuthApp;