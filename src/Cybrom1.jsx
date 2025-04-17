// import { useContext } from "react";
// import { myContext } from "./App";

// const {name} = useContext(myContext);
// const Cybrom1=()=>{
//     return(
//         <>
//  <h1>components 5</h1>
       
//        <h1>Welcome !! {name}</h1>

//         </>
//     )
// }
// export default Cybrom1;


// import { useContext } from "react";
// import { myContext } from "./App";
// const comp1=()=>{
//     const {user}=useContext(myContext);
//     return(
//         <>
       
//         <h1> Welcome  to cybrom :{user}</h1>
//         </>
//     )
// }
// export default comp1;

//==================children keyword========================================
// const Cybrom1=({children})=>{
// return(
//     <>
//     <h1>welcome to cybrom..</h1>
//     {children}
//     </>
// )
// }
// export default Cybrom1;

import { useContext } from "react";
import { myContext } from "./UserContext";

const Cybrom1=()=>{

    const {name}=useContext(myContext);
return(
    <>
    <h1>Welcome to cybrom!!! {name}</h1>
    </>
)
}
export default Cybrom1;