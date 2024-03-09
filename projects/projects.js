
// Array of project objects containing project details
const projects = [
    { 
        title: "Generative Quanta Color Imaging",
        imageUrl: "https://via.placeholder.com/150",
        url: "https://vishal-s-p.github.io/projects/2023/proj_1.html",
        pub_venue:"IEEE Computer Vision and Pattern Recognition (CVPR), 2024",
        TLDR: "Colorization of one-bit images under adverse exposure conditions",
        authors: "Vishal Purohit, Junjie Luo, Yiheng Chi, Qi Guo, Stanley H. Chan and Qiang Qiu",
        authors_links: ['',"https://www.linkedin.com/in/junjiel",  "https://scholar.google.com/citations?user=WZYUtwQAAAAJ&hl=en",
    "https://www.qiguo.org/pi", "https://engineering.purdue.edu/ChanGroup/stanleychan.html", "https://web.ics.purdue.edu/~qqiu/"]
    },
    
];

// Function to dynamically create project blocks
function createProjectBlocks() {
    const projectsContainer = document.getElementById("project-list");

    projects.forEach(project => {
        const projectBlock = document.createElement("div");
        projectBlock.classList.add("project");

        const projectImage = document.createElement("img");
        projectImage.classList.add("project-image");
        projectImage.src = project.imageUrl;

        const projectContent = document.createElement("div");
        projectContent.classList.add("project-content");

        const projectTitle = document.createElement("a");
        projectTitle.classList.add("project-title");
        projectTitle.textContent = project.title;
        projectTitle.href = project.url;
        projectTitle.target = "_blank";

        const projectVenue = document.createElement("div");
        projectVenue.classList.add("project-venue");
        projectVenue.textContent = `${project.pub_venue}`;

        const projectTLDR = document.createElement("p");
        projectTLDR.classList.add("project-tldr");
        
        projectTLDR.textContent = `TLDR: ${project.TLDR}`;

        const authors = document.createElement("div");
        authors.classList.add("project-authors");
        // Split the authors string by ", " to handle each name
        const authorsList = project.authors.split(", ");
        authorsList.forEach((author, index) => {
            let authorElement;
            // If there's a link for this author, make it a hyperlink
            if (project.authors_links[index]) {
                authorElement = document.createElement("a");
                authorElement.href = project.authors_links[index];
                authorElement.target = "_blank";
            } else {
                // If no link, just use a span
                authorElement = document.createElement("span");
            }
            authorElement.textContent = author;
            authors.appendChild(authorElement);
            // Add a comma after the author's name if it's not the last one
            if (index < authorsList.length - 1) {
                authors.appendChild(document.createTextNode(", "));
            }
        });

        // Adding conditional links if they exist
        const linksContainer = document.createElement("div");
        linksContainer.classList.add("project-links");

        if (project.paper_link) {
            const paperLink = document.createElement("a");
            paperLink.href = project.paper_link;
            paperLink.textContent = "Paper";
            paperLink.classList.add("project-link");
            paperLink.target = "_blank";
            linksContainer.appendChild(paperLink);
        }

        if (project.code_link) {
            const codeLink = document.createElement("a");
            codeLink.href = project.code_link;
            codeLink.textContent = "Code";
            codeLink.classList.add("project-link");
            codeLink.target = "_blank";
            linksContainer.appendChild(codeLink);
        }

        if (project.dataset_link) {
            const datasetLink = document.createElement("a");
            datasetLink.href = project.dataset_link;
            datasetLink.textContent = "Dataset";
            datasetLink.classList.add("project-link");
            datasetLink.target = "_blank";
            linksContainer.appendChild(datasetLink);
        }

        // Append all the new elements to the projectContent
        projectContent.appendChild(projectTitle);
        projectContent.appendChild(projectVenue);
        projectContent.appendChild(projectTLDR);
        projectContent.appendChild(linksContainer);

        // Append the projectImage and projectContent to the projectBlock
        projectBlock.appendChild(projectImage);
        projectBlock.appendChild(projectContent);

        // Finally, append the projectBlock to the projectsContainer
        projectsContainer.appendChild(projectBlock);
    });
}

// Call the function to create project blocks when the page loads
window.onload = createProjectBlocks;
