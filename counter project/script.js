//alert("js activated");
var user = document.querySelector("#user_ui");
var add = document.querySelector("#controle_increase");
var minus = document.querySelector("#contole_decrease");
var reset = document.querySelector("#controle_reset");
var counter = 0;

add.addEventListener('click', function(){
    counter++;
    console.log(counter);
    user.innerHTML = counter;
});

minus.addEventListener('click', function(){
    if (counter > -0) {
        counter--;
        console.log(counter);
        user.innerHTML = counter;
    }
});

reset.addEventListener('click', function(){
    counter = 0;
    console.log(counter);
    user.innerHTML = counter;
});

// dark mode and light mode
var current_status = 0;
var dark = document.querySelector("#controle_settings");
var icon = document.querySelector("#modeicons");
var bg = document.querySelector("#usermain");

dark.addEventListener('click', function(){
    if (current_status == 0) {
        bg.classList.remove('light');
        icon.setAttribute("src", "icons/light.svg");
        bg.classList.add('dark');
        current_status = 1;
    }else if (current_status == 1){
        bg.classList.remove('dark');
        icon.setAttribute("src", "icons/dark.svg");
        bg.classList.add('light');
        current_status = 0;
    }
});

