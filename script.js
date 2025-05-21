// Mobile Menu Toggle (unchanged)
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll (unchanged)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            formMessage.textContent = 'Thank you! Your booking request has been sent.';
            formMessage.style.color = '#00d4ff';
            form.reset();
        } else {
            formMessage.textContent = 'Oops! Something went wrong. Please try again.';
            formMessage.style.color = '#ff4444';
        }
    })
    .catch(error => {
        formMessage.textContent = 'Error: Unable to send request. Check your connection.';
        formMessage.style.color = '#ff4444';
    });
});

// Star Animation (unchanged)
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

const style = document.createElement('style');
style.innerHTML = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 1; }
    }
`;
document.head.appendChild(style);

createStars();
