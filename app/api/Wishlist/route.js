import User from "@/models/user"
import { NextResponse } from "next/server";

export async function POST(req)
{
    try {
        const {email, mycart} = await req.json();
        const user = await User.findOneAndUpdate({email: email}, {yourwishlist: mycart}, {new: true});
        return NextResponse.json({user});
    } catch (error) {
        console.log(error);
    }
}