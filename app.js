//Q1

// var firstName = prompt("enter your first name ");
// var lastName = prompt("enter your first name ");
// var fullName = firstName+lastName;
// document.write(" welcome " + fullName + " to our website");

//Q2
// var favtPhone = prompt("enter your favt mobile and model");

// document.write("My favorite phone is : " + favtPhone + "</br>" );
// document.write(" Length of string is "+favtPhone.length);
//Q3
// var word = "Pakistani"
// document.write("string : "+word +  "</br>");
// document.write( "Index of n is :"+ word.indexOf("n"))   ;
//Q4
// var word = "Hello World"
// document.write("string : "+word +  "</br>");
// document.write( "Index of n is :"+ word.lastIndexOf("l"))   ;
//Q5
// var word = "Pakistani"
// document.write("string : "+word +  "</br>");
// document.write( "character at index 3 is  : "+ word.charAt("3"))   ;
//Q6
// var firstName = prompt("enter your first name ");
// var lastName = prompt("enter your first name ");
// var result =firstName.concat(lastName)
// document.write(result);
// document.write(" welcome " + result + " to our website");



//Q7

// var text= "Hyderabad";
// document.write("City : " +text + "</br>");
// for (var i = 0; i < text.length; i++) {
//      if (text.slice(i, i + 5) === "Hyder") {
//      text = text.slice(0, i) + "Islam" + text.slice(i + 5);
//  }
//      }
//     document.write("After Replacment : "+text);
//Q8
// var message = "Ali and Sami are best friends. They play cricket and football together";

// document.write(message.replace(/and/g, '&'));
//Q9
// var value ="472";
// document.write("value : " +value +  "</br>"  + typeof value  +  "</br>")
// document.write( "value : " +value +  "</br>"  +typeof parseInt(value))

//Q10
// var userInput = prompt("enter stirng");
// userInput = userInput.toUpperCase();
// document.write(userInput);

// //Q10
// var userInput = prompt("enter stirng");
// userInput = userInput.toUpperCase();
// document.write(userInput);
//  Q11  / title case //
// var userInput = prompt("enter a what do you");
// var copy= userInput.slice(1);
// copy=copy.toLowerCase();
// var copyFirst = userInput.slice(0,1)
// copyFirst= copyFirst.toUpperCase();
// document.write(copyFirst+copy);
//Q12
// function getString(str) {
//     return str.split('.')[0]+str.split('.')[1];
// }
// // use the function:
// alert(getString("25.52"));

//Q13   
// var text = prompt("enter your name");
// for (var i = 0; i < text.length; i++) {
//      if (text.charAt(i) === "!") {
//      alert("Exclamation point found!");
//      }
//      else if (text.charAt(i) === "@") {
//         alert(" @ point found!");
//         }
//         else if (text.charAt(i) === ",") {
//             alert(", point found!");
//             }
//             else if (text.charAt(i) === ".") {
//                 alert(". point found!");
//                 }
//      }
            
    //Q14
// var userDesire =prompt("welcome to ABC BAKERY What do you want to order sir/mam");
// userDesire = userDesire.toLowerCase();
// var  a = ["cake","apple pie","cookie","chips","patties"];

// var isMatch = false;

// for (var i = 0; i <br a.length; i++) {
//   if (userDesire === a[i]) {
//     alert(userDesire +"  aviable at index  " + i + "  in our bakery");
//     isMatch = true;
//     break;
//   }
// }

// if (isMatch === false) {
//   alert("we are sorry " + userDesire + "  is not aviable in our bakery  ");
// }
//Q16
// var university = "University of Karachi";

// const words = university.split("");
// for(var i =0; i< words.length ; i++){
// document.write(words[i]+ "</br>")}
//Q17
// var word = "Pakistan"
// document.write("User Input : "+word +  "</br>");
// var res = word.charAt(word.length-1);
// document.write("Last character of input : "+res)

