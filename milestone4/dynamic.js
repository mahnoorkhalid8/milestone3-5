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
    var dynamicResume = "\n    <h1><b>Editable Resume</b></h1>\n    <p><b>Name:</b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n    <p><b>Contact:</b><span contenteditable=\"true\"> ").concat(contact, "</span></p>\n    \n    <h2>Education</h2>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    \n    <h2>Experience</h2>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h2>Skills</h2>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    if (display) {
        display.innerHTML = dynamicResume;
    }
    else {
        console.error("Missing Info!!!");
    }
});
