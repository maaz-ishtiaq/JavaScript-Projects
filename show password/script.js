let password = document.getElementById("password")
let image = document.getElementById("image")
const showorhide = () => {
    if (password.type == "password") {
        password.type = "text"
        image.src = "eye_4855031.png"

    }
    else {
        password.type = "password"
        image.src = "eye_4855030.png"
    }
}

image.addEventListener('click', or)