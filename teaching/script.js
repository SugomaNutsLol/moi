//
const body = document.querySelector("body");

const inst = document.getElementById("instructions");



body.addEventListener("mousemove", (event) => {
    const {clientX, clientY} = event
    console.log("X ja Y coordinaatit: " + clientX, clientY);
})



inst.addEventListener("mouseenter", enterFn);
function enterFn(){
    console.log("Meni ohjeiden päälle");
    inst.style.backgroundColor = "blue";
    inst.style.color = "white";
    inst.innerHTML = "Instructions";
}

inst.addEventListener("mouseleave", leaveFn)
function leaveFn(){
    inst.style.backgroundColor = "white";
    inst.style.color = "black";
    inst.innerHTML = "Ohjeita";
}

const push = document.getElementById("pushed");

push.addEventListener("click", muutateksti);
function muutateksti(){
    push.innerHTML = "pushed";
}

const green = document.getElementById("greenBtn");
green.addEventListener("click", muutavihreaksi);
function muutavihreaksi(){
    body.style.backgroundColor = "green";
}

const yellow = document.getElementById("yellowBtn");
yellow.addEventListener("click", muutakeltaiseksi);
function muutakeltaiseksi(){
    body.style.backgroundColor = "yellow";
}

const white = document.getElementById("whiteBtn");
white.addEventListener("click", muutavalkoiseksi);
function muutavalkoiseksi(){
    body.style.backgroundColor = "white";
}


// tehtävä 4

const teksti = document.getElementsByClassName("teksti");

for(var i = 0; i < teksti.length; i++) {
    teksti[i].addEventListener("click", muutapunaiseksi);
}


function muutapunaiseksi(event){
    
    event.target.style.color = "red"
}


 // tehtävä 5

 const eläimet = ["hirvi", "karhu", "orava", "käärme", "apina", "norsu", "hämähäkki"];
 const olList = document.getElementById("moi");

eläimet.forEach(listFunc);
    function listFunc(el) {
        const li = document.createElement('li');
        li.innerHTML = el;
        olList.appendChild(li);
    }