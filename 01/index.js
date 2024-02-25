let t = [7, 4, 5, 8, 1, 2, 0, 3]
let u = []

function paros(n){
    return n % 2 === 0;
}

u = t.filter(paros)

// VAGY

u = t.filter(n => n % 2 === 0)

console.log(u)

// Feladat: egy tömb köbre emelése
// 1. for ciklus
// 2. for-of
// 3. tömbfüggvény
// Köbre emelés, 3 módja is van:
// x * x * x
// Math.pow(x, 3)
// x ** 3

let w = []
for (let i = 0; i < t.length; i++){
    w.push(t[i] ** 3)
}

w = []
for (const el of t){
    w.push(el ** 3)
}

w = t.map(n => n ** 3)

console.log(w)

let people = [
    {
        name: "Pista",
        year: 1976,
        married: true
    },
    {
        name: "Fanni",
        year: 2008,
        married: false
    },
    {
        name: "Józsi",
        year: 1995,
        married: false
    },
    {
        name: "Erzsi",
        year: 1945,
        married: true
    }
]

// Add meg egy nem házas ember nevét!
console.log(
    people.find(p => !p.married).name
)

// Legfiatalabb ember születési éve:
console.log(
    Math.max(...people.map(p => p.year))
)
