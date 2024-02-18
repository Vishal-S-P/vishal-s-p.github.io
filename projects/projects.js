
// Array of project objects containing project details
const projects = [
    { 
        title: "Project 1",
        imageUrl: "https://via.placeholder.com/150",
        url: "https://vishal-s-p.github.io/projects/2023/proj_1.html",
        abstract: "Good learning experience."
    },
    { 
        title: "Project 2",
        imageUrl: "https://via.placeholder.com/150",
        url: "https://vishal-s-p.github.io/projects/2023/proj_2.html",
        
    },
    
];

// Function to dynamically create project blocks
function createProjectBlocks() {
    const projectsContainer = document.getElementById("project-list");

    projects.forEach(project => {
        const projectBlock = document.createElement("div");
        projectBlock.classList.add("project");

        const projectContent = document.createElement("div");
        projectContent.classList.add("project-content");

        // Changed from a div to an a element for hyperlink
        const projectTitle = document.createElement("a");
        projectTitle.classList.add("project-title");
        projectTitle.textContent = project.title;
        projectTitle.href = project.url; // Assuming project.url contains the URL to open
        projectTitle.target = "_blank"; // Optional: Opens the link in a new tab
        const projectImage = document.createElement("img");
        projectImage.classList.add("project-image");
        projectImage.src = project.imageUrl;

        // const projectDescription = document.createElement("div");
        // projectDescription.classList.add("project-description");
        // projectDescription.textContent = project.description;

        // Abstract in italics
        const projectAbstract = document.createElement("div");
        projectAbstract.classList.add("project-abstract");
        // Create an italic element to wrap the abstract text
        const italicText = document.createElement("i");
        italicText.textContent = project.abstract; // Use project.abstract or similar
        projectAbstract.appendChild(italicText);


        projectContent.appendChild(projectTitle);
        projectContent.appendChild(projectAbstract);

        projectBlock.appendChild(projectImage);
        projectBlock.appendChild(projectContent);

        projectsContainer.appendChild(projectBlock);
    });
}

// Call the function to create project blocks when the page loads
window.onload = createProjectBlocks;
