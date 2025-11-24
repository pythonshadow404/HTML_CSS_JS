document.addEventListener('DOMContentLoaded', function() {
    // Toggle navigation menu and Mobile Menu
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

    toggleButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    // Video Modal
    const modal = document.getElementById('videoModal');
    const videoButton = document.querySelector('.preview__video-button');
    const closeButton = document.querySelector('.modal__close-button');
    const videoPlayer = document.getElementById('videoPlayer')

    // Open modal when clicked
    videoButton.addEventListener('click', function () {
        // Show modal video display
        modal.style.display = 'block';

        //Replace  the src attribute with the video URL
        videoPlayer.src = 'https://www.youtube.com/embed/8sXRyHI3bLw'

        //Close modal on close-button click
        closeButton.addEventListener('click', function () {
            modal.style.display = 'none';
            videoPlayer.src = '';
        });

        // Close modal on outside the modal content on click
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                videoPlayer.src = '';
            }
        })
    });
});

// Navigation background on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');

    if (this.window.scrollY > 0) {
        navbar.classList.add('navbar--scroll');
    } else {
        navbar.classList.remove('navbar--scroll');
    }
})