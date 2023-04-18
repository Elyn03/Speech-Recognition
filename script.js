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

   if(result.indexOf("ose") !== -1){
      body.style.backgroundColor = "#DB7093"
      console.log
   } else{
      body.style.backgroundColor = "#C71585"
   }
});