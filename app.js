const themeButton = document.getElementById('themeButton');
const dropdownSelector = document.getElementById('dropdown');
const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;
const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
    body.classList.add(theme);
    isSolar && body.classList.add('solar');
}

themeButton.addEventListener("click", showThemeSelector);
darkButton.addEventListener("click", hideThemeSelector);
lightButton.addEventListener("click", hideThemeSelector);
solarButton.addEventListener("click", hideThemeSelector);

function showThemeSelector () {
    dropdownSelector.style.display = "flex";
    console.log("focussed");
    return;
}

function hideThemeSelector () {
    dropdownSelector.style.display = "none";
    console.log("focus lost");
    return;
}

darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
};

lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
};

solarButton.onclick = () => {
    if (body.classList.contains('solar')) {
        body.classList.remove('solar');
        localStorage.removeItem('isSolar');
    } else {
        body.classList.add('solar');
        localStorage.setItem('isSolar', true);
    }
};