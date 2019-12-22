//change h1
let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello Vanilla Js";



//change image if had different src
let myImage = document.querySelector("img");
myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "src/clock cropped.png"){
        myImage.setAttribute("src" , "img/clock cropped.png");
    }
    else{
        myImage.setAttribute("src" , "img/mail cropped.png");
    }
}



//change background color
function color(){
    document.body.style.backgroundColor = "black";
    if(document.body.style.backgroundColor != "white"){
        document.body.style.color = "white";
    }
    else{
        document.body.style.color = "black";
    }
};

let my_Color_Change_Button = document.querySelectorAll(".change_background_color");

for(let j = 0 ; j < my_Color_Change_Button.length ; j++){
    my_Color_Change_Button[j].addEventListener("click" , color);
}



//local storage
//store a new name using setItem("key", value)
//retrieve the username using getItem("key")
function setUser() {
    let userName = prompt("Enter your name");
    if(!userName || userName === null){
        alert("Please provide username");
        setUser();
    }
    else{
        localStorage.setItem("name", userName);
        myHeading.textContent = `Hello Vanilla Js I'm ${userName}`;
    }
}

//If no user found in local it create, else it takes fom localStorage
    if(!localStorage.getItem("name")) {
        setUser();
    }
    else{
        let existUser = localStorage.getItem("name");
        existUser.textContent = `Hello Vanilla Js I'm ${existUser}`;
    }

//onclick for setting username
let my_User_Change_Button = document.querySelectorAll(".change_user");

for(let k = 0 ; k < my_User_Change_Button.length ; k ++){
    my_User_Change_Button[k].addEventListener("click", setUser);
}



//create onclick of dynamic para with DOMContentLoaded
document.addEventListener("DOMContentLoaded" , function() {

    //prompt the username for setUser
    setUser();

    //function for creating dynamic para
    function dynamic_Para(){
        let newPara = document.createElement("p");
        newPara.textContent = `I'm Dynamically created`;
        document.body.appendChild(newPara);
    }

    //onclick for para
    let my_Para_Button = document.querySelectorAll(".dynamic_para");

    //best way to use is using for loop on each click
    for(let i = 0 ; i < my_Para_Button.length ; i ++){
        my_Para_Button[i].addEventListener("click" , dynamic_Para);
    }
});