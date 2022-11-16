let cars = [{
        brand: "Toyota",
        year: 2022,
        model: "Camry",
        mileage: "100K",
        carType: "Used Car"

    },
    {
        brand: "Volvo",
        year: 2021,
        model: "XC90",
        mileage: "50",
        carType: "New"

    },
    {
        brand: "BMW",
        year: 2022,
        model: "X5",
        mileage: "20",
        carType: "New"
    }
];
/*
cars.forEach(printObject);

function printObject(item) {
    document.getElementById("carsDiv").innerHTML += item.brand + "<br>" +
        cars.year + "<br>" +
        cars.model + "<br>" +
        cars.mileage + "<br>" +
        cars.carType + "<br> <hr>";


}

for (let i = 0; i < cars.length; i++) {
    document.getElementById("carsDiv").innerHTML += cars[i].brand + "<br>" +
        cars[i].year + "<br>" +
        cars[i].model + "<br>" +
        cars[i].mileage + "<br>" +
        cars[i].carType + "<br> --------------------------------- <br>";
}
*/



const jsonText = '{"name":"John", "age": 30, "city":"New York"}';
const person = JSON.parse(jsonText);
document.getElementById("parsedobj").innerHTML = person.name + ", " + person.age + ", " + person.city;