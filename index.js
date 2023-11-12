function theme_toggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var button = document.getElementById('darkModeButton')
    button.classList.toggle('dark-mode');
}