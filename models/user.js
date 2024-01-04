import mongoose, {Schema} from "mongoose";
import conn from "@/libs/mongo2"
import { ObjectId } from "mongodb";

const userSchema = new Schema({
        name: {
            type: String,
            required : true,
        },
        address: {
            type: String,
            required : true,
        },
        mobile: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        yourorders: {
            type: [
                {
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
                }
            ],
            required: true,
        },
        deliveredorders: {
            type: [
                {
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
                }
            ],
        },
        yourwishlist: {
            type: [
                {
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
                }
            ],
        },
        yourlikelist: {
            type: [
                {
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
                }
            ],
        },
        cart: {
            type: [
                    {
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
                        color: String,
                        size: String,
                    },
            ]
        }
   },
   {timestamps: true}
);
const User = mongoose.models.User || conn.model("User", userSchema, 'users');
export default User;