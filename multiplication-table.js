let multiplicationDiv = document.getElementById("multiplicationTable");

for (let outerCounter = 1; outerCounter <= 9; outerCounter++) {
    for (let innerCounter = 1; innerCounter <= 9; innerCounter++) {


        //multiplicationDiv.innerHTML = multiplicationDiv.innerHTML + "3*" + counter + "=" + (3 * counter);

        multiplicationDiv.innerHTML = multiplicationDiv.innerHTML + outerCounter + " x " + innerCounter + "=" + outerCounter * innerCounter + "<br>";
    }
}
// when counter = 1 multiplication.Div.innerHTM: ="" 3 X 1 = 3 <br>
// when counter = 2 multiplication.Div.innerHTM: = 3 X 1 = 3 <br> 3 X 2 = 6 <br>
// when counter = 3 multiplication.Div.innerHTM: = 3 X 1 =3 <br> 3 X 2 = 6<br> 3 X 3 = 9<br>