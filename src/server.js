'use strict'

const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const clothesRouter = require('./routes/clothes.route');
const foodRouter = require('./routes/food.route');
const logger = require('./middleware/logger');

const pageNotFound = require('./error-handelers/404');
const errorHandeler = require('./error-handelers/500')

app.use(express.json());

app.use(clothesRouter)
app.use(foodRouter)
app.use(logger)
app.get('/',(req,res)=>{
    res.status(200).send('home working fine')
})

app.use('*',pageNotFound)
app.use(errorHandeler)

function start() {
    app.listen(PORT,()=>{
        console.log(`listning to ${PORT}`);
    })
}

module.exports = {
    app,
    start
}