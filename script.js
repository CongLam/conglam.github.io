document.addEventListener('DOMContentLoaded', function() {

    // Typed.js initialization
    if (document.getElementById('typed-text')) {
        var typed = new Typed('#typed-text', {
            strings: ["Web Developer.", "Backend Specialist.", "Frontend Enthusiast."],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            backDelay: 2000,
        });
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                 navLinks.classList.remove('active');
            });
        });
    }


    // Active navigation link on scroll
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav .nav-links li a');

    window.addEventListener('scroll', ()=> {
        let current = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(pageYOffset >= (sectionTop - sectionHeight / 3)){
                current = section.getAttribute('id');
            }
        })
        
        navLi.forEach( a => {
            a.classList.remove('active');
            if(a.getAttribute('href').includes(current)){
                a.classList.add('active');
            }
        })
    });
});
