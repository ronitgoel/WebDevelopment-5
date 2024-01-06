import {NextResponse} from "next/server";
import mongoose from "mongoose";
import conn from '@/libs/mongo1';
import { ObjectId } from "mongodb";

export async function GET()
{
    const Essential = mongoose.models.Essential || conn.model('Essential', new mongoose.Schema({
        _id : ObjectId,
        key : Number,
        name : String,
        image : [String],
        details : String,
        price : Number,
        Qty : Number,
        link : String,
        review : mongoose.Schema.Types.Mixed,
        category : String,
        brand : String,
    }), 'essentials');
    const Essentials = await Essential.find({});
    return NextResponse.json({Essentials});
}