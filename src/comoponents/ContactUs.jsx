

import { useState, useEffect } from 'react';
const Contact=()=>{
    const [name, setName] = useState('Muskan');
    useEffect(() => {
       
      }, [name]); 
    
    return(
        <>
  <p>{name}</p>
      <button onClick={() => setName('Hello')}>
        Change Name
      </button>

</>
    )
    }
    export default Contact;