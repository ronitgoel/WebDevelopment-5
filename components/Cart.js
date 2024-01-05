'use client'
import * as React from 'react'
import { createContext, useState, useEffect} from 'react'
import { useSession } from 'next-auth/react';

export const CartContext = createContext({});
export default function Cart({children}) {
  const [Cart, setCart] = useState([]);
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
          if (data.user.cart.length == 1 && data.user.cart[0].image.length == 0)
          {
            setCart([]);
          }
          else
          {
            setCart(data.user.cart);
          }
        });
      }
      else
      {
        setCart([]);
      }
    }
    catch (error) {
        console.log("Error is ", error);
        setCart([]);
    }
  }, [email, session])
  function savecart(mycart)
  {
    try {
      fetch("/api/cartlist", {
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
        setCart([]);
    }
  }
  function addprod(t, ext1, ext2)
  {
    let f = 0;
    let another = Cart.map(product => {
      if (product.name === t.name) {
        if (product.color === ext1 && product.size === ext2)
        {
          f = 1;
          return {...product, Qty : product.Qty + 1};
        }
        else
        {
          return product;
        }
      }
      else {
        return product;
      }
    })
    if (f === 0)
    {
      another.push({...t, key : another.length + 1, color: ext1, size: ext2});
    }
    setCart(another);
    savecart(another);
  }
  function decprod(t, ext1, ext2)
  {
    let another = Cart.map(product => {
      if (product.name === t.name) {
        if (product.color === ext1 && product.size === ext2)
        {
          return {...product, Qty : product.Qty - 1};
        }
        else
        {
          return product;
        }
      }
      else {
        return product;
      }
    })
    let count = 0;
    another = another.filter(p => p.Qty > 0)
    another = another.map(product => {
      count = count + 1;
      return {...product, key : count};
    })
    setCart(another);
    savecart(another);
  }
  function removeprod(t)
  {
    let another = Cart.filter(p => p.name != t.name)
    setCart(another);
    savecart(another);
  }
  function clearcart()
  {
    setCart([]);
    savecart([]);
  }
  return (
    <CartContext.Provider value ={{Cart, addprod, removeprod, clearcart, decprod}}>
       {children}
    </CartContext.Provider>
  )
}