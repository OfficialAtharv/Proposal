// ============================
// GLOBAL STATE
// ============================

const pages = document.querySelectorAll(".page");
const progressBar = document.getElementById("progressBar");

let travelChoice = "";
let placeChoice = "";
let foodChoices = [];

const pageOrder = [
    "landing",
    "proposal",
    "travel",
    "place",
    "food",
    "love",
    "ticket"
];

// ============================
// PAGE NAVIGATION
// ============================

function nextPage(id) {

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const page = document.getElementById(id);

    page.classList.add("active");

    updateProgress(id);

    if (window.gsap) {

        gsap.from(page.querySelector(".glass"), {

            opacity:0,
            y:40,
            scale:0.9,
            duration:0.6,
            ease:"power2.out"

        });

    }

}

// ============================
// PROGRESS BAR
// ============================

function updateProgress(id){

    let index = pageOrder.indexOf(id);

    let percent = (index/(pageOrder.length-1))*100;

    progressBar.style.width = percent + "%";

}

// ============================
// FLOATING HEARTS
// ============================

const emojis = ["❤️","💕","💖","💗","💓"];

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize = (18+Math.random()*20)+"px";

    heart.style.animationDuration = (4+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,300);

// ============================
// NO BUTTON
// ============================

const noBtn = document.getElementById("noBtn");

const funnyText = document.getElementById("funnyText");

const funnyMessages=[

"Please 🥺",

"Think Again ❤️",

"Food is on me 🍕",

"I'll behave 😌",

"You're too cute to say No ❤️",

"Almost there 😂",

"Only YES works 😜"

];

let noCount=0;

function moveButton(){

    noCount++;

    funnyText.innerHTML = funnyMessages[Math.min(noCount-1,funnyMessages.length-1)];

    const x=(Math.random()*250)-125;

    const y=(Math.random()*120)-60;

    noBtn.style.transform=`translate(${x}px,${y}px)`;

    if(noCount>=7){

        noBtn.style.display="none";

        funnyText.innerHTML="See... Destiny wanted YES ❤️";

    }

}

noBtn.addEventListener("mouseover",moveButton);

noBtn.addEventListener("click",moveButton);

// ============================
// TRAVEL
// ============================

function removeSelection(parent){

    parent.querySelectorAll(".card").forEach(card=>{

        card.classList.remove("selected");

    });

}

function selectTravel(value,element){

    removeSelection(document.getElementById("travel"));

    element.classList.add("selected");

    travelChoice=value;

}

// ============================
// PLACE
// ============================

function selectPlace(value,element){

    removeSelection(document.getElementById("place"));

    element.classList.add("selected");

    placeChoice=value;

}

// ============================
// FOOD
// ============================

function toggleFood(element,item){

    element.classList.toggle("active");

    if(foodChoices.includes(item)){

        foodChoices=foodChoices.filter(x=>x!==item);

    }

    else{

        foodChoices.push(item);

    }

}

// ============================
// LOVE SLIDER
// ============================

const slider=document.getElementById("loveSlider");

const loveValue=document.getElementById("loveValue");

slider.addEventListener("input",()=>{

    slider.value=100;

    loveValue.innerHTML="100% ❤️";

});

// ============================
// TICKET
// ============================

function showTicket(){

    nextPage("ticket");

    let food="";

    if(foodChoices.length===0){

        food="Anything with You ❤️";

    }

    else{

        food=foodChoices.join(", ");

    }

    document.getElementById("summary").innerHTML=`

    <p>📅 <b>Date :</b> Sunday Evening</p>

    <p>🚇 <b>Travel :</b> ${travelChoice || "Your Choice ❤️"}</p>

    <p>🌸 <b>Place :</b> ${placeChoice || "Anywhere Together ❤️"}</p>

    <p>🍕 <b>Food :</b> ${food}</p>

    <hr style="margin:18px 0;opacity:.4;">

    <p style="font-size:20px;line-height:1.8;">

    Looking forward to spending one beautiful evening with the most beautiful girl ❤️

    </p>

    `;

    confettiBlast();

}

// ============================
// CONFETTI
// ============================

function confettiBlast(){

    if(typeof confetti==="undefined") return;

    confetti({

        particleCount:250,

        spread:160,

        startVelocity:40,

        origin:{y:0.65}

    });

}

// ============================
// RANDOM COMPLIMENTS
// ============================

const compliments=[

"You're the prettiest ❤️",

"I can't wait to see you 😊",

"You make every place special 🌸",

"One smile from you = Best Day ❤️",

"You look cutest when you smile 😍",

"Still my favourite person ❤️"

];

setInterval(()=>{

    const subtitle=document.querySelector(".page.active .subtitle");

    if(subtitle){

        subtitle.innerHTML=compliments[Math.floor(Math.random()*compliments.length)];

    }

},7000);

// ============================
// GSAP ENTRY
// ============================

window.onload=()=>{

    updateProgress("landing");

    if(window.gsap){

        gsap.from(".glass",{

            y:50,

            opacity:0,

            duration:1,

            ease:"power3.out"

        });

    }

};