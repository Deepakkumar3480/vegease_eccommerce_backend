import express from 'express'
import { addwishlist, clearwishlist, getwishlist, removewishlist } from '../controller/wishlist.controller';

const router = express.Router();

router.get('/getwishlist',getwishlist);
router.post('/addwishlist',addwishlist);
router.delete('/deletewishlist',removewishlist);
router.delete('/clearwishlist',clearwishlist);


export default router;