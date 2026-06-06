document.addEventListener('DOMContentLoaded', () => {
    const welcomeElement = document.getElementById('welcome');
    const searchInput = document.getElementById('search-input');
    const username = "HrauW1ng";
    const text = `Welcome ${username}`;
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            welcomeElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    document.addEventListener('keydown', (e) => {
        if (e.target !== searchInput && !e.ctrlKey && !e.metaKey && !e.altKey) {
            searchInput.focus();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            searchInput.value = "";
            searchInput.blur();
        }
    });
});