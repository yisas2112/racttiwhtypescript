import { useState } from 'react'

interface User {
  uid : string;
  name : string
}

const temUser : User = {
  uid : 'ASDAX123',
  name : 'Prueba'
}

const Usuario = () => {
  const [user, setUser] = useState<User>();
  
  const login = () =>{
    setUser({
      uid: 'ABCD13',
      name : 'Jesús Rodriguez'
    })
  }
  
  
  return <div className='mt-5'>        
              <h3>Usuario: UseState</h3>
              <button onClick={login} className='btn btn-outline-primary'>Login</button>
              {
                (!user) ?
                <pre>{JSON.stringify(temUser)}</pre>
                :
                <pre>{JSON.stringify(user)}</pre>
              }
      
        </div>
  
}

export default Usuario
