//using ternary operation
function Ride_Function() {
   var  Height = document.getElementById("Height").value;
    var Can_ride = (Height < 52)? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//using constructor function
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Amy = new Vehicle( "Toyota", "Camry", "2020", "Blue");
var Ted = new Vehicle( "Toyota", "Previa", "2000", "Red");
var Ben = new Vehicle( "Jeep", "Trail", "2015", "Black");

//function to display results of constructor in HTML element
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
"Amy drives a " +
Amy.Vehicle_Color +
"-colored" +
Amy.Vehicle_Model +
"manufactured in " +
Amy.Vehicle_Year
}

//Nested Function
function add_Strings() {
    var start_string= "Hello";

    function Adding(str) {
        start_string = start_string + " " + str;
    }
    Adding ("World");
    document.getElementById("Nested_Functon").innerHTML = start_string;
}