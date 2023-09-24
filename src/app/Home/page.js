'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'

function HomeComponent() {

    const router = useRouter()

    const [message, setMessage] = useState("")

    const [auth, setAuth] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://localhost:8000/api/user', {
                    credentials: 'include',
                })

                const content = await response.json()

                setMessage(`Hi ${content.name}`)
                setAuth(true)
                console.log(content, auth)
            } catch (e) {
                setMessage('You are not Logged In')
                setAuth(false)
                console.log(auth, message)
            }
        }
        )()
    })


    return (
        <Layout auth={auth} setAuth={setAuth}>
            <div>
            {message}
            </div>
        </Layout>
    )
}

export default HomeComponent