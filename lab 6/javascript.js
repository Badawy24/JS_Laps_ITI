class Engine {
    source;
    static #count = 0;

    constructor(source) {
        if (new.target.name === "Engine") {
            throw new Error("this class cannot be instantiated");
        }
        this.source = source;
        Engine.#count++;
    }

    static getCount() {
        return Engine.#count;
    }
}

class Car extends Engine {
    top;
    left;

    constructor(top, left, source) {
        super(source);
        this.top = top;
        this.left = left;
    }

    set Top(value) {
        this.top = value;
        this.source.style.top = this.top + "px"; 
    }
    
    set Left(value) {
        this.left = value;
        this.source.style.left = this.top + "px"; 
    }

    moveLeft() {
        this.left -= 50;
        this.source.style.left = this.left + "px";
    }

    moveRight() {
        this.left += 50;
        this.source.style.left = this.left + "px";
    }

    changeStyle(key,value) {
        this.source.style[key] = value;
        console.log("style changed:", value);
    }

    moveCar(dir) {
        if (dir === "left") {
            this.moveLeft();
        } else if (dir === "right") {
            this.moveRight();   
        }else{
            console.log("Invalid direction");
        }
    }
}



let carId = document.getElementById("car");
let car = new Car(100, 100, carId);

// car.moveLeft(); 
// car.moveRight();

// car.changeStyle("border", "2px solid red");
// car.changeStyle("backgroundColor", "blue");

// car.moveCar("left");
// car.moveCar("right");
// car.moveCar("left");



document.getElementById("left").addEventListener("click", 
    function () {
    car.moveLeft(20); 
});

document.getElementById("right").addEventListener("click", 
    function () {
    car.moveRight(20); 
});


document.getElementById("red").addEventListener("click", 
    function () {
    car.changeStyle("backgroundColor", "red"); 
});

document.getElementById("green").addEventListener("click", 
    function () {
    car.changeStyle("backgroundColor", "green"); 
});

document.getElementById("blue").addEventListener("click", 
    function () {
    car.changeStyle("backgroundColor", "blue"); 
});

