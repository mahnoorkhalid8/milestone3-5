var form = document.getElementById("resume");
var display = document.getElementById("dynamic-resume");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // input data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generating dynamic resume
    var dynamicResume = "\n    <h1><b>Personal Resume</b></h1>\n    <p><b>Name: ".concat(name, "</b></p>\n    <p><b>Email: ").concat(email, "</b></p>\n    <p><b>Contact: ").concat(contact, "</b></p>\n    \n    <h2>Education</h2>\n    <p>").concat(education, "</p>\n    \n    <h2>Experience</h2>\n    <p>").concat(experience, "</p>\n\n    <h2>Skills</h2>\n    <p>").concat(skills, "</p>\n    ");
    if (display) {
        display.innerHTML = dynamicResume;
    }
    else {
        console.error("Missing Info!!!");
    }
});
