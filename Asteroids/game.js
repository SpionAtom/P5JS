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
    this.ship = new Ship(pos, heading, thrust, damping, LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW, 32);

    this.asteroids = [];
    for (var i = 0; i < 8; i++) {
      var pos;
      do {
        pos = createVector(random(xr), random(yr));
      } while(this.ship.pos.dist(pos) < xr / 2);
      var heading = random(TWO_PI);
      var thrust = random(0.1, 0.5);
      var damping = 1;
      var type = i % 3;
      this.asteroids.push(new Asteroid(pos, heading, type))
    }

  }
  
  update() {
    this.ship.update();
    this.asteroids.forEach(asteroid => asteroid.update());

    // update shots
    for (var i = this.ship.shots.length - 1; i >= 0; i--) {
      var s = this.ship.shots[i];
      s.update();
      var spliceShot = false;      
      if (s.offscreen()) spliceShot = true;
      
      // hit asteroid
      for (var j = this.asteroids.length - 1; j >= 0; j--) {
        var a = this.asteroids[j];
        if (s.hitAsteroid(a)) {
          if (a.type < 2) {
            for (var newAsteroids = 0; newAsteroids < 2; newAsteroids++) {
              var pos = a.pos;            
              var heading = random(TWO_PI);            
              var type = a.type + 1;
              this.asteroids.push(new Asteroid(pos, heading, type))
            }
          }
          this.asteroids.splice(j, 1);
          spliceShot = true;
        }
      }

      if (spliceShot) this.ship.shots.splice(i, 1);
    }

    console.log(this.ship.shots.length);

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
    this.asteroids.forEach(asteroid => asteroid.draw(s)); 	
  }
}