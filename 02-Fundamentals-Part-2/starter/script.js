// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can Drive :D')


// function logger(){

//     console.log("hello")

// }


// logger()

// function fruitProcessor (apples, oranges){
//     console.log(apples,oranges)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice
// }

// const smoothie =fruitProcessor(5,6)

// console.log(smoothie)


// //Declaration
// function calcAge1(birthYear){
//     return 2037 - birthYear
// }
// const age1=calcAge1(1998)

// //Expression
// const calcAge2 = function(birthYear){
//     return 2037 - birthYear
// }
// const age2= calcAge2(1998)

// console.log(age1,age2)


//Arrow function    
// const calcAge3=birthYear => 2037 -birthYear
// const age3 = calcAge3(1998)
// console.log(age3)

// const yearsUntilRetirement = (birthYear, fisrtName)=>{
//     const age =2037 -birthYear;
//     const retirement = 65 - age;
//     return retirement
// }

// console.log(yearsUntilRetirement(1991))

// function cutFruitPieces(fruit){
//     return fruit *4
// }

// function fruitProcessor (apples, oranges){
//     cutFruitPieces(apples);
//     cutFruitPieces(oranges)

//     console.log(apples,oranges)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice
// }


let calcAverage = (score1,score2,score3)=>(score1+score2+score3)/3

let scoreDolphins =calcAverage(44,23,71)
let scoreKoalas = calcAverage(65,54,49)

function checkWinner(avgDolphins, avgKoalas){
    if (avgDolphins >= 2*avgKoalas)
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
    else if (avgKoalas >= 2* avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
    }
    else{
    return console.log("No team wins...")}
}

checkWinner(scoreDolphins,scoreKoalas)