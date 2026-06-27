// =======================================
// DATE WITH MY LOVE ❤️
// script.js (PART 1)
// =======================================

// -------------------------------
// Global Variables
// -------------------------------

const screens = document.querySelectorAll(".screen");

const progress = document.getElementById("progress");

const ticketContent = document.getElementById("ticketContent");

const statusText = document.getElementById("status");

const noBtn = document.getElementById("noBtn");

const loveSlider = document.getElementById("loveSlider");

const loveValue = document.getElementById("loveValue");

let selectedTravel = "";
let selectedPlace = "";
let selectedFoods = [];

let noClicks = 0;

const pageOrder = [
    "landing",
    "intro",
    "proposal",
    "travel",
    "place",
    "food",
    "love",
    "ticket"
];

// -------------------------------
// Progress Bar
// -------------------------------

function updateProgress(id){

    const index = pageOrder.indexOf(id);

    const percent =
    (index/(pageOrder.length-1))*100;

    progress.style.width = percent+"%";

}

// -------------------------------
// Page Navigation
// -------------------------------

function goTo(id){

    screens.forEach(screen=>{

        screen.classList.remove("active");

    });

    const target =
    document.getElementById(id);

    target.classList.add("active");

    updateProgress(id);

    if(window.gsap){

        gsap.fromTo(

            target.querySelector(".glass"),

            {

                opacity:0,

                scale:.9,

                y:40

            },

            {

                opacity:1,

                scale:1,

                y:0,

                duration:.6,

                ease:"power2.out"

            }

        );

    }

}

// -------------------------------
// Floating Hearts
// -------------------------------

const heartContainer =
document.getElementById("hearts");

const heartEmoji = [

"❤️",
"💕",
"💖",
"💗",
"💓"

];

function createHeart(){

    const heart =
    document.createElement("div");

    heart.className="heart";

    heart.innerHTML =
    heartEmoji[
        Math.floor(
            Math.random()*heartEmoji.length
        )
    ];

    heart.style.left =
    Math.random()*100+"vw";

    heart.style.fontSize =
    (18+Math.random()*18)+"px";

    heart.style.animationDuration =
    (5+Math.random()*4)+"s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,350);

// -------------------------------
// Funny NO Button
// -------------------------------

const messages=[

"Please 🥺",

"Think Again ❤️",

"Food is on me 🍕",

"I'll bring chocolates 🍫",

"You look prettier when you smile 😊",

"Just one date? ❤️",

"Okay... only YES left 😂"

];

function moveNoButton(){

    noClicks++;

    statusText.innerHTML =
        messages[Math.min(noClicks-1, messages.length-1)];

    const container =
        document.querySelector(".btn-group");

    const containerRect =
        container.getBoundingClientRect();

    const btnRect =
        noBtn.getBoundingClientRect();

    const maxX =
        containerRect.width - btnRect.width;

    const maxY =
        containerRect.height - btnRect.height;

    if(maxX <= 0 || maxY <= 0){

        return;

    }

    const x =
        Math.random()*maxX;

    const y =
        Math.random()*maxY;

    noBtn.style.position="absolute";

    noBtn.style.left=x+"px";

    noBtn.style.top=y+"px";

    noBtn.style.transform="none";

    if(noClicks>=7){

        noBtn.style.display="none";

        statusText.innerHTML="Okay 😂❤️ Only YES remains.";

    }

}
if(window.innerWidth>768){

    noBtn.addEventListener(
        "mouseenter",
        moveNoButton
    );

}

noBtn.addEventListener(
    "click",
    moveNoButton
);

noBtn.addEventListener(
    "touchstart",
    moveNoButton
);

// -------------------------------
// Card Selection Helper
// -------------------------------

function clearCards(parent){

    parent
    .querySelectorAll(".card")
    .forEach(card=>{

        card.classList.remove("selected");

    });

}

// -------------------------------
// Travel
// -------------------------------

function selectTravel(value,element){

    clearCards(

        document.getElementById("travel")

    );

    element.classList.add("selected");

    selectedTravel=value;

}

// -------------------------------
// Place
// -------------------------------

function selectPlace(value,element){

    clearCards(

        document.getElementById("place")

    );

    element.classList.add("selected");

    selectedPlace=value;

}

// -------------------------------
// Initial Animation
// -------------------------------

window.onload=()=>{

    updateProgress("landing");

    if(window.gsap){

        gsap.from(

            ".glass",

            {

                y:40,

                opacity:0,

                duration:.8,

                ease:"power2.out"

            }

        );

    }

};
// =======================================
// PART 2
// =======================================

// -------------------------------
// Food Selection
// -------------------------------

function toggleFood(element,item){

    element.classList.toggle("active");

    if(selectedFoods.includes(item)){

        selectedFoods =
        selectedFoods.filter(f=>f!==item);

    }

    else{

        selectedFoods.push(item);

    }

}

// -------------------------------
// Love Slider
// -------------------------------

if(loveSlider){

    loveSlider.addEventListener("input",()=>{

        loveSlider.value=100;

        loveValue.innerHTML="100% ❤️";

    });

}

// -------------------------------
// Generate Ticket
// -------------------------------

function showTicket(){

    goTo("ticket");

    let foods="";

    if(selectedFoods.length===0){

        foods="Anything with You ❤️";

    }

    else{

        foods=selectedFoods.join(", ");

    }

    ticketContent.innerHTML=

    `

    <p>📅 <strong>Date</strong> : Sunday Evening</p>

    <p>🚇 <strong>Travel</strong> : ${selectedTravel||"Your Choice ❤️"}</p>

    <p>🌸 <strong>Place</strong> : ${selectedPlace||"Anywhere Together ❤️"}</p>

    <p>🍕 <strong>Food</strong> : ${foods}</p>

    <hr style="margin:20px 0;opacity:.3;">

    <p>

    Thank you for saying

    <strong>YES ❤️</strong>

    <br><br>

    Now all that's left is

    to make beautiful memories

    together.

    </p>

    `;

    celebrate();

}

// -------------------------------
// Confetti
// -------------------------------

function celebrate(){

    if(typeof confetti==="undefined") return;

    confetti({

        particleCount:180,

        spread:100,

        startVelocity:35,

        origin:{y:.65}

    });

    setTimeout(()=>{

        confetti({

            particleCount:120,

            angle:60,

            spread:80,

            origin:{x:0}

        });

        confetti({

            particleCount:120,

            angle:120,

            spread:80,

            origin:{x:1}

        });

    },250);

}

// -------------------------------
// Random Floating Compliments
// -------------------------------

const compliments=[

"You're the prettiest ❤️",

"I can't wait to see you 😊",

"You make every place beautiful 🌸",

"My favourite place is beside you ❤️",

"You're my sunshine ☀️",

"You have the cutest smile 😍",

"I already know you'll look amazing ❤️"

];

setInterval(()=>{

    const active=document.querySelector(".screen.active p");

    if(!active) return;

    if(active.classList.contains("typing")) return;

    if(active.id==="status") return;

    if(Math.random()>.55){

        active.innerHTML=

        compliments[

            Math.floor(

                Math.random()*compliments.length

            )

        ];

    }

},9000);

// -------------------------------
// Keyboard Support
// -------------------------------

document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        const active=document.querySelector(".screen.active");

        const btn=active.querySelector(".primary");

        if(btn){

            btn.click();

        }

    }

});

// -------------------------------
// Touch Support
// -------------------------------

let touchStartX=0;

document.addEventListener("touchstart",(e)=>{

    touchStartX=e.touches[0].clientX;

});

document.addEventListener("touchend",(e)=>{

    const diff=

    e.changedTouches[0].clientX-touchStartX;

    if(Math.abs(diff)>120){

        // Reserved for future swipe support

    }

});

// -------------------------------
// Restart Helper
// -------------------------------

function restart(){

    location.reload();

}

// -------------------------------
// Make Functions Global
// -------------------------------

window.goTo=goTo;

window.selectTravel=selectTravel;

window.selectPlace=selectPlace;

window.toggleFood=toggleFood;

window.showTicket=showTicket;

window.celebrate=celebrate;

window.restart=restart;
