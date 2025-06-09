import mongoose from 'mongoose'

const purchaseSchema = new mongoose.Schema({

    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Porduct',
        required:true
    },
    quantity:{
        type:Number
    },
    price:{
        type:String
    },
    purchase_at:{
        type:Date,
        default:Date.now
    }
})

const Purhase = mongoose.model('Purchase',purchaseSchema);

export default Purhase