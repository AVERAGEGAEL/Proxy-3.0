document.getElementById('goButton').addEventListener('click', () => {
  const url = document.getElementById('urlInput').value;

  if (url) {
    // Use a CORS proxy to bypass restrictions
    const proxyUrl = `https://cors-anywhere.herokuapp.com/${url}`;

    // Display the content in the iframe
    const proxyFrame = document.getElementById('proxyFrame');
    proxyFrame.src = proxyUrl;
    proxyFrame.style.display = 'block';
  } else {
    alert('Please enter a valid URL.');
  }
});
