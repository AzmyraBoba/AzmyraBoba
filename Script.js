// Mobile Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission (Mock Email/Scheduling)
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventDate = document.getElementById('event-date').value;
    const eventTime = document.getElementById('event-time').value;
    const message = document.getElementById('message').value;

    // Mock email send (replace with backend logic)
    console.log('Form Data:', { name, email, eventDate, eventTime, message });
    formMessage.textContent = 'Thank you! We’ll contact you soon to confirm your event.';
    formMessage.style.color = '#00d4ff';
    
    // Reset form
    form.reset();
});

// Star Animation (Galaxy Effect)
function createStars() {
    const body = document.body;
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.background = '#fff';
        star.style.width = `${Math.random() * 2}px`;
        star.style.height = star.style.width;
        star.style.borderRadius = '50%';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.opacity = Math.random();
        star.style.animation = `twinkle ${2 + Math.random() * 3}s infinite`;
        body.appendChild(star);
    }
}

// Twinkle Animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 1; }
    }
`;
document.head.appendChild(style);

createStars();