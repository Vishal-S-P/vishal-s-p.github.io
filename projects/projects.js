
// Array of project objects containing project details
const projects = [
    { 
        title: "Project 1",
        imageUrl: "https://via.placeholder.com/150",
        description: "Description for Project 1",
        url: "vishal-s-p.github.io/projects/2023/proj_1.html"
    },
    { 
        title: "Project 2",
        imageUrl: "https://via.placeholder.com/150",
        description: "Description for Project 2",
        url: "http://example.com/project2"
    },
    { 
        title: "Project 3",
        imageUrl: "https://via.placeholder.com/150",
        description: "Description for Project 3",
        url: "http://example.com/project3"
    }
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

        const projectDescription = document.createElement("div");
        projectDescription.classList.add("project-description");
        projectDescription.textContent = project.description;

        projectContent.appendChild(projectTitle);
        projectContent.appendChild(projectDescription);

        projectBlock.appendChild(projectImage);
        projectBlock.appendChild(projectContent);

        projectsContainer.appendChild(projectBlock);
    });
}

// Call the function to create project blocks when the page loads
window.onload = createProjectBlocks;
