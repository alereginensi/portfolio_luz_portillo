document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle Logic ---
    const toggleBtn = document.getElementById('theme-toggle');
    const icon = toggleBtn.querySelector('ion-icon');
    const body = document.body;

    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.setAttribute('name', 'sunny-outline');
    }

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            icon.setAttribute('name', 'sunny-outline');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.setAttribute('name', 'moon-outline');
            localStorage.setItem('theme', 'light');
        }
    });

    // --- Scroll to Top Logic ---
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- Security: Email Obfuscation ---
    // Protects email from basic scrapers by injecting it only after JS loads
    const user = 'mdemello019';
    const domain = 'gmail.com';
    const email = `${user}@${domain}`;

    // Update mailto links
    const emailLinks = document.querySelectorAll('.email-link');
    emailLinks.forEach(link => {
        link.setAttribute('href', `mailto:${email}`);
        // If the link was empty or had placeholder text, validly set it now
        if (link.classList.contains('email-text-insert')) {
            link.textContent = email;
        }
    });

    // Update text-only placeholders
    const emailTexts = document.querySelectorAll('.email-protect');
    emailTexts.forEach(span => {
        span.textContent = email;
    });
});
