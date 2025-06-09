import Product from "../model/ProductSchema.js";

export const getallproducts = async (req, res) => {
  try {
    const products = await Product.find({});

    if (!products) {
      res.status(401).json({
        message: "something went wrong here",
      });
      return;
    }
    res.status(200).json({
      message: "get all products",
      products: products,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server from products",
      error: error.message,
    });
  }
};

export const getproductbyid = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(401).json({
        message: "somehting went wrong",
      });
      return;
    }
    const product = await Product.findById(id);

    if (!product) {
      res.status(401).json({
        message: "something went wrong here",
      });
      return;
    }
    res.status(200).json({
      message: "get product by id",
      product: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server from allusers",
      error: error.message,
    });
  }
};

export const getproductbycategory = async (req, res) => {
  try {
    const {category}= req.body;
    if(!category){
      res.status().json({
        message:'something got wrong'
      })
      return;
    }
    const getdata = await Product.find({category})
    res.status(200).json({
      message:'get data based on category',
      data:getdata
    })
  } catch (error) {
     res.status(500).json({
      message: "internal server from products",
      error: error.message,
    });
  }
};

export const createproduct = async (req, res) => {
  try {
    const { name, category, description, Price, image } = req.body;
    // console.log(name,category,description,Price,image)
    if (!name || !category || !description || !Price || !image) {
      res.status(401).json({
        message: "give all products details",
      });
      return;
    }
    const product = {
      name,
      category,
      description,
      Price,
      image,
    };
    
    const saveproduct = await Product.create( product );
    // console.log('yha tak')
    res.status(200).json({
      message: "product created successfully",
      product: saveproduct,
    });
  } catch (error) {
     res.status(500).json({
      message: "internal server from products",
      error: error.message,
    });
  }
};

export const updateproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, description, Price, image } = req.body;
    // console.log(id,name)
    const productexist = await Product.findById(id);
    if (!productexist) {
      res.status(404).json({
        message: "product not exist please add first",
      });
      return;
    }
    
    const updatedata = {};
    if (name) updatedata.name = name;
    if (category) updatedata.category = category;
    if (description) updatedata.description = description;
    if (Price) updatedata.Price = Price;
    if (image) updatedata.image = image;
        console.log('okay')
        console.log(updatedata)

    // res.send(updatedata);
    const updateproduct = await Product.findByIdAndUpdate(
       id ,
      { $set: updatedata  },
      {
        new: true,
      }
    );
        console.log('okay2')

    res.status(200).json({
      message:'product updated successfully',
      updateproduct:updateproduct
    })
  } catch (error) {
     res.status(500).json({
      message: "internal server from products",
      error: error.message,
    });
  }
};

export const removeproduct = async (req, res) => {
  try {
    const {id}= req.params;
    if(!id){
      res.status(401).json({
        message:"something went wrong here"
      })
      return;
    }
    const deleteproduct =await Product.findByIdAndDelete(id);
    if(!deleteproduct){
      res.status(401).json({
        message:'may the product not exist'
      })
      return;
    }
    res.status(200).json({
      message:'product deleted successfully',
    })
  } catch (error) {
     res.status(500).json({
      message: "internal server from products",
      error: error.message,
    });
  }
};
