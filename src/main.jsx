
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// import UserContext from './UserContext.jsx';

import LoginContext from './LoginContext.jsx'


//bootstrap link
// import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(

{/* <UserContext> */}


// </UserContext>

   
    <LoginContext>
         <App/>
   
    </LoginContext>

)
  
    
  

