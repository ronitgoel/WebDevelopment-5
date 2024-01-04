import mongoose from "mongoose";
import conn from '@/libs/mongo1';
import {NextResponse} from "next/server";
import { Int32, ObjectId } from "mongodb";

export async function GET()
{
    const Watche = mongoose.models.Watche || conn.model('Watche', new mongoose.Schema({
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
    }), 'watches');
    const Watches = await Watche.find({});
    return NextResponse.json({Watches});
}