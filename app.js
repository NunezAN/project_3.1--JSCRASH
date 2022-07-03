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
for ( let i=100;i>0;i--){
    console.log(i);
}
