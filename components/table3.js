'use client'
import * as React from 'react'
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useContext } from 'react';
import { LikeContext } from '@/components/Likelist';

export default function Table({no, name, price, link, array}) {
  const {removeprod} = useContext(LikeContext);
  function remove(t)
  {
    removeprod(t);
  }
  return (
    <tr>
        <td className = "text-md md:text-3xl text-center rounded-lg">{no}</td>
        <td className = "text-md md:text-3xl text-center rounded-lg">{name}</td>
        <td className = "text-md md:text-3xl text-center rounded-lg">{price}</td>
        <td className = "text-md md:text-3xl text-center rounded-lg"><Button as={Link} href = {`../${link}`} className="text-yellow-500 font-bold bg-blue-900" variant="solid">See Your Product</Button></td>
        <td className = "text-md md:text-3xl text-center rounded-lg"><Button className="bg-yellow-500 hover:bg-red-500" variant="solid" endContent={<DeleteOutlineIcon/>} onClick={() => {remove(array);}}></Button></td>
    </tr>
)
}
