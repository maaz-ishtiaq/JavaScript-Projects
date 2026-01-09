let content = document.querySelector(".content");
let n = prompt("Enter value")
for (let i = 1 ; i <= n; i++) {
    // Create a new .mis div
    let mis = document.createElement("div");
    mis.classList.add("mis");

    // Create a new <p> inside .mis
    let p = document.createElement("p");
    p.textContent = `${i} -  Hamza `;

    // Append the <p> to the .mis div
    mis.appendChild(p);

    // Append the .mis div to the .content container
    content.appendChild(mis);
}

