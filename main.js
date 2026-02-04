document.getElementById('generate-btn').addEventListener('click', () => {
    const lottoNumbersContainer = document.getElementById('lotto-numbers');
    lottoNumbersContainer.innerHTML = '';
    const numbers = generateLottoNumbers();
    numbers.forEach(number => {
        const circle = document.createElement('div');
        circle.className = 'lotto-number';
        circle.textContent = number;
        circle.style.backgroundColor = getRandomColor();
        lottoNumbersContainer.appendChild(circle);
    });
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Theme switching logic
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

// Function to update the button text
function updateThemeToggleButtonText() {
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '화이트 모드';
    } else {
        themeToggleBtn.textContent = '다크 모드';
    }
}

// Apply theme on load
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
}
// Initial button text update
updateThemeToggleButtonText();

themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
    // Update button text after theme change
    updateThemeToggleButtonText();
});
