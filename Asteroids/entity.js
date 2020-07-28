class Entity {
    constructor(pos, vel, acc) {
        this.pos = pos.copy();
        this.vel = vel.copy();
        this.acc = acc.copy();
        console.log('cons enti ' + this.pos);       
    }

    update() {
        this.vel = this.vel.add(this.acc);
        this.pos = this.pos.add(this.vel);        
    }    
}