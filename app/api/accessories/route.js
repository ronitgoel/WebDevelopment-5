import mongoose from "mongoose";
import conn from '@/libs/mongo1';
import {NextResponse} from "next/server";
import { Int32, ObjectId } from "mongodb";

export async function GET()
{
    const Accessory = mongoose.models.Accessory || conn.model('Accessory', new mongoose.Schema({
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
    }), 'accessories');
    const Accessories = await Accessory.find({});
    return NextResponse.json({Accessories});
}