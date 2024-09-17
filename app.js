document.addEventListener("DOMContentLoaded", function() {
    // Hamburger menu toggle for mobile
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('visible');
        navMenu.classList.toggle('hidden');
    });

    // GSAP Animations with ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Header Title Animation
    gsap.from('.header-title', {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
    });

    // GSAP animations for the About section
    // GSAP animations for the About section
gsap.from('.about h2', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: '.about',
        start: "top 75%",
    }
});

gsap.from('.about p', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: '.about',
        start: "top 75%",
    }
});

// Optional: Animating icons for a fun touch
gsap.utils.toArray('.about-icons i').forEach(icon => {
    gsap.from(icon, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: Math.random() * 0.5,
        ease: "bounce.out",
        scrollTrigger: {
            trigger: '.about',
            start: "top 75%",
        }
    });
});


    // Header Subtitle Animation
    gsap.from('.header-subtitle', {
        opacity: 0,
        y: 50,
        duration: 1.5,
        delay: 0.3,
        ease: "power3.out",
    });

    // Button Animation
    gsap.from('.btn', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.6,
        ease: "elastic.out(1, 0.3)",
    });

    // Scroll-triggered animation for each section
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 100,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%", // triggers when 80% of the section is visible
                toggleActions: "play none none none",
            }
        });
    });

    // Animating individual skills on hover
    const skillItems = document.querySelectorAll('.skill');
    skillItems.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            gsap.to(skill, {
                scale: 1.1,
                duration: 0.3,
                ease: "back.out(1.7)",
            });
        });
        skill.addEventListener('mouseleave', () => {
            gsap.to(skill, {
                scale: 1,
                duration: 0.3,
                ease: "back.out(1.7)",
            });
        });
    });

    // Sticky navigation bar background change on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) { // When scrolled 50px or more
            nav.style.background = 'rgba(55, 77, 91, 0.9)'; // Darker background on scroll
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.1)'; // Transparent background at top
        }
    });

    // Typing effect for the header text
    const textToType = "Hey there, I'm Meghna!";
    const typingSpeed = 120; // Speed of typing in milliseconds
    let index = 0;

    function typeText() {
        if (index < textToType.length) {
            document.getElementById("typed-text").textContent += textToType.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        }
    }
    
    typeText(); // Start the typing effect

    // Animation for Projects and Experience cards on hover
    const projectItems = document.querySelectorAll('.project, .job');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                y: -10,
                duration: 0.3,
                ease: "power1.out",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"
            });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                y: 0,
                duration: 0.3,
                ease: "power1.out",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)"
            });
        });
    });
});
