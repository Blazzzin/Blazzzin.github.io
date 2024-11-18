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
});


function checkScreenSize() {
    const menu = document.getElementById('verticalMenu');
    const toggle = document.querySelector('.menu-toggle');
    const isLaptop = window.innerWidth >= 1024; // Adjust this value as needed
    if (isLaptop) {
        menu.style.transform = 'translateX(0)'; // Keep the menu open
        toggle.style.display = 'none';
    } else {
        menu.style.transform = 'translateX(-100%)'; // Hide the menu
        toggle.style.display = 'block';
    }
}

// Call on initial load
checkScreenSize();

// Call on window resize
window.addEventListener('resize', checkScreenSize);

// Pop Up Functions
function showPopup1() {
    Swal.fire({
        title: "Portfolio Website",
        //text: "More In Depth Info (Coming Soon)",
        showCloseButton: true,
        icon: 'info',
        width: '50%',
        showConfirmButton: false,
        customClass: {
            popup: 'responsive-popup'  // Custom class for CSS
        },
        html: `
        <div>
        <p><b>Overview:</b></p>
        <p>A portfolio website designed to showcase my achievements, including workplace experience and personal projects. Built using the following technologies:</p>
        <ul style="text-align: left;">
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
        <p>It serves as an interactive portfolio to demonstrate my skills and knowledge in web development. This website features multiple sections, including the following:</p>
        <ul style="text-align: left;">
            <li>Home</li>
            <li>Experience</li>
            <li>Projects - You are currently here!</li>
            <li>Resume</li>
            <li>Games</li>
        </ul>
        <p><b>Features of the Website:</b></p>
        <ul style="text-align: left;">
            <li>Responsive Design for Optimal Viewing on All Devices</li>
            <li>Clean, Accessible HTML Structure</li>
            <li>Stylish and Consistent Layout with Custom CSS</li>
            <li>and more...</li>
        </ul>
        <p>The repository for this website can be accessed by clicking on the GitHub icon below.</p>
        <a href="https://github.com/Blazzzin/blazzzin.github.io" target="_blank" class="github-link">
        <img src="Images/github_logo.png" alt="Github"></a>
    </div>
    `
    });
}

function showPopup2() {
    Swal.fire({
        title: "Smart Crafting Display",
        showCloseButton: true,
        icon: 'info',
        width: '50%',
        showConfirmButton: false,
        customClass: {
            popup: 'responsive-popup'  // Custom class for CSS
        },
        html: `
<div>
    <p><b>Overview:</b></p>
    <p>Currently developing a detailed crafting mod/guide for Minecraft to simplify item creation. The mod features:</p>
    <ul style="text-align: left;">
        <li>Clear component breakdowns for crafting items</li>
        <li>User-friendly quantity displays to help with efficient crafting</li>
    </ul>
    <p><b>Design and Features:</b></p>
    <ul style="text-align: left;">
        <li>Visually appealing interface with customizable backgrounds</li>
        <li>Increased transparency to enhance user experience and accessibility</li>
        <li>Fully operational inventory management system for easy item tracking</li>
        <li>GUI locking features and resizing options to optimize gameplay</li>
    </ul>
    <p>This mod is built using:</p>
    <ul style="text-align: left;">
        <li>Java</li>
        <li>Gradle</li>
        <li>Minecraft Forge APIs</li>
    </ul>
    <p>The repository is private because the project is still a work in progress. Once it reaches a more polished state, I may consider making it public.</p>
    <a href="https://github.com/Blazzzin" target="_blank" class="github-link">
        <img src="Images/github_logo.png" alt="Github">
    </a>
</div>
`
    });
}

function showPopup3() {
    Swal.fire({
        title: "FormatX",
        text: "More In Depth Info (Coming Soon)",
        showCloseButton: true,
        icon: 'info',
        width: '50%',
        showConfirmButton: false,
        customClass: {
            popup: 'responsive-popup'  // Custom class for CSS
        },
        html: `
        <div>
        <p><b>Overview:</b></p>
        <p>An innovative web application designed to simplify document formatting. Built using:</p>
        <ul style="text-align: left;">
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Flask</li>
        </ul>
        <p>FormatX streamlines document formatting, enabling users to easily create professional-looking documents. Key features include:</p>
        <ul style="text-align: left;">
            <li>PDF Merging</li>
            <li>PDF Splittig</li>
            <li>PDF Organize</li>
            <li>DOCX Conversion</li>
            <li>Image Conversion</li>
        </ul>
        <p>The idea for this project originated when I needed to merge and reorganize PDF documents. I found that most available 
            tools were either paid or unreliable, raising concerns about uploading confidential files. This led me to create my own solution.</p>
        <p>The repository is private because the project is still a work in progress. Once it reaches a more polished state, I may consider making it public.</p>
        <a href="https://github.com/Blazzzin" target="_blank" class="github-link">
        <img src="Images/github_logo.png" alt="Github"></a>
    </div>
    `
    });
}

function showPopup4() {
    Swal.fire({
        title: "Retail Banking System",
        showCloseButton: true,
        icon: 'info',
        width: '50%',
        showConfirmButton: false,
        customClass: {
            popup: 'responsive-popup'  // Custom class for CSS
        },
        html: `
<div>
    <p><b>Overview:</b></p>
    <p>Developed a retail banking system featuring a JavaFX GUI and MySQL database, with a focus on scalability and maintainability. Key features include:</p>
    <ul style="text-align: left;">
        <li>Role-based authentication system for customers and employees</li>
        <li>Customer transactions: deposits and withdrawals</li>
        <li>Employee capabilities: managing customer accounts</li>
    </ul>
    <p><b>Database and Automation Features:</b></p>
    <ul style="text-align: left;">
        <li>Automated database operations with Bash scripts for table creation, data population, and querying</li>
        <li>Streamlined data management across branches and headquarters</li>
        <li>Enforced data integrity with unique constraints and credential storage</li>
    </ul>
    <p>This system was built using:</p>
    <ul style="text-align: left;">
        <li>Java</li>
        <li>JavaFX</li>
        <li>MySQL</li>
        <li>Bash Scripts</li>
    </ul>
    <p>Features to enhance user experience:</p>
    <ul style="text-align: left;">
        <li>Data reliability and secure user experience with encrypted credentials</li>
        <li>Interactive GUI for seamless banking interactions</li>
    </ul>
    <a href="https://github.com/Blazzzin" target="_blank" class="github-link">
        <img src="Images/github_logo.png" alt="Github">
    </a>
</div>
`
    });
}

function showPopup5() {
    Swal.fire({
        title: "Central Processing Unit (CPU)",
        showCloseButton: true,
        icon: 'info',
        width: '50%',
        showConfirmButton: false,
        customClass: {
            popup: 'responsive-popup'  // Custom class for CSS
        },
        html: `
<div>
    <p><b>Overview:</b></p>
    <p>Design and implementation of a CPU using VHDL for an FPGA board. This project includes creating essential components such as the Arithmetic and Logic Unit (ALU), Control Unit (CU) with Finite State Machine (FSM), and a 3x8 Decoder for opcode interpretation.</p>
    
    <p><b>Key Components:</b></p>
    <ul style="text-align: left;">
        <li>Arithmetic and Logic Unit (ALU): Performs various arithmetic and logical operations.</li>
        <li>Control Unit (CU): Manages execution of instructions via a finite state machine (FSM).</li>
        <li>3x8 Decoder: Interprets opcodes and helps in instruction decoding.</li>
    </ul>
    
    <p><b>CPU Features:</b></p>
    <ul style="text-align: left;">
        <li>Handles 8-bit inputs for arithmetic and logical operations.</li>
        <li>Control unit manages the sequencing of instructions and data flow.</li>
        <li>Supports basic operations such as addition, subtraction, AND, OR, and NOT operations.</li>
    </ul>
    
    <p>This CPU design is implemented using:</p>
    <ul style="text-align: left;">
        <li>VHDL (Very High-Speed Integrated Circuit Hardware Description Language)</li>
        <li>FPGA (Field-Programmable Gate Array) for hardware implementation</li>
        <li>Finite State Machine (FSM) for managing CPU control flow</li>
    </ul>
    <a href="https://github.com/Blazzzin" target="_blank" class="github-link">
        <img src="Images/github_logo.png" alt="Github">
    </a>
</div>
`
    });
}

function showPopup6() {
    Swal.fire({
        title: "MazeBot Navigator",
        showCloseButton: true,
        icon: 'info',
        width: '50%',
        showConfirmButton: false,
        customClass: {
            popup: 'responsive-popup'  // Custom class for CSS
        },
        html: `
<div>
    <p><b>Overview:</b></p>
    <p>The MazeBot Navigator project focuses on programming the eebot mobile robot to autonomously navigate through a maze, find the exit, and learn the correct path by exploring incorrect branches and retracing its path. The robot uses assembly language for controlling its movements and sensors.</p>
    
    <p><b>Key Components:</b></p>
    <ul style="text-align: left;">
        <li>Navigation: The robot explores the maze using sensors to detect intersections and obstacles.</li>
        <li>Path Learning: The robot learns the correct path by evaluating wrong branches and adjusting its movement.</li>
        <li>Sensor & Motor Control: Programming sensors like bumper switches and guider sensors, as well as controlling motors for movement.</li>
        <li>AI Decision Making: The robot uses AI algorithms to decide on the best path and backtrack when necessary.</li>
    </ul>
    
    <p><b>Technologies Used:</b></p>
    <ul style="text-align: left;">
        <li>HCS12 Assembly for Robot Programming</li>
        <li>Sensor Integration (Bumper Switches, Guider Sensors)</li>
        <li>Actuator Control for Motors</li>
    </ul>            
    <a href="https://github.com/Blazzzin" target="_blank" class="github-link">
        <img src="Images/github_logo.png" alt="Github">
    </a>
</div>
`
    });
}