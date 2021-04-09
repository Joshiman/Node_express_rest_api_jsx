import express from 'express';

import { v4 as uuidv4 } from 'uuid';

import { getUsers , createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();



// now /users on the server inheret from app.use 
router.get('/', getUsers)

// adding users to our app
router.post('/', createUser )

//  by adding : can take anyting after /user/ => req.params {id:2}
router.get('/:id', getUser)


router.delete('/:id' , deleteUser)

router.patch('/:id' , updateUser)





export default router;