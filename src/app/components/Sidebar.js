'use client'

import Link from "next/link"
import { useState } from "react"
const states=[
    {
        id:0,
        name:"Andhra Pradesh",
        routes:"AndhraPradesh"
    },
    {
        id:1,
        name:"Arunachal Pradesh",
        routes:"ArunachalPradesh"
    },
    {
        id:2,
        name:"Assam",
        routes:"Assam"
    },
    {
        id:3,
        name:"Bihar",
        routes:"Bihar"
    },
    {
        id:4,
        name:"Chattisgarh",
        routes:"Chattisgarh"
    },
    {
        id:5,
        name:"Goa",
        routes:"Chattisgarh"
    },
    {
        id:6,
        name:"Gujarat",
        routes:"Gujarat"
    },
    {
        id:7,
        name:"Harayana",
        routes:"Harayana"
    },
    {
        id:8,
        name:"Himachal Pradesh",
        routes:"HimachalPradesh"
    },
    {
        id:9,
        name:"Jharkhand",
        routes:"Jharkhand"
    },
    {
        id:10,
        name:"Karnataka",
        routes:"Karanataka"
    },
    {
        id:11,
        name:"Kerela",
        routes:"Kerela"
    },
    {
        id:12,
        name:"Madhya Pradesh",
        routes:"MadhyaPradesh"
    },
    {
        id:13,
        name:"Maharashtra",
        routes:"Maharashtra"
    },
    {
        id:14,
        name:"Manipur",
        routes:"Manipur"
    },
    {
        id:15,
        name:"Meghalaya",
        routes:"Meghalaya"
    },
    {
        id:16,
        name:"Mizoram",
        routes:"Mizoram"
    },
    {
        id:17,
        name:"Nagaland",
        routes:"Nagaland"
    },
    {
        id:18,
        name:"Odisha",
        routes:"Odisha"
    },
    {
        id:19,
        name:"Punjab",
        routes:"Punjab"
    },
    {
        id:20,
        name:"Rajasthan",
        routes:"Rajasthan"
    },
    {
        id:21,
        name:"Sikkim",
        routes:"Sikkim"
    },
    {
        id:22,
        name:"Tamil Nadu",
        routes:"TamilNadu"
    },
    {
        id:23,
        name:"Telangana",
        routes:"Telangana"
    },
    {
        id:24,
        name:"Tripura",
        routes:"Tripura"
    },
    {
        id:25,
        name:"Uttarakhand",
        routes:"Uttarakhand"
    },
    {
        id:26,
        name:"Uttar Pradesh",
        routes:"UttarPradesh"
    },
    {
        id:27,
        name:"West Bengal",
        routes:"WestBengal"
    }
]

function Sidebar() {

    const [selectState, setSelectState] = useState("")
    const onStateChanged=(e)=>setSelectState(e.target.value)
    const stateOptions=states.map((state1)=>
    <option key={state1.id} value={state1.routes}>
        {state1.name}
    </option>
    )

    const handleClick=(e)=>
    {
        e.preventDefault();
        navigate(`/portals/${selectState}`)
    }

  return (
    <div className='bg-secondary text-black w-1/4 flex'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <select className="flex text-[30px] h-[40px] bg-secondary" value={selectState} onChange={onStateChanged}>
            <option  className="" >State</option>
            {stateOptions}
            </select>
            <hr />
            <Link className="text-[30px] absolute ml-[330px]" href={`/portals/${selectState}`}>Go</Link>
    </div>
  )
}

export default Sidebar