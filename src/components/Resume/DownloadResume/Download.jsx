import React, { useState } from 'react';
import axios from 'axios';

const DownloadButton = ({ file }) => {
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
// eslint-disable-next-line
  const [filename, setFilename] = useState('Vikas_Sharma_Resume.pdf'); // Default filename

  const downloadFile = async () => {
    // Display confirmation dialog using browser's default dialog
    const isConfirmed = window.confirm('Do you want to continue with the download?');

    // Proceed with download if confirmed
    if (isConfirmed) {
      // Proceed with download logic
      try {
        const response = await axios.get(file, { responseType: 'blob' });
        console.log(response);

        // Create a blob URL from the response data
        const url = window.URL.createObjectURL(new Blob([response.data]));

        // Create a link element and set its attributes
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename); // Use the user-defined filename

        // Append the link to the DOM, click it, and remove it
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
