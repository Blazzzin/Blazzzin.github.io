function toggleMenu() {
    var menu = document.getElementById('verticalMenu');
    var toggle = document.querySelector('.menu-toggle');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menu.style.transform = 'translateX(-100%)'; // Hide menu
        toggle.style.display = 'block'; // Show toggle button
    } else {
        menu.classList.add('open');
        menu.style.transform = 'translateX(0%)'; // Show menu
        toggle.style.display = 'none'; // Hide toggle button
    }
}

// Close menu if clicking outside
document.addEventListener('click', function (event) {
    var menu = document.getElementById('verticalMenu');
    var toggle = document.querySelector('.menu-toggle');
    var target = event.target;
    if (!menu.contains(target) && !toggle.contains(target) && menu.classList.contains('open')) {
        toggleMenu(); // Close the menu
    }
});

// Highlight the active link
document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-links a');
    var currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(function (link) {
        var linkPath = link.getAttribute('href').split('/').pop();
        if (currentPath === linkPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Ensure only one link is active
        }

        link.addEventListener('click', function () {
            navLinks.forEach(function (nav) {
                nav.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    let lastScrollTop = 0; // Keeps track of the last scroll position
    const toggle = document.querySelector('.menu-toggle');

    window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // User is scrolling down
            toggle.style.display = 'none';
        } else {
            // User is scrolling up
            toggle.style.display = 'block';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
});

function checkScreenSize() {
    const menu = document.getElementById('verticalMenu');
    const toggle = document.querySelector('.menu-toggle');
    const content = document.body;
    const isLaptop = window.innerWidth >= 1024; // Adjust this value as needed
    if (isLaptop) {
        menu.style.transform = 'translateX(0)'; // Keep the menu open
        toggle.style.display = 'none';
        content.classList.add('menu-open');
    } else {
        menu.style.transform = 'translateX(-100%)'; // Hide the menu
        toggle.style.display = 'block';
        content.classList.remove('menu-open');
    }
}

// Call on initial load
checkScreenSize();

// Call on window resize
window.addEventListener('resize', checkScreenSize);