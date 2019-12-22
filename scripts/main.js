//change heading
let heading = document.querySelector("h1");
heading.textContent = "Vannila Js is cool";

//change image onclick
let image = document.querySelector("img");
image.onclick = function() {
    let image_update = image.getAttribute("src");
    if(image_update === "src/clock cropped.png"){
        image.setAttribute("src", "img/clock cropped.png");
    }
    else{
        image.setAttribute("src", "img/mail cropped.png");
    }
}

//local storage
//retrieve stored name using getItem("key")
//give new user by setItem("Key",value)
let my_heading = document.querySelector("h1");
let my_btn = document.querySelector("button");

function set_user() {
    let my_name = prompt("Hi User, Enter your name");
    if(!my_name || my_name === null){
        alert("Provide UserName");
        set_user();
    }
    else{
        localStorage.setItem("name", my_name);
        my_heading.textContent = `Vanilla js is cool, ${my_name}`;
    }
}

//checks for name either present already or not
if(!localStorage.getItem("name")){
    set_user();
}
else{
    let exist_my_name = localStorage.getItem("name");
    exist_my_name.textContent = `Vanilla js is cool, ${exist_my_name}`;
}

//onclick of button
my_btn.onclick = function() {
    set_user();
}


//create onclick of para
document.addEventListener("DOMContentLoaded", function() {
    
//onload prompt username
set_user();

    function dynamic(){
      let new_para = document.createElement('p');
      new_para.textContent = "Dynamic para is created";
      document.body.appendChild(new_para);
    }
    let new_btn = document.querySelectorAll(".dynamic_para");

    for(let i=0 ; i<=new_btn.length; i++){
        new_btn[i].addEventListener("click", dynamic);
    }

});