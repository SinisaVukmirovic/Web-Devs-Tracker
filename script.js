const themeStyleSheet = document.querySelector('#themeStyleSheet');
const themes = document.querySelectorAll('nav .themes li');

themes.forEach(theme => {
    theme.addEventListener('click', changeTheme);
});

function changeTheme() {
    themeStyleSheet.setAttribute('href', `css/${this.dataset.theme}.css`);
}