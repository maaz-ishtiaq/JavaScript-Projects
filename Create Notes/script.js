let btn = document.getElementsByClassName('btn')
let notes = document.querySelector('.notes')
function noteclick () {
    let create = document.createElement('p')
    create.classList.add('p')
    create.className = "input-box"
    create.setAttribute("contenteditable" ,"true")
    notes.appendChild(create);
    let image = document.createElement("img")
    image.className = "del"
    image.src = "eye_4855030.png"
    create.appendChild(image)
    image.addEventListener('click', ()=>{
        create.remove()
        
    })
}

