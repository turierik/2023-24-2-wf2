// ESEMÉNYKEZELÉS

// 1. kigyűjteni minden érintett elemet (bemenet, kimenet, trigger)
const p = document.querySelector("p")
const button = document.querySelector("button")

// 2. meg kell írni, hogy mi történjen - egy fv.
function pluszEgy(){
    p.innerText = parseInt(p.innerText) + 1
}

// 3. eseményfigyelő regisztrálása
button.addEventListener("click", pluszEgy)
