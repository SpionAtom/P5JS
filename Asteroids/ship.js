var anglespeed = 0.1;

class Ship extends Entity {

    constructor(pos, vel, acc, keyLeft, keyRight, keyUp, keyDown) {
        super(pos, vel, acc);        
        this.radius = 32;
        this.angle = PI / 4;
        this.keyLeft = keyLeft;
        this.keyRight = keyRight;
        this.keyUp = keyUp;
        this.keyDown = keyDown;
        
    }

    update() {
        super.update();
        this.keysUpdate();
    }

    keysUpdate() {
        if (keyIsDown(this.keyLeft)) {
          console.log("left pressed");
          this.angle = (this.angle + anglespeed) % (TWO_PI);
        }
        if (keyIsDown(this.keyRight)) {
          console.log("right pressed");
          this.angle = (this.angle - anglespeed) % (TWO_PI);
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


    draw(s) {
        console.log(this.pos.x)        ;
        s.push();
        //s.translate(this.pos.x, this.pos.y);
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