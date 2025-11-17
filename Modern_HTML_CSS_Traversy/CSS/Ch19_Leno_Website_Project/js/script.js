document.addEventListener('DOMContentLoaded', function() {
    // Toggle navigation menu
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

    toggleButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');

    if (this.window.scrollY > 0) {
        navbar.classList.add('navbar--scroll');
    } else {
        navbar.classList.remove('navbar--scroll');
    }
})