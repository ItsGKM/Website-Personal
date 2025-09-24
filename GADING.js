document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Toggle menu mobile
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('-translate-y-full');
        mobileMenu.classList.toggle('translate-y-0');
    });

    // Sembunyikan menu mobile saat link diklik
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('-translate-y-full');
            mobileMenu.classList.remove('translate-y-0');
        });
    });

    // Animasi muncul saat scroll
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('opacity-0', 'transform', 'translate-y-12', 'transition-all', 'duration-1000', 'ease-out');
        observer.observe(section);
    });
});
