'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React,{useEffect,useState} from 'react'

function page() {

    const router=useRouter()

    const [message, setMessage] = useState("")

    const [auth, setAuth] = useState(false)

    const logout=async()=>
    {
        await fetch('http://localhost:8000/api/logout',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            credentials:'include'
        })

        await router.push('/Login')

        setAuth(false)
    }

    useEffect(() => {
        (async()=>{
            try{
            const response=await fetch('http://localhost:8000/api/user',{
                credentials:'include',
            })

            const content=await response.json()

            setMessage(`Hi ${content.name}`)
            setAuth(true)
            console.log(content,auth)
        }catch(e){
            setMessage('You are not Logged In')
            setAuth(false)
            console.log(auth,message)
        }
    }
    )()
    })
    

  return (
    <div>
        {message}
        {auth?(<>
        <button onClick={logout }>Logout</button>
            
        </>):(<><div><Link href={`/Login`}>Login</Link></div></>)}
    </div>
  )
}

export default page