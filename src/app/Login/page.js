'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const LoginOptions=
[
  {
    id:0,
    name:"Institute",
  },
  {
    id:1,
    name:"Student",
  }
]

function page() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [selectLogin, setSelectLogin] = useState("")
  const [showPass, setShowPass] = useState(false)
  const loginOptions=LoginOptions.map((option1)=>
  <option key={option1.id} value={option1.name}>
    {option1.name}
  </option>
  )

  const submit=async(e)=>
  {
    e,preventDefault();

    await fetch('http://localhost:3000/api/login',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      credentials:'include',
      body:JSON.stringify({
        email,
        password
      })
    })
    console.log("Logged in Succesfully")
  }


  return (
    <div className='bg-primary min-h-screen text-white justify-center items-center flex'>
      <div className='border-2 border-white-600 w-1/3 h-[350px] rounded-xl'>
          <h1 className='text-[25px] font-bold text-center'>Login</h1>
          <p className='text-[22px] mt-[15px] ml-[30px]'>Student/Institute Login</p>
          <select className='bg-secondary text-[22px] ml-[30px] w-4/5 text-black' value={selectLogin} onChange={(e)=>{
            e.preventDefault
            setSelectLogin(e.target.value)
          }}>
            <option>Select</option>
            {loginOptions}
          </select>
          {
            (selectLogin==="Student") ?(
              <form onSubmit={submit}>
              <h1 className='text-[22px] mt-[15px] ml-[30px]'>Student id</h1>
              <input className='w-4/5 bg-secondary text-black border-1 border-white-600 ml-[30px] text-[22px] placeholder:text-black' type={`email`} onChange={(e)=>{
              setEmail(e.target.value)
            }} placeholder='Student id' />
              
              <h1 className='text-[22px] mt-[15px] ml-[30px]'>Password</h1>
              <input className='w-4/5 bg-secondary text-black border-1 border-white-600 ml-[30px] text-[22px] placeholder:text-black'             onChange={(e)=>{
              setPassword(e.target.value)
            }} placeholder='Password' type={"password"} />

              <button className='rounded-xl ml-[185px] text-black w-[150px] border-1 border-white-600 font-bold bg-secondary text-[25px] mt-[30px]'>Login</button>
              </form>
            ):
            (<></>)
          }
                    {
            (selectLogin==="Institute") ?(
              <form>
              <h1 className='text-[22px] mt-[15px] ml-[30px]'>Institute id</h1>
              <input className='w-4/5 bg-secondary text-black border-1 border-white-600 ml-[30px] text-[22px] placeholder:text-black' type={`email`} placeholder='Institute id' />
              
              <h1 className='text-[22px] mt-[15px] ml-[30px]'>Password</h1>
              <input className='w-4/5 bg-secondary text-black border-1 border-white-600 ml-[30px] text-[22px] placeholder:text-black' placeholder='Password' type={"password"} />

              <button className='rounded-xl ml-[185px] text-black w-[150px] border-1 border-white-600 font-bold bg-secondary text-[25px] mt-[30px]'>Login</button>
              </form>
            ):
            (<></>)
          }      
      </div>
    </div>
  )
}

export default page