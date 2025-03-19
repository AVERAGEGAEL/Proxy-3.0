document.getElementById('goButton').addEventListener('click', () => {
  const url = document.getElementById('urlInput').value;

  if (url) {
    // Use a CORS proxy with required headers
    const proxyUrl = `https://cors-anywhere.herokuapp.com/${url}`;

    // Fetch the website content and display it in the iframe
    fetch(proxyUrl, {
      headers: {
        'Origin': window.location.origin, // Add the Origin header
        'X-Requested-With': 'XMLHttpRequest' // Add the X-Requested-With header
      }
    })
      .then(response => response.text()) // Get the HTML content
      .then(html => {
        // Display the content in the iframe
        const proxyFrame = document.getElementById('proxyFrame');
        proxyFrame.srcdoc = html; // Use srcdoc to render the HTML
        proxyFrame.style.display = 'block';
      })
      .catch(error => {
        console.error('Error fetching the URL:', error);
        alert('Failed to load the website. Please check the URL and try again.');
      });
  } else {
    alert('Please enter a valid URL.');
  }
});
