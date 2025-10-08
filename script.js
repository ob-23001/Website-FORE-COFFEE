// ==========================
// Mobile Navigation Toggle
// ==========================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ==========================
// Navbar Scroll Effect
// ==========================
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        header.style.background = '#006041';
    }
});

// ==========================
// Smooth Scroll for Anchor Links
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================
// Intersection Observer for Animations
// ==========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.menu-card, .gallery-item, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==========================
// Form Submission Handling (✅ with Notification)
// ==========================
const contactForm = document.querySelector('.contact-form form');
const notification = document.querySelector('#send-notification');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const input = contactForm.querySelector('input[type="text"]').value;

        if (input.trim() !== '') {
            // tampilkan notifikasi sukses
            if (notification) {
                notification.textContent = '✅ Message sent successfully!';
                notification.style.color = 'green';
                notification.style.opacity = '1';
            }

            contactForm.reset();

            // hilangkan notifikasi setelah 3 detik
            setTimeout(() => {
                if (notification) notification.textContent = '';
            }, 3000);
        } else {
            // tampilkan pesan error
            if (notification) {
                notification.textContent = '⚠️ Please write something before sending!';
                notification.style.color = 'red';
            }

            setTimeout(() => {
                if (notification) notification.textContent = '';
            }, 2500);
        }
    });
}

// ==========================
// Active Menu Link on Scroll
// ==========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==========================
// Gallery Lightbox Effect
// ==========================
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        console.log('Gallery item clicked:', img.src);
    });
});

// ==========================
// Add Loading Animation
// ==========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('Website loaded successfully! ☕');
