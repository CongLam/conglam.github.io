// Optimized Portfolio Script with Performance Enhancements
(function() {
    'use strict';
    
    // Portfolio data (embedded for performance)
    const portfolioData = {
        "personalInfo": {
            "name": "Lam Tuan Cong",
            "title": "Web Developer",
            "email": "lamtuancong2807@gmail.com",
            "phone": "037.353.9357",
            "address": "Ha Dong, Hanoi",
            "profileImage": "profile.png",
            "cvFile": "Lam-Tuan-Cong-CV.pdf"
        },
        "hero": {
            "typedText": ["Web Developer.", "Backend Specialist.", "Frontend Enthusiast."],
            "subtitle": "A passionate developer focused on building efficient, scalable, and modern web applications."
        },
        "about": {
            "description": "I am a Web Developer with over 4 years of experience in creating robust back-end systems and dynamic front-end interfaces. My journey in tech is driven by a passion for problem-solving and a desire to build solutions that make a tangible impact. I thrive in collaborative environments and am always eager to learn new technologies.",
            "goals": [
                {
                    "icon": "fa-solid fa-rocket",
                    "title": "Short-term Goal",
                    "text": "To accumulate more experience, hone my skills in handling and efficiently managing tasks with precision and speed."
                },
                {
                    "icon": "fa-solid fa-sitemap",
                    "title": "Long-term Goal",
                    "text": "To become a Solution Architect, designing and delivering high-impact, elegant solutions for complex business challenges."
                }
            ]
        },
        "experience": [
            {
                "date": "Oct 2021 - Present",
                "title": "Web Developer (PHP & Java)",
                "company": "SUN Asterisk Vietnam",
                "details": [
                    "Developed and maintained over 6 projects using PHP (Laravel) and Java (Spring Boot).",
                    "Engineered robust backend systems with MySQL and PostgreSQL.",
                    "Built dynamic and responsive user interfaces using Vue.js.",
                    "Collaborated closely with clients from the Japanese market, ensuring high-quality deliverables."
                ]
            },
            {
                "date": "Oct 2020 - 2021",
                "title": "PHP Developer",
                "company": "NTQ Solution",
                "details": [
                    "Contributed to 2 major web development projects as a backend developer.",
                    "Utilized PHP as the primary backend language with MySQL and PostgreSQL databases.",
                    "Gained foundational experience in a professional development environment."
                ]
            }
        ],
        "projects": [
            {
                "title": "Banking API & Identity Management",
                "role": "Backend Developer (2024 - Present)",
                "description": "Developed backend APIs using Spring Boot for a bank's transfer request system. Implemented Keycloak for robust identity and access management.",
                "tags": ["Java", "Spring Boot", "Keycloak", "API"]
            },
            {
                "title": "360° Car Viewer System",
                "role": "Frontend Developer (2023 - 2024)",
                "description": "Engineered the frontend with Vue.js for an internal 360° car viewing system, allowing for detailed, interactive vehicle image inspection.",
                "tags": ["Vue.js", "JavaScript", "UI/UX"]
            },
            {
                "title": "Internal Data Management System",
                "role": "Backend Developer (2021 - 2023)",
                "description": "Built APIs with Laravel for an internal management system, featuring efficient data import/export functionalities for large datasets.",
                "tags": ["PHP", "Laravel", "MySQL", "Data Processing"]
            },
            {
                "title": "Car Wash Mgt. Web App",
                "role": "Web Developer (2020 - 2021)",
                "description": "Created a full-stack car wash machine management web app using Laravel, jQuery, and later integrated React Native for a mobile version.",
                "tags": ["Laravel", "jQuery", "React Native", "Full-Stack"]
            }
        ],
        "skills": [
            {
                "category": "Backend",
                "list": ["PHP (Laravel, CakePHP)", "Java (Spring Boot)", "MySQL", "PostgreSQL", "SQL Server", "Redis"]
            },
            {
                "category": "Frontend",
                "list": ["HTML5 & CSS3", "JavaScript (ES6+)", "Vue.js", "jQuery", "AJAX", "Responsive Design"]
            },
            {
                "category": "Tools & DevOps",
                "list": ["VCS (Git & GitHub)", "Docker", "Linux", "CI/CD (Jenkins, GitHub Actions)", "AWS", "System Design"]
            }
        ],
        "education": [
            {
                "icon": "fa-solid fa-graduation-cap",
                "title": "Hanoi University of Industry (HaUI)",
                "details": [
                    "<strong>Major:</strong> Information Technology",
                    "<strong>Specialization:</strong> Computer Science",
                    "<strong>Graduated:</strong> 2021 | <strong>GPA:</strong> 3.1"
                ]
            },
            {
                "icon": "fa-solid fa-award",
                "title": "Excellent Scholarship Recipient",
                "details": [
                    "Awarded twice during my studies at HaUI for outstanding academic performance.",
                    "<strong>Years:</strong> 2019 - 2021"
                ]
            }
        ]
    };

    // Performance monitoring
    const perf = performance.now();
    
    // Cache DOM elements
    const elements = {
        loadingSpinner: document.getElementById('loading-spinner'),
        navbar: document.getElementById('navbar'),
        hamburger: document.getElementById('hamburger'),
        navMenu: document.getElementById('nav-menu'),
        backToTopBtn: document.getElementById('back-to-top'),
        lazyContent: document.getElementById('lazy-content')
    };

    // State management
    let state = {
        currentTypedIndex: 0,
        currentTextIndex: 0,
        typedTextArray: portfolioData.hero.typedText,
        isInitialized: false,
        animationFrameId: null
    };

    // Optimized debounce function
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    // Optimized throttle function for scroll events
    const throttle = (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    };

    // Fast DOM creation helper
    const createElement = (tag, className, innerHTML = '') => {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (innerHTML) el.innerHTML = innerHTML;
        return el;
    };

    // Initialize the portfolio with performance optimizations
    const init = () => {
        if (state.isInitialized) return;
        
        try {
            // Show immediate hero content
            populateHeroContent();
            
            // Initialize critical components first
            initializeNavigation();
            initializeScrollEffects();
            
            // Lazy load non-critical content
            requestAnimationFrame(() => {
                populateContentSections();
                initializeTypingEffect();
                initializeAnimations();
                initializeContactForm();
                hideLoadingSpinner();
                
                // Trigger animations after a short delay
                setTimeout(triggerScrollAnimations, 300);
                
                state.isInitialized = true;
                console.log(`Portfolio loaded in ${(performance.now() - perf).toFixed(2)}ms`);
            });
            
        } catch (error) {
            console.error('Error initializing portfolio:', error);
            hideLoadingSpinner();
            showErrorMessage();
        }
    };

    // Populate hero content immediately for faster perceived performance
    const populateHeroContent = () => {
        const { personalInfo, hero } = portfolioData;
        
        // Update document title immediately
        document.title = `${personalInfo.name} - ${personalInfo.title} | Professional Portfolio`;
        
        // Update hero content
        const heroName = document.getElementById('hero-name');
        const heroDescription = document.getElementById('hero-description');
        const profileImg = document.getElementById('profile-img');
        const downloadBtn = document.getElementById('download-cv');
        
        if (heroName) heroName.textContent = personalInfo.name;
        if (heroDescription) heroDescription.textContent = hero.subtitle;
        if (profileImg) {
            profileImg.src = personalInfo.profileImage;
            profileImg.alt = `${personalInfo.name} Profile Picture`;
        }
        if (downloadBtn) {
            downloadBtn.href = personalInfo.cvFile;
            downloadBtn.download = personalInfo.cvFile;
        }
    };

    // Populate content sections (lazy loaded)
    const populateContentSections = () => {
        const { personalInfo, about, experience, projects, skills, education } = portfolioData;
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = about.description.substring(0, 150) + '...';
        }
        
        // Navigation and footer
        const navName = document.getElementById('nav-name');
        const footerName = document.getElementById('footer-name');
        const footerEmail = document.getElementById('footer-email');
        
        if (navName) navName.textContent = personalInfo.name;
        if (footerName) footerName.textContent = personalInfo.name;
        if (footerEmail) footerEmail.href = `mailto:${personalInfo.email}`;
        
        // Populate sections using document fragments for better performance
        populateAbout(about);
        populateExperience(experience);
        populateProjects(projects);
        populateSkills(skills);
        populateEducation(education);
        populateContactInfo(personalInfo);
    };

    // Optimized section population functions
    const populateAbout = (about) => {
        const aboutDesc = document.getElementById('about-description');
        const goalsGrid = document.getElementById('goals-grid');
        
        if (aboutDesc) aboutDesc.textContent = about.description;
        
        if (goalsGrid) {
            const fragment = document.createDocumentFragment();
            about.goals.forEach(goal => {
                const goalCard = createElement('div', 'goal-card fade-in', `
                    <div class="goal-icon"><i class="${goal.icon}"></i></div>
                    <h3 class="goal-title">${goal.title}</h3>
                    <p class="goal-text">${goal.text}</p>
                `);
                fragment.appendChild(goalCard);
            });
            goalsGrid.appendChild(fragment);
        }
    };

    const populateExperience = (experience) => {
        const timeline = document.getElementById('timeline');
        if (!timeline) return;
        
        const fragment = document.createDocumentFragment();
        experience.forEach(exp => {
            const detailsList = exp.details.map(detail => `<li>${detail}</li>`).join('');
            const timelineItem = createElement('div', 'timeline-item fade-in', `
                <div class="timeline-content">
                    <div class="timeline-date">${exp.date}</div>
                    <h3 class="timeline-title">${exp.title}</h3>
                    <div class="timeline-company">${exp.company}</div>
                    <ul class="timeline-details">${detailsList}</ul>
                </div>
                <div class="timeline-dot"></div>
            `);
            fragment.appendChild(timelineItem);
        });
        timeline.appendChild(fragment);
    };

    const populateProjects = (projects) => {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;
        
        const fragment = document.createDocumentFragment();
        projects.forEach(project => {
            const tags = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
            const projectCard = createElement('div', 'project-card fade-in', `
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-role">${project.role}</div>
                </div>
                <div class="project-content">
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">${tags}</div>
                </div>
            `);
            fragment.appendChild(projectCard);
        });
        projectsGrid.appendChild(fragment);
    };

    const populateSkills = (skills) => {
        const skillsContainer = document.getElementById('skills-container');
        if (!skillsContainer) return;
        
        const fragment = document.createDocumentFragment();
        skills.forEach(skillCategory => {
            const skillsList = skillCategory.list.map(skill => 
                `<span class="skill-item">${skill}</span>`
            ).join('');
            const categoryDiv = createElement('div', 'skill-category fade-in', `
                <h3 class="skill-category-title">${skillCategory.category}</h3>
                <div class="skill-list">${skillsList}</div>
            `);
            fragment.appendChild(categoryDiv);
        });
        skillsContainer.appendChild(fragment);
    };

    const populateEducation = (education) => {
        const educationGrid = document.getElementById('education-grid');
        if (!educationGrid) return;
        
        const fragment = document.createDocumentFragment();
        education.forEach(edu => {
            const detailsList = edu.details.map(detail => `<li>${detail}</li>`).join('');
            const educationCard = createElement('div', 'education-card fade-in', `
                <div class="education-icon"><i class="${edu.icon}"></i></div>
                <h3 class="education-title">${edu.title}</h3>
                <ul class="education-details">${detailsList}</ul>
            `);
            fragment.appendChild(educationCard);
        });
        educationGrid.appendChild(fragment);
    };

    const populateContactInfo = (personalInfo) => {
        const contactDetails = document.getElementById('contact-details');
        if (!contactDetails) return;
        
        contactDetails.innerHTML = `
            <div class="contact-item">
                <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                <div class="contact-text">${personalInfo.email}</div>
            </div>
            <div class="contact-item">
                <div class="contact-icon"><i class="fas fa-phone"></i></div>
                <div class="contact-text">${personalInfo.phone}</div>
            </div>
            <div class="contact-item">
                <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
                <div class="contact-text">${personalInfo.address}</div>
            </div>
        `;
    };

    // Optimized navigation
    const initializeNavigation = () => {
        // Mobile menu toggle
        elements.hamburger?.addEventListener('click', () => {
            elements.hamburger.classList.toggle('active');
            elements.navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        elements.navMenu?.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link')) {
                elements.hamburger.classList.remove('active');
                elements.navMenu.classList.remove('active');
            }
        });
        
        // Smooth scrolling for navigation links
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const target = document.querySelector(e.target.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            }
        });
    };

    // Optimized scroll effects with throttling
    const initializeScrollEffects = () => {
        const handleScroll = throttle(() => {
            const scrollY = window.scrollY;
            
            // Navbar scroll effect
            if (scrollY > 50) {
                elements.navbar?.classList.add('scrolled');
            } else {
                elements.navbar?.classList.remove('scrolled');
            }
            
            // Back to top button
            if (scrollY > 300) {
                elements.backToTopBtn?.classList.add('visible');
            } else {
                elements.backToTopBtn?.classList.remove('visible');
            }
            
            // Update active navigation link
            updateActiveNavLink();
        }, 16); // ~60fps
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Back to top button
        elements.backToTopBtn?.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        }, observerOptions);
        
        // Observe fade-in elements when they're added to DOM
        const observeFadeElements = () => {
            document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
                observer.observe(el);
            });
        };
        
        // Initial observation and set up mutation observer for dynamic content
        setTimeout(observeFadeElements, 100);
        
        const mutationObserver = new MutationObserver(debounce(observeFadeElements, 100));
        mutationObserver.observe(document.body, { childList: true, subtree: true });
    };

    // Optimized active nav link update
    const updateActiveNavLink = () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        const scrollPos = window.scrollY + 100;
        
        for (let section of sections) {
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.clientHeight) {
                currentSection = section.getAttribute('id');
                break;
            }
        }
        
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
        });
    };

    // Optimized typing effect with requestAnimationFrame
    const initializeTypingEffect = () => {
        const typedElement = document.getElementById('typed-text');
        if (!typedElement || state.typedTextArray.length === 0) return;
        
        let typeTimeout;
        
        const typeText = () => {
            if (state.currentTextIndex < state.typedTextArray.length) {
                const currentText = state.typedTextArray[state.currentTextIndex];
                
                if (state.currentTypedIndex < currentText.length) {
                    typedElement.textContent = currentText.substring(0, state.currentTypedIndex + 1);
                    state.currentTypedIndex++;
                    typeTimeout = setTimeout(typeText, 100);
                } else {
                    typeTimeout = setTimeout(deleteText, 2000);
                }
            }
        };
        
        const deleteText = () => {
            const currentText = state.typedTextArray[state.currentTextIndex];
            
            if (state.currentTypedIndex > 0) {
                typedElement.textContent = currentText.substring(0, state.currentTypedIndex - 1);
                state.currentTypedIndex--;
                typeTimeout = setTimeout(deleteText, 50);
            } else {
                state.currentTextIndex = (state.currentTextIndex + 1) % state.typedTextArray.length;
                typeTimeout = setTimeout(typeText, 500);
            }
        };
        
        setTimeout(typeText, 1000);
    };

    // Optimized animations with event delegation
    const initializeAnimations = () => {
        // Event delegation for hover effects
        document.addEventListener('mouseover', (e) => {
            const projectCard = e.target.closest('.project-card');
            if (projectCard) {
                projectCard.style.transform = 'translateY(-10px) scale(1.02)';
            }
        }, { passive: true });
        
        document.addEventListener('mouseout', (e) => {
            const projectCard = e.target.closest('.project-card');
            if (projectCard) {
                projectCard.style.transform = 'translateY(0) scale(1)';
            }
        }, { passive: true });
        
        // Button click animations
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn')) {
                e.target.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    e.target.style.transform = 'scale(1)';
                }, 150);
            }
        });
    };

    // Contact form with optimization
    const initializeContactForm = () => {
        const contactForm = document.getElementById('contact-form');
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const mailtoLink = `mailto:${portfolioData.personalInfo.email}?subject=${encodeURIComponent(formData.get('subject'))}&body=${encodeURIComponent(
                `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\nMessage:\n${formData.get('message')}`
            )}`;
            
            window.location.href = mailtoLink;
            showSuccessMessage('Thank you for your message! Your email client should open now.');
            contactForm.reset();
        });
    };

    // Optimized scroll animations
    const triggerScrollAnimations = () => {
        const fadeElements = document.querySelectorAll('.fade-in:not(.visible)');
        fadeElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 50); // Faster cascade
        });
    };

    // Utility functions
    const hideLoadingSpinner = () => {
        elements.loadingSpinner?.classList.add('hidden');
    };

    const showSuccessMessage = (message) => {
        const successDiv = createElement('div', 'success-message');
        successDiv.style.cssText = `
            position: fixed; top: 20px; right: 20px;
            background: #10b981; color: white;
            padding: 15px 20px; border-radius: 12px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 10000; transform: translateX(400px);
            transition: transform 0.3s ease;
        `;
        successDiv.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-check-circle"></i>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(successDiv);
        
        requestAnimationFrame(() => {
            successDiv.style.transform = 'translateX(0)';
        });
        
        setTimeout(() => {
            successDiv.style.transform = 'translateX(400px)';
            setTimeout(() => document.body.removeChild(successDiv), 300);
        }, 5000);
    };

    const showErrorMessage = () => {
        const errorDiv = createElement('div', 'error-message');
        errorDiv.style.cssText = `
            position: fixed; top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            background: white; padding: 40px; border-radius: 12px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            text-align: center; z-index: 10000;
            max-width: 400px; width: 90%;
        `;
        errorDiv.innerHTML = `
            <div style="color: #ef4444; font-size: 3rem; margin-bottom: 20px;">
                <i class="fas fa-exclamation-triangle"></i>
            </div>
            <h3 style="margin-bottom: 10px; color: #1e293b;">Oops! Something went wrong</h3>
            <p style="color: #64748b; margin-bottom: 20px;">
                We couldn't load the portfolio. Please refresh and try again.
            </p>
            <button onclick="location.reload()" class="btn btn-primary">
                <i class="fas fa-redo"></i> Try Again
            </button>
        `;
        document.body.appendChild(errorDiv);
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        if (state.animationFrameId) {
            cancelAnimationFrame(state.animationFrameId);
        }
    });

})();
