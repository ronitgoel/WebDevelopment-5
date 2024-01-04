import React from 'react'
import Table from '@/components/table'

const Lists = []
function Create() {
    return (Lists.map((List) => (
        <Table key={List.key} name={List.name} price={List.price} date={List.date} orderid={List.orderid} no={List.no}>
        </Table>
    ))
    )
}
export default function page() {
  return (
    <div style = {{backgroundImage: 'url("https://img.freepik.com/free-photo/green-park-view_1417-1487.jpg?w=2000")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}}>
      <br></br>
      <br></br>
      <div className = "text-3xl bg-blue-300 rounded-xl font-bold text-center text-blue-900 w-full sm:w-[300px]" style={{margin:'auto'}}>Orders Rejected</div>
      <br></br>
      <br></br>
      <table className="table-fixed" style={{margin:'auto'}}>
            <thead>
                <tr className="bg-red-400">
                    <th className = "text-md md:text-3xl text-center rounded-lg">S.No</th>
                    <th className = "text-md md:text-3xl text-center rounded-lg">Name</th>
                    <th className = "text-md md:text-3xl text-center rounded-lg">Price</th>
                    <th className = "text-md md:text-3xl text-center rounded-lg">Date</th>
                    <th className = "text-md md:text-3xl text-center rounded-lg">OrderId</th>
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