var x = true;  
//boolean data type variable

document.write(typeof x);
document.write("<br>");
//printing the data type of the variable x

document.write("10" + 10);
document.write("<br>");
//expression combining a string and a number

document.write(5 == 5);
document.write("<br>");
//using the == operator

x=1;
y=1;
document.write(x === y);
ddocument.write("<br>");
//using the === operator

document.write(10 > 5 && 11 > 6);
document.write("<br>");
//using the > and && operators

document.write(10 < 5 || 11 < 6);
document.write("<br>");
//using the < and || operators

function not_Function () {
    document.getElementById("Not").innerHTML = !(1 > 2);
}
//using the ! operator