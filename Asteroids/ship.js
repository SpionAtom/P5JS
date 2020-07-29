var anglespeed = 0.1;
var thrustspeed = 0.001;
var maxthrust = 1.0;
class Ship extends Entity {

    constructor(pos, heading, thrust, damping, keyLeft, keyRight, keyUp, keyDown, keyShoot) {
        super(pos, heading, thrust, damping);        
        this.radius = 10;
        this.keyLeft = keyLeft;
        this.keyRight = keyRight;
        this.keyUp = keyUp;
        this.keyDown = keyDown;
        this.keyShoot = keyShoot;
        this.shooting = false;
        this.shots = [];   
        
    }

    update() {        
        super.update();
        this.boundaryLoop(this.radius);
        this.keysUpdate();

         
    }

    keysUpdate() {
        if (keyIsDown(this.keyLeft)) {
          //console.log("left pressed");
          this.heading = (this.heading - anglespeed) % (TWO_PI);
        }
        if (keyIsDown(this.keyRight)) {
          //console.log("right pressed");
          this.heading = (this.heading + anglespeed) % (TWO_PI);
        }
        if (keyIsDown(this.keyUp)) {          
          //console.log("up pressed");
          this.thrust += thrustspeed;
          if (this.thrust > maxthrust) this.thrust = maxthrust;          
          this.thrusting = true;
        } else {
          this.thrusting = false;
        }  
        if (keyIsDown(this.keyDown)) {          
          //console.log("down pressed");
          this.thrust -= thrustspeed;
          if (this.thrust < 0) this.thrust = 0;          
        }
        if (keyIsDown(this.keyShoot) && !this.shooting) {
          this.shooting = true;
          this.shoot();
          //console.log('shoot');
        }
        if (!keyIsDown(this.keyShoot) && this.shooting) {
          this.shooting = false;
        }
        
      }

    shoot() {
      var heading = this.heading;
      var pos = createVector(this.pos.x + cos(heading) * this.radius, this.pos.y + sin(heading) * this.radius);
      this.shots.push(new Shot(pos, heading));
    }


    draw(s) {
        s.push();
        s.translate(this.pos.x, this.pos.y);
        s.rotate(this.heading);
        s.stroke(255);                
        s.fill(0,0,0,0);  //bc noFill is not working, so I set the alpha to 0      
        var shipPolarList = [];
        shipPolarList.push({a: 0.0, r: 1}, {a: 3/4.0 * PI, r: 1}, {a: 3/4.0 * PI, r: 0.5}, {a: 5/4.0 * PI, r: 0.5}, {a: 5/4.0 * PI, r: 1});
        s.beginShape();
        for (var i = 0; i < shipPolarList.length; i++) {
            var x = cos(shipPolarList[i].a) * this.radius * shipPolarList[i].r;
            var y = sin(shipPolarList[i].a) * this.radius * shipPolarList[i].r;
            s.vertex(x, y);
        }
        s.endShape(CLOSE);

        // draw the thrust
        s.fill(255);
        s.noStroke();
        if (this.thrusting && random() > 0.5) {
          s.triangle(-this.radius, 0, -this.radius * 0.40, this.radius * 0.25, -this.radius * 0.40, -this.radius * 0.25);
          
        }
        s.pop();

        this.shots.forEach(shot => shot.draw(s));
      }
    
}