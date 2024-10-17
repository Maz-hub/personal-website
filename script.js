// Transparent navbar on scroll

function navbarScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-navbar');
            navbar.classList.add('navbarLucid');
        } else {
            navbar.classList.remove('bg-navbar');
            navbar.classList.remove('navbarLucid');
        }
    });
}

document.addEventListener('DOMContentLoaded', navbarScroll);

// Typing effect Hello, world!

function runTypingEffect() {
    const text = "Hello, world!";
    const typingElement = document.getElementById("typing-text");
    const typingDelay = 200;

    typeText(text, typingElement, typingDelay)
}

function typeText(text, typingElement, typingDelay) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            typingElement.textContent += text.charAt(i);
        }, typingDelay * i)
    }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);

// Projects modal texts

function openModal(imageSrc, imageTitle, imageDescription, projectLink) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('imageModalLabel').textContent = imageTitle;
    document.getElementById('modalDescription').textContent = imageDescription;
    document.getElementById('modalButton').href = projectLink;
  }


