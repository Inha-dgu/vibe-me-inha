const modal = document.querySelector('#modal');
document.querySelector('.button').addEventListener('click', () =>
    modal.classList.add('is-open'));
document.querySelector('#closeBtn').addEventListener('click', () =>
    modal.classList.remove('is-open'));
modal.addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
        modal.classList.remove('is-open');
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.classList.remove('is-open');
    }
});