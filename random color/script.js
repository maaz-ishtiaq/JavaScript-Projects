const getcolor = () => {
    const randomnum = Math.floor(Math.random() * 16777215)
    const randomcode = "#" + randomnum.toString(16)
    const body = document.body,
    button = document.querySelector("button")
    body.style.background = randomcode
    button.style.backgroundColor = randomcode
    button.style.borderColor = randomcode
    document.querySelector("p").innerHTML = randomcode
}
document.getElementById("btn").addEventListener("click",
    getcolor
)