var user_data = document.querySelector("#user_text");
var user_play = document.querySelector("#user_play");
var user_pause = document.querySelector("#user_pause");
var user_resume = document.querySelector("#user_resume");

user_play.addEventListener('click',()=>{
    speechSynthesis.cancel();
    console.log("clicked");
    var data = user_data.value;
    var msg = new SpeechSynthesisUtterance(data);
    const synth = window.speechSynthesis;
    synth.speak(msg);
    //speechSynthesis.cancel();
});
user_pause.addEventListener('click',()=>{
    window.speechSynthesis.pause();
});
user_resume.addEventListener('click',()=>{
    window.speechSynthesis.resume();
});
