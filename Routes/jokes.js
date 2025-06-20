const express = require('express');
const router = express.Router();

const {getJokes, getOneJoke , getTwoPartJoke , getSpecificTypeJoke,addJokeToFile}= require('../Jokes/jokes')

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

router.post('/new-joke',(req,res)=>{
    var title = req.body.title;
    var joke = req.body.joke;
    var type = req.body.jokeType;
    var allowedTypes = ['tech','internet','ai','developer','programming','computer','hardware']
    if ((!title || !joke || !type) || !allowedTypes.includes(type.toLowerCase())){
        res.json({"Error":"Invalid Headers, send title && joke",
                "Format":{"title":"setup of the joke","joke":"Punchline of the Joke","type":"type of joke [please use only listed ones]","allowedJokeTypes":['tech','internet','ai','developer','programming','computer','hardware']}
                
        });
    }
    else{
        let Finaljoke={title:title,joke:joke,type:type}

        addJokeToFile(Finaljoke)
        res.json({"Suscess ": Finaljoke})
    }

    
})

module.exports=router;