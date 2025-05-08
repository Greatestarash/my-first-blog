document.addEventListener('DOMContentLoaded', () => {

    // --- Language Dropdown Functionality ---
    const dropdownToggle = document.querySelector('.language-dropdown .dropdown-toggle');
    const dropdownMenu = document.querySelector('.language-dropdown .dropdown-menu');
    const currentLanguageSpan = document.getElementById('current-language');

    if (dropdownToggle && dropdownMenu && currentLanguageSpan) {
        dropdownToggle.addEventListener('click', () => {
            dropdownMenu.classList.toggle('show');
        });

        // Close the dropdown if the user clicks outside of it
        window.addEventListener('click', (event) => {
            if (!event.target.closest('.language-dropdown')) {
                dropdownMenu.classList.remove('show');
            }
        });

        // Update the displayed language based on the current page
        const currentPageLang = document.documentElement.lang;
        const activeLangLink = dropdownMenu.querySelector(`.lang-link[data-lang="${currentPageLang}"]`);
        if (activeLangLink) {
             currentLanguageSpan.textContent = activeLangLink.textContent.trim().substring(0, 2).toUpperCase(); // Display initials like EN, DE, FA
             dropdownMenu.querySelectorAll('.lang-link').forEach(link => link.classList.remove('active'));
             activeLangLink.classList.add('active');
        } else {
             // Default to English if current language is not explicitly set or matched
             currentLanguageSpan.textContent = 'EN';
             const defaultLangLink = dropdownMenu.querySelector('.lang-link[data-lang="en"]');
             if (defaultLangLink) {
                  defaultLangLink.classList.add('active');
             }
        }
    }

    // --- Dark/Light Mode Toggle Functionality ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggle && body) {
        // Check for saved theme preference
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'light-mode') {
            body.classList.add('light-mode');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Change icon to moon
        } else {
             // Default to dark mode (no class needed)
             themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Change icon to sun
        }


        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');

            // Save theme preference in local storage
            if (body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light-mode');
                 themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Change icon to moon
            } else {
                localStorage.setItem('theme', 'dark-mode');
                 themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Change icon to sun
            }
        });
    }

    // --- Smooth Scrolling for Navigation Links (handled by CSS scroll-behavior: smooth;) ---
    // This section is commented out because CSS handles the smooth scroll effect.
    // If you need more complex scrolling behavior (e.g., offsetting for a fixed header),
    // you might need JavaScript, but the CSS property is simpler and often sufficient.
    /*
    document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    */
});
