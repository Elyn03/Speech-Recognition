var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var resultElement = document.getElementById('result');
const body = document.getElementById('body')

var recognition = new webkitSpeechRecognition();

recognition.lang = window.navigator.language;
recognition.interimResults = true;

startButton.addEventListener('click', () => {
   recognition.start();
});

stopButton.addEventListener('click', () => {
   recognition.stop();
});

recognition.addEventListener('result', (event) => {
   console.log(event)
   const result = event.results[event.results.length - 1][0].transcript;
   resultElement.textContent = result;

   if(result.indexOf("lapin") !== -1 || result.indexOf("Lapin") !== -1){
      body.style.backgroundImage = "none"
      body.style.backgroundImage = "url(\"rabbit.jpg\")"
      body.style.backgroundSize = "cover"
      console.log
   } else{
      body.style.backgroundImage = "none"
      body.style.backgroundColor = "#FFB2B2"
   }

});