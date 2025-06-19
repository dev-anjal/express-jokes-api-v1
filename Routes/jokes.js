const express = require('express');
const router = express.Router();

const {getJokes, getOneJoke , getTwoPartJoke}= require('../Jokes/jokes')

router.get('/get-one-liner',(req,res)=>{
res.json(getOneJoke())
})

router.get('/get-two-part', (req,res)=>{
    res.json(getTwoPartJoke())
})

module.exports=router;