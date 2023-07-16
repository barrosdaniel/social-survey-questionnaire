window.addEventListener('DOMContentLoaded', adjustHeight);

function adjustHeight() {
    const body = document.querySelector('body');
    const bodyHeight = body.offsetHeight;
    const windowHeight = window.innerHeight;

    if (bodyHeight < windowHeight) {
        body.style.height = '100vh';
    } else {
        body.style.height = '100%';
    }
}
