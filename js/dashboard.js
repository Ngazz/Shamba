// const homeBtn = document.getElementById('home-btn');
// const profileBtn = document.getElementById('profile-btn');
// const homeContent = document.getElementsByClassName('home');
// const profileContent = document.getElementById('profile');

// homeBtn.addEventListener('click', () => {
//     homeContent.style.display = 'block';
//     profileContent.style.display = 'none';
// });

// profileBtn.addEventListener('click', () => {
//     homeContent.style.display = 'none';
//     profileContent.style.display = 'block';
// });

function home() {
    let home = document.getElementsByClassName("home");
    home.setStyle.display = 'none';
}

function register() {
    let register = document.getElementsByClassName("register-land");
    register.style.display = 'block';
    let home = document.getElementsByClassName("home").style.display = 'none';
}

function profile() {
    let profile = document.getElementsByClassName("profile");
    if (profile) {
        profile.classList.add('profile');
    }
}