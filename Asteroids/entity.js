class Entity {
    constructor(pos, heading, thrust, damping) {
        this.pos = pos.copy();
        this.heading = heading;
        this.thrust = thrust;
        this.damping = damping;        
    }

    update() {
        this.vel = p5.Vector.fromAngle(this.heading).mult(this.thrust);
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