const names = ["János", "Zalán", "Márk", "Elemér", "Mátyás", "Majoranna"]

const ul = document.querySelector("ul")
//for(const name of names){
//    const li = document.createElement("li")
//    li.innerText = name
//    ul.appendChild(li)
//}

ul.innerHTML = names.map(name => `<li>${name}</li>`).join('')
