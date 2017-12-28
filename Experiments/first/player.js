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
    this.jumping = 0;
    this.maxJumping = 50;
    this.jumpHeight = 60;
    this.jumpFactor = 1;
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
      this.jumpFactor+=4;
      
    }
    if (keyIsDown(this.keyDown)) {
      console.log("down pressed");
      this.jumpFactor-=4;
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
    //this.y += this.vy;
    this.jumpFactor *= 0.95;
    if (abs(this.jumpFactor) < 1) {
      this.jumpFactor = Math.sign(this.jumpFactor);
    }


    this.jumping = (this.jumping + 1) % this.maxJumping;
    console.log(this.jumpFactor);
    this.y = game.ground - this.radius - sin(PI * (this.jumping / this.maxJumping)) * this.jumpHeight * (this.jumpFactor + 100) / 100;
    this.x = constrain(this.x, this.radius, xr - this.radius);

    this.keysUpdate();
  }
  
  draw(s) {
    s.fill(0, 255, 0);
    s.noStroke();
    s.ellipse(this.x, this.y, 2 * this.radius);
  }
  
}