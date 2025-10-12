
//feature 1: contact button
const contact_btn= document.getElementById('contact-button');
const contact_para= document.querySelector("#contact-info");

contact_btn.addEventListener("click", function(){
    const email= "prashant42vz@gmail.com";
    contact_para.textContent= email;
    contact_btn.style.display= 'none';
});

// feature 2: project data
const myProjects= [
    { title: "Portfolio Website", description: "A personal portfolio page built using HTML,CSS and JavaScript"},
    { title: "Study Planner App", description: "A concept for an app to help students manage their exam schedules." },
  { title: "Data Analysis Project", description: "An upcoming project focusing on data science and machine learning." }
];

const projectContainer= document.getElementById("project-container");

//loop
myProjects.forEach(function(project){

    const projectCard= document.createElement('div');
    projectCard.className= "project-card"; //adding class for styling

    //creating title heading
    const titleElement= document.createElement('h3');
    titleElement.textContent= project.title;

    //creating the description paragraph
    const paraElement= document.createElement('p');
    paraElement.textContent= project.description;

    projectCard.appendChild(titleElement);
    projectCard.appendChild(paraElement);

    //append projectCard to projectContainer
    projectContainer.appendChild(projectCard);
});