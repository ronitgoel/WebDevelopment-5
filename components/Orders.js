'use client'
import * as React from 'react'
import { createContext, useState, useEffect} from 'react'
import { useSession } from 'next-auth/react';

export const OrderedContext = createContext({});
export default function Orderedlist({children}) {
  const [Orderedlist, setOrderedlist] = useState([]);
  const {data : session} = useSession();
  let email = session?.user?.email;
  useEffect(() => {
    try {
       if (session)
       {
        fetch("/api/Credentials", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({email}),
        })
        .then(res => res.json())
        .then((data) => {
          if (data.user.yourorders.length == 1 && data.user.yourorders[0].image.length == 0)
          {
            setOrderedlist([]);
          }
          else
          {
            setOrderedlist(data.user.yourorders);
          }
        });
       }
       else
       {
        setOrderedlist([]);
       }
    }
    catch (error) {
        console.log("Error is ", error);
        setOrderedlist([]);
    }
  }, [session, email])
  function savecart(mycart)
  {
    try {
      fetch("/api/Orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, mycart}),
      })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
      });
    }
    catch (error) {
        console.log("Error is ", error);
        setOrderedlist([]);
    }
  }
  function addOrdered(t)
  {
    let another = Orderedlist;
    another.push({...t, key : another.length + 1});
    setOrderedlist(another);
    savecart(another);
  }
  function removeprod(t)
  {
    let another = Orderedlist.filter(p => p.name != t.name)
    setOrderedlist(another);
    savecart(another);
  }

  return (
    <OrderedContext.Provider value ={{Orderedlist, addOrdered, removeprod}}>
       {children}
    </OrderedContext.Provider>
  )
}