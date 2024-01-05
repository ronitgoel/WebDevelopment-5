'use client'
import * as React from 'react'
import { createContext, useState, useEffect} from 'react'
import { useSession } from 'next-auth/react';

export const WishContext = createContext({});
export default function Wishlist({children}) {
  const [Wishlist, setWishlist] = useState([]);
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
          if (data.user.yourwishlist.length == 1 && data.user.yourwishlist[0].image.length == 0)
          {
            setWishlist([]);
          }
          else
          {
            setWishlist(data.user.yourwishlist);
          }
        });
      }
      else
      {
        setWishlist([]);
      }
    }
    catch (error) {
        console.log("Error is ", error);
        setWishlist([]);
    }
  }, [session, email])
  function savecart(mycart)
  {
    try {
      fetch("/api/Wishlist", {
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
        setWishlist([]);
    }
  }
  function addwish(t)
  {
    t.key = Wishlist.length + 1;
    let f = 0;
    let another = Wishlist.map(product => {
      if (product.name === t.name) {
        f = 1;
      }
      return product;
    })
    if (f === 0)
    {
      another.push(t);
      setWishlist(another);
      savecart(another);
    }
  }
  function removeprod(t)
  {
    let another = Wishlist.filter(p => p.name != t.name)
    setWishlist(another);
    savecart(another);
  }

  return (
    <WishContext.Provider value ={{Wishlist, addwish, removeprod}}>
       {children}
    </WishContext.Provider>
  )
}