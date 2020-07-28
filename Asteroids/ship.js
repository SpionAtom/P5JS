var anglespeed = 0.1;
var accspeed = 0.1;
var maxacc = 1.0;
var accdamp = 0.95;

class Ship extends Entity {

    constructor(pos, vel, acc, keyLeft, keyRight, keyUp, keyDown) {
        super(pos, vel, acc);        
        this.radius = 32;
        this.angle = 1.5 * PI;
        this.keyLeft = keyLeft;
        this.keyRight = keyRight;
        this.keyUp = keyUp;
        this.keyDown = keyDown;
        console.log('cons ship ' + pos);
        
    }

    update() {
        super.update();
        this.keysUpdate();
    }

    keysUpdate() {
        if (keyIsDown(this.keyLeft)) {
          console.log("left pressed");
          this.angle = (this.angle - anglespeed) % (TWO_PI);
        }
        if (keyIsDown(this.keyRight)) {
          console.log("right pressed");
          this.angle = (this.angle + anglespeed) % (TWO_PI);
        }
        if (keyIsDown(this.keyUp)) {
          console.log("up pressed");      
          
        }
        if (keyIsDown(this.keyDown)) {
          console.log("down pressed");
          this.acc;
        }
      }


    draw(s) {
        s.push();
        s.translate(this.pos.x, this.pos.y);
        s.rotate(this.angle);
        s.stroke(255, 155, 55);
        s.noFill();
        var shipPolarList = [];
        shipPolarList.push({a: 0, r: 1}, {a: 3/4. * PI, r: 1}, {a: 3/4. * PI, r: 0.5}, {a: 5/4. * PI, r: 0.5}, {a: 5/4. * PI, r: 1});
        s.beginShape();
        for (var i = 0; i < shipPolarList.length; i++) {
            var x = cos(shipPolarList[i].a) * this.radius * shipPolarList[i].r;
            var y = sin(shipPolarList[i].a) * this.radius * shipPolarList[i].r;
            s.vertex(x, y);
        }
        s.endShape(CLOSE);
        s.pop();
            
      }
    
}