var hrac = new Player()
var objekt = []
var cas = 0
var zivot = ["hp"]
var skore = 0


function main() {
    c.fillStyle = "white"
    c.fillRect(0, 0, 1350, 900)
    cas += 2

    if (cas % 100 == 0 && zivot[0] != "dead") {
        objekt.push(new Stavba(1350, Math.random() * 850 - 50 , 50, Math.random() * 350 + 150))
        skore++
    }
    c.font = "20px Arial"
    c.fillStyle = "black"
    c.fillText("Skore : " + skore, 10, 30)

    for (var i in objekt) {
        objekt[i].vykresleni()
        objekt[i].pohyb()
        objekt[i].kolize()
    }

    if (zivot[0] == "dead"){
        
        c.font = "120px Arial"
        c.fillStyle = "black"
        c.fillText("Game over", canvas.width / 2 - canvas.width / 4, 200)
    }
    
    hrac.vykresleni()
    hrac.pohyb()
    window.requestAnimationFrame(main)
}
window.requestAnimationFrame(main)