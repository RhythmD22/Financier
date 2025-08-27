// This script ensures all navigation uses the correct URLs
// and helps with PWA functionality

// Only intercept navigation when necessary for GitHub Pages compatibility
document.addEventListener('DOMContentLoaded', function () {
    // Get all links in the document
    const links = document.querySelectorAll('a[href]');

    // Add click event listener to each link
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            // Get the href attribute
            const href = this.getAttribute('href');

            // Check if it's an internal link (not starting with http)
            if (href && !href.startsWith('http') && !href.startsWith('#')) {
                // Check if we're in the wrong context (root instead of /Financier/)
                // and the link doesn't have the prefix
                if ((window.location.pathname === '/' || window.location.pathname === '/index.html') &&
                    !href.startsWith('/Financier/')) {
                    // Prevent default navigation
                    e.preventDefault();

                    // Navigate with proper prefix
                    window.location.href = '/Financier/' + href;
                }
                // For all other cases, let the browser handle navigation naturally
                // This preserves URL encoding and allows proper relative URL resolution
            }
        });
    });
});