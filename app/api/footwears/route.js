import mongoose from "mongoose";
import conn from '@/libs/mongo1';
import {NextResponse} from "next/server";
import { Int32, ObjectId } from "mongodb";

export async function GET()
{
    const Footwear = mongoose.models.Footwear || conn.model('Footwear', new mongoose.Schema({
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
    }), 'footwears');
    const Footwears = await Footwear.find({});
    return NextResponse.json({Footwears});
}