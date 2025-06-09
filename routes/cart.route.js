import express from 'express'
import { addtocart, clearcart, getcartbyid, removecart } from '../controller/cart.controller.js';

const router = express.Router();


router.get('/getcart/:id',getcartbyid)
router.post('/addcart',addtocart)
router.delete('/removecart',removecart)
router.delete('/clearcart/:id',clearcart)
export default router;