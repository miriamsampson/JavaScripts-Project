window.alert ("Hello,World");                       //Window alert method
document.write("This is a text")                    // Document write method

var Sent1="This is the beginning of the string";            // Creating Variables
var Sent2="and this is the end of the string";

document.write("Sent1"                                 // Concatenating two variables
    + "Sent2"
);

var add="Sent1" + "Sent2";                             //An expression

function My_First_Function()  {                 //Defining a function and naming it
    var str ="This is the button text!";        //Defining a variabe and giving it 
                                                // a string value
    document.getElementById("Button_Text").innerHTML =str;    // putting the value 
                                                 //of the varaible into the HTML elementFrpmPoint
                                                 // with the "Button_Text"id
}