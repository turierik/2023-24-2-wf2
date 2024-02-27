const a = document.querySelector("#a")
const b = document.querySelector("#b")
const button = document.querySelector("button")
const output = document.querySelector("p")

button.addEventListener("click", function (){
    output.innerText = parseInt(a.value) + parseInt(b.value)
})
