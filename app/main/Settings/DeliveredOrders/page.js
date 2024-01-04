'use client'
import * as React from 'react'
import Table from '@/components/table4'
import { useContext } from 'react';
import { DeliveredContext } from '@/components/Delivered';

export default function Page() {
  const {Deliveredlist} = useContext(DeliveredContext);
  function Create() {
    if (Deliveredlist.length > 0)
    {
        return (Deliveredlist.map((List, index) => (
            <Table key={List.key} no={index+1} name={List.name} price={List.price} link={List.link} array={List}>
            </Table>
        ))
        )
    }
  }
  return (
    <div style = {{backgroundImage: 'url("https://img.freepik.com/free-photo/green-park-view_1417-1487.jpg?w=2000")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}}>
      <br></br>
      <br></br>
      <div className = "text-3xl bg-blue-300 rounded-xl font-bold text-center text-blue-900 w-full sm:w-[300px]" style={{margin:'auto'}}>Your Delivered Items</div>
      <br></br>
      <br></br>
      <table className="table-fixed" style={{margin:'auto'}}>
            <thead>
                <tr className="bg-red-400">
                    <th className = "text-md md:text-3xl text-center rounded-lg">S.No</th>
                    <th className = "text-md md:text-3xl text-center rounded-lg">Name</th>
                    <th className = "text-md md:text-3xl text-center rounded-lg">Price</th>
                    <th className = "text-md md:text-3xl text-center rounded-lg">Link</th>
                </tr>
            </thead>
            <tbody className="bg-blue-400">
               <Create></Create>
            </tbody>
        </table>
        <br></br>
        <br></br>
    </div>
  )
}