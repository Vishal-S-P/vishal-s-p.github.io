document.addEventListener('DOMContentLoaded', function() {
    // Sample blog post data
    const posts = [
        {
            title: "3D Diffusion Models",
            content: "",
            imageUrl: "https://via.placeholder.com/600x400",
            linkUrl: "https://www.example.com"
        },
        {
            title: "Multimodal Large Language Models",
            content: "",
            imageUrl: "https://via.placeholder.com/600x400",
            linkUrl: "https://www.example.com"
        },
        {
            title: "Parameter Efficient Fine-Tuning",
            content: "",
            imageUrl: "https://via.placeholder.com/600x400",
            linkUrl: "https://www.example.com"
        },
        {
            title: "Information Geometry",
            content: "",
            imageUrl: "https://via.placeholder.com/600x400",
            linkUrl: "https://www.example.com"
        },
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

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('cardblog-visible');
        } else {
          entry.target.classList.remove('cardblog-visible');
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.1
    });
  
    const cards = document.querySelectorAll('.cardblog');
    cards.forEach(card => observer.observe(card));
  });