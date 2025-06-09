import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('connected to DB successfully');
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
