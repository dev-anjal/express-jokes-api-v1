# express-jokes-api-v1

### implimentation of one liner jokes

it returns a JSON with the ID and message, something like this

`{ "id": 36, "joke": "Why do ducks have tail feathers? To cover their buttquacks." } `

### implemented two parts joke

uri=/api/v1/get-two-part

returns

``{ "id": 57, "setup": "Why don’t robots ever panic?", "punchline": "They always keep their code in control.", "type": "computer" }``

### implemented type query for /get-two-part

eg uri /api/v1/get-two-part?type=tech

returns a random joke of type tech
``{ "id": 27, "setup": "Why was the server room so noisy?", "punchline": "Too many bytes were screaming!", "type": "tech" }``

### if the type is given wrong or outside the scope of our type of joke

returns a error with the available types

uri= http://localhost:3000/api/v1/get-two-part?type=gg

returns
`{ "message": "Invalid Type", "allowed_types": [ "tech", "internet", "ai", "developer", "programming", "computer", "hardware" ] }`

### add a new joke with post request at /api/v1/new-joke

suscess returns:

`{ "Suscess ": { "title": "itf", "joke": "seriously gg!!!", "type": "ai" } }

failiure/error returns:

`{ "Error": "Invalid Headers, send title && joke", "Format": { "title": "setup of the joke", "joke": "Punchline of the Joke", "type": "type of joke [please use only listed ones]", "allowedJokeTypes": [ "tech", "internet", "ai", "developer", "programming", "computer", "hardware" ] } }`

Futute implication : only admin previllage for Posting New Jokes and limiting requests to save server Overload
