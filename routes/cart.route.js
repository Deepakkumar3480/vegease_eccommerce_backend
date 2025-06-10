import express from 'express'
import { addtocart, clearcart, getallcart, getcartbyid, removecart } from '../controller/cart.controller.js';

const router = express.Router();

// router.get('/getallcart',getallcart)
router.get('/getcart/:id',getcartbyid)
router.post('/addcart',addtocart)
router.delete('/removecart/:id',removecart)
router.delete('/clearcart/:id',clearcart)
export default router;