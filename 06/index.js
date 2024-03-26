const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'orange'
ctx.fillRect(50, 100, 120, 150)

ctx.strokeStyle = 'blue'
ctx.lineWidth = 4
ctx.strokeRect(60, 70, 80, 90)

ctx.font = '16px Arial'
ctx.fillText('HÉTFŐ', 20, 20)

ctx.fillStyle = 'yellow'
ctx.beginPath()
ctx.moveTo(100, 100)
ctx.lineTo(150, 100)
ctx.lineTo(150, 150)
// ctx.lineTo(100, 100)
ctx.closePath()
ctx.fill()
ctx.stroke()