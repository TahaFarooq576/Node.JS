import mongoose from "mongoose";
const Todooschema=new mongoose.Schema({
    name:String,
    desc:String,
    isdone:Boolean
});

export const Todoo=mongoose.model('Todoo',Todooschema)