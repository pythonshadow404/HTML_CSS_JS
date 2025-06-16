document.addEventListener('DOMContentLoaded', function()) {
    const header = document.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const expanded = header.getAttribute('aria-expanded') === 'true';
    })
}