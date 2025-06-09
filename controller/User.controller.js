import User from "../model/UserSchema.js";
import bcrypt from "bcrypt";

export const getallusers = async (req, res) => {
  try {
    const user = await User.find({}).select("-password");

    if (!user) {
      res.status(401).json({
        message: "something went wrong here",
      });
      return;
    }
    
    res.status(200).json({
      message: "get all users",
      users: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server from allusers",
      error: error.message,
    });
  }
};

export const getuserbyid = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(401).json({
        message: "somehting went wrong",
      });
      return;
    }
    const user = await User.findById(id).select("-password");

    if (!user) {
      res.status(401).json({
        message: "something went wrong here",
      });
      return;
    }
    res.status(200).json({
      message: "get all users",
      users: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server from allusers",
      error: error.message,
    });
  }
};

export const adduser = async (req, res) => {
  try {
    const { name, email, phoneNo, password } = req.body;
    if (!name || !email || !phoneNo || !password) {
      res.status(401).json({
        message: "give all details",
      });
      return;
    }
    const alreadysaveuser = await User.findOne({ email });
    if (alreadysaveuser) {
      res.status(400).json({
        message: "user already exist",
      });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    // console.log(`salt ${salt}`)
    const hashPassword = await bcrypt.hash(password, salt);
    // console.log(hashPassword);
    const user = {
      name,
      email,
      phoneNo,
      password,
    };
    const saveuser = await User.create(user);
    // saveuser.password='';
    res.status(200).json({
      message: "user created successfully",
      user: saveuser,
    });
  } catch (error) {
    res.status(501).json({
      message: "internal user server error",
      error: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email, phoneNo } = req.body;
    if (!email) {
      res.status(400).json({
        message: "email is important for updatation",
      });
      return;
    }
    const user = await User.findOneAndUpdate(
      { email },
      { $set: { name,phoneNo}},
       { new: true } // ye previous nhi updated result bhejega iske help se
    ).select("-password");

    if(!user){
        res.status(400).json({
            message:'something goes wrong',
        })
        return;
    }

    res.status(200).json({
      message: "user updated successfully",
      updatedUser: user,
    });
  } catch (error) {
    res.status(501).json({
      message: "internal user server error",
      error: error.message,
    });
  }
};

export const deleteUser = async(req, res) => {
  try {
    const {id}=req.params;
    if(!id){
        res.status(401).json({
            message:"something went wrong"
        })
        return;
    }
    const user = await User.findByIdAndDelete(id);
    if(!user){
        res.status(401).json({
            message:'user not exist to delete'
        })
        return;
    }
    res.status(200).json({
        message:'user deleted successfully'
    })
  } catch (error) {
     res.status(501).json({
      message: "internal user delete server error",
      error: error.message,
    });
  }
};
