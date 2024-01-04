import * as React from 'react'
import { NextResponse } from 'next/server';
import User from '@/models/user';
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
      const {name, address, mobile, email, password} = await req.json();
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({name: name, address: address, mobile: mobile, email: email, password: hashedPassword, yourorders: [{}], deliveredorders: [{}], yourwishlist: [{}], yourlikelist: [{}], cart: [{}],});
      return NextResponse.json({message:"User registered"}, {status: 201});
    } catch (error){
      return NextResponse.json(
        {
            message:"An error occurred while registering the user"
        },
        {status: 500}
      );
    }
}
