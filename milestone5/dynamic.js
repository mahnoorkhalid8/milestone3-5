var form = document.getElementById("resume");
var display = document.getElementById("dynamic-resume");
var shareableResume = document.getElementById("shareable-resume");
var shareableResumeLink = document.getElementById("sharing-link");
var buttonPdf = document.getElementById("download-button");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // input data
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // data saving locally from the above variables
    var allData = {
        name: name,
        email: email,
        contact: contact,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(allData));
    // generating dynamic resume
    var dynamicResume = "\n    <h1><b>Editable Resume</b></h1>\n    <p><b>Name:</b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n    <p><b>Contact:</b><span contenteditable=\"true\"> ").concat(contact, "</span></p>\n    \n    <h2>Education</h2>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    \n    <h2>Experience</h2>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h2>Skills</h2>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // display dynamic resume
    display.innerHTML = dynamicResume;
    // shareable link along with username
    var shareableUrl = "".concat(window.location.origin, " ?username = ").concat(encodeURIComponent(username));
    // link display
    shareableResume.style.display = 'block';
    shareableResumeLink.href = shareableUrl;
    shareableResumeLink.textContent = shareableUrl;
});
// download PDF
buttonPdf.addEventListener('click', function () {
    window.print(); //print and save
});
// fill the resume with username url
window.addEventListener("DOMContentLoaded", function () {
    var urlParam = new URLSearchParams(window.location.search);
    var username = urlParam.get('username');
    if (username) {
        var saveData = localStorage.getItem(username);
        if (saveData) {
            var allData = JSON.parse(saveData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = allData.name;
            document.getElementById('email').value = allData.email;
            document.getElementById('contact').value = allData.contact;
            document.getElementById('education').value = allData.education;
            document.getElementById('experience').value = allData.experience;
            document.getElementById('skills').value = allData.skills;
        }
    }
});
