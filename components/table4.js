'use client'
import * as React from 'react'
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useContext } from 'react';
import { LikeContext } from '@/components/Likelist';

export default function Table({no, name, price, link}) {
  return (
    <tr>
        <td className = "text-md md:text-3xl text-center rounded-lg">{no}</td>
        <td className = "text-md md:text-3xl text-center rounded-lg">{name}</td>
        <td className = "text-md md:text-3xl text-center rounded-lg">{price}</td>
        <td className = "text-md md:text-3xl text-center rounded-lg"><Button className="text-yellow-500 font-bold bg-red-500 hover:bg-slate-400" variant="text"><Link href = {`../${link}`}>See Your Product</Link></Button></td>
    </tr>
)
}