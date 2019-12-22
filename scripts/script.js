//heading content and 
let heading  = document.querySelector("h1");

//DOMContentLoaded
document.addEventListener("DOMContentLoaded" , onload_fun);

function onload_fun(){
    let user_name = prompt(`Enter your name`);
    if(!user_name || user_name === null){
        alert(`Name is manditory`);
        onload_fun();
    }
    else{
        heading.textContent = `Welcome to Js ${user_name}`;
    }
}

//change image
let my_image = document.querySelector("img");
my_image.addEventListener("click" , function(){
    let my_src = my_image.getAttribute("src");
    if(my_src === "src/clock cropped.png"){
        my_image.setAttribute("src" , "img/clock cropped.png");
    }
    else{
        my_image.setAttribute("src" , "img/mail cropped.png");
    }
});

//change user name and store it locally
let change_user = document.querySelector(".change_user");
change_user.addEventListener("click" , function(){
    let new_user_name = prompt(`Enter your name`);
    if(!new_user_name || new_user_name === null){
        onload_fun();
    }
    else{
        localStorage.setItem("name" , new_user_name);
        heading.textContent = `Welcome to Js ${new_user_name}`;
    }
});

//check the name in local storage
if(!localStorage.getItem("name")){
    onload_fun();
}
else{
    let existing_user = localStorage.getItem("name");
        existing_user.textContent = `Welcome to Js ${existing_user}`;
}

//create a dynamic para
let nav_ul = document.querySelector("nav ul");
    nav_ul.textContent = " ";

let para = document.querySelector(".dynamic_para");
    para.addEventListener("click" , function(){
        let new_ele = document.createElement("li");
        new_ele.textContent = "I am Dynamic";
        nav_ul.appendChild(new_ele);
    });
