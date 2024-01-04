import mongoose from "mongoose";
import conn from '@/libs/mongo1';
import {NextResponse} from "next/server";
import { Int32, ObjectId } from "mongodb";

export async function GET()
{
    const Kitchenitem = mongoose.models.Kitchenitem || conn.model('Kitchenitem', new mongoose.Schema({
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
    }), 'kitchenitems');
    const Kitchenitems = await Kitchenitem.find({});
    return NextResponse.json({Kitchenitems});
}