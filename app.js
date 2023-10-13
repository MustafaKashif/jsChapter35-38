// Chapter No. 35 - 38

// Question No. 01

// function dateAndTime(){
//     var todayDate = new Date();
//     document.write(todayDate);
// }
// dateAndTime();

// Question No. 02

// var firstName = prompt("Enter your First name : ");
// var lastName = prompt("Enter your last name : ");
// function greet(){
//     document.write("Hello ! "+" "+firstName +" "+lastName +" "+"Welcome to my website");
// }
// greet();

// Question No. 03

// var numberOne = parseInt(prompt("Enter the First number : "));
// var numberTwo = parseInt(prompt("Enter the Second number :"));
// function sum(){
//     var sum = numberOne + numberTwo;
//     return sum;
// }
// var sumTogether = sum();
// document.write(sumTogether);

// Question No. 04

// var number1 = +prompt("Enter the first Number : ");
// var number2 = +prompt("Enter the second number : ");
// var sign = prompt("Enter the sign that you want to operate on to get your desired output : ");
// function calculator(){
//    if(sign == "+"){
//     alert(number1 + number2);
// }
// else if(sign == "-"){
//     alert(number1 - number2)
// }
// else if(sign == "*"){
//     alert(number1 * number2);
// }
// else if(sign == "/"){
//     alert(number1 / number2);
// }
// else if(sign == "%"){
//     alert(number1 % number2);
// }
// else{
//     alert("Wrong sign entered");
// }
//  }
// calculator();

// Question No. 05

// var input = parseInt(prompt("Enter the number that you want : "));
// function squareNumber(){
//     var square = input * input;
//     document.write("The Square of the Entered number is : "+square);
// }
// squareNumber();

// Question No. 06

// var input = parseInt(prompt("Enter the number that you want the factorial of : "));
// function factorial(){
//     var f = 1;
//     for(var i = input; i >= 1; i--){
//         f = f * i;
//     }
// document.write("The factorial of"+" "+input+" "+"is : "+" "+f);
// }
// factorial();

// Question No. 07

// var startingNumber = parseInt(prompt("Enter the Starting Number : "));
// var endingNumber = parseInt(prompt("Enter the ending number : "));

// function counting(){
//     for(var i = startingNumber; i <= endingNumber; i++){
//     document.write(i+" ");
//     }   
// }
// counting();

// Question No. 08

// var base = parseInt(prompt("Enter the base : "));
// var perpendicular = parseInt(prompt("Enter the perpendicular : "));
// function hypotenuse(){
//     function square(){
//         var baseSquare = base * base;
//         var perpendicularSquare = perpendicular * perpendicular;
//         var sum = baseSquare + perpendicularSquare;
//         return sum;
//     }
// var baseAndPerpenicular = square();
//         var hypotenuse = baseAndPerpenicular;
//         var answer = Math.sqrt(hypotenuse);
//         document.write("The Hypotenuse is : "+" "+answer);
// }
// hypotenuse();

// Question no. 09

// function areaOfRectangle(width, height){
//     var a  = width * height;
//     document.write("The Area of rectangle is : "+a);
// }
// areaOfRectangle(10, 20);

// using prompt / input

// var width = parseInt(prompt("Enter the width of the rectangle : "));
// var height = parseInt(prompt("Enter the height of the rectangle : ")); 
// function areaOfRectangle(){
//     var a  = width * height;
//     document.write("The Area of rectangle is : "+a);
// }
// areaOfRectangle();

// Question No. 10

// var input = prompt("Enter the string that you want to check : ");
// input = input.toLowerCase();
// function checkPalindrome(){
//     var mustafa = input.split("");
//     var kashif = mustafa.reverse("");
//     var join = kashif.join("");
//     if(input == join){
//         document.write("The word "+" "+input+" "+"is palindrome");
//     }
//     else{
//         document.write("The word"+" "+input+" "+"is not a palindrome");
//     }
// }
// checkPalindrome();

// Question No. 11

// var inputString = prompt("Enter any String that you want to capitalize : ");
// function stringCapitalize(){
//     var stringSplit = inputString.split(" ");
    
//     for (let i = 0; i < stringSplit.length; i++) {
//         stringSplit[i] = stringSplit[i][0].toUpperCase() + stringSplit[i].substr(1);
//     }
//     stringSplit.join(" ");
//     var string = stringSplit.toString();
//     var repl = string.replace(/,/g," ");
//     document.write(repl)
// }
// stringCapitalize();

// Question No. 13

// var string = prompt("Enter any sentence that you want to enter : ");
// var findOut = prompt("Enter any chracter that you want to find out from your entered string : ");
// function findingStrings(){
//     var st = string.toLowerCase();
//     var find = findOut.toLowerCase();
//     var count = st.split(find).length-1;
//     document.write("The letter"+" "+findOut+" "+"appears"+" "+count+" "+"times in the given array");   
// }
// findingStrings();

// Question No. 14

// var radius = parseInt(prompt("Enter the radius of the circle : "));
// function calCircumference(){
//       var circumference = 2 * 3.142 * radius;
//       document.write("The circumference of circle is : "+circumference);
// }
// function calArea(){
//      var area = 3.142 * (radius * radius);
//      document.write("The Area of the circle is : "+area);
// }
// calCircumference();
// document.write("<br>");
// calArea();

// Chapter No. 35 - 38 Completed
