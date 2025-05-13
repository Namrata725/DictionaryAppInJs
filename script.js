
    const toggleBtn = document.getElementById('modeToggleBtn');

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        toggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });

