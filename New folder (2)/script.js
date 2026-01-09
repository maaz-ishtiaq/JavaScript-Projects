// let student = {
//     fullName : "Maaz Ishtiaq",
//     Marks : 486,
//     printMarks : function (){
//         console.log("marks =", this.Marks)
//     },
// }

// const employee ={
//     calctax() {
//         console.log("tax rate is 10%")
//     }
// }
// const maaz = {
//     salary : 50000,
// }
// maaz.__proto__ = employee;

// class landcrusior {
//     start () {
//         console.log ("start")
//     }
//     stop () {
//         console.log ("stop")
//     }
//     setbrand(brand){
//         this.brand = "brand"
//     }
// }
// let fortuner = new landcrusior;

// fortuner.setbrand("fortuner")



// class person {
//     constructor(name){
//         this.species = "homo species"
//         this.name = name
//     }
//     eat () {
//         console.log("eat")
//     }
//     sleep(){
//         console.log("Sleep")
//     }

// }
// class enginerr extends person{
//     constructor(name){
//         super(name)
        
//     }
//     work(){
//         console.log("Do Code ")
//     }
//  }
// let maaz = new enginerr("maaz");




// function getData(dataId){

// return new Promise ((resolve, reject)=>{
//     setTimeout( ()=>{
//         console.log("hello", dataId)
//         resolve("success")
//     },2000)    
// })

// }

// getData(1)
//     .then(() => getData(2)) // Returns a new Promise
//     .then(() => console.log("success"))
//     .catch((err) => console.error("Error:", err));

// getData(1)
// .then((res)=>{
//     return getData(2)
// })
// .then((res)=>{
//     console.log("succes")
// })


// getData(1).then((res)=>{
//     getData(2).then((res)=>{
//         console.log("success")
//     })
// })


// function sum(a, b){
// console.log(a+b)
// }
// function calculator(a, b, sum){
//   sum(a,b)
// }
// calculator(1,2,sum)


// let promise = new Promise((resolve, reject) =>{
//     console.log("Last One")
//     reject(123);
// })



// const getPromise = () =>{
//    return new Promise ((resolve , reject) =>{
//         console.log("hello")
//         reject(1223);
//     })
// }

// let promise = getPromise();
// promise.then ((res)=>{
//     console.log("promis is succesful", res)
// })
// promise.catch((err)=>{
//     console.log("reject",err)
// })




// function asynFun1 (){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data1")
//             resolve(123)
//         }, 2000)
//     })
// }



// function asynFun2 (){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data2")
//             resolve(456)
//         }, 2000)
//     })
// }

// console.log("fetching 1.............")
// let p1 = asynFun1();
// p1.then((res)=>{
//     console.log(res)
//     console.log("fetching 2.............")

//     let p2 = asynFun2();
//     p2.then((res) => {
//         console.log(res)
//     }) 
// })



function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  const myCar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
myFunc(myCar)
console.log(myCar)


const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // Output: [2, 4, 6]
 















