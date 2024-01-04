'use client'
import * as React from 'react'
import Button from '@mui/material/Button';
import Link from 'next/link';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useContext } from 'react';
import { WishContext } from '@/components/Wishlist';

export default function Table({no, name, price, link, array}) {
  const {removeprod} = useContext(WishContext);
  function remove(t)
  {
    removeprod(t);
  }
  return (
    <tr>
        <td className = "text-md md:text-3xl text-center rounded-lg">{no}</td>
        <td className = "text-md md:text-3xl text-center rounded-lg">{name}</td>
        <td className = "text-md md:text-3xl text-center rounded-lg">{price}</td>
        <td className = "text-md md:text-3xl text-center rounded-lg"><Button className="text-yellow-500 font-bold bg-red-500 hover:bg-slate-400" variant="text"><Link href = {`../${link}`}>See Your Product</Link></Button></td>
        <td className = "text-md md:text-3xl text-center rounded-lg hover:bg-red-500"><Button onClick={() => {remove(array);}}><DeleteOutlineIcon style={{color:'black'}}></DeleteOutlineIcon></Button></td>
    </tr>
)
}
