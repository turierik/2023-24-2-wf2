const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// Feladatok:
// 1. minden labda működjön :)
// 2. ha a canvasre kattintok, jelenjen meg ott egy labda
// 3. verődjön vissza a labda a canvas aljáról

canvas.addEventListener('click', function(e){
    balls.push({
        x: e.clientX,
        y: e.clientY,
        r: Math.floor(10 * Math.random() + 10),
        c: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
        vy: 0,
        ay: 0.001
    })
})

const balls = [
    {
        x: 200,
        y: 50,
        r: 20,
        c: 'red',
        vy: 0,
        ay: 0.001
    },
    {
        x: 50,
        y: 80,
        r: 30,
        c: 'blue',
        vy: 0,
        ay: 0.001
    }
]

// kör, körív, stb.: ctx.arc

function update(dt){
    for (let ball of balls){
        ball.vy += ball.ay * dt
        ball.y += ball.vy * dt

        if (ball.y + ball.r >= canvas.height && ball.vy > 0){
            ball.y = canvas.height - ball.r
            ball.vy *= -1
        }
    }
}

function render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let ball of balls){
        ctx.beginPath()
        ctx.arc(ball.x, ball.y, ball.r, 0, 2*Math.PI)
        ctx.fillStyle = ball.c
        ctx.fill()
    }
    
}

let last = performance.now()
function gameLoop(){
    const now = performance.now()
    const dt = now - last
    last = now
    update(dt)
    render()
    requestAnimationFrame(gameLoop)
}

gameLoop()