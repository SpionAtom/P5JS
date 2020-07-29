var maxVel = 5.0;
var maxThrust = 1.0;
class Entity {
    constructor(pos, heading, thrust, damping) {
        this.pos = pos.copy();
        this.heading = heading;
        this.vel = createVector(0, 0);
        this.thrust = thrust;
        this.damping = damping;
        this.thrusting = false;        
    }

    update() {
        if (this.thrusting) {
            this.vel = this.vel.add(p5.Vector.fromAngle(this.heading).mult(min(this.thrust, maxThrust)));
        } else {
            //this.vel = this.vel.mult(this.thrust);
        }
        
        this.vel.mult(this.damping);
        if (this.vel.mag() > maxVel) this.vel = this.vel.normalize().mult(maxVel);
        this.thrust *= this.damping;
        this.pos = this.pos.add(this.vel);
    }

    boundaryLoop(r) {
        if (this.pos.x < -r) this.pos.x = xr + r;
        if (this.pos.y < -r) this.pos.y = yr + r;
        if (this.pos.x > xr + r) this.pos.x = -r;
        if (this.pos.y > yr + r) this.pos.y = -r;        
    }
}