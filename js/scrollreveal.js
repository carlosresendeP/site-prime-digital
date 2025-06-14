// ScrollReveal Configuration
ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2000,
    delay: 600,
    // easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: false
});

// Hero Section Animations
ScrollReveal().reveal('.hero-content h1', {
    origin: 'left',
    distance: '80px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.hero-content p', {
    origin: 'left',
    distance: '80px',
    duration: 1000,
    delay: 400
});

ScrollReveal().reveal('.hero-content .btn', {
    origin: 'left',
    distance: '80px',
    duration: 1000,
    delay: 600
});

ScrollReveal().reveal('.hero-image', {
    origin: 'right',
    distance: '80px',
    duration: 1200,
    delay: 300
});

// Services Section Animations
ScrollReveal().reveal('.services .section-title', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200
});

// ScrollReveal().reveal('.service-card', {
//     origin: 'bottom',
//     distance: '50px',
//     duration: 800,
//     delay: 200,
//     interval: 200
// });

// Process Section Animations
ScrollReveal().reveal('.process .section-title', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200
});

// ScrollReveal().reveal('.process .section-subtitle', {
//     origin: 'top',
//     distance: '30px',
//     duration: 1000,
//     delay: 400
// });
ScrollReveal().reveal('.process .service-card', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.timeline-content', {
    origin: 'left',
    distance: '100px',
    duration: 1000,
    delay: 200,
    interval: 300
});

ScrollReveal().reveal('.timeline-item', {
    origin: 'left',
    distance: '100px',
    duration: 1000,
    delay: 200,
    interval: 300
});

ScrollReveal().reveal('.timeline-item:nth-child(even)', {
    origin: 'right',
    distance: '100px',
    duration: 1000,
    delay: 200
});

// About Section Animations
ScrollReveal().reveal('.about .section-title', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.about-content', {
    origin: 'bottom',
    distance: '80px',
    duration: 1200,
    delay: 400
});

// Footer Animations
ScrollReveal().reveal('.footer-copy', {
    origin: 'left',
    distance: '50px',
    duration: 800,
    delay: 200
});

ScrollReveal().reveal('.footer-links', {
    origin: 'right',
    distance: '50px',
    duration: 800,
    delay: 200
});

ScrollReveal().reveal('.footer-socials', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 400
});

ScrollReveal().reveal('.footer-social-icons .footer-social-link', {
    origin: 'bottom',
    distance: '30px',
    duration: 600,
    delay: 200,
    interval: 150
});

// Navbar Animation (optional - when scrolling back to top)
ScrollReveal().reveal('.navbar-brand', {
    origin: 'top',
    distance: '30px',
    duration: 800,
    delay: 100
});

ScrollReveal().reveal('.nav-item', {
    origin: 'top',
    distance: '30px',
    duration: 600,
    delay: 200,
    interval: 100
});

// Custom animations for specific elements
ScrollReveal().reveal('.highlight', {
    origin: 'bottom',
    distance: '20px',
    duration: 800,
    delay: 300,
    interval: 200
});

// // Service icons animation
// ScrollReveal().reveal('.service-icon', {
//     origin: 'top',
//     distance: '30px',
//     duration: 1000,
//     delay: 400,
//     scale: 0.8
// });

// Timeline icons animation
ScrollReveal().reveal('.timeline-icon', {
    origin: 'left',
    distance: '50px',
    duration: 800,
    delay: 300,
    rotate: {
        x: 0,
        y: 0,
        z: 360
    }
});

ScrollReveal().reveal('.step-number', {
    origin: 'top',
    distance: '20px',
    duration: 600,
    delay: 500,
    scale: 0.5
});