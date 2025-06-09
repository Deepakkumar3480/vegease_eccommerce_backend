import mongoose from 'mongoose'

const WishListSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }
},{
    timestamps:true
})

const Wishlist = mongoose.model('Wishlist',WishListSchema);

export default Wishlist;