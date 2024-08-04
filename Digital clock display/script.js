
//using dom to target divs
var hours_ui = document.querySelector("#hour");
var minutes_ui = document.querySelector("#minutes");
var seconds_ui = document.querySelector("#seconds");
var status_day = document.querySelector("#status_day");
setInterval(function () {
    // proper functioning
    var date = new Date();
    var clock_hours = date.getHours();
    var clock_minutes = date.getMinutes();
    var clock_seconds = date.getSeconds();
    if(clock_hours>1 && clock_hours<12){
        status_day.innerText="AM";
    }else{
        status_day.innerText="PM";
    }
    if(clock_hours<10){
        clock_hours="0"+clock_hours;
    };
    if(clock_seconds<10){
        clock_seconds="0"+clock_seconds;
    };
    const day = date.getUTCDate();
    console.log("today is"+ day);
    hours_ui.innerText = clock_hours;
    minutes_ui.innerText = clock_minutes;
    seconds_ui.innerText = clock_seconds;
}, 100);