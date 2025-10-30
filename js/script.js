//feature 1: contact button
const contact_btn = document.getElementById('contact-button');
const contact_para = document.querySelector("#contact-info");

contact_btn.addEventListener("click", function() {
  const email = "prashant42vz@gmail.com";
  contact_para.textContent = email;
  contact_btn.style.display = 'none';
});

// project loader
const projectContainer = document.getElementById("project-container");

// fn to fetch data
async function loadProjects() {
  try {
    const response = await fetch('projects.json'); // fetching file
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const myProjects = await response.json(); // Parse the JSON

    // we have data now, calling function to display
    displayProjects(myProjects);
  } catch (error) {
    console.error('Could not fetch projects:', error);
    projectContainer.textContent = 'Failed to load projects.';
  }
}

// handles HTML creation
function displayProjects(myProjects) {
  // clear any loading text
  projectContainer.innerHTML = ''; 

  myProjects.forEach(function(project) {
    const projectCard = document.createElement('div');
    projectCard.className = "project-card";

    const titleElement = document.createElement('h3');
    titleElement.textContent = project.title;

    const paraElement = document.createElement('p');
    paraElement.textContent = project.description;

    // adding links
    const linksContainer = document.createElement('div');
    linksContainer.className = 'project-links';

    if (project.repoUrl) {
      const repoLink = document.createElement('a');
      repoLink.href = project.repoUrl;
      repoLink.textContent = 'View Code';
      repoLink.target = '_blank'; 
      linksContainer.appendChild(repoLink);
    }

    if (project.liveUrl) {
      const liveLink = document.createElement('a');
      liveLink.href = project.liveUrl;
      liveLink.textContent = 'Live Demo';
      liveLink.target = '_blank';
      linksContainer.appendChild(liveLink);
    }

    projectCard.appendChild(titleElement);
    projectCard.appendChild(paraElement);
    projectCard.appendChild(linksContainer);

    projectContainer.appendChild(projectCard);
  });
}

// calling function to start 
loadProjects();