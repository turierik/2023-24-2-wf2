const matrix = [
    [1, 2, 3, 10],
    [4, 5, 6, 11],
    [7, 8, 9, 12]
]

const table = document.querySelector("table")
for (const row of matrix){
    const tr = document.createElement("tr")
    for (const cell of row){
        const td = document.createElement("td")
        td.innerText = cell
        tr.appendChild(td)
    }
    table.appendChild(tr)
}

table.innerHTML = 
  matrix.map(row => `<tr>${ row.map(cell => `<td>${cell}</td>`).join('') } </tr>`).join('')
