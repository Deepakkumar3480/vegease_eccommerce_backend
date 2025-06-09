import express from 'express'
import { createproduct, getallproducts, getproductbycategory, getproductbyid, removeproduct, updateproduct } from '../controller/Product.controller.js';

const router = express.Router();

router.get('/getallproducts',getallproducts)
router.get('/getproductbyid/:id',getproductbyid);
router.get('/getproductbycategory',getproductbycategory);
router.post('/create',createproduct);
router.patch('/updateproduct/:id',updateproduct);
router.delete('/deleteproduct/:id',removeproduct)



export default router;