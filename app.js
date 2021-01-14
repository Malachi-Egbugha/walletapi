const express = require('express');
const morgan = require('morgan');
const connectdb = require('./config/db');
const cors = require('cors');
require('dotenv').config();
const app = express();
connectdb();


//Middlewares
app.use(morgan('dev'));
app.use(cors());
//Body Paser
app.use(express.json());
//Cookie Parser
//app.use(cookieParser());
//Routes
app.use('/user',require('./routes/user'));

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})