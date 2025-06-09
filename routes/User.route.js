import express from 'express'
import { adduser, deleteUser, getallusers, getuserbyid, updateUser } from '../controller/User.controller.js';

const router = express.Router();

router.get('/getallusers',getallusers)
router.get('/userbyid/:id',getuserbyid);
router.post('/create',adduser);

//we want to update all value so use put but for required value use patch request
router.put('/updateuser',updateUser);
router.delete('deleteuser',deleteUser);


export default router;