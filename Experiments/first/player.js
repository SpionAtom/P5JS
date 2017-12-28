class Player {
  constructor(x, y, keyLeft, keyRight, keyUp, keyDown) {
    this.x = x;
    this.y = y;
    this.ax = 0;
    this.ay = 0;
    this.vx = 0;
    this.vy = 0;
    this.radius = 8;
    this.keyLeft = keyLeft;
    this.keyRight = keyRight;
    this.keyUp = keyUp;
    this.keyDown = keyDown;
  }
  
  keysUpdate() {
    if (keyIsDown(this.keyLeft)) {
      console.log("left pressed");
      this.ax = -0.5;
    }
    if (keyIsDown(this.keyRight)) {
      console.log("right pressed");
      this.ax = 0.5;
    }
    if (keyIsDown(this.keyUp)) {
      console.log("up pressed");
    }
    if (keyIsDown(this.keyDown)) {
      console.log("down pressed");
    }
  }
  
  update() {
    this.ax *= 0.9;
    this.ay *= 0.9;
    this.vx += this.ax;    
    this.vy += this.ay;
    this.vx *= 0.9;
    this.vy *= 0.9;
    this.x += this.vx;
    this.y += this.vy;
    this.x = constrain(this.x, this.radius, xr - this.radius);

    this.keysUpdate();
  }
  
  draw(s) {
    s.fill(0, 255, 0);
    s.noStroke();
    s.ellipse(this.x, this.y, 2 * this.radius);
  }
  
}