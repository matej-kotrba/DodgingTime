class Stavba {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    vykresleni() {
        c.fillStyle = "grey"
        c.fillRect(this.x, this.y, this.w, this.h)
        
    }

    pohyb() {
        if (this.x + this.w > 0) {
            this.x -= 10
        }
    }

    kolize() {
        if (this.x <= hrac.x + hrac.w && this.y + this.h >= hrac.y && this.y <= hrac.y + hrac.h && this.x + this.w >= hrac.x) {
         zivot[0] = "dead" 
        }
    }
}