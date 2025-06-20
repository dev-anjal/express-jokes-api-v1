const fs = require('fs');
const allJokes = require('./jokes_with_uid_and_type.json')


function writeJoke(filename='jokes_with_uid_and_type.json',joke){
    let allData=allJokes;
    let id=allData.length + 1;
    let setup=joke.title;
    let punchline=joke.joke;
    let type=joke.type;
    const newJoke={
        "id":id,
        "setup":setup,
        "punchline":punchline,
        "type":type
    }
    allData.push(newJoke)
    fs.writeFileSync(`./Jokes/${filename}`,JSON.stringify(allData))
}

module.exports={
    writeJoke
}