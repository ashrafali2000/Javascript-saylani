//                     Assignment-01-JavaScript

//                      CHAPTER-01 : alert

//Question-01
// alert("We are using Javascript language");

//Question-02
// alert("Error! Please enter a valid password");

//Question-03
// alert("Welcome to Js Land.. \n Happy Coding!");

//Question-04
// alert("Welcome to Js Land..");
// alert("Happy Coding \n  Prevent this page from creating additional dialogs.");

//Question-05
// alert("Hello.. i can run JS through my web browser's console");

//Question-06
/* <script>
    alert("it is Question-06")
</script> */

//Question-07
/* <script>
    alert("This is checked everyWhere in Head,Body,befor,after and etc");
</script> */

//                   CHAPTER-02 :  VARIABLES FOR STRINGS

//Question-01
// var username;

//Question-02
//  var myName="Ashraf ali";

//Question-03
//  var message;    
//  message="Hello World";
// alert(message);

//Question-04
// var userName="Ashraf ALi";
// alert(userName);
// var age="23 year old";
// alert(age);
// var field="Certified Mobile-Application Development.";
// alert(field);

//Question-05
// var myPizza="PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(myPizza);

//Question-06
// var email="ali4282271@gmail.com";
// alert("MY Email Address is "+email);

//Question-07
// var myBook="A Smarter \n way to Learn JavaScript.";
// alert("I am trying to learn from the Book "+myBook);

//Question-08
// document.write("Yah! I can write HTML content through JavaScript.");

//Question-09
// var style=' “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” ';
// document.write(style);
// alert(style);

//                      CHAPTER-03 : VARIABLES FOR NUMBERS

//Question-01
// var age=23;
// alert("I am "+age+" years old");

//Question-02
// var N=14;
// alert("You have visited this sites "+N+" times");

//Question-03
// var birthYear=1990;
// document.write("My birth year is "+birthYear+"<br>Data type of my declared variable is number" );

//Question-04
// var visitorName="<b>Jhon Doe</b>";
// var productTitle="<b>T-Shirt(s)</b>";
// var quantity="<b>5</b>";
// var storeName="XYZ";
// document.write(visitorName+" order "+quantity+" "+productTitle+" on "+ storeName+" Clothing store.");

//                      CHAPTER-04 : VARIABLE NAMES: LEGAL & ILLEGAL 

//Question-01
// var a=1; var b=2; var c=3;

//Question-02
//      legall Variable Names.
// var first_variable="first variable with Underscore";
// var firstVariable="Second vaiable with CamleCase";
// var $num="Variable with  starting dollar sign";
// var _num="Variable with starting Underscore sign";
// var mynum1="variable with number in the last";
//      Ilegall Variable Names.
// var 23="variable with number not allow";
// var second-varibale="variable with minus/dash sign is not allow";
// var 23num="variable with in the starting num is not allow";
// var "forthVariable" = "variable in the single/double quote is not allow";
// var gdfdfs@="variable with at the rate if it assigned in start/last not allow ";

//Question-03
//a
// document.write("<h1>Rules for naming JS variables</h1><br><br>");
//b
// document.write("Variable names can only contain numbers,camleCase,$ and _ . For Example:$my_1stVariable"+"<br>");
//c
// document.write( " Variables must begin with a letter, $ or _ . For example $name, _name or name <br/>" );
//d
// document.write("Variable names are case sensitive<br/>");
//e
// document.write("Variable name should not be tbe JS keywords");

//                   CHAPTER-05 : MATH EXPRESSIONS

//Question-01
// var num1=3;
// var num2=5;
// var sum=num1+num2;
// document.write("Sum of "+num1+" and "+num2+" is "+sum);

//Question-02
//Subtraction
// var num1=3;
// var num2=5;
// var subtract=num1-num2;
// document.write("Subtraction of "+num1+" and "+num2+" is "+subtract);
//Multiplication
// var num1=3;
// var num2=5;
// var multiplication = num1*num2;
// document.write("Multiplication of "+num1+" and "+num2+" is "+multiplication);
//Division
// var num1=3;
// var num2=5;
// var division = num1/num2;
// document.write("Division of "+num1+" and "+num2+" is "+division);
//Modulus
// var num1=3;
// var num2=5;
// var modulus = num1%num2;
// document.write("Modulus of "+num1+" and "+num2+" is "+modulus);

//Question-03
//a,b (part)
// var myVar;
// document.write("Value after variable declaration is: "+myVar+"<br/>");

//c,d (part)
// var myNum=5;
// document.write("Initial value: "+ myNum+"<br/>");

//e,f (part)
// myNum=myNum+1; 
// document.write("Value after increment is: "+myNum+"<br/>");
//g,h (part)
//  myNum +=7;
// document.write("Value after addition is: "+myNum+"<br/>");
//i,j (part)
// myNum=myNum-1;
// document.write("Value after decrement is: "+myNum+"<br/>");
//k,l (part)
// myNum=myNum%3;
// document.write("The remainder is: "+myNum);

//Question-04
// var costOfTicket=600;
// var buyTickets=5;
// var totalCostOFTickets=costOfTicket*buyTickets;
// document.write("Total cost to buy "+buyTickets+" tickets to a movie is "+totalCostOFTickets+" PKR");

//Question-05
// var inputForTable=+prompt("Enter any number");
// var i;
// document.write("Table of "+inputForTable,"<br/>");
// for(i=1;i<=10;i++){
//     document.write(inputForTable+" X "+i+" = "+i*inputForTable ,"<br/>");
// }

//Question-06
//a,b (part)
// var celsiusTemp=25;
// var fahrenheit=(celsiusTemp*9/5)+32;
// document.write(celsiusTemp+"<sup>o</sup>C is "+fahrenheit+" <sup>o</sup>F");
//c,d
// var fahrenheitTemp=70;
// var celsius=(fahrenheitTemp-32)*5/9;
// document.write(fahrenheitTemp+"<sup>o</sup>F is "+celsius+"<sup>o</sup>C");

//Question-07
// var priceOFItem_1=650;
// var priceOFItem_2=100;
// var quantityOFItem_1=3;
// var quantityOFItem_2=7;
// var shippingCharges=100;
// var totalCostOFYourOrder=priceOFItem_1*quantityOFItem_1+priceOFItem_2*quantityOFItem_2+shippingCharges;
// document.write("Price of item 1 is "+priceOFItem_1+"<br/>");
// document.write("Quantity of item 1 is "+quantityOFItem_1+"<br/>");
// document.write("Price of item 2 is "+priceOFItem_2+"<br/>");
// document.write("Quantity of item 2 is "+quantityOFItem_2+"<br/>");
// document.write("Shipping Charges is "+shippingCharges+"<br/></br>");
// document.write("Total cost of your order is "+totalCostOFYourOrder);

//Question-08
// var totalMarks=980;
// var marksObtained=804;
// var percentage=marksObtained/totalMarks*100;
// document.write("<h1>Mark Sheet</h1>"+"<br/>");
// document.write("Total marks: "+totalMarks+"<br/>");
// document.write("Marks obtained: "+marksObtained+"</br>");
// document.write("Percentage: "+percentage+"%");

//Question-09
// var usDollar=10;
// var saudiRiyal=25;
// var pkr=usDollar*104.80+saudiRiyal*28;
// document.write("<h1>Currency in PKR</h1><br><br>")
// document.write("Total Currency in PKR:"+pkr);

//Question-10
// var myNum=5+5*10/2;
// document.write(myNum);

//Question-11
// var currentYear=2016;
// var birthYear=1992;
// var yourAge=currentYear-birthYear;
// document.write("<h1>Age Calculator</h1><br><br>")
// document.write("Current Year: "+currentYear+"</br>");
// document.write("Birth Year: "+birthYear+"</br>");
// document.write("Your Age is: "+yourAge);

//Question-12
// var radiusOfCircle=20;
// var fi=3.142;
// var circumference=2*fi*radiusOfCircle;
// var areaOfCircle=fi*radiusOfCircle*2;
// document.write("<h1>The Geometrizer</h1><br><br>");
// document.write("Radius of Circle:"+radiusOfCircle+"<br>"); 
// document.write("Circumference of Circle:"+circumference+"<br>"); 
// document.write("Area of Circle:"+areaOfCircle); 

//Question-13
// var mySnack="chocolate chip";
// var currentAge=15;
// var maxAge=65;
// var amountOfSnackPerDay=3;
// var needChocolateChip=(maxAge-currentAge)*amountOfSnackPerDay;
// document.write("<h1>The Lifetime Supply Calculator</h1><br><br>");
// document.write("Favourite Snack: "+mySnack+"<br/>");
// document.write("Current age: "+currentAge+"<br/>");
// document.write("Estimated Maximum Age: "+maxAge+"<br/>");
// document.write("Amount of snack per day: "+amountOfSnackPerDay+"<br/>");
// document.write("You will need "+needChocolateChip+" "+mySnack+" to last you until the ripe old age of "+maxAge);

//                CHAPTER-06-09

//Question-01
// var a=10;
// document.write("<h1>Result</h1>");
// document.write("The value of a is:"+a+"<br/>");
// document.write("-------------------------------<br/>");
// ++a;
// document.write("The value of ++a is:"+a+"<br/>");
// document.write(" Now the value of a is:"+a+"<br/><br/>");
// document.write("The value of a++ is:"+a+++"</br>");
// document.write("Now the value of a is:"+a+"<br><br>");
// document.write("The value of --a is:"+--a+"<br/>");
// document.write("Now the value of a is:"+a+"<br><br>");
// document.write("The value of a-- is:"+a--+"<br>");
// document.write("Now the value of a is:"+a);

//Question-02
// var a=2,b=1;
// var result= --a - --b + ++b + b--;//1+1+1=3
// document.write(a+"<br>");//1
// document.write(b+"<br>");//0
// document.write(result);//3

//Question-03
// var inputfromUser=prompt("Enter Your name");
// alert("Asslamulikum Sir , "+inputfromUser);

//Question-04
// var inputFromUserInput=+prompt("Enter a number",5);
// var i;
// for(i=1;i<=10;i++){
//     document.write(inputFromUserInput+" X "+i+" = "+inputFromUserInput*i+"<br>");
// }

//Question-05
// var sub_1=prompt("Enter First subject name");
// var sub_2=prompt("Enter Second subject name");
// var sub_3=prompt("Enter Third subject name");
// var totalMarks_sb=100;
// var totalMarksAllsb=3*totalMarks_sb;
// var obtainMarks_sb1=+prompt("Enter First subject Obtain Marks");
// var obtainMarks_sb2=+prompt("Enter Second subject Obtain Marks");
// var obtainMarks_sb3=+prompt("Enter Third subject Obtain Marks");
// var sumAllObtained=obtainMarks_sb1+obtainMarks_sb2+obtainMarks_sb3;
// var percentage_sb1=obtainMarks_sb1/totalMarks_sb*100;
// var percentage_sb2=obtainMarks_sb2/totalMarks_sb*100;
// var percentage_sb3=obtainMarks_sb3/totalMarks_sb*100;
// var getAllPercentage=sumAllObtained/totalMarksAllsb*100;
// percentage_sb1=percentage_sb1+"%";
// percentage_sb2=percentage_sb2+"%";
// percentage_sb3=percentage_sb3+"%";
// document.write("Subject  Total Marks Obtained Marks Percentage <br/>");
// document.write(sub_1+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+totalMarks_sb+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+obtainMarks_sb1+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+percentage_sb1+"<br/>");
// document.write(sub_2+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+totalMarks_sb+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+obtainMarks_sb2+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+percentage_sb2+"<br/>");
// document.write(sub_3+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+totalMarks_sb+"  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+obtainMarks_sb3+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"+percentage_sb3+"<br/>");
// document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     "+totalMarksAllsb+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+sumAllObtained+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+getAllPercentage+"%");

//            CHAPTER-09-11 :USER INPUT & CONDITIONAL STATEMENT

//Question-01
// var cityName=prompt("Enter city name:");
// if(cityName=="Karachi"){
//     alert("Welcom to city of lights");
// }

//Question-02
// var gender=prompt("Enter your gender");
// if(gender=="male"){
//     alert("Good Morning Sir.");
// }
// else if(gender=="female"){
//     alert("Good Morning Ma'am.");
// }

//Question-03
// var inputColor=prompt("Enter Any Color (Red,Yellow,Green)");
// if(inputColor=="Red"){
//     alert("Must Stop");
// }
// else if(inputColor=="Yellow"){
//     alert("Ready to move");
// }
// else if(inputColor=="Green"){
//     alert("Move now");
// }

//Question-04
// var fuel=+prompt("Fill Fuel Into Your Car ");
// if(fuel<0.25){
//     alert("Please refill the fuel in your car");
// }

//Question-05
//a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is false (this message do not show)");
// }
//c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is false (this message do not show)");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is false (this message do not show)");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost are equals");
// }
//e
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False (this message do not display)");
//     }
//f
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

//Question-06
// var grade;
// var obtainMarks=+prompt("Enter Your Obtained Marks");
// var totalMarks=+prompt("Enter Total Marks");
// var percentage=Math.floor(obtainMarks/totalMarks*100);
// if(percentage>=80){
//     grade="A-one";
//     remarks="Excellent";
// }
// else if(percentage>=70){
//     grade="A";
//     remarks="Good"; 
// }
// else if(percentage>=60){
//     grade="B";
//     remarks="You need to improve";
// }
// else if(percentage<60){
//     grade="Fail";
//     remarks="Sorry";
// }
// document.write("<h1>Marks Sheet</h1><br/><br/>")
// document.write("Total Marks : "+totalMarks+"<br/>");
// document.write("Marks obtained : "+obtainMarks+"<br/>");
// document.write("Percentage : "+percentage+"% <br/>");
// document.write("Grade : "+grade+"<br/>");
// document.write("Remarks : "+remarks);

//Question-07
// var guessNum=Math.floor((Math.random()*10));
// var userGuess=+prompt("Enter a number");
// if(guessNum==userGuess){
//     alert("Bingo! Corret answer");
// }
// else if(guessNum+1==userGuess){
//     alert("Close enough to the correct answer");
// }

//Question-08
// var userInput=+prompt("Enter a number");
// if(userInput%3==0){
//     alert("The given number is divisible by 3");
// }

//Question-09
// var inputNumber=+prompt("Enter a number");
// if(inputNumber%2==0){
//     alert("The given number is Even number");
// }
// else{
//     alert("The given number is Odd number");
// }

//Question-10
// var inputTemp=+prompt("Enter temprature");
// if(inputTemp>40){
//     alert("It is too hot outside.")
// }
// else if(inputTemp>30){
//     alert("The Weather today is Normal.");
// }
// else if(inputTemp>20){
//     alert("Today’s Weather is cool.");
// }
// else if(inputTemp>10){
//     alert("OMG! Today’s weather is so Cool.");
// }

//Question-11
// var result;
// var firstInput=+prompt("Enter first number");
// var secondInput=+prompt("Enter second number");
// var operator=prompt("Enter any operator (+,-,*,/,%):");
// if(operator=="+"){
//     result=firstInput+secondInput;
// }
// else if(operator=="-"){
//     result=firstInput-secondInput;
// }
// else if(operator=="*"){
//     result=firstInput*secondInput;
// }
// else if(operator=="/"){
//     result=firstInput/secondInput;
// }
// else if(operator=="%"){
//     result=firstInput%secondInput;
// }
// alert(result);

//                      CHAPTER-12-13

//Question-01
// var inputNumOrStr=prompt("Enter a number or string");
// if(inputNumOrStr>="A"&&inputNumOrStr<="Z"){
//   alert("the given number is Uppercase");
// }
// else if(inputNumOrStr>="a"&&inputNumOrStr<="z"){
//   alert("the give number is lowercase");
// } 
// else if((inputNumOrStr>="0"&&inputNumOrStr<="9")){
//   alert("the given input is number");
// }

//Question-02
// var var1=+prompt("Enter first number");
// var var2=+prompt("Enter second number");
// if(var1>var2){
//     alert("var1 is greater than var2");
// }
// else if(var2>var1){
//     alert("var2 is greater than var1");
// }
// else if(var2==var1){
//     alert("var1 and var2 are equal");
// }

//Question-03
// var inputNum=+prompt("Enter a number");
// if(inputNum<0){
//     alert("Your number is Negative.");
// }
// else if(inputNum>0){
//     alert(" Your number is Positive.");
// }
// else{
//     alert("Your number is zero.");
// }

//Question-04
// var inputChar=prompt("Enter only one character");
// if(inputChar=="b"||inputChar=="c"||inputChar=="d"||inputChar=="f"||inputChar=="g"||inputChar=="h"||inputChar=="j"||inputChar=="k"||inputChar=="l"||inputChar=="m"||inputChar=="n"||inputChar=="p"||inputChar=="q"||inputChar=="r"||inputChar=="s"||inputChar=="t"||inputChar=="v"||inputChar=="w"||inputChar=="x"||inputChar=="y"||inputChar=="z"){
//     alert("true");
// }
// else if(inputChar=="a"||inputChar=="e"||inputChar=="i"||inputChar=="o"||inputChar=="u"){
//     alert("false");
// }
// else{
//     alert("outside input invalid");
// }

//Question-05
// var varPassword="ashraq";
// var userInsertPassword=prompt("Enter Your Password");
// if(userInsertPassword==varPassword){
//     alert("Correct! The password youentered matches the original password")
// }
// else {
//     alert("Icorret Password!!!");
// }

//Question-06
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else      //here Bracket is missing
// greeting = "Good evening";
// }
// alert(greeting);

//Question-07
// var inputTime=prompt("Enter Your Time");
// if(inputTime>="0000" && inputTime<"12:00"){
//     alert("Good Morning");
// }
// else if(inputTime>="12:00" && inputTime<"17:00"){
//     alert("Good afternoon");
// }
// else if(inputTime>="17:00" && inputTime<"21:00"){
//     alert("Good evening");
// }
// else if(inputTime>="21:00" && inputTime<="23:59"){
// alert("Good night");
// }

//                   CHAPTER-14-16 : ARRAYS

//Question-1,2,3,4,5,6
// var emptyArray1=[];
// var emptyObject={};
// var stringArray=["Mango","Orange","Banana","Apple"];
// var numberArray=[1,2,3,4,5,6,7,8,9];
// var boolArray=[false,true];
// var mixArray=["ashraf","ali",1,2,false,true];

//Question-07
// var qualificationArray=["SSC", "HSC", "BCS","BS", "BCOM", "MS"," M. Phil", "PhD"];
// document.write("<h1>Qualifications:</h1>");
// document.write("1) "+qualificationArray[0]+"<br>");
// document.write("2) "+qualificationArray[1]+"<br>");
// document.write("3) "+qualificationArray[2]+"<br>");
// document.write("4) "+qualificationArray[3]+"<br>");
// document.write("5) "+qualificationArray[4]+"<br>");
// document.write("6) "+qualificationArray[5]+"<br>");
// document.write("7) "+qualificationArray[6]+"<br>");
// document.write("8) "+qualificationArray[7]);

//Question-08
// var studentName=["Michael","John","Tony"];
// var studentScore=[320,230,480];
// var totalMarks=500;
// var percentageOfMichael=studentScore[0]/totalMarks*100;
// var percentageOfJohn=studentScore[1]/totalMarks*100;
// var percentageOfTony=studentScore[2]/totalMarks*100;
// document.write("Score of "+studentName[0]+" is "+studentScore[0]+" . "+" Percentage: "+percentageOfMichael+"%"+"<br>");
// document.write("Score of "+studentName[1]+" is "+studentScore[1]+" . "+" Percentage: "+percentageOfJohn+"%"+"<br>");
// document.write("Score of "+studentName[2]+" is "+studentScore[2]+" . "+" Percentage: "+percentageOfTony+"%");

//Question-09
//a
// var color=["red","black","white","brown"];
// document.write("Old array:"+color+"<br/>");
// var userInputColor1=prompt("Enter first color")
//  color.unshift(userInputColor1);
//  document.write("Updated array in tbe begning: "+color+"<br/>");
//b
//  color.push(userInputColor1);
//  document.write("Updated array in tbe last: "+color+"<br/>")
//c
// var userInputColor2=prompt("Enter second color");
// color.splice(0,0,userInputColor1,userInputColor2);
// document.write("Added Two color in tbe begning: "+color+"<br/>");
//d
// color.shift();
// document.write("Delete a color from the begning: "+color+"<br/>");
//e
// color.pop();
// document.write("Delete a color from the last: "+color+"<br>");
//f
// var idex=+prompt("Enter the Position for add a colors:");
// color.splice(idex,0,userInputColor1,userInputColor2);
// document.write("User choose position add colors "+color+"<br>");
//g
// var indexForDeleteColrs=+prompt("Enter a indexing number  how many color are you delete ");
// var startingIndex=+prompt("Enter a starting index");
// color.splice(startingIndex,indexForDeleteColrs);
// document.write("User Own how many delete color "+color);

//Question-10
// var scoreOfStudents=[320,230,480,120];
// document.write("Scores of Students: "+scoreOfStudents+"<br/>");
// var orderScoreOfStudents=scoreOfStudents.sort();
// document.write("Ordered Scores of Students: "+orderScoreOfStudents);

//Question-11
// var cities=["Karachi","Lahore","Islambad","Quetta","Peshawar"];
// var selectedCities=cities.slice(2,5);
// document.write(selectedCities);

//Question-12
// var arr=["This","is","my","cat"];
// var  arr1 =arr.join(" ");
// document.write("<h1>Array:</h1>");
// document.write(arr+"<br/>");
// document.write("<h1>String:</h1>")
// document.write(arr1);

//Question-13
// var arr1=["keyboard","mouse","printer","moniter"];
// var i=0;
// document.write("Devices:<br>"+arr1+"<br/><br/>");
// while (i<arr1.length){
// document.write("Output:<br>"+arr1[i]+"<br/>");
// i++;
// }

//Question-14
// var arr1=["keyboard","mouse","printer","moniter"];
// var i = arr1.length-1;
// document.write("Devices:<br>"+arr1+"<br/><br/>");
//  while (i>=0){
//  document.write("Output:<br>"+arr1[i]+"<br/>");
//  i--;
//  }

//Question-15
// var man=["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
// document.write("<select><option>"+man[0]+"</option><option>"+man[1]+"</option><option>"+man[2]+"</option><option>"+man[3]+"</option><option>"+man[4]+"</option><option>"+man[5]+"</option></select>");

//                  CHAPTER:17-20

//Question-01
// var multidimensionalArray=["ashraf","ali",["kakozai","achakzai"]];

//Question-02
// var multidimensionalArray=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// for(var i=0;i<multidimensionalArray.length;i++){
//   document.write("<br>");
//   for(var j=0;j<multidimensionalArray[i].length;j++){
//     document.write(multidimensionalArray[i][j]);
//   }
// }

//Question-03
// var num=0;
// for(var i=0;i<10;i++){
//   num += 1;
//   document.write(num+"<br>");
// }

//Question-04
// var num= +prompt("Enter a number to show its multiplication table");
// var lengthOfTable = +prompt("Enter length of  multiplication Table");
// document.write("<span>Multiplication table of :</span>"+num+"<br>");
// document.write("<span>Length is :</span>"+lengthOfTable+"<br><br>");
// for(var i=1;i<=lengthOfTable;i++){
//   document.write(num+" x "+i+" = "+num*i+"<br>");
// }

//Question-05
// var fruits= ["apple", "banana", "mango","orange","strawberry"];
// for(var i=0;i<fruits.length;i++){
//   document.write(fruits[i]+"<br>");
// }
// for(var j=0;j<fruits.length;j++){
// document.write("<p>Element at index "+j+" is "+fruits[j]+"</p>");
// }

//Question-06
// var countNum=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// document.write("<h1>Counting :</h1>");
// for(var i=0;i<countNum.length;i++){
//   document.write(countNum[i]+",");
// }
// document.write("<h1>Reverse Counting :</h1>");
// for(var i=countNum.length-6;i>=0;i--){
//   document.write(countNum[i]+",");
// }
// document.write("<h1>Even :</h1>");
// for(var i=0;i<countNum.length;i++){
//   if(countNum[i]%2===0){
//     document.write(countNum[i]+",");
//   }
// }
// document.write("<h1>Odd :</h1>");
// for(var i=0;i<countNum.length;i++){
//   if(countNum[i]%2!==0){
//     document.write(countNum[i]+",");
//   }
// }
// document.write("<h1>Series :</h1>");
// for(var i=0;i<countNum.length;i++){
//   if(countNum[i]%2===0){
//     document.write(countNum[i]+"k"+",");
//   }
// }

//Question-07
// var chicking=false;
// var bakeryItems =["cake", "apple pie", "cookie", "chips", "patties"];
// var userWant=prompt("Wellcome to ABC Bakery  Which item  do you want???");
// for(var i=0;i<bakeryItems.length;i++){
//   if(userWant===bakeryItems[i]){
//     chicking=true;
//     break;
//   }
// }
// if(chicking){
//   document.write(userWant+" available at index "+i+" in our bakery");
// }
// else{
// document.write("Sorry!! "+userWant+" is not available in our bakery");
// }

//Question-08
// var array= [24, 53, 78, 91, 12];
// var stor;
// document.write("Array items: "+array);
// for(i=0;i<array.length;i++){
// for(j=0;j<array.length;j++){
//   if(array[i]>array[j]){
// stor=array[i];
//   }
//   else if(array[i]<array[j]){
//     array[i]=array[j];
//   }
//   else{
//     array[i]=array[i];
//   }
// }
// document.write("<br> The largest number is :"+array[i]);
// break;
// }

//Question-09
// var array= [24, 53, 78, 91, 12];
// var stor;
// document.write("Array items: "+array);
// for(i=0;i<array.length;i++){
// for(j=0;j<array.length;j++){
//   if(array[i]<array[j]){
// stor=array[i];
//   }
//   else if(array[i]>array[j]){
//     array[i]=array[j];
//   }
//   else{
//     array[i]=array[i];
//   }
// }
// document.write("<br> The smallest number is :"+array[i]);
// break;
// }

//Qusetion-10
// var num=0;
// for(i=0;i<100;i++){
// num +=5;
// if(num<=100){
// document.write(num+",");
// }
// }

//                      CHAPTER-21-25

// Question-01
// var firstName = prompt("Enter first name");
// var secondName = prompt("Enter second name");
// var fullName = firstName +" "+ secondName;
// alert("Asslamualikum "+ fullName);

//Question-02
// var userInput = prompt("Enter moblie name ");
// var storeLength = userInput.length;
// document.write("My favorite phone is :"+ userInput +"<br>");
// document.write("Length of string :"+ storeLength);

//Question-03
// var country = "Pakistani";
// var indexFind = country.indexOf("n");
// document.write("String :"+ country+"<br>");
// document.write("Index of 'n' :"+ indexFind);

//Question-04
// var hello = "Hello World";
// var indexFind = hello.lastIndexOf("l");
// document.write("String : "+ hello +"<br>");
// document.write("Last index of 'l' : "+ indexFind);

//Question-05
//  var country = "Pakistani";
//  var indexFind = country.charAt(3);
//  document.write("String :"+ country+"<br>");
//  document.write("Character at index 3 : "+ indexFind);

// Question-06
// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");
// var fullName = firstName.concat(lastName)
// document.write(fullName); 

//Question-07
// var city = "Hyderabad";
// var secondCity = "islam" + city.slice(5);
// document.write("City :" + city + "<br>");
// document.write("After replacement :" + secondCity);
//     OR
// var firstCityName = "Hyderabad";
// var replacingCity = "islamabad";
// var changeCityName = firstCityName.replace("Hyder" , "islam");
// document.write("City : " + firstCityName + "<br>");
// document.write("After replacement : " + changeCityName);

//Question-08
// var message = "Ashraf and Zaid are friends and they are learning very well and they are living in karachi";
// var unchange = "and";
// var replace = "&";
// for (var i = 0; i < message.length; i++){
//   if (message.slice(i , i + unchange.length ) === "and"){
// message = message.slice(0 , i) + replace + message.slice(i + unchange.length );
//   }
// }
// document.write(message);

//Question-09
// var str = "472";
// var num = parseInt(str);
// document.write("Value :"+str +"<br>");
// document.write("Type :"+typeof(str) + "<br>");
// document.write("Value :"+num + "<br>");
// document.write("Type :"+typeof(num) );

//Question-10
// var userInput = prompt("Enter a text");
// document.write("User input : "+ userInput +"<br>")
// document.write("Upper Case : "+ userInput.toUpperCase());

//Question-11
// var userInput = prompt("Enter text");
// var titelCase = userInput[0].toUpperCase() + userInput.slice(1);
// document.write("User input : "+ userInput + "<br>");
// document.write("Title case : "+ titelCase);

//Question-12
// var num = 35.26;
// var dot = ".";
// var str = num.toString().split("").join("");
// for (var i = 0; i < str.length; i++){
//   if (str[i] === "."){
//     str = str.slice(0 , i ) + "" + str.slice(i  + 1);
//   }
// }
// document.write("Number : "+ num +"<br>");
// document.write("Result : "+str);

//Question-13
// var userInput = prompt("Enter Your Name");
// var spChar = ["!", ",", ".", "@"];
// var message;
// var check = false;
// for (var i = 0; i < userInput.length; i++) {
//   for (var j = 0; j < spChar.length; j++){
//     if (userInput[i] === spChar[j]) {
//       message = "Invalid Name!!! ";
//       check = true;
//       break;
//     }
//   }
// }
// if (! check) {
//   message = "Correct your Name";
// }
// alert(message);

//Question-14
// var userInput = prompt("Welcome to our Backery write name of any item");
// var foods = ["cake", "apple pie", "cookie", "chips", "patties"];
// var check = false;
// for (var i = 0; i < foods.length; i++) {
//   if (userInput.toLowerCase() === foods[i].toLowerCase()) {
//     document.write(foods[i] + " is available at index " + i + " in our backery");
//     check = true;
//     break;
//   }
// }
// if (!check) {
//   document.write("Sorry! " + userInput + " is not  available in our backery");
// }

//Question-15
// var userInput = prompt("Enter password");
// var check = false;
// if (userInput.length >= 6 && userInput !== "!" && userInput !== "&" && userInput !== "@" && userInput !== "%" && userInput !== "^") {
//   if ((userInput >= "0" && userInput <= "9") || (userInput >= "a" && userInput <= "z") || (userInput >= "A" && userInput <= "Z")) {
//     if (userInput[0] !== "0" && userInput[0] !== "1" && userInput[0] !== "2" && userInput[0] !== "3" && userInput[0] !== "4" && userInput[0] !== "5" && userInput[0] !== "6" && userInput[0] !== "7" && userInput[0] !== "8" && userInput[0] !== "9") {
//       document.write("Your password is corret" + "<br>");
//       check = true;
//     }
//   }
  
// }
// if (!check) {
//   document.write("invalid password");
// }

//Question-16
// var university = "university of karachi";
// for (var i = 0; i < university.length; i++){
// var meth = university.split("").join("");
// document.write(meth[i]+"<br>");
// }

// Question-17
// var userInput = prompt("Enter text");
// document.write("User input :"+ userInput +"<br>");
// document.write("Last character of input : "+ userInput[userInput.length-1]);

// Question-18
// var str = "The quick brown fox jumps over the lazy dog ";
// var word = "the";
// var count = 0;
// for (var i = 0; i < str.length; i++){
//   if ((str.slice(i, i + word.length)).toLowerCase() === "the"){
// count += 1;
//   }
// }
// document.write("Text : "+ str + "<br>");
// document.write("There are "+ count + " occurrences of word 'the'");
