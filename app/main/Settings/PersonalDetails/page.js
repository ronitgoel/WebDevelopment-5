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
  }, [session]);
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-3xl font-bold leading-7 text-gray-900 m-6 text-center md:text-left">Personal Details</h3>
      </div>
      <div className="mt-6 border-gray-100 border-4">
        <dl className="ml-4 divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-ld font-bold leading-6 text-gray-900">FULL NAME</dt>
            <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{name}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-ld font-bold leading-6 text-gray-900">EMAIL ADDRESS</dt>
            <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{email}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-ld font-bold leading-6 text-gray-900">LOCATION</dt>
            <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{location}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-ld font-bold leading-6 text-gray-900">MOBILE NUMBER</dt>
            <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{mobile}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
