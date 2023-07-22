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

    // Q3 radio buttons
    const q3Field = document.getElementsByName("q3");
    let q3Value = "";
    for (let value of q3Field) {
        if (value.checked) {
            q3Value = value.value;
        }
    }
    documentString += "3. Do you think AI technology has positively impacted your learning process or productivity in Computer Science coursework? " + q3Value + "<br>";

    // Q4 radio buttons
    const q4Field = document.getElementsByName("q4");
    let q4Value = "";
    for (let value of q4Field) {
        if (value.checked) {
            q4Value = value.value;
        }
    }
    documentString += "4. Have you used any AI-based code analysis or debugging tools? " + q4Value + "<br>";
    
    // Q5 radio buttons
    const q5Field = document.getElementsByName("q5");
    let q5Value = "";
    for (let value of q5Field) {
        if (value.checked) {
            q5Value = value.value;
        }
    }
    documentString += "5. How have AI tools impacted your ability to collaborate and engage in peer learning experiences within the context of Computer Science studies? " + q5Value + "<br>";

    // Q6 textarea
    const q6Field = document.getElementById("q6");
    const q6Value = q6Field.value;
    documentString += "6. Please provide details of how AI tools impacted your ability to collaborate and engage in peer learning experiences within the context of Computer Science studies. " + q6Value + "<br>";

    // Q7 radio buttons
    const q7Field = document.getElementsByName("q7");
    let q7Value = "";
    for (let value of q7Field) {
        if (value.checked) {
            q7Value = value.value;
        }
    }
    documentString += "7. Have you experienced any limitations or drawbacks when using AI for enhancing your learning process or productivity in Computer Science coursework? " + q7Value + "<br>";





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