const chatArea = document.querySelector("#chatArea");
const inputField = document.querySelector("#messageInput");
const sendBtn = document.querySelector("#sendBtn");
const chatStatus = document.querySelector("#chatStatus");
//Array with fake users;
const fakeUsers = [
  "Mike",
  "Sarah",
  "Alex",
  "Emma",
  "Ghost",
  "Neo",
  "Pixel",
  "Luna",
  "Ace",
  "Shadow",
  "Nova",
  "Blaze",
  "Kai",
  "Raven",
  "Zero",
  "Jinx",
  "Skye",
  "Milo",
  "Viper",
  "Echo",
  "Storm",
  "Niko",
  "Frost",
  "Daisy",
  "Zane",
  "Ruby",
  "Atlas",
  "Ivy",
  "Cobra",
  "Venom",
  "Orion",
  "Wolf",
  "Sunny",
  "Ash",
  "Bolt",
  "Chloe",
  "Drift",
  "Flame",
  "Hunter",
  "Jade",
  "Knight",
  "Leo",
  "Maverick",
  "Nexus",
  "Onyx",
  "Phoenix",
  "Quest",
  "Rocket",
  "Titan",
  "Violet",
  "Wraith",
  "Yuki",
  "Zen",
  "Byte",
  "Crash",
  "Doom",
  "Faker",
  "Giga",
  "Hazel",
  "Inferno",
  "Jet",
  "Kraken",
  "Logic",
  "Matrix",
  "Nitro",
  "Omega",
  "Proxy",
  "Quasar",
  "Rogue",
  "Sonic",
  "Turbo",
  "Unity",
  "Volt",
  "Whisper",
  "Xeno",
  "Yoshi",
  "Zephyr"
];
//Array with random messages about frontend;
const randomMessages = [
  "JavaScript is actually fun once it clicks",
  "Why does async/await feel like magic sometimes",
  "React hooks saved my life honestly",
  "useEffect dependency array still confuses me",
  "Angular feels too heavy for small projects",
  "TypeScript makes JS feel like a real language",
  "I keep forgetting to type my interfaces in TS",
  "Bootstrap makes UI so fast to prototype",
  "CSS is 10% logic and 90% pain",
  "Flexbox finally makes sense after suffering for days",
  "Grid layout is underrated",
  "Frontend debugging is just console.log everywhere",
  "Why is my state not updating in React",
  "I miss when websites were just HTML and CSS",
  "Vite is insanely fast compared to old setups",
  "Webpack still feels like dark magic",
  "I accidentally broke my layout with one div",
  "Angular change detection is confusing but powerful",
  "React vs Angular debates never end",
  "TypeScript errors sometimes help and sometimes ruin my day",
  "Bootstrap is perfect for quick dashboards",
  "Tailwind changed how I think about styling",
  "I keep forgetting to close JSX tags",
  "Why does my API work in Postman but not in React",
  "Promises inside promises inside promises...",
  "Frontend is easy they said...",
  "Frontend is hard they said...",
  "DOM manipulation feels old school now",
  "I still console.log everything like it's 2010",
  "React re-renders are both amazing and annoying",
  "State management libraries are getting out of control",
  "Redux was scary at first but makes sense now",
  "Zustand feels like a breath of fresh air",
  "Angular services are actually pretty clean",
  "Type safety saves me from so many bugs",
  "JavaScript coercion is still weird",
  "Why does [] + [] equal ''",
  "Frontend interviews are a different kind of stress",
  "I spent 3 hours fixing one CSS bug",
  "Bootstrap breakpoints are actually useful",
  "React component structure is addictive",
  "I love building UI but hate fixing layout bugs",
  "Frontend frameworks evolve faster than I can learn them",
  "Should I learn React or Angular first?",
  "TypeScript generics are confusing but powerful",
  "Hooks rules are simple but easy to break",
  "My app works only in Chrome lol",
  "CORS errors are my worst enemy",
  "Frontend dev is just controlled chaos",
  "Every small change breaks something else",
  "I finally understood props vs state",
  "Why does my button disappear on mobile view",
  "CSS specificity is a silent killer",
  "Bootstrap saved me on deadlines multiple times"
];
//Array with random quotes;
const quotes = [
  "Simplicity is the soul of efficiency.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Fix the cause, not the symptom.",
  "Simplicity is better than complexity.",
  "The best error message is the one that never shows up.",
  "First, solve the problem. Then, write the code.",
  "Suffering is part of debugging.",
  "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
  "Programming isn’t about what you know; it’s about what you can figure out.",
  "The most dangerous phrase in the language is: ‘It works on my machine.’",
  "Debugging is like being the detective in a crime movie where you are also the murderer.",
  "Experience is the name everyone gives to their mistakes.",
  "The computer was born to solve problems that did not exist before.",
  "A good programmer is someone who always looks both ways before crossing a one-way street.",
  "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
  "The only way to learn a new programming language is by writing programs in it.",
  "Talk is cheap. Show me the code.",
  "Code never lies, comments sometimes do.",
  "Make it work, make it right, make it fast.",
  "Before software can be reusable it first has to be usable."
];
function renderMessage(username, msg) {
  //check if user is near bottom, if so auto scroll
  const isNearBottom = chatArea.scrollHeight - chatArea.scrollTop - chatArea.clientHeight < 80;

  let createMsg = document.createElement('div');
  createMsg.classList.add('message');
  //innerHTML to make !dog, !cat be clickable links
  createMsg.innerHTML = `${username}: ${msg}`;
  chatArea.appendChild(createMsg);
  if (username == "ChatBot") {
    createMsg.classList.add('chatBot');
  }
  if (isNearBottom) {
    chatArea.scrollTop = chatArea.scrollHeight;
    chatStatus.innerText = "";
  } else {
    chatStatus.innerText = "Chat paused due to scroll";
  }
}

function sendMessage() {
  let msg = inputField.value.trim();
  if (msg === "") {
    return;
  }
  else if (msg.length > 500) {
    return;
  }

  renderMessage("Me", msg);
  botMessage(msg);
  inputField.value = "";

}

sendBtn.addEventListener('click', () => {
  sendMessage();
});

inputField.addEventListener('keydown', (e) => {
  if (e.key == "Enter") {
    sendMessage();
  }
});

function simulateMessage() {

  //get random index for arrays
  let randomUserIndex = Math.floor(Math.random() * fakeUsers.length);
  let randomMessageIndex = Math.floor(Math.random() * randomMessages.length);
  //get random user with the random index
  let randomUser = fakeUsers[randomUserIndex];
  let randomMessage = randomMessages[randomMessageIndex];

  //delay is 1-5s 
  let timeoutDelay = Math.floor(Math.random() * 4000) + 100;

  renderMessage(randomUser, randomMessage);
  setTimeout(simulateMessage, timeoutDelay);
}

simulateMessage();

async function botMessage(msg) {
  if (msg === "!commands") {
    renderMessage("ChatBot", "List of commands: !joke, !quote, !fact, !dog, !cat, !weather(varna only currently)");
  }
  else if (msg === "!joke") {
    const apires = await fetch("https://official-joke-api.appspot.com/random_joke");
    if (!apires.ok) {
      console.log('Joke API fail')
      renderMessage("ChatBot", "Joke data unavailable");
      return;
    }
    const data = await apires.json();
    renderMessage("ChatBot", `${data.setup} - ${data.punchline}`);
  }
  else if (msg === "!quote") {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex]
    renderMessage("ChatBot", `"${quote}"`);
  }
  else if (msg === "!fact") {
    const apires = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");
    const data = await apires.json();
    if (!apires.ok) {
      console.log('Fact API fail')
      renderMessage("ChatBot", "Fact data unavailable");
      return;
    }
    renderMessage("ChatBot", `${data.text}`);
  }
  else if (msg === "!dog") {
    const apires = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await apires.json();
    if (!apires.ok) {
      console.log('Dog API fail')
      renderMessage("ChatBot", "Dog data unavailable");
      return;
    }

    renderMessage("ChatBot", `<a href="${data.message}" target="_blank">${data.message}</a>`);
  }
  else if (msg === "!cat") {
    const apires = await fetch("https://api.thecatapi.com/v1/images/search")
    const data = await apires.json();
    if (!apires.ok) {
      console.log('Cat API fail')
      renderMessage("ChatBot", "Cat data unavailabel");
      return;
    }

    renderMessage("ChatBot", `<a href="${data[0].url}" target="_blank">${data[0].url}</a>`);
  }
  //hard coded with coords to Varna
  else if (msg === "!weather") {
    const apires = await fetch("https://api.open-meteo.com/v1/forecast?latitude=43.2141&longitude=27.9147&current_weather=true")
    const data = await apires.json();
    if (!apires.ok) {
      console.log('Weather API fail')
      renderMessage("ChatBot", "Weather data unavailable");
      return;
    }

    const temp = data.current_weather.temperature;
    const wind = data.current_weather.windspeed;
    renderMessage("ChatBot", `Temp: ${temp}C | Windspeed: ${wind} km/h`);
  }
}

