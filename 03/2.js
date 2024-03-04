// DELEGÁLÁS
// a sok listaelem helyett 1 eseménykezelő a szülő elemre

const ul = document.querySelector("ul")

function selectElement(e){
    if (!e.target.matches("li"))
        return;
    console.log(e.target) // megadja, hogy honnan "indult" az esemény - li lesz minden szinten
    e.target.classList.add("selected")
}

ul.addEventListener("click", selectElement)
