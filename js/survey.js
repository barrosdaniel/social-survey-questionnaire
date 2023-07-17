const container = document.querySelector("#container");
const contentTitle = document.querySelector("#contentTitle");
const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", showResponses);
let paragraphText;
// Form fields
const studentIDField = document.querySelector("#studentID");
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const phoneField = document.querySelector("#phone");

form.addEventListener("submit", function (event) {
    event.preventDefault();
});

function showResponses() {
    // Get form values
    const studentID = studentIDField.value;
    const name = nameField.value;
    const email = emailField.value;
    const phone = phoneField.value;
    // Display responses
    contentTitle.innerHTML = "Your data has been successfully submitted!";
    form.parentNode.removeChild(form); // Removes the form element
    appendMessage();
    appendStudentID(studentID);
    appendName(name);
    appendEmail(email);
    appendPhone(phone);
}

function appendParagraph(paragraphText) {
    const paragraph = document.createElement("p");
    if (paragraphText.textContent != "Your input is important to us and will assist with shaping the future of Education. Please see your responses below:" ) { 
        paragraph.style.marginBottom = "0px";
    }
    paragraph.appendChild(paragraphText);
    container.appendChild(paragraph);
}

function appendMessage() {
    paragraphText = document.createTextNode("Your input is important to us and will assist with shaping the future of Education. Please see your responses below:");
    appendParagraph(paragraphText);
}

function appendStudentID(studentID) {
    paragraphText = document.createTextNode("Student ID: " + studentID);
    appendParagraph(paragraphText);
}

function appendName(name) {
    paragraphText = document.createTextNode("Name: " + name);
    appendParagraph(paragraphText);
}

function appendEmail(email) {
    paragraphText = document.createTextNode("Email: " + email);
    appendParagraph(paragraphText);
}

function appendPhone(phone) {
    paragraphText = document.createTextNode("Phone: " + phone);
    appendParagraph(paragraphText);
}