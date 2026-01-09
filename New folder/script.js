// let num = prompt("Enter a Number")
// if(num % 5 == 0){
//     console.log(num," is multiple of 5")

// }
// else{
//     console.log(num, "is not multiple of 5")
// }
// let marks = prompt("Enter your Marks")
// if(marks >= 90 & marks <= 100){
//     console.log("Your grade is A")
// }
// else if(marks >= 80 && marks <= 89){
// console.log("Your grade is B")
// }
// else if(marks >=70 && marks <= 79){
//     console.log("Your grade is C")
// }
// else if(marks >= 60 && marks <= 69){
//     console.log("Your grade is C")
// }

// else if(marks >= 40 && marks <= 59){
//     console.log("Your grade is D")
// }
// else {
//     console.log("FAIL")
// }

// for(let i = 0; i < 100; i++){
//     console.log("Maaz",i)
// }

// for (let i = 0; i < 100; i++) {
//     if (i % 2 == 0) {
//         console.log("maaz", i)
//     }
// else {

// }
// }


// let info = {
//     name: "maaz ishtiaq",
//     age: 17,
//     cgpa : 3.7,
//     class: 12,
// };

// for (let i in info){
//     console.log(i , info[i])
// }
// let sum = 0
// let name = "maaz ishtiaq"
// for (let i of name){
//     sum++;
//     console.log(i)
// }
// console.log(sum);




// let mynum = 10;
// let usernum = prompt("Enter a random num")
// while(mynum != usernum){
// usernum = prompt("Try again")
// }
// console.log("you win the race of programming")


// let str = "maaz"
// console.log(str,str[0])


// let pen = {
//     name: "pen",
//     size: "10m" ,
//     price : "420",


// }
// let i = `the price of ${pen.name} is ${pen.price}`
// console.log(i)

// let fullName = prompt("Enter Your Full Name")
// let userName = "@" + fullName + fullName.length
// console.log(userName);



// let marks = [52, 55, 78, 88, 55];
// let sum = 0
// for( let i of marks){

//     sum += i ;

// }
// let avg = sum / 5
// console.log(`the avg of given marks is ${avg}`)


// let currentVal = [250, 645, 300, 900, 50]
// for(let i of currentVal){
//     let v = i * 0.9 
//     console.log(v)
// }


// let companies = [ "Bloomberg", "Microsoft", "Uber", "Googel", "IBM", "Netflix"]
// companies.shift()
// companies.splice(2, 1, "Ola")
// companies.push("Amazon")
// console.log(companies)


function print(m) {
    console.log("maaz")
}
print()


function two(a , b){
    console.log(a + b)
}
two(44, 44)  //function calling



function sum(x, y) {
    s = x + y;
    return s;
}
let r = sum(3, 4);
console.log(r)  //function return

//////function 

function vowel(str){
    let count = 0;
    for (let char of str){
        if (char === "a" || char === "e" || char === "i" || char === "o"|| char === "u"){
            count++;

        }
    }
    console.log(count)
}

vowel("maaz")


//////arrow function

let vowelcount = (str) => {
    let count = 0;
    for (let char of str){
        if (char === "a" || char === "e" || char === "i" || char === "o"|| char === "u"){
            count++;

        }
    }
    console.log(count)
}
vowelcount(
    "maaaaz"
) 

////////////////FOR EACH 

let arr = [1, 2, 3, 5];
arr.forEach((val) => {
    console.log(val*val);
})


let nums = [1,2, 3, 4]
let cal = (num) =>{
    console.log (num*num);
}
nums.forEach(cal)


let arrr = ["maaz", "ishtiaq", "ali"]
arrr.forEach((val, i, l) => {
    console.log(val.toUpperCase(), i, l)
}
)

///////MAP

let samarr = [4,2,7,8]
let newarr = (ne) => {
    console.log(ne*ne)
}
samarr.map(newarr)


// let ev = [4,2,7,8]
// let evennum = (even) => {
//    return even % 2 === 0
// }
// ev.filter(evennum)


// let ev = [4,2,7,8]
// let evennum = ev.filter((val) => {
//     return val % 2 === 0
// })
// console.log(evennum)


let ev = [4,2,7,8]
let evennum = (val) => {
 val % 2 === 0
}
ev.filter(evennum)



let marks = [89, 90, 50 , 93, 23, 99]
let score = marks.filter ((val) => {
    return val > 90;
})
console.log(score)



let n = prompt("Enter a Num")
let array = []

for (let i = 1; i<=n; i++){
    array[i-1] = i
}
console.log(array)


