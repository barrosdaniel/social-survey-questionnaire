function submitResponsesButtonClick() {
    // Add Results page boilerplate to page string
    let documentString = "";
    documentString += "<h1 class='title'>Survey of the use of AI in Computer Science Education </h1>";
    documentString += "<div class='container' id='container'>";
    documentString += "<h2 class='content-title' id='contentTitle'>Your data has been successfully submitted.</h2>";
    documentString += "<p>Your input is valuable to us and will assist with shaping the future of Education. Please see your answers below:</p>";
    documentString += "<p>";

    // Add responses to page string
    // Student ID
    const studentIDField = document.getElementById("studentID");
    const studentIDValue = studentIDField.value;
    documentString += "Student ID: " + studentIDValue + "<br>";
    // Student Name
    const studentNameField = document.getElementById("name");
    const studentNameValue = studentNameField.value;
    documentString += "Student Name: " + studentNameValue + "<br>";
    // Email Address
    const emailAddressField = document.getElementById("email");
    const emailAddressValue = emailAddressField.value;
    documentString += "Email Address: " + emailAddressValue + "<br>";
    
    // Email Address
    const phoneNumberField = document.getElementById("phone");
    const phoneNumberValue = phoneNumberField.value;
    documentString += "Email Address: " + phoneNumberValue + "<br>";

    // Q1 radio buttons
    const q1Field = document.getElementsByName("q1");
    let q1Value = "";
    for (let value of q1Field) {
        if (value.checked) {
            q1Value = value.value;
        }
    }
    documentString += "1. Have you used AI-powered tools to enhance your learning process or productivity in Computer Science coursework? " + q1Value + "<br>";
    // Q2 checkboxes
    const q2Field = document.getElementsByName("q2");
    let q2Value = [];
    for (let value of q2Field) {
        if (value.checked) {
            q2Value.push(value.value);
        }
    }
    documentString += "2. Which AI tools have you found most useful for enhancing your learning process or productivity in Computer Science coursework? " + q2Value.toString() + "<br>";





    documentString += "<\p>";

    // Add closing tags to page string
    documentString += "<h3>Thank you for taking the time to complete our survey!</h3>";
    documentString += "<\div>";

    // Write page string to document and apply global stylesheet
    document.write(documentString);
    applyStylesheet();
}

function applyStylesheet() {
    let styleSheetLink = document.createElement("link");
    styleSheetLink.rel = "stylesheet";
    styleSheetLink.href = "css/styles.css";
    document.head.appendChild(styleSheetLink);
}