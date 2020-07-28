class Entity {
    constructor(pos, vel, acc) {
        this.pos = pos.copy();
        this.vel = vel.copy();
        this.acc = acc.copy();       
    }

    update() {
        this.vel += this.acc;
        this.pos += this.vel;        
    }    
}