document.addEventListener("DOMContentLoaded", function() {
  const btn = document.querySelector(".btn");
  const input = document.querySelector(".input");

  btn.addEventListener("click", generateUsers);

  input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      generateUsers();
    }
  });

  function generateUsers() {
    let n = input.value;
    document.querySelector(".uer").innerHTML = "";
fetch(`https://randomuser.me/api/?results=${n}`)
  .then(res => res.json())
  .then(data => {
    data.results.forEach(function (user) {
      console.log(user);

      // === Card ===
      const card = document.createElement("div");
      card.className = "bg-white rounded-lg shadow-md overflow-hidden w-80 m-5";

      // === Image Section ===
      const imgWrapper = document.createElement("div");
      imgWrapper.className = "flex justify-center pt-6";

      const img = document.createElement("img");
      img.src = user.picture.large;
      img.alt = "User";
      img.className = "w-24 h-24 rounded-full border-4 border-white shadow-md";
      imgWrapper.appendChild(img);

      card.appendChild(imgWrapper);

      // === Info Section ===
      const info = document.createElement("div");
      info.className = "p-6 text-center";

      const name = document.createElement("h2");
      name.className = "text-xl font-semibold text-gray-800";
      name.textContent = user.name.first + " " + user.name.last;
      info.appendChild(name);

      // === Details Section ===
      const details = document.createElement("div");
      details.className = "mt-4 text-sm text-gray-600 space-y-2";

      // --- DOB ---
      const dobRow = document.createElement("div");
      dobRow.className = "flex items-center justify-center";
      const dobLabel = document.createElement("span");
      dobLabel.className = "font-medium mr-2";
      dobLabel.textContent = "DOB:";
      const dobValue = document.createElement("span");
      dobValue.textContent = user.dob.date.split("T")[0] + " (Age: " + user.dob.age + ")";
      dobRow.appendChild(dobLabel);
      dobRow.appendChild(dobValue);
      details.appendChild(dobRow);

      // --- Email ---
      const emailRow = document.createElement("div");
      emailRow.className = "flex items-center justify-center";
      const emailLabel = document.createElement("span");
      emailLabel.className = "font-medium mr-2";
      emailLabel.textContent = "Email:";
      const emailValue = document.createElement("span");
      emailValue.textContent = user.email;
      emailRow.appendChild(emailLabel);
      emailRow.appendChild(emailValue);
      details.appendChild(emailRow);

      // --- Location ---
      const locRow = document.createElement("div");
      locRow.className = "flex items-center justify-center";
      const locLabel = document.createElement("span");
      locLabel.className = "font-medium mr-2";
      locLabel.textContent = "Location:";
      const locValue = document.createElement("span");
      locValue.textContent = `${user.location.city}, ${user.location.country}`;
      locRow.appendChild(locLabel);
      locRow.appendChild(locValue);
      details.appendChild(locRow);

      // --- Gender ---
      const genderRow = document.createElement("div");
      genderRow.className = "flex items-center justify-center";
      const genderLabel = document.createElement("span");
      genderLabel.className = "font-medium mr-2";
      genderLabel.textContent = "Gender:";
      const genderValue = document.createElement("span");
      genderValue.textContent =
        user.gender.charAt(0).toUpperCase() + user.gender.slice(1);
      genderRow.appendChild(genderLabel);
      genderRow.appendChild(genderValue);
      details.appendChild(genderRow);

      info.appendChild(details);
      card.appendChild(info);

      document.querySelector(".uer").appendChild(card);
    });
  })
  .catch(err => console.log(err));    console.log("Fetching " + n + " users...");
  }
});

