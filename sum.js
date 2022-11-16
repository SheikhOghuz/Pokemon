let resultDiv = document.getElementById("outputResult")
let n = 10; // n is the limit
sum = 0;

for (let i = 1; i <= n; i++) { // this sets the limit to how high the numbers go
    sum += i; //sum - sum+i; 0+1, when i = 1, the sum will be 1. when i=2, sume = 1+2 = 3. When i = 3, the sum is 3+3=6.
    if (i < n) {
        resultDiv.innerHTML += i + " + "; // adds a + at the end of a number to continue with the addition.
    } else {
        resultDiv.innerHTML += i; // makes the last number not have another + at the end.
    }

}

resultDiv.innerHTML += " = " + sum;