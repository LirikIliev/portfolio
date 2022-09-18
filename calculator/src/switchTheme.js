const switchButton = document.querySelector('body main.main-section section.calculator-body section.button-section aside.optional-buttons nav.checkbox-navigation label.switch input.slider');
const cssFileName = document.querySelectorAll('link');
const switchNameTitle = document.querySelector('body main section.button-section aside.optional-buttons nav.checkbox-navigation span.slider-text')
switchButton.addEventListener('click', switchThemeColor);

function switchThemeColor(e) {
    if (e.target.checked) {
        cssFileName[1].href = 'http://127.0.0.1:5500/public/css/white/white.css';
        switchNameTitle.textContent = 'Switch to dark theme';
    } else {
        cssFileName[1].href = 'http://127.0.0.1:5500/public/css/dark/dark.css';
        switchNameTitle.textContent = 'Switch to white theme';
    };
};