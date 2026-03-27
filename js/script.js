const form = document.getElementById("contactForm");
const message = document.getElementById("message");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();

        message.textContent = "message sent!";
        message.style.color = "white";

        form.reset();
    });
}

const words = [
"Web Developer",
"Freelancer",
"UI Designer",
"Front-End Developer"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type(){

currentWord = words[i];

if(isDeleting){
document.getElementById("changing-text").textContent =
currentWord.substring(0,j-1);
j--;

}else{
document.getElementById("changing-text").textContent =
currentWord.substring(0,j+1);
j++;
}

if(!isDeleting && j === currentWord.length){

isDeleting = true;
setTimeout(type,1200);
return;

}else if(isDeleting && j === 0){

isDeleting = false;
i++;

if(i === words.length){
i = 0;
}

}

setTimeout(type, isDeleting ? 60 : 120);

}

type();