// Переключатель темы
document.getElementById('theme-toggle-btn').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    // Сохраняем состояние темы в localStorage
    const isDarkTheme = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDarkTheme);
});

// Проверяем сохраненную тему при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-theme');
    }

    const cards = document.querySelectorAll(".game-card");

    cards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((centerX - x) / centerX) * -10;

            card.style.transform = `perspective(800px) scale(1.2) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(800px) scale(1) rotateX(0deg) rotateY(0deg)";
        });
    });
});