class Sprite {
    constructor (animation, x, y, size, col, speed, direction){
        this.animation = animation;
        this.len = this.animation.length;
        this.x = x;
        this.y = y;
        this.size = size;
        this.col = col;
        this.speed = speed;
        this.direction = direction;
        this.index = 0;
    }

    show(){
        let index = floor(this.index) % this.len;
        push();
        rotate(this.direction);
        translate(this.x, this.y);
        scale(this.size);
        tint(255,this.col);
        image(this.animation[index], 0, 0);
        pop();
    }

    animate(){
        this.index += this.speed;
        this.x -= this.speed * 10;
    }
}