// Sample blog post data (you can replace this with your actual data)
const blogPosts = [
    { title: "First Blog Post", content: "This is the content of the first blog post." },
    { title: "Second Blog Post", content: "This is the content of the second blog post." },
    { title: "Third Blog Post", content: "This is the content of the third blog post." }
];

// Function to render blog posts
function renderBlogPosts() {
    const blogPostsContainer = document.getElementById("blog-posts");

    blogPosts.forEach(post => {
        const postCard = document.createElement("div");
        postCard.classList.add("card-blogs");

        const titleElement = document.createElement("h2");
        titleElement.textContent = post.title;

        const contentElement = document.createElement("p");
        contentElement.textContent = post.content;

        postCard.appendChild(titleElement);
        postCard.appendChild(contentElement);

        blogPostsContainer.appendChild(postCard);
    });
}

// Call the render function when the page loads
window.onload = renderBlogPosts;
