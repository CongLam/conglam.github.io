// Global variables
let portfolioData = {
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
      "list": ["PHP (Laravel, CakePHP)", "Java (Spring Boot)", "MySQL", "PostgreSQL", "SQL Server"]
    },
    {
      "category": "Frontend",
      "list": ["HTML5 & CSS3", "JavaScript (ES6+)", "Vue.js", "jQuery", "AJAX", "Responsive Design"]
    },
    {
      "category": "Tools & DevOps",
      "list": ["Git & GitHub", "Docker", "Linux (Ubuntu)", "AWS (Basic)", "System Design"]
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

let currentTypedIndex = 0;
let currentTextIndex = 0;
let typedTextArray = [];

// DOM Elements
const loadingSpinner = document.getElementById('loading-spinner');
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const backToTopBtn = document.getElementById('back-to-top');

// Initialize the portfolio
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Show loading spinner
        showLoadingSpinner();
        
        // Load portfolio data (now embedded)
        populatePortfolioContent();
        
        // Initialize components
        initializeNavigation();
        initializeScrollEffects();
        initializeTypingEffect();
        initializeAnimations();
        initializeContactForm();
        
        // Hide loading spinner
        hideLoadingSpinner();
        
        // Start animations
        setTimeout(() => {
            triggerScrollAnimations();
        }, 500);
        
    } catch (error) {
        console.error('Error initializing portfolio:', error);
        hideLoadingSpinner();
        showErrorMessage();
    }
});

// Populate content from JSON data
function populatePortfolioContent() {
    const { personalInfo, hero, about, experience, projects, skills, education } = portfolioData;
    
    // Update document title
    document.title = `${personalInfo.name} - ${personalInfo.title} | Professional Portfolio`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = about.description.substring(0, 150) + '...';
    }
    
    // Personal Info & Navigation
    document.getElementById('nav-name').textContent = personalInfo.name;
    document.getElementById('footer-name').textContent = personalInfo.name;
    document.getElementById('footer-email').href = `mailto:${personalInfo.email}`;
    
    // Hero Section
    document.getElementById('hero-name').textContent = personalInfo.name;
    document.getElementById('hero-description').textContent = hero.subtitle;
    typedTextArray = hero.typedText;
    
    // Profile image
    const profileImg = document.getElementById('profile-img');
    profileImg.src = personalInfo.profileImage;
    profileImg.alt = `${personalInfo.name} Profile Picture`;
    
    // Download CV button
    const downloadCvBtn = document.getElementById('download-cv');
    downloadCvBtn.href = personalInfo.cvFile;
    downloadCvBtn.download = personalInfo.cvFile;
    
    // About Section
    document.getElementById('about-description').textContent = about.description;
    populateGoals(about.goals);
    
    // Experience Section
    populateExperience(experience);
    
    // Projects Section
    populateProjects(projects);
    
    // Skills Section
    populateSkills(skills);
    
    // Education Section
    populateEducation(education);
    
    // Contact Section
    populateContactInfo(personalInfo);
}

// Populate goals
function populateGoals(goals) {
    const goalsGrid = document.getElementById('goals-grid');
    goalsGrid.innerHTML = '';
    
    goals.forEach(goal => {
        const goalCard = document.createElement('div');
        goalCard.className = 'goal-card fade-in';
        goalCard.innerHTML = `
            <div class="goal-icon">
                <i class="${goal.icon}"></i>
            </div>
            <h3 class="goal-title">${goal.title}</h3>
            <p class="goal-text">${goal.text}</p>
        `;
        goalsGrid.appendChild(goalCard);
    });
}

// Populate experience timeline
function populateExperience(experience) {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';
    
    experience.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item fade-in';
        
        const detailsList = exp.details.map(detail => `<li>${detail}</li>`).join('');
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${exp.date}</div>
                <h3 class="timeline-title">${exp.title}</h3>
                <div class="timeline-company">${exp.company}</div>
                <ul class="timeline-details">
                    ${detailsList}
                </ul>
            </div>
            <div class="timeline-dot"></div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Populate projects
function populateProjects(projects) {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        
        const tags = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
        
        projectCard.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-role">${project.role}</div>
            </div>
            <div class="project-content">
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${tags}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Populate skills
function populateSkills(skills) {
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = '';
    
    skills.forEach(skillCategory => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category fade-in';
        
        const skillsList = skillCategory.list.map(skill => 
            `<span class="skill-item">${skill}</span>`
        ).join('');
        
        categoryDiv.innerHTML = `
            <h3 class="skill-category-title">${skillCategory.category}</h3>
            <div class="skill-list">
                ${skillsList}
            </div>
        `;
        
        skillsContainer.appendChild(categoryDiv);
    });
}

// Populate education
function populateEducation(education) {
    const educationGrid = document.getElementById('education-grid');
    educationGrid.innerHTML = '';
    
    education.forEach(edu => {
        const educationCard = document.createElement('div');
        educationCard.className = 'education-card fade-in';
        
        const detailsList = edu.details.map(detail => `<li>${detail}</li>`).join('');
        
        educationCard.innerHTML = `
            <div class="education-icon">
                <i class="${edu.icon}"></i>
            </div>
            <h3 class="education-title">${edu.title}</h3>
            <ul class="education-details">
                ${detailsList}
            </ul>
        `;
        
        educationGrid.appendChild(educationCard);
    });
}

// Populate contact information
function populateContactInfo(personalInfo) {
    const contactDetails = document.getElementById('contact-details');
    contactDetails.innerHTML = `
        <div class="contact-item">
            <div class="contact-icon">
                <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-text">${personalInfo.email}</div>
        </div>
        <div class="contact-item">
            <div class="contact-icon">
                <i class="fas fa-phone"></i>
            </div>
            <div class="contact-text">${personalInfo.phone}</div>
        </div>
        <div class="contact-item">
            <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="contact-text">${personalInfo.address}</div>
        </div>
    `;
}

// Initialize navigation
function initializeNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active navigation link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

// Update active navigation link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Initialize scroll effects
function initializeScrollEffects() {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to top button
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Back to top button click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Initialize typing effect
function initializeTypingEffect() {
    const typedElement = document.getElementById('typed-text');
    
    if (typedTextArray.length === 0) return;
    
    function typeText() {
        if (currentTextIndex < typedTextArray.length) {
            const currentText = typedTextArray[currentTextIndex];
            
            if (currentTypedIndex < currentText.length) {
                typedElement.textContent = currentText.substring(0, currentTypedIndex + 1);
                currentTypedIndex++;
                setTimeout(typeText, 100);
            } else {
                setTimeout(() => {
                    deleteText();
                }, 2000);
            }
        }
    }
    
    function deleteText() {
        const currentText = typedTextArray[currentTextIndex];
        
        if (currentTypedIndex > 0) {
            typedElement.textContent = currentText.substring(0, currentTypedIndex - 1);
            currentTypedIndex--;
            setTimeout(deleteText, 50);
        } else {
            currentTextIndex = (currentTextIndex + 1) % typedTextArray.length;
            setTimeout(typeText, 500);
        }
    }
    
    // Start typing effect
    setTimeout(typeText, 1000);
}

// Initialize animations
function initializeAnimations() {
    // Add hover effects to project cards
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.project-card')) {
            e.target.closest('.project-card').style.transform = 'translateY(-10px) scale(1.02)';
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('.project-card')) {
            e.target.closest('.project-card').style.transform = 'translateY(0) scale(1)';
        }
    });
    
    // Add click animation to buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn')) {
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = 'scale(1)';
            }, 150);
        }
    });
}

// Initialize contact form
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Create mailto link
        const mailtoLink = `mailto:${portfolioData.personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        showSuccessMessage('Thank you for your message! Your email client should open now.');
        
        // Reset form
        contactForm.reset();
    });
}

// Trigger scroll animations manually
function triggerScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 100);
    });
}

// Show loading spinner
function showLoadingSpinner() {
    loadingSpinner.classList.remove('hidden');
}

// Hide loading spinner
function hideLoadingSpinner() {
    loadingSpinner.classList.add('hidden');
}

// Show success message
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--success-color);
        color: white;
        padding: 15px 20px;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        transform: translateX(400px);
        transition: var(--transition);
    `;
    successDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(successDiv);
    
    // Animate in
    setTimeout(() => {
        successDiv.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        successDiv.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(successDiv);
        }, 300);
    }, 5000);
}

// Show error message
function showErrorMessage() {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 40px;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-xl);
        text-align: center;
        z-index: 10000;
        max-width: 400px;
        width: 90%;
    `;
    errorDiv.innerHTML = `
        <div style="color: #ef4444; font-size: 3rem; margin-bottom: 20px;">
            <i class="fas fa-exclamation-triangle"></i>
        </div>
        <h3 style="margin-bottom: 10px; color: var(--text-primary);">Oops! Something went wrong</h3>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">
            We couldn't load the portfolio data. Please check your internet connection and try again.
        </p>
        <button onclick="location.reload()" class="btn btn-primary">
            <i class="fas fa-redo"></i>
            Try Again
        </button>
    `;
    
    document.body.appendChild(errorDiv);
}

// Utility function to debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add optimized scroll listener
window.addEventListener('scroll', debounce(() => {
    updateActiveNavLink();
}, 10));

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    
    // Press 'Enter' or 'Space' on focusable elements
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('btn')) {
        e.preventDefault();
        e.target.click();
    }
});

// Add focus management for accessibility
document.addEventListener('DOMContentLoaded', () => {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
        .nav-link:focus,
        .btn:focus,
        .social-link:focus {
            outline: 2px solid var(--primary-color);
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(style);
});

// Optimize images loading
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        img.addEventListener('error', () => {
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNTAgMTAwQzEyMi4zODYgMTAwIDEwMCAxMjIuMzg2IDEwMCAxNTBDMTAwIDE3Ny42MTQgMTIyLjM4NiAyMDAgMTUwIDIwMEMxNzcuNjE0IDIwMCAyMDAgMTc3LjYxNCAyMDAgMTUwQzIwMCAxMjIuMzg2IDE3Ny42MTQgMTAwIDE1MCAxMDBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0xNTAgMTMwQzE1OS4zODkgMTMwIDE2NyAxMzcuNjExIDE2NyAxNDdDMTY3IDE1Ni4zODkgMTU5LjM4OSAxNjQgMTUwIDE2NEMxNDAuNjExIDE2NCAxMzMgMTU2LjM4OSAxMzMgMTQ3QzEzMyAxMzcuNjExIDE0MC42MTEgMTMwIDE1MCAxMzBaIiBmaWxsPSIjNkI3Mjg2Ii8+Cjwvc3ZnPgo=';
            img.alt = 'Profile image not available';
        });
    });
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`Portfolio loaded in ${loadTime.toFixed(2)}ms`);
    });
}
