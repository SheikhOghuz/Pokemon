let car = {
    name: "North American Tow Truck",
    model: "Harvester L-170 Boom Truck",
    color: "brown",
};

//document.getElementById("demo").innerHTML = "The car name is " + car.name;

document.getElementById("demo").innerHTML = "The car name is " + car.name + "." + "<br>" + "The car colour is " + car.color + "." + "<br>" + "The car model is " + car.model + ".";

let sudent = {
    firstName: "Oghuz",
    lastName: "Ali",
    id: 335143,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

document.getElementById("demo").innerHTML = student.fullName();