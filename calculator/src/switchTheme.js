const switchButton = document.getElementById('reverse_theme');
const switchNameTitle = document.getElementById('theme_title');
switchButton.addEventListener('click', switchThemeColor);

const cssFileName = document.querySelectorAll('link');

const themeNames = {
  white: 'Switch to white theme',
  dark: 'Switch to dark theme',
};

function switchThemeColor(event) {
  const hasChecked = event.target.checked;
  if (hasChecked) {
    cssFileName[1].href = 'http://127.0.0.1:5500/public/css/white/white.css';
    switchNameTitle.textContent = themeNames.dark;
    return;
  }

  cssFileName[1].href = 'http://127.0.0.1:5500/public/css/dark/dark.css';
  switchNameTitle.textContent = themeNames.white;
}
