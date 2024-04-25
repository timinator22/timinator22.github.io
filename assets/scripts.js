document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("hamburger").addEventListener("click", function() {
        const openElements = document.querySelectorAll('.open');
        for (let element of openElements) {
            element.style.display = 'block';
        }
        const overlayElements = document.querySelectorAll('.overlay');
        for (let element of overlayElements) {
            element.style.display = 'block';
        }
    });

    document.getElementById("close-icon").addEventListener("click", function() {
        const openElements = document.querySelectorAll('.open');
        for (let element of openElements) {
            element.style.display = 'none';
        }
        const overlayElements = document.querySelectorAll('.overlay');
        for (let element of overlayElements) {
            element.style.display = 'none';
        }
    });

    document.getElementById("overlay").addEventListener("click", function() {
        const openElements = document.querySelectorAll('.open');
        for (let element of openElements) {
            element.style.display = 'none';
        }
        const overlayElements = document.querySelectorAll('.overlay');
        for (let element of overlayElements) {
            element.style.display = 'none';
        }
    });

});
