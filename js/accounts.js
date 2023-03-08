let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

let logOut = document.getElementById("logOut-Label");
logOut.addEventListener("click", () => {
    console.log("hello");
});

let home = document.querySelector("home");
let registerLand = document.querySelector("register-land");
let transferLand = document.querySelector("transfer-land");
let profile = document.querySelector('profile');
let log_out = document.querySelector(log - out);