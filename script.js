const canvas = document.getElementById('canvas')
var c = canvas.getContext("2d")
c.strokeStyle = 'rgba(0, 0, 0, 0)'

addEventListener('keydown', function (e) {
    console.log(e) 
    if (e.code == "KeyA") {
        hrac.aa = true
    }
    if (e.code == "KeyD") { 
        hrac.dd = true
    }

    if (e.code == "KeyW") {
        hrac.ww = true
    }

    if (e.code == "KeyS") {
        hrac.ss = true
    }
} 
)

addEventListener('keyup', function (e) {
    if (e.code == "KeyA") {
        hrac.aa = false
    }
    if (e.code == "KeyD") {
        hrac.dd = false
    }

    if (e.code == "KeyW") {
        hrac.ww = false
    }
    
    if (e.code == "KeyS") {
        hrac.ss = false
    }
})