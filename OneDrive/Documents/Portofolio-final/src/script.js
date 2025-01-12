document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    // Toggle 'active' class on navbar
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Close navbar when a link is clicked
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });

    // Optimize scroll event handling
    let lastScroll = 0;
    const throttleDelay = 100;

    window.addEventListener('scroll', () => {
        const now = Date.now();
        if (now - lastScroll >= throttleDelay) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
            lastScroll = now;
        }
    });
});
