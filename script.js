// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            updateActiveNavLink(this.getAttribute('href'));
        }
    });
});

// Update active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 300) {
            currentSection = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    if (currentSection) {
        const activeLink = document.querySelector(`.nav-link[href="#${currentSection}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});

// Update active navigation link
function updateActiveNavLink(href) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`.nav-link[href="${href}"]`).classList.add('active');
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.dataset.animation || 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and elements for animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.element-card, .relationship-card, .issue-card, .timeline-item, .importance-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Observe paragraphs and other content
    const contentElements = document.querySelectorAll('section p, section h3');
    contentElements.forEach(el => {
        if (!el.closest('.objectives') && !el.closest('.content-card')) {
            observer.observe(el);
        }
    });
});

// Add interactive effects to cards
document.querySelectorAll('.element-card, .relationship-card, .issue-card, .subtype-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add ripple effect on click
document.querySelectorAll('.nav-link, .element-card, .relationship-card').forEach(element => {
    element.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.backgroundColor = 'rgba(218, 165, 32, 0.6)';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'rippleEffect 0.6s ease-out';
        
        if (!this.style.position || this.style.position === 'static') {
            this.style.position = 'relative';
        }
    });
});

// Add paragraph animation on load
window.addEventListener('load', () => {
    const paragraphs = document.querySelectorAll('section > .container > p');
    paragraphs.forEach((p, index) => {
        p.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
        p.style.opacity = '0';
    });
});

// Add more visual feedback to links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add smooth parallax-like effect on header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.pageYOffset;
    header.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
});

// Add animations to list items
document.querySelectorAll('.objectives li, .importance-item').forEach((item, index) => {
    item.style.animation = `slideInRight 0.6s ease-out ${index * 0.1}s forwards`;
    item.style.opacity = '0';
});

// Add interactive feedback to objective items
document.querySelectorAll('.objectives li').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(218, 165, 32, 0.3)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'rgba(218, 165, 32, 0.1)';
    });
});

// Ripple effect animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        from {
            width: 20px;
            height: 20px;
            opacity: 1;
        }
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }

    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .nav-link {
        transition: all 0.3s ease;
    }

    .element-card, .relationship-card, .issue-card, .subtype-card {
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
`;
document.head.appendChild(style);

// Log initialization
console.log('🎭 Panitikan sa Anyong Tuluyan at Patula - Website loaded with enhanced animations! 🎭');
