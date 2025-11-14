// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// Navegación activa al hacer scroll
const sections = [...document.querySelectorAll('section, main')];
const links = [...document.querySelectorAll('.navlinks a[href^="#"]')];

const setActive = () => {
    const y = window.scrollY + 140; // offset por header
    let current = null;
    for (const s of sections) {
        const top = s.offsetTop; const bottom = top + s.offsetHeight;
        if (y >= top && y < bottom) { current = '#' + (s.id || 'top'); break; }
    }
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === current));
};
setActive();
window.addEventListener('scroll', setActive);

// Smooth scroll para anclas internas
document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const el = document.querySelector(a.getAttribute('href'));
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
});

// Validación básica del formulario (demo)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form).entries());
    // Simulación de envío
    status.textContent = 'Enviando…';
    setTimeout(() => {
        status.textContent = `¡Gracias, ${data.name}! Te responderé a ${data.email} pronto.`;
        form.reset();
    }, 700);
});