var user = document.querySelector("#user_ui");
var user_task = document.querySelector("#user_task");
var userquery = document.querySelector("#input_user");
var add = document.querySelector("#add_event");

add.addEventListener('click',function(){
    console.log(userquery.value);
    var addelement = document.createElement("div");
    addelement.classList.add("usertask_temp");

    //internal text
    var textelement = document.createElement("p");
    textelement.classList.add("user_text");
    textelement.appendChild(document.createTextNode(userquery.value));
    addelement.appendChild(textelement);

    //internal delete anchor tag
    var delelement = document.createElement("a");
    delelement.classList.add("user_del");
    delelement.setAttribute("href","#");
    delelement.appendChild(document.createTextNode("Delete"));
    addelement.appendChild(delelement);

    //final append to main element
    user_task.appendChild(addelement);
    //resert the input
    userquery.value="";

    //add event listener to delete button
    delelement.addEventListener('click', function(e) {
        e.preventDefault();
        addelement.remove();
    });
});


