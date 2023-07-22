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
    
    // Q5 selection box
    const q5Field = document.getElementsByName("q5")[0];
    let q5Value = q5Field.value;
    documentString += "5. How have AI tools impacted your ability to collaborate and engage in peer learning experiences within the context of Computer Science studies? " + q5Value + "<br>";


    // Q6 textarea
    const q6Field = document.getElementById("q6Details");
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

    // Q8 textarea
    const q8Field = document.getElementById("q8Details");
    const q8Value = q8Field.value;
    documentString += "8. Please provide details of any limitations or drawbacks you experienced when using AI tools for enhancing your learning process or productivity in Computer Science coursework? " + q8Value + "<br>";

    // Q9 radio buttons
    const q9Field = document.getElementsByName("q9");
    let q9Value = "";
    for (let value of q9Field) {
        if (value.checked) {
            q9Value = value.value;
        }
    }
    documentString += "9. Do you think AI tools can contribute to bridging the gap between theoretical Computer Science concepts and real-world applications? " + q9Value + "<br>";

    // Q10 radio buttons
    const q10Field = document.getElementsByName("q10");
    let q10Value = "";
    for (let value of q10Field) {
        if (value.checked) {
            q10Value = value.value;
        }
    }
    documentString += "10. Have you used AI-powered LLM tools, such as ChatGPT, Google BARD, or New Bing, to enhance your learning process or productivity in Computer Science coursework? " + q10Value + "<br>";

    // Q11 checkboxes
    const q11Field = document.getElementsByName("q11");
    let q11Value = [];
    for (let value of q11Field) {
        if (value.checked) {
            q11Value.push(value.value);
        }
    }
    documentString += "11. If yes, what were the main tasks you used LLM tools, such as ChatGPT, Google BARD, or New Bing, to complete? " + q11Value.toString() + "<br>";   
    
    // Q12 textarea
    const q12Field = document.getElementById("q12Details");
    const q12Value = q12Field.value;
    documentString += "12. If you chose Other in the previous question, please provide description/s. " + q12Value + "<br>";




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