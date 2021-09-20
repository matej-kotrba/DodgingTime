class Player {
    constructor() {
        this.x = 100
        this.y = canvas.height / 2
        this.w = 50
        this.h = 50
    }

    vykresleni() {
        c.fillStyle = "red"
        c.fillRect(this.x, this.y, this.w, this.h)
    }

    pohyb() {
        if (this.ww && this.y >= 0) {
            this.y -= 5
        }
        if (this.ss && this.y + this.h <= 900) {
            this.y += 5
        }
        if (this.aa && this.x >= 0) {
            this.x -= 5
        }
        if (this.dd && this.x + this.w <= 1350) {
            this.x += 5
        }
    }
}