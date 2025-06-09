import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js'
import userRouter from './routes/User.route.js'
import productRouter from './routes/Product.route.js'
import cartRouter from './routes/cart.route.js'
import cors from 'cors'

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:4200',
//   credentials: true, // if you're using cookies/auth headers
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('hello server');
})

app.use('/api/user',userRouter)
app.use('/api/product',productRouter);
app.use('/api/cart',cartRouter)

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    connectDB();
    console.log(`server is listening bro ${PORT}`);
})