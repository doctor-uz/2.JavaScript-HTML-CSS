function Rectangle(w, h) {
    this.width = w;
    this.height = h;
    this.getArea = function() {
        return this.width * this.height;
    };
}

Square.prototype = new Rectangle();

function Square(n) {
    this.width = n;
    this.width = this.height;
}

var square = new Square(4);
square.getArea();
//console.log(square.getArea());

var rect = new Rectangle(4, 5);
rect.getArea();
//console.log(rect.getArea());

//return this.width * this;
