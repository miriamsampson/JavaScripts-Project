function addition_Function() {  //Addition Function
    var addition = 2 + 2;
    document.getElementById("Add").innerHTML = "2 + 2 = " + addition; // print result in HTML
}

function subtraction_Function() {  //Subtraction Function
    var subtraction = 5 - 2;
    document.getElementById("Sub").innerHTML = "5 - 2 + " + subtraction; // print result in HTML
}
function multiplication() {   //mULTIPLICATION fUNTCION
    var mult = 6 * 8;
    document.getElementById("Mlt").innerHTML = "6 x 8 " + mult; // print result in HTML
}
function division() {  //Division Function
    var divide = 48 / 6;
    document.getElementById("Div").innerHTML = "6 x 8 " + divide; // print result in HTML
}

function random() {  //Random Function
    document.getElementById("Ran").innerHTML = Math.random()*10; //// print result in HTML
}

function modulus_Operator() { //Modulus Operator Function
    var modulus = 25 % 6;
    document.getElementById("Mod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus;  // print result in HTML
}

function Increment() {  //Increment Function
    var value = document.getElementById("IncrementText").innerHTML = value; // saves text of HTML to a variable

    value++; //add one to the value 

    document.getElementById("IncrementText").innerHTML = value; // print result in HTML

}

function Decrement() {  //Decrement Function
    var value = document.getElementById("DecrementText").innerHTML = value; // saves text of HTML to a variable

    value--; //subtract one from the value 

    document.getElementById("DecrementText").innerHTML = value; // print result in HTML

}
