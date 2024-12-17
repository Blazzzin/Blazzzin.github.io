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