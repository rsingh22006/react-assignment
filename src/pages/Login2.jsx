import React, { useRef } from 'react'

export const Login2 = () => {
  const formDataRef = useRef({username:'',password:''});

  const handleChange=(e)=>{
    const {name,value} = e.target.value;
    formDataRef.current={...formDataRef,[name]:value}
  }

  console.log('formDataRef.current',formDataRef.current)

  return (
    <div>
        <h1>Login 2</h1>
        <div className='flex flex-col'>
        <input className='border-solid bg-[red]' type="text" name='username' onChange={handleChange}/>
        <input className='border-solid bg-[red]' type="password" name="password" onChange={handleChange}/>
        </div>
    </div>
  )
}
