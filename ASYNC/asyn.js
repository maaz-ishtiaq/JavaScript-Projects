
  ///,,,,, 1-  Asynchronous , callbacks function.................

// function checkInventory(callback) {
//     setTimeout(() => {
//         console.log('Checking the inventory...');
//         callback()
//     }, 2000);
// }
// function createOrder(callback) {
//     setTimeout(() => {
//         console.log('Creating an order...');
//         callback()
//     }, 1000);
// }
// function chargePayment(callback) {
//     setTimeout(() => {
//         console.log('Charging the payment...');
//         callback()

//     }, 2000);
// }
// function sendInvoice(callback) {
//     setTimeout(() => {
//         console.log("Sending the Invoice.....")
//         callback();
//     })
// }
// function main() {
//     checkInventory(() => {
//       createOrder(()=>{
//         chargePayment(()=>{
//             sendInvoice(()=>{ /// This is callbacks Hell
//                 console.log("All Done")
//             });
//         })
//       });
//     })
// }
// main()




/////////2
function checkInventory() {
  return new Promise ((res,rej)=>{
        setTimeout(() => {
        console.log('Checking the inventory...');
        res();
    }, 2000);
    })
    
}
function createOrder() {
   return new Promise ((res, rej)=>{
        setTimeout(() => {
        console.log('Creating an order...');
        res()
    }, 1000);
    })
    
}
function chargePayment() {
    return new Promise ((res, rej)=>{
        setTimeout(() => {
        console.log('Charging the payment...');
        res()

    }, 2000);
    })
    
}
function sendInvoice() {
       return new Promise ((res , rej)=>{
         setTimeout(() => {
        console.log("Sending the Invoice.....")
        res();
    })
    })
   
}
function main() {
    checkInventory()
    .then(createOrder)
    .then(chargePayment)
    .then(sendInvoice)
}
main()



///////3//  Promisesss
function checkInventory() {
  return new Promise ((res,rej)=>{
        setTimeout(() => {
        console.log('Checking the inventory...');
        res();
    }, 2000);
    })
    
}
function createOrder() {
   return new Promise ((res, rej)=>{
        setTimeout(() => {
        console.log('Creating an order...');
        res()
    }, 1000);
    })
    
}
function chargePayment() {
    return new Promise ((res, rej)=>{
        setTimeout(() => {
        console.log('Charging the payment...');
        res()

    }, 2000);
    })
    
}
function sendInvoice() {
       return new Promise ((res , rej)=>{
         setTimeout(() => {
        console.log("Sending the Invoice.....")
        res();
    })
    })
   
}
async function main() {
    await  checkInventory();
    await createOrder();
    await chargePayment();
    await sendInvoice();
    console.log("All Done");
    
}
main()