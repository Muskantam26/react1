
import { useContext } from "react" 

import {myContext} from "./App"
const Comps5=()=>{
    const {user} = useContext(myContext);
    return(<>
        <h1>components 5</h1>
       
       <h1>Welcome !! {user}</h1>
        </>
        )
    }
    export default Comps5;