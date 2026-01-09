let input = document.querySelector("input")
let btn = document.getElementById('btn')
let list = document.querySelector(".list")
// let delbtn = document.querySelector("#delete")



function addList (){
if(input.value == ""){
    alert("Enter a Text")
}
else
{
    let delbtn = document.createElement("button")
    let p = document.createElement("p")
    p.innerHTML = input.value;
    p.classList.add("p")
    list.appendChild(p)
    // input.value.remove();
    input.value = '';
    delbtn.innerHTML = "Delete"
    delbtn.classList.add("delbtn")
    p.appendChild(delbtn);
    delbtn.addEventListener('click',()=>{
        p.remove()
    })
}
}

