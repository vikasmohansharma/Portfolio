import React from 'react';
import axios from 'axios';

const DownloadButton = () => {
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginRight: '10px', // Add margin to create space between buttons
  };

  const filename = 'Vikas_Sharma_Resume.pdf'; // Hardcoded filename
  const fileUrl = 'resume.pdf'; // Hardcoded file URL

  const downloadFile = async () => {
    // Display confirmation dialog using browser's default dialog
    const isConfirmed = window.confirm('Do you want to continue with the download?');

    // Proceed with download if confirmed
    if (isConfirmed) {
      try {
        const response = await axios.get(fileUrl, { responseType: 'blob' });

        // Create a blob URL from the response data
        const url = window.URL.createObjectURL(new Blob([response.data]));

        // Create a link element and set its attributes
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);

        // Append the link to the DOM, click it, and remove it
        document.body.appendChild(link);
        link.click();

        // Clean up the URL object after the download
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error downloading the file:', error);
      }
    }
  };

  return (
    <button style={buttonStyle} onClick={downloadFile}>
      Download Resume
    </button>
  );
};

export default DownloadButton;
