const container = document.querySelector("#container");
const contentTitle = document.querySelector("#contentTitle");
const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", showResponses);
let paragraphText;
// Form fields
const studentIDField = document.querySelector("#studentID");
const nameField = document.querySelector("#name");

form.addEventListener("submit", function (event) {
    event.preventDefault();
});

function showResponses() {
    const studentID = studentIDField.value;
    const name = nameField.value;
    contentTitle.innerHTML = "Your data has been successfully submitted!";
    form.parentNode.removeChild(form);
    appendMessage();
    appendStudentID(studentID);
    appendName(name);
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