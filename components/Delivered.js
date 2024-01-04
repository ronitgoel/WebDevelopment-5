'use client'
import * as React from 'react'
import { createContext, useState, useEffect} from 'react'
import { useSession } from 'next-auth/react';

export const DeliveredContext = createContext({});
export default function Deliveredlist({children}) {
  const [Deliveredlist, setDeliveredlist] = useState([]);
  const {data : session} = useSession();
  let email = session?.user?.email;
  useEffect(() => {
    try {
       if(session)
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
          if (data.user.deliveredorders.length == 1 && data.user.deliveredorders[0].image.length == 0)
          {
            setDeliveredlist([]);
          }
          else
          {
            setDeliveredlist(data.user.deliveredorders);
          }
        });
       }
       else
       {
        setDeliveredlist([]);
       }
    }
    catch (error) {
        console.log("Error is ", error);
        setDeliveredlist([]);
    }
  }, [])
  function savecart(mycart)
  {
    try {
      fetch("/api/Delivered", {
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
        setDeliveredlist([]);
    }
  }
  function addDelivered(t)
  {
    let another = Deliveredlist;
    another.push({...t, key : another.length + 1});
    setDeliveredlist(another);
    console.log(Deliveredlist);
    savecart(another);
  }
  function removeprod(t)
  {
    let another = Deliveredlist.filter(p => p.name != t.name)
    setDeliveredlist(another);
    savecart(another);
  }

  return (
    <DeliveredContext.Provider value ={{Deliveredlist, addDelivered, removeprod}}>
       {children}
    </DeliveredContext.Provider>
  )
}