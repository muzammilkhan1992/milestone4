const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

form.addEventListener('submit' ,(event: Event) => {
    event.preventDefault();

    const name=(document.getElementById('name') as HTMLInputElement).value
    const email=(document.getElementById('email') as HTMLInputElement).value
    const phone=(document.getElementById('phone') as HTMLInputElement).value
    const education=(document.getElementById('education') as HTMLInputElement).value
    const experience=(document.getElementById('experience') as HTMLInputElement).value
    const skills=(document.getElementById('skills') as HTMLInputElement).value

    const resumeHTml = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>name:</b><span contanteditable="true">${name}</span></p>
    <p><b>email:</b><span contanteditable="true">${email}</span></p>
    <p><b>phone:</b><span contanteditable="true">${phone}</span></p>

    <h3>Education</h3>
    <p contanteditable="true">${education}</p>

    <h3>Experience</h3>
    <p contanteditable="true">${experience}</p>

    <h3>Skills</h3>
    <p contanteditable="true">${skills}</p>
    `;

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTml;
    }else{
        console.error('the resume display element is missing.');
    }
});