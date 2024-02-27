document.addEventListener('DOMContentLoaded', function() {
    // Sample blog post data
    const posts = [
        {
            title: "First Post",
            content: "This is my first blog post. Welcome to my blog!",
            imageUrl: "https://via.placeholder.com/600x400",
            linkUrl: "https://www.example.com"
        },
        {
            title: "Second Post",
            content: "Here's the second post. Thanks for reading!",
            imageUrl: "https://via.placeholder.com/600x400",
            linkUrl: "https://www.example.com"
        }
    ];

    const blogPostsContainer = document.getElementById('blog-posts');

    // Function to create HTML for a single blog post
    function createPostHTML(post) {
        return `
            <article>
                <h2>${post.title}</h2>
                <img src="${post.imageUrl}" alt="${post.title}">
                <p>${post.content}</p>
                <a href="${post.linkUrl}" target="_blank">Read more</a>
            </article>
        `;
    }

    // Function to render all blog posts
    function renderPosts(posts) {
        const postsHTML = posts.map(post => createPostHTML(post)).join('');
        blogPostsContainer.innerHTML = postsHTML;
    }

    // Initial render
    renderPosts(posts);
});