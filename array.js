const carsArray = [
    "Audi ",
    "Toyota ",
    "Volvo ",
    "BMW "
];

for (let i = 0; i < carsArray.length; i++) {
    document.getElementById("arrayDiv").innerHTML += carsArray[i];
}

document.getElementById("arrayDiv").innerHTML += "<br> second item in the array is: " + carsArray[1];

let numArray = [1, 2, 3, 4, 5];
printArray(numArray);



function printArray(arr) {
    document.getElementById("arrayDiv").innerHTML += "<br>";
    for (let i = 0; i < arr.length; i++) {
        document.getElementById("arrayDiv").innerHTML += arr[i] + " ";
    }
}

document.getElementById("arrayDiv").innerHTML += "<br> let's try to update the array element ";
numArray[3] = 8;

printArray(numArray);

document.getElementById("arrayDiv").innerHTML += "<br> Let's add an element to the array";
numArray.push(10); //
printArray(numArray);

document.getElementById("arrayDiv").innerHTML += "<br> Let's remove an element to the array";
numArray.pop();
printArray(numArray);