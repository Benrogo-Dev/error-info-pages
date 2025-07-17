function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 100;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const sizes = ['small', 'medium', 'large'];
        star.classList.add(sizes[Math.floor(Math.random() * sizes.length)]);
        
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        star.style.animationDelay = Math.random() * 2 + 's';
        
        starsContainer.appendChild(star);
    }
}

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const numberOfParticles = 20;
    
    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        particle.style.left = Math.random() * 100 + '%';
        
        particle.style.animationDelay = Math.random() * 8 + 's';
        
        particlesContainer.appendChild(particle);
    }
}

async function fetchBareInformation() {
    const memoryElement = document.getElementById("memory");
    const versionElement = document.getElementById("version");

    await fetch("/bare/").then((resp) => {
        resp.text().then((textResp) => {
            const jsonResp = JSON.parse(textResp);
            memoryElement.innerText = jsonResp.memoryUsage;
            versionElement.innerText = jsonResp.project.version;
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    createStars();
    createParticles();
});

document.addEventListener('mousemove', function(e) {
    const stars = document.querySelectorAll('.star');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    stars.forEach((star, index) => {
        const speed = (index % 3 + 1) * 0.5;
        const xMovement = (x - 0.5) * speed;
        const yMovement = (y - 0.5) * speed;
        
        star.style.transform = `translate(${xMovement}px, ${yMovement}px)`;
    });
});