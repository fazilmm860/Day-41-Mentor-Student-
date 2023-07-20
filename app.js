const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const connectDB = require('./config/config')
const app = express();
dotenv.config()

//Routes
const student = require('./routes/student')
const auth = require('./routes/auth')

//db config
connectDB();

const port = process.env.PORT



const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.use('/api/mentor', student)
app.use('/api/mentor', auth)


app.listen(port, () => {
    console.log(`App is running on port:${port}`);
})