var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTml = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>name:</b><span contanteditable=\"true\">".concat(name, "</span></p>\n    <p><b>email:</b><span contanteditable=\"true\">").concat(email, "</span></p>\n    <p><b>phone:</b><span contanteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p contanteditable=\"true\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p contanteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contanteditable=\"true\">").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTml;
    }
    else {
        console.error('the resume display element is missing.');
    }
});
