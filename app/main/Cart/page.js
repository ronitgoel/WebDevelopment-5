'use client'
import * as React from 'react'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext } from 'react';
import { CartContext } from '@/components/Cart';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';

export default function Page() {
    const {Cart, addprod, removeprod, decprod} = useContext(CartContext);
    function add(obj, ext1, ext2)
    {
       addprod(obj, ext1, ext2);
    }
    function remove(obj, ext1, ext2)
    {
       decprod(obj, ext1, ext2);
    }
    function del(obj)
    {
      removeprod(obj)
    }
    if (Cart.length === 0)
    {
      return (
           <div  style={{padding:'2rem',backgroundColor:"#E3242B", borderWidth:'2rem', borderColor:'#FFC300'}}>
              <div className="text-5xl text-center font-bold" style={{color:"#FFBB00"}}>
                Your DEVCART Is Empty
                <SentimentVeryDissatisfiedIcon fontSize='large'></SentimentVeryDissatisfiedIcon>
              </div>
              <div className="text-3xl text-center font-bold" style={{margin:'2rem', color:"#FFBB00"}}>
                Please Add Some Products
              </div>
           </div>
      )
    }
    else
    {
        return (
          <div>
          {Cart.map((obj) => (
            <div key={obj.key} className="bg-slate-700 p-[1rem]">
              <div className ="flex flex-col sm:flex-row" style={{backgroundColor:"#FFC300"}}>
                  <div className="basis-1/4">
                    <Image style={{height:'350px', width:'auto',margin:'auto', padding:'1rem'}} src={`/${obj.image[0]}`} width={350} height={350} alt="Photo"></Image>
                  </div>
                  <div className="basis-3/4">
                    <div className="text-3xl text-center sm:text-left font-bold text-red-500" style={{marginTop:"1rem", padding:'0.2rem'}}>
                      {obj.name}
                    </div>
                    <div className="text-xl sm:text-3xl text-center sm:text-left font-bold text-red-500" style={{padding:'0.2rem'}}>
                      {obj.details}
                    </div>
                    <div className="text-xl text-center sm:text-left font-bold text-red-500" style={{padding:'0.2rem'}}>
                      {obj.color}   {obj.size}
                    </div>
                    <div className="text-5xl text-center sm:text-left font-bold text-red-500" style={{padding:'0.2rem'}}>
                      ₹{obj.price}
                    </div>
                    <div className="text-2xl sm:text-3xl text-center sm:text-left font-bold text-red-500" style={{marginTop:"2rem", padding:'0.2rem'}}>
                      Quantity = {obj.Qty}
                      <Button onClick={() => {add(obj, obj.color, obj.size);}} className="text-yellow-500 bg-danger-600" style={{marginLeft:'1rem'}}><AddIcon /></Button>
                      <Button onClick={() => {remove(obj, obj.color, obj.size);}}className="text-yellow-500 bg-danger-600" style={{marginLeft:'1rem'}}><RemoveIcon /></Button>
                    </div>
                    <br></br>
                    <div className="flex flex-row text-center font-bold justify-between md:justify-start" style={{marginBottom:'0.5rem', padding:'0.2rem'}}>
                      <Button as={Link} href = {`./${obj.link}`} className="text-yellow-500 bg-primary-400 font-bold text-lg">See Your Product</Button>
                      <Button endContent={<DeleteIcon/>} onClick={() => {del(obj);}} className="text-yellow-500 bg-primary-400 font-bold text-lg ml-1">DELETE</Button>
                    </div>
                  </div>
              </div>
            </div>
          ))}
          </div>
        );
    }
}
