const express = require('express');
const router = express.Router();

const {getJokes, getOneJoke , getTwoPartJoke , getSpecificTypeJoke}= require('../Jokes/jokes')

router.get('/get-one-liner',(req,res)=>{
res.json(getOneJoke())
})

router.get('/get-two-part', (req,res)=>{
    if(req.query.type !=null){
        res.json(getSpecificTypeJoke(req.query.type))
    }
    else{
    res.json(getTwoPartJoke())
    }
})

module.exports=router;