const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const connectDB = require('./config/config')
const app = express();
dotenv.config()

//db config
connectDB();

const port = process.env.PORT



const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.get('/api/mentor', (req, res) => {
    res.send(`<h1>STUDENT MENTOR API</h1>`)
});

app.listen(port, () => {
    console.log(`App is running on port:${port}`);
})