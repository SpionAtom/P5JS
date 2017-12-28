class Game {
  
  constructor(p) {
    this.ground = yr - 25;
    this.p = p;
    this.player1 = new Player(160, 120, LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW)
    
  }
  
  update() {
    this.player1.update();
  }
  
  display(s) {
    
    s.clear();
    // floor
    s.background(155, 175, 255);
    s.fill(55, 155, 55);
    s.strokeWeight(0);
    s.rect(0, this.ground, xr, yr - this.ground);
    

    // title
    s.strokeWeight(0);
    s.fill(255);
    s.textSize(18);	
    var title = "Bouncing Ball";    
    s.strokeWeight(0);
    s.stroke(255);
	  s.text(title, xr - s.textWidth(title), yr - 1);
	  
	  this.player1.draw(s);
	
  }
}