const modalTrigger = document.querySelectorAll('.modal-trigger');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const close = document.querySelector('.close');

modalTrigger.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'block';
        modalContent.querySelector('h2').textContent = item.textContent;
        const description = item.getAttribute('data-description');
        modalContent.querySelector('p').textContent = description;
    });
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});