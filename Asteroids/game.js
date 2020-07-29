/* Original Asteroid text on the arcade (Atari arcade machine from 1979):
    STRATEGY:
    * Destroy rocks and saucer for points   * Hyperspace can be used in emergencies but
    * Avoid being destroyed by the rocks      there is a chance of explosion on reentry
        or saucer fire                      * An extra ship is given for each
                                                10,000 points scored

        In a two player game each player alternates until his supply of ships is exhausted

    (big rock)    (medium rock)   (small rock)       (big saucer)     (small saucer)
     20 POINTS     50 POINTS       100 POINTS         200 POINTS       1000 POINTS

*/
class Game {
  
  
  constructor(p) { 
    this.p = p;

    var pos = createVector(xr / 2, yr / 2);
    var heading = 1.5 * PI; // pointing up
    var thrust = 0;
    var damping = 0.99;
    this.ship = new Ship(pos, heading, thrust, damping, LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW);

  }
  
  update() {
    this.ship.update();    
  }
  
  display(s) {
    s.clear();
    s.background(0);

    // title    
    s.textSize(16);	
    var title = "2020 SPION ATOM INC";
    s.textFont(myFont);
    s.stroke(255);
    s.text(title, (xr - s.textWidth(title)) / 2, yr);
    this.ship.draw(s);	
  }
}