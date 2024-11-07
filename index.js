document.addEventListener('DOMContentLoaded', () => {
    let themeToggle = document.getElementById('theme-toggle');
    let body = document.body;

    // Check for saved theme preference or default to dark mode
    let currentTheme = localStorage.getItem('theme') || 'dark';
    body.classList.toggle('dark-mode', currentTheme === 'dark');
    updateButtonText(currentTheme === 'dark');

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        let isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        updateButtonText(isDarkMode);
    });

    function updateButtonText(isDarkMode) {
        themeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    }
});