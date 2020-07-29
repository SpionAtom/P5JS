class Shot extends Entity {
    constructor(pos, heading) {
        var thrust = ShotStats.speed;
        var damping = 1;
        super(pos, heading, thrust, damping);
        this.thrusting = false;
        this.vel = this.vel.add(p5.Vector.fromAngle(this.heading).mult(thrust));
    }

    update() {
        super.update();
    }

    offscreen() {
        return this.pos.x < 0 || this.pos.y < 0 || this.pos.x >= xr || this.pos.y >= yr;
    }

    hitAsteroid(a) {
        console.log(this.pos.dist(a.pos));
        return (this.pos.dist(a.pos) <= a.radius);
    }

    draw(s) {
        s.push();
        s.translate(this.pos.x, this.pos.y);
        s.noStroke();        
        s.fill(255);
        s.ellipse(0, 0, 3);
        s.pop();        
    }
}

var ShotStats = {speed: 5.0};