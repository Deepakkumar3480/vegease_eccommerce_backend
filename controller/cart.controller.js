import Cart from "../model/CartSchema.js";

//this is i think invalid function not realistic use for user
export const getcartbyid = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        message: "something went wrong",
      });
      return;
    }
    const cart = await Cart.find({ userid: id });
    if (!cart) {
      res.status(401).json({
        message: "cart is empty now add items",
      });
      return;
    }
    res.status(200).json({
      message: "cart data is available",
      cart: cart,
    });
  } catch (error) {
    res.status(500).json({
      message: "error from the cart",
      error: error.message,
    });
  }
};

export const addtocart = async (req, res) => {
  try {
    const { userid, productid } = req.body;
    if (!userid || !productid) {
      res.status(400).json({
        message: "invalid credentials or data",
      });
      return;
    }
    // console.log('first check')
    const alreadyexist = await Cart.findOneAndUpdate(
      { userid, productid },
      { $inc: { quantity: 1 } }
    );
    // console.log('second cgeck')
    if(alreadyexist){
        res.status(200).json({
            message:"product exist already so count increase"
        })
        return;
    }
    // console.log('third check')
    const cartsave = await Cart.create({ userid, productid });
    res.status(201).json({
      message: "added to cart successfully",
      item: cartsave,
    });
  } catch (error) {
    res.status(500).json({
      message: "error from cart to added",
      error: error.message,
    });
  }
};

export const removecart = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(401).json({
        message: "something went wrong try again",
      });
      return;
    }
    const userremove = await Cart.findByIdAndDelete(id);
    res.status(200).json({
      message: "user deleted successfully",
      removeuser: userremove,
    });
  } catch (error) {
    res.status(500).json({
      message: "error from cart to remove",
      error: error.message,
    });
  }
};

export const clearcart = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "Missing userid",
      });
    }

    const result = await Cart.deleteMany({ userid: id });

    res.status(200).json({
      message: "Cart cleared successfully",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "error in cart clear",
      error: error.message,
    });
  }
};
