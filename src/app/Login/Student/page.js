'use client'
import Layout from '@/app/components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function StudentLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const router = useRouter()

  const submit = async (e) => {
    e.preventDefault();

    await fetch('http://localhost:8000/api/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      })
    })
    console.log("Logged in Succesfully")

    await router.push("/Home")
  }

  return (
    <Layout>
    <div className='bg-primary min-h-screen text-white justify-center items-center flex'>
      <div className='border-2 border-white-600 w-1/3 h-[350px] rounded-xl'>
        <h1 className='text-[25px] font-bold text-center'>Login</h1>
        <p className='text-[22px] mt-[15px] ml-[30px]'>Student/Institute Login</p>
        <select className='bg-secondary text-[22px] ml-[30px] w-4/5 text-black'>
          <option>Student</option>
        </select>
        <form onSubmit={submit}>
          <h1 className='text-[22px] mt-[15px] ml-[30px]'>Student id</h1>
          <input className='w-4/5 bg-secondary text-black border-1 border-white-600 ml-[30px] text-[22px] placeholder:text-black' type={`email`} onChange={(e) => {
            setEmail(e.target.value)
          }} placeholder='Student id' />

          <h1 className='text-[22px] mt-[15px] ml-[30px]'>Password</h1>
          <input className='w-4/5 bg-secondary text-black border-1 border-white-600 ml-[30px] text-[22px] placeholder:text-black' onChange={(e) => {
            setPassword(e.target.value)
          }} placeholder='Password' type={"password"} />

          <button className='rounded-xl ml-[185px] text-black w-[150px] border-1 border-white-600 font-bold bg-secondary text-[25px] mt-[30px]'>Login</button>
        </form>
      </div>
    </div>
    </Layout>
  )
}

export default StudentLogin