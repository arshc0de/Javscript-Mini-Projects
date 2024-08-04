//temp variable whrere actual calulation perform
var temp ="";
//user screen calculation interface
var user_screen = document.querySelector("#user_ui");
//user maths opration
var btn_ac = document.querySelector("#sym_clear");
var btn_open = document.querySelector("#sym_open");
var btn_close = document.querySelector("#sym_close");
var btn_plus = document.querySelector("#sym_plus");
var btn_minus = document.querySelector("#sym_minus");
var btn_product = document.querySelector("#sym_product");
var btn_divide = document.querySelector("#sym_division");
var btn_dot = document.querySelector("#sym_dot");
var btn_result = document.querySelector("#sym_result");

btn_plus.addEventListener('click',function(){
    user_screen.append("+");
    temp +="+";
});
btn_minus.addEventListener('click',function(){
    user_screen.append("-");
    temp +="-";
});
btn_product.addEventListener('click',function(){
    user_screen.append("X");
    temp +="*";
});
btn_divide.addEventListener('click',function(){
    user_screen.append("/");
    temp +="/";
});
btn_dot.addEventListener('click',function(){
    user_screen.append(".");
    temp += ".";
});
btn_open.addEventListener('click',function(){
    user_screen.append("(");
    temp +="(";
});
btn_close.addEventListener('click',function(){
    user_screen.append(")");
    temp +=")";
});
btn_ac.addEventListener('click',function(){
    user_screen.innerText="";
    temp ="";
    console.log("reset valuse is "+temp);
});

//user numeric value buttons
var btn_1 = document.querySelector("#btn_1");
var btn_2 = document.querySelector("#btn_2");
var btn_3 = document.querySelector("#btn_3");
var btn_4 = document.querySelector("#btn_4");
var btn_5 = document.querySelector("#btn_5");
var btn_6 = document.querySelector("#btn_6");
var btn_7 = document.querySelector("#btn_7");
var btn_8 = document.querySelector("#btn_8");
var btn_9 = document.querySelector("#btn_9");
var btn_0 = document.querySelector("#btn_0");


btn_1.addEventListener('click',function(){
    user_screen.append("1");
    temp +="1";
    console.log(temp);
});
btn_2.addEventListener('click',function(){
    user_screen.append("2");
    temp +="2";
    console.log(temp);
});
btn_3.addEventListener('click',function(){
    user_screen.append("3");
    temp +="3";
});
btn_4.addEventListener('click',function(){
    user_screen.append("4");
    temp +="4";
});
btn_5.addEventListener('click',function(){
    user_screen.append("5");
    temp +="5";
});
btn_6.addEventListener('click',function(){
    user_screen.append("6");
    temp +="6";
});
btn_7.addEventListener('click',function(){
    user_screen.append("7");
    temp +="7";
});
btn_8.addEventListener('click',function(){
    user_screen.append("8");
    temp +="8";
});
btn_9.addEventListener('click',function(){
    user_screen.append("9");
    temp +="9";
});
btn_0.addEventListener('click',function(){
    user_screen.append("0");
    temp +="0";
});


// result 
btn_result.addEventListener('click',function(){
    user_screen.innerText=eval(temp);
    console.log(eval(temp));
});