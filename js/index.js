function showNext() {
    const nextBtn = document.getElementById('Next');
    const nextItems = document.getElementById('next-items');

    nextBtn.classList.remove('signup-lables');
    nextBtn.classList.toggle('next');
    nextItems.classList.remove('next');
    nextItems.classList.toggle('signup-lables');
    nextBtn.classList.remove('signup-lables');

}