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
    <h1><b>Personal Resume</b></h1>
    <p><b>Name: ${name}</b></p>
    <p><b>Email: ${email}</b></p>
    <p><b>Contact: ${contact}</b></p>
    
    <h2>Education</h2>
    <p>${education}</p>
    
    <h2>Experience</h2>
    <p>${experience}</p>

    <h2>Skills</h2>
    <p>${skills}</p>
    `;

    if(display){
        display.innerHTML =dynamicResume;
    }
    else{
        console.error("Missing Info!!!");      
    }
})