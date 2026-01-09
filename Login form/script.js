const signupBox = document.querySelector(".signup-box");
const signupEmail = signupBox.querySelector(".email");
const signupPassword = signupBox.querySelector(".password");
const signupInvalid = signupBox.querySelector(".invalid");
const signupBtn = signupBox.querySelector(".signup");
const signupShowHide = signupBox.querySelector(".show-hide");

const loginBox = document.querySelector(".login-box");
const loginEmail = loginBox.querySelector(".email");
const loginPassword = loginBox.querySelector(".password");
const loginInvalid = loginBox.querySelector(".invalid");
const loginBtn = loginBox.querySelector(".login-submit");
const loginShowHide = loginBox.querySelector(".show-hide");

const loginSwitchBtn = document.querySelector(".login-btn");
const signupSwitchBtn = document.querySelector(".signup-btn");

let users = JSON.parse(localStorage.getItem("users")) || [];


const isValidEmail = (email) => {
  if(signupEmail == ''){
      signupInvalid.textContent = "Enter Email";
          signupInvalid.style.display = "inline";
}
  return email.includes("@") && email.includes(".");

  
};

// Toggle password visibility
const togglePassword = (input, icon) => {
  if (input.type == "password") {
    input.type = "text";
    icon.src = "open_eyes_white-removebg-preview.png";
  } else {
    input.type = "password";
    icon.src = "close_eye-removebg-preview.png";
  }
};

// Sign Up Function
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkStrength();

  const email = signupEmail.value.trim();
  const password = signupPassword.value.trim();
  if (email == "" || password == "") {
    signupInvalid.textContent = "Please fill in all fields.";
    signupInvalid.style.display = "inline";
    return;
  }
  if (!isValidEmail(email)) {
    signupInvalid.textContent = "Invalid email format.";
    signupInvalid.style.display = "inline";
    return;
  }

  if (users.find(user => user.email === email)) {
    signupInvalid.textContent = "Email already exists.";
    signupInvalid.style.display = "inline";
    return;
    
  }
 
  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
  signupInvalid.style.color = "green";
  signupInvalid.textContent = "Account created! Please login.";
  signupInvalid.style.display = "inline";
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = loginEmail.value.trim();
  const password = loginPassword.value.trim();
  if (email === "" || password === "") {
    loginInvalid.textContent = "Please fill in all fields.";
    loginInvalid.style.display = "inline";
    return;
  }
  const matchedUser = users.find(user => user.email === email && user.password === password);

  if (!matchedUser) {
    loginInvalid.textContent = "Invalid email or password.";
    loginInvalid.style.display = "inline";
    
  }

  loginInvalid.style.color = "green";
  loginInvalid.textContent = "Login successful!";
  loginInvalid.style.display = "inline";
});

signupShowHide.addEventListener("click", () => togglePassword(signupPassword, signupShowHide));
loginShowHide.addEventListener("click", () => togglePassword(loginPassword, loginShowHide));

loginSwitchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  signupBox.style.display = "none";
  loginBox.style.display = "block";
});

signupSwitchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginBox.style.display = "none";
  signupBox.style.display = "block";
});


let strength = document.querySelector(".strength")
const checkStrength = () => {
  const password = signupPassword.value;
  if (/[A-Z]/.test(password) ||  /[a-z]/.test(password) || /[0-9]/.test(password) || /[~!@#$%^&*+-]/.test(password) ){
    strength.innerHTML = "Weak password";
    strength.style.color = "red"
  } 
  if(/[0-9]/.test(password) && (/[a-z]/.test(password)) ) {
     strength.innerHTML = "Normal password"
        strength.style.color = "yellow"

  }
  if(/[~!@#$%^&*+-]/.test(password) && /[0-9]/.test(password)){
    strength.innerHTML = "Strong password"
    strength.style.color = "green"
  }

}
