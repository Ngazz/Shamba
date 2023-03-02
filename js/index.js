function showNext() {
    const nextBtn = document.getElementById('Next');
    const nextItems = document.getElementById('next-items');

    nextBtn.classList.remove('signup-lables');
    nextBtn.classList.toggle('next');
    // nextItems.classList.remove('next');
    // nextItems.classList.toggle('signup-lables');
    // nextBtn.classList.remove('signup-lables');
}

function log_out() {

    const logOutBtn = document.getElementById('logout');
    const logOutItems = document.getElementsByClassName('log-out');

    if (logOutBtn) {
        a = document.getElementsByClassName('log-out');

    }
}

const loginCommand = document.getElementById('log-in');
const signupCommand = document.getElementById("sign-up");

function show_login() {

}

function show_signUp() {

}


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