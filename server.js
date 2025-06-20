const express = require('express');
const {getJokes, getOneJoke}= require('./Jokes/jokes')
const app = express();
const jokesRouter= require('./Routes/jokes')


// middlewares
app.use(express.json())

// Routes
app.get('/',(req,res)=>{
res.json({message:'hello please go to /api/v1/one-liner-jokes'})
res.status(404)
})

app.use('/api/v1',jokesRouter)



app.listen(3000,()=>{
    console.log("app listening at: http://localhost:3000")
})
