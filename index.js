const canvas = document.querySelector("canvas");

const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


class Player {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this, y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

const x = canvas.width / 2;
const y = canvas.height / 2;

const player = new Player(100, 100, 30, 'blue');
player.draw();