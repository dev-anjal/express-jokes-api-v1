const express = require('express');
const router = express.Router();

const {getJokes, getOneJoke}= require('../Jokes/jokes')

router.get('/get-one-liner',(req,res)=>{
res.json(getOneJoke())
})

module.exports=router;