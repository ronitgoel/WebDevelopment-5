import React from 'react'

export default function Table({no, name, price, date, orderid}) {
  return (
    <tr>
        <td className = "text-3xl px-3 text-center rounded-lg">{no}</td>
        <td className = "text-3xl px-3 text-center rounded-lg">{name}</td>
        <td className = "text-3xl px-3 text-center rounded-lg">{price}</td>
        <td className = "text-3xl px-3 text-center rounded-lg">{date}</td>
        <td className = "text-3xl px-3 text-center rounded-lg">{orderid}</td>

    </tr>
)
}
