
// Array of project objects containing project details
const projects = [
    { 
        title: "Solving General Inverse Problems using Multi-Diffusion Priors",
        // imageUrl: "assets/paper_assets/2024/posterior_sampling/posterior_title_fig.jpg",
        url: "./",
        pub_venue:"Under Review",
        TLDR: "Leveraging multiple priors to solve severly ill-posed inverse problems in imaging",
        authors: "Vishal Purohit, Qiang Qiu",
        authors_links: ["https://vishal-s-p.github.io/","https://web.ics.purdue.edu/~qqiu/"]
    ,
    paper_link:"./",
    code_link:"./",
    project_website: "./"
    },
    { 
        title: "Posterior Sampling Via Langevin Dynamics Based on Generative Priors",
        imageUrl: "assets/paper_assets/2024/posterior_sampling/posterior_title_fig.jpg",
        // url: "projects/2024/posterior_sampling_via_langevin_dynamic_based_on_generative_priors.html",
        pub_venue:"Preprint",
        TLDR: "Posterior sampling for diverse image synthesis.",
        authors: "Vishal Purohit*, Matthew Repasky*, Jianfeng Lu, Qiang Qiu, Yao Xie, Xiuyuan Cheng",
        authors_links: ["https://vishal-s-p.github.io/","https://mrepasky3.github.io/","https://services.math.duke.edu/~jianfeng/", "https://web.ics.purdue.edu/~qqiu/", "https://www2.isye.gatech.edu/~yxie77/", "https://services.math.duke.edu/~xiuyuanc/"]
    ,
    paper_link:"./",
    code_link:"./",
    project_website: "./"
    },
    { 
        title: "Merging Tweedies: Zero-Shot Image Recovery via Measurement Decomposition and Diffusion Priors",
        imageUrl: "assets/paper_assets/2023/DMD/dmd_cover.png",
        url: "./",
        pub_venue:"Under Review",
        TLDR: "Can diffusion models be used to solve sparse linear inverse problems?",
        authors: "Vishal Purohit, Ze Wang, Qiang Qiu",
        authors_links: ["https://vishal-s-p.github.io/","https://zewang95.github.io/", "https://web.ics.purdue.edu/~qqiu/"]
    ,
    paper_link:"./",
    code_link:"./",
    project_website: "./"
    },
    { 
        title: "Generative Quanta Color Imaging",
        imageUrl: "assets/paper_assets/2023/generative_quanta_color/Generative_Quata_Color_Cover.png",
        url: "projects/2023/generative_quanta_color.html",
        pub_venue:"IEEE Computer Vision and Pattern Recognition (CVPR), 2024",
        TLDR: "Colorization of one-bit images under adverse exposure conditions",
        authors: "Vishal Purohit, Junjie Luo, Yiheng Chi, Qi Guo, Stanley H. Chan, Qiang Qiu",
        authors_links: ["https://vishal-s-p.github.io/","https://www.linkedin.com/in/junjiel",  "https://scholar.google.com/citations?user=WZYUtwQAAAAJ&hl=en",
    "https://www.qiguo.org/pi", "https://engineering.purdue.edu/ChanGroup/stanleychan.html", "https://web.ics.purdue.edu/~qqiu/"]
    ,
    paper_link:"https://arxiv.org/abs/2403.19066",
    // code_link:"./",
    // dataset_link:"./",
    project_website: "https://vishal-s-p.github.io/projects/2023/generative_quanta_color.html"
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

        if (project.project_website) {
            const projectWebsite = document.createElement("a");
            projectWebsite.href = project.project_website;
            projectWebsite.textContent = "Project Website";
            projectWebsite.classList.add("project-link");
            projectWebsite.target = "_blank";
            linksContainer.appendChild(projectWebsite);
        }
        // Append all the new elements to the projectContent
        projectContent.appendChild(projectTitle);
        projectContent.appendChild(projectVenue);
        projectContent.appendChild(authors);
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
