// Log In and Signup Styles

const next = document.getElementById("next");
const next_items = document.querySelector("main .next ");

next.addEventListener('click', () => {
    next_items.classList.toggle(".next")
}, true);