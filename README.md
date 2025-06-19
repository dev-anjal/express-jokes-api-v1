# express-jokes-api-v1

currently you get a one liner joke if you go to the route /api/v1/get-one-liner

it returns a JSON with the ID and message, something like this

{
  "id": 36,
  "joke": "Why do ducks have tail feathers? To cover their buttquacks."
}

implemented two parts joke

uri=/api/v1/get-two-part

returns

{
  "id": 57,
  "setup": "Why don’t robots ever panic?",
  "punchline": "They always keep their code in control.",
  "type": "computer"
}