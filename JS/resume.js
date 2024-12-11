function toggleMenu() {
    var menu = document.getElementById('verticalMenu');
    var toggle = document.querySelector('.menu-toggle');
    if (window.innerWidth <= 1023) { // Only toggle if screen width is 1023 or less
        menu.classList.toggle('open');
        if (menu.classList.contains('open')) {
            menu.style.transform = 'translateX(0%)'; // Show menu
            toggle.style.display = 'none'; // Hide toggle button
        } else {
            menu.style.transform = 'translateX(-100%)'; // Hide menu
            toggle.style.display = 'block'; // Show toggle button
        }
    }
}

function adjustMenuOnResize() {
    var menu = document.getElementById('verticalMenu');
    var toggle = document.querySelector('.menu-toggle');
    var pdfContainer = document.getElementById('pdfContainer');
    if (window.innerWidth > 1200) {
        menu.classList.add('open');
        menu.style.transform = 'translateX(0%)'; // Keep menu open
        toggle.style.display = 'none'; // Hide toggle button
        // Add the PDF embed
        pdfContainer.innerHTML = '<embed src="../Assets/Resume.pdf" type="application/pdf" />';
    } else {
        menu.classList.remove('open');
        menu.style.transform = 'translateX(-100%)'; // Hide menu
        toggle.style.display = 'block'; // Show toggle button
        // Change to download link
        pdfContainer.innerHTML = '<div class="download-link"><a href="../Assets/Resume.pdf" target="_blank">YOUR BROWSER DOES NOT SUPPORT PDF VIEWERS. <u>DOWNLOAD</u> THE RESUME INSTEAD</a></div>';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    adjustMenuOnResize(); // Initial adjustment

    window.addEventListener('resize', adjustMenuOnResize); // Adjust on resize

    var navLinks = document.querySelectorAll('.nav-links a');
    var currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(function (link) {
        var linkPath = link.getAttribute('href').split('/').pop();
        if (currentPath === linkPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }

        link.addEventListener('click', function () {
            navLinks.forEach(function (nav) {
                nav.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});

document.addEventListener('click', function (event) {
    var menu = document.getElementById('verticalMenu');
    var toggle = document.querySelector('.menu-toggle');
    if (!menu.contains(event.target) && !toggle.contains(event.target) && menu.classList.contains('open') && window.innerWidth <= 1023) {
        toggleMenu();
    }
});