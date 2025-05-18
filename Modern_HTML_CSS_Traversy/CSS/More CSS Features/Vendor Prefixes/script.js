document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');

    function toggleHeaderTransparency() {
        if (window.scrollY > 0) {
            header.classList.add('transparent'); //add a class to the header using classList.add()
        } else {
            header.classList.remove('transparent') //removes the transparecy class while at the top of the web page
        }
    }

    window.addEventListener('scroll', toggleHeaderTransparency)
});