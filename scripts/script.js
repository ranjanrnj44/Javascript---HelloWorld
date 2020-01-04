//heading and button
let heading  = document.querySelector(`h1`);
heading.textContent = ` `;
let usr_btn = document.querySelector(`.change_user`);
//DOMContentLoaded
window.addEventListener(`DOMContentLoaded` , prompt_me);

//prompt function, also set localStorage to store name
function prompt_me(){
    let username = prompt(`Hi there, Enter your name`);
    if((!username) || (username === null)){
        alert(`Username is necessary`);
        prompt_me();
    }
    else{
        localStorage.setItem(`name` , username);
        heading.textContent = `Hi ${username.toUpperCase()}, Welcome`;
    }
}
//localStorage
if(!localStorage.getItem(`name`)){
    prompt_me();
}else{
    let existing_username = localStorage.getItem(`name`);
    heading.textContent = `Hi ${existing_username.toUpperCase()}, Welcome`;
}

//give access once button is clicked
usr_btn.addEventListener(`click` , prompt_me);

//change image
let my_img = document.querySelector(`img`);
my_img.addEventListener(`click` , function(){
    let my_src = my_img.getAttribute(`src`);
    if(my_src === `img/clock cropped.png`){
        my_img.setAttribute(`src` , `img/mail cropped.png`);
    }
    else{
        my_img.setAttribute(`src` , `img/clock cropped.png`);
    }
});

//create dynamic_para
function dynam(){
    let list = document.querySelector(`nav ul`);
    let para = document.createElement(`p`);
    para.textContent = `I am Dynamic`;
    list.appendChild(para);
}

let dyn_btn = document.querySelector(`.dynamic_para`);
dyn_btn.addEventListener(`click` , dynam);

//dynamic bg color
function random(clr){
    return Math.floor(Math.random()*clr);
}

let clr_btn = document.querySelector(`.change_background_color`);
clr_btn.addEventListener(`click` , function(){
    let rand = `rgb(${random(123)} ${random(223)} ${random(163)})`;
    document.body.style.backgroundColor = rand;
});