'use client'
import * as React from 'react';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { CartContext } from '@/components/Cart';
import { DeliveredContext } from '@/components/Delivered';
import { OrderedContext } from '@/components/Orders';
import Link from 'next/link';

export default function RootLayout({ children }) {
  const {Cart, clearcart} = useContext(CartContext);
  const {DeliveredList, addDelivered} = useContext(DeliveredContext);
  const {OrderedList, addOrdered} = useContext(OrderedContext);
  function Calculate(subtotal){
    for (const element of Cart)
    {
      subtotal = subtotal + (element.price*element.Qty);
    }
    return subtotal;
  }
  function clear()
  {
    clearcart();
  }
  function clear2()
  {
    for (const element of Cart)
    {
      addDelivered(element);
      addOrdered(element);
    }
    clear();
  }
  if (Cart.length == 0)
  {
    return (
      <div>
          {children}
      </div>
    )
  }
  else
  {
    let subtotal = 0;
    subtotal = Calculate(subtotal);
    return (
      <div>
          {children}
          <div className="bg-slate-700 p-[1rem]">
              <div style={{backgroundColor:"#FFC300"}}>
                  <div>
                      <div className="flex justify-center flex-row text-xl sm:text-3xl text-center font-bold text-red-500" style={{padding:'0.2rem'}}>
                        <div className="flex flex-row justify-center mt-2">Subtotal = ₹{subtotal}</div>
                        <Link href = "/main/Registered" className="flex flex-row justify-center">
                          <Button size='large' onClick={clear2} variant="contained" endIcon={<SendIcon />} className="text-yellow-500 bg-blue-950 hover:bg-pink-600 justify-center ml-3">
                            CHECKOUT
                          </Button>
                        </Link>
                      </div>
                  </div>
              </div>
          </div>
          <div className="bg-slate-700 p-[1rem]">
              <div style={{backgroundColor:"#FFC300"}}>
                      <div className="text-3xl text-center font-bold text-red-500" style={{padding:'0.2rem'}}>
                      <Button size='large' onClick={clear} variant="contained" endIcon={<DeleteIcon />} className=" text-yellow-500 bg-red-700 hover:bg-red-800">
                          ClearCart
                      </Button>
                      </div>
              </div>
          </div>
      </div>
    )
  }
}