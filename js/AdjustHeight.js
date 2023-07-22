/*
Central Queensland University
COIT12207 - Internet Applications (2023 Term 2)
Campus: External
Assignment 1 - Social Innovation Survey
Student ID: 12184305
Student Name: Daniel Barros
*/
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
