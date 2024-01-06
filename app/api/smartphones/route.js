import {NextResponse} from "next/server";
import mongoose from "mongoose";
import conn from '@/libs/mongo1';
import { ObjectId } from "mongodb";

export async function GET()
{
    const Smartphone = mongoose.models.Smartphone || conn.model('Smartphone', new mongoose.Schema({
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
    }), 'smartphones');
    const Smartphones = await Smartphone.find({});
    return NextResponse.json({Smartphones});
}