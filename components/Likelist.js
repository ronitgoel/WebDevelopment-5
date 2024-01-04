'use client'
import * as React from 'react'
import { createContext, useState, useEffect} from 'react'
import { useSession } from 'next-auth/react';

export const LikeContext = createContext({});
export default function Likelist({children}) {
  const [Likelist, setLikelist] = useState([]);
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
          if (data.user.yourlikelist.length == 1 && data.user.yourlikelist[0].image.length == 0)
          {
            setLikelist([]);
          }
          else
          {
            setLikelist(data.user.yourlikelist);
          }
        });
      }
      else
      {
        setLikelist([]);
      }
    }
    catch (error) {
        console.log("Error is ", error);
        setLikelist([]);
    }
  }, [])
  function savecart(mycart)
  {
      try {
        fetch("/api/Likelist", {
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
          setLikelist([]);
      }
  }
  function addLike(t)
  {
    t.key = Likelist.length + 1;
    let f = 0;
    let another = Likelist.map(product => {
      if (product.name === t.name) {
        f = 1;
      }
      return product;
    })
    if (f === 0)
    {
      another.push(t);
      setLikelist(another);
      savecart(another);
    }
  }
  function removeprod(t)
  {
    let another = Likelist.filter(p => p.name != t.name)
    setLikelist(another);
    savecart(another);
  }

  return (
    <LikeContext.Provider value ={{Likelist, addLike, removeprod}}>
       {children}
    </LikeContext.Provider>
  )
}