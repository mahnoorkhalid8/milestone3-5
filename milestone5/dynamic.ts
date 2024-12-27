const form = document.getElementById("resume") as HTMLFormElement;
const display = document.getElementById("dynamic-resume") as HTMLDivElement;
const shareableResume = document.getElementById("shareable-resume") as HTMLDivElement;
const shareableResumeLink = document.getElementById("sharing-link") as HTMLAnchorElement;
const buttonPdf = document.getElementById("download-button") as HTMLButtonElement;

form.addEventListener("submit", (event: Event) =>{
    event.preventDefault();

    // input data
    const username = (document.getElementById('username') as HTMLInputElement).value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const contact = (document.getElementById('contact') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLTextAreaElement).value
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value

    // data saving locally from the above variables
    const allData = {
        name,
        email,
        contact,
        education,
        experience,
        skills
    };
    localStorage.setItem(username, JSON.stringify(allData));

    // generating dynamic resume
    const dynamicResume = `
    <h1><b>Editable Resume</b></h1>
    <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
    <p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
    <p><b>Contact:</b><span contenteditable="true"> ${contact}</span></p>
    
    <h2>Education</h2>
    <p contenteditable="true">${education}</p>
    
    <h2>Experience</h2>
    <p contenteditable="true">${experience}</p>

    <h2>Skills</h2>
    <p contenteditable="true">${skills}</p>
    `;

    // display dynamic resume
    display.innerHTML =dynamicResume;

    // shareable link along with username
    const shareableUrl = `${window.location.origin} ?username = ${encodeURIComponent(username)}`;

    // link display
    shareableResume.style.display = 'block';
    shareableResumeLink.href = shareableUrl;
    shareableResumeLink.textContent = shareableUrl;
});

 // download PDF
buttonPdf.addEventListener('click', ()=> {
    window.print();              //print and save
});       

// fill the resume with username url
window.addEventListener("DOMContentLoaded", ()=> {
    const urlParam = new URLSearchParams(window.location.search);
    const username = urlParam.get('username');

    if (username){
        const saveData = localStorage.getItem(username);

        if (saveData) {
            const allData = JSON.parse (saveData);
    (document.getElementById('username') as HTMLInputElement).value = username;
    (document.getElementById('name') as HTMLInputElement).value = allData.name;
    (document.getElementById('email') as HTMLInputElement).value = allData.email;
    (document.getElementById('contact') as HTMLInputElement).value =allData.contact;
    (document.getElementById('education') as HTMLTextAreaElement).value = allData.education;
    (document.getElementById('experience') as HTMLTextAreaElement).value =allData.experience;
    (document.getElementById('skills') as HTMLTextAreaElement).value = allData.skills;
        }
    }
});
