// Get the button element
const downloadButton = document.getElementById('downloadButton');

// Define the path to the zip file
const zipFilePath = '/path/to/your/zipfile.zip';

// Add a click event listener to the button
downloadButton.addEventListener('click', () => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = zipFilePath;
    link.download = 'your-zip-file.zip'; // Specify the desired filename for the downloaded file
    document.body.appendChild(link);

    // Trigger a click event on the anchor element
    link.click();

    // Clean up by removing the anchor element
    document.body.removeChild(link);
});
