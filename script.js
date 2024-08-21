// scripts.js
function toggleDetails(button) {
    const details = button.nextElementSibling;
    const isVisible = details.style.display === 'block';

    if (isVisible) {
        details.style.display = 'none';
        button.textContent = 'Read More';
    } else {
        details.style.display = 'block';
        button.textContent = 'Read Less';
    }
}
