import express from "express";
import bodyParser from "body-parser";

import usersRoutes from './routes/users.js'

const app = express();
const PORT = 5000;

// bodyParser should be called befor the Routes to enable the post req
app.use(bodyParser.json());

// all routes here start with /users, so need to add extra users ...
app.use('/users', usersRoutes)

// app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => res.send('Hello from home page'))

app.listen(PORT, ()=> console.log(`Server listening  on port: http://localhost:${PORT}`));