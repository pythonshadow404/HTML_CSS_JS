// perform this action when the DOM loads (when the content loads)
// when the DOM loads we want to add an event listener  run a function
// querySelector lets us select an element or item from the DOM from the page.
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');
// Take the mobile menu and add a class to it. Use the classList property
// to add a class to it. Use the toggle method to toggle the class on and off.
// When the button is clicked, we want to add and remove the class 'active' on the mobile menu
    toggleButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

});