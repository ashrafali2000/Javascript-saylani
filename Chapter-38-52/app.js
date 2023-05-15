// CHAPTER-38-42  Assignment

// Question-01
// function powerFunc(a, b) {
// return a ** b;
// }
// console.log(powerFunc(2, 3));

//Question-02
// function leapYear(year) {
//   if (year % 4 === 0) {
//     console.log("This year is leap year" + year);
//   }
//   else {
//     console.log("This year is not leap year");
//   }
// }
// leapYear(prompt("Enter year"));

// Question-03
// function triangleFunc(a, b, c) {
//     var S = (a+b+c)/2;
//     return function() {
//      var area = S*(S - a)*(S - b)*(S - c);
//      return area;
//     }
// }
// var areaOfTriangle = triangleFunc(2, 3, 4)();
// console.log(areaOfTriangle);

//Question-04
// function mainFunc(sb1, sb2, sb3) {
//  return function(){
//     var average = ((sb1 + sb2 + sb3) / 3).toFixed(2);
//     console.log(average);
//     return function() {
//         var total = 300;
//         var obtainMarks = sb1 + sb2 + sb3;
//         var percentage = (obtainMarks / total * 100).toFixed(2) + "%";
//         return percentage;
//     }
// }
// }
// var check = mainFunc(+prompt("Enter marks 1st sub"), +prompt("Enter marks 2nd sub"), +prompt("Enter marks 3rd sub"));
// console.log(check()());

//Question-05
// var str = "Pakistan zindabad";
// function indexOfFunc(str, indexVal){
//     var str = str.split("");
//     var flag = false;
//     for (var i = 0; i < str.length; i++){
//         if (indexVal === str[i]) {
//             flag = true;
//             console.log(i);
//             break;
//         }
//     }
//     if (!flag) {
//         console.log(-1);
//     }
// }
// indexOfFunc(str,prompt("Enter single character"));

//Question-06
// function remoVowels(str){
//     if (str.length <= 25) {
//         str = str.toLowerCase();
//         var withReplace = "";
//         var replace = ["a", "e", "i", "o", "u"];
//         for(var i = 0; i < str.length; i++) {
//             for (var j = 0; j < replace.length; j++) {
//                 if (str[i] === replace[j]) {
//                     str = str.slice(0, i) + withReplace + str.slice(i + replace[j].length);
//                 }
//             }
//         }
//         document.write(str);
//     } 
//     else{
//         document.write("Sorry! Your input is greater than 25 character");
//     }
// }
// remoVowels("Ashraf ali kakozai");

//Question-07
// function occurencesFunc(text){
//     var str = "";
//     for (var i = 0; i < text.length; i++) {
//         var storage = text.slice(i, i + 2); 
//     switch(storage) {
//         case "ae" :
//             str = str +" ae";
//         break;
//         case "ai":
//             str = str +" ai";
//         break;
//         case "ao":
//             str = str +" ao";
//         break;
//         case "au":
//             str = str +" au";
//         break;
//         case "aa":
//             str = str +" aa";
//         break;
//         case "ea":
//             str = str +" ea";
//         break;
//         case "ee":
//             str = str +" ee";
//         break;
//         case "ei":
//             str = str +" ei";
//         break;
//         case "eo":
//             str = str +" eo";
//         break;
//         case "eu":
//             str = str +" eu";
//         break;
//         case "ia":
//             str = str +" ia";
//         break;
//         case "ie":
//             str = str +" ie";
//         break;
//         case "io":
//             str = str +" io";
//         break;
//         case "iu":
//             str = str +" iu";
//         break;
//         case "ii":
//             str = str +" ii";
//         break;
//         case "oo":
//             str = str +" oo";
//         break;
//         case "oa":
//             str = str +" oa";
//         break;
//         case "oe":
//             str = str +" oe";
//         break;
//         case "oi":
//             str = str +" oi";
//         break;
//         case "ou":
//             str = str +" ou";
//         break;
//         case "uo":
//             str = str +" uo";
//         break;
//         case "ua":
//             str = str +" ua";
//         break;
//         case "ue":
//             str = str +" ue";
//         break;
//         case "ui":
//             str = str +" ui";
//         break;
//         case "uu":
//             str = str +" uu";
//         break;
//     }
// }
// document.write("Such occurrences are:" + str);
// }

// occurencesFunc("please read this application and give me gratuity");

//Question-08
// function meterFunc(kilometer) {
//     var meter = kilometer * 1000;
//     return function() {
//         var feet = meter * 3.25; 
//         return function() {
//             var inches = feet * 12;
//             return function () {
//                 var centimeter = meter * 1000;
//                 document.write("Meter: "+ meter+ "<br> Feet: "+ feet+ "<br> Inches:"+ inches+ "<br> Centimeter:"+ centimeter);
//             }
//         }
//     }
// }
// let distance = meterFunc(2);
// distance()()();

//Question-09

//Question-10
// function currFunc(note) {
//     var a = Math.floor(note / 100);
//     var b = Math.floor(note / 50) -  (2 * a);
//     var c;
//     if (b === 1) {
//          c = Math.floor(note / 10) -  ((10 * a) + 5);
//     }
//     else{
//          c = Math.floor(note / 10) -  (10 * a);
//     }
//     document.write("You will have "+ a +" hundred notes " + b + " fifty notes " + c + " ten notes");
// }
// currFunc(+prompt("Enter your currency in number"));

//                CHAPTER-43-48

//Question-01
// in index.html file
//Question-02
// in index.html file
// Question-03
function delFunc1() {
    document.getElementById("tbl").deleteRow(1);
}
function delFunc2() {
    document.getElementById("tbl").deleteRow(2);
}
function delFunc3() {
    document.getElementById("tbl").deleteRow(3);
}
function delFunc4() {
    document.getElementById("tbl").deleteRow(4);
}


function check() {
    if (document.getElementById("btn1").clicked === true) {
       document.getElementById("zero").innerText = "9";
       console.log("ok");
    }
    else if (document.getElementById("btn2").clicked === true){
        document.getElementById("one").innerText = "2";
    }
    else if (document.getElementById("btn3").clicked === true){
        document.getElementById("two").innerText = "3";
    }
    else if (document.getElementById("btn4").clicked === true){
        document.getElementById("three").innerText = "4";
    }
}



//Question-04
// function msOver() {
//     document.getElementById("ph1").src = "./ph2.png";
// }
// function msOut() {
// document.getElementById("ph1").src = "./ph1.png";
// }

// Question-05
// var str = 0;
// function increas() {
//     str++;
//     var a = document.getElementById("div1");
//     if (str <= 9) {
//         str = "0" + str;
//     }
//     a.innerText = str ;
// }
// function decreas() {
//     str--;
//     var a = document.getElementById("div1");
//     if (str <= 9) {
//         str = "0" + str;
//     }
//     a.innerText = str ;
// }

// CHAPTER-49-52
//Question-01
// function submitFunc(){
//     document.getElementById("para1Name").innerText = "Name : "+ document.getElementById("name").value;
//     document.getElementById("para2Name").innerText ="Father Name : "+ document.getElementById("fname").value;
//     if (document.getElementById("male").checked === true) {
//         document.getElementById("para3Name").innerText ="Gender : "+ " Male" ;
//     }
//     else if(document.getElementById("female").checked === true) {
//         document.getElementById("para3Name").innerText ="Gender : "+ " Female" ;
//     }
//     document.getElementById("para4Name").innerText = "E-mail : "+ document.getElementById("email").value;
//     document.getElementById("para5Name").innerText = "Phone No : "+ document.getElementById("phoneNo").value;
//     document.getElementById("para6Name").innerText = "Address : "+ document.getElementById("address").value;
// }

// Question-02
// function readMore1() {
//     var text = "Apple has been offering trade-in options when purchasing a new product for nearly ten years now and it regularly updates its trade-in values for its older products. The latest price adjustments for the US are now live on the Apple Trade In homepage and there’s a mix of price increases for newer models like the iPhone 13 Pro series alongside decreases for older iPhones.";
//     document.getElementById("11pro").innerText = text;
//     document.getElementById('a1').innerText = "";
// }
// function readMore2() {
//     var text = "Apple has been offering trade-in options when purchasing a new product for nearly ten years now and it regularly updates its trade-in values for its older products. The latest price adjustments for the US are now live on the Apple Trade In homepage and there’s a mix of price increases for newer models like the iPhone 13 Pro series alongside decreases for older iPhones.";
//     document.getElementById("12pro").innerText = text;
//     document.getElementById('a2').innerText = "";
// }
// function readMore3() {
//     var text = "Apple has been offering trade-in options when purchasing a new product for nearly ten years now and it regularly updates its trade-in values for its older products. The latest price adjustments for the US are now live on the Apple Trade In homepage and there’s a mix of price increases for newer models like the iPhone 13 Pro series alongside decreases for older iPhones.";
//     document.getElementById("13pro").innerText = text;
//     document.getElementById('a3').innerText = "";
// }
// function readMore4() {
//     var text = "Apple has been offering trade-in options when purchasing a new product for nearly ten years now and it regularly updates its trade-in values for its older products. The latest price adjustments for the US are now live on the Apple Trade In homepage and there’s a mix of price increases for newer models like the iPhone 13 Pro series alongside decreases for older iPhones.";
//     document.getElementById("14pro").innerText = text;
//     document.getElementById('a4').innerText = "";
// }

//Question-03
// function read() {
//     var cellArr = [document.getElementById("name").value, document.getElementById("fname").value, document.getElementById("email").value, document.getElementById("phoneNo").value, document.getElementById("address").value];
//     var body = document.getElementsByTagName("body")[0];
//     var tbl = document.createElement("table");
//     var tblBody = document.createElement("tbody");
//     var row = document.createElement("tr");
//     for (var i = 0; i < 5; i++) {
//         var cel = document.createElement("td");
//         var cellText = document.createTextNode(cellArr[i]);
//         cel.appendChild(cellText);
//         row.appendChild(cel);
//         tblBody.appendChild(row);
//     }
//     tbl.appendChild(tblBody);
//     body.appendChild(tbl);
//     tbl.setAttribute("border", "2");
// }


// // last func

// function submitFunc() {
//     var headingArr = ["Name", "Father Name", "E-mail", "Phone No", "Address"];
//     var body = document.getElementsByTagName("body")[0];
//     var tbl = document.createElement("table");
//     var tblBody = document.createElement("tbody");
//     var row = document.createElement("tr");
//     for (var i = 0; i < 5; i++) {
//         var cel = document.createElement("td");
//         var cellText = document.createTextNode(headingArr[i]);
//         cel.appendChild(cellText);
//         row.appendChild(cel);
//         tblBody.appendChild(row);
//     }
//     tbl.appendChild(tblBody);
//     body.appendChild(tbl);
//     tbl.setAttribute("border", "2");
// }

  
