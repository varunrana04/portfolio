/* ============================================
   VARUN RANA - PORTFOLIO JAVASCRIPT
   Premium Animations & Interactivity
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initNavigation();
    initScrollAnimations();
    initProjectFilters();
    initExpandableProjects();
    initSkillBars();
    initBackToTop();
    initSmoothScroll();
    initCounters();
});

/* ===== PARTICLE BACKGROUND ===== */
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.color = ['#7c3aed', '#06d6a0', '#fbbf24'][Math.floor(Math.random() * 3)];
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }

    const init = () => {
        particles = [];
        const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    };

    const connectParticles = () => {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    ctx.beginPath();
                    ctx.strokeStyle = '#7c3aed';
                    ctx.globalAlpha = 0.1 * (1 - distance / 150);
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        }
    };

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        connectParticles();
        animationId = requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();

    window.addEventListener('resize', () => {
        resize();
        init();
    });
}

/* ===== NAVIGATION ===== */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    navToggle?.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle?.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (navToggle && navLinks && !navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

/* ===== SCROLL ANIMATIONS ===== */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 100);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
}

/* ===== PROJECT FILTERS ===== */
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach((card, index) => {
                const categories = card.getAttribute('data-category');

                if (filter === 'all' || categories.includes(filter)) {
                    card.classList.remove('hidden');
                    card.style.animation = 'none';
                    setTimeout(() => {
                        card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`;
                    }, 10);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

/* ===== EXPANDABLE PROJECT CARDS ===== */
function initExpandableProjects() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't toggle if clicking on a link
            if (e.target.closest('a')) return;

            // Close other expanded cards
            projectCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('expanded');
                }
            });

            // Toggle current card
            card.classList.toggle('expanded');
        });
    });
}

/* ===== SKILL BARS ===== */
function initSkillBars() {
    const skillCards = document.querySelectorAll('.skill-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.skill-bar-fill');
                bars.forEach((bar, index) => {
                    setTimeout(() => {
                        const width = bar.getAttribute('data-width');
                        bar.style.width = width + '%';
                    }, index * 150);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    skillCards.forEach(card => observer.observe(card));
}

/* ===== BACK TO TOP ===== */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        backToTopBtn?.classList.toggle('visible', window.scrollY > 500);
    });

    backToTopBtn?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ===== SMOOTH SCROLL ===== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

/* ===== COUNTER ANIMATION ===== */
function initCounters() {
    const counters = document.querySelectorAll('.hero-stat .number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.innerText;
                const isPercentage = text.includes('%');
                const hasPlus = text.includes('+');
                const numericValue = parseInt(text.replace(/\D/g, ''));

                let count = 0;
                const duration = 2000;
                const increment = numericValue / (duration / 16);

                const updateCount = () => {
                    count += increment;
                    if (count < numericValue) {
                        target.innerText = Math.ceil(count) + (isPercentage ? '%' : hasPlus ? '+' : '');
                        requestAnimationFrame(updateCount);
                    } else {
                        target.innerText = text;
                    }
                };

                updateCount();
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

/* ===== MAGNETIC HOVER EFFECT ===== */
document.querySelectorAll('.btn, .project-card, .skill-card').forEach(el => {
    el.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        this.style.setProperty('--mouse-x', `${x * 0.1}px`);
        this.style.setProperty('--mouse-y', `${y * 0.1}px`);
    });

    el.addEventListener('mouseleave', function () {
        this.style.setProperty('--mouse-x', '0px');
        this.style.setProperty('--mouse-y', '0px');
    });
});

/* ===== CONSOLE EASTER EGG ===== */
console.log(`
%c⚡ Varun Rana - Portfolio
%c
Data Scientist | AI/ML Engineer | Quant Trader

📧 varunrana.business@gmail.com
💼 linkedin.com/in/varun-rana-771a9917a
🐙 github.com/varunrana04

Building intelligent systems that matter.
`,
    'color: #7c3aed; font-size: 20px; font-weight: bold;',
    'color: #a1a1aa; font-size: 12px;'
);

/* ===== FADE IN ANIMATION KEYFRAME ===== */
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
