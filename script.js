// ===== ПЛАВНОЕ ПОЯВЛЕНИЕ ЭЛЕМЕНТОВ ПРИ СКРОЛЛЕ =====

// Функция для проверки, виден ли элемент
function isElementVisible(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9
    );
}

// Функция для активации анимаций
function activateAnimations() {
    const elements = document.querySelectorAll('.reveal');
    
    elements.forEach(element => {
        if (isElementVisible(element)) {
            element.classList.add('active');
        }
    });
}

// ===== ПЛАВНАЯ ПРОКРУТКА ДЛЯ ССЫЛОК =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// ===== ОБРАТНЫЙ ОТСЧЁТ =====

function updateCountdown() {
    const weddingDate = new Date('2026-04-18T17:00:00');
    const now = new Date();
    const diff = weddingDate - now;
    
    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        
        if (daysElement) daysElement.textContent = days;
        if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
        if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
    }
}

// ===== ИНИЦИАЛИЗАЦИЯ ВСЕХ ФУНКЦИЙ =====

document.addEventListener('DOMContentLoaded', function() {
    // Запускаем анимации
    activateAnimations();
    
    // Обновляем обратный отсчёт
    updateCountdown();
    
    // Обновляем обратный отсчёт каждую минуту
    setInterval(updateCountdown, 60000);
    
    console.log('Свадебный сайт загружен! 💍');
});

// Обработчик скролла для анимаций
window.addEventListener('scroll', activateAnimations);
window.addEventListener('resize', activateAnimations);