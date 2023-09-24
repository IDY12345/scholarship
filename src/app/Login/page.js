'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useReducer, useState } from 'react'
import Layout from '../components/Layout'

const LoginOptions =
  [
    {
      id: 0,
      name: "Institute",
    },
    {
      id: 1,
      name: "Student",
    }
  ]

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [selectLogin, setSelectLogin] = useState("")
  const [showPass, setShowPass] = useState(false)
  const loginOptions = LoginOptions.map((option1) =>
    <option key={option1.id} value={option1.name}>
      {option1.name}
    </option>
  )

  const router = useRouter()

  const submit = async (e) => {
    e, preventDefault();

    await fetch('http://localhost:3000/api/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      })
    })
    console.log("Logged in Succesfully")
  }

  const SubmitLoginOption = (e) => {
    e.preventDefault()
    router.push("/Login/" + selectLogin)
  }

  return (
    <Layout>
    <div className='bg-primary min-h-screen text-white justify-center items-center flex'>
      <div className='border-2 border-white-600 w-1/3 h-[350px] rounded-xl'>
        <form onSubmit={SubmitLoginOption}>
          <h1 className='text-[25px] font-bold text-center'>Login</h1>
          <p className='text-[22px] mt-[15px] ml-[30px]'>Student/Institute Login</p>
          <select className='bg-secondary text-[22px] ml-[30px] w-4/5 text-black' value={selectLogin} onChange={(e) => {
            e.preventDefault
            setSelectLogin(e.target.value)
          }}>
            <option>Select</option>
            {loginOptions}
          </select>
          <button className='rounded-xl ml-[185px] text-black w-[150px] border-1 border-white-600 font-bold bg-secondary text-[25px] mt-[30px]'>Submit</button>
        </form>
      </div>
    </div>
    </Layout>
  )
}

export default Login