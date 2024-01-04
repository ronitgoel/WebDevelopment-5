'use client'
import * as React from 'react'
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

let name = "Please Login";
let email = "Please Login";
let mobile = "Not Updated Yet";
let location = "Not Updated Yet";
export default function Page() {
  const {data : session} = useSession();
  name = session?.user?.name;
  email = session?.user?.email;
  useEffect(() => {
    fetch("/api/Credentials", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({email}),
    })
    .then(res => res.json())
    .then((data) => {
      if (data)
      {
        mobile = data.user.mobile;
        location = data.user.address;
      }
    });
  }, []);
  return (
    <div className="bg-pink-500">
        <br></br>
        <div className="bg-blue-900 rounded-full flex flex-col justify-center" style={{margin:'auto'}}>
            <br></br>
            <br></br>
            <div className = "flex flex-row text-center text-2xl bg-slate-400 rounded-lg font-bold" style={{margin:'auto'}}>Your Account Details</div>
            <br></br>
            <br></br>
            <div className="transition ease-in-out delay-150 border-rose-900 border-4 rounded-lg bg-yellow-500 hover:bg-green-400 hover:-translate-y-1 hover:scale-110 duration-300 w-full md:w-[500px] lg:w-[1000px]" style={{margin:'auto'}}><p className = "text-center text-xl">Name: {name}</p></div>
            <br></br>
            <br></br>
            <div className="transition ease-in-out delay-150 border-rose-900 border-4 rounded-lg bg-yellow-500 hover:bg-green-400 hover:-translate-y-1 hover:scale-110 duration-300 w-full md:w-[500px] lg:w-[1000px]" style={{margin:'auto'}}><p className = "text-center text-xl">EmailId: {email}</p></div>
            <br></br>
            <br></br>
            <div className="transition ease-in-out delay-150 border-rose-900 border-4 rounded-lg bg-yellow-500 hover:bg-green-400 hover:-translate-y-1 hover:scale-110 duration-300 w-full md:w-[500px] lg:w-[1000px]" style={{margin:'auto'}}><p className = "text-center text-xl">MobileNumber: {mobile}</p></div>
            <br></br>
            <br></br>
            <div className="transition ease-in-out delay-150 border-rose-900 border-4 rounded-lg bg-yellow-500 hover:bg-green-400 hover:-translate-y-1 hover:scale-110 duration-300 w-full md:w-[500px] lg:w-[1000px]" style={{margin:'auto'}}><p className = "text-center text-xl">Location: {location}</p></div>
            <br></br>
            <br></br>
        </div>
        <br></br>
    </div>
  )
}
