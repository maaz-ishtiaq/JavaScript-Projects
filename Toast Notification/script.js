// const toastbox = document.getElementsByClassName("toastbox")

// function show() {
//    let toast =  document.createElement("div")
//    toast.innerHTML = "success"
//    toast.classList.add("toast")
//    toastbox.appendChild(toast)
// }


const toastbox = document.querySelector(".toastbox");
let success = '<i class="fa-solid fa-check"></i>  Successfully Submitted'
let error =' <i class="fa-solid fa-xmark"></i> Please fix the error'
let invalid = '<i class="fa-solid fa-bug-slash"></i>  Invalid output'
function show(msg) {
   let toast = document.createElement("div");
   toast.innerHTML = msg;
   toast.classList.add("toast");
   toastbox.appendChild(toast);
   if(msg.includes('error')){
toast.classList.add('error')
   }
   if(msg.includes('Invalid')){
    toast.classList.add('invalid')
   }



   setTimeout(()=>{
    toast.remove();
 },3000  )
}
