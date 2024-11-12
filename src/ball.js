class Ball {
  constructor(x, y, ctx) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radio = 10;
    this.dirX = Math.random() * 2 - 1;
    this.dirY = Math.random() * 2 - 1;
    this.speed = 3.7;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }

  move() {
    const { width, height } = this.ctx.canvas;

    this.x += this.dirX * this.speed;
    this.y += this.dirY * this.speed;

    if (this.x + this.radio > width || this.x < 0) {
      this.dirX *= -1;
    }

    if (this.y + this.radio > height || this.y < 0) {
      this.dirY *= -1;
    }
  }
}

export default Ball;
