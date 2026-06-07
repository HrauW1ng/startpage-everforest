document.addEventListener('DOMContentLoaded', () => {
    const welcomeElement = document.getElementById('welcome');
    const searchInput = document.getElementById('search-input');
    const searchForm = document.getElementById('search-form');
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');

    const username = "HrauW1ng";
    const text = `Welcome, ${username} :D`;
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            welcomeElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    function updateDateTime() {
        const now = new Date();
        clockElement.textContent = now.toLocaleTimeString('ru-RU', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        const options = { weekday: 'long', day: 'numeric', month: 'long' };
        dateElement.textContent = now.toLocaleDateString('en-US', options);
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();

    searchForm.addEventListener('submit', (e) => {
        const query = searchInput.value.trim();
        
        if (query.startsWith('y!')) {
            e.preventDefault();
            const searchTerm = query.substring(2).trim();
            window.location.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchTerm)}`;
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.target !== searchInput && !e.ctrlKey && !e.metaKey && !e.altKey && e.key.length === 1) {
            searchInput.focus();
        }
        if (e.key === "Escape") {
            searchInput.value = "";
            searchInput.blur();
        }
    });
});