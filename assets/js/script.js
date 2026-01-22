// 1. Fungsi Scroll Reveal (Memunculkan elemen saat di-scroll)
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// 2. Mengecilkan Navbar saat di-scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 50) {
        nav.classList.add('py-2', 'shadow-md');
        nav.classList.remove('py-4');
    } else {
        nav.classList.remove('py-2', 'shadow-md');
        nav.classList.add('py-4');
    }
});