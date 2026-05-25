Description:
Simulated chat application for uni course work. Contains simulated chats, simulated bot response that uses API fetch and responds to multiple commands.

Examples:
!joke - returns a joke,
!quote(made with hardcoded array because API CORS policy problem),
!dog - image link of a dog,
!cat - image link of a cat,
!weather - hard coded for Varna only temp and wind speed

API Used:
-Joke API 
https://github.com/15Dkatz/official_joke_api
"https://official-joke-api.appspot.com/random_joke"
returns 
{
 "setup": "...",
 "punchline" : "..."
}

-Dog CEO API
https://dog.ceo/dog-api/
"https://dog.ceo/api/breeds/image/random"
returns
{
 "message": "image url",
 "status" : "success"
}

-Cat API
https://thecatapi.com/
"https://api.thecatapi.com/v1/images/search"
returns
[
 {"url" : "image url"}
]

-Weather API
https://open-meteo.com/
"https://api.open-meteo.com/v1/forecast
returns
{
 "current_weather": {
  "temperature" : 0,
  "windspeed" : 0
}
}


