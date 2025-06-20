const jokes = require('./jokes.json');
const twoPartJokes = require('./jokes_with_uid_and_type.json');

const {writeJoke}=require('./jokeToFile');

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

const allTypes = ['tech','internet','ai','developer','programming','computer','hardware']

function getSpecificTypeJoke(jokeType){
    // console.log(jokeType)
    var matchedTypeJoke = []
    if(allTypes.includes((jokeType.toLowerCase()))){
        twoPartJokes.forEach(joke=>{
            
            if ((joke.type.toLocaleLowerCase()) == (jokeType.toLowerCase())){
                matchedTypeJoke.push(joke)
            }
        })
        const randomNumTemp = Math.floor(Math.random()*matchedTypeJoke.length)
        return(matchedTypeJoke[randomNumTemp])
    }
    else{
        return({message:'Invalid Type', allowed_types:allTypes})
    }
        
}

function addJokeToFile(joke){
    writeJoke(undefined,joke)
}

module.exports={
    getJokes,
    getOneJoke,
    getTwoPartJoke,
    getSpecificTypeJoke,
    addJokeToFile
};