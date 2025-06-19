const jokes = require('./jokes.json');
const twoPartJokes = require('./jokes_with_uid_and_type.json');

function getJokes(){
    return jokes;
}

function getRandomNumber(x){
    let randomNum= Math.floor(Math.random()*x)
    return randomNum;
}


function getOneJoke(){
    var randomNum= getRandomNumber(50);
    const joke =  jokes[randomNum];
    return joke;
}

function getTwoPartJoke(cat=null){
    if(cat==null){
        const randomNum = getRandomNumber(100);
        const joke = twoPartJokes[randomNum];
        return joke;
    }
}

module.exports={
    getJokes,
    getOneJoke,
    getTwoPartJoke
};