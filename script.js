// Make the cookie follow the mouse
const cookie = document.getElementById('cookie');
document.addEventListener('mousemove', (e) => {
    cookie.style.top = `${e.clientY}px`; // Set the top position based on the mouse Y position
    cookie.style.left = `${e.clientX}px`; // Set the left position based on the mouse X position
});
