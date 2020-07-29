class Asteroid extends Entity {

    constructor(pos, heading, type) {
        var thrust = random(Asteroid.Stats[type].thrust.min, Asteroid.Stats[type].thrust.max);
        var damping = 1;
        super(pos, heading, thrust, damping);
        this.type = type;
        this.thrusting = false;
        this.vel = this.vel.add(p5.Vector.fromAngle(this.heading).mult(thrust));
        this.verticesAmount = floor(random(4, 8));
        this.radius = Asteroid.Stats[type].radius;
        this.vertices = [];
        for (var i = 0; i < this.verticesAmount; i++) {
            var offset = Asteroid.Stats[type].radius * 0.3;
            this.vertices[i] = Asteroid.Stats[type].radius + offset - random(2 * offset);
        }
    }

    update() {        
        super.update();
        this.boundaryLoop(Asteroid.Stats[this.type].radius);        
    }

    draw(s) {
        s.push();
        s.translate(this.pos.x, this.pos.y);
        s.rotate(this.heading);
        s.stroke(255);                
        s.fill(0,0,0,0);  //bc noFill is not working, so I set the alpha to 0      
        
        s.beginShape();
        for (var i = 0; i < this.verticesAmount; i++) {
            var angle = map(i, 0, this.verticesAmount, 0, TWO_PI);
            var x = cos(angle) * this.vertices[i];
            var y = sin(angle) * this.vertices[i];
            s.vertex(x, y);
        }
        s.endShape(CLOSE);
        s.pop();
    }

}

Asteroid.Stats = [{type: 0, radius: 25, points:  20, thrust: {min: 0.1, max: 0.5}},
                  {type: 1, radius: 15, points:  50, thrust: {min: 0.4, max: 0.8}},
                  {type: 2, radius:  7, points: 100, thrust: {min: 0.7, max: 1.3}}];