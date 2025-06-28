bottle = {
    brand: "HP",
    color: "white",
    capacity: "500ml",
    //method
    details: function () {
        console.log(`Brand is ${this.brand},color is ${this.color},and capacity is ${this.capacity}`);
    }
}

//fetching details
console.log("Brand name of the bottle",bottle.brand)
console.log("color of the bottle",bottle.color)
console.log("capacity of the bottle",bottle.capacity)