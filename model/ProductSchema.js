import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true,
        // default:99
    },
    image:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const Product = mongoose.model('Product',ProductSchema);
export default Product;