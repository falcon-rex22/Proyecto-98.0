//Aquí estamos guardando en una variable lo que esté en la API que cambia mi voz a texto
var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();

var variable = document.getElementById("result1")

function start(){
    variable.innerHTML = "";
    Recognition.start()
}

Recognition.onresult = function(event){
    console.log(event);
    var palabra = event.results[0][0].transcript;
    variable.innerHTML = palabra;
    if(palabra == "Toma mi selfie"){
        speak()
    }
}

function speak(){
    var synth = window.speechSynthesis;
    var speakData = "No tomaré nada jajajajajajaja";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

var result1 = document.getElementById("camera");

Webcam.set({
    width:360,
    heigth:250,
    image_format:"jpeg",
    jpeg_quality:90
})