// let celsius =10;
// let fahrenheit = (celsius * 1.8)+ 32;
// console.log(fahrenheit);

// let bool = '1' !== 1;  //== compares value === compares values and type
//                         //!= compers not value !== compares not value and type
// console.log(bool);

// -----CONDITIONALS-------

// let subscribed = false;
// let loggedIn = true;

// if (subscribed === true) {
//   console.log("show the video");
// } else if (loggedIn == true) {
//   console.log("tell user to upgrade");
// } else {
//   console.log("LOL Subscribe");
// }
//----------------------------------------------------------
// let cash = 39;
// let price = 40;

// if (cash>price){
//     let amountOwed = cash - price;
//     console.log(`you paid extra - heres your ${amountOwed} change`);
// }
// else if (cash === price){
//     console.log("you paid the exact amount");
// }
// else{
//     let amountNeeded = cash - price;
//     let saying = `not enough money, you still owe ${Math.abs(amountNeeded)} dollar`;
//     if (Math.abs(amountNeeded) <= 1)
//     {
//         console.log(saying);
//     }
//     else{
//         console.log(saying + "s");
//     }
// }

// let cash = 50;
// let price = 60;
// let isStoreOpen = true;                     //&& and || or

// if ( cash >= price || isStoreOpen ){
//     console.log('print the receipt')
// }

// let val = "";

// if (val){
//     console.log("truthy value",!!val)       //!!value to check if value is true or valse
// }
// else{
//     console.log("falsy value",!!val)
// }

//Ternary Operators

// let subscribed = true;
// let loggedIn = true;

// let str = subscribed && loggedIn ? 'show the video': 'hide the video'
// console.log(str);

// let cash = 50;
// let price = 49;
// let isStoreOpen = true;

// let response = cash>=price && isStoreOpen ? "give receipt" : "do not give receipt"

// console.log(response);


//While loop

// let count = 1;

// while (count <= 10) {
//   console.log(count);
//   count++;
// }

//for loop

//example: write a for loop that loops thorugh 1-20 and if divisible by 3 print frontend, if divisible by 5 print simplified, if divisible by 3 and 5 pring frontend simplified, if not divisible by 3 or 5 print the number 
// for(i=1; i<=20;i++){
//     if(i%3==0 && i%5==0)
//     {
//         console.log(`${i} -> Frontend Simplified`)
//     }
//     else if(i%3==0){
//         console.log(`${i} -> Frontend`);
//     }
//     else if(i%5==0){
//         console.log(`${i} -> Simplified`);
//     }
//     else{
//     console.log(`${i} -> ${i}`);
//     }
// }

//print character by character of a word using for loop
// let word= "Frontend Simplified";

// for (i=0; i<word.length; i++) {
//     console.log(word[i]);
// }

// //function definition
// function welcomPersonToFes(firstName, lastName){
//     console.log(`Wellcome to FES, ${firstName} ${lastName}`);
// }
// //call a funtion
// welcomPersonToFes("Alex", "nunez");
// welcomPersonToFes("David", "Doe");

// function sumOfTwoNums(a,b){
//     return a/b
    
// }
// let a = 4;
// let b=1;
// console.log(`sum of 2 numbs: ${sumOfTwoNums(20,3)}`);

//Convert Celsius to Fahrenheit  Question

// function celsiustoFahrenheit(celsius){
//     return (celsius * 1.8) + 32;
// }

// console.log(`0 celsius in fahrenheit is ${celsiustoFahrenheit(0)}`)
// console.log(`10 celsius in fahrenheit is ${celsiustoFahrenheit(10)}`)
// console.log(`30 celsius in fahrenheit is ${celsiustoFahrenheit(30)}`)

//second way to define a function 
// const myName = (name) =>{
//     return name;
// }

// console.log(`My name is ${myName("Alex")}`);

// let arr = [20, 30, 40, 50, 100];

// for(i= 0;i<arr.length;i++){
//     console.log(arr[i]);
// }
//push to add element to the end of the array

// let arr = [20, 30, 40, 50, 100];                    //short hand call back function
// let newArr  = arr.filter(element => element<50);
// console.log(newArr);
    
// let newArr = arr.filter(finddiv10)      //call back function

// function finddiv10(x){
//     return x < 50;
// }

// console.log(newArr);

//----------------------------------------------

// let grades = ["A+", "A", "FAIL"];
// let grades = ["FAIL", "FAIL","B"];
// let grades = ["FAIL"];

// let newArr  = grades.filter(element => element !=="FAIL");     //shorthand

// let newArr = grades.filter(findPassing);                    //longhand
// function findPassing(element){
//     return element !=="FAIL";
// }

// console.log(newArr);
// let grades = ["A+", "A", "FAIL"];
// let goodGrades = [];

// for(i=0;i<grades.length;i++){
//     if (grades[i] !=="FAIL"){
//         goodGrades.push(grades[i]);
//     }
// }
// console.log(goodGrades);

// let arr= [1,4,9,16];                      //array map
//  let newArr= arr.map((element) => "A")

//  console.log(newArr);

// let dollars = [1,5,10,3];
// let dollars2 = [0, 10, 20];

// // let cents = dollars.map(dollar => dollar * 100);
// // let cents2 = dollars2.map(dollar =>{
// //     return dollar*100
// // })

// // console.log(cents);
// // console.log(cents2);

// let cents =[];
// for(i=0;i<dollars.length;i++){
//     cents.push(dollars[i]*100);
// }
// console.log(cents);

// let userFirstName = "Alex";
// let userLastName = "Nunez";
// let userDiscordId = "anunez";
// let userSubscriptionStatus = "VIP";

// let user = [{
//     username: "Anun",
//     password:"123",
//     email:"anunez@gmail.com",
//     subscriptions:"VIP",
//     discordID: "anunez#01010103",
//     lessonCompleted: [0,1,2]
// },{
//     username: "Dmiti",
//     password:"12345",
//     email:"dmiti@gmail.com",
//     subscriptions:"VIP",
//     discordID: "dimim#01010103",
//     lessonCompleted: [0,1,2,3,4,5]
// }
// ,{
//     username: "zen",
//     password:"12345",
//     email:"zen@gmail.com",
//     subscriptions:"VIP",
//     discordID: "zennnnn#01010103",
//     lessonCompleted: [0,1]
// }]
// let count=0;
// function login(email, password){
//     for(i=0;i<user.length;i++){
        
//         if(email === user[i].email){
//             if(password === user[i].password){
//                 console.log("accepted access")
//             }
//             else{
//                 console.log("incorrect password, try again bozo")
//             }
//             return;
//         }
//     }
//     console.log("could not find an email that matches");
// }
// login("anunekz@gmail.com", "1234")


let users = []

function register(user){
    users.push(user);
}

register({username: "Anun", 
email:"anun@gmail.com",
password: "password123",
subscriptionStatus: "VIP",
discordID:"Anun#19031",
lessondsCompleted: [1,2,3,4,5]});


console.log(users);