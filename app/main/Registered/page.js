'use client'
import * as React from 'react'
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

export default function page() {
  return (
    <div style = {{backgroundImage: 'url("https://i.pinimg.com/originals/4d/96/08/4d9608e972721c62bc888af8d4531747.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}}>
      <br></br>
      <br></br>
      <div className="text-blue-800 text-5xl text-center font-bold">
        YOU HAVE ORDERED YOUR PRODUCT
      </div>
      <br></br>
      <br></br>
      <div className="text-rose-800 text-4xl text-center font-bold">
        THANK YOU FOR BELIEVING IN US
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="text-purple-800 text-5xl text-center font-bold">
        You will get your product at your registered address.
      </div>
      <br></br>
      <br></br>
      <div className = "text-center">
        <Button size='large' href="/" variant="contained" endIcon={<SendIcon />} className="text-yellow-500 bg-blue-950 hover:bg-pink-600 text-center">
          Continue Shopping
        </Button>
      </div>
      <br></br>
      <br></br>
    </div>
  )
}
