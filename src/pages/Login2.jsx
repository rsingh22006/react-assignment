import React, { useRef } from 'react'

export const Login2 = () => {
  const formDataRef = useRef({username:'',password:''});

  const handleChange=(e)=>{
    const {name,value} = e.target;
    formDataRef.current={...formDataRef.current,[name]:value};
  }

  console.log('formDataRef.current',formDataRef.current);

  return (
    <div>
        <h1>Login 2</h1>
        <div className='flex flex-col'>
        <input className='border-solid' type="text" name='username' onChange={handleChange}/>
        <input className='border-solid' type="password" name="password" onChange={handleChange}/>
        <button onClick={()=>console.log('inside submit formDataRef.current',formDataRef.current)}>Submit</button>
        </div>
    </div>
  )
}
