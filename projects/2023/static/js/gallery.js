document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.image-gallery');
    const galleryWidth = gallery.scrollWidth;
    const containerWidth = document.querySelector('.gallery-container').offsetWidth;
    const initialOffset = galleryWidth - containerWidth;

    // Update the 'to' value in the animation to ensure looping works correctly
    gallery.style.animationName = 'none'; // Reset animation
    gallery.offsetHeight; // Trigger reflow
    gallery.style.animationName = ''; // Re-enable animation

    document.styleSheets[0].insertRule(`
        @keyframes slide {
            from {
                transform: translateX(0%);
            }
            to {
                transform: translateX(-${initialOffset}px);
            }
        }
    `, document.styleSheets[0].cssRules.length);
});
function updateGallery(setId) {
    const imageSets = {
        set1: ["horizontal1_1.jpg", "horizontal1_2.jpg", "horizontal1_3.jpg"],
        set2: ["horizontal2_1.jpg", "horizontal2_2.jpg", "horizontal2_3.jpg"],
        // Define more sets as needed
    };

    const dynamicGallery = document.getElementById('dynamicGallery');
    dynamicGallery.innerHTML = ''; // Clear existing images

    imageSets[setId].forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = "Dynamic Image";
        dynamicGallery.appendChild(img);
    });
}