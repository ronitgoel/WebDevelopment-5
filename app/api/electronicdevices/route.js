import {NextResponse} from "next/server";
import mongoose from "mongoose";
import conn from '@/libs/mongo1';
import { ObjectId } from "mongodb";

export async function GET()
{
    const Electronicdevice = mongoose.models.Electronicdevice || conn.model('Electronicdevice', new mongoose.Schema({
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
    }), 'electronicdevices');
    const Electronicdevices = await Electronicdevice.find({});
    return NextResponse.json({Electronicdevices});
}