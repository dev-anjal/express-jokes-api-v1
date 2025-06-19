const jokes = require('./jokes.json')

function getJokes(){
    return jokes;
}

function getOneJoke(){
    const randomNum= Math.floor(Math.random()* jokes.length);
    const joke =  jokes[randomNum];
    return joke;
}

module.exports={
    getJokes,
    getOneJoke
};