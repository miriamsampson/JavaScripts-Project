function full_sentence() {
    var part_1 = "guess what day";
    var part_2 = "it is..";
    var part_3 = "Valentines!"
    var whole_sentence =part_1.concat(part_2, part_3);
    document.getElementById ("StringMethod").innerHTML = whole_sentence;
}    //concat method

function slice_Method ()  {
    var sentence = "Slice and Dice";
    var section = sentence.slice(10, 14);
    document.getElementById("Slice").innerHTML = section;
}    //slice method

function string_Method() {
    var myNumber = 999;
    document.getElementById("ToString").innerHTML = myNumber.toString();
}    //toString method

function precision_method()  {
    var myNumber =123.456789;
    document.getElementById("SpecificLength").innerHTML = myNumber.toPrecision(5);
}    //toPrecision method