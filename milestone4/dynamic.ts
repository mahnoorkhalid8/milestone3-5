const form = document.getElementById("resume") as HTMLFormElement;
const display = document.getElementById("dynamic-resume") as HTMLDivElement;

form.addEventListener("submit", (event: Event) =>{
    event.preventDefault();

    // input data
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const contact = (document.getElementById('contact') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

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

    if(display){
        display.innerHTML =dynamicResume;
    }
    else{
        console.error("Missing Info!!!");      
    }
})